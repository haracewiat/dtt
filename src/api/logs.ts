import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { Log } from '@/api/models';
import * as api from '@/api/api';
type FeedType= 'global' | 'random';

@Module({
    dynamic: true,
    namespaced: true,
    name: 'logs',
    store,
})

class LogsModule extends VuexModule {
    public feed: Log[] = [];
    public similarFeed: string[] = [];
    public type: string = 'normal';
    public size: string = 'square';

    @Mutation
    public setFeed(logs: Log[]) {
        this.feed = logs;
    }
    @Mutation
    public setType(type: string) {
        if (this.type === 'normal' && this.type !== type) {
            this.feed.forEach((log) => {
                log.download_url = log.download_url + '?' + type;
            });
        } else {
            this.feed.forEach((log) => {
                log.download_url = log.download_url.replace( /\?.*/g, '');
            });
            if (type !== 'normal') {
                this.feed.forEach((log) => {
                    log.download_url = log.download_url + '?' + type;
                });
            } else {
                this.feed.forEach((log) => {
                    log.download_url = log.download_url;
                });
            }
        }
        this.type = type;
    }

    @Mutation
    public setSize(size: string) {
        this.size = size;
    }


    @Action({commit: 'setFeed'})
    public async refreshFeed(feedType: FeedType) {
        if (feedType === 'global') {
            const feed = await api.getGlobalFeed();
            return feed;
        }
        if (feedType === 'random') {
            const random = await api.getRandom();
            return random;
        }
    }
    @Action({})
    public async getType() {
       return this.type;
    }
    @Action({})
    public async getSimilar(id: string) {
        const similarFeed = await api.getSimilar(id, this.type);
        return similarFeed;
    }
}

export default getModule(LogsModule);

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
    public currentPage: number = 1;

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
    public setSize(width: string, height: string) {
        this.feed.forEach((log) => {
            log.download_url = log.download_url.replace( /\d+\/\d+$/g, '');
        });
        this.feed.forEach((log) => {
            log.download_url = log.download_url + width + '/' + height;
        });
    }

    @Mutation
    public setPage(sign: string) {
        switch (sign) {
            case '+':
                if (this.currentPage < 10) {
                    this.currentPage++;
                }
                break;
            case '-':
                if (this.currentPage > 1) {
                    this.currentPage--;
                }
                break;
            default:
                break;
        }

    }


    @Action({commit: 'setFeed'})
    public async refreshFeed(feedType: FeedType) {
        if (feedType === 'global') {
            const feed = await api.getGlobalFeed();
            if (feed.entries) {
                // this.setSize('500', '300');
            }
            return feed;
        }
        if (feedType === 'random') {
            const random = await api.getRandom();
            return random;
        }
    }

    @Action({commit: 'setFeed'})
    public async updateFeedPage() {
        const feed = await api.getPage(this.currentPage);
        return feed;
    }

    @Action({})
    public async getInformation(id: string) {
        const log = await api.getInformation(id);
        return log;
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

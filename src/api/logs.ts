import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { Log, RandomResponse } from '@/api/models';
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

    @Mutation
    public setFeed(logs: Log[]) {
        this.feed = logs;
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
    public async getSimilar(id: string) {
        const link = await api.getSimilar(id);
    }
}

export default getModule(LogsModule);

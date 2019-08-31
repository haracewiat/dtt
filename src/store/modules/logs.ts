import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { Log, DetailsResponse } from '../models';
import * as api from '@/store/api';

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

    @Mutation
    public setDetails(logs: Log[]) {
        this.feed = logs;
    }

    @Action({commit: 'setFeed'})
    public async refreshFeed(FeedType: string) {
        if (FeedType === 'global') {
            const globalFeed = await api.getGlobalFeed();
            return globalFeed.entries;
        } else if (FeedType === 'random') {
            const globalFeed = await api.getRandomFeed();
            return globalFeed.entries;
        }
    }

    @Action({commit: 'setDetails'})
    public async loadDetails(description: string) {
        const globalFeed = await api.fetchDetails(description);
        return globalFeed.entries;
    }
}

export default getModule(LogsModule);

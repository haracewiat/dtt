import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { Log } from '../models';
import * as api from '@/store/api';

@Module({
    dynamic: true,
    namespaced: true,
    name: 'logs',
    store,
})
class LogsModule extends VuexModule {
    public globalFeed: Log[] = [];

    @Mutation
    public setGlobalFeed(logs: Log[]) {
        this.globalFeed = logs;
    }

    @Action({commit: 'setGlobalFeed'})
    public async refreshGlobalFeed() {
        const globalFeed = await api.getGlobalFeed();
        return globalFeed.entries;
    }
}

export default getModule(LogsModule);

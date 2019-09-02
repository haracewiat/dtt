import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { CategoriesResponse, Category } from '../models';
import * as api from '@/store/api';

@Module({
    dynamic: true,
    namespaced: true,
    name: 'categories',
    store,
})
class CategoryModule extends VuexModule {
    public categories: Category[] = [];

    @Mutation
    public setCategories(categories: Category[]) {
        this.categories = categories;
    }

    @Action({commit: 'setCategories'})
    public async loadCategories() {
        const categories = await api.getCategories();
        return categories.entries;
    }

}

export default getModule(CategoryModule);

<template>
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">DTT Project</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <a class="nav-link" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Category</a>
          </li>
        </ul>
      </div>


    </nav>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LogPreview from '@/components/logs/LogPreview.vue';
import categories from '@/store/modules/categories';
import { Log, Category } from '@/store/models';
import { LogsResponse, CategoriesResponse } from '@/store/models';
import * as api from '@/store/api';

@Component({
  components: {
    LogPreview,
  },
})
export default class extends Vue {
  public categories: Category[] = [];

  public created() {
    categories.loadCategories().then(() => {
      this.categories = categories.categories;
    });
  }
}
</script>


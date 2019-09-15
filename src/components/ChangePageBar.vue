<template>
    <div class="container mb-5">
      <div class="row justify-content-md-center">
        <div class="col-md-1 btn-group">
          <button v-on:click="setPage('-')" type="button" class="btn btn-light">
            <i class="fas fa-arrow-left"></i>
          </button>
          <button v-on:click="setPage('+')" type="button" class="btn btn-light">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>   <!-- End of column -->
      </div>   <!-- End of row -->
    </div>   <!-- End of container -->
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import logs from '../api/logs';
@Component
export default class ChangePage extends Vue {
public currentPage: number = logs.currentPage;

 public setPage(sign: string) {
    logs.setPage(sign);
    this.currentPage = logs.currentPage;
    logs.updateFeedPage();
  }

  @Watch('currentPage', { immediate: true, deep: true })
  public onPropertyChanged(value: number, oldValue: number) {
    // console.log('Page changed');
  }
}
</script> 
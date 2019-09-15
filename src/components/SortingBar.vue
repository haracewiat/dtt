<template>
    <div class="container mb-3">
      <div class="row justify-content-between">
        
        <div class="col-md-2 btn-group">
          <button v-on:click='sortById()' type="button" class="btn btn-light" :class="{'active' : activeID}" >
            ID 
            <i :class="[{'fas fa-long-arrow-alt-down' : !sortedAscendingID}, {'fas fa-long-arrow-alt-up' : sortedAscendingID}]"></i>
          </button>
          <button v-on:click='sortByAuthor()' type="button" class="btn btn-light" :class="{'active' : !activeID}">
            Author
            <i :class="[{'fas fa-long-arrow-alt-down' : !sortedAscendingAuthor}, {'fas fa-long-arrow-alt-up' : sortedAscendingAuthor}]"></i>
          </button>
        </div>   <!-- End of column -->

        <div class="col-md-5 btn-group ">  
          <button v-on:click="setType('normal')" type="button" class="btn btn-light" :class="{'active' : type === 'normal'}">
            Normal
          </button>
          <button v-on:click="setType('grayscale')" type="button" class="btn btn-light" :class="{'active' : type === 'grayscale'}">
            Grayscale
          </button>
          <button v-on:click="setType('blur')" type="button" class="btn btn-light" :class="{'active' : type === 'blur'}">
            Blur
          </button>
          <button v-on:click="setType('grayscale&blur')" type="button" class="btn btn-light" :class="{'active' : type === 'grayscale&blur'}">
            Grayscale &amp; Blur
          </button>
        </div>   <!-- End of column -->

      </div>   <!-- End of row -->
    </div>   <!-- End of container -->
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import logs from '../api/logs';
@Component
export default class SortingBar extends Vue {
  public sortedAscendingID: boolean = true;
  public sortedAscendingAuthor: boolean = false;
  public activeID: boolean = true;
  public type: string = 'normal';

  public setType(type: string) {
    logs.setType(type);
    this.type = type;
  }
  public getType() {
    return logs.getType().toString();
  }
  public sortById() {
    if (this.sortedAscendingID) {
      logs.feed.sort((a, b) => a.id > b.id ? -1 : 1);
      this.sortedAscendingID = false;
    } else {
      logs.feed.sort((a, b) => a.id < b.id ? -1 : 1);
      this.sortedAscendingID = true;
    }
    if (!this.activeID) {
      this.activeID = true;
    }
  }
  public sortByAuthor() {
    if (this.sortedAscendingAuthor) {
      logs.feed.sort((a, b) => a.author > b.author ? -1 : 1);
      this.sortedAscendingAuthor = false;
    } else {
      logs.feed.sort((a, b) => a.author < b.author ? -1 : 1);
      this.sortedAscendingAuthor = true;
    }
    if (this.activeID) {
      this.activeID = false;
    }
  }
}
</script> 
<template>
  <div class='container'>
    <div class="row">
      <div class="col">
        <button v-on:click='sortById()' type="button" class="btn btn-light" :class="{'active' : activeID}" >
          ID 
          <i :class="[{'fas fa-long-arrow-alt-down' : !sortedAscendingID}, {'fas fa-long-arrow-alt-up' : sortedAscendingID}]"></i>
        </button>
        <button v-on:click='sortByAuthor()' type="button" class="btn btn-light" :class="{'active' : !activeID}">
          Author
          <i :class="[{'fas fa-long-arrow-alt-down' : !sortedAscendingAuthor}, {'fas fa-long-arrow-alt-up' : sortedAscendingAuthor}]"></i>
        </button>
      </div>   <!-- End of column -->
      <div class="col">  
        <button v-on:click="setType('normal')" type="button" class="btn btn-light" :class="{'active' : type === 'normal'}">
          Normal
        </button>
        <button v-on:click="setType('grayscale')" type="button" class="btn btn-light" :class="{'active' : type === 'grayscale'}">
          Grayscale
        </button>
        <button v-on:click="setType('blur')" type="button" class="btn btn-light" :class="{'active' : type === 'blur'}">
          Blur
        </button>
      </div>   <!-- End of column -->
    </div>   <!-- End of row -->

    <div class='row'>

      <LogPreview class='card col-md-4'
      v-for="log in feed"
      :log="log"
      :key="log.download_url"
      ></LogPreview>
     
    </div>   <!-- End of row -->
  </div>   <!-- End of container -->


  
</template>

<style>
.card img{
  width: 300px;
  height: 200px;
}
a{
  text-decoration: none;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import LogPreview from '@/components/LogPreview.vue';
import { LogsResponse, Log, LogsType } from '../api/models';
import logs from '../api/logs';
@Component({
  components: {
    HelloWorld,
    LogPreview,
  },
})
export default class extends Vue {
  public feed: Log[] = [];
  public sortedAscendingID: boolean = true;
  public sortedAscendingAuthor: boolean = false;
  public activeID: boolean = true;
  public type: string = 'normal';

  public created() {
    logs.refreshFeed('global').then(() => {
      this.feed = logs.feed;
    });
  }
  public setType(type: string) {
    logs.setType(type);
    this.type = type;
  }
  public getType() {
    return logs.getType().toString();
  }
  public sortById() {
    if (this.sortedAscendingID) {
      this.feed.sort((a, b) => a.id > b.id ? -1 : 1);
      this.sortedAscendingID = false;
    } else {
      this.feed.sort((a, b) => a.id < b.id ? -1 : 1);
      this.sortedAscendingID = true;
    }
    if (!this.activeID) {
      this.activeID = true;
    }
  }
  public sortByAuthor() {
    if (this.sortedAscendingAuthor) {
      this.feed.sort((a, b) => a.author > b.author ? -1 : 1);
      this.sortedAscendingAuthor = false;
    } else {
      this.feed.sort((a, b) => a.author < b.author ? -1 : 1);
      this.sortedAscendingAuthor = true;
    }
    if (this.activeID) {
      this.activeID = false;
    }
  }
}
</script> 

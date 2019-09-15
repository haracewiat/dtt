<template>
<div>
  <SortingBar></SortingBar>
  <div class='container cards'>
    <div class='row justify-content-between'>

      <LogPreview class='col-md-4'
      v-for="log in feed"
      :log="log"
      :key="log.download_url"
      ></LogPreview>
     
    </div>   <!-- End of row -->    
  </div>   <!-- End of container -->
</div>

  
</template>

<style>

a{
  text-decoration: none;
}
.cards{
  min-height: 100vh;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import LogPreview from '@/components/LogPreview.vue';
import SortingBar from '@/components/SortingBar.vue';
import { LogsResponse, Log, LogsType } from '../api/models';
import logs from '../api/logs';
@Component({
  components: {
    HelloWorld,
    LogPreview,
    SortingBar,
  },
})
export default class extends Vue {
  public feed: Log[] = [];


  public created() {
    logs.refreshFeed('global').then(() => {
      this.feed = logs.feed;
    });
  }

}
</script> 

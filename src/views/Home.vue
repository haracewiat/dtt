<template>
  <div>
  

      
      <LogPreview
      v-for="log in feed"
      :log="log"
      :key="log.id"
      ></LogPreview>
     
     <!--
     <img 
      v-for="log in feed" 
      v-bind:src="log.download_url" 
      :key="log.id"/>
      -->
      
  </div>


  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import LogPreview from '@/components/LogPreview.vue';
import { LogsResponse, Log } from '../api/models';
import logs from '../api/logs';
@Component({
  components: {
    HelloWorld,
    LogPreview,
  },
})
export default class extends Vue {
  public feed: Log[] = [];
  public created() {
    logs.refreshGlobalFeed().then(() => {
      this.feed = logs.globalFeed;
    });
  }
}
</script> 

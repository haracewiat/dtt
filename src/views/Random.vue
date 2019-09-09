<template>
  <div class='container'>
    <div class='row'>

       <img :src='url'>
     
    </div>   <!-- End of row -->
  </div>   <!-- End of container -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import LogPreview from '@/components/LogPreview.vue';
import { LogsResponse, Log, RandomResponse } from '../api/models';
import logs from '../api/logs';

@Component({
  components: {
    HelloWorld,
    LogPreview,
  },
})
export default class extends Vue {
  public url: string = '';
  public feed: Log[] = [];

  public async created() {
    const randomUrl = await logs.refreshFeed('random');
    if (randomUrl !== undefined) {
        this.url = randomUrl.toString();
    }
  }
}
</script> 

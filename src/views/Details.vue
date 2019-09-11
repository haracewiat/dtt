<template>
  <div class='container'>
    <div class='row'>
      <div class="col-md-6">
        <img style="width:500px;height:auto;" :src="this.$attrs.log.download_url"/>
      </div>
      <div class="col-md-6">
        <h1>by {{this.$attrs.log.author}}</h1>
        <p>Original size: {{this.$attrs.log.width}} x {{this.$attrs.log.height}}</p>
        <p>Source: {{this.$attrs.log.url}}</p>
        <p>ID: {{this.$attrs.log.id}}</p>
      </div> 
    <div class="row">
      <div class="col-md-4 col-sm-6">
        <img class="small" :src="this.$attrs.log.download_url + '?grayscale'"/>
      </div>
      <div class="col-md-4 col-sm-6">
        <img class="small" :src="this.$attrs.log.download_url + '?blur=10'"/>
      </div>
      <div class="col-md-4 col-sm-6">
        <img class="small" :src="this.$attrs.log.download_url + '?grayscale&blur=10'"/>
      </div>
    </div>
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

  public async created() {
    // catch similar photos
  }
}
</script> 


<style>
.small{
  width: 300px;
  height: auto;
}
</style>

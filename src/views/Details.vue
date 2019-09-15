<template>
  <div class='container'>
    
    <div class='row justify-content-between main-row'>
      <div class="col-md-6 h-50">
        <div class="card">
          <img  alt="main image" class="card-img-top main-image rounded" :src="this.$attrs.log.download_url"/>
        </div>
      </div>
      <div class="col-md-6">
        <h1>by {{this.$attrs.log.author}}</h1>
        <p>Original size: {{this.$attrs.log.width}} x {{this.$attrs.log.height}}</p>
        <p>Source: {{this.$attrs.log.url}}</p>
        <p>ID: {{this.$attrs.log.id}}</p>
      </div> 
    </div>   <!-- End of row -->

    <div class='row justify-content-between my-5'>
      <div v-for="url in similarFeed" :key="url" class="col-md-4">
        <div class="card">
          <img :src="url" alt="similar image" class="card-img-top rounded">
        </div>
      </div>   <!-- End of column -->    
    </div>   <!-- End of row -->

  </div>   <!-- End of container -->
</template>

<style>
.main-image{
  min-height: 20rem;
}
</style>

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
public similarFeed: object = [];

  public async created() {
    this.similarFeed = await logs.getSimilar(this.$attrs.id);
  }
}
</script> 


<style>
.small{
  width: 300px;
  height: auto;
}
</style>

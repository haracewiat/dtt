<template>
<div class='container cards'>
    <div class='row justify-content-between mb-5 pb-5'>
      <div class="col-md-4">
        <img src="https://picsum.photos/500/300?random=1" class="card-img-top" alt="Lorem Picsum image">
      </div>
      <div class="col-md-4">
        <img src="https://picsum.photos/500/300?random=2" class="card-img-top" alt="Lorem Picsum image">
      </div>
      <div class="col-md-4">
        <img src="https://picsum.photos/500/300?random=3" class="card-img-top" alt="Lorem Picsum image">
      </div>        
    </div>   <!-- End of row -->    
  </div>   <!-- End of container -->  
</template>

<style>
a {
  text-decoration: none!important;
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
@Component
export default class extends Vue {
}
</script> 

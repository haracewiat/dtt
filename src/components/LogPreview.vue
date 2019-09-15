<template>
  <router-link :to="{name: 'details', params: {log: log, id: log.id}}"> 
    <div class="card bg-light my-2" style="width: 100%">
      <!-- <img :src="log.download_url" class="card-img-top" alt="Lorem Picsum image"> --> 
      <!-- For better performance this will be used for all pictures --> 
      <img src="https://picsum.photos/id/0/5616/3744" class="card-img-top" alt="Lorem Picsum image">

      
      <div class="card-body row">
        <div class="mr-auto author">{{log.author}}</div>
        <div class="id btn btn-outline-primary btn-sm pull-xs-right">#{{log.id}}</div>
      </div>
    </div>
  </router-link>
</template>

<style>
    .card-img-top {
    height: 13rem;
    object-fit: cover;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Log, LogsType } from '@/api/models';
import logs from '../api/logs';

@Component
export default class LogPreview extends Vue {
    @Prop() public log?: Log;
}

</script> 
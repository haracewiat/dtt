<template>
  <router-link :to="{name: 'details', params: {log: log, id: log.id}}"> 
    <div class="card bg-light" style="width: 20rem">
      <img :src="log.download_url" class="card-img-top" alt="Lorem Picsum image">
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
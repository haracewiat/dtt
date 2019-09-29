<template>
  <router-link :to="{name: 'details', params: {log: log, id: log.id}}"> 
    <div class="card bg-light my-2" style="width: 100%">
      <img :src="log.download_url" class="card-img-top" alt="Lorem Picsum image">

      <div class="card-body row align-items-center mx-1">
        <span class="mr-auto">{{log.author}}</span>
        <span class="badge badge-pill badge-secondary">#{{log.id}}</span>
      </div>
    </div>
  </router-link>
</template>

<style>
.card-img-top {
  height: 13rem;
  object-fit: cover;
}
.badge {
  font-size: 1rem;
  font-weight: 500;
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
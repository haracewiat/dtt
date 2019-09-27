<template>
  <div class='container cards'>
    <div class="row">
      <div class="col">
        <h2>Welcome to PicLib!</h2>
      </div>
    </div>
    <div class="row">
      <div class="col my-5 mx-5 px-5">
        <p style="text-align:justify">Have a look at out photo library and pick you favourite picture! Choose between full colour, grayscale, blur and grayscale&amp;blur
           categories! Each photo is available in all 4 versions, so it's up to you which one you choose.
        </p>
        <p style="text-align:justify">
           Feeling overwhelmed with the choice? No problem! You can use the Random tab to let us pick something for you.
        </p>
      </div>
    </div>
    <div class='row justify-content-between pb-5'>
      <div v-for="id in exampleLogs" :id="id" :key="id" class="col-md-4">
        <router-link :to="{name: 'details', params: {id: id}}">
          <img :src="'https://picsum.photos/id/' + id + '/500/300'" class="card-img-top rounded shadow-lg" alt="Lorem Picsum image">
        </router-link>
      </div>
    </div>   <!-- End of row -->   
    <div class="row justify-content-md-center mb-5">
      <router-link to="/random">
        <button type="button" class="btn badge-pill text-light bg-success btn-lg rounded-50 mx-3 shadow">
          Random
        </button>
      </router-link>
      <span v-on:click="setType('normal')"><router-link to="/normal">
        <button type="button" class="btn badge-pill text-light bg-success btn-lg rounded-50 mx-3 shadow">
          See all
          <i class="fas fa-long-arrow-alt-right"></i>
        </button>
      </router-link></span>
    </div> 
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
  public exampleLogs: string[] = [];

  public async created() {
    this.exampleLogs = await logs.getRandomArray(3);
  }
}
</script> 

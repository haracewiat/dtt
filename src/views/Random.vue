<template>
  <div class='container mb-5 py-5'>
    <div class='row  justify-content-around'>
      <div class="col-md-6">
        <router-link :to="{name: 'details', params: {log: this.log, id: this.id}}">
          <img :src='url' class="rounded shadow-lg">
        </router-link>
      </div> 
      <div class="col-md-6 align-self-center">
        <div class="row justify-content-md-center">
          <div id="randomMessage">
            <div class="h3">
              You can't decide which picture to pick?
            </div>
            <div class="h2">
              Let us decide for you!
            </div>
            <p>
              Here you will find a random picture from our database.  
              You can click it to see more information and other variations of the image. 
            </p>
            <div class="h4">
              Not happy with the pick?
            </div>
            <div class="h4">
              Try again!
            </div>
          </div>
        </div>
        <div class="row justify-content-md-center align-self-end">
          <button v-on:click='shuffle()' type="button" class="btn btn-success shadow">Shuffle!</button>
        </div>
      </div>   
    </div>   <!-- End of row -->
  </div>   <!-- End of container -->
</template>

<style>
#randomMessage{
  margin: 3%;
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
  public url: string = '';
  public feed: Log[] = [];
  public id: string = '0';
  public log: Log = {} as Log;

  public async created() {
    const randomUrl = await logs.refreshFeed('random');
    this.shuffle();
  }
  public async shuffle() {
    const randomUrl = await logs.refreshFeed('random');
    if (randomUrl) {
        this.url = randomUrl.toString();
        this.id = this.url.replace( /\D+/g, '');
        this.id = this.id.replace( /500300/g, '');
        logs.getSimilar(this.id);
        this.getLog(this.id);
    }
  }

  public async getLog(id: string) {
    this.log = await logs.getInformation(id);
  }
}
</script> 

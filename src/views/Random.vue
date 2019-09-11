<template>
  <div class='container'>
    <div class='row  justify-content-around'>
      <div class="col-md-6">
          <img :src='url'>
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
          <button v-on:click='shuffle()' type="button" class="btn btn-success">Shuffle!</button>
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
  public id: string = '';

  public async created() {
  // call function shuffle to avoid repeats
    const randomUrl = await logs.refreshFeed('random');
    if (randomUrl !== undefined) {
        this.url = randomUrl.toString();
        this.id = this.url.replace( /\D+/g, '');
        this.id = this.id.replace( /500300/g, '');
        logs.getSimilar(this.id);
    }
  }
  public async shuffle() {
    // further function to make it reusable
    const randomUrl = await logs.refreshFeed('random');
    if (randomUrl !== undefined) {
        this.url = randomUrl.toString();
    }
  }
}
</script> 

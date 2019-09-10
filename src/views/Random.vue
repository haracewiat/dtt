<template>
  <div class='container'>
    <div class='row'>

       <img :src='url'>
     
    </div>   <!-- End of row -->

    <button v-on:click='shuffle()' type="button" class="btn btn-success">Shuffle</button>

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
  public id: string = '';

  public async created() {
  // call function shuffle to avoid repeats
    const randomUrl = await logs.refreshFeed('random');
    if (randomUrl !== undefined) {
        this.url = randomUrl.toString();
        this.id = this.url.replace( /\D+/g, '');
        this.id = this.id.replace( /600400/g, '');
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

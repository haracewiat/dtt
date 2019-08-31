<template>

  <div class="home-page">

  <div class="container page">

    <div class="row">


      <div class="col-md-9">
      
      <LogPreview
      v-for="log in feed.slice(0, 10)"
      :log="log"
      :key="log.Title"
      ></LogPreview>

      </div>
      

      <div class="col-md-3">
        <div class="sidebar">
          <button v-on:click='random'>Random</button>
        </div>
      </div>


    </div>


  </div>

</div>


</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LogPreview from '@/components/logs/LogPreview.vue';
import logs from '@/store/modules/logs';
import { Log } from '@/store/models';
import { LogsResponse } from '@/store/models';

@Component({
  components: {
    LogPreview,
  },
})
export default class extends Vue {
  public feed: Log[] = [];

  public created() {
    logs.refreshFeed('global').then(() => {
      this.feed = logs.feed;
    });
  }

  public random() {
    logs.refreshFeed('random').then(() => {
      this.feed = logs.feed;
    });
  }
}
</script>
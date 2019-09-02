<template>
  <div class="container page">

    <div class="row">
        <div class="col-md-9">
            <LogPreview
            v-for="log in feed"
            :log="log"
            :key="log.Category"
            ></LogPreview>
            <h5>Additional information:</h5>
            <h6>API: {{this.$attrs.API}}</h6>
            <h6>Source: {{this.$attrs.link}}</h6>
        </div>
    </div>



    <div class="row similar">
        <h1>Similar:</h1>
    </div>

    <div class="row">
            <LogPreview class="col-md-4" 
            v-for="log in feedSimilar.slice(0,3)"
            :log="log"
            :key="log.Category"
            ></LogPreview>
    </div>

  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LogPreview from '@/components/logs/LogPreview.vue';
import LogPreviewDetailed from '@/components/logs/LogPreviewDetailed.vue';
import logs from '@/store/modules/logs';
import { Log } from '@/store/models';
import { LogsResponse } from '@/store/models';

@Component({
  components: {
    LogPreview,
  },
})
 export default class Details extends Vue {
      public feed: Log[] = [];
      public feedSimilar: Log[] = [];

     public created() {
        logs.loadDetails(this.$route.path.slice(1)).then(() => {
        this.feed = logs.feed;
        });

        logs.loadSimilar(this.$attrs.category).then(() => {
        this.feedSimilar = logs.feed;
        });
     }
 }
</script>
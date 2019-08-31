<template>
     <div class="container page">

    <div class="row">
      <div class="col-md-9">
      
      <LogPreview
      v-for="log in feed"
      :log="log"
      :key="log.Category"
      ></LogPreview>


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
 export default class Details extends Vue {
      public feed: Log[] = [];

     public created() {
        logs.loadDetails(this.$route.path.slice(1)).then(() => {
        this.feed = logs.feed;
        });
     }
 }
</script>
<template>
  <div class='container'>
    <div class='row'>

       <p>Details: {{this.$attrs.log}}</p>
       <img :src="this.$attrs.log.download_url + '?grayscale'"/>
     
    </div>   <!-- End of row -->

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

  public async created() {
    // catch similar photos
  }
}
</script> 

<template>
  <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">DTT Project</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link disabled" href="">Your Feed</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="">Global Feed</a>
            </li>
          </ul>
        </div>
      
      <LogPreview
      v-for="log in feed.slice(0, 10)"
      :log="log"
      :key="log.Category"
      ></LogPreview>

      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <a href="" class="tag-pill tag-default">programming</a>
            <a href="" class="tag-pill tag-default">javascript</a>
            <a href="" class="tag-pill tag-default">emberjs</a>
            <a href="" class="tag-pill tag-default">angularjs</a>
            <a href="" class="tag-pill tag-default">react</a>
            <a href="" class="tag-pill tag-default">mean</a>
            <a href="" class="tag-pill tag-default">node</a>
            <a href="" class="tag-pill tag-default">rails</a>
          </div>
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
    logs.refreshGlobalFeed().then(() => {
      this.feed = logs.globalFeed;
    });
  }
}
</script>
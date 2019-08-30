<template>
    <div class="article-preview">
        <div class="article-meta">
        <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
        <div class="info">
            <a href="" class="author">Anthony Willens</a>
            <span class="date">January 20th</span>
        </div>
        <button class="btn btn-outline-primary btn-sm pull-xs-right">
            <i class="ion-heart"></i> 29
        </button>
        </div>
        <a href="" class="preview-link">
        <p>{{log.Category}}</p>
        <p>{{log.Description}}</p>
        <p>{{log.API}}</p>
        <p>{{log.Link}}</p>
        <p>{{log.Auth}}</p>
        <span>Read more...</span>
        </a>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Log } from '@/store/models';

@Component
export default class LogPreview extends Vue {
    @Prop() public log?: Log;
}
</script>
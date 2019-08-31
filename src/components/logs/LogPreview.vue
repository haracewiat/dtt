<template>
    <div class="article-preview">
        <div class="article-meta">
        <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
        <div class="info">
            <a href="" class="author">{{log.Auth}}</a>
        </div>
        </div>
        <router-link :to="{name: 'Details', 
                           params: {
                            description: log.Description, 
                            category: log.Category, 
                            API: log.API,
                            link: log.Link,
                            Auth: log.Auth,
                            }}">
            <p>{{log.Category}}</p>
            <p>{{log.Description}}</p>
            <span>Read more...</span>
        </router-link>
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
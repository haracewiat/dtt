<template>
    <div class="article-preview">
        <div class="article-meta">
        <div class="info">
            <a href="" class="author">{{log.Auth}}</a>
        </div>
        </div>
            <p>{{log.Category}}</p>
            <p>{{log.Description}}</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Log } from '@/store/models';

@Component
export default class LogPreviewDetailed extends Vue {
    @Prop() public log?: Log;
}
</script>
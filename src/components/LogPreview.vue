<template>
    <div class="logPreview">
        <img class='picture' :src="log.download_url"/>
        <p>{{log.author}}</p>
        <p>{{log.id}}</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Log } from '@/api/models';
@Component
export default class LogPreview extends Vue {
    @Prop() public log?: Log;
}
</script> 
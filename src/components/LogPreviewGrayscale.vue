<template>
    <div class="logPreviewGrayscale">
        <router-link :to="{name: 'details', params: {log: log, id: log.id}}"> 
        <img :src="log.download_url + '?grayscale'"/>
        <div class="row">
            <div class="mr-auto author">{{log.author}}</div>
            <div class="id">{{log.id}}</div>
        </div>
        </router-link>
    </div>
        
</template>

<style>
.author, .id{
width: fit-content;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Log } from '@/api/models';
@Component
export default class LogPreviewGrayScale extends Vue {
    @Prop() public log?: Log;
}
</script> 
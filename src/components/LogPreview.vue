<template>
    <div class="logPreview">
        <router-link :to="{name: 'details', params: {log: log, id: log.id, type: 'normal'}}"> 
        <img :src="log.download_url"/>
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
export default class LogPreview extends Vue {
    @Prop() public log?: Log;
}
</script> 
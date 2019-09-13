<template>
    <div class="logPreview">
        <router-link :to="{name: 'details', params: {log: log, id: log.id}}"> 
        <img :src="log.download_url"/>
        <div class="row">
            <div class="mr-auto author">{{log.author}}</div>
            <div class="id">{{log.id}}</div>
            <p v-if="log.id==='1001'">this is id 1001</p>
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
import { Log, LogsType } from '@/api/models';
import logs from '../api/logs';

@Component
export default class LogPreview extends Vue {
    @Prop() public log?: Log;
}

</script> 
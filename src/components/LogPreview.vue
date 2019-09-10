<template>
    <div class="logPreview">
        <router-link :to="{name: 'details', params: {log: log, id: log.id}}"> 
        <p>{{log.id}}</p>
        <p>{{log.author}}</p>
        <!--
            <img :src="log.download_url"/>
        -->
        </router-link>
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
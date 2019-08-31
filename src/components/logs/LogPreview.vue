<template>
    <div class="article-preview">
        
        <router-link :to="{name: 'Details', 
                           params: {
                            description: log.Description, 
                            category: log.Category, 
                            API: log.API,
                            link: log.Link,
                            Auth: log.Auth,
                            }}">
            <h1>{{log.Description}}</h1>
            <h5>{{log.Category}}</h5>
            <p>{{log.Auth}}</p>
                       
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
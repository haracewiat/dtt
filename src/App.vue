<template>
  <div id="app">
    <AppBanner></AppBanner>
    <AppNavbar></AppNavbar>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>   <!-- End of #app -->
</template>

<style>
#app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AppFooter from '@/components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';
import AppBanner from '@/components/AppBanner.vue';
import SortingBar from '@/components/SortingBar.vue';

@Component({
  components: {
    AppFooter, AppNavbar, AppBanner,
  },
})
export default class App extends Vue {

}
</script>

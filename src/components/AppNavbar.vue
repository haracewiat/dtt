<template>
    <div id="nav">
      <span><router-link to="/">Home</router-link> | </span>
      <span><router-link to="/about">About</router-link> | </span>
      <span><router-link to="/random">Random</router-link> | </span>
      <span>
        <div class="dropdown">
          <span class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
          </span>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <router-link to="/grayscale" class="dropdown-item">Grayscale</router-link> |
            <router-link to="/blur" class="dropdown-item">Blur</router-link>
          </div>   <!-- End of .dropdown-menu -->
        </div>   <!-- End of .dropdown -->
      </span>
    </div>   <!-- End of #nav -->
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a, span {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AppNavbar extends Vue {
}
</script> 
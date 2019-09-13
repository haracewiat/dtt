<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top"><div class="container">
    
      <!-- Website Logo -->
      <router-link to="/" class="navbar-brand mb-0 h1">PicLib</router-link>
      
      <!-- Burger Menu -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu Options-->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to="" class="dropdown-item">Full-size pictures</router-link> 
            <router-link to="" class="dropdown-item">Square pictures</router-link>
          </div>
        </li>   
      </ul>
    </div>

     </div></nav>   <!-- End of #nav -->
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

a.router-link-exact-active {
  color: #42b983;
}
</style>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AppNavbar extends Vue {
}
</script> 
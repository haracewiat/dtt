<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-5">
      <div class="container">
    
      <!-- Website Logo -->
      <router-link to="/" class="navbar-brand mb-0 h1">PicLib</router-link>
      
      <!-- Burger Menu -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu Options-->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto justify-content-end w-100">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/random" class="nav-link">Random</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <span v-on:click="setType('normal')"><router-link to="/normal" class="dropdown-item">Normal</router-link></span>
              <span v-on:click="setType('grayscale')"><router-link to="/grayscale" class="dropdown-item">Grayscale</router-link></span>
              <span v-on:click="setType('blur')"><router-link to="/blur" class="dropdown-item">Blur</router-link></span>
              <span v-on:click="setType('grayscale&blur')"><router-link to="/grayscale&blur" class="dropdown-item">Grayscale &amp; Blur</router-link></span>
            </div>
          </li>   
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>     <!-- End of .navbar-collapse -->

      </div>     <!-- End of .container -->
    </nav>   <!-- End of nav -->

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
import logs from '../api/logs';
@Component
export default class AppNavbar extends Vue {
  public type: string = 'normal';

  public setType(type: string) {
    logs.setType(type);
    this.type = type;
  }
  public getType() {
    return logs.getType().toString();
  }
}
</script> 
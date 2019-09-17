<template>
    <!-- Footer -->
<footer class="page-footer font-small mdb-color bg-light pt-4 align-items-end">

  <!-- Footer Links -->
  <div class="container text-center text-md-left">

    <!-- Footer links -->
    <div class="row text-center text-md-left mt-3 pb-3">

      <!-- Grid column -->
      <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">PicLib</h6>
        <p>PicLib is a website based on the Lorem Picsum's public API. </p>
        <p>Choose which picture and category you like best - and if you can't decide, try the randomizer option!</p>
      </div>
      <!-- Grid column -->

      <hr class="w-100 clearfix d-md-none">

      <!-- Grid column -->
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Categories</h6>
        <p v-on:click="setType('normal')">
          <router-link to="/normal">Normal</router-link>
        </p>
        <p v-on:click="setType('grayscale')">
          <router-link to="/grayscale">Grayscale</router-link>
        </p>
        <p v-on:click="setType('blur')">
          <router-link to="/blur">Blur</router-link>
        </p>
        <p v-on:click="setType('grayscale&blur')">
          <router-link to="/grayscale&blur">Grayscale &amp; Blur</router-link>
        </p>
      </div>
      <!-- Grid column -->

      <hr class="w-100 clearfix d-md-none">

      <!-- Grid column -->
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
          <router-link to="/">Home</router-link>
        </p>
        <p>
          <router-link to="/random">Random</router-link>
        </p>
        <p>
          <router-link to="/about">About</router-link>
        </p>
        <p>
          <router-link to="/contact">Contact</router-link>
        </p>
      </div>

      <!-- Grid column -->
      <hr class="w-100 clearfix d-md-none">

      <!-- Grid column -->
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <i class="fas fa-home mr-3"></i> Amsterdam, NL</p>
        <p>
          <i class="fas fa-envelope mr-3"></i> info@piclib.com</p>
        <p>
          <i class="fas fa-phone mr-3"></i> + 31 123 456 789</p>
      </div>
      <!-- Grid column -->

    </div>
    <!-- Footer links -->

    <hr>

    <!-- Grid row -->
    <div class="row d-flex align-items-center">

      <!-- Grid column -->
      <div class="col-md-7 col-lg-8">

        <!--Copyright-->
        <p class="text-center text-md-left">© 2018 Copyright:
          <a href="https://picsum.photos">
            <strong> picsum.photos</strong>
          </a>
        </p>

      </div>
      <!-- Grid column -->


    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

</footer>
<!-- Footer -->

</template>

<style>
footer{
   margin-top: auto!important;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import logs from '../api/logs';
@Component
export default class AppFooter extends Vue {
  public type: string = '';

  public async created() {
    this.type = await logs.getType();
  }

  public setType(type: string) {
    logs.setType(type);
    this.type = type;
  }
}
</script> 
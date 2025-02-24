<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import 'primeicons/primeicons.css';
</script>

<style  scoped>
.v-carousel__prev,
.v-carousel__next,
.v-btn.v-btn--variant-text.v-btn--icon {
  display: none !important;
  visibility: hidden !important;
}
</style>

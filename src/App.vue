<script setup>
import NavBar from './views/NavBar.vue';
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isLandingPage = computed(() => {
  // Ajusta esta ruta según la que uses para tu landing page
  return route.path === '/' || route.name === 'landing';
});
</script>



<template>
  <NavBar v-if="!isLandingPage"></NavBar>
  <RouterView />
</template>


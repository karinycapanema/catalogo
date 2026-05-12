<script setup>
import AppHeader from './components/icons/AppHeader.vue';
import { RouterView } from 'vue-router';

</script>

<template>
 
 <AppHeader>
  <main>
     <router-view />
  </main>
 </AppHeader>
 
</template>

<style scoped>

</style>

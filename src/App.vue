<script setup>
import HeaderPage from './components/Header.vue';
import MainLayout from './components/MainLayout.vue';


</script>

<template>
  <main-layout> 
    <template #header> 
      <header-page/>
    </template>
    <template #main> 
      <router-view></router-view>
    </template>
    <template #name>
      
    </template>
  </main-layout>
</template>

<style scoped>

</style>

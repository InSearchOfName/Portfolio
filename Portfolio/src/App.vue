<script setup lang="ts">
import CarouselCard from './components/CarouselCard.vue'
</script>

<template>
  <CarouselCard />
</template>

<style>
* {
  font-family: 'Poppins', sans-serif;
}

body,
html {
  margin: 0;
  padding: 0;
  height: auto;
  min-height: 100vh;
  background: #000;
  overflow: auto;
  scroll-behavior: smooth;
}
</style>

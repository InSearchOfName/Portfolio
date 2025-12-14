<script setup lang="ts">
import CarouselCard from './components/CarouselCard.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import AboutSection from './components/AboutSection.vue'
import SeminarsSection from './components/SeminarsSection.vue'
import InnovationSection from './components/InnovationSection.vue'
import PersonalDevelopmentSection from './components/PersonalDevelopmentSection.vue'
import InternationalizationSection from './components/InternationalizationSection.vue'
import PersonalProjectsSection from './components/PersonalProjectsSection.vue'
</script>

<template>
  <LanguageSwitcher />
  <CarouselCard />
  <AboutSection />
  <SeminarsSection />
  <InnovationSection />
  <PersonalDevelopmentSection />
  <InternationalizationSection />
  <PersonalProjectsSection />
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

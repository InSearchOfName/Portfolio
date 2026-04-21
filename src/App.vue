<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SeminarsSection from './components/SeminarsSection.vue'
import InternationalizationSection from './components/InternationalizationSection.vue'
import PersonalDevelopmentSection from './components/PersonalDevelopmentSection.vue'
import InnovationSection from './components/InnovationSection.vue'
import AboutSection from './components/AboutSection.vue'
import PersonalProjectsSection from './components/PersonalProjectsSection.vue'
</script>

<template>
  <SiteHeader />
  <HeroSection />
  <AboutSection />
  <SeminarsSection />
  <InternationalizationSection />
  <PersonalDevelopmentSection />
  <InnovationSection />
  <PersonalProjectsSection />
</template>

<style>
@import './styles/theme.css';
@import './styles/base.css';

body,
html {
  margin: 0;
  padding: 0;
  height: auto;
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow: auto;
  scroll-behavior: smooth;
}
</style>

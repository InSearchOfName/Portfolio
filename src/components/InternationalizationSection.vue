<script setup lang="ts"></script>

<template>
  <section id="internationalization" class="content-section">
    <div class="section-inner">
      <h2 data-i18n="section-internationalization-title">Internationalization</h2>
      <p data-i18n="section-internationalization-desc">TBA</p>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  padding: 0.5rem 0.5rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}

.content-section .section-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
}

.content-section h2 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-weight: 700;
  margin: 0;
}

.content-section p {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}
</style>

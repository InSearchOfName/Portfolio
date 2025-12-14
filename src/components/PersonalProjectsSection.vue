<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContentCard from './ContentCard.vue'

const { t } = useI18n()
</script>

<template>
  <section id="personalProject" class="content-section">
    <div class="section-inner">
      <h2>{{ t('section-personalProject-title') }}</h2>
      <p>{{ t('section-personalProject-desc') }}</p>

      <ul class="entry-list seminar-list project-list">
        <ContentCard
          title="Random Additions"
          titleI18n="personal-random-title"
          description="A little minecraft plugin to build random stuff/items. Still working on it."
          descriptionI18n="personal-random-desc"
          :metaItems="[
            { value: 'Repository', valueI18n: 'personal-random-link-text', href: 'https://github.com/InSearchOfName/InSearchOfNames-Random-Additions' }
          ]"
        />
        <ContentCard
          title="K3s-ansible"
          titleI18n="personal-k3s-title"
          description="A simple ansible script that autonomously sets up an k3s cluster. I see it as a finished project."
          descriptionI18n="personal-k3s-desc"
          :metaItems="[
            { value: 'Repository', valueI18n: 'personal-k3s-link-text', href: 'https://github.com/InSearchOfName/K3s-Ansible' }
          ]"
        />
      </ul>
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

.seminar-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 700px) {
  .seminar-list {
    grid-template-columns: 1fr;
  }
}

.entry-list {
  list-style: none;
}
</style>

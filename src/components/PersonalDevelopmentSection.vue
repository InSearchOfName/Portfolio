<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContentCard from './ContentCard.vue'

const { t } = useI18n()
</script>

<template>
  <section id="personalDevelopment" class="content-section">
    <div class="section-inner">
      <h2>{{ t('section-personalDevelopment-title') }}</h2>
      <p>{{ t('section-personalDevelopment-desc') }}</p>

      <ul class="entry-list seminar-list development-list">
        <ContentCard
          title="Projectweek 2TIN"
          titleI18n="development-projectweek-title"
          description="First week of the research project where we got to know our teams and an overview of what the project will entail."
          descriptionI18n="development-projectweek-desc"
          :metaItems="[
            { label: 'Location:', labelI18n: 'label-location', value: 'PXL-campus', valueI18n: 'development-projectweek-location' },
            { label: 'Date:', labelI18n: 'label-date', value: 'from 10/02/2025 till 14/03/2025', valueI18n: 'development-projectweek-date' }
          ]"
        />
        <ContentCard
          title="POP-sessie 2TIN"
          titleI18n="development-pop-title"
          description="'Brein aan het werk! Niet storen!' A session about smartphone addiction and how our focus is lower than before."
          descriptionI18n="development-pop-desc"
          :metaItems="[
            { label: 'Location:', labelI18n: 'label-location', value: 'PXL-campus, Corda-campus', valueI18n: 'development-pop-location' },
            { label: 'Date:', labelI18n: 'label-date', value: 'from 18/02/2025 till 25/03/2025', valueI18n: 'development-pop-date' }
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

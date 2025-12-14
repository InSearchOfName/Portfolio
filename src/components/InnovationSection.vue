<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContentCard from './ContentCard.vue'

const { t } = useI18n()
</script>

<template>
  <section id="innovation" class="content-section">
    <div class="section-inner">
      <h2>{{ t('section-innovation-title') }}</h2>
      <p>{{ t('section-innovation-desc') }}</p>

      <ul class="entry-list seminar-list">
        <ContentCard
          title="Hackathon: Cyber Security Challenge Belgium 2025 (Online Qualifiers)"
          titleI18n="innovation-hackathon-title"
          description="A security competition for higher-education students featuring challenges in cryptography, reverse engineering, network analysis, web & mobile security, and forensic investigation."
          descriptionI18n="innovation-hackathon-desc"
          link="https://platform.cybersecuritychallenge.be/"
          :metaItems="[
            { label: 'Location:', labelI18n: 'label-location', value: 'Online via the CTF platform of Cyber Security Challenge', valueI18n: 'innovation-hackathon-location', href: 'https://platform.cybersecuritychallenge.be/' },
            { label: 'Date:', labelI18n: 'label-date', value: '14/03/2025 10AM – 15/03/2025 6PM', valueI18n: 'innovation-hackathon-date' },
            { label: 'Team:', labelI18n: 'innovation-hackathon-team-label', value: 'Backdoor Boys', valueI18n: 'innovation-hackathon-team' },
            { label: 'Placement:', labelI18n: 'innovation-hackathon-placement-label', value: '116/358', valueI18n: 'innovation-hackathon-placement' }
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

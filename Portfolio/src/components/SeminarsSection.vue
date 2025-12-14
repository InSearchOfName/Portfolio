<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContentCard from './ContentCard.vue'

const { t } = useI18n()
</script>

<template>
  <section id="seminars" class="content-section">
    <div class="section-inner">
      <h2>{{ t('section-seminars-title') }}</h2>
      <p>{{ t('section-seminars-desc') }}</p>

      <ul class="entry-list seminar-list">
        <ContentCard
          title="Gluo: Multi-cloud (SNB)"
          titleI18n="seminar-gluo-title"
          description="A seminar on multi-cloud where we used Gluo hands-on labs to set up a multi-cloud infrastructure across AWS and Azure."
          descriptionI18n="seminar-gluo-desc"
          :metaItems="[
            { label: 'Location:', labelI18n: 'label-location', value: 'Corda-campus', valueI18n: 'seminar-gluo-location' },
            { label: 'Date:', labelI18n: 'label-date', value: '4/3/2025', valueI18n: 'seminar-gluo-date' }
          ]"
        />
        <ContentCard
          title="Toreon: Ethical hacking (SNB/all)"
          titleI18n="seminar-toreon-title"
          description="A seminar on ethical hacking that explained how we could find our first CVE and included several CTF challenges."
          descriptionI18n="seminar-toreon-desc"
          :metaItems="[
            { label: 'Location:', labelI18n: 'label-location', value: 'Corda-campus', valueI18n: 'seminar-toreon-location' },
            { label: 'Date:', labelI18n: 'label-date', value: '11/3/2025', valueI18n: 'seminar-toreon-date' }
          ]"
        />
        <ContentCard
          title="Police: Digital Investigation (SNB/all)"
          titleI18n="seminar-police-title"
          description="A seminar where police cases were presented to demonstrate their methods and the type of work they perform."
          descriptionI18n="seminar-police-desc"
          :metaItems="[
            { label: 'Location:', labelI18n: 'label-location', value: 'Corda-campus', valueI18n: 'seminar-police-location' },
            { label: 'Date:', labelI18n: 'label-date', value: '1/04/2025', valueI18n: 'seminar-police-date' }
          ]"
        />
        <ContentCard
          title="Cegeka: Azure Networking (SNB)"
          titleI18n="seminar-cegeka-title"
          description="A seminar on the nuances of configuring efficient, secure and scalable networks in Azure cloud."
          descriptionI18n="seminar-cegeka-desc"
          :metaItems="[
            { label: 'Location:', labelI18n: 'label-location', value: 'Corda-campus', valueI18n: 'seminar-cegeka-location' },
            { label: 'Date:', labelI18n: 'label-date', value: '22/04/2025', valueI18n: 'seminar-cegeka-date' }
          ]"
        />
      </ul>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  padding: 0.5rem 0.5rem;
  background: #fff;
  color: #111;
  border-bottom: 1px solid #eee;
}

.content-section .section-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
}

.content-section h2 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  color: #111;
  font-weight: 700;
  margin: 0;
}

.content-section p {
  font-size: 1.05rem;
  color: #333;
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

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContentCard from './ContentCard.vue'
import { createLocationDateMeta } from '../utils/contentMeta'

const { t } = useI18n()
</script>

<template>
  <section id="internationalization" class="section">
    <div class="container">
      <div class="section__header">
        <h2 class="section__title">{{ t('section-internationalization-title') }}</h2>
      </div>
      <p class="section__lede">{{ t('section-internationalization-desc') }}</p>

      <ul class="entry-list grid grid--2">
        <ContentCard
          title="FOSDEM"
          titleI18n="internationalization-fosdem-title"
          description="FOSDEM is an annual two-day conference in Brussels on free and open-source software. Developers from around the world share talks, workshops, and projects."
          descriptionI18n="internationalization-fosdem-desc"
          link="https://fosdem.org/"
          :metaItems="
            createLocationDateMeta({
              location: 'ULB, Brussels',
              locationI18n: 'internationalization-fosdem-location',
              date: '31/01/2026 through 1/02/2026',
              dateI18n: 'internationalization-fosdem-date',
            })
          "
        />
      </ul>
    </div>
  </section>
</template>


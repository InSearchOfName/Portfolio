<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="contactCard card">
        <div class="card__body contactBody">
          <div>
            <p class="contactKicker">{{ t('contact-kicker') }}</p>
            <h2 class="contactTitle">{{ t('contact-title') }}</h2>
            <p class="contactText">{{ t('contact-text') }}</p>
          </div>

          <div class="btn-row">
            <a
              class="btn btn--primary"
              href="https://www.linkedin.com/in/tommy-quatretemps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t('contact-cta-linkedin') }}
            </a>
            <a
              class="btn"
              href="https://github.com/InSearchOfName"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t('contact-cta-github') }}
            </a>
          </div>
        </div>
      </div>

      <footer class="footer">
        <p>{{ t('footer-copy') }}</p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.contact {
  border-bottom: 0;
}

.contactCard {
  overflow: hidden;
}

.contactBody {
  display: grid;
  gap: var(--space-4);
  background: linear-gradient(
    135deg,
    color-mix(in oklab, var(--bg-accent) 18%, var(--bg-secondary)),
    color-mix(in oklab, var(--bg-secondary) 82%, var(--bg-primary))
  );
}

.contactKicker {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
  color: var(--text-tertiary);
  font-weight: 700;
}

.contactTitle {
  margin: 0.55rem 0 0 0;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  letter-spacing: -0.03em;
}

.contactText {
  margin: 0.8rem 0 0 0;
  max-width: 60ch;
  color: var(--text-secondary);
}

.footer {
  padding-top: var(--space-5);
  text-align: center;
}

.footer p {
  margin: 0;
  color: var(--text-tertiary);
  font-size: 0.92rem;
}
</style>

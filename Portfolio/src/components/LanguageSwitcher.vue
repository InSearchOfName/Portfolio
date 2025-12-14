<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const isDropdownOpen = ref(false)
const currentLang = ref(locale.value)

const languages = [
  { code: 'en', label: 'English', i18n: 'lang-en-label' },
  { code: 'nl', label: 'Nederlands', i18n: 'lang-nl-label' }
]

const getCurrentLabel = () => {
  return languages.find(l => l.code === currentLang.value)?.label || 'English'
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectLanguage = (code: string) => {
  currentLang.value = code
  locale.value = code
  localStorage.setItem('language', code)
  isDropdownOpen.value = false
}

// Close dropdown when clicking outside
const closeDropdown = () => {
  isDropdownOpen.value = false
}

watch(locale, (newLocale) => {
  currentLang.value = newLocale
})
</script>

<template>
  <div class="lang-switcher" @blur="closeDropdown" tabindex="-1">
    <button
      id="lang-dropdown-btn"
      class="lang-label"
      type="button"
      :aria-expanded="isDropdownOpen"
      aria-haspopup="true"
      @click="toggleDropdown"
    >
      <span class="lang-label-text">{{ getCurrentLabel() }}</span>
      <span class="dropdown-arrow">▾</span>
    </button>
    <div
      id="lang-dropdown"
      class="lang-dropdown-menu"
      :class="{ show: isDropdownOpen }"
      :aria-hidden="!isDropdownOpen"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        :id="`lang-${lang.code}`"
        class="lang-option"
        :class="{ active: currentLang === lang.code }"
        type="button"
        tabindex="0"
        :data-i18n="lang.i18n"
        @click="selectLanguage(lang.code)"
      >
        {{ lang.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.lang-switcher {
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 1000;
  user-select: none;
}

#lang-dropdown-btn {
  background: #222;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.6em 1.4em 0.6em 1em;
  border-radius: 2em;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 0.6em;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s;
  position: relative;
}

#lang-dropdown-btn:hover,
#lang-dropdown-btn:focus {
  background: #fff;
  color: #222;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.13);
  transform: translateY(-2px) scale(1.04);
}

.lang-label {
  font-size: 1rem;
  font-weight: 600;
}

.dropdown-arrow {
  font-size: 1.1em;
  margin-left: 0.3em;
}

.lang-dropdown-menu {
  display: none;
  position: absolute;
  right: 0;
  top: 110%;
  background: #fff;
  border-radius: 1em;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.13);
  min-width: 160px;
  padding: 0.5em 0;
  flex-direction: column;
  gap: 0.2em;
  z-index: 1001;
}

.lang-dropdown-menu.show {
  display: flex !important;
  position: absolute;
  right: 0;
  top: 110%;
  background: #fff;
  border-radius: 1em;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.13);
  min-width: 160px;
  padding: 0.5em 0;
  flex-direction: column;
  gap: 0.2em;
  z-index: 1001;
}

.lang-option {
  background: none;
  border: none;
  color: #222;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.7em 1.5em 0.7em 2.5em;
  text-align: left;
  cursor: pointer;
  border-radius: 1.5em;
  position: relative;
  transition: background 0.18s, color 0.18s;
  display: flex;
  align-items: center;
  gap: 0.7em;
}

.lang-option.active,
.lang-option:hover,
.lang-option:focus {
  background: #222;
  color: #fff;
}

@media (max-width: 900px) {
  .lang-switcher {
    display: none;
  }
}
</style>

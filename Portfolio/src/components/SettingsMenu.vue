<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme'

const { locale, t } = useI18n()
const { theme, setTheme } = useTheme()

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
}

const toggleTheme = () => {
  setTheme(theme.value === 'light' ? 'dark' : 'light')
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

watch(locale, (newLocale) => {
  currentLang.value = newLocale
})
</script>

<template>
  <div class="settings-container" @blur="closeDropdown" tabindex="-1">
    <button
      class="settings-btn"
      type="button"
      :aria-expanded="isDropdownOpen"
      aria-haspopup="true"
      @click="toggleDropdown"
      title="Settings"
    >
      <span class="settings-icon">≡</span>
    </button>
    <div
      class="settings-dropdown"
      :class="{ show: isDropdownOpen }"
      :aria-hidden="!isDropdownOpen"
    >
      <div class="settings-section">
        <div class="settings-label">Theme</div>
        <button
          class="theme-option"
          :class="{ active: theme === 'light' }"
          type="button"
          @click="toggleTheme"
        >
          <span>Light</span>
        </button>
        <button
          class="theme-option"
          :class="{ active: theme === 'dark' }"
          type="button"
          @click="toggleTheme"
        >
          <span>Dark</span>
        </button>
      </div>

      <div class="settings-divider"></div>

      <div class="settings-section">
        <div class="settings-label">Language</div>
        <button
          v-for="lang in languages"
          :key="lang.code"
          class="lang-option"
          :class="{ active: currentLang === lang.code }"
          type="button"
          @click="selectLanguage(lang.code)"
        >
          {{ lang.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-container {
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 1000;
  user-select: none;
}

.settings-btn {
  background: #0ea5e9;
  color: #fff;
  border: none;
  outline: none;
  width: 2.8em;
  height: 2.8em;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s;
}

.settings-btn:hover,
.settings-btn:focus {
  background: #0d96d4;
  color: #fff;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px) scale(1.1);
}

.settings-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.settings-dropdown {
  display: none;
  position: absolute;
  right: 0;
  top: 110%;
  background: var(--bg-tertiary);
  border-radius: 1em;
  box-shadow: 0 4px 18px var(--shadow-color-hover);
  min-width: 200px;
  padding: 0.8em 0;
  flex-direction: column;
  gap: 0;
  z-index: 1001;
  margin-top: 0.5em;
}

.settings-dropdown.show {
  display: flex !important;
}

.settings-section {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  padding: 0.5em 0;
}

.settings-label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-secondary);
  opacity: 0.7;
  padding: 0.5em 1.5em;
  margin-bottom: 0.2em;
}

.theme-option,
.lang-option {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.7em 1.5em;
  text-align: left;
  cursor: pointer;
  position: relative;
  transition: all 0.18s;
  display: flex;
  align-items: center;
  gap: 0.7em;
}

.theme-option:hover,
.lang-option:hover,
.theme-option:focus,
.lang-option:focus {
  background: var(--bg-hover);
  color: var(--text-hover);
}

.theme-option.active,
.lang-option.active {
  background: #0ea5e9;
  color: #fff;
  font-weight: 600;
}

.settings-divider {
  height: 1px;
  background: var(--border-color);
  margin: 0.3em 0;
}

@media (max-width: 900px) {
  .settings-container {
    top: 10px;
    right: 10px;
  }

  .settings-dropdown {
    min-width: 180px;
  }
}
</style>

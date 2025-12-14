import { ref, watch } from 'vue'

export const useTheme = () => {
  // Get saved theme or check system preference
  const getSavedTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light'
    
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      return saved
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    
    return 'light'
  }

  const theme = ref<'light' | 'dark'>(getSavedTheme())

  const setTheme = (newTheme: 'light' | 'dark') => {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // Watch for changes and update DOM
  watch(theme, (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
  })

  // Initialize theme on first load
  if (typeof window !== 'undefined') {
    const savedTheme = getSavedTheme()
    document.documentElement.setAttribute('data-theme', savedTheme)
    theme.value = savedTheme
  }

  return {
    theme,
    setTheme
  }
}

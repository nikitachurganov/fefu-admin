import { ref, computed } from 'vue'

export type ThemePreference = 'light' | 'dark' | 'system'

const themePreference = ref<ThemePreference>(
  (localStorage.getItem('fefu-theme-pref') as ThemePreference) || 'light'
)

const systemPrefersDark = ref(
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false
)

if (typeof window !== 'undefined' && window.matchMedia) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    systemPrefersDark.value = e.matches
    if (themePreference.value === 'system') {
      applyTheme(e.matches)
    }
  })
}

function applyTheme(isDarkVal: boolean) {
  if (typeof document === 'undefined') return
  if (isDarkVal) {
    document.documentElement.classList.add('dark')
    document.body.classList.add('dark-theme')
  } else {
    document.documentElement.classList.remove('dark')
    document.body.classList.remove('dark-theme')
  }
}

export function useTheme() {
  const isDark = computed(() => {
    if (themePreference.value === 'system') {
      return systemPrefersDark.value
    }
    return themePreference.value === 'dark'
  })

  const themeMode = computed<ThemePreference>({
    get: () => themePreference.value,
    set: (val: ThemePreference) => {
      setThemePreference(val)
    }
  })

  const setThemePreference = (pref: ThemePreference) => {
    themePreference.value = pref
    localStorage.setItem('fefu-theme-pref', pref)
    const effectiveDark =
      pref === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : pref === 'dark'
    applyTheme(effectiveDark)
  }

  const cycleTheme = () => {
    // Sequence: light -> dark -> system -> light
    if (themePreference.value === 'light') {
      setThemePreference('dark')
    } else if (themePreference.value === 'dark') {
      setThemePreference('system')
    } else {
      setThemePreference('light')
    }
  }

  // Initial apply
  const effectiveDark =
    themePreference.value === 'system'
      ? systemPrefersDark.value
      : themePreference.value === 'dark'
  applyTheme(effectiveDark)

  return {
    isDark,
    themeMode,
    setThemePreference,
    cycleTheme
  }
}

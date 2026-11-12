import { ref } from 'vue'

export type SidebarVariant = 1 | 2 | 3

function getVariantFromUrl(): SidebarVariant {
  if (typeof window === 'undefined') return 1
  const urlParams = new URLSearchParams(window.location.search)
  const v = urlParams.get('v') || urlParams.get('variant')
  if (v === '2') return 2
  if (v === '3') return 3
  if (window.location.hash.includes('v2') || window.location.hash.includes('variant2')) return 2
  if (window.location.hash.includes('v3') || window.location.hash.includes('variant3')) return 3
  return 1
}

const currentVariant = ref<SidebarVariant>(getVariantFromUrl())

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    currentVariant.value = getVariantFromUrl()
  })
  window.addEventListener('hashchange', () => {
    currentVariant.value = getVariantFromUrl()
  })
}

export function useSidebarVariant() {
  const setVariant = (v: SidebarVariant) => {
    currentVariant.value = v
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      url.searchParams.set('v', v.toString())
      window.history.pushState({}, '', url.toString())
    }
  }

  return {
    variant: currentVariant,
    setVariant
  }
}

<template>
  <a-config-provider :theme="themeConfig">
    <AppLayout />
  </a-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { theme } from 'ant-design-vue'
import AppLayout from './components/layout/AppLayout.vue'
import { useTheme } from './composables/useTheme'

const { isDark } = useTheme()

const themeConfig = computed(() => ({
  algorithm: isDark.value ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    colorPrimary: '#2d82cf',
    borderRadius: 8,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    colorBgElevated: isDark.value ? '#262626' : '#ffffff'
  }
}))
</script>

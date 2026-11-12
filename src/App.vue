<template>
  <a-config-provider
    :theme="{
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      token: {
        colorPrimary: '#2d82cf',
        borderRadius: 8,
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
      }
    }"
  >
    <AppLayout />
  </a-config-provider>
</template>

<script setup lang="ts">
import { theme } from 'ant-design-vue'
import AppLayout from './components/layout/AppLayout.vue'
import { useTheme } from './composables/useTheme'

const { isDark } = useTheme()
</script>

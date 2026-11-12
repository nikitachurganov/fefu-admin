<template>
  <a-layout class="fefu-app-layout">
    <!-- Sidebar / Navigation -->
    <AppSidebar v-model:collapsed="collapsed" />

    <!-- Main Content Area -->
    <a-layout class="fefu-main-layout">
      <!-- Header -->
      <AppHeader />

      <!-- Body / Content -->
      <a-layout-content class="fefu-content">
        <slot>
          <ScheduleCard />
        </slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'
import ScheduleCard from '../content/ScheduleCard.vue'

const collapsed = ref(false)
</script>

<style scoped>
.fefu-app-layout {
  min-height: 100vh;
  display: flex;
}

.fefu-main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--fefu-bg-layout);
}

.fefu-content {
  padding: 20px;
  background: var(--fefu-bg-layout);
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>

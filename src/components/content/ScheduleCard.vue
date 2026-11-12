<template>
  <div class="empty-content-card">
    <a-empty :description="false" />
  </div>
</template>

<script setup lang="ts">
// Empty placeholder card with illustration only
</script>

<style scoped>
.empty-content-card {
  background: var(--fefu-bg-container);
  border: 1px solid var(--fefu-border-secondary);
  border-radius: 8px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 104px);
  padding: 40px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
  transition: background-color 0.2s, border-color 0.2s;
}
</style>

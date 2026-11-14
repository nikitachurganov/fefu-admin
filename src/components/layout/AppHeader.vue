<template>
  <a-layout-header class="fefu-header">
    <!-- Left: Search Bar -->
    <div class="header-left">
      <div class="search-box">
        <img src="../../assets/figma/search.svg" alt="Поиск" class="search-icon" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Поиск по сервису"
          class="search-input"
        />
      </div>
    </div>

    <!-- Right: Role, Actions & Profile -->
    <div class="header-right">
      <!-- Role Selector Dropdown -->
      <a-dropdown :trigger="['click']">
        <div class="role-trigger" role="button" tabindex="0">
          <span class="role-title">{{ currentRole }}</span>
          <img src="../../assets/figma/role-arrow.svg" alt="" class="role-arrow" />
        </div>
        <template #overlay>
          <a-menu @click="handleRoleChange">
            <a-menu-item key="Администратор системы">Администратор системы</a-menu-item>
            <a-menu-item key="Диспетчер расписания">Диспетчер расписания</a-menu-item>
            <a-menu-item key="Преподаватель">Преподаватель</a-menu-item>
            <a-menu-item key="Студент">Студент</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>

      <!-- Vertical Divider -->
      <div class="header-divider"></div>

      <!-- Action Buttons -->
      <div class="actions-group">
        <!-- Help Button -->
        <a-tooltip title="Справка и поддержка" placement="bottom">
          <button type="button" class="action-btn" aria-label="Справка">
            <img src="../../assets/figma/question.svg" alt="Справка" class="action-icon" />
          </button>
        </a-tooltip>

        <!-- Notification Button -->
        <a-tooltip title="Уведомления" placement="bottom">
          <button type="button" class="action-btn" aria-label="Уведомления">
            <img src="../../assets/figma/bell.svg" alt="Уведомления" class="action-icon" />
          </button>
        </a-tooltip>
      </div>

      <!-- Vertical Divider -->
      <div class="header-divider"></div>

      <!-- Profile Dropdown -->
      <a-dropdown :trigger="['click']" placement="bottomRight">
        <div class="profile-button" role="button" tabindex="0">
          <div class="avatar-box">
            <span class="avatar-letter">U</span>
          </div>
          <div class="profile-info">
            <span class="profile-name">Иванов Иван Иванович</span>
            <span class="profile-email">ivanov.ii@dvfu.ru</span>
          </div>
        </div>
        <template #overlay>
          <a-menu class="profile-dropdown-menu">
            <div class="profile-dropdown-header">
              <div class="avatar-box sm">
                <span class="avatar-letter sm">U</span>
              </div>
              <div class="profile-info">
                <span class="profile-name font-medium">Иванов Иван Иванович</span>
                <span class="profile-email">ivanov.ii@dvfu.ru</span>
              </div>
            </div>
            <a-menu-divider />
            <a-menu-item key="instructions">
              <template #icon>
                <Icon icon="fluent:document-text-24-filled" class="dropdown-item-icon" />
              </template>
              Инструкции
            </a-menu-item>
            <a-menu-item key="support">
              <template #icon>
                <Icon icon="fluent:person-support-24-filled" class="dropdown-item-icon" />
              </template>
              Поддержка
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="logout" danger>
              <template #icon>
                <Icon icon="fluent:arrow-exit-24-filled" class="dropdown-item-icon" />
              </template>
              Выйти из аккаунта
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '../../icons'

const searchQuery = ref('')
const currentRole = ref('Администратор системы')

const handleRoleChange = ({ key }: { key: string }) => {
  currentRole.value = key
}
</script>

<style scoped>
.fefu-header {
  height: 64px;
  line-height: normal;
  background: var(--fefu-bg-container);
  border-bottom: 1px solid var(--fefu-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 9;
  transition: background-color 0.2s, border-color 0.2s;
}

/* Left Section: Search */
.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 280px;
  height: 32px;
  padding: 0 12px;
  border-radius: 6px;
  background: transparent;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.search-box:hover,
.search-box:focus-within {
  background: var(--fefu-hover-bg);
}

.search-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  opacity: 0.65;
}

.search-input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  line-height: 16px;
  color: var(--fefu-text);
}

.search-input::placeholder {
  color: var(--fefu-text-tertiary);
}

/* Right Section */
.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Role Trigger */
.role-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 8px;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;
}

.role-trigger:hover {
  background: var(--fefu-hover-bg);
}

.role-title {
  font-size: 13px;
  line-height: 16px;
  color: var(--fefu-text);
  white-space: nowrap;
}

.role-arrow {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

/* Divider */
.header-divider {
  width: 1px;
  height: 14px;
  background-color: var(--fefu-border);
  margin: 0 4px;
  flex-shrink: 0;
}

/* Action Buttons */
.actions-group {
  display: flex;
  align-items: center;
  gap: 2px;
}

.action-btn {
  width: 40px;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background: var(--fefu-hover-bg);
}

.action-btn:active {
  background: var(--fefu-active-bg);
}

.action-icon {
  width: 16px;
  height: 16px;
  display: block;
}

/* Profile Button */
.profile-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px 4px 4px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s, box-shadow 0.2s;
  max-width: 256px;
}

.profile-button:hover {
  background: var(--fefu-hover-bg);
}

.avatar-box {
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid transparent;
}

html.dark .avatar-box {
  background-color: #262626;
  border-color: rgba(255, 255, 255, 0.15);
}

.avatar-box.sm {
  width: 32px;
  height: 32px;
}

.avatar-letter {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 16px;
  color: #ffffff;
}

.avatar-letter.sm {
  font-size: 15px;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
}

.profile-name {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: var(--fefu-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.profile-email {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  line-height: 16px;
  color: var(--fefu-text-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.profile-dropdown-menu {
  min-width: 240px;
  padding: 8px;
}

.profile-dropdown-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
}

.font-medium {
  font-weight: 500;
}

.dropdown-item-icon {
  font-size: 16px;
  width: 16px;
  height: 16px;
  vertical-align: -2px;
}
</style>

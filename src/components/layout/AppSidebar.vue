<template>
  <a-layout-sider
    :collapsed="collapsed"
    :width="300"
    :collapsed-width="80"
    :trigger="null"
    collapsible
    class="fefu-sider"
  >
    <!-- Sider Header -->
    <div class="sider-header" :class="{ 'is-collapsed': collapsed }">
      <!-- Expanded Header -->
      <template v-if="!collapsed">
        <div class="logo-wrapper">
          <img src="../../assets/figma/logo.png" alt="FEFU One" class="logo-img" />
          <span class="logo-title">FEFU One</span>
        </div>

        <a-tooltip
          title="Свернуть меню"
          placement="bottom"
        >
          <button
            type="button"
            class="top-toggle-btn"
            aria-label="Свернуть меню"
            @click="toggleCollapsed"
          >
            <img
              src="../../assets/figma/panel-toggle.svg"
              alt="Toggle Menu"
              class="toggle-icon"
            />
          </button>
        </a-tooltip>
      </template>

      <!-- Collapsed Header: Toggle button with background INSTEAD of logo -->
      <template v-else>
        <div class="collapsed-header">
          <a-tooltip title="Развернуть меню" placement="right">
            <button
              type="button"
              class="toggle-btn-with-bg"
              aria-label="Развернуть меню"
              @click="toggleCollapsed"
            >
              <img
                src="../../assets/figma/panel-toggle.svg"
                alt="Развернуть"
                class="toggle-icon rotate-180"
              />
            </button>
          </a-tooltip>
        </div>
      </template>
    </div>

    <!-- Navigation Menu (Scrollable with Icons) -->
    <div class="menu-container">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
        mode="inline"
        class="fefu-sidebar-menu"
        :inline-indent="24"
      >
        <!-- 1. Главная -->
        <a-menu-item key="main">
          <template #icon>
            <Icon icon="fluent:home-24-filled" class="menu-icon" />
          </template>
          <span>Главная</span>
        </a-menu-item>

        <!-- 2. Пульс кампуса -->
        <a-sub-menu key="campus-pulse">
          <template #icon>
            <Icon icon="fluent:pulse-24-filled" class="menu-icon" />
          </template>
          <template #title>
            <span>Пульс кампуса</span>
          </template>
          <a-menu-item key="pulse-summary">Общая сводка</a-menu-item>
          <a-menu-item key="pulse-education">Образовательный контур</a-menu-item>
          <a-menu-item key="pulse-attendance">Посещаемость пар</a-menu-item>
          <a-menu-item key="pulse-hr">Кадровый контур</a-menu-item>
          <a-menu-item key="pulse-rooms">Помещения</a-menu-item>
          <a-menu-item key="pulse-rooms-load">Загрузка помещений</a-menu-item>
          <a-menu-item key="pulse-fixed-assets">Основные средства</a-menu-item>
          <a-menu-item key="pulse-users-workplaces">Пользователи и рабочие места</a-menu-item>
          <a-menu-item key="pulse-science">Научная деятельность</a-menu-item>
          <a-menu-item key="pulse-study-fund">Учебный фонд</a-menu-item>
          <a-menu-item key="pulse-energy">Энергопотребление</a-menu-item>
        </a-sub-menu>

        <!-- 3. Активы и объекты -->
        <a-sub-menu key="assets-objects">
          <template #icon>
            <Icon icon="fluent:grid-24-filled" class="menu-icon" />
          </template>
          <template #title>
            <span>Активы и объекты</span>
          </template>
          <a-menu-item key="assets-list">Активы</a-menu-item>
          <a-menu-item key="assets-points-of-interest">Точки интереса</a-menu-item>
          <a-menu-item key="assets-buildings">Здания и сооружения</a-menu-item>
        </a-sub-menu>

        <!-- 4. Имущественный комплекс -->
        <a-sub-menu key="property-complex">
          <template #icon>
            <Icon icon="fluent:building-bank-24-filled" class="menu-icon" />
          </template>
          <template #title>
            <span>Имущественный комплекс</span>
          </template>
          <a-menu-item key="property-rooms">Помещения</a-menu-item>
          <a-menu-item key="property-fixed-assets">Основные средства</a-menu-item>
          <a-menu-item key="property-workplaces">Рабочие места</a-menu-item>
          <a-menu-item key="property-monitoring-systems">Системы объективного контроля</a-menu-item>
        </a-sub-menu>

        <!-- 5. Пользователи -->
        <a-sub-menu key="users">
          <template #icon>
            <Icon icon="fluent:people-community-24-filled" class="menu-icon" />
          </template>
          <template #title>
            <span>Пользователи</span>
          </template>
          <a-menu-item key="users-list">Список пользователей</a-menu-item>
          <a-menu-item key="users-roles">Роли</a-menu-item>
          <a-menu-item key="users-staff-schedule">Штатное расписание</a-menu-item>
          <a-menu-item key="users-students">Студенты</a-menu-item>
          <a-menu-item key="users-job-titles">Справочник должностей</a-menu-item>
        </a-sub-menu>

        <!-- 6. Наука -->
        <a-sub-menu key="science">
          <template #icon>
            <Icon icon="fluent:beaker-24-filled" class="menu-icon" />
          </template>
          <template #title>
            <span>Наука</span>
          </template>
          <a-menu-item key="science-teams">Коллективы</a-menu-item>
          <a-menu-item key="science-achievements">Достижения</a-menu-item>
        </a-sub-menu>

        <!-- 7. Транспорт -->
        <a-sub-menu key="transport">
          <template #icon>
            <Icon icon="fluent:vehicle-car-24-filled" class="menu-icon" />
          </template>
          <template #title>
            <span>Транспорт</span>
          </template>
          <a-menu-item key="transport-city-shuttles">Городские шаттлы</a-menu-item>
        </a-sub-menu>

        <!-- 8. Типы и классы -->
        <a-menu-item key="types-classes">
          <template #icon>
            <Icon icon="fluent:tag-multiple-24-filled" class="menu-icon" />
          </template>
          <span>Типы и классы</span>
        </a-menu-item>

        <!-- 9. Подразделения -->
        <a-menu-item key="departments">
          <template #icon>
            <Icon icon="fluent:organization-24-filled" class="menu-icon" />
          </template>
          <span>Подразделения</span>
        </a-menu-item>

        <!-- 10. Бронирование -->
        <a-sub-menu key="booking">
          <template #icon>
            <Icon icon="fluent:calendar-ltr-24-filled" class="menu-icon" />
          </template>
          <template #title>
            <span>Бронирование</span>
          </template>
          <a-menu-item key="booking-events-registry">Реестр мероприятий</a-menu-item>
          <a-menu-item key="booking-objects-registry">Реестр объектов бронирования</a-menu-item>
          <a-menu-item key="booking-inventory-warehouse">Склад ТМЦ</a-menu-item>
        </a-sub-menu>

        <!-- 11. Категории поиска -->
        <a-menu-item key="search-categories">
          <template #icon>
            <Icon icon="fluent:search-24-filled" class="menu-icon" />
          </template>
          <span>Категории поиска</span>
        </a-menu-item>

        <!-- 12. Сообщения от пользователей -->
        <a-sub-menu key="user-messages">
          <template #icon>
            <Icon icon="fluent:chat-multiple-24-filled" class="menu-icon" />
          </template>
          <template #title>
            <span>Сообщения от пользователей</span>
          </template>
          <a-menu-item key="messages-feedback">Обратная связь</a-menu-item>
          <a-menu-item key="messages-data-errors">Ошибки в данных</a-menu-item>
        </a-sub-menu>

        <!-- 13. Постоянные ссылки -->
        <a-menu-item key="permanent-links">
          <template #icon>
            <Icon icon="fluent:link-24-filled" class="menu-icon" />
          </template>
          <span>Постоянные ссылки</span>
        </a-menu-item>
      </a-menu>
    </div>

    <!-- Edge-to-Edge Divider -->
    <div class="edge-to-edge-divider"></div>

    <!-- Sidebar Bottom Footer -->
    <div class="sider-footer" :class="{ 'is-collapsed': collapsed }">
      <!-- 1. Theme Switcher -->
      <!-- In Expanded View: Segmented Control with 3 icons (Light, Dark, System) -->
      <div v-if="!collapsed" class="theme-segmented-container">
        <a-segmented
          v-model:value="themeMode"
          :options="themeOptions"
          :block="true"
          class="theme-segmented"
        >
          <template #label="{ value }">
            <a-tooltip
              :title="
                value === 'light'
                  ? 'Светлая тема'
                  : value === 'dark'
                  ? 'Тёмная тема'
                  : 'Системная тема'
              "
              placement="top"
            >
              <div class="segmented-icon-btn">
                <!-- Sun Icon (Light) -->
                <Icon
                  v-if="value === 'light'"
                  icon="fluent:weather-sunny-24-filled"
                  class="theme-icon"
                />
                <!-- Moon Icon (Dark) -->
                <Icon
                  v-else-if="value === 'dark'"
                  icon="fluent:weather-moon-24-filled"
                  class="theme-icon"
                />
                <!-- Monitor Icon (System) -->
                <Icon
                  v-else
                  icon="fluent:desktop-24-filled"
                  class="theme-icon"
                />
              </div>
            </a-tooltip>
          </template>
        </a-segmented>
      </div>

      <!-- In Collapsed View: Single 40x40 Icon Button cycling theme sequentially -->
      <a-tooltip
        v-else
        :title="
          themeMode === 'light'
            ? 'Светлая тема (клик: тёмная)'
            : themeMode === 'dark'
            ? 'Тёмная тема (клик: системная)'
            : 'Системная тема (клик: светлая)'
        "
        placement="right"
      >
        <button
          type="button"
          class="collapsed-theme-btn"
          aria-label="Сменить тему"
          @click="cycleTheme"
        >
          <!-- Sun Icon (Light) -->
          <Icon
            v-if="themeMode === 'light'"
            icon="fluent:weather-sunny-24-filled"
            class="theme-icon"
          />
          <!-- Moon Icon (Dark) -->
          <Icon
            v-else-if="themeMode === 'dark'"
            icon="fluent:weather-moon-24-filled"
            class="theme-icon"
          />
          <!-- Monitor Icon (System) -->
          <Icon
            v-else
            icon="fluent:desktop-24-filled"
            class="theme-icon"
          />
        </button>
      </a-tooltip>

      <!-- 2. Bottom Actions Row -->
      <!-- Expanded: Return to Map takes full width -->
      <div v-if="!collapsed" class="bottom-actions-row">
        <a
          href="/map"
          class="return-map-btn full-width"
          @click.prevent="handleReturnToMap"
        >
          <Icon icon="fluent:map-24-filled" class="map-icon" />
          <span class="map-label">Вернуться на карту</span>
        </a>
      </div>

      <!-- Collapsed: Return to Map is a centered 40x40 icon button -->
      <div v-else class="bottom-actions-collapsed">
        <a-tooltip title="Вернуться на карту" placement="right">
          <a
            href="/map"
            class="return-map-btn icon-only"
            @click.prevent="handleReturnToMap"
          >
            <Icon icon="fluent:map-24-filled" class="map-icon" />
          </a>
        </a-tooltip>
      </div>
    </div>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { message } from 'ant-design-vue'
import { Icon } from '../../icons'
import { useTheme } from '../../composables/useTheme'

const props = defineProps<{
  collapsed: boolean
}>()

const emit = defineEmits<{
  (e: 'update:collapsed', val: boolean): void
}>()

const { themeMode, cycleTheme } = useTheme()

const themeOptions = [
  { value: 'light' },
  { value: 'dark' },
  { value: 'system' }
]

const selectedKeys = ref<string[]>(['main'])
const openKeys = ref<string[]>([])

const toggleCollapsed = () => {
  emit('update:collapsed', !props.collapsed)
}

const handleReturnToMap = () => {
  message.info('Переход на интерактивную карту кампуса')
}
</script>

<style scoped>
.fefu-sider {
  background: var(--fefu-bg-container) !important;
  border-right: 1px solid var(--fefu-border);
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1) !important;
}

:deep(.ant-layout-sider-children) {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Sider Header */
.sider-header {
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid transparent;
  transition: padding 0.2s ease;
}

.sider-header.is-collapsed {
  padding: 12px 0 !important;
  justify-content: center !important;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  user-select: none;
}

.logo-wrapper.is-collapsed {
  justify-content: center !important;
  width: 100% !important;
  margin: 0 auto !important;
  gap: 0;
}

.logo-img {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
}

.logo-title {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  color: var(--fefu-text);
  white-space: nowrap;
}

/* Top toggle button for variants 2 and 3 */
.top-toggle-btn {
  width: 32px;
  height: 32px;
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.top-toggle-btn:hover {
  background: var(--fefu-hover-bg);
}

.top-toggle-btn:active {
  background: var(--fefu-active-bg);
}

/* Collapsed Header: Toggle button with background at top */
.collapsed-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-btn-with-bg {
  width: 40px;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid var(--fefu-border);
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.2s, transform 0.2s;
}

html.dark .toggle-btn-with-bg {
  background: rgba(255, 255, 255, 0.08);
}

.toggle-btn-with-bg:hover {
  background: var(--fefu-hover-bg);
  border-color: var(--fefu-primary);
  transform: scale(1.04);
}

/* Menu Container */
.menu-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.menu-icon {
  width: 20px;
  height: 20px;
  font-size: 20px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.menu-container::-webkit-scrollbar {
  width: 4px;
}

.menu-container::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}

.menu-container::-webkit-scrollbar-track {
  background: transparent;
}

/* Edge to Edge Divider */
.edge-to-edge-divider {
  width: 100%;
  height: 1px;
  background-color: var(--fefu-border);
  flex-shrink: 0;
}

/* Sider Footer */
.sider-footer {
  margin-top: auto;
  padding: 10px 12px 14px 12px;
  background: var(--fefu-bg-container);
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  transition: padding 0.2s ease;
}

.sider-footer.is-collapsed {
  padding: 10px 0 14px 0 !important;
  align-items: center !important;
}

/* Theme Segmented Control (Expanded) */
.theme-segmented-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.theme-segmented {
  width: 100%;
  background: rgba(0, 0, 0, 0.04);
  padding: 3px;
  border-radius: 8px;
}

html.dark .theme-segmented {
  background: rgba(255, 255, 255, 0.08);
}

.segmented-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
}

.theme-icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  color: var(--fefu-text);
}

/* Collapsed Theme Button (Square 40x40) */
.collapsed-theme-btn {
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
  margin: 0 auto;
  transition: background-color 0.2s, color 0.2s;
  color: var(--fefu-text);
}

.collapsed-theme-btn:hover {
  background: var(--fefu-hover-bg);
  color: var(--fefu-primary);
}

/* Bottom Actions Row (Expanded) */
.bottom-actions-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.return-map-btn {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 10px;
  border-radius: 6px;
  color: var(--fefu-text);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;
  overflow: hidden;
  white-space: nowrap;
}

.return-map-btn.full-width {
  flex: 1;
  width: 100%;
}

.return-map-btn:hover {
  background-color: var(--fefu-hover-bg);
  color: var(--fefu-primary);
}

.return-map-btn:hover .map-icon {
  color: var(--fefu-primary);
}

.map-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--fefu-text);
  transition: color 0.2s ease;
}

.map-label {
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Bottom Actions (Collapsed: Stacked, square 40x40 centered) */
.bottom-actions-collapsed {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.return-map-btn.icon-only {
  width: 40px;
  height: 40px;
  min-width: 40px;
  padding: 0;
  justify-content: center;
  margin: 0 auto;
  border-radius: 8px;
  flex: unset;
}

.toggle-icon {
  width: 15px;
  height: 15px;
  display: block;
  transition: transform 0.2s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>

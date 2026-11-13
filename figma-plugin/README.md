# Плагин генерации сайдбара FEFU One для Figma

Плагин создаёт нативные компоненты сайдбара в Figma (в развёрнутом 300px и свёрнутом 80px состояниях) с использованием:
1. **Auto Layout** (нативные фреймы со свойствами `layoutMode`, `padding`, `itemSpacing`, `primaryAxisAlignItems`).
2. **Токенов библиотеки Ant Design** (привязанные переменные `Component/Menu/colorItemBgSelected`, `Component/Menu/colorItemTextSelected`, `Global/Colors/Neutral/Border/colorBorder`, `Component/Menu/radiusItem`, `Global/Colors/Neutral/Text/colorText` и др.).

## Варианты запуска:

### Вариант 1. Моментально через консоль Figma (самый быстрый, 0.1 сек)
1. Откройте нужный файл в Figma Desktop или Web (например, `https://www.figma.com/design/RwuPwU3dqd8xBR0yiXXVIO/Widgets`).
2. Откройте консоль разработчика:
   - В Figma Desktop: Меню -> `Plugins` -> `Development` -> `Open Console` (или `Ctrl + Shift + I` / `Cmd + Option + I`).
   - В браузере: `F12` или `Ctrl + Shift + I` -> вкладка `Console`.
3. Скопируйте всё содержимое файла `console_snippet.js` и вставьте в консоль, затем нажмите `Enter`.
4. На текущей странице сразу появятся оба сайдбара с автолейаутами и привязанными токенами!

### Вариант 2. Локальный плагин в Figma Desktop
1. В Figma Desktop откройте меню `Plugins` -> `Development` -> `Import plugin from manifest...`.
2. Выберите файл `manifest.json` из этой папки (`d:/Git/FEFUone/Admin/figma-plugin/manifest.json`).
3. Запустите плагин из меню `Plugins` -> `Development` -> `FEFU One Sidebar Generator`.
4. В появившемся окне нажмите «✨ Создать оба состояния (300px + 80px)».

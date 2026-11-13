(async () => {
  console.log("🚀 Запуск генератора сайдбаров FEFU One с Auto Layout и токенами Ant...");
  "use strict";
const PANEL_WIDTH = 300;
const icons = {
    "home": "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z",
    "rise": "M917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3-226 226-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 000 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534 535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0013.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8z",
    "appstore": "M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z",
    "bank": "M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 00-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM512 196.7l271.1 197.2H240.9L512 196.7zM264 462h117v374H264V462zm189 0h117v374H453V462zm307 374H642V462h118v374z",
    "team": "M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612z",
    "experiment": "M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z",
    "car": "M380 704h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8zm340-123a40 40 0 1080 0 40 40 0 10-80 0zm239-167.6L935.3 372a8 8 0 00-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 00-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 00-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 003-10.8zM840 517v237H184V517l15.6-43h624.8l15.6 43zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM224 581a40 40 0 1080 0 40 40 0 10-80 0z",
    "tags": "M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 000 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9zm60.16 186.23a48 48 0 1067.88-67.89 48 48 0 10-67.88 67.89z",
    "apartment": "M908 640H804V488c0-4.4-3.6-8-8-8H548v-96h108c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h108v96H228c-4.4 0-8 3.6-8 8v152H116c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V656c0-8.8-7.2-16-16-16H292v-88h440v88H620c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V656c0-8.8-7.2-16-16-16zm-564 76v168H176V716h168zm84-408V140h168v168H428zm420 576H680V716h168v168z",
    "calendar": "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z",
    "search": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",
    "message": "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z",
    "link": "M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z",
    "panelToggle": "M10.33 1.86c.46 0 .9.18 1.23.51.33.33.51.77.51 1.23v5.8c0 .46-.18.9-.51 1.23-.33.33-.77.51-1.23.51H2.67c-.46 0-.9-.18-1.23-.51-.33-.33-.51-.77-.51-1.23V3.6c0-.46.18-.9.51-1.23.33-.33.77-.51 1.23-.51h7.66zm-5.22 8.59h5.22c.28 0 .54-.11.74-.31.2-.2.31-.46.31-.74V3.6c0-.28-.11-.54-.31-.74-.2-.2-.46-.31-.74-.31H5.11v7.9z",
    "map": "M2 4l4-2 4 2 4-2v10l-4 2-4-2-4 2V4zm4-2v10m4-8v10",
    "sun": "M8 4.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM8 1v1.5m0 11V15M1 8h1.5m11 0H15",
    "moon": "M12.5 8.2A5.5 5.5 0 016.8 2.5a5.5 5.5 0 105.7 5.7z",
    "monitor": "M1.5 2h13v9h-13zM5.5 14h5M8 11v3",
    "chevronDown": "M2 3l3 3 3-3"
};
const menuItems = [
    {
        "key": "main",
        "label": "Главная",
        "icon": "home",
        "hasSub": false,
        "active": true
    },
    {
        "key": "campus-pulse",
        "label": "Пульс кампуса",
        "icon": "rise",
        "hasSub": true
    },
    {
        "key": "assets-objects",
        "label": "Активы и объекты",
        "icon": "appstore",
        "hasSub": true
    },
    {
        "key": "property-complex",
        "label": "Имущественный комплекс",
        "icon": "bank",
        "hasSub": true
    },
    {
        "key": "users",
        "label": "Пользователи",
        "icon": "team",
        "hasSub": true
    },
    {
        "key": "science",
        "label": "Наука",
        "icon": "experiment",
        "hasSub": true
    },
    {
        "key": "transport",
        "label": "Транспорт",
        "icon": "car",
        "hasSub": true
    },
    {
        "key": "types-classes",
        "label": "Типы и классы",
        "icon": "tags",
        "hasSub": false
    },
    {
        "key": "departments",
        "label": "Подразделения",
        "icon": "apartment",
        "hasSub": false
    },
    {
        "key": "booking",
        "label": "Бронирование",
        "icon": "calendar",
        "hasSub": true
    },
    {
        "key": "search-categories",
        "label": "Категории поиска",
        "icon": "search",
        "hasSub": false
    },
    {
        "key": "user-messages",
        "label": "Сообщения от пользователей",
        "icon": "message",
        "hasSub": true
    },
    {
        "key": "permanent-links",
        "label": "Постоянные ссылки",
        "icon": "link",
        "hasSub": false
    }
];
async function runGenerator(mode) {
    await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
    await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });
    await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
    // Get local variables
    const localVars = await figma.variables.getLocalVariablesAsync();
    const getVar = (name) => localVars.find(v => v.name === name || v.name.endsWith('/' + name));
    const vColorBorder = getVar('Global/Colors/Neutral/Border/colorBorder') || getVar('colorBorder');
    const vColorBg = getVar('Component/Menu/colorItemBg') || getVar('colorItemBg');
    const vColorItemBgSelected = getVar('Component/Menu/colorItemBgSelected') || getVar('colorItemBgSelected');
    const vColorItemTextSelected = getVar('Component/Menu/colorItemTextSelected') || getVar('colorItemTextSelected');
    const vColorItemText = getVar('Component/Menu/colorItemText') || getVar('colorItemText');
    const vColorText = getVar('Global/Colors/Neutral/Text/colorText') || getVar('colorText');
    const vRadiusItem = getVar('Component/Menu/radiusItem') || getVar('radiusItem');
    const vRadiusML = getVar('Global/Border/Border Radius/borderRadiusML') || getVar('borderRadiusML');
    const vFillQuaternary = getVar('Global/Colors/Neutral/Fill/colorFillQuaternary') || getVar('colorFillQuaternary');
    function setSolidFill(node, color, variable, opacity = 1) {
        const paint = { type: 'SOLID', color, opacity };
        if (variable) {
            try {
                const bound = figma.variables.setBoundVariableForPaint(paint, 'color', variable);
                node.fills = [bound];
                return;
            }
            catch (e) { }
        }
        node.fills = [paint];
    }
    function setSolidStroke(node, color, variable) {
        const paint = { type: 'SOLID', color };
        if (variable) {
            try {
                const bound = figma.variables.setBoundVariableForPaint(paint, 'color', variable);
                node.strokes = [bound];
                return;
            }
            catch (e) { }
        }
        node.strokes = [paint];
    }
    function setCornerRadius(node, radius, variable) {
        node.topLeftRadius = radius;
        node.topRightRadius = radius;
        node.bottomLeftRadius = radius;
        node.bottomRightRadius = radius;
        if (variable) {
            try {
                node.setBoundVariable('topLeftRadius', variable);
                node.setBoundVariable('topRightRadius', variable);
                node.setBoundVariable('bottomLeftRadius', variable);
                node.setBoundVariable('bottomRightRadius', variable);
            }
            catch (e) { }
        }
    }
    function createText(text, size = 14, style = 'Regular', color = { r: 0.07, g: 0.07, b: 0.07 }, variable) {
        const t = figma.createText();
        t.fontName = { family: 'Inter', style };
        t.characters = text;
        t.fontSize = size;
        setSolidFill(t, color, variable);
        return t;
    }
    function createSvgIcon(pathData, size = 16, viewBox = '0 0 1024 1024', color = { r: 0.07, g: 0.07, b: 0.07 }, variable, strokeOnly = false) {
        let svg = '';
        if (strokeOnly) {
            svg = '<svg width="' + size + '" height="' + size + '" viewBox="' + viewBox + '" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="' + pathData + '" stroke="#121212" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        }
        else {
            svg = '<svg width="' + size + '" height="' + size + '" viewBox="' + viewBox + '" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="' + pathData + '" fill="#121212"/></svg>';
        }
        const frame = figma.createNodeFromSvg(svg);
        frame.name = 'icon';
        frame.resize(size, size);
        const vector = frame.findOne(n => n.type === 'VECTOR');
        if (vector) {
            if (strokeOnly) {
                setSolidStroke(vector, color, variable);
            }
            else {
                setSolidFill(vector, color, variable);
            }
        }
        return frame;
    }
    function buildExpandedSidebar() {
        const root = figma.createFrame();
        root.name = 'Sidebar / State=Expanded (Auto Layout)';
        root.resize(300, 960);
        root.layoutMode = 'VERTICAL';
        root.primaryAxisAlignItems = 'SPACE_BETWEEN';
        root.counterAxisAlignItems = 'STRETCH';
        root.layoutSizingHorizontal = 'FIXED';
        root.layoutSizingVertical = 'FIXED';
        setSolidFill(root, { r: 1, g: 1, b: 1 }, vColorBg);
        root.strokeRightWeight = 1;
        root.strokeLeftWeight = 0;
        root.strokeTopWeight = 0;
        root.strokeBottomWeight = 0;
        setSolidStroke(root, { r: 0.87, g: 0.87, b: 0.87 }, vColorBorder);
        // Top Section
        const top = figma.createFrame();
        top.name = 'Top Container';
        top.layoutMode = 'VERTICAL';
        top.layoutSizingHorizontal = 'FILL';
        top.layoutSizingVertical = 'HUG';
        top.itemSpacing = 4;
        setSolidFill(top, { r: 1, g: 1, b: 1 }, undefined, 0);
        root.appendChild(top);
        // Header (Auto Layout horizontal)
        const header = figma.createFrame();
        header.name = 'Header';
        header.layoutMode = 'HORIZONTAL';
        header.layoutSizingHorizontal = 'FILL';
        header.layoutSizingVertical = 'FIXED';
        header.resize(300, 64);
        header.primaryAxisAlignItems = 'SPACE_BETWEEN';
        header.counterAxisAlignItems = 'CENTER';
        header.paddingLeft = 16;
        header.paddingRight = 12;
        header.paddingTop = 12;
        header.paddingBottom = 12;
        setSolidFill(header, { r: 1, g: 1, b: 1 }, undefined, 0);
        top.appendChild(header);
        // Logo + Title box
        const logoBox = figma.createFrame();
        logoBox.name = 'Logo and Title';
        logoBox.layoutMode = 'HORIZONTAL';
        logoBox.layoutSizingHorizontal = 'HUG';
        logoBox.layoutSizingVertical = 'HUG';
        logoBox.counterAxisAlignItems = 'CENTER';
        logoBox.itemSpacing = 12;
        setSolidFill(logoBox, { r: 1, g: 1, b: 1 }, undefined, 0);
        header.appendChild(logoBox);
        const logo = figma.createFrame();
        logo.name = 'Logo';
        logo.resize(36, 36);
        setCornerRadius(logo, 6, vRadiusML);
        setSolidFill(logo, { r: 0.18, g: 0.51, b: 0.81 });
        logoBox.appendChild(logo);
        const title = createText('FEFU One', 19, 'Bold', { r: 0.07, g: 0.07, b: 0.07 }, vColorText);
        logoBox.appendChild(title);
        // Top Collapse Toggle
        const toggleTop = figma.createFrame();
        toggleTop.name = 'Button / Collapse';
        toggleTop.resize(32, 32);
        toggleTop.layoutMode = 'HORIZONTAL';
        toggleTop.primaryAxisAlignItems = 'CENTER';
        toggleTop.counterAxisAlignItems = 'CENTER';
        setCornerRadius(toggleTop, 6, vRadiusML);
        setSolidFill(toggleTop, { r: 1, g: 1, b: 1 }, undefined, 0);
        header.appendChild(toggleTop);
        const toggleTopIcon = createSvgIcon(icons.panelToggle, 14, '0 0 13 13', { r: 0.07, g: 0.07, b: 0.07 }, vColorText);
        toggleTop.appendChild(toggleTopIcon);
        // Menu List (Auto Layout vertical)
        const menu = figma.createFrame();
        menu.name = 'Menu Items';
        menu.layoutMode = 'VERTICAL';
        menu.layoutSizingHorizontal = 'FILL';
        menu.layoutSizingVertical = 'HUG';
        menu.itemSpacing = 2;
        menu.paddingLeft = 4;
        menu.paddingRight = 4;
        setSolidFill(menu, { r: 1, g: 1, b: 1 }, undefined, 0);
        top.appendChild(menu);
        for (const item of menuItems) {
            const row = figma.createFrame();
            row.name = 'Item / ' + item.label;
            row.layoutMode = 'HORIZONTAL';
            row.layoutSizingHorizontal = 'FILL';
            row.layoutSizingVertical = 'FIXED';
            row.resize(292, 40);
            row.counterAxisAlignItems = 'CENTER';
            row.primaryAxisAlignItems = 'SPACE_BETWEEN';
            row.paddingLeft = 14;
            row.paddingRight = 14;
            setCornerRadius(row, 8, vRadiusItem);
            if (item.active) {
                setSolidFill(row, { r: 0.9, g: 0.96, b: 1 }, vColorItemBgSelected);
            }
            else {
                setSolidFill(row, { r: 1, g: 1, b: 1 }, undefined, 0);
            }
            menu.appendChild(row);
            const left = figma.createFrame();
            left.name = 'Left';
            left.layoutMode = 'HORIZONTAL';
            left.layoutSizingHorizontal = 'HUG';
            left.layoutSizingVertical = 'HUG';
            left.counterAxisAlignItems = 'CENTER';
            left.itemSpacing = 12;
            setSolidFill(left, { r: 1, g: 1, b: 1 }, undefined, 0);
            row.appendChild(left);
            const col = item.active ? { r: 0.18, g: 0.51, b: 0.81 } : { r: 0.07, g: 0.07, b: 0.07 };
            const vCol = item.active ? vColorItemTextSelected : vColorItemText;
            const ic = createSvgIcon(icons[item.icon], 16, '0 0 1024 1024', col, vCol);
            left.appendChild(ic);
            const tx = createText(item.label, 14, item.active ? 'Medium' : 'Regular', col, vCol);
            left.appendChild(tx);
            if (item.hasSub) {
                const chev = createSvgIcon(icons.chevronDown, 10, '0 0 10 10', { r: 0.5, g: 0.5, b: 0.5 }, undefined, true);
                row.appendChild(chev);
            }
        }
        // Footer Container (Auto Layout vertical)
        const footer = figma.createFrame();
        footer.name = 'Footer';
        footer.layoutMode = 'VERTICAL';
        footer.layoutSizingHorizontal = 'FILL';
        footer.layoutSizingVertical = 'HUG';
        footer.itemSpacing = 12;
        footer.paddingBottom = 16;
        setSolidFill(footer, { r: 1, g: 1, b: 1 }, undefined, 0);
        root.appendChild(footer);
        // Segmented theme control
        const themeWrap = figma.createFrame();
        themeWrap.name = 'Theme Wrapper';
        themeWrap.layoutMode = 'HORIZONTAL';
        themeWrap.layoutSizingHorizontal = 'FILL';
        themeWrap.layoutSizingVertical = 'HUG';
        themeWrap.paddingLeft = 12;
        themeWrap.paddingRight = 12;
        setSolidFill(themeWrap, { r: 1, g: 1, b: 1 }, undefined, 0);
        footer.appendChild(themeWrap);
        const themeCtrl = figma.createFrame();
        themeCtrl.name = 'Segmented Control';
        themeCtrl.layoutMode = 'HORIZONTAL';
        themeCtrl.layoutSizingHorizontal = 'FILL';
        themeCtrl.layoutSizingVertical = 'FIXED';
        themeCtrl.resize(276, 32);
        themeCtrl.paddingLeft = 2;
        themeCtrl.paddingRight = 2;
        themeCtrl.paddingTop = 2;
        themeCtrl.paddingBottom = 2;
        themeCtrl.itemSpacing = 2;
        setCornerRadius(themeCtrl, 8, vRadiusItem);
        setSolidFill(themeCtrl, { r: 0, g: 0, b: 0 }, vFillQuaternary, 0.04);
        themeWrap.appendChild(themeCtrl);
        function addSegment(iconPath, active) {
            const seg = figma.createFrame();
            seg.name = 'Segment';
            seg.layoutMode = 'HORIZONTAL';
            seg.layoutSizingHorizontal = 'FILL';
            seg.layoutSizingVertical = 'FILL';
            seg.primaryAxisAlignItems = 'CENTER';
            seg.counterAxisAlignItems = 'CENTER';
            setCornerRadius(seg, 6, vRadiusML);
            if (active) {
                setSolidFill(seg, { r: 1, g: 1, b: 1 }, vColorBg);
            }
            else {
                setSolidFill(seg, { r: 1, g: 1, b: 1 }, undefined, 0);
            }
            const icon = createSvgIcon(iconPath, 14, '0 0 16 16', { r: 0.07, g: 0.07, b: 0.07 }, vColorText, true);
            seg.appendChild(icon);
            return seg;
        }
        themeCtrl.appendChild(addSegment(icons.sun, false));
        themeCtrl.appendChild(addSegment(icons.moon, false));
        themeCtrl.appendChild(addSegment(icons.monitor, true));
        // Divider
        const divider = figma.createFrame();
        divider.name = 'Divider';
        divider.layoutMode = 'HORIZONTAL';
        divider.layoutSizingHorizontal = 'FILL';
        divider.layoutSizingVertical = 'FIXED';
        divider.resize(300, 1);
        setSolidFill(divider, { r: 0.87, g: 0.87, b: 0.87 }, vColorBorder);
        footer.appendChild(divider);
        // Bottom actions
        const bottomActions = figma.createFrame();
        bottomActions.name = 'Bottom Actions';
        bottomActions.layoutMode = 'HORIZONTAL';
        bottomActions.layoutSizingHorizontal = 'FILL';
        bottomActions.layoutSizingVertical = 'HUG';
        bottomActions.primaryAxisAlignItems = 'SPACE_BETWEEN';
        bottomActions.counterAxisAlignItems = 'CENTER';
        bottomActions.paddingLeft = 12;
        bottomActions.paddingRight = 12;
        setSolidFill(bottomActions, { r: 1, g: 1, b: 1 }, undefined, 0);
        footer.appendChild(bottomActions);
        const mapBtn = figma.createFrame();
        mapBtn.name = 'Button / Map';
        mapBtn.layoutMode = 'HORIZONTAL';
        mapBtn.layoutSizingHorizontal = 'FILL';
        mapBtn.layoutSizingVertical = 'FIXED';
        mapBtn.resize(232, 36);
        mapBtn.counterAxisAlignItems = 'CENTER';
        mapBtn.itemSpacing = 8;
        mapBtn.paddingLeft = 8;
        mapBtn.paddingRight = 8;
        setCornerRadius(mapBtn, 6, vRadiusML);
        setSolidFill(mapBtn, { r: 1, g: 1, b: 1 }, undefined, 0);
        bottomActions.appendChild(mapBtn);
        const mapIcon = createSvgIcon(icons.map, 14, '0 0 16 16', { r: 0.07, g: 0.07, b: 0.07 }, vColorText, true);
        mapBtn.appendChild(mapIcon);
        const mapText = createText('Вернуться на карту', 13, 'Medium', { r: 0.07, g: 0.07, b: 0.07 }, vColorText);
        mapBtn.appendChild(mapText);
        const bToggle = figma.createFrame();
        bToggle.name = 'Button / Collapse Bottom';
        bToggle.layoutMode = 'HORIZONTAL';
        bToggle.primaryAxisAlignItems = 'CENTER';
        bToggle.counterAxisAlignItems = 'CENTER';
        bToggle.resize(36, 36);
        setCornerRadius(bToggle, 6, vRadiusML);
        setSolidFill(bToggle, { r: 1, g: 1, b: 1 }, undefined, 0);
        bottomActions.appendChild(bToggle);
        const bToggleIcon = createSvgIcon(icons.panelToggle, 14, '0 0 13 13', { r: 0.07, g: 0.07, b: 0.07 }, vColorText);
        bToggle.appendChild(bToggleIcon);
        return root;
    }
    function buildCollapsedSidebar() {
        const root = figma.createFrame();
        root.name = 'Sidebar / State=Collapsed (Auto Layout)';
        root.resize(80, 960);
        root.layoutMode = 'VERTICAL';
        root.primaryAxisAlignItems = 'SPACE_BETWEEN';
        root.counterAxisAlignItems = 'CENTER';
        root.layoutSizingHorizontal = 'FIXED';
        root.layoutSizingVertical = 'FIXED';
        setSolidFill(root, { r: 1, g: 1, b: 1 }, vColorBg);
        root.strokeRightWeight = 1;
        root.strokeLeftWeight = 0;
        root.strokeTopWeight = 0;
        root.strokeBottomWeight = 0;
        setSolidStroke(root, { r: 0.87, g: 0.87, b: 0.87 }, vColorBorder);
        // Top Section
        const top = figma.createFrame();
        top.name = 'Top Container';
        top.layoutMode = 'VERTICAL';
        top.layoutSizingHorizontal = 'FILL';
        top.layoutSizingVertical = 'HUG';
        top.counterAxisAlignItems = 'CENTER';
        top.itemSpacing = 4;
        setSolidFill(top, { r: 1, g: 1, b: 1 }, undefined, 0);
        root.appendChild(top);
        // Header
        const header = figma.createFrame();
        header.name = 'Header';
        header.layoutMode = 'HORIZONTAL';
        header.layoutSizingHorizontal = 'FILL';
        header.layoutSizingVertical = 'FIXED';
        header.resize(80, 64);
        header.primaryAxisAlignItems = 'CENTER';
        header.counterAxisAlignItems = 'CENTER';
        setSolidFill(header, { r: 1, g: 1, b: 1 }, undefined, 0);
        top.appendChild(header);
        const logo = figma.createFrame();
        logo.name = 'Logo';
        logo.resize(36, 36);
        setCornerRadius(logo, 6, vRadiusML);
        setSolidFill(logo, { r: 0.18, g: 0.51, b: 0.81 });
        header.appendChild(logo);
        // Menu List (Auto Layout vertical)
        const menu = figma.createFrame();
        menu.name = 'Menu Items';
        menu.layoutMode = 'VERTICAL';
        menu.layoutSizingHorizontal = 'FILL';
        menu.layoutSizingVertical = 'HUG';
        menu.counterAxisAlignItems = 'CENTER';
        menu.itemSpacing = 2;
        setSolidFill(menu, { r: 1, g: 1, b: 1 }, undefined, 0);
        top.appendChild(menu);
        for (const item of menuItems) {
            const square = figma.createFrame();
            square.name = 'Item / ' + item.label;
            square.layoutMode = 'HORIZONTAL';
            square.primaryAxisAlignItems = 'CENTER';
            square.counterAxisAlignItems = 'CENTER';
            square.resize(40, 40);
            setCornerRadius(square, 8, vRadiusItem);
            if (item.active) {
                setSolidFill(square, { r: 0.9, g: 0.96, b: 1 }, vColorItemBgSelected);
            }
            else {
                setSolidFill(square, { r: 1, g: 1, b: 1 }, undefined, 0);
            }
            menu.appendChild(square);
            const col = item.active ? { r: 0.18, g: 0.51, b: 0.81 } : { r: 0.07, g: 0.07, b: 0.07 };
            const vCol = item.active ? vColorItemTextSelected : vColorItemText;
            const ic = createSvgIcon(icons[item.icon], 16, '0 0 1024 1024', col, vCol);
            square.appendChild(ic);
        }
        // Footer Container (Auto Layout vertical)
        const footer = figma.createFrame();
        footer.name = 'Footer';
        footer.layoutMode = 'VERTICAL';
        footer.layoutSizingHorizontal = 'FILL';
        footer.layoutSizingVertical = 'HUG';
        footer.counterAxisAlignItems = 'CENTER';
        footer.itemSpacing = 6;
        footer.paddingBottom = 16;
        setSolidFill(footer, { r: 1, g: 1, b: 1 }, undefined, 0);
        root.appendChild(footer);
        // Theme Button (40x40)
        const themeBtn = figma.createFrame();
        themeBtn.name = 'Button / Theme Cycle';
        themeBtn.layoutMode = 'HORIZONTAL';
        themeBtn.primaryAxisAlignItems = 'CENTER';
        themeBtn.counterAxisAlignItems = 'CENTER';
        themeBtn.resize(40, 40);
        setCornerRadius(themeBtn, 8, vRadiusItem);
        setSolidFill(themeBtn, { r: 1, g: 1, b: 1 }, undefined, 0);
        const themeIcon = createSvgIcon(icons.monitor, 16, '0 0 16 16', { r: 0.07, g: 0.07, b: 0.07 }, vColorText, true);
        themeBtn.appendChild(themeIcon);
        footer.appendChild(themeBtn);
        // Divider
        const divider = figma.createFrame();
        divider.name = 'Divider';
        divider.layoutMode = 'HORIZONTAL';
        divider.layoutSizingHorizontal = 'FILL';
        divider.layoutSizingVertical = 'FIXED';
        divider.resize(80, 1);
        setSolidFill(divider, { r: 0.87, g: 0.87, b: 0.87 }, vColorBorder);
        footer.appendChild(divider);
        // Collapse Toggle Button (under theme, above map)
        const toggleBtn = figma.createFrame();
        toggleBtn.name = 'Button / Toggle Collapse';
        toggleBtn.layoutMode = 'HORIZONTAL';
        toggleBtn.primaryAxisAlignItems = 'CENTER';
        toggleBtn.counterAxisAlignItems = 'CENTER';
        toggleBtn.resize(40, 40);
        setCornerRadius(toggleBtn, 8, vRadiusItem);
        setSolidFill(toggleBtn, { r: 1, g: 1, b: 1 }, undefined, 0);
        // panelToggle inverted in SVG
        const toggleRotatedSvg = '<svg width="14" height="14" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(180 6.5 6.5)"><path d="' + icons.panelToggle + '" fill="#121212"/></g></svg>';
        const toggleRotatedFrame = figma.createNodeFromSvg(toggleRotatedSvg);
        toggleRotatedFrame.name = 'icon';
        toggleRotatedFrame.resize(14, 14);
        const vT = toggleRotatedFrame.findOne(n => n.type === 'VECTOR');
        if (vT)
            setSolidFill(vT, { r: 0.07, g: 0.07, b: 0.07 }, vColorText);
        toggleBtn.appendChild(toggleRotatedFrame);
        footer.appendChild(toggleBtn);
        // Return to Map Button (40x40)
        const mapBtn = figma.createFrame();
        mapBtn.name = 'Button / Map';
        mapBtn.layoutMode = 'HORIZONTAL';
        mapBtn.primaryAxisAlignItems = 'CENTER';
        mapBtn.counterAxisAlignItems = 'CENTER';
        mapBtn.resize(40, 40);
        setCornerRadius(mapBtn, 8, vRadiusItem);
        setSolidFill(mapBtn, { r: 1, g: 1, b: 1 }, undefined, 0);
        const mapIcon = createSvgIcon(icons.map, 14, '0 0 16 16', { r: 0.07, g: 0.07, b: 0.07 }, vColorText, true);
        mapBtn.appendChild(mapIcon);
        footer.appendChild(mapBtn);
        return root;
    }
    // Positioning
    const center = figma.viewport.center;
    let posX = center.x - 200;
    let posY = center.y - 480;
    const createdNodes = [];
    if (mode === 'expanded' || mode === 'both') {
        const exp = buildExpandedSidebar();
        exp.x = posX;
        exp.y = posY;
        figma.currentPage.appendChild(exp);
        createdNodes.push(exp);
        posX += 340;
    }
    if (mode === 'collapsed' || mode === 'both') {
        const col = buildCollapsedSidebar();
        col.x = posX;
        col.y = posY;
        figma.currentPage.appendChild(col);
        createdNodes.push(col);
    }
    figma.currentPage.selection = createdNodes;
    figma.viewport.scrollAndZoomIntoView(createdNodes);
    figma.ui.postMessage({
        type: 'status',
        text: 'Успешно создано с автолейаутами и токенами Ant!',
        success: true
    });
}
await runGenerator("both");
console.log("✅ Сайдбары с автолейаутами и токенами Ant успешно созданы!");
})();

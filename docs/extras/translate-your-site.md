---
sidebar_position: 2
sidebar_label: 翻译您的网站
title: 翻译您的网站
---

让我们将 `/docs` 翻译成汉语

## 配置 i18n

修改 `docusaurus.config.js` 以添加对 `zh-Hans` 语言环境的支持：

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },
}
```

## 翻译一个 doc

将 `docs` 文件复制到 `i18n/zh-Hans` 文件夹：

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

将 `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` 翻译成法语

## 启动您的本地化站点

在法语环境中启动您的网站：

```bash
npm run start -- --locale fr
```

<!--
  Your localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.
-->

您的本地化站点可在 [http://localhost:3000/fr/](/) 访问 “入门”页面已翻译

:::caution

在开发环境中，您一次只能使用一种语言环境

:::

## 添加语言环境下拉菜单

要跨语言无缝导航，请添加区域设置下拉列表。

修改 `docusaurus.config.js` 文件：

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "localeDropdown",
        },
        // highlight-end
      ],
    },
  },
}
```

语言环境下拉菜单现在出现在您的导航栏中：

![Locale Dropdown](./img/localeDropdown.png)

## 打包 您的本地化网站

为特定语言环境构建您的站点：

```bash
npm run build -- --locale fr
```

或者构建您的站点以同时包含所有语言环境：

```bash
npm run build
```

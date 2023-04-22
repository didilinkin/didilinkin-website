// @ts-check
// Note: 类型注释允许类型检查和 IDE
// 参考案例: https://github.com/xiaohai-huang/learning-notes/blob/master/docusaurus.config.js

const path = require("path")
const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const { npm2yarn2pnpm } = require("@sapphire/docusaurus-plugin-npm2yarn2pnpm")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "哈希肯",
  tagline:
    "A place for organizing notes, writing blogs, and showcasing projects.",
  favicon: "img/favicon.ico",
  onBrokenLinks: "throw", // '忽略' | '日志' | '警告' | '扔'
  onBrokenMarkdownLinks: "warn",

  // Set the production url of your site here
  url: "https://didilinkin.cn",

  // 设置 /<baseUrl>/ 为您的网站提供服务的路径名称
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub 页面部署配置。
  // 如果您不使用 GitHub 页面，则不需要这些。
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  // 即使你不使用内部化，你也可以使用这个字段来设置有用的
  // 像 html lang 这样的元数据。 例如，如果你的网站是中文的，你可能想要
  // 用“zh-Hans”替换“en”。
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  plugins: [
    // 用于快速别名本地模块的 Docusaurus v2 插件
    // https://github.com/atomicpages/docusaurus-plugin-module-alias
    async function plugin(context, options) {
      return {
        name: "docusaurus-plugin-module-alias",
        configureWebpack() {
          return {
            resolve: {
              alias: {
                "@src": path.resolve(__dirname, "src"),
              },
            },
          }
        },
      }
    },

    // 生成近乎理想的图像的 Docusaurus 插件（响应式、懒加载及低像素占位图）
    // https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-ideal-image
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // 最大缩放图片尺寸。
        min: 640, // 最小缩放图片尺寸。 如果原始值比这还低，会使用原图尺寸。
        steps: 2, // 在 min 和 max 之间最多生成的图片数量（包含两端点）
        disableInDev: false,
      },
    ],
  ],

  // 预设
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: '',
          // showLastUpdateAuthor: true,  // 是否显示最后更新文档的作者
          showLastUpdateTime: true, // 是否显示最后更新文档的时间
          breadcrumbs: true, // 在文档页面上启用或禁用面包屑导航
          remarkPlugins: [
            // [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
            npm2yarn2pnpm,
          ],
        },
        pages: {
          remarkPlugins: [
            // require('@docusaurus/remark-plugin-npm2yarn'),
            npm2yarn2pnpm,
          ],
        },
        blog: {
          // path: "./blog", // 路径
          // routeBasePath: "/blog",
          showReadingTime: true,
          sortPosts: "descending", // 排序方向, 倒叙
          blogSidebarCount: "ALL",
          blogSidebarTitle: "最近内容", // 博客侧边栏的标题
          remarkPlugins: [
            // [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
            npm2yarn2pnpm,
          ],
          // https://docusaurus.io/zh-CN/docs/blog#feed
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params
              return defaultCreateFeedItems({
                // 仅保留提要中的 10 篇最新博客文章
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              })
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  // plugins: [
  //   '@docusaurus/theme-live-codeblock',
  // ],

  // 主题
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为你项目的社交卡
      image: "img/avataaars.png",
      docs: {
        sidebar: {
          hideable: false, // 可隐藏侧边栏
          autoCollapseCategories: true, // 自动折叠侧边栏类别
        },
      },

      algolia: {
        // Algolia 提供的应用 ID
        appId: "VLDY0NMJL7",
        //  公开 API 密钥：提交它没有危险
        apiKey: "e2c5226bd3db05e06e8f6cc22b142c5f", // Search-Only API Key
        indexName: "didilinkin-website",
      },

      // SEO
      metadata: [
        {
          name: "keywords",
          content: "哈希肯, didilinkin, didilinkin-website, didilinkin-blog",
        },
        {
          name: "description",
          content:
            "哈希肯 didilinkin 的个人主页. Personal blog and Documentation about full-stack development.",
        },
      ],

      navbar: {
        title: "哈希肯",
        // https://docusaurus.io/zh-CN/docs/api/themes/configuration#navbar-logo
        logo: {
          alt: "My Site Logo",
          src: "img/avataaars.png",
          // srcDark: 'img/logo_dark.svg',
          // href: '/',
          // target: '_self',
          // width: 32,
          // height: 32,
          // className: 'custom-navbar-logo-class',
          // style: {border: 'solid red'},
        },
        hideOnScroll: false, // 自动隐藏顶部导航栏
        // https://docusaurus.io/zh-CN/docs/api/themes/configuration#navbar-items
        items: [
          {
            // type: "docs",
            // docId: "docs",
            position: "left",
            label: "笔记",
            to: "/docs",
          },
          {
            to: "/blog",
            label: "博客",
            position: "left",
          },
          // { to: "/showcase", label: "展柜", position: "left" },
          // { to: "/about", label: "关于", position: "right" },
          { type: "localeDropdown", position: "right" },
          {
            // label: "GitHub",
            href: "https://github.com/didilinkin",
            position: "right",
            className: "header-icon header-github-link",
            "aria-label": "GitHub repository",
            // "uk-icon": "github",
          },
          {
            href: "https://didilinkin.cn/blog/rss.xml",
            position: "right",
            className: "header-icon header-rss-link",
            "aria-label": "RSS",
            // "uk-icon": "rss",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "笔记",
                to: "/docs",
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //   ],
          // },
          {
            title: "More",
            items: [
              { label: "博客", to: "/blog" },
              // { label: "关于", to: "/about" },
              // { label: "Resources", href: "https://github.com/xiaohai-huang/resources" },
              {
                label: "GitHub",
                href: "https://github.com/didilinkin",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 哈希肯. 本网站使用 <a href="https://docusaurus.io/zh-CN" target="_blank">Docusaurus</a> 构建`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // https://docusaurus.io/zh-CN/docs/markdown-features/code-blocks#supported-languages
        // https://prismjs.com/#supported-languages
        additionalLanguages: [
          "powershell",
          "go",
          "java",
          "solidity",
          "php",
          "yaml",
          "bash",
          "git",
          "typescript",
        ],
      },
    }),

  // 主题
  // https://docusaurus.io/zh-CN/docs/using-plugins#using-themes
  themes: ["@docusaurus/theme-live-codeblock"],

  // 这个选项允许你自定义 URL/链接后是否添加末尾斜杠，以及静态 HTML 会如何被生成。
  // 类型：boolean | undefined
  // https://docusaurus.io/zh-CN/docs/api/docusaurus-config#trailingSlash
  // trailingSlash: false,

  stylesheets: [
    // {
    //   href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
    //   integrity:
    //     "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
    //   crossorigin: "anonymous",
    // },
    "/uikit/uikit.min.css",
    "/sweetalert2/sweetalert2.min.css",
  ],

  scripts: [
    // "https://cdn-go.cn/aegis/aegis-sdk/latest/aegis.min.js",
    // "/aegis/init-script.js",
    "/uikit/uikit.min.js",
    "/uikit/uikit-icons.min.js",
    "/sweetalert2/sweetalert2.min.js",
  ],
}

module.exports = config

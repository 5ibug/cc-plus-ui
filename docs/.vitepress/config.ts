import { defineConfig } from "vitepress"
import { mdPlugin } from "./config/plugins"
export default defineConfig({
  title: "cc-plus-ui基础组件文档",
  description: "基于Element-plus基础组件封装使用",
  lang: "cn-ZH",
  base: "/cc-plus-ui/",
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.ico",
    siteTitle: "cc-plus-ui基础组件文档",
    outline: 3,
    socialLinks: [{ icon: "github", link: "https://github.com/5ibug" }],
    nav: [
      {
        text: "安装指南",
        link: "/components/"
      },
      { text: "基础组件", link: "/components/CcButton/base.md" },
      {
        text: "GitHub地址",
        link: "https://github.com/5ibug"
      },

      {
        text: "博客",
        items: [
          { text: "吾爱bug", link: "https://5ibug.net" },

        ]
      }
    ],
    sidebar: {
      "/components": [
        {
          text: "常用组件",
          items: [
            { text: "Button组件", link: "/components/CcButton/base.md" },
          ]
        },
        {
          text: "复杂组件",
          items: [
            { text: "Table组件", link: "/components/CcTable/base.md" },
           ]
        }
      ]
    }
  },
  markdown: {
    headers: {
      level: [0, 0]
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: "github-light", dark: "github-dark" },
    config: md => mdPlugin(md)
  }
})

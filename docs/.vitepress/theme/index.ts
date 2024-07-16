import DefaultTheme from "vitepress/theme"

import ElementPlus from "element-plus"
import CcPlusUi from '../../../packages';

import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import locale from "element-plus/es/locale/lang/zh-cn"
// 图标并进行全局注册
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import * as echarts from "echarts" // 引入echarts
import TVHtml from "../components/TVHtml.vue"
import TIcon from "../components/TIcon.vue"
import { VPDemo } from "../vitepress"

import "../../public/css/index.css"
export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.config.globalProperties.$echarts = echarts // 全局使用
    // 注册ElementPlus
    app.use(ElementPlus, {
      locale // 语言设置
    })

    // 全局注册基础组件
    app.use(CcPlusUi)

    // 注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

    app.component("Demo", VPDemo)
    app.component("TVHtml", TVHtml)
    app.component("TIcon", TIcon)
  }
}

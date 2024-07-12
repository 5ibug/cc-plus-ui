### 快速上手

::: tip 提示

cc-plus-ui 基于 vue3 + ts + Element-plus 再次封装的基础组件

:::

### 安装

```bash:no-line-numbers
npm install cc-plus-ui -S
```

### 全局使用

> #### 前提条件：使用项目必须全局注册 Element-plus 组件库

```js
// main.ts
import { createApp } from "vue"
import App from "./App.vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import ccPlusUi from 'cc-plus-ui'

createApp(App).use(ElementUi).use(ccPlusUi).mount('#app')
```

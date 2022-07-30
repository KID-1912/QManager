# QManager

## 开始

### 项目搭建

使用webpack5构建，项目搭建移步：[webpack指南](https://kid-1912.github.io/2022/07/18/webpack%E6%8C%87%E5%8D%97/)

```
├─build
| ├─webpack.common.js
| ├─webpack.dev.js
| └webpack.prod.js
├─dist
├─public
| └index.html
├─src
| ├─App.vue
| └main.js
├─.gitignore
├─package.json
├─package-lock.json
├─README.md
```

### VueRouter

1. 安装依赖：`npm i vue-router@next`

2. 新建 `@/router/index.js`，创建router实例
   
   ```js
   import { createRouter, createWebHistory } from "vue-router";
   import Layout from "@/src/layout/index.vue";
   
   export default createRouter({
     history: createWebHistory(),
     routes: [
       {
         path: "/",
         name: "Home",
         component: Layout,
         children: [
           {
             path: "/",
             component: () => import("@views/Home/home.vue"),
           },
         ],
       },
     ],
   });
   ```

3. router插件
   
   ```js
   import { createApp } from "vue";
   import router from "@/src/router/index.js";
   
   import App from "./App.vue";
   
   createApp(App).use(router).mount("#app");
   ```

### layout

主界面布局组件：包含 `header`，`main`，`aside` 公共部分；目的在于实现良好的路由结构

### Element Plus

引入 `Element Plus` UI组件库，移步[Element Plus]

代办

style-loader/css-loader

引入element-plus

unplugin-auto-import/webpack

unplugin-vue-components/webpack

## 文档

实现layout：scss支持，stylelint/preter支持，husky支持

侧边栏

- 最近
- 模板
- 我的

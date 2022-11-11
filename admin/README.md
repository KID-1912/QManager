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

### VueRouter4

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

引入 `Element Plus` UI组件库，移步 [Element Plus](https://kid-1912.github.io/2021/06/03/ElementPlus/) 或[官方文档](https://element-plus.gitee.io/)

### WindiCss

添加css工具类支持，移步[WindiCss]()或[官方文档](https://cn.windicss.org/)

代办

## 文档

stylelint/preter支持

svg图标支持

打包标记build at xxxx

husky支持

侧边栏

- 最近
- 模板
- 我的

项目意义

项目搭建：webpack5(loader,plugin,config,eslint/stylelint,pretter),

vue3,pinao,router4,

elementplus, windicss

echart

husky与自动化打包

拖拽工具(数据)

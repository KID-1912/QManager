# QManager

## 开始

### 项目搭建

使用webpack5构建，项目搭建移步：[webpack指南]

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
         redirect: "/home",
         component: Layout,
         children: [
           {
             name: "Home",
             path: "home",
             component: () => import("@views/Home/home.vue"),
           },
         ],
       },
     ],
   });
   ```

3. Vue3安装插件
   
   ```js
   import { createApp } from "vue";
   import router from "@/src/router/index.js";
   
   import App from "./App.vue";
   
   createApp(App).use(router).mount("#app");
   ```

### layout



### Element Plus



## 产品文档

侧边栏

- 最近
- 模板
- 我的

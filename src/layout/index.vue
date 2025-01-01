<template>
  <el-container class="flex-col">
    <navbar />
    <div class="flex flex-1 h-0">
      <sidebar />
      <app-main />
    </div>
  </el-container>
</template>

<script>
import AppMain from "./AppMain";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default {
  components: {
    AppMain,
    Navbar,
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
</style>

<template>
  <el-container class="flex-col">
    <Navbar />
    <div class="flex flex-1 h-0">
      <Sidebar />
      <AppMain />
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

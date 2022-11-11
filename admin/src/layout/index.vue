<template>
  <el-container class="flex-col">
    <Navbar />
    <div class="flex basis-full">
      <Sidebar />
      <AppMain />
    </div>
  </el-container>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
export default {
  components: { Navbar, Sidebar, AppMain },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
</style>

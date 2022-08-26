<template>
  <el-container direction="vertical">
    <Navbar/>
    <el-container>
      <Sidebar/>
      <AppMain/>
    </el-container>
  </el-container>
</template>

<script>
import {Navbar,Sidebar,AppMain } from './components';
export default {
  components: {Navbar, Sidebar, AppMain}
};
</script>

<style scoped>
.el-container{
  height: 100%;
}
</style>

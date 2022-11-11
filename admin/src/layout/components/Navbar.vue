<template>
  <el-header>
    <div class="logo"><i class="logo-icon"></i>QManager</div>
    <div class="ml-150px flex-1">
      <el-input
        class="w-640px justify-self-end"
        :prefix-icon="Search"
        placeholder="通过文件名、正文、创建人搜索文档"
      ></el-input>
    </div>
    <div class="avatar"></div>
  </el-header>
</template>

<script setup>
import { Calendar, Search } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  height: 55px;
  padding: 0 16px;
  border-bottom: 1px solid $bd-grey;
}
.logo {
  display: flex;
  align-items: center;
  color: #48576a;
  .logo-icon {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin-right: 10px;
    background-image: url("~@/icons/svg/logo-person.svg");
  }
}
.avatar {
  width: 30px;
  height: 30px;
  background-color: pink;
  border-radius: 50%;
}
</style>

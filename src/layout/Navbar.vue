<template>
  <el-header>
    <div class="logo">
      <el-icon class="logo-icon"><SvgQm /></el-icon>webpack
    </div>
  </el-header>
</template>

<script setup></script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  height: 55px;
  padding: 0 16px;
  border-bottom: 1px solid $bdc-grey;
  .logo {
    display: flex;
    align-items: center;
    color: #48576a;
    .logo-icon {
      font-size: 25px;
      margin-right: 10px;
    }
  }
}
</style>

<template>
  <el-header>
    <div class="logo">
      <el-icon class="logo-icon"><SvgQm /></el-icon>QManager
    </div>
    <div class="searcher ml-150px flex-1">
      <el-input class="w-640px" placeholder="通过文件名、正文、创建人搜索文档">
        <template #prefix>
          <el-icon><ElSvgSearch /></el-icon>
        </template>
      </el-input>
    </div>
    <div class="avatar"></div>
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
  .searcher .el-input {
    --el-input-border-color: transparent;
  }
  .avatar {
    width: 30px;
    height: 30px;
    background-color: pink;
    border-radius: 50%;
  }
}
</style>

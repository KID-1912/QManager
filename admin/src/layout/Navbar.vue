<template>
  <el-header>
    <div class="logo"><i class="logo-icon"></i>QManager</div>
    <div class="searcher ml-150px flex-1">
      <el-input class="w-640px" placeholder="通过文件名、正文、创建人搜索文档">
        <template #prefix>
          <el-icon><SvgSearch /></el-icon>
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
      display: inline-block;
      width: 28px;
      height: 28px;
      margin-right: 10px;
      background-image: url("~@/icons/svg/logo-person.svg");
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

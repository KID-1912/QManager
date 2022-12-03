<template>
  <el-aside class="w-230px p-16px">
    <el-button type="primary" class="w-full h-36px">
      <el-icon class="mr-6px"><svg-Plus /></el-icon>新 建
    </el-button>
    <el-button class="w-full h-36px mt-8px" plain>模 板 库</el-button>
    <div class="menu mt-24px">
      <div class="menu-item active">
        <el-icon><SvgClock /></el-icon>最近
      </div>
      <div class="menu-item">
        <el-icon><svg-StarFilled /></el-icon>收藏
      </div>
      <div class="menu-item">
        <el-icon><svg-Share /></el-icon>共享
      </div>
    </div>
    <div class="menu mt-24px">
      <div class="menu-item">
        <el-icon><svg-Folder /></el-icon>我的文档
      </div>
      <div class="menu-item">
        <el-icon><svg-UserFilled /></el-icon>我的团队
      </div>
      <div class="menu-item">
        <el-icon><svg-DeleteFilled /></el-icon>回收站
      </div>
    </div>
  </el-aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-aside {
  border-right: 1px solid $bdc-grey;
  .menu {
    .menu-item {
      display: flex;
      align-items: center;
      height: 36px;
      padding: 0 12px;
      color: #6c748a;
      cursor: pointer;
      &:hover {
        background-color: #f9fafd;
      }
      &.active {
        background-color: $bgc-grey;
      }
      .el-icon {
        margin-right: 10px;
        color: #a5b5ce;
        font-size: 18px;
      }
      & + .menu-item {
        margin-top: 2px;
      }
    }
  }
}
</style>

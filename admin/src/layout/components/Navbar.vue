<template>
  <el-header>
    <el-dropdown class="platform-box" trigger="click" popper-class="hide-arrow" placement="bottom-start" :popper-options="popperOptions">
      <div class="toggler"><div class="logo"></div>个人文档</div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>企业文档</el-dropdown-item>
          <el-dropdown-item>个人文档</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script setup>
  const popperOptions = {modifiers: [{name:'offset', options: {offset: [0,2] }}]};
</script>

<style scoped>
.el-header{
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e7e9eb;
}
.toggler{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.logo{
  width: 28px;
  height: 28px;
  margin-right: 10px;
  background-image: url('~@/icons/svg/logo-person.svg');
}
</style>

<style>
.hide-arrow .el-popper__arrow{
  visibility: hidden;
}
</style>
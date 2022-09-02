<template>
  <el-header>
    <div class="logo-wrap"><div class="logo"></div>QManager</div>
  </el-header>
</template>

<script setup>
  const popperOptions = {modifiers: [{name:'offset', options: {offset: [0,2] }}]};
</script>

<style lang="scss" scoped>
.el-header{
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e7e9eb;
  .logo-wrap{
    display: flex;
    align-items: center;
    color: #48576a;
    font-size: 14px;
    line-height: 1;
  }
  .logo{
    width: 28px;
    height: 28px;
    margin-right: 10px;
    background-image: url('~@/icons/svg/logo-person.svg');
  }
}
</style>
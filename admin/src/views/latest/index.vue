<template>
  <div class="latest-content-container pl-16px pr-32px">
    <div class="relative">
      <div class="header">
        <!-- <div class="check"></div> -->
        <h2 class="title">最近打开</h2>
      </div>
      <div class="group">
        <div class="group-title">昨天</div>
        <el-checkbox-group v-model="selectedDocList" class="list">
          <div
            v-for="doc in docData.yesterday"
            :key="doc.name"
            class="relative"
          >
            <el-checkbox :label="doc.name"></el-checkbox>
            <div class="row-item">{{ doc.name }}</div>
          </div>
        </el-checkbox-group>
      </div>
      <div class="group">
        <div class="group-title">最近一周</div>
        <el-checkbox-group v-model="selectedDocList" class="list">
          <div v-for="doc in docData.week" :key="doc.name" class="relative">
            <el-checkbox :label="doc.name"></el-checkbox>
            <div class="row-item">{{ doc.name }}</div>
          </div>
        </el-checkbox-group>
      </div>
      <div class="group">
        <div class="group-title">更早</div>
        <el-checkbox-group v-model="selectedDocList" class="list">
          <div v-for="doc in docData.earlier" :key="doc.name" class="relative">
            <el-checkbox :label="doc.name"></el-checkbox>
            <div class="row-item">{{ doc.name }}</div>
          </div>
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const docData = {
  yesterday: [1].map((num) => ({
    name: `文档${num}`,
  })),
  week: [2, 3, 4].map((num) => ({
    name: `文档${num}`,
  })),
  earlier: [5, 6, 8, 9].map((num) => ({
    name: `文档${num}`,
  })),
};
const selectedDocList = ref([]);
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  padding-top: 16px;
  background-color: #fff;
  .title {
    line-height: 46px;
    margin-left: 25px;
    color: #767c85;
    border-bottom: 1px solid $bdc-grey;
  }
}
.group {
  margin-top: 27px;
  .group-title {
    margin-left: 25px;
    padding-left: 16px;
    color: #9da3b5;
    font-size: 12px;
    line-height: 26px;
    border-bottom: 1px solid $bdc-grey;
  }
  .el-checkbox::v-deep {
    position: absolute;
    top: 25px;
    left: 0;
    .el-checkbox__label {
      display: none;
    }
  }
  .row-item {
    display: flex;
    align-items: center;
    height: 66px;
    margin-left: 25px;
    padding: 0 16px;
    font-size: 14px;
    border-bottom: 1px solid $bdc-grey;
    &:hover {
      background-color: $bgc-grey;
    }
  }
}
</style>

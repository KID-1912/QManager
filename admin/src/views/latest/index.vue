<template>
  <div class="latest-content-container pl-16px pr-32px">
    <div class="relative">
      <!-- header -->
      <div class="header flex">
        <el-checkbox
          :value="isCheckAll"
          :class="showCheckbox ? 'visible' : 'invisible'"
          :indeterminate="isIndeterminate"
          @change="handleCheckAll"
        ></el-checkbox>
        <div v-if="showCheckbox" class="title basis-full">
          已选中 {{ selectedDocList.length }} 条
        </div>
        <div v-else class="title basis-full">最近打开</div>
      </div>
      <!-- 列表 -->
      <div class="group" v-if="docData.yesterday.length">
        <div class="group-title">昨天</div>
        <el-checkbox-group v-model="selectedDocList" class="list">
          <div
            v-for="doc in docData.yesterday"
            :key="doc.name"
            class="row-item-container"
          >
            <el-checkbox
              :label="doc.name"
              :class="showCheckbox ? 'visible' : 'invisible'"
            ></el-checkbox>
            <div class="row-item">{{ doc.name }}</div>
          </div>
        </el-checkbox-group>
      </div>
      <div class="group" v-if="docData.week.length">
        <div class="group-title">最近一周</div>
        <el-checkbox-group v-model="selectedDocList" class="list">
          <div
            v-for="doc in docData.week"
            :key="doc.name"
            class="row-item-container"
          >
            <el-checkbox
              :label="doc.name"
              :class="showCheckbox ? 'visible' : 'invisible'"
            ></el-checkbox>
            <div class="row-item">{{ doc.name }}</div>
          </div>
        </el-checkbox-group>
      </div>
      <div class="group" v-if="docData.earlier.length">
        <div class="group-title">更早</div>
        <el-checkbox-group v-model="selectedDocList" class="list">
          <div
            v-for="doc in docData.earlier"
            :key="doc.name"
            class="row-item-container"
          >
            <el-checkbox
              :label="doc.name"
              :class="showCheckbox ? 'visible' : 'invisible'"
            ></el-checkbox>
            <div class="row-item">{{ doc.name }}</div>
          </div>
        </el-checkbox-group>
      </div>
      <el-empty v-if="docList.length === 0" description="暂无记录" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// 文档数据
const docData = ref({ yesterday: [], week: [], earlier: [] });
// 文档列表
const docList = computed(() =>
  []
    .concat(docData.value.yesterday)
    .concat(docData.value.week)
    .concat(docData.value.earlier)
);
// 请求文档数据
const getDocData = async function () {
  docData.value = {
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
};
onMounted(getDocData);

// 选中集合
const selectedDocList = ref([]);
// 显示checkbox
const showCheckbox = computed(() => selectedDocList.value.length > 0);
// 是否全选
const isCheckAll = computed(
  () => selectedDocList.value.length === docList.value.length
);
// 是否半选
const isIndeterminate = computed(
  () =>
    showCheckbox.value && selectedDocList.value.length !== docList.value.length
);
// 全选/取消全选
const handleCheckAll = function () {
  if (isCheckAll.value === true) {
    selectedDocList.value = [];
  } else {
    selectedDocList.value = docList.value.map((doc) => doc.name);
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 9;
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
  .row-item-container {
    position: relative;
    :deep(.el-checkbox) {
      position: absolute;
      top: 25px;
      left: 0;
      .el-checkbox__label {
        display: none;
      }
    }
    &:hover .el-checkbox {
      visibility: visible;
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
}
</style>

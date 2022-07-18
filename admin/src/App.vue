<template>
  <div>
    <input v-model="value" type="text">
    <span>{{value}}</span>
  </div>
</template>

<script setup>
import { ref } from  'vue';
const value = new ref(121);

</script>

<style>

</style>
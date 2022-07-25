<template>
  <div>
    <Header/>
    <Sidebar/>
    <AppMain/>
  </div>
</template>

<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import AppMain from './AppMain.vue';
export default {
  components: {Header, Sidebar, AppMain}
};
</script>

<style></style>

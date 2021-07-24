<template>
  <div id="app">
    <button @click="goHome">回首頁</button>
    <keep-alive include="OrderList">
      <router-view></router-view>
    </keep-alive>
    <top-icon />
  </div>
</template>
<script>
import TopIcon from "components/topIcon/TopIcon.vue";
export default {
  components: {
    TopIcon,
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style>
@import url("assets/css/normal.css");
</style>

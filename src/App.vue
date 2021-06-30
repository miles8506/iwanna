<template>
  <div id="app">
    <button @click="goHome">回首頁</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
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

<template>
  <div id="searchBar">
    <input type="date" v-model="test" />
    {{ test }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "",
    };
  },
};
</script>

<style scoped>
#searchBar {
  width: 100%;
  height: 100px;
  background-color: #999999;
}
</style>
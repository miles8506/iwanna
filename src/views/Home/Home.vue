<template>
  <div id="Home">
    <search-bar />
    <button class="add_goods" @click="goGoodsList">商品列表</button>
    <button class="add_order" @click="goOrderList">訂單列表</button>
    <button class="add_sort" @click="goSortList">檔期種類列表</button>
  </div>
</template>

<script>
import SearchBar from "components/search/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
  methods: {
    goOrderList() {
      this.$router.push("/orderList");
    },
    goGoodsList() {
      this.$router.push("/goodsList");
    },
    goSortList() {
      this.$router.push("/sortList");
    },
  },
};
</script>

<style scoped>
.add_order,
.add_goods {
  float: right;
}
</style>
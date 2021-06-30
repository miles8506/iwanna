<template>
  <div>
    商品檔期種類名稱：<input type="text" v-model="sort" />
    <button @click="goBack">返回</button>
    <button @click="addSort">新增</button>
  </div>
</template>

<script>
import { requestData } from "network/requestSort.js";
export default {
  data() {
    return {
      sort: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    addSort() {
      if (this.sort != "") {
        requestData(this.sort, "sort", "put").then((res) => {
          if (res == 0) {
            window.alert(`成功添加${this.sort}檔期種類`);
            this.$router.go(-1);
          } else if (res == 1) {
            window.alert(`新增檔期種類失敗`);
            this.$router.go(-1);
          } else if (res == 2) {
            window.alert(`檔期種類名稱已重複`);
          }
        });
      } else {
        alert("請輸入商品檔期種類");
      }
    },
  },
};
</script>

<style scoped>
</style>
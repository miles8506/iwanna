<template>
  <div id="order_detail">
    <button @click="goOrderList">返回訂單列表</button>
    <h2>訂單收益總金額:{{total}}</h2></h2>
  </div>
</template>

<script>
// api
import { requestData } from "network/request.js";

export default {
  data() {
    return {
      total: 0,
    };
  },
  created() {
    requestData(null, "orderList", "get").then((res) => {
      res.forEach((item) => {
        this.total += item.orderTotal;
      });
      this.total = this.total.replace("test", "");
    });
  },
  methods: {
    goOrderList() {
      this.$router.push("/orderList");
    },
  },
};
</script>

<style scoped>
</style>
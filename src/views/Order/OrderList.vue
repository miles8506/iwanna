<template>
  <div id="order_list">
    <button @click="goOrder">新增訂單</button>
    <div class="order_hd">
      <div>訂單編號</div>
      <div>買家帳號</div>
      <div>訂單總金額</div>
      <div>到貨狀態</div>
      <div>最晚出貨日期</div>
      <div>操作</div>
    </div>
    <div class="order_bd">
      <div
        class="goods_item"
        v-for="(item, index) in goodsListData"
        :key="index"
      >
        <div class="orderNum">{{ item.orderNum }}</div>
        <div class="buyerAccount">{{ item.buyerAccount }}</div>
        <div class="orderTotal">{{ item.orderTotal }}</div>
        <div class="orderList_stauts">{{ shipStatus(item) }}</div>
        <div class="lastDate">{{ lastShipDate(item.lastShipment) }}</div>
        <div><button>編輯</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestData } from "network/request.js";
import dayjs from "dayjs";
export default {
  data() {
    return {
      goodsListData: [],
    };
  },
  created() {
    requestData(null, "orderList", "get")
      .then((res) => {
        this.goodsListData = res;
      })
      .catch((err) => {
        console.log(`err${err}`);
      });
  },
  methods: {
    goOrder() {
      this.$router.push("/order");
    },
    shipStatus(data) {
      const status = data.orderList.some((item) => {
        return item.status === false;
      });
      if (status) {
        return "未到貨";
      } else {
        return "已到貨";
      }
    },
    lastShipDate(item) {
      const timeFormat = dayjs(item).format("YYYY/MM/DD");
      return timeFormat;
    },
  },
};
</script>

<style scoped>
#order_list {
  width: 1200px;
  margin: 0 auto;
}
.order_hd {
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #999999;
}
.order_hd > div {
  flex: 16.6%;
  text-align: center;
  font-weight: 700;
  height: 50px;
  line-height: 50px;
}

.order_bd .goods_item {
  display: flex;
}

.goods_item > div {
  flex: 16.6%;
  text-align: center;
}
</style>
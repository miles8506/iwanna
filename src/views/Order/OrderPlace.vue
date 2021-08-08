<template>
  <div id="order_list">
    <h2 class="title">待叫貨清單列表</h2>
    <div class="orderPlace_hd">
      <div>廠商貨號</div>
      <div>商品顏色</div>
      <div>商品尺寸</div>
      <div>商品數量</div>
      <div>商品成本</div>
      <div>商品名稱</div>
      <div>商品貨號</div>
      <div>換算台幣</div>
    </div>
    <div class="orderPlace_bd">
      <template v-if="orderPlaceList.length > 0">
        <div
          v-for="(item, index) in orderPlaceList"
          :key="index"
          class="orderPlaceItem"
        >
          <span>{{ item.ordergNum }}</span>
          <span>{{ item.orderColor }}</span>
          <span>{{ item.orderSize }}</span>
          <span>{{ item.orderCount }}</span>
          <span>${{ item.pGoods * item.orderCount }}</span>
          <span>{{ item.orderName }}</span>
          <span>{{ item.orderSelfNum }}</span>
          <span>{{ nativePriceNT(item.pGoods, item.orderCount) }}</span>
        </div>
        <div class="totalWrap">
          <h2>台幣總金額:{{ NTtotal }}</h2>
          <h2>人民幣總金額:{{ CNYtotal }}</h2>
        </div>
      </template>
      <template v-else>
        <h2>待叫貨清單列表為空</h2>
      </template>
    </div>
  </div>
</template>

<script>
import { requestData } from "network/request.js";

export default {
  data() {
    return {
      orderPlaceList: [],
    };
  },
  created() {
    requestData(null, "orderList", "get").then((res) => {
      const filterArr = res.filter((item) => item.placeOrder === false);
      const GoodList = [];
      filterArr.forEach((item) => {
        item.orderList.forEach((item) => {
          GoodList.push(item);
        });
      });
      GoodList.forEach((goodListItem) => {
        const result = this.orderPlaceList.find((item) => {
          return (
            item.ordergNum == goodListItem.ordergNum &&
            item.orderColor == goodListItem.orderColor &&
            item.orderSize == goodListItem.orderSize
          );
        });
        if (result == undefined) {
          this.orderPlaceList.push(goodListItem);
        } else {
          result.orderCount += goodListItem.orderCount;
        }
      });
    });
  },
  methods: {
    nativePriceNT(n_price, count) {
      const res = Math.ceil((parseInt(n_price) + 5) * 4.35);
      return res * count;
    },
  },
  computed: {
    NTtotal() {
      if (this.orderPlaceList) {
        let totalPrice = 0;
        this.orderPlaceList.forEach((item) => {
          const NT =
            Math.ceil((parseInt(item.pGoods) + 5) * 4.35) * item.orderCount;
          totalPrice += NT;
        });
        return totalPrice;
      }
    },
    CNYtotal() {
      if (this.orderPlaceList) {
        let totalPrice = 0;
        this.orderPlaceList.forEach((item) => {
          const CNY = Math.ceil(parseInt(item.pGoods)) * item.orderCount;
          totalPrice += CNY;
        });
        return totalPrice;
      }
    },
  },
};
</script>

<style scoped>
#order_list {
  width: 1200px;
  margin: 0 auto;
}
.title {
  margin-bottom: 30px;
}
.orderPlace_hd {
  display: flex;
  border-bottom: 2px solid #999999;
  height: 50px;
}
.orderPlace_hd > div {
  line-height: 50px;
}
.orderPlace_hd > div {
  flex: 16.6%;
  text-align: center;
  font-weight: 700;
}

.orderPlace_bd > div {
  display: flex;
  height: 50px;
}

.orderPlace_bd > div > span {
  flex: 16.6%;
  height: 100%;
  line-height: 50px;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.orderPlaceItem {
  border-bottom: 1px solid #999999;
}
.totalWrap {
  display: block !important;
  margin-top: 30px;
}
.totalWrap h2:nth-child(1) {
  margin-bottom: 10px;
}
</style>
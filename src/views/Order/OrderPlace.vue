<template>
  <div id="order_list">
    <h2 class="title">待叫貨清單列表</h2>
    <div class="orderPlace_hd">
      <div>廠商貨號</div>
      <div>商品貨號</div>
      <div>商品名稱</div>
      <div>商品數量</div>
      <div>商品顏色</div>
      <div>商品尺寸</div>
      <div>商品成本</div>
    </div>
    <div class="orderPlace_bd">
      <div v-for="(item, index) in orderPlaceList" :key="index">
        <span>{{ item.ordergNum }}</span>
        <span>{{ item.orderSelfNum }}</span>
        <span>{{ item.orderName }}</span>
        <span>{{ item.orderCount }}</span>
        <span>{{ item.orderColor }}</span>
        <span>{{ item.orderSize }}</span>
        <span>{{ nativePrice(item.pGoods, item.orderCount) }}</span>
      </div>
    </div>
    <div class="total_wrap">
      <h2>總成本:{{ total }}</h2>
    </div>
  </div>
</template>

<script>
import { requestData } from "network/request.js";

export default {
  data() {
    return {
      orderPlaceList: [],
      nativePriceArrTotal: [],
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
            item.orderNum == goodListItem.orderNum &&
            item.orderColor == goodListItem.orderColor &&
            item.orderSize == goodListItem.orderSize
          );
        });
        if (!result) {
          this.orderPlaceList.push(goodListItem);
        } else {
          result.orderCount += goodListItem.orderCount;
        }
      });
      // this.orderPlaceList.push(filterArr[0]);
      // filterArr.forEach((item) => {
      //   // const flag = this.orderPlaceList.find(item)
      //   // item.find((item) => {
      //   //   console.log(item);
      //   // });
      //   item.orderList.forEach((goodsItem) => {
      //     // console.log(item);
      //     // const flag = item.some(item=> item)
      //     // console.log(goodsItem.orderColor,goodsItem.ordergNum,goodsItem.orderSize);
      //     this.orderPlaceList.some((item) => {

      //     });
      //   });
      // });
      // filterArr.forEach((filterItem) => {
      //   this.orderPlaceList.find((item) => {
      //     console.log(filterItem);
      //     console.log(item);
      //   });
      // });
      // this.orderPlaceList = filterArr;
    });
  },
  methods: {
    nativePrice(n_price, count) {
      const res = Math.ceil((parseInt(n_price) + 5) * 4.35);
      return res * count;
    },
  },
  computed: {
    total() {
      if (this.orderPlaceList) {
        let totalPirce = 0;
        this.orderPlaceList.forEach((item) => {
          const NT =
            Math.ceil((parseInt(item.pGoods) + 5) * 4.35) * item.orderCount;
          totalPirce += NT;
        });
        return totalPirce;
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
.total_wrap {
}
</style>
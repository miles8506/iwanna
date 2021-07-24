<template>
  <div id="ordersearch_bar">
    <div class="ordersearch_status">
      <div>
        出貨狀態：<select v-model="curryStatus">
          <option value="">全部</option>
          <option value="complete">已出貨</option>
          <option value="true">可出貨</option>
          <option value="false">未出貨</option>
        </select>
      </div>
      <div>
        叫貨狀態：<select v-model="placeOrderStatus">
          <option value="">全部</option>
          <option value="true">已叫貨</option>
          <option value="false">未叫貨</option>
        </select>
      </div>
      <div>
        最晚出貨日期：
        <select v-model="curryTimer">
          <option value="">全部</option>
          <option value="first">早>晚</option>
          <option value="last">晚>早</option>
        </select>
        <button @click="searchState" class="status_btn">搜尋</button>
      </div>
    </div>
    <div class="shopeeAndPlaceOrderWrap">
      蝦皮/IG訂單帳號查詢：<input
        type="text"
        v-model.trim="shopeeAccout"
      /><button @click="shopeeAccountSearch" class="shopee_btn">搜尋</button>
    </div>
  </div>
</template>

<script>
//network
import { requestData } from "network/request.js";

export default {
  data() {
    return {
      // childGoodsListData: [],
      curryStatus: "",
      // 出貨狀態v-model
      placeOrderStatus: "",
      curryTimer: "",
      shopeeAccout: "",
    };
  },
  methods: {
    searchState() {
      requestData(null, "orderList", "get")
        .then((res) => {
          // 出貨狀態filter
          let curryStateFilter = [];
          if (this.curryStatus !== "") {
            curryStateFilter = res.filter(
              (item) => item.orderCurryStatus + "" == this.curryStatus
            );
          } else {
            curryStateFilter = res;
          }

          // 叫貨狀態filter
          let placeOrderFilter = [];
          if (this.placeOrderStatus !== "") {
            placeOrderFilter = curryStateFilter.filter(
              (item) => item.placeOrder + "" == this.placeOrderStatus
            );
          } else {
            placeOrderFilter = curryStateFilter;
          }

          // 最晚出貨日期filter
          if (this.curryTimer == "last") {
            placeOrderFilter.sort((a, b) => {
              return b.lastShipment - a.lastShipment;
            });
          } else if (this.curryTimer == "first") {
            placeOrderFilter.sort((a, b) => {
              return a.lastShipment - b.lastShipment;
            });
          } else if (this.curryStatus == "") {
            placeOrderFilter;
          }
          this.$emit("resFilter", placeOrderFilter);
        })
        .catch((err) => {
          alert(`系統異常(orderSearch)/${err}`);
        });
    },

    shopeeAccountSearch() {
      if (this.shopeeAccout == "") return alert("請輸入蝦皮/IG帳號");
      requestData(null, "orderList", "get")
        .then((res) => {
          const findObj = res.find(
            (item) => item.shopeeAccount == this.shopeeAccout
          );
          if (findObj == undefined) return alert("查無蝦皮/IG帳號，請重新輸入");
          // this.goodsListData = [];
          // this.goodsListData.push(findObj);
          this.$emit("resFind", findObj);
        })
        .catch((err) => {
          console.log(`err${err}`);
        });
    },
  },
};
</script>

<style scoped>
.ordersearch_status {
  display: flex;
  margin-bottom: 20px;
}

.ordersearch_status > div {
  margin-right: 20px;
}

.shopeeAndPlaceOrderWrap {
  margin-bottom: 20px;
}

.ordersearch_status .status_btn,
.shopeeAndPlaceOrderWrap .shopee_btn {
  margin-left: 30px;
  border: 0;
  width: 50px;
  height: 25px;
  border-radius: 5px;
  background: rgb(84, 170, 236);
  color: #fff;
  cursor: pointer;
}
</style>
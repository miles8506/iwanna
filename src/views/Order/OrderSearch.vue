<template>
  <div id="ordersearch_bar">
    <!-- state_wrap start -->
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
    <!-- state_wrap end -->

    <!-- order_number start -->
    <div class="order_number_wrap">
      <label for="order_number">廠商貨號：</label
      ><input type="text" id="order_number" v-model.trim="orderNumberModel" />
      <button @click="orderNumberBtn" class="order_number_btn">搜尋</button>
    </div>
    <!-- order_number end -->

    <!-- self_number start -->
    <div class="self_number_wrap">
      <label for="self_number">商品貨號：</label
      ><input type="text" id="self_number" v-model.trim="selfNumberModel" />
      <button @click="selfNumberBtn" class="self_number_btn">搜尋</button>
    </div>
    <!-- self_number end -->

    <!-- shopee start -->
    <div class="shopeeAndPlaceOrderWrap">
      蝦皮訂單號：<input
        type="text"
        v-model.trim="shopeeAccout"
      /><button @click="shopeeAccountSearch" class="shopee_btn">搜尋</button>
    </div>
    <!-- shopee end -->

    <!-- user account start -->
    <div class="user_account_wrap">
      <label for="user_account_ipt">買家帳號：</label>
      <input type="text" id="user_account_ipt" 
      v-model.trim="userAccountModel">
      <button @click="userAccountSearch" class="user_btn">搜尋</button>
    </div>
    <!-- user account end -->
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
      orderNumberModel: "",
      selfNumberModel: "",
      userAccountModel: ""
    };
  },
  mounted() {
    // orderlist activated返回至相同位置&data
    this.$bus.$on("nativeDataList", () => {
      if (this.shopeeAccout !== "") {
        this.shopeeAccountSearch();
      } else if (this.orderNumberModel !== "") {
        this.orderNumberBtn();
      } else if (this.selfNumberModel !== "") {
        this.selfNumberBtn();
      } else {
        this.searchState();
        this.$emit("resActivated");
      }
    });
  },
  destroyed() {
    this.$bus.$off("nativeDataList");
  },
  methods: {
    // 出貨狀態、叫貨狀態、最晚出貨日期smartSearch
    searchState() {
      requestData(null, "orderList", "get")
        .then((res) => {
          // 出貨狀態filter
          this.shopeeAccout = "";
          this.orderNumberModel = "";
          this.selfNumberModel = "";
          this.userAccountModel = "";
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
          alert(`系統異常(orderSearch)${err}`);
        });
    },

    // 廠商貨號smartSearch
    orderNumberBtn() {
      if (this.orderNumberModel == "") return alert("請輸入廠商貨號");
      const arr = [];
      requestData(null, "orderList", "get")
        .then((res) => {
          this.selfNumberModel = "";
          this.shopeeAccout = "";
          this.userAccountModel = "";
          res.forEach((item) => {
            const resSome = item.orderList.some(
              (item) => item.ordergNum == this.orderNumberModel
            );
            if (resSome) {
              arr.push(item);
            }
          });
          const resArr = arr.filter((item) => item.orderCurryStatus === false);
          this.$emit("resFilter", resArr);
        })
        .catch((err) => {
          alert("系統異常，請稍後再試");
          console.log(`err:${err}`);
        });
    },

    // 商品貨號smartSearch
    selfNumberBtn() {
      if (this.selfNumberModel == "") return alert("請輸入廠商貨號");
      const arr = [];
      requestData(null, "orderList", "get")
        .then((res) => {
          this.orderNumberModel = "";
          this.shopeeAccout = "";
          this.userAccountModel = "";
          res.forEach((item) => {
            const resSome = item.orderList.some(
              (item) => item.orderSelfNum == this.selfNumberModel
            );
            if (resSome) {
              arr.push(item);
            }
          });
          const resArr = arr.filter((item) => item.orderCurryStatus === false);
          this.$emit("resFilter", resArr);
        })
        .catch((err) => {
          alert("系統異常，請稍後再試");
          console.log(`err:${err}`);
        });
    },

    // 蝦皮/IG訂單帳號查詢smartSearch
    shopeeAccountSearch() {
      if (this.shopeeAccout == "") return alert("請輸入蝦皮/IG帳號");
      requestData(null, "orderList", "get")
        .then((res) => {
          this.orderNumberModel = "";
          this.selfNumberModel = "";
          this.userAccountModel = "";
          const findObj = res.find(
            (item) => item.shopeeAccount == this.shopeeAccout
          );
          if (findObj == undefined) return alert("查無蝦皮/IG帳號，請重新輸入");
          this.$emit("resFind", findObj);
        })
        .catch((err) => {
          console.log(`err${err}`);
        });
    },

    // 搜尋user帳號
    userAccountSearch() {
      if(this.userAccountModel == "")  return alert('請輸入買家帳號');
      requestData(null, "orderList", "get")
        .then(res => {
          this.orderNumberModel = "";
          this.selfNumberModel = "";
          this.shopeeAccout = "";
          const filterRes =  res.filter(item => item.buyerAccount == this.userAccountModel);
          if (filterRes.length <= 0) return alert('查無買家帳號');
          this.$emit('resFilter', filterRes);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
};
</script>

<style scoped>
#ordersearch_bar {
  font-size: 16px;
  color: #4a4a4a;
}
.ordersearch_status {
  display: flex;
  margin-bottom: 20px;
}

.ordersearch_status > div {
  margin-right: 20px;
}

.shopeeAndPlaceOrderWrap,
.order_number_wrap,
.self_number_wrap {
  margin-bottom: 20px;
}

.ordersearch_status .status_btn,
.shopeeAndPlaceOrderWrap .shopee_btn,
.order_number_wrap .order_number_btn,
.self_number_wrap .self_number_btn,
.user_account_wrap .user_btn {
  margin-left: 20px;
  border: 0;
  width: 50px;
  height: 26px;
  line-height: 24px;
  border-radius: 5px;
  background: #b78873;
  color: #fff;
  cursor: pointer;
}

.ordersearch_status .status_btn:hover,
.shopeeAndPlaceOrderWrap .shopee_btn:hover,
.order_number_wrap .order_number_btn:hover,
.self_number_wrap .self_number_btn:hover,
.user_account_wrap .user_btn:hover {
  opacity: 0.8;
}

input {
  margin-right: 10px;
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  color: #4a4a4a;
}

select {
  width: 80px;
  height: 30px;
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  color: #4a4a4a;
}
</style>
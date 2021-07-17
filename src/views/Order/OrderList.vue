<template>
  <div id="order_list">
    <button @click="goOrder">新增訂單</button>

    <div>
      出貨狀態：<select v-model="curryStatus" @change="curryStatusChange">
        <option value="">全部</option>
        <option value="complete">已出貨</option>
        <option value="true">可出貨</option>
        <option value="false">未出貨</option>
      </select>
    </div>
    <div>
      叫貨狀態：<select v-model="placeOrderStatus" @change="placeOrderChange">
        <option value="">全部</option>
        <option value="orderPlaceTrue">已叫貨</option>
        <option value="orderPlaceFalse">未叫貨</option>
      </select>
    </div>
    <div>
      最晚出貨日期：
      <select name="" v-model="curryTimer" @change="curryTimerChange">
        <option value="">全部</option>
        <option value="first">早>晚</option>
        <option value="last">晚>早</option>
      </select>
    </div>
    <div class="shopeeAndPlaceOrderWrap">
      蝦皮/IG訂單帳號查詢<input
        type="text"
        v-model.trim="shopeeAccout"
      /><button @click="shopeeAccountSearch">查詢</button>
      <button class="placeOrderBtn" @click="goPlaceOrderBtn">待叫貨清單</button>
    </div>
    <div class="order_hd">
      <div>蝦皮/IG訂單編號</div>
      <div>買家帳號</div>
      <div>訂單總金額</div>
      <div>叫貨狀態</div>
      <div>到貨狀態</div>
      <div>最晚出貨日期</div>
      <div>操作</div>
      <div>已出貨</div>
    </div>
    <div v-if="goodsListData.length > 0">
      <div class="order_bd">
        <div
          class="goods_item"
          v-for="(item, index) in goodsListData"
          :key="index"
        >
          <div class="orderNum">{{ item.shopeeAccount }}</div>
          <div class="buyerAccount">{{ item.buyerAccount }}</div>
          <div class="orderTotal">{{ item.orderTotal }}</div>
          <div class="placeOrder">
            {{ item.placeOrder ? "已叫貨" : "未叫貨" }}
          </div>
          <div class="orderList_stauts">{{ shipStatus(item) }}</div>
          <div class="lastDate">{{ lastShipDate(item.lastShipment) }}</div>
          <div><button @click="goEditOrder(item)">編輯</button></div>
          <div>
            <button
              @click="shippedBtnClick(item, index)"
              :disabled="item.orderCurryStatus === 'complete'"
            >
              已出貨
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>查無訂單</h2>
    </div>
    <!-- 警視窗 -->
    <alert-window :isShow="isShow" @editShow="editShow">
      <template v-slot:alertContent>
        <p>訂單確定設置為已出貨？</p>
      </template>
      <template v-slot:allowBtn>
        <span @click="isShipped">是</span>
      </template>
    </alert-window>
  </div>
</template>

<script>
import { requestData } from "network/request.js";
import AlertWindow from "components/alert/AlertWindow.vue";
import dayjs from "dayjs";
export default {
  data() {
    return {
      goodsListData: [],
      curryStatus: "",
      curryTimer: "",
      shopeeAccout: "",
      isShow: false,
      shippedItem: {},
      isIndex: null,

      // 出貨狀態v-model
      placeOrderStatus: "",
    };
  },
  components: {
    AlertWindow,
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
      // const status = data.orderList.some((item) => {
      //   return item.status === false;
      // });
      // if (status) {
      //   data.orderCurryStatus = false;
      //   return "未到貨";
      // } else {
      //   // data.orderCurryStatus = true;
      //   // return "可出貨";
      //   const res = data.orderList.some((item) => {
      //     return item.status === true;
      //   });
      //   if (res) {
      //     data.orderCurryStatus = true;
      //     return "可出貨";
      //   } else {
      //     data.orderCurryStatus = "complete";
      //     return "已出貨";
      //   }
      // }
      if (data.orderCurryStatus === false) {
        return "未到貨";
      } else if (data.orderCurryStatus === true) {
        return "可出貨";
      } else if (data.orderCurryStatus === "complete") {
        return "已出貨";
      }
    },
    lastShipDate(item) {
      const timeFormat = dayjs(item).format("YYYY/MM/DD");
      return timeFormat;
    },
    goEditOrder(item) {
      this.$router.push({
        path: `editOrder/${item.orderNum}`,
        query: {
          item: JSON.stringify(item),
        },
      });
    },
    curryStatusChange() {
      requestData(null, "orderList", "get")
        .then((res) => {
          if (this.curryStatus == "true") {
            const curryStatusFilter = res.filter(
              (item) => item.orderCurryStatus == true
            );
            this.goodsListData = curryStatusFilter;
          } else if (this.curryStatus == "false") {
            const curryStatusFilter = res.filter(
              (item) => item.orderCurryStatus == false
            );
            this.goodsListData = curryStatusFilter;
          } else if (this.curryStatus == "") {
            this.goodsListData = res;
          } else if (this.curryStatus == "complete") {
            const curryStatusFilter = res.filter(
              (item) => item.orderCurryStatus === "complete"
            );
            this.goodsListData = curryStatusFilter;
          }
        })
        .catch((err) => {
          console.log(`err${err}`);
        });
    },
    curryTimerChange() {
      requestData(null, "orderList", "get")
        .then((res) => {
          if (this.curryTimer == "last") {
            this.goodsListData = res.sort((a, b) => {
              return b.lastShipment - a.lastShipment;
            });
          } else if (this.curryTimer == "first") {
            this.goodsListData = res.sort((a, b) => {
              return a.lastShipment - b.lastShipment;
            });
          } else if (this.curryTimer == "") {
            this.goodsListData = res;
          }
        })
        .catch((err) => {
          console.log(`err${err}`);
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
          this.goodsListData = [];
          this.goodsListData.push(findObj);
        })
        .catch((err) => {
          console.log(`err${err}`);
        });
    },
    shippedBtnClick(item, index) {
      if (!item.placeOrder) return alert("請先確認叫貨狀態為已叫貨");
      this.isShow = !this.isShow;
      this.shippedItem = item;
      this.isIndex = index;
    },
    editShow() {
      this.isShow = !this.isShow;
    },
    isShipped() {
      const findObj = this.goodsListData.find(
        (item) => item === this.shippedItem
      );
      findObj.orderList.forEach((item) => {
        item.status = "complete";
      });
      findObj.orderCurryStatus = "complete";
      this.isShow = !this.isShow;
      requestData(JSON.stringify(findObj), "editOrder", "post")
        .then((res) => {
          if (res == 0) {
            alert("訂單已修改成功");
            this.$router.push("/orderList");
          }
        })
        .catch((err) => {
          alert("訂單添加失敗");
          console.log(`err${err}`);
        });
    },
    placeOrderChange() {
      requestData(null, "orderList", "get").then((res) => {
        if (this.placeOrderStatus === "") {
          this.goodsListData = res;
        } else if (this.placeOrderStatus === "orderPlaceTrue") {
          const filterArr = res.filter((item) => item.placeOrder === true);
          this.goodsListData = filterArr;
        } else if (this.placeOrderStatus === "orderPlaceFalse") {
          const filterArr = res.filter((item) => item.placeOrder === false);
          this.goodsListData = filterArr;
        }
      });
    },
    goPlaceOrderBtn() {
      this.$router.push("/orderplace");
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
  flex: 12.5%;
  text-align: center;
  font-weight: 700;
  height: 50px;
  line-height: 50px;
}

.order_bd .goods_item {
  display: flex;
}

.goods_item > div {
  flex: 12.5%;
  text-align: center;
}

.placeOrderBtn {
  float: right;
}
</style>
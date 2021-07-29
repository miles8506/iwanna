<template>
  <div id="order_list">
    <button @click="goOrder">新增訂單</button>
    <button class="placeOrderBtn" @click="goPlaceOrderBtn">待叫貨清單</button>

    <order-search
      @resFilter="resFilter"
      @resFind="resFind"
      @resActivated="resActivated"
    />
    <div class="order_hd">
      <div class="listItem_title">序列</div>
      <div class="orderNum_title">蝦皮/IG訂單編號</div>
      <div>買家帳號</div>
      <div>訂單總金額</div>
      <div>叫貨狀態</div>
      <div>到貨狀態</div>
      <div>最晚出貨日期</div>
      <div>已出貨</div>
      <div>操作</div>
    </div>
    <div v-if="goodsListData.length > 0">
      <div class="order_bd">
        <div
          class="goods_item"
          v-for="(item, index) in goodsListPaginationData[
            'page' + paginationNative
          ]"
          :key="index"
        >
          <div class="content_item list_item">
            {{ (paginationNative - 1) * 20 + index + 1 }}
          </div>
          <div class="orderNum content_item">{{ item.shopeeAccount }}</div>
          <div class="buyerAccount content_item">{{ item.buyerAccount }}</div>
          <div class="orderTotal content_item">{{ item.orderTotal }}</div>
          <div class="placeOrder content_item">
            {{ item.placeOrder ? "已叫貨" : "未叫貨" }}
          </div>
          <div class="orderList_stauts content_item">
            {{ shipStatus(item) }}
          </div>
          <div class="lastDate content_item">
            {{ lastShipDate(item.lastShipment) }}
          </div>
          <div class="content_item">
            <button
              @click="shippedBtnClick(item, index)"
              :disabled="item.orderCurryStatus === 'complete'"
            >
              已出貨
            </button>
          </div>

          <div class="content_item">
            <button @click="goEditOrder(item)" class="edit_btn">編輯</button>
            <button @click="goRemoveOrder(item.orderNum)">刪除</button>
          </div>
        </div>
        <div class="pagination_bar">
          <div class="pagination_wrap">
            <span
              v-for="(value, key, index) in goodsListPaginationData"
              :key="key"
              @click="paginationBtn(index + 1)"
              :class="{ current_index: index + 1 == paginationNative }"
            >
              {{ index + 1 }}
            </span>
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
//network
import deleteData from "network/requestSort.js";
import { requestData } from "network/request.js";

//component
import AlertWindow from "components/alert/AlertWindow.vue";
import OrderSearch from "./OrderSearch.vue";

//js
import dayjs from "dayjs";
import { paginationBarJs } from "assets/js/paginationBar.js";

export default {
  name: "OrderList",
  data() {
    return {
      //所有orderlist
      goodsListData: [],

      //由goodListData分配頁數後的物件
      goodsListPaginationData: {},

      // 計算頁數
      pagination: null,

      // 當前頁數
      paginationNative: 1,

      isShow: false,
      shippedItem: {},
      isIndex: null,
      deleteId: "",
    };
  },
  components: {
    AlertWindow,
    OrderSearch,
  },
  created() {
    requestData(null, "orderList", "get")
      .then((res) => {
        const { goodsListData, goodsListPaginationData } = paginationBarJs(
          res,
          this.goodsListData,
          this.goodsListPaginationData
        );
        this.goodsListData = goodsListData;
        this.goodsListPaginationData = goodsListPaginationData;
      })
      .catch((err) => {
        console.log(`err${err}`);
      });
  },
  activated() {
    // orderSearch.vue
    this.$bus.$emit("nativeDataList");
  },
  methods: {
    goOrder() {
      this.$router.push("/order");
    },

    shipStatus(data) {
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
      this.$store.commit("setOrderListHeight", { height: window.pageYOffset });
      this.$router.push({
        path: `editOrder/${item.orderNum}`,
        query: {
          item: JSON.stringify(item),
        },
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

    goPlaceOrderBtn() {
      this.$router.push("/orderplace");
    },

    goRemoveOrder(iid) {
      this.deleteId = iid;
      const checkDel = window.prompt('欲刪除此訂單請輸入 "刪除" 並點擊確定');
      if (checkDel === "刪除") {
        deleteData(iid, "removeOrder", "delete")
          .then((res) => {
            // this.goodsListPaginationData = {};
            const { goodsListData, goodsListPaginationData } = paginationBarJs(
              res,
              this.goodsListData,
              this.goodsListPaginationData
            );
            this.goodsListData = goodsListData;
            this.goodsListPaginationData = goodsListPaginationData;
            alert("訂單刪除成功");
          })
          .catch((err) => {
            console.log(`err:${err}`);
          });
      }
    },

    resFilter(res) {
      this.paginationNative = 1;
      const { goodsListData, goodsListPaginationData } = paginationBarJs(
        res,
        this.goodsListData,
        this.goodsListPaginationData
      );
      this.goodsListData = goodsListData;
      this.goodsListPaginationData = goodsListPaginationData;
    },

    // orderlist activated返回至相同位置&data(bus=>orderSearch)
    resActivated(res) {
      window.scrollTo(0, this.$store.state.orderListHeight);
    },

    resFind(res) {
      this.paginationNative = 1;
      this.goodsListData = [];
      this.goodsListData.push(res);
      const { goodsListData, goodsListPaginationData } = paginationBarJs(
        null,
        this.goodsListData,
        this.goodsListPaginationData
      );
      this.goodsListData = goodsListData;
      this.goodsListPaginationData = goodsListPaginationData;
    },

    // paginationBar
    paginationBtn(index) {
      this.paginationNative = index;
      window.scrollTo(0, 0);
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
  flex: 11.1%;
  text-align: center;
  font-weight: 700;
  height: 50px;
  line-height: 50px;
}

.order_bd .goods_item {
  display: flex;
}

.goods_item .content_item {
  flex: 11%;
  text-align: center;
}

.listItem_title,
.list_item {
  flex: 6% !important;
}

.orderNum,
.orderNum_title {
  flex: 17.2% !important;
}

.placeOrderBtn {
  float: right;
}

.goods_item {
  border-bottom: 1px solid #999999;
  height: 50px;
}

.goods_item > div {
  line-height: 49px;
}

.edit_btn {
  margin-right: 10px;
}

.pagination_bar {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 40px;
}

.pagination_bar .pagination_wrap > span {
  display: inline-block;
  width: 26px;
  height: 26px;
  margin: 0 5px;
  border: 1px solid #999999;
  border-radius: 13px;
  text-align: center;
  line-height: 26px;
  cursor: pointer;
}

.pagination_bar .pagination_wrap > span:hover {
  background-color: #999999;
  color: #fff;
  opacity: 0.8;
}

.current_index {
  background-color: #999999;
  color: #fff;
}
</style>
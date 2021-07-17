<template>
  <div id="Order">
    <div class="order_hd">
      <p>新建訂單</p>
      <div>
        <!-- 訂單編號 -->
        <div>訂單編號：{{ orderNum }}</div>

        <!-- 蝦皮訂單編號 -->
        <div>
          蝦皮訂單編號：<input
            type="text"
            v-model.trim="shopeeAccount"
            ref="shopeeIpt"
          />
          <button @click="shopeeCheck" v-if="isShopeeShow">確定</button>
        </div>

        <!-- 買家帳號 -->
        <template v-if="buyerIsShow">
          <div>
            買家帳號：<input type="text" v-model.trim="buyerAccount" />
            <button @click="checkBuyerAccount">確定</button>
          </div>
        </template>
        <template v-else>
          <div>
            買家帳號<input type="text" :value="buyerAccount" disabled />
          </div>
        </template>

        <div>
          <!-- 檔期 -->
          檔期：<select @change="sortChange" v-model="sortBind">
            <option value="">請選擇</option>
            <option value="all">所有檔期</option>
            <template v-for="item in sortList">
              <option :value="item.sort">{{ item.sort }}</option>
            </template>
          </select>
        </div>

        <!-- 商品貨號 -->

        <div>
          商品貨號<input type="text" v-model="goodsNum" />
          <span style="color: red"> *請輸入數字</span>
          <button @click="searchGoods">確定</button>
        </div>

        <!-- 商品名稱 -->
        <div>
          商品名稱：<select @change="goodsListChange" v-model="goodsListBind">
            <option value="">請選擇</option>
            <template v-for="item in resGoodsList">
              <option :value="item.gNum">{{ item.gName }}</option>
            </template>
          </select>
        </div>

        <!-- 顏色 -->
        <div>
          顏色：<span v-for="item in resGoods.isColor" :key="item"
            ><label :for="item"
              ><input
                type="radio"
                :value="item"
                v-model="orderColor"
                :id="item"
              />{{ item }} &nbsp
            </label></span
          >
        </div>

        <!-- 尺寸 -->
        <div>
          尺寸：<span v-for="item in resGoods.isSize" :key="item"
            ><label :for="item"
              ><input
                type="radio"
                :id="item"
                :value="item"
                v-model="orderSize"
              />{{ item }} &nbsp
            </label></span
          >
        </div>

        <!-- 數量 -->
        <div>數量：<input type="text" v-model.number="orderCount" /></div>

        <!-- 最晚出貨日期 -->
        <div>
          <template v-if="lastShipIsShow">
            最晚出貨日：<input type="date" v-model="lastShipment" /><button
              @click="lastShipCheck"
            >
              確定
            </button>
          </template>
          <template v-else>
            最晚出貨日：<input type="date" disabled :value="lastShipment" />
          </template>
          {{ lastShipment }}
        </div>

        <!-- 備註 -->
        <div>
          <div>備註：</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            v-model="orderNote"
          ></textarea>
        </div>

        <!-- 加入訂單 -->
        <button @click="addToOrder">加入訂單</button>
      </div>
    </div>

    <!-- 訂單商品列表 -->
    <div class="order_bd">
      <div class="title">
        <span>商品名稱</span>
        <span>商品顏色</span>
        <span>商品尺寸</span>
        <span>商品數量</span>
        <span>備註</span>
        <span>商品金額</span>
        <span>操作</span>
      </div>
      <div v-if="saveOrder.orderList.length > 0" class="list_content">
        <div
          class="order_list"
          v-for="(item, index) in saveOrder.orderList"
          :key="`item${index}`"
        >
          <div>
            <span>{{ item.orderName }}</span>
          </div>
          <div>
            <span>{{ item.orderColor }}</span>
          </div>
          <div>
            <span>{{ item.orderSize }}</span>
          </div>
          <div>
            <span>{{ item.orderCount }}</span>
          </div>
          <div>
            <span>{{ item.orderNote }}</span>
          </div>
          <div>
            <span>{{ item.finalPrice }}</span>
          </div>
          <div>
            <button @click="orderItemRemove(item)">移除</button>
          </div>
        </div>
      </div>
      <div v-else class="list_content">
        <p class="noneList">尚未有商品加入此筆訂單中</p>
      </div>
    </div>

    <!-- 訂單總金額 -->
    <h2 class="computedCountPrice">訂單總金額：{{ countPrice }}</h2>

    <!-- 提交訂單 -->
    <button @click="submitOrder">提交訂單</button>

    <alert-window>
      <template v-slot:alertContent>
        <p>是否確定？確定後就不能再更改</p>
      </template>
      <template v-slot:allowBtn>
        <span @click="nativePriceCheck">是</span>
      </template>
    </alert-window>
  </div>
</template>

<script>
import { requestAll, requestData } from "network/request.js";
import AlertWindow from "components/alert/AlertWindow.vue";
import dayjs from "dayjs";

export default {
  data() {
    return {
      // created 第一次獲取的數據
      sortList: [],
      goodsList: [],

      // filter過的goodsList(filter sort)
      resGoodsList: [],

      // filter過的goodsList (filter sort&&確定goodsListName)
      resGoods: {},

      // v-model的sort與good
      sortBind: "",
      goodsListBind: "",

      // 商品貨號
      goodsNum: "",

      // -- 訂單資訊(單筆) --
      //訂單編號
      orderNum: "",
      //蝦皮訂單編號
      shopeeAccount: "",
      isShopeeShow: true,
      //訂單商品名稱
      orderName: "",
      // 訂單顏色
      orderColor: "",
      //訂單尺寸
      orderSize: "",
      //訂單數量
      orderCount: 0,
      //訂單備註
      orderNote: "",

      //訂單商品彙整
      saveOrder: {
        orderList: [],
      },

      //買家帳號
      buyerAccount: "",
      //買家帳號isShow
      buyerIsShow: true,

      //最晚出貨日期
      lastShipment: "",
      // 最晚出貨日期isShow
      lastShipIsShow: true,

      //商品總金額
      // goodsListTotal: 0,
    };
  },
  components: {
    AlertWindow,
  },
  created() {
    this.orderNum = Date.now();
    requestAll("sortList", "get", "goodsList", "get")
      .then((res) => {
        this.sortList = res[0];
        this.goodsList = res[1];
      })
      .catch((err) => {
        console.log(`err${err}`);
      });
  },
  methods: {
    sortChange() {
      //init
      this.goodsListBind = "";
      if (this.resGoods.isColor) this.resGoods.isColor = "";
      if (this.resGoods.isSize) this.resGoods.isSize = "";
      this.orderCount = 0;
      this.orderNote = "";

      const sort = this.sortBind;
      if (sort == "") return;
      if (sort == "all") {
        this.resGoodsList = this.goodsList;
        return;
      }
      const res = this.goodsList.filter((item) => {
        return item.sort == sort;
      });
      this.resGoodsList = res;
    },
    goodsListChange() {
      const iid = this.goodsListBind;
      if (iid == "") return;
      const res = this.resGoodsList.find((item) => {
        return item.gNum == iid;
      });
      this.orderName = res.gName;
      this.resGoods = res;
    },
    addToOrder() {
      if (
        this.orderName != "" &&
        this.orderColor != "" &&
        this.orderSize != "" &&
        this.orderCount != "" &&
        this.orderCount > 0 &&
        this.sortBind !== "" &&
        this.goodsListBind !== "" &&
        this.buyerIsShow === false &&
        this.lastShipIsShow === false &&
        this.isShopeeShow === false
      ) {
        const res = this.goodsList.find(
          (item) => item.gNum == this.resGoods.gNum
        );
        const order = {};
        order.orderName = this.orderName;
        order.orderColor = this.orderColor;
        order.orderSize = this.orderSize;
        order.orderCount = this.orderCount;
        order.orderNote = this.orderNote;
        order.orderSelfNum = this.resGoods.selfNum;
        order.ordergNum = this.resGoods.gNum;
        order.status = false;
        order.finalPrice = res.finalPrice * this.orderCount;
        order.pGoods = res.pGoods;
        this.saveOrder.orderList.push(order);
        //init
        this.sortBind = "";
        this.resGoodsList = [];
        this.goodsListBind = "";
        this.resGoods = "";
        this.orderColor = "";
        this.orderSize = "";
        this.orderCount = 0;
        this.orderNote = "";
        this.goodsNum = "";
        alert("商品已成功加入訂單");
      } else {
        return alert("請確認商品資料完備或商品數量為1以上");
      }
    },
    orderItemRemove(data) {
      const index = this.saveOrder.orderList.findIndex((item) => {
        return (
          item.orderColor == data.orderColor &&
          item.orderCount == data.orderCount &&
          item.orderName == data.orderName &&
          item.orderSize == data.orderSize
        );
      });
      this.saveOrder.orderList.splice(index, 1);
    },
    searchGoods() {
      const iid = this.goodsNum;
      const res = this.goodsList.find((item) => item.selfNum == iid);
      if (!res) {
        return alert("商品貨號錯誤，請再次確認");
      }
      this.sortBind = res.sort;
      this.sortChange();
      this.goodsListBind = res.gNum;
      this.goodsListChange();
    },
    checkBuyerAccount() {
      if (this.buyerAccount == "") return alert("請確認買家帳號資訊是否填妥");
      this.buyerIsShow = !this.buyerIsShow;
      this.saveOrder.buyerAccount = this.buyerAccount;
    },
    lastShipCheck() {
      // if (this.lastShipment == '')
      if (this.lastShipment == "") return alert("請確認最晚出貨日期是否填妥");
      const timer = dayjs(this.lastShipment).valueOf();
      this.lastShipIsShow = !this.lastShipIsShow;
      this.saveOrder.lastShipment = timer;
    },
    submitOrder() {
      if (this.saveOrder.orderList.length < 1)
        return alert("請添加商品訂單後再提交訂單");
      this.saveOrder.orderNum = this.orderNum;
      this.saveOrder.orderTotal = this.countPrice;
      this.saveOrder.orderCurryStatus = false;
      // 叫貨狀態 placeOrder
      this.saveOrder.placeOrder = false;
      const data = JSON.stringify(this.saveOrder);
      requestData(data, "addOrder", "post")
        .then((res) => {
          if (res == 0) alert("訂單添加成功");
          this.$router.push("/orderList");
        })
        .catch((err) => {
          console.log(`err${err}`);
        });
    },
    shopeeCheck() {
      if (this.shopeeAccount == "") return alert("請確認蝦皮訂單編號是否填妥");
      this.isShopeeShow = !this.isShopeeShow;
      this.$refs.shopeeIpt.disabled = true;
      this.saveOrder.shopeeAccount = this.shopeeAccount;
    },
  },
  computed: {
    countPrice() {
      let count = 0;
      if (this.saveOrder.orderList.length == 0) return count;
      this.saveOrder.orderList.forEach((item) => {
        count += item.finalPrice;
      });
      return count;
    },
  },
};
</script>

<style scoped>
#Order {
  padding: 50px 40px;
}
.order_bd {
  margin-top: 50px;
}

.title {
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  border-bottom: 2px solid #505050;
}
.title span {
  flex: 14.2%;
  text-align: center;
  padding: 0 20px;
  font-weight: 700;
  font-size: 18px;
}

.order_list {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #999999;
}
.order_list div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 14.2%;
  text-align: center;
  padding: 5px 20px 5px;
}

.order_list div > span {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}

.list_content {
  margin-top: 10px;
}
.noneList {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
</style>
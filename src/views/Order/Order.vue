<template>
  <div id="Order">
    <div class="order_hd">
      <p class="create_order">新建訂單</p>
      <div class="content_wrap">
        <!-- 訂單編號 -->
        <div><label for="">訂單編號</label>{{ orderNum }}</div>

        <!-- 蝦皮訂單編號 -->
        <div>
          <label for="shopee_account_ipt">蝦皮訂單編號</label
          ><input
            type="text"
            v-model.trim="shopeeAccount"
            ref="shopeeIpt"
            class="textipt"
            id="shopee_account_ipt"
          />
          <button @click="shopeeCheck" v-if="isShopeeShow" class="confirm_btn">
            確定
          </button>
        </div>

        <!-- 買家帳號 -->
        <template v-if="buyerIsShow">
          <div>
            <label for="buyer_account_ipt">買家帳號</label
            ><input
              type="text"
              v-model.trim="buyerAccount"
              class="textipt"
              id="buyer_account_ipt"
            />
            <button @click="checkBuyerAccount" class="confirm_btn">確定</button>
          </div>
        </template>
        <template v-else>
          <div>
            <label>買家帳號</label
            ><input
              type="text"
              :value="buyerAccount"
              disabled
              class="textipt"
            />
          </div>
        </template>

        <div>
          <!-- 檔期 -->
          <label>檔期</label
          ><select @change="sortChange" v-model="sortBind" class="select_ipt">
            <option value="">請選擇</option>
            <option value="all">所有檔期</option>
            <template v-for="item in sortList">
              <option :value="item.sort" :key="item.sort">{{ item.sort }}</option>
            </template>
          </select>
        </div>

        <!-- 商品貨號 -->

        <div>
          <label for="goods_num_ipt">商品貨號</label
          ><input
            type="text"
            v-model="goodsNum"
            class="textipt"
            id="goods_num_ipt"
          />
          <!-- <span style="color: red"> *請輸入數字</span> -->
          <button @click="searchGoods" class="confirm_btn">確定</button>
        </div>

        <!-- 商品名稱 -->
        <div>
          <label>商品名稱</label
          ><select
            @change="goodsListChange"
            v-model="goodsListBind"
            class="select_ipt"
          >
            <option value="">請選擇</option>
            <template v-for="item in resGoodsList">
              <option :value="item.gNum" :key="item.gNum">{{ item.gName }}</option>
            </template>
          </select>
        </div>

        <!-- 顏色 -->
        <div>
          <label for="">顏色</label
          ><span v-for="item in resGoods.isColor" :key="item"
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
          <label for="">尺寸</label
          ><span v-for="item in resGoods.isSize" :key="item"
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
        <div>
          <label for="order_count_ipt">數量</label
          ><input
            type="text"
            v-model.number="orderCount"
            class="textipt"
            id="order_count_ipt"
          />
        </div>

        <!-- 最晚出貨日期 -->
        <div>
          <template v-if="lastShipIsShow">
            <label for="last_shipment_ipt">最晚出貨日</label
            ><input
              type="date"
              v-model="lastShipment"
              class="textipt"
              id="last_shipment_ipt"
            /><button @click="lastShipCheck" class="confirm_btn">確定</button>
          </template>
          <template v-else>
            <label for="">最晚出貨日</label
            ><input
              type="date"
              disabled
              :value="lastShipment"
              class="select_ipt"
            />
          </template>
        </div>

        <!-- 備註 -->
        <div>
          <div style="margin-bottom: 10px">備註</div>
          <textarea
            cols="30"
            rows="10"
            class="order_note_text"
            v-model="orderNote"
          ></textarea>
        </div>

        <!-- 加入訂單 -->
        <button @click="addToOrder" class="join_order">加入訂單</button>
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
          :class="{ current_bgc: index === currentIndex }"
          @mouseenter="enterItem(index)"
          @mouseleave="leaveItem"
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
            <button @click="orderItemRemove(item)" class="remove_orderlist_btn">
              移除
            </button>
          </div>
        </div>
      </div>
      <div v-else class="list_content">
        <p class="noneList" style="margin-top: 10px">
          尚未有商品加入此筆訂單中
        </p>
      </div>
    </div>

    <!-- 訂單總金額 -->
    <h2 class="computedCountPrice">訂單總金額：{{ countPrice }}</h2>

    <!-- 提交訂單 -->
    <button @click="submitOrder" class="commit_order_btn">提交訂單</button>

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
      currentIndex: null,
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

    enterItem(index) {
      this.currentIndex = index;
    },

    leaveItem() {
      this.currentIndex = "000";
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
  font-size: 18px;
  color: #4a4a4a;
  background-color: #f9f9f9;
}

.create_order {
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 700;
}

.order_bd {
  margin-top: 80px;
}

.content_wrap > div {
  margin-bottom: 20px;
}

.title {
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  border-bottom: 2px solid #b78873;
  color: #4a4a4a;
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
  height: 80px;
  justify-content: space-around;
  border-bottom: 1px solid #999999;
  cursor: default;
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

/* .list_content {
  margin-top: 10px;
} */
.noneList {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}

.textipt {
  width: 208px;
  margin-right: 10px;
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  color: #4a4a4a;
}

.select_ipt {
  width: 208px;
  height: 30px;
  padding: 1px 8px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  color: #4a4a4a;
}

.confirm_btn {
  width: 50px;
  height: 30px;
  margin-left: 15px;
  margin-right: 10px;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-size: 16px;
  background-color: #505050;
  cursor: pointer;
}

.confirm_btn:hover {
  opacity: 0.8;
}

label {
  display: inline-block;
  width: 130px;
}

.order_note_text {
  width: 337px;
  padding: 5px 8px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  color: #4a4a4a;
}

.join_order {
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-size: 16px;
  background-color: #505050;
  cursor: pointer;
}

.join_order:hover {
  opacity: 0.8;
}

.computedCountPrice {
  margin-top: 80px;
}

.current_bgc {
  background-color: #e4c7ba;
  /* border-bottom: 1px solid #e4c7ba; */
}

.remove_orderlist_btn {
  width: 50px;
  height: 30px;
  margin-right: 10px;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-size: 16px;
  background-color: rgb(225, 54, 54);
}

.commit_order_btn {
  width: 100px;
  height: 30px;
  margin-top: 30px;
  background-color: rgb(64, 169, 64);
  color: #fff;
  margin-right: 10px;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.commit_order_btn:hover {
  opacity: 0.8;
}
</style>
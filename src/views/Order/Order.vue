<template>
  <div id="Order">
    <div class="order_hd">
      <p>新建訂單</p>
      訂單編號：{{ orderNum }}
      <div>
        <div>
          <!-- 檔期 -->
          檔期：<select @change="sortChange" v-model="sortBind">
            <option value="">請選擇</option>
            <template v-for="item in sortList">
              <option :value="item.sort">{{ item.sort }}</option>
            </template>
          </select>
        </div>
        <div>
          <!-- 商品名稱 -->
          商品名稱：<select @change="goodsListChange" v-model="goodsListBind">
            <option value="">請選擇</option>
            <template v-for="item in resGoodsList">
              <option :value="item.gNum">{{ item.gName }}</option>
            </template>
          </select>
        </div>
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
        <div>數量：<input type="text" v-model.number="orderCount" /></div>
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
        <button @click="addToOrder">加入訂單</button>
      </div>
    </div>
    <div class="order_bd">
      <div class="title">
        <span>商品名稱</span>
        <span>商品顏色</span>
        <span>商品尺寸</span>
        <span>商品數量</span>
        <span>備註</span>
        <span>操作</span>
      </div>
      <div v-if="saveOrder.length > 0" class="list_content">
        <div
          class="order_list"
          v-for="(item, index) in saveOrder"
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
            <button @click="orderItemRemove(item)">移除</button>
          </div>
        </div>
      </div>
      <div v-else class="list_content">
        <p class="noneList">尚未有商品加入此筆訂單中</p>
      </div>
    </div>
    <button>提交訂單</button>
  </div>
</template>

<script>
import { requestAll } from "network/request.js";

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

      // -- 訂單資訊(單筆) --
      //訂單編號
      orderNum: "",
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
      saveOrder: [],
    };
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
      const sort = this.sortBind;
      if (sort == "") return;
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
        this.orderCount > 0
      ) {
        const order = {};
        order.orderName = this.orderName;
        order.orderColor = this.orderColor;
        order.orderSize = this.orderSize;
        order.orderCount = this.orderCount;
        order.orderNote = this.orderNote;
        this.saveOrder.push(order);

        //init
        this.sortBind = "";
        this.resGoodsList = "";
        this.goodsListBind = "";
        this.resGoods = "";
        this.orderColor = "";
        this.orderSize = "";
        this.orderCount = 0;
        this.orderNote = "";
      } else {
        return alert("請確認商品資料完備或商品數量為1以上");
      }
    },
    orderItemRemove(data) {
      const index = this.saveOrder.findIndex((item) => {
        return (
          item.orderColor == data.orderColor &&
          item.orderCount == data.orderCount &&
          item.orderName == data.orderName &&
          item.orderSize == data.orderSize
        );
      });
      this.saveOrder.splice(index, 1);
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
  flex: 16.6%;
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
  flex: 16.6%;
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
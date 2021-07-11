<template>
  <div id="GoodsList">
    <button @click="goGoods">新增商品</button>
    檔期種類選擇：<select
      v-model="sortClass"
      @change="changeSort"
    >
      <option value="">請選擇</option>
      <option value="all">所有檔期</option>
      <template v-for="item in sortList">
        <option :value="item.sort">{{ item.sort }}</option>
      </template>
    </select>
    <div class="goods_hd">
      <div>廠商貨號</div>
      <div>商品貨號</div>
      <div>品名</div>
      <div>商品檔期種類</div>
      <div>顏色</div>
      <div>尺寸</div>
      <div>成本</div>
      <div>操作</div>
    </div>
    <div class="goods_bd">
      <div v-if="dataList.length > 0">
        <div
          v-for="(item, index) in dataList"
          :key="`item${index}`"
          class="goods_item"
        >
          <span>{{ item.gNum }}</span>
          <span>{{ item.selfNum }}</span>
          <span>{{ item.gName }}</span>
          <span>{{ item.sort }}</span>
          <span class="color_wrap">
            <template
              v-for="(colorItem, index) in item.isColor"
              class="color_item"
            >
              {{ colorItem }}
            </template>
          </span>
          <span class="size_wrap">
            <template v-for="sizeItem in item.isSize" class="size_item">
              {{ sizeItem }}
            </template>
          </span>
          <span>{{ item.pGoods }}</span>
          <span><button @click="goEditGoods(item.gNum)">操作</button></span>
        </div>
      </div>
      <div v-else>
        <h2>此檔期種類為空</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { requestData, requestAll } from "network/request.js";
import requestDataSort from "network/requestSort.js";
export default {
  data() {
    return {
      dataList: [],
      sortList: [],
      sortClass: "",
    };
  },
  created() {
    //goodslist
    requestData(null, "goodsList", "get")
      .then((res) => {
        this.dataList = res;
      })
      .catch((err) => {
        console.log(`err:${err}`);
      });

    //sort
    requestDataSort(null, "sortList", "get")
      .then((res) => {
        this.sortList = res;
      })
      .catch((err) => {
        console.log(`錯誤${err}`);
      });
  },
  methods: {
    goGoods() {
      this.$router.push("/CreateGoods");
    },
    goEditGoods(iid) {
      this.$router.push({
        path: "/editGoods",
        query: {
          iid,
        },
      });
    },
    changeSort() {
      if (this.sortClass == "") {
        return;
      } else if (this.sortClass == "all") {
        requestData(null, "goodsList", "get").then((res) => {
          this.dataList = res;
        });
        requestDataSort(null, "sortList", "get")
          .then((res) => {
            this.sortList = res;
          })
          .catch((err) => {
            console.log(`錯誤${err}`);
          });
      } else {
        requestData(this.sortClass, "goodslistSort", "get")
          .then((res) => {
            this.dataList = res;
          })
          .catch((err) => {
            console.log(`err:${err}`);
          });
      }
    },
  },
};
</script>

<style scoped>
#GoodsList {
  width: 1200px;
  margin: 0 auto;
}

.goods_hd {
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #999999;
}

.goods_hd > div {
  flex: 20%;
  text-align: center;
  font-weight: 700;
  height: 50px;
  line-height: 50px;
}
.goods_item {
  display: flex;
  justify-content: space-around;
  height: 100px;
  border-bottom: 1px solid #999999;
}
.goods_item > span {
  flex: 20%;
  padding: 0 10px;
  text-align: center;
  line-height: 100px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.color_item,
.size_item {
  text-align: center;
  line-height: initial;
}

.color_wrap,
.size_wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.size_wrap {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
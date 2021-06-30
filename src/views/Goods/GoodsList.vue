<template>
  <div id="GoodsList">
    <button @click="goGoods">新增商品</button>
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
  </div>
</template>

<script>
import { requestData, requestAll } from "network/request.js";
export default {
  data() {
    return {
      dataList: [],
    };
  },
  created() {
    requestData(null, "goodsList", "get").then((res) => {
      this.dataList = res;
    });
    // requestAll("goodsList", "get", "sortList", "get")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
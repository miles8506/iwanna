<template>
  <div>
    <div class="goodsNum">廠商貨號:{{ goodsData.gNum }}</div>
    <div class="goodsNum">商品貨號:{{ goodsData.selfNum }}</div>
    <div class="goodsName">商品名稱:{{ goodsData.gName }}</div>
    <div class="price">價錢(成本){{ goodsData.pGoods }}</div>
    <div>檔期種類名稱:{{ goodsData.sort }}</div>
    <div class="goodsColor">
      顏色
      <label for="black"
        ><input
          type="checkbox"
          checked
          id="black"
          value="黑色"
          v-model="isColor"
        />黑色</label
      >
      <label for="white"
        ><input
          type="checkbox"
          id="white"
          value="白色"
          v-model="isColor"
        />白色</label
      >
      <label for="gray"
        ><input
          type="checkbox"
          id="gray"
          value="灰色"
          v-model="isColor"
        />灰色</label
      >
      <label for="deepgray"
        ><input
          type="checkbox"
          id="deepgray"
          value="炭灰"
          v-model="isColor"
        />炭灰</label
      >
      <label for="apricot"
        ><input
          type="checkbox"
          id="apricot"
          value="杏色"
          v-model="isColor"
        />杏色</label
      >
      <label for="butter"
        ><input
          type="checkbox"
          id="butter"
          value="奶油色"
          v-model="isColor"
        />奶油色</label
      >
      <label for="blue"
        ><input
          type="checkbox"
          id="blue"
          value="藍色"
          v-model="isColor"
        />藍色</label
      >
      <label for="green"
        ><input
          type="checkbox"
          id="green"
          value="綠色"
          v-model="isColor"
        />綠色</label
      >
      <label for="shallowgreen"
        ><input
          type="checkbox"
          id="shallowgreen"
          value="淺綠色"
          v-model="isColor"
        />淺綠色</label
      >
      <label for="deepgreen"
        ><input
          type="checkbox"
          id="deepgreen"
          value="軍綠色"
          v-model="isColor"
        />軍綠色</label
      >
      <label for="yellow"
        ><input
          type="checkbox"
          id="yellow"
          value="黃色"
          v-model="isColor"
        />黃色</label
      >
      <label for="deepyellow"
        ><input
          type="checkbox"
          id="deepyellow"
          value="薑黃色"
          v-model="isColor"
        />薑黃色</label
      >
      <label for="shallowyellow"
        ><input
          type="checkbox"
          id="shallowyellow"
          value="寶寶黃"
          v-model="isColor"
        />寶寶黃</label
      >
      <label for="red"
        ><input
          type="checkbox"
          id="red"
          value="紅色"
          v-model="isColor"
        />紅色</label
      >
      <label for="pink"
        ><input
          type="checkbox"
          id="pink"
          value="粉色"
          v-model="isColor"
        />粉色</label
      >
      <label for="purple"
        ><input
          type="checkbox"
          id="purple"
          value="紫色"
          v-model="isColor"
        />紫色</label
      >
      <label for="linen"
        ><input
          type="checkbox"
          id="linen"
          value="亞麻色"
          v-model="isColor"
        />亞麻色</label
      >
      <label for="khaki"
        ><input
          type="checkbox"
          id="khaki"
          value="卡其色"
          v-model="isColor"
        />卡其色</label
      >
      <label for="ga"
        ><input
          type="checkbox"
          id="ga"
          value="咖色"
          v-model="isColor"
        />咖色</label
      >
      <label for="ca"
        ><input
          type="checkbox"
          id="ca"
          value="卡色"
          v-model="isColor"
        />卡色</label
      >
    </div>
    <div class="size">
      尺寸
      <label for="s"
        ><input type="checkbox" value="S" id="s" v-model="isSize" />S</label
      >
      <label for="m"
        ><input type="checkbox" value="M" id="m" v-model="isSize" />M</label
      >
      <label for="l"
        ><input type="checkbox" value="L" id="l" v-model="isSize" />L</label
      >
      <label for="xl"
        ><input type="checkbox" value="XL" id="xl" v-model="isSize" />XL</label
      >
      <label for="free"
        ><input type="checkbox" id="free" value="Free" v-model="isSize" />Free
        Size</label
      >
    </div>
    <div>創建時間：{{ goodsData.timer }}</div>
    <button @click="goBack">取消</button>
    <button @click="goChange">保存</button>
    <button @click="checkDel">刪除</button>

    <div class="bgc" v-if="isShow">
      <div class="alert_wrap">
        <div class="content">
          <p>確定要刪除？</p>
          <div class="control">
            <span @click="isShow = !isShow">否</span
            ><span @click="goDel">是</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestData } from "network/request.js";
export default {
  data() {
    return {
      iid: "",
      isColor: [],
      isSize: [],
      sortList: [],
      goodsData: {},
      isShow: false,
    };
  },
  created() {
    this.iid = this.$route.query.iid;
    requestData(this.$route.query.iid, "goodslistDetail", "get")
      .then((res) => {
        this.goodsData = res;
        res.isColor.forEach((item) => {
          this.isColor.push(item);
        });
        res.isSize.forEach((item) => {
          this.isSize.push(item);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    goChange() {
      const data = {};
      data.gName = this.goodsData.gName;
      data.gNum = this.iid;
      data.isColor = this.isColor;
      data.isSize = this.isSize;
      data.pGoods = this.goodsData.pGoods;
      data.selfNum = this.goodsData.selfNum;
      data.sort = this.goodsData.sort;
      data.timer = this.goodsData.timer;
      requestData(JSON.stringify(data), "goodsChange", "post").then((res) => {
        window.alert("商品已修改");
        this.$router.go(-1);
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    checkDel() {
      this.isShow = !this.isShow;
    },
    goDel() {
      this.isShow = !this.isShow;
      requestData(this.iid, "goodsDel", "delete").then((res) => {
        if (res == 0) window.alert(`${this.goodsData.gName}商品已成功刪除`);
        this.$router.go(-1);
      });
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/alert.css");
</style>
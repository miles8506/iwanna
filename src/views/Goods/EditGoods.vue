<template>
  <div id="edit_goods">
    <div class="goodsNum">廠商貨號: {{ goodsData.gNum }}</div>
    <div class="goodsNum">商品貨號: {{ goodsData.selfNum }}</div>
    <div class="goodsName">商品名稱: {{ goodsData.gName }}</div>
    <div class="price">
      成本價(人民幣):
      <input
        type="text"
        v-model="pGoods"
        disabled
        ref="nativePriceIpt"
        class="money_ipt"
      /><button @click="pGoodsCheck" ref="nativePriceBtn" class="eidt_btn">
        修改
      </button>
    </div>
    <div>成本價(台幣): {{ nativeNT }}</div>
    <div>最低售價: {{ minimumPrice }}</div>
    <div>建議售價: {{ bestPrice }}</div>
    <div class="final_price">
      最後定價:
      <input
        type="text"
        v-model.number="finalPrice"
        ref="finalPriceIpt"
        class="money_ipt"
        disabled
      /><button @click="editFinalPrice" ref="editBtn" class="eidt_btn">
        修改
      </button>
    </div>
    <div>檔期種類名稱: {{ goodsData.sort }}</div>
    <div class="goodsColor">
      顏色:
      <label for="F"
        ><input
          type="checkbox"
          checked
          id="F"
          value="F"
          v-model="isColor"
        />F</label
      >
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
      <label for="chioton"
        ><input
          type="checkbox"
          id="chioton"
          value="焦糖"
          v-model="isColor"
        />焦糖</label
      >
      <label for="eanmin"
        ><input
          type="checkbox"
          id="eanmin"
          value="燕麥"
          v-model="isColor"
        />燕麥</label
      >
      <label for="naichio"
        ><input
          type="checkbox"
          id="naichio"
          value="奶茶"
          v-model="isColor"
        />奶茶</label
      >
      <label for="meser"
        ><input
          type="checkbox"
          id="meser"
          value="米色"
          v-model="isColor"
        />米色</label
      >
      <label for="naiser"
        ><input
          type="checkbox"
          id="naiser"
          value="奶色"
          v-model="isColor"
        />奶色</label
      >
      <label for="shonser"
        ><input
          type="checkbox"
          id="shonser"
          value="棕色"
          v-model="isColor"
        />棕色</label
      >
      <label for="salu"
        ><input
          type="checkbox"
          id="salu"
          value="沙綠"
          v-model="isColor"
        />沙綠</label
      >
      <label for="jonchin"
        ><input
          type="checkbox"
          id="jonchin"
          value="藏青"
          v-model="isColor"
        />藏青</label
      >
      <label for="dolu"
        ><input
          type="checkbox"
          id="dolu"
          value="豆綠"
          v-model="isColor"
        />豆綠</label
      >
      <label for="tiowon"
        ><input
          type="checkbox"
          id="tiowon"
          value="條紋"
          v-model="isColor"
        />條紋</label
      >
      <label for="naihuan"
        ><input
          type="checkbox"
          id="naihuan"
          value="奶黃"
          v-model="isColor"
        />奶黃</label
      >
      <label for="shangreen"
        ><input
          type="checkbox"
          id="shangreen"
          value="鹹菜綠"
          v-model="isColor"
        />鹹菜綠</label
      >
      <label for="chaiolu"
        ><input
          type="checkbox"
          id="chaiolu"
          value="草綠"
          v-model="isColor"
        />草綠</label
      >
      <label for="oufan"
        ><input
          type="checkbox"
          id="oufan"
          value="藕粉"
          v-model="isColor"
        />藕粉</label
      >
      <label for="deepblue"
        ><input
          type="checkbox"
          id="deepblue"
          value="深藍"
          v-model="isColor"
        />深藍</label
      >
      <label for="naisee"
        ><input
          type="checkbox"
          id="naisee"
          value="奶昔"
          v-model="isColor"
        />奶昔</label
      >
      <label for="mebai"
        ><input
          type="checkbox"
          id="mebai"
          value="米白"
          v-model="isColor"
        />米白</label
      >
    </div>
    <div class="size">
      尺寸:
      <label for="free"
        ><input type="checkbox" id="free" value="Free" v-model="isSize" />Free
        Size</label
      >
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
      <label for="thirtyfive"
        ><input
          type="checkbox"
          value="35"
          id="thirtyfive"
          v-model="isSize"
        />35</label
      >
      <label for="thirtysix"
        ><input
          type="checkbox"
          value="36"
          id="thirtysix"
          v-model="isSize"
        />36</label
      >
      <label for="thirtyseven"
        ><input
          type="checkbox"
          value="37"
          id="thirtyseven"
          v-model="isSize"
        />37</label
      >
      <label for="thirtyeight"
        ><input
          type="checkbox"
          value="38"
          id="thirtyeight"
          v-model="isSize"
        />38</label
      >
      <label for="thirtynine"
        ><input
          type="checkbox"
          value="39"
          id="thirtynine"
          v-model="isSize"
        />39</label
      >
      <label for="forty"
        ><input
          type="checkbox"
          value="40"
          id="forty"
          v-model="isSize"
        />40</label
      >
    </div>
    <div>創建時間: {{ goodsData.timer }}</div>
    <div class="goods_btn_wrap">
      <button @click="goChange" class="goods_edit_btn">保存</button>
      <button @click="goBack" class="goods_edit_btn">取消</button>
      <button @click="checkDel" class="goods_edit_btn">刪除</button>
    </div>

    <!-- 警視窗 -->
    <alert-window :isShow="isShow" @editShow="editShow">
      <template v-slot:alertContent>
        <p>確定要刪除？</p>
      </template>
      <template v-slot:allowBtn>
        <span @click="goDel">是</span>
      </template>
    </alert-window>
  </div>
</template>

<script>
import AlertWindow from "components/alert/AlertWindow.vue";
import { requestData } from "network/request.js";
import priceMixin from "@/mixin/price.js";

export default {
  mixins: [priceMixin],
  data() {
    return {
      iid: "",
      pGoods: "",
      isColor: [],
      isSize: [],
      sortList: [],
      goodsData: {},
      isShow: false,
      iptDesabled: true,
      finalPrice: "",
      isShowNativePrice: true,
    };
  },
  components: {
    AlertWindow,
  },
  created() {
    // this.$store.commit("setShowSideBar", false);
    this.iid = this.$route.query.iid;
    requestData(this.$route.query.iid, "goodslistDetail", "get")
      .then((res) => {
        this.goodsData = res;
        this.finalPrice = res.finalPrice;
        this.pGoods = res.pGoods;
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
      if (
        this.finalPrice == "" ||
        this.iptDesabled == false ||
        this.isShowNativePrice === false ||
        this.pGoods == "" ||
        this.finalPrice == ""
      ) {
        return alert("請確認商品資訊是否填妥");
      }
      const data = {};
      data.gName = this.goodsData.gName;
      data.gNum = this.iid;
      data.isColor = this.isColor;
      data.isSize = this.isSize;
      data.pGoods = this.pGoods;
      data.selfNum = this.goodsData.selfNum;
      data.sort = this.goodsData.sort;
      data.timer = this.goodsData.timer;
      data.finalPrice = this.finalPrice;
      requestData(JSON.stringify(data), "goodsChange", "post").then((res) => {
        window.alert("商品已修改");
        // this.$router.go(-1);
        this.$router.push("/goodsList");
      });
    },
    goBack() {
      // this.$router.go(-1);
      this.$router.push("/goodsList");
    },
    checkDel() {
      this.isShow = !this.isShow;
    },
    goDel() {
      this.isShow = !this.isShow;
      requestData(this.iid, "goodsDel", "delete").then((res) => {
        if (res == 0) window.alert(`${this.goodsData.gName}商品已成功刪除`);
        // this.$router.go(-1);
        this.$router.push("/goodsList");
      });
    },
    editShow() {
      this.isShow = !this.isShow;
    },
    editFinalPrice() {
      this.iptDesabled = !this.iptDesabled;
      if (this.iptDesabled == true) {
        this.$refs.editBtn.textContent = "修改";
        this.$refs.finalPriceIpt.disabled = this.iptDesabled;
      } else {
        this.$refs.editBtn.textContent = "確定";
        this.$refs.finalPriceIpt.disabled = this.iptDesabled;
      }
    },
    pGoodsCheck() {
      this.isShowNativePrice = !this.isShowNativePrice;
      if (!this.isShowNativePrice) {
        this.$refs.nativePriceIpt.disabled = false;
        this.$refs.nativePriceBtn.textContent = "確定";
      } else {
        this.$refs.nativePriceIpt.disabled = true;
        this.$refs.nativePriceBtn.textContent = "修改";
      }
    },
  },
};
</script>

<style scoped>
#edit_goods {
  padding: 50px 20px;
}

#edit_goods > div {
  margin-bottom: 20px;
  color: #4a4a4a;
  font-size: 18px;
}
label {
  margin-right: 5px;
}

.goods_edit_btn {
  width: 50px;
  height: 30px;
  margin-right: 10px;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-size: 16px;
}

.goods_edit_btn:nth-child(1) {
  background-color: rgb(64, 169, 64);
}

.goods_edit_btn:nth-child(2) {
  background-color: #505050;
}

.goods_edit_btn:nth-child(3) {
  background-color: rgb(225, 54, 54);
}

.goods_btn_wrap {
  margin-top: 40px;
}

.money_ipt {
  margin-right: 10px;
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  color: #4a4a4a;
}

.eidt_btn {
  width: 50px;
  height: 28px;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-size: 16px;
  background-color: #505050;
}
</style>
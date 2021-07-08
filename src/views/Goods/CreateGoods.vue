  <template>
  <div id="Goods">
    <div class="goodsNum">
      <label for="gNum"
        >廠商貨號<input type="text" id="gNum" v-model="gNum"
      /></label>
    </div>
    <div class="goodsNum">
      <label for="selfNum"
        >商品貨號<input type="text" id="selfNum" v-model.number="selfNum" />
      </label>
      &nbsp
      <span style="color: red">*只能填寫數字</span>
    </div>
    <div class="goodsName">
      <label for="gName"
        >商品名稱<input type="text" id="gName" v-model="gName"
      /></label>
    </div>
    <div class="price">
      <template>
        <label for="pGoods"
          >成本價(人民幣)<input
            type="text"
            id="pGoods"
            v-model.trim="pGoods"
            ref="nativePriceIpt" /></label
        ><button @click="checkNativePrice" v-if="isShowNativePriceBtn">
          確定
        </button>
      </template>
    </div>
    <div class="sugPrice" v-if="isShowComputedPrice">
      <div>成本價(台幣){{ nativeNT }}</div>
      <div>最低售價：{{ minimumPrice }}</div>
      <div>建議售價：{{ bestPrice }}</div>
      <div>
        <label for="final_price"
          >最後定價：<input
            type="text"
            id="final_price"
            v-model.number="finalPrice"
        /></label>
      </div>
    </div>
    <div>
      檔期種類名稱<select name="sort" id="" v-model="sort">
        <option value="">請選擇</option>
        <option
          :value="item"
          v-for="(item, index) in sortList"
          :key="`item${index}`"
        >
          {{ item.sort }}
        </option>
      </select>
    </div>
    <div class="goodsColor">
      顏色
      <label for="black"
        ><input
          type="checkbox"
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
    <button @click="goBack">取消</button>
    <button @click="goSave">保存</button>
    <alert-window :isShow="isShowAlert" @editShow="editShow">
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
import { requestData } from "network/request.js";
import AlertWindow from "components/alert/AlertWindow.vue";
import priceMixin from "@/mixin/price.js";
export default {
  mixins: [priceMixin],
  data() {
    return {
      gNum: "",
      selfNum: "",
      gName: "",
      pGoods: "",
      finalPrice: "",
      isShowNativePriceBtn: true,
      isShowAlert: false,
      isShowComputedPrice: false,
      isColor: [],
      isSize: [],
      sort: "",
      sortList: [],
    };
  },
  components: {
    AlertWindow,
  },
  created() {
    requestData(null, "sortList", "get").then((res) => {
      this.sortList = res;
    });
  },
  methods: {
    goBack() {
      this.$router.push("/goodsList");
    },

    goSave() {
      if (
        this.gNum != "" &&
        this.selfNum != "" &&
        this.gName != "" &&
        this.pGoods != "" &&
        this.sort != "" &&
        this.isColor.length > 0 &&
        this.isSize.length > 0 &&
        this.finalPrice !== ""
      ) {
        const goodsInfo = {};
        goodsInfo.gNum = this.gNum;
        goodsInfo.selfNum = this.selfNum;
        goodsInfo.gName = this.gName;
        goodsInfo.pGoods = this.pGoods;
        goodsInfo.isColor = this.isColor;
        goodsInfo.isSize = this.isSize;
        goodsInfo.sort = this.sort.sort;
        goodsInfo.finalPrice = this.finalPrice;

        // goodsInfo.timer = new Date();
        requestData(JSON.stringify(goodsInfo), "addGoods", "post").then(
          (res) => {
            if (res == 0) {
              window.alert(`增加 "${this.gName}" 商品成功`);
              this.$router.push("/goodsList");
            } else if (res == 1) {
              window.alert(`增加商品失敗`);
              this.$router.push("/goodsList");
            } else if (res == 2) {
              window.alert(`該商品已存在，請檢查廠商貨號`);
            }
          }
        );
      } else {
        alert("請確認商品輸入完整");
      }
    },
    checkNativePrice() {
      if (this.pGoods == "") return alert("請確認資料填妥");
      this.isShowAlert = !this.isShowAlert;
    },
    editShow() {
      this.isShowAlert = !this.isShowAlert;
    },
    nativePriceCheck() {
      this.isShowNativePriceBtn = !this.isShowNativePriceBtn;
      this.isShowAlert = !this.isShowAlert;
      this.$refs.nativePriceIpt.disabled = true;
      this.isShowComputedPrice = !this.isShowComputedPrice;
    },
  },
  // computed: {
  //   nativeNT() {
  //     return Math.ceil((parseInt(this.pGoods) + 5) * 4.35);
  //   },
  //   minimumPrice() {
  //     return Math.ceil((parseInt(this.pGoods) + 5) * 4.35 * 2);
  //   },
  //   bestPrice() {
  //     return Math.ceil((parseInt(this.pGoods) + 5) * 4.35 * 2 * 1.15);
  //   },
  // },
};
</script>

<style scoped>
</style>
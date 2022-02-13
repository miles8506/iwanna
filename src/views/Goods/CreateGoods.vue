  <template>
  <div id="Goods">
    <div class="goodsNum" style="margin-bottom: 15px">
      <label for="gNum"
        >廠商貨號:
        <input type="text" id="gNum" v-model="gNum" class="goods_edit_ipt"
      /></label>
    </div>
    <div class="goodsNum" style="margin-bottom: 15px">
      <label for="selfNum"
        >商品貨號:
        <input
          type="text"
          id="selfNum"
          v-model.number="selfNum"
          class="goods_edit_ipt"
        />
      </label>
      &nbsp
      <span style="color: red">*只能填寫數字</span>
    </div>
    <div class="goodsName" style="margin-bottom: 15px">
      <label for="gName"
        >商品名稱:
        <input type="text" id="gName" v-model="gName" class="goods_edit_ipt"
      /></label>
    </div>
    <div class="price" style="margin-bottom: 15px">
      <template>
        <label for="pGoods"
          >成本價(人民幣):
          <input
            type="text"
            id="pGoods"
            v-model.trim="pGoods"
            class="goods_edit_ipt"
            ref="nativePriceIpt" /></label
        ><button @click="checkNativePrice" v-if="isShowNativePriceBtn">
          確定
        </button>
      </template>
    </div>
    <div class="sugPrice" v-if="isShowComputedPrice">
      <div style="margin-bottom: 15px">成本價(台幣): {{ nativeNT }}</div>
      <div style="margin-bottom: 15px">最低售價: {{ minimumPrice }}</div>
      <div style="margin-bottom: 15px">建議售價: {{ bestPrice }}</div>
      <div style="margin-bottom: 15px">
        <label for="final_price"
          >最後定價:
          <input
            type="text"
            id="final_price"
            v-model.number="finalPrice"
            class="goods_edit_ipt"
        /></label>
      </div>
    </div>
    <div style="margin-bottom: 15px">
      檔期種類名稱:
      <select name="sort" id="" v-model="sort">
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
    <div class="goodsColor" style="margin-bottom: 15px">
      顏色:
      <label for="F"
        ><input type="checkbox" id="F" value="F" v-model="isColor" />F</label
      >
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

      <label for="tuaoser"
        ><input
          type="checkbox"
          id="tuaoser"
          value="駝色"
          v-model="isColor"
        />駝色</label
      >
      <label for="buaoheser"
        ><input
          type="checkbox"
          id="buaoheser"
          value="薄荷色"
          v-model="isColor"
        />薄荷色</label
      >
      <label for="hualuser"
        ><input
          type="checkbox"
          id="hualuser"
          value="灰綠色"
          v-model="isColor"
        />灰綠色</label
      >
      <label for="simazi"
        ><input
          type="checkbox"
          id="simazi"
          value="西梅子"
          v-model="isColor"
        />西梅子</label
      >
      <label for="curcurser"
        ><input
          type="checkbox"
          id="curcurser"
          value="可可色"
          v-model="isColor"
        />可可色</label
      >
      <label for="pingoalu"
        ><input
          type="checkbox"
          id="pingoalu"
          value="蘋果綠"
          v-model="isColor"
        />蘋果綠</label
      >
      <label for="doalu"
        ><input
          type="checkbox"
          id="doalu"
          value="稻綠"
          v-model="isColor"
        />稻綠</label
      >
      <label for="hualu"
        ><input
          type="checkbox"
          id="hualu"
          value="灰綠"
          v-model="isColor"
        />灰綠</label
      >
      <label for="mihua"
        ><input
          type="checkbox"
          id="mihua"
          value="麥灰"
          v-model="isColor"
        />麥灰</label
      >
      <label for="fuser"
        ><input
          type="checkbox"
          id="fuser"
          value="膚色"
          v-model="isColor"
        />膚色</label
      >
      <label for="nanguaser"
        ><input
          type="checkbox"
          id="nanguaser"
          value="南瓜色"
          v-model="isColor"
        />南瓜色</label
      >
      <label for="naibye"
        ><input
          type="checkbox"
          id="naibye"
          value="奶白"
          v-model="isColor"
        />奶白</label
      >
      <label for="hamegua"
        ><input
          type="checkbox"
          id="hamegua"
          value="哈密瓜"
          v-model="isColor"
        />哈密瓜</label
      >
      <label for="mahung"
        ><input
          type="checkbox"
          id="mahung"
          value="玫紅"
          v-model="isColor"
        />玫紅</label
      >
    </div>
    <div class="size" style="margin-bottom: 15px">
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
      <label for="xll"
        ><input type="checkbox" value="XLL" id="xll" v-model="isSize" />XLL</label
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
    <button @click="goBack" style="background-color: #505050" class="goods_btn">
      取消
    </button>
    <button
      @click="goSave"
      style="background-color: rgb(64, 169, 64)"
      class="goods_btn"
    >
      保存
    </button>
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
};
</script>

<style scoped>
#Goods {
  padding: 50px 20px;
  color: #4a4a4a;
  font-size: 18px;
}
.goods_edit_ipt {
  margin-right: 10px;
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  color: #4a4a4a;
}

label {
  margin-right: 5px;
}

select {
  width: 150px;
  height: 30px;
  padding: 1px 8px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  color: #4a4a4a;
}

.goods_btn {
  width: 50px;
  height: 30px;
  margin-right: 10px;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
</style>
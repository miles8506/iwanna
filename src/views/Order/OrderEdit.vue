<template>
  <div id="orderEdit">
    <div class="main_order">
      <h2>訂單主要資料</h2>
      <div>訂單名稱:{{ orderGoods.orderNum }}</div>
      <div>買家帳號:{{ orderGoods.buyerAccount }}</div>
      <div>最晚出貨時間:{{ lastShip }}</div>
      <div>訂單總金額:{{ orderGoods.orderTotal }}</div>
    </div>
    <div class="detail_order">
      <h2>訂單商品</h2>
      <div
        class="order_goods_item"
        v-for="(item, index) in orderGoods.orderList"
        :key="index"
      >
        <div>
          <label for="curryStatusIpt"
            >出貨狀態:<input
              type="checkbox"
              @change="statusChange(item)"
              :checked="item.status"
              :disabled="item.status === 'complete'"
              id="curryStatusIpt"
          /></label>
        </div>
        <div>商品名稱:{{ item.orderName }}</div>
        <div>廠商貨號:{{ item.ordergNum }}</div>
        <div>商品貨號:{{ item.orderSelfNum }}</div>
        <div>尺寸:{{ item.orderSize }}</div>
        <div>顏色:{{ item.orderColor }}</div>
        <div>數量:{{ item.orderCount }}</div>
        <div>價錢:{{ item.finalPrice }}</div>
        <div>
          備註<textarea
            cols="30"
            rows="10"
            v-model="noteArr[index]"
            ref="noteIpt"
            disabled
          ></textarea>
          <button @click="EditNoteIpt(item, index)" ref="editBtn">修改</button>
        </div>
      </div>
    </div>
    <button @click="goBack">返回</button>
    <button @click="goEdit">確定</button>
  </div>
</template>

<script>
import { requestData } from "network/request.js";
import dayjs from "dayjs";
export default {
  data() {
    return {
      orderGoods: {},
      isEdit: [],
      noteArr: [],
    };
  },
  created() {
    this.orderGoods = JSON.parse(this.$route.query.item);
    for (let i = 0; i < this.orderGoods.orderList.length; i++) {
      this.noteArr.push(this.orderGoods.orderList[i].orderNote);
      this.isEdit.push(true);
    }
  },
  methods: {
    statusChange(data) {
      const goodsList = this.orderGoods.orderList;
      const res = goodsList.find((item) => item == data);
      res.status = !res.status;
    },
    EditNoteIpt(data, index) {
      this.isEdit[index] = !this.isEdit[index];
      if (this.isEdit[index] == false) {
        this.$refs.noteIpt[index].disabled = false;
        this.$refs.editBtn[index].textContent = "確定";
      } else {
        this.$refs.noteIpt[index].disabled = true;
        const goodsNote = this.orderGoods.orderList;
        const res = goodsNote.find((item) => item == data);
        res.orderNote = this.noteArr[index];
        this.$refs.editBtn[index].textContent = "修改";
      }
    },
    goBack() {
      this.$router.push("/orderList");
    },
    goEdit() {
      const isBool = this.isEdit.some((item) => item === false);
      if (isBool) {
        return alert("請檢查資料是否填妥");
      } else {
        const res = this.orderGoods.orderList.some(
          (item) => item.status === false
        );
        if (res) {
          this.orderGoods.orderCurryStatus = false;
          requestData(JSON.stringify(this.orderGoods), "editOrder", "post")
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
        } else {
          this.orderGoods.orderCurryStatus = true;
          requestData(JSON.stringify(this.orderGoods), "editOrder", "post")
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
        }
      }
    },
  },
  computed: {
    lastShip() {
      const timer = this.orderGoods.lastShipment;
      return dayjs(timer).format("YYYY/MM/DD");
    },
  },
};
</script>

<style scoped>
.order_goods_item {
  margin-block: 20px;
  border-bottom: 1px solid #505050;
}
</style>
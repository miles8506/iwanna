<template>
  <div id="Order">
    <div class="wrap">
      <p>新建訂單</p>
      <div>
        <label for="fNum"
          >廠商貨號<input type="text" v-model="factoryNum" id="fNum"
        /></label>
      </div>
      <div>
        <label for="gNum"
          >貨號<input type="text" v-model="goodsNum" id="gNum"
        /></label>
      </div>
      <div>
        <label for="uNum"
          >買家帳號<input type="text" v-model="userId" id="uNum"
        /></label>
      </div>
      <div>
        <label for="gCount"
          >商品總金額<input type="text" v-model="count" id="gCount"
        /></label>
      </div>
      <div>
        <label for="gDate"
          >訂單創建日期<input type="date" v-model="goodsDate" id="gDate"
        /></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      factoryNum: "",
      goodsNum: "",
      userId: "",
      count: "",
      goodsDate: "",
    };
  },
};
</script>

<style scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
}
</style>
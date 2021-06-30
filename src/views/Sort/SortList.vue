<template>
  <div id="sort_list">
    <button @click="goAddSort">新增分類</button>
    <div class="sortlist_hd">
      <span>檔期種類</span>
      <span>刪除</span>
    </div>
    <div class="sortlist_bd">
      <div v-for="(item, index) in sort" :key="`item${index}`">
        <span> {{ item.sort }}</span>
        <button @click="goCheck(item.sort)">刪除</button>
      </div>
    </div>
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
import { requestData } from "network/requestSort.js";
export default {
  data() {
    return {
      sort: "",
      isShow: false,
      isDel: "",
    };
  },
  created() {
    requestData(null, "sortList", "get")
      .then((res) => {
        this.sort = res;
      })
      .catch((err) => {
        console.log(`錯誤${err}`);
      });
  },
  methods: {
    goAddSort() {
      this.$router.push("/sort");
    },
    goDel() {
      requestData(this.isDel, "sortDel", "delete")
        .then((res) => {
          console.log(res);
          this.isShow = !this.isShow;
          this.$router.go(0);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goCheck(sort) {
      this.isShow = !this.isShow;
      this.isDel = sort;
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/alert.css");

#sort_list {
  width: 1200px;
  margin: 0 auto;
}

.sortlist_hd,
.sortlist_bd {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  height: 50px;
  line-height: 50px;
}
.sortlist_hd {
  font-size: 20px;
  font-weight: 700;
  border-bottom: 2px solid #999999;
}
.sortlist_bd {
  flex-wrap: wrap;
}
.sortlist_bd > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 100%;
  border-bottom: 1px solid #999999;
}
button {
  height: 30px;
}
</style>
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
import requestData from "network/requestSort.js";
import AlertWindow from "components/alert/AlertWindow.vue";

export default {
  data() {
    return {
      sort: "",
      isShow: false,
      isDel: "",
    };
  },
  components: {
    AlertWindow,
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
    goDel(isName) {
      requestData(this.isDel, "sortDel", "delete")
        .then((res) => {
          this.isShow = !this.isShow;
          alert(`已成功刪除`);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goCheck(sort) {
      this.isShow = !this.isShow;
      this.isDel = sort;
    },
    editShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
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
<template>
  <div id="app">
    <header>
      <div class="logo" @click="goHome">
        <img src="@/assets/8369a3edb1d09226b092ff8ebc6fa5f9_tn.jpeg" alt="" />
      </div>
    </header>
    <div class="container">
      <div class="side_bar" v-show="showSideBar">
        <div
          v-for="(item, index) in listItem"
          class="goods_list_item"
          :class="{ current_item: currentIndex == index }"
          @click="goRoute(item, index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="content">
        <keep-alive include="OrderList,GoodsList">
          <router-view></router-view>
        </keep-alive>
        <top-icon />
      </div>
    </div>
  </div>
</template>
<script>
import TopIcon from "components/topIcon/TopIcon.vue";
export default {
  data() {
    return {
      currentIndex: 0,
      listItem: ["首頁", "商品列表", "訂單列表", "檔期種類列表"],
    };
  },
  components: {
    TopIcon,
  },

  computed: {
    showSideBar() {
      if (
        this.$route.path == "/home" ||
        this.$route.path == "/goodsList" ||
        this.$route.path == "/orderList" ||
        this.$route.path == "/sortList"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    goHome() {
      this.$router.push("/");
    },
    goRoute(item, index) {
      if (item === "商品列表") {
        this.currentIndex = index;
        this.$router.push("/goodsList");
      } else if (item === "訂單列表") {
        this.currentIndex = index;
        this.$router.push("/orderList");
      } else if (item === "檔期種類列表") {
        this.currentIndex = index;
        this.$router.push("/sortList");
      } else if (item === "首頁") {
        this.currentIndex = index;
        this.$router.push("/home");
      }
    },
  },
};
</script>
<style>
@import url("assets/css/normal.css");
header {
  width: 100%;
  height: 100px;
  background: #b78873;
}

.logo {
  font-size: 30px;
  color: #fff;
  width: 100px;
  height: 100px;
  margin-left: 20px;
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
}

.logo img {
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
}

.content {
  flex: 1;
  height: calc(100vh - 100px);
  padding: 20px 10px;
  background-color: #f9f9f9;
}

.goods_list_item {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 30px;
  line-height: 40px;
  color: #4a4a4a;
  cursor: pointer;
  /* font-weight: 700; */
  border: 1px solid #fff;
  border-radius: 5px;
}

.side_bar {
  width: 180px;
  height: calc(100vh - 100px);
  padding: 15px 10px 15px 15px;
  background: #fff;
}

.current_item {
  border: 1px solid #b78873;
  color: #b78873;
}
</style>

<template>
  <div class="top_icon" @click="topScroll" ref="topIcon"></div>
</template>
<script>
//JS
import { move } from "assets/js/movetop.js";

export default {
  name: "TopIcon",
  mounted() {
    //debounce
    let timer = null;
    window.addEventListener("scroll", () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        let Y = document.documentElement.scrollTop;
        Y > 200
          ? $(this.$refs.topIcon).show(300)
          : $(this.$refs.topIcon).hide(300);
      }, 50);
    });
  },

  methods: {
    topScroll() {
      let obj = document.documentElement;
      move(obj, 0);
    },
  },
};
</script>
<style scoped>
.top_icon {
  display: none;
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: rgba(191, 191, 191);
  text-align: center;
  line-height: 40px;
  font-family: "icomoon";
  font-size: 28px;
  color: #505050;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  z-index: 999;
}

.top_icon:hover {
  background-color: rgba(191, 191, 191, 0.9);
  color: #fff;
}
</style>
<template>
  <div id="order_list">
    <button @click="goOrder">新增訂單</button>
  </div>
</template>

<script>
export default {
  methods: {
    goOrder() {
      this.$router.push("/order");
    },
  },
};
</script>

<style scoped>
</style>
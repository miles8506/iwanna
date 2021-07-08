export default {
  computed: {
    nativeNT() {
      return Math.ceil((parseInt(this.pGoods) + 5) * 4.35);
    },
    minimumPrice() {
      return Math.ceil((parseInt(this.pGoods) + 5) * 4.35 * 2);
    },
    bestPrice() {
      return Math.ceil((parseInt(this.pGoods) + 5) * 4.35 * 2 * 1.15);
    },
  }
}
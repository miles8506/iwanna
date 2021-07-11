import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home/Home.vue');
const Order = () => import('views/Order/Order.vue');
const OrderList = () => import('views/Order/OrderList.vue');
const EditOrder = () => import('views/Order/OrderEdit.vue');
const GoodsList = () => import('views/Goods/GoodsList.vue');
const CreateGoods = () => import('views/Goods/CreateGoods.vue');
const SortList = () => import('views/Sort/SortList.vue');
const Sort = () => import('views/Sort/Sort.vue');
const EditGoods = () => import('views/Goods/EditGoods.vue');
const original = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return original.call(this, location).catch(err => err)
}

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/orderList',
    component: OrderList
  },
  {
    path: '/editOrder/:iid',
    component: EditOrder
  },
  {
    path: '/goodsList',
    component: GoodsList
  },
  {
    path: '/CreateGoods',
    component: CreateGoods
  },
  {
    path: '/sortList',
    component: SortList
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/editGoods',
    component: EditGoods
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-325c6b38"],{"1bab":function(t,r,e){"use strict";(function(t){function o(r=null,e,o){return new Promise((n,s)=>{t.ajax({url:"http://127.0.0.1:5050/"+e,type:o,data:{goodsInfo:r},success(t){n(t)},error(t){s(t)}})})}function n(r,e,o,n){return Promise.all([new Promise((o,n)=>{t.ajax({url:"http://127.0.0.1:5050/"+r,type:e,success(t){o(t)},error(t){n(t)}})}),new Promise((r,e)=>{t.ajax({url:"http://127.0.0.1:5050/"+o,type:n,success(t){r(t)},error(t){e(t)}})})])}e.d(r,"b",(function(){return o})),e.d(r,"a",(function(){return n}))}).call(this,e("1157"))},"251e":function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"order_detail"}},[e("button",{on:{click:t.goOrderList}},[t._v("返回訂單列表")]),e("h2",[t._v("訂單收益總金額:"+t._s(t.total))])])},n=[],s=e("1bab"),a={data(){return{total:0}},created(){Object(s["b"])(null,"orderList","get").then(t=>{t.forEach(t=>{this.total+=t.orderTotal}),this.total=this.total.replace("test","")})},methods:{goOrderList(){this.$router.push("/orderList")}}},u=a,c=e("2877"),i=Object(c["a"])(u,o,n,!1,null,"4a466c99",null);r["default"]=i.exports}}]);
//# sourceMappingURL=chunk-325c6b38.4bd10233.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c28bbbe"],{"1bab":function(t,s,e){"use strict";(function(t){function o(s=null,e,o){return new Promise((a,n)=>{t.ajax({url:"http://127.0.0.1:5050/"+e,type:o,data:{goodsInfo:s},success(t){a(t)},error(t){n(t)}})})}function a(s,e,o,a){return Promise.all([new Promise((o,a)=>{t.ajax({url:"http://127.0.0.1:5050/"+s,type:e,success(t){o(t)},error(t){a(t)}})}),new Promise((s,e)=>{t.ajax({url:"http://127.0.0.1:5050/"+o,type:a,success(t){s(t)},error(t){e(t)}})})])}e.d(s,"b",(function(){return o})),e.d(s,"a",(function(){return a}))}).call(this,e("1157"))},dadd:function(t,s,e){"use strict";(function(t){s["a"]=function(s=null,e,o){return new Promise((a,n)=>{t.ajax({url:"http://127.0.0.1:5050/"+e,type:o,data:{sort:s},success(t){a(t)},error(t){n(t)}})})}}).call(this,e("1157"))},f17d:function(t,s,e){},fa85:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"GoodsList"}},[e("div",{staticClass:"goods_control"},[e("div",{staticClass:"search_select"},[t._v(" 檔期種類選擇："),e("select",{directives:[{name:"model",rawName:"v-model",value:t.sortClass,expression:"sortClass"}],staticClass:"choice_select",on:{change:[function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.sortClass=s.target.multiple?e:e[0]},t.changeSort]}},[e("option",{attrs:{value:""}},[t._v("所有檔期")]),t._l(t.sortList,(function(s){return[e("option",{domProps:{value:s.sort}},[t._v(t._s(s.sort))])]}))],2)]),e("button",{staticClass:"add_goods",on:{click:t.goGoods}},[t._v("新增商品")])]),t._m(0),e("div",{staticClass:"goods_bd"},[t.dataList.length>0?e("div",t._l(t.dataList,(function(s,o){return e("div",{key:"item"+o,staticClass:"goods_item",class:{current_bgc:o===t.currentIndex},on:{mouseenter:function(s){return t.enterItem(o)},mouseleave:t.leaveItem}},[e("span",[t._v(t._s(s.gNum))]),e("span",[t._v(t._s(s.selfNum))]),e("span",[t._v(t._s(s.gName))]),e("span",[t._v(t._s(s.sort))]),e("span",{staticClass:"color_wrap"},[t._l(s.isColor,(function(s,e){return[t._v(" "+t._s(s)+" ")]}))],2),e("span",{staticClass:"size_wrap"},[t._l(s.isSize,(function(s){return[t._v(" "+t._s(s)+" ")]}))],2),e("span",[t._v(t._s(s.pGoods))]),e("span",[t._v(t._s(s.finalPrice))]),e("span",[e("button",{staticClass:"control_btn",on:{click:function(e){return t.goEditGoods(s.gNum)}}},[t._v(" 操作 ")])])])})),0):e("div",[e("h2",{staticStyle:{color:"#4a4a4a",margin:"20px 0 0 40px"}},[t._v("此檔期種類為空")])])])])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods_hd"},[e("div",[t._v("廠商貨號")]),e("div",[t._v("商品貨號")]),e("div",[t._v("品名")]),e("div",[t._v("商品檔期種類")]),e("div",[t._v("顏色")]),e("div",[t._v("尺寸")]),e("div",[t._v("成本")]),e("div",[t._v("售價")]),e("div",[t._v("操作")])])}],n=e("1bab"),i=e("dadd"),r={name:"GoodsList",data(){return{dataList:[],sortList:[],sortClass:"",currentIndex:null}},activated(){window.scrollTo(0,this.$store.state.goodsListHeight),""==this.sortClass?(Object(n["b"])(null,"goodsList","get").then(t=>{this.dataList=t}).catch(t=>{alert(t)}),Object(i["a"])(null,"sortList","get").then(t=>{this.sortList=t}).catch(t=>{console.log("錯誤"+t)})):(Object(n["b"])(this.sortClass,"goodslistSort","get").then(t=>{this.dataList=t}).catch(t=>{console.log("err:"+t)}),Object(i["a"])(null,"sortList","get").then(t=>{this.sortList=t}).catch(t=>{console.log("錯誤"+t)}))},methods:{enterItem(t){this.currentIndex=t},leaveItem(){this.currentIndex="000"},goGoods(){this.$router.push("/CreateGoods")},goEditGoods(t){this.$store.commit("setGoodsListHeight",{height:window.pageYOffset}),this.$router.push({path:"/editGoods",query:{iid:t}})},changeSort(){""==this.sortClass?(Object(n["b"])(null,"goodsList","get").then(t=>{this.dataList=t}),Object(i["a"])(null,"sortList","get").then(t=>{this.sortList=t}).catch(t=>{console.log("錯誤"+t)})):Object(n["b"])(this.sortClass,"goodslistSort","get").then(t=>{this.dataList=t}).catch(t=>{console.log("err:"+t)})}}},c=r,l=(e("faaf"),e("2877")),u=Object(l["a"])(c,o,a,!1,null,"57b48787",null);s["default"]=u.exports},faaf:function(t,s,e){"use strict";e("f17d")}}]);
//# sourceMappingURL=chunk-0c28bbbe.bb5e39f9.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6897d401"],{"0720":function(t,o,r){"use strict";r.r(o);var e=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",[t._v(" 商品檔期種類名稱："),r("input",{directives:[{name:"model",rawName:"v-model",value:t.sort,expression:"sort"}],attrs:{type:"text"},domProps:{value:t.sort},on:{input:function(o){o.target.composing||(t.sort=o.target.value)}}}),r("button",{on:{click:t.goBack}},[t._v("返回")]),r("button",{on:{click:t.addSort}},[t._v("新增")])])},n=[],s=r("dadd"),a={data(){return{sort:""}},methods:{goBack(){this.$router.go(-1)},addSort(){""!=this.sort?Object(s["a"])(this.sort,"sort","put").then(t=>{0==t?(window.alert(`成功添加${this.sort}檔期種類`),this.$router.go(-1)):1==t?(window.alert("新增檔期種類失敗"),this.$router.go(-1)):2==t&&window.alert("檔期種類名稱已重複")}):alert("請輸入商品檔期種類")}}},i=a,u=r("2877"),c=Object(u["a"])(i,e,n,!1,null,"5a411a25",null);o["default"]=c.exports},dadd:function(t,o,r){"use strict";(function(t){o["a"]=function(o=null,r,e){return new Promise((n,s)=>{t.ajax({url:"http://127.0.0.1:5050/"+r,type:e,data:{sort:o},success(t){n(t)},error(t){s(t)}})})}}).call(this,r("1157"))}}]);
//# sourceMappingURL=chunk-6897d401.3cee3ca4.js.map
(function(e){function t(t){for(var o,r,i=t[0],u=t[1],s=t[2],d=0,h=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&h.push(c[r][0]),c[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(h.length)h.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0241a815":"a5caf2ce","chunk-0c28bbbe":"bb5e39f9","chunk-2d0b6184":"23a580d8","chunk-325c6b38":"4bd10233","chunk-5c3ecb33":"0e46d5db","chunk-62265dad":"33f75bbb","chunk-6897d401":"3cee3ca4","chunk-762ccc34":"5fc6048c","chunk-8b634de2":"2063f837","chunk-a1459380":"acae4bdf","chunk-f072bb42":"9f91e886"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0241a815":1,"chunk-0c28bbbe":1,"chunk-5c3ecb33":1,"chunk-62265dad":1,"chunk-762ccc34":1,"chunk-8b634de2":1,"chunk-a1459380":1,"chunk-f072bb42":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-0241a815":"2e2b4542","chunk-0c28bbbe":"7f7a5e2a","chunk-2d0b6184":"31d6cfe0","chunk-325c6b38":"31d6cfe0","chunk-5c3ecb33":"30935bd4","chunk-62265dad":"7959a603","chunk-6897d401":"31d6cfe0","chunk-762ccc34":"3a03c98a","chunk-8b634de2":"715c0c7d","chunk-a1459380":"3ef0a04b","chunk-f072bb42":"71fcb425"}[e]+".css",c=u.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===c))return t()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){s=h[i],d=s.getAttribute("data-href");if(d===o||d===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],l.parentNode.removeChild(l),n(a)},l.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var h=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",h.name="ChunkLoadError",h.type=o,h.request=r,n[1](h)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/iwanna/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var l=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1996:function(e,t,n){"use strict";(function(e){var o=n("46ba");t["a"]={name:"TopIcon",mounted(){let t=null;window.addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{let t=document.documentElement.scrollTop;t>200?e(this.$refs.topIcon).show(300):e(this.$refs.topIcon).hide(300)},50)})},methods:{topScroll(){let e=document.documentElement;Object(o["a"])(e,0)}}}}).call(this,n("1157"))},"46ba":function(e,t,n){"use strict";function o(e,t,n){clearInterval(e.move),e.move=setInterval((function(){var o=(t-window.pageYOffset)/10;o<0?o=Math.floor(o):o>0&&(o=Math.ceil(o)),window.pageYOffset==t&&(clearInterval(e.move),n&&n()),window.scroll(0,window.pageYOffset+o)}),15)}n.d(t,"a",(function(){return o}))},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("header",[o("div",{staticClass:"logo",on:{click:e.goHome}},[o("img",{attrs:{src:n("9c7e"),alt:""}})])]),o("div",{staticClass:"container"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showSideBar,expression:"showSideBar"}],staticClass:"side_bar"},e._l(e.listItem,(function(t,n){return o("div",{staticClass:"goods_list_item",class:{current_item:e.currentIndex==n},on:{click:function(o){return e.goRoute(t,n)}}},[e._v(" "+e._s(t)+" ")])})),0),o("div",{staticClass:"content"},[o("keep-alive",{attrs:{include:"OrderList,GoodsList"}},[o("router-view")],1),o("top-icon")],1)])])},c=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"topIcon",staticClass:"top_icon",on:{click:e.topScroll}},[e._v("")])},i=[],u=n("1996"),s=u["a"],d=(n("6eb0"),n("2877")),h=Object(d["a"])(s,a,i,!1,null,"2da3c99f",null),l=h.exports,p={data(){return{currentIndex:0,listItem:["首頁","商品列表","訂單列表","檔期種類列表"]}},components:{TopIcon:l},computed:{showSideBar(){return"/home"==this.$route.path||"/goodsList"==this.$route.path||"/orderList"==this.$route.path||"/sortList"==this.$route.path}},methods:{goHome(){this.$router.push("/")},goRoute(e,t){"商品列表"===e?(this.currentIndex=t,this.$router.push("/goodsList")):"訂單列表"===e?(this.currentIndex=t,this.$router.push("/orderList")):"檔期種類列表"===e?(this.currentIndex=t,this.$router.push("/sortList")):"首頁"===e&&(this.currentIndex=t,this.$router.push("/home"))}}},f=p,b=(n("034f"),Object(d["a"])(f,r,c,!1,null,null,null)),m=b.exports,g=n("8c4f");const v=()=>n.e("chunk-2d0b6184").then(n.bind(null,"1c62")),k=()=>n.e("chunk-f072bb42").then(n.bind(null,"bcc0")),w=()=>n.e("chunk-762ccc34").then(n.bind(null,"60a5")),y=()=>n.e("chunk-62265dad").then(n.bind(null,"9513")),L=()=>n.e("chunk-5c3ecb33").then(n.bind(null,"2419")),_=()=>n.e("chunk-325c6b38").then(n.bind(null,"251e")),O=()=>n.e("chunk-0c28bbbe").then(n.bind(null,"fa85")),x=()=>n.e("chunk-0241a815").then(n.bind(null,"b9d7")),S=()=>n.e("chunk-8b634de2").then(n.bind(null,"e0e3")),I=()=>n.e("chunk-6897d401").then(n.bind(null,"0720")),$=()=>n.e("chunk-a1459380").then(n.bind(null,"5adc")),j=g["a"].prototype.push;g["a"].prototype.push=function(e){return j.call(this,e).catch(e=>e)},o["a"].use(g["a"]);const C=[{path:"/",redirect:"/home"},{path:"/home",component:v},{path:"/order",component:k},{path:"/orderList",component:w},{path:"/orderplace",component:y},{path:"/editOrder/:iid",component:L},{path:"/orderDetail",component:_},{path:"/goodsList",component:O},{path:"/CreateGoods",component:x},{path:"/sortList",component:S},{path:"/sort",component:I},{path:"/editGoods",component:$}],E=new g["a"]({mode:"hash",base:"/iwanna/",routes:C});var T=E,P=n("2f62");o["a"].use(P["a"]);var H=new P["a"].Store({state:{orderListHeight:0,goodsListHeight:0,paginationNative:1,paginationStatus:!1},mutations:{setOrderListHeight(e,t){e.orderListHeight=t.height},setGoodsListHeight(e,t){e.goodsListHeight=t.height},setPaginationNative(e,t){e.paginationNative=t.page},setPaginationStatus(e,t){e.paginationStatus=t.status}},actions:{},modules:{}}),N=n("1157"),A=n.n(N);o["a"].prototype.$=A.a,o["a"].config.productionTip=!1,o["a"].prototype.$bus=new o["a"],new o["a"]({router:T,store:H,render:function(e){return e(m)}}).$mount("#app")},"6eb0":function(e,t,n){"use strict";n("a897")},"85ec":function(e,t,n){},"9c7e":function(e,t,n){e.exports=n.p+"img/8369a3edb1d09226b092ff8ebc6fa5f9_tn.9616c1a5.jpeg"},"9cc5":function(e,t){e.exports=cptable},a897:function(e,t,n){}});
//# sourceMappingURL=app.ef65f1a2.js.map
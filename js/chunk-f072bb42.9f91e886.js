(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f072bb42"],{"05e1":function(t,e,r){"use strict";r("f1bb")},"1bab":function(t,e,r){"use strict";(function(t){function s(e=null,r,s){return new Promise((o,i)=>{t.ajax({url:"http://127.0.0.1:5050/"+r,type:s,data:{goodsInfo:e},success(t){o(t)},error(t){i(t)}})})}function o(e,r,s,o){return Promise.all([new Promise((s,o)=>{t.ajax({url:"http://127.0.0.1:5050/"+e,type:r,success(t){s(t)},error(t){o(t)}})}),new Promise((e,r)=>{t.ajax({url:"http://127.0.0.1:5050/"+s,type:o,success(t){e(t)},error(t){r(t)}})})])}r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return o}))}).call(this,r("1157"))},"2fe6":function(t,e,r){"use strict";r("8d64")},"5a0c":function(t,e,r){!function(e,r){t.exports=r()}(0,(function(){"use strict";var t=1e3,e=6e4,r=36e5,s="millisecond",o="second",i="minute",n="hour",a="day",u="week",d="month",c="quarter",l="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},_=function(t,e,r){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(r)+t},g={s:_,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),s=Math.floor(r/60),o=r%60;return(e<=0?"+":"-")+_(s,2,"0")+":"+_(o,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var s=12*(r.year()-e.year())+(r.month()-e.month()),o=e.clone().add(s,d),i=r-o<0,n=e.clone().add(s+(i?-1:1),d);return+(-(s+(r-o)/(i?o-n:n-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:d,y:l,w:u,d:a,D:h,h:n,m:i,s:o,ms:s,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},S="en",$={};$[S]=m;var b=function(t){return t instanceof N},y=function(t,e,r){var s;if(!t)return S;if("string"==typeof t)$[t]&&(s=t),e&&($[t]=e,s=t);else{var o=t.name;$[o]=t,s=o}return!r&&s&&(S=s),s||!r&&S},C=function(t,e){if(b(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new N(r)},w=g;w.l=y,w.i=b,w.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var N=function(){function m(t){this.$L=y(t.locale,null,!0),this.parse(t)}var _=m.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(p);if(s){var o=s[2]-1||0,i=(s[7]||"0").substring(0,3);return r?new Date(Date.UTC(s[1],o,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],o,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return w},_.isValid=function(){return!(this.$d.toString()===f)},_.isSame=function(t,e){var r=C(t);return this.startOf(e)<=r&&r<=this.endOf(e)},_.isAfter=function(t,e){return C(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<C(t)},_.$g=function(t,e,r){return w.u(t)?this[e]:this.set(r,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var r=this,s=!!w.u(e)||e,c=w.p(t),f=function(t,e){var o=w.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return s?o:o.endOf(a)},p=function(t,e){return w.w(r.toDate()[t].apply(r.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},v=this.$W,m=this.$M,_=this.$D,g="set"+(this.$u?"UTC":"");switch(c){case l:return s?f(1,0):f(31,11);case d:return s?f(1,m):f(0,m+1);case u:var S=this.$locale().weekStart||0,$=(v<S?v+7:v)-S;return f(s?_-$:_+(6-$),m);case a:case h:return p(g+"Hours",0);case n:return p(g+"Minutes",1);case i:return p(g+"Seconds",2);case o:return p(g+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var r,u=w.p(t),c="set"+(this.$u?"UTC":""),f=(r={},r[a]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[l]=c+"FullYear",r[n]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[s]=c+"Milliseconds",r)[u],p=u===a?this.$D+(e-this.$W):e;if(u===d||u===l){var v=this.clone().set(h,1);v.$d[f](p),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[w.p(t)]()},_.add=function(s,c){var h,f=this;s=Number(s);var p=w.p(c),v=function(t){var e=C(f);return w.w(e.date(e.date()+Math.round(t*s)),f)};if(p===d)return this.set(d,this.$M+s);if(p===l)return this.set(l,this.$y+s);if(p===a)return v(1);if(p===u)return v(7);var m=(h={},h[i]=e,h[n]=r,h[o]=t,h)[p]||1,_=this.$d.getTime()+s*m;return w.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",o=w.z(this),i=this.$H,n=this.$m,a=this.$M,u=r.weekdays,d=r.months,c=function(t,r,o,i){return t&&(t[r]||t(e,s))||o[r].substr(0,i)},l=function(t){return w.s(i%12||12,t,"0")},h=r.meridiem||function(t,e,r){var s=t<12?"AM":"PM";return r?s.toLowerCase():s},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:c(r.monthsShort,a,d,3),MMMM:c(d,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,u,2),ddd:c(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:w.s(i,2,"0"),h:l(1),hh:l(2),a:h(i,n,!0),A:h(i,n,!1),m:String(n),mm:w.s(n,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:o};return s.replace(v,(function(t,e){return e||p[t]||o.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(s,h,f){var p,v=w.p(h),m=C(s),_=(m.utcOffset()-this.utcOffset())*e,g=this-m,S=w.m(this,m);return S=(p={},p[l]=S/12,p[d]=S,p[c]=S/3,p[u]=(g-_)/6048e5,p[a]=(g-_)/864e5,p[n]=g/r,p[i]=g/e,p[o]=g/t,p)[v]||g,f?S:w.a(S)},_.daysInMonth=function(){return this.endOf(d).$D},_.$locale=function(){return $[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),s=y(t,e,!0);return s&&(r.$L=s),r},_.clone=function(){return w.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},m}(),O=N.prototype;return C.prototype=O,[["$ms",s],["$s",o],["$m",i],["$H",n],["$W",a],["$M",d],["$y",l],["$D",h]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,N,C),t.$i=!0),C},C.locale=y,C.isDayjs=b,C.unix=function(t){return C(1e3*t)},C.en=$[S],C.Ls=$,C.p={},C}))},"8d64":function(t,e,r){},bcc0:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"Order"}},[r("div",{staticClass:"order_hd"},[r("p",{staticClass:"create_order"},[t._v("新建訂單")]),r("div",{staticClass:"content_wrap"},[r("div",[r("label",{attrs:{for:""}},[t._v("訂單編號")]),t._v(t._s(t.orderNum))]),r("div",[r("label",{attrs:{for:"shopee_account_ipt"}},[t._v("蝦皮訂單編號")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.shopeeAccount,expression:"shopeeAccount",modifiers:{trim:!0}}],ref:"shopeeIpt",staticClass:"textipt",attrs:{type:"text",id:"shopee_account_ipt"},domProps:{value:t.shopeeAccount},on:{input:function(e){e.target.composing||(t.shopeeAccount=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.isShopeeShow?r("button",{staticClass:"confirm_btn",on:{click:t.shopeeCheck}},[t._v(" 確定 ")]):t._e()]),t.buyerIsShow?[r("div",[r("label",{attrs:{for:"buyer_account_ipt"}},[t._v("買家帳號")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.buyerAccount,expression:"buyerAccount",modifiers:{trim:!0}}],staticClass:"textipt",attrs:{type:"text",id:"buyer_account_ipt"},domProps:{value:t.buyerAccount},on:{input:function(e){e.target.composing||(t.buyerAccount=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),r("button",{staticClass:"confirm_btn",on:{click:t.checkBuyerAccount}},[t._v("確定")])])]:[r("div",[r("label",[t._v("買家帳號")]),r("input",{staticClass:"textipt",attrs:{type:"text",disabled:""},domProps:{value:t.buyerAccount}})])],r("div",[r("label",[t._v("檔期")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.sortBind,expression:"sortBind"}],staticClass:"select_ipt",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.sortBind=e.target.multiple?r:r[0]},t.sortChange]}},[r("option",{attrs:{value:""}},[t._v("請選擇")]),r("option",{attrs:{value:"all"}},[t._v("所有檔期")]),t._l(t.sortList,(function(e){return[r("option",{key:e.sort,domProps:{value:e.sort}},[t._v(t._s(e.sort))])]}))],2)]),r("div",[r("label",{attrs:{for:"goods_num_ipt"}},[t._v("商品貨號")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.goodsNum,expression:"goodsNum"}],staticClass:"textipt",attrs:{type:"text",id:"goods_num_ipt"},domProps:{value:t.goodsNum},on:{input:function(e){e.target.composing||(t.goodsNum=e.target.value)}}}),r("button",{staticClass:"confirm_btn",on:{click:t.searchGoods}},[t._v("確定")])]),r("div",[r("label",[t._v("商品名稱")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.goodsListBind,expression:"goodsListBind"}],staticClass:"select_ipt",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.goodsListBind=e.target.multiple?r:r[0]},t.goodsListChange]}},[r("option",{attrs:{value:""}},[t._v("請選擇")]),t._l(t.resGoodsList,(function(e){return[r("option",{key:e.gNum,domProps:{value:e.gNum}},[t._v(t._s(e.gName))])]}))],2)]),r("div",[r("label",{attrs:{for:""}},[t._v("顏色")]),t._l(t.resGoods.isColor,(function(e){return r("span",{key:e},[r("label",{attrs:{for:e}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.orderColor,expression:"orderColor"}],attrs:{type:"radio",id:e},domProps:{value:e,checked:t._q(t.orderColor,e)},on:{change:function(r){t.orderColor=e}}}),t._v(t._s(e)+"   ")])])}))],2),r("div",[r("label",{attrs:{for:""}},[t._v("尺寸")]),t._l(t.resGoods.isSize,(function(e){return r("span",{key:e},[r("label",{attrs:{for:e}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.orderSize,expression:"orderSize"}],attrs:{type:"radio",id:e},domProps:{value:e,checked:t._q(t.orderSize,e)},on:{change:function(r){t.orderSize=e}}}),t._v(t._s(e)+"   ")])])}))],2),r("div",[r("label",{attrs:{for:"order_count_ipt"}},[t._v("數量")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.orderCount,expression:"orderCount",modifiers:{number:!0}}],staticClass:"textipt",attrs:{type:"text",id:"order_count_ipt"},domProps:{value:t.orderCount},on:{input:function(e){e.target.composing||(t.orderCount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),r("div",[t.lastShipIsShow?[r("label",{attrs:{for:"last_shipment_ipt"}},[t._v("最晚出貨日")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.lastShipment,expression:"lastShipment"}],staticClass:"textipt",attrs:{type:"date",id:"last_shipment_ipt"},domProps:{value:t.lastShipment},on:{input:function(e){e.target.composing||(t.lastShipment=e.target.value)}}}),r("button",{staticClass:"confirm_btn",on:{click:t.lastShipCheck}},[t._v("確定")])]:[r("label",{attrs:{for:""}},[t._v("最晚出貨日")]),r("input",{staticClass:"select_ipt",attrs:{type:"date",disabled:""},domProps:{value:t.lastShipment}})]],2),r("div",[r("div",{staticStyle:{"margin-bottom":"10px"}},[t._v("備註")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.orderNote,expression:"orderNote"}],staticClass:"order_note_text",attrs:{cols:"30",rows:"10"},domProps:{value:t.orderNote},on:{input:function(e){e.target.composing||(t.orderNote=e.target.value)}}})]),r("button",{staticClass:"join_order",on:{click:t.addToOrder}},[t._v("加入訂單")])],2)]),r("div",{staticClass:"order_bd"},[t._m(0),t.saveOrder.orderList.length>0?r("div",{staticClass:"list_content"},t._l(t.saveOrder.orderList,(function(e,s){return r("div",{key:"item"+s,staticClass:"order_list",class:{current_bgc:s===t.currentIndex},on:{mouseenter:function(e){return t.enterItem(s)},mouseleave:t.leaveItem}},[r("div",[r("span",[t._v(t._s(e.orderName))])]),r("div",[r("span",[t._v(t._s(e.orderColor))])]),r("div",[r("span",[t._v(t._s(e.orderSize))])]),r("div",[r("span",[t._v(t._s(e.orderCount))])]),r("div",[r("span",[t._v(t._s(e.orderNote))])]),r("div",[r("span",[t._v(t._s(e.finalPrice))])]),r("div",[r("button",{staticClass:"remove_orderlist_btn",on:{click:function(r){return t.orderItemRemove(e)}}},[t._v(" 移除 ")])])])})),0):r("div",{staticClass:"list_content"},[r("p",{staticClass:"noneList",staticStyle:{"margin-top":"10px"}},[t._v(" 尚未有商品加入此筆訂單中 ")])])]),r("h2",{staticClass:"computedCountPrice"},[t._v("訂單總金額："+t._s(t.countPrice))]),r("button",{staticClass:"commit_order_btn",on:{click:t.submitOrder}},[t._v("提交訂單")]),r("alert-window",{scopedSlots:t._u([{key:"alertContent",fn:function(){return[r("p",[t._v("是否確定？確定後就不能再更改")])]},proxy:!0},{key:"allowBtn",fn:function(){return[r("span",{on:{click:t.nativePriceCheck}},[t._v("是")])]},proxy:!0}])})],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("span",[t._v("商品名稱")]),r("span",[t._v("商品顏色")]),r("span",[t._v("商品尺寸")]),r("span",[t._v("商品數量")]),r("span",[t._v("備註")]),r("span",[t._v("商品金額")]),r("span",[t._v("操作")])])}],i=r("1bab"),n=r("c814"),a=r("5a0c"),u=r.n(a),d={data(){return{currentIndex:null,sortList:[],goodsList:[],resGoodsList:[],resGoods:{},sortBind:"",goodsListBind:"",goodsNum:"",orderNum:"",shopeeAccount:"",isShopeeShow:!0,orderName:"",orderColor:"",orderSize:"",orderCount:0,orderNote:"",saveOrder:{orderList:[]},buyerAccount:"",buyerIsShow:!0,lastShipment:"",lastShipIsShow:!0}},components:{AlertWindow:n["a"]},created(){this.orderNum=Date.now(),Object(i["a"])("sortList","get","goodsList","get").then(t=>{this.sortList=t[0],this.goodsList=t[1]}).catch(t=>{console.log("err"+t)})},methods:{sortChange(){this.goodsListBind="",this.resGoods.isColor&&(this.resGoods.isColor=""),this.resGoods.isSize&&(this.resGoods.isSize=""),this.orderCount=0,this.orderNote="";const t=this.sortBind;if(""==t)return;if("all"==t)return void(this.resGoodsList=this.goodsList);const e=this.goodsList.filter(e=>e.sort==t);this.resGoodsList=e},goodsListChange(){const t=this.goodsListBind;if(""==t)return;const e=this.resGoodsList.find(e=>e.gNum==t);this.orderName=e.gName,this.resGoods=e},addToOrder(){if(!(""!=this.orderName&&""!=this.orderColor&&""!=this.orderSize&&""!=this.orderCount&&this.orderCount>0&&""!==this.sortBind&&""!==this.goodsListBind&&!1===this.buyerIsShow&&!1===this.lastShipIsShow&&!1===this.isShopeeShow))return alert("請確認商品資料完備或商品數量為1以上");{const t=this.goodsList.find(t=>t.gNum==this.resGoods.gNum),e={};e.orderName=this.orderName,e.orderColor=this.orderColor,e.orderSize=this.orderSize,e.orderCount=this.orderCount,e.orderNote=this.orderNote,e.orderSelfNum=this.resGoods.selfNum,e.ordergNum=this.resGoods.gNum,e.status=!1,e.finalPrice=t.finalPrice*this.orderCount,e.pGoods=t.pGoods,this.saveOrder.orderList.push(e),this.sortBind="",this.resGoodsList=[],this.goodsListBind="",this.resGoods="",this.orderColor="",this.orderSize="",this.orderCount=0,this.orderNote="",this.goodsNum="",alert("商品已成功加入訂單")}},orderItemRemove(t){const e=this.saveOrder.orderList.findIndex(e=>e.orderColor==t.orderColor&&e.orderCount==t.orderCount&&e.orderName==t.orderName&&e.orderSize==t.orderSize);this.saveOrder.orderList.splice(e,1)},searchGoods(){const t=this.goodsNum,e=this.goodsList.find(e=>e.selfNum==t);if(!e)return alert("商品貨號錯誤，請再次確認");this.sortBind=e.sort,this.sortChange(),this.goodsListBind=e.gNum,this.goodsListChange()},checkBuyerAccount(){if(""==this.buyerAccount)return alert("請確認買家帳號資訊是否填妥");this.buyerIsShow=!this.buyerIsShow,this.saveOrder.buyerAccount=this.buyerAccount},lastShipCheck(){if(""==this.lastShipment)return alert("請確認最晚出貨日期是否填妥");const t=u()(this.lastShipment).valueOf();this.lastShipIsShow=!this.lastShipIsShow,this.saveOrder.lastShipment=t},submitOrder(){if(this.saveOrder.orderList.length<1)return alert("請添加商品訂單後再提交訂單");this.saveOrder.orderNum=this.orderNum,this.saveOrder.orderTotal=this.countPrice,this.saveOrder.orderCurryStatus=!1,this.saveOrder.placeOrder=!1;const t=JSON.stringify(this.saveOrder);Object(i["b"])(t,"addOrder","post").then(t=>{0==t&&alert("訂單添加成功"),this.$router.push("/orderList")}).catch(t=>{console.log("err"+t)})},shopeeCheck(){if(""==this.shopeeAccount)return alert("請確認蝦皮訂單編號是否填妥");this.isShopeeShow=!this.isShopeeShow,this.$refs.shopeeIpt.disabled=!0,this.saveOrder.shopeeAccount=this.shopeeAccount},enterItem(t){this.currentIndex=t},leaveItem(){this.currentIndex="000"}},computed:{countPrice(){let t=0;return 0==this.saveOrder.orderList.length||this.saveOrder.orderList.forEach(e=>{t+=e.finalPrice}),t}}},c=d,l=(r("2fe6"),r("2877")),h=Object(l["a"])(c,s,o,!1,null,"13a5879c",null);e["default"]=h.exports},c814:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isShow?r("div",{staticClass:"bgc"},[r("div",{staticClass:"alert_wrap"},[r("div",{staticClass:"content"},[t._t("alertContent"),r("div",{staticClass:"control"},[r("span",{on:{click:t.returnShow}},[t._v("否")]),t._t("allowBtn")],2)],2)])]):t._e()])},o=[],i={props:{isShow:{type:Boolean,default:!1}},methods:{returnShow(){this.$emit("editShow")}}},n=i,a=(r("05e1"),r("2877")),u=Object(a["a"])(n,s,o,!1,null,"5dbc4292",null);e["a"]=u.exports},f1bb:function(t,e,r){}}]);
//# sourceMappingURL=chunk-f072bb42.9f91e886.js.map
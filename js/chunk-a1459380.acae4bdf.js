(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1459380"],{"05e1":function(e,o,i){"use strict";i("f1bb")},"18fd":function(e,o,i){"use strict";o["a"]={computed:{nativeNT(){return Math.ceil(4.35*(parseInt(this.pGoods)+5))},minimumPrice(){return Math.ceil(4.35*(parseInt(this.pGoods)+5)*2)},bestPrice(){return Math.ceil(4.35*(parseInt(this.pGoods)+5)*2*1.15)}}}},"1bab":function(e,o,i){"use strict";(function(e){function r(o=null,i,r){return new Promise((s,a)=>{e.ajax({url:"http://127.0.0.1:5050/"+i,type:r,data:{goodsInfo:o},success(e){s(e)},error(e){a(e)}})})}function s(o,i,r,s){return Promise.all([new Promise((r,s)=>{e.ajax({url:"http://127.0.0.1:5050/"+o,type:i,success(e){r(e)},error(e){s(e)}})}),new Promise((o,i)=>{e.ajax({url:"http://127.0.0.1:5050/"+r,type:s,success(e){o(e)},error(e){i(e)}})})])}i.d(o,"b",(function(){return r})),i.d(o,"a",(function(){return s}))}).call(this,i("1157"))},"5adc":function(e,o,i){"use strict";i.r(o);var r=function(){var e=this,o=e.$createElement,i=e._self._c||o;return i("div",{attrs:{id:"edit_goods"}},[i("div",{staticClass:"goodsNum"},[e._v("廠商貨號: "+e._s(e.goodsData.gNum))]),i("div",{staticClass:"goodsNum"},[e._v("商品貨號: "+e._s(e.goodsData.selfNum))]),i("div",{staticClass:"goodsName"},[e._v("商品名稱: "+e._s(e.goodsData.gName))]),i("div",{staticClass:"price"},[e._v(" 成本價(人民幣): "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.pGoods,expression:"pGoods"}],ref:"nativePriceIpt",staticClass:"money_ipt",attrs:{type:"text",disabled:""},domProps:{value:e.pGoods},on:{input:function(o){o.target.composing||(e.pGoods=o.target.value)}}}),i("button",{ref:"nativePriceBtn",staticClass:"eidt_btn",on:{click:e.pGoodsCheck}},[e._v(" 修改 ")])]),i("div",[e._v("成本價(台幣): "+e._s(e.nativeNT))]),i("div",[e._v("最低售價: "+e._s(e.minimumPrice))]),i("div",[e._v("建議售價: "+e._s(e.bestPrice))]),i("div",{staticClass:"final_price"},[e._v(" 最後定價: "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.finalPrice,expression:"finalPrice",modifiers:{number:!0}}],ref:"finalPriceIpt",staticClass:"money_ipt",attrs:{type:"text",disabled:""},domProps:{value:e.finalPrice},on:{input:function(o){o.target.composing||(e.finalPrice=e._n(o.target.value))},blur:function(o){return e.$forceUpdate()}}}),i("button",{ref:"editBtn",staticClass:"eidt_btn",on:{click:e.editFinalPrice}},[e._v(" 修改 ")])]),i("div",[e._v("檔期種類名稱: "+e._s(e.goodsData.sort))]),i("div",{staticClass:"goodsColor"},[e._v(" 顏色: "),i("label",{attrs:{for:"F"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",checked:"",id:"F",value:"F"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"F")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="F",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("F")]),i("label",{attrs:{for:"black"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",checked:"",id:"black",value:"黑色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"黑色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="黑色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("黑色")]),i("label",{attrs:{for:"white"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"white",value:"白色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"白色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="白色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("白色")]),i("label",{attrs:{for:"gray"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"gray",value:"灰色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"灰色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="灰色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("灰色")]),i("label",{attrs:{for:"deepgray"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"deepgray",value:"炭灰"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"炭灰")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="炭灰",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("炭灰")]),i("label",{attrs:{for:"apricot"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"apricot",value:"杏色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"杏色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="杏色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("杏色")]),i("label",{attrs:{for:"butter"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"butter",value:"奶油色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"奶油色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="奶油色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("奶油色")]),i("label",{attrs:{for:"blue"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"blue",value:"藍色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"藍色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="藍色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("藍色")]),i("label",{attrs:{for:"green"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"green",value:"綠色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"綠色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="綠色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("綠色")]),i("label",{attrs:{for:"shallowgreen"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"shallowgreen",value:"淺綠色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"淺綠色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="淺綠色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("淺綠色")]),i("label",{attrs:{for:"deepgreen"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"deepgreen",value:"軍綠色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"軍綠色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="軍綠色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("軍綠色")]),i("label",{attrs:{for:"yellow"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"yellow",value:"黃色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"黃色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="黃色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("黃色")]),i("label",{attrs:{for:"deepyellow"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"deepyellow",value:"薑黃色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"薑黃色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="薑黃色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("薑黃色")]),i("label",{attrs:{for:"shallowyellow"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"shallowyellow",value:"寶寶黃"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"寶寶黃")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="寶寶黃",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("寶寶黃")]),i("label",{attrs:{for:"red"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"red",value:"紅色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"紅色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="紅色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("紅色")]),i("label",{attrs:{for:"pink"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"pink",value:"粉色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"粉色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="粉色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("粉色")]),i("label",{attrs:{for:"purple"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"purple",value:"紫色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"紫色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="紫色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("紫色")]),i("label",{attrs:{for:"linen"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"linen",value:"亞麻色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"亞麻色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="亞麻色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("亞麻色")]),i("label",{attrs:{for:"khaki"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"khaki",value:"卡其色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"卡其色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="卡其色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("卡其色")]),i("label",{attrs:{for:"ga"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"ga",value:"咖色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"咖色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="咖色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("咖色")]),i("label",{attrs:{for:"ca"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"ca",value:"卡色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"卡色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="卡色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("卡色")]),i("label",{attrs:{for:"chioton"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"chioton",value:"焦糖"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"焦糖")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="焦糖",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("焦糖")]),i("label",{attrs:{for:"eanmin"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"eanmin",value:"燕麥"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"燕麥")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="燕麥",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("燕麥")]),i("label",{attrs:{for:"naichio"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"naichio",value:"奶茶"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"奶茶")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="奶茶",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("奶茶")]),i("label",{attrs:{for:"meser"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"meser",value:"米色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"米色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="米色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("米色")]),i("label",{attrs:{for:"naiser"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"naiser",value:"奶色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"奶色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="奶色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("奶色")]),i("label",{attrs:{for:"shonser"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"shonser",value:"棕色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"棕色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="棕色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("棕色")]),i("label",{attrs:{for:"salu"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"salu",value:"沙綠"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"沙綠")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="沙綠",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("沙綠")]),i("label",{attrs:{for:"jonchin"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"jonchin",value:"藏青"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"藏青")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="藏青",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("藏青")]),i("label",{attrs:{for:"dolu"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"dolu",value:"豆綠"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"豆綠")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="豆綠",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("豆綠")]),i("label",{attrs:{for:"tiowon"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"tiowon",value:"條紋"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"條紋")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="條紋",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("條紋")]),i("label",{attrs:{for:"naihuan"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"naihuan",value:"奶黃"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"奶黃")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="奶黃",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("奶黃")]),i("label",{attrs:{for:"shangreen"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"shangreen",value:"鹹菜綠"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"鹹菜綠")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="鹹菜綠",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("鹹菜綠")]),i("label",{attrs:{for:"chaiolu"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"chaiolu",value:"草綠"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"草綠")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="草綠",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("草綠")]),i("label",{attrs:{for:"oufan"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"oufan",value:"藕粉"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"藕粉")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="藕粉",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("藕粉")]),i("label",{attrs:{for:"deepblue"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"deepblue",value:"深藍"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"深藍")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="深藍",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("深藍")]),i("label",{attrs:{for:"naisee"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"naisee",value:"奶昔"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"奶昔")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="奶昔",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("奶昔")]),i("label",{attrs:{for:"mebai"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"mebai",value:"米白"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"米白")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="米白",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("米白")]),i("label",{attrs:{for:"tuaoser"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"tuaoser",value:"駝色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"駝色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="駝色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("駝色")]),i("label",{attrs:{for:"buaoheser"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"buaoheser",value:"薄荷色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"薄荷色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="薄荷色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("薄荷色")]),i("label",{attrs:{for:"hualuser"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"hualuser",value:"灰綠色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"灰綠色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="灰綠色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("灰綠色")]),i("label",{attrs:{for:"simazi"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"simazi",value:"西梅子"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"西梅子")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="西梅子",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("西梅子")]),i("label",{attrs:{for:"curcurser"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"curcurser",value:"可可色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"可可色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="可可色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("可可色")]),i("label",{attrs:{for:"pingoalu"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"pingoalu",value:"蘋果綠"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"蘋果綠")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="蘋果綠",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("蘋果綠")]),i("label",{attrs:{for:"doalu"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"doalu",value:"稻綠"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"稻綠")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="稻綠",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("稻綠")]),i("label",{attrs:{for:"hualu"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"hualu",value:"灰綠"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"灰綠")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="灰綠",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("灰綠")]),i("label",{attrs:{for:"mihua"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"mihua",value:"麥灰"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"麥灰")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="麥灰",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("麥灰")]),i("label",{attrs:{for:"fuser"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"fuser",value:"膚色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"膚色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="膚色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("膚色")]),i("label",{attrs:{for:"nanguaser"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"nanguaser",value:"南瓜色"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"南瓜色")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="南瓜色",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("南瓜色")]),i("label",{attrs:{for:"naibye"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"naibye",value:"奶白"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"奶白")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="奶白",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("奶白")]),i("label",{attrs:{for:"hamegua"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"hamegua",value:"哈密瓜"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"哈密瓜")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="哈密瓜",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("哈密瓜")]),i("label",{attrs:{for:"mahung"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"mahung",value:"玫紅"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"玫紅")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="玫紅",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("玫紅")]),i("label",{attrs:{for:"calu"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"calu",value:"卡綠"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"卡綠")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="卡綠",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("卡綠")]),i("label",{attrs:{for:"ju"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"ju",value:"橘"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"橘")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="橘",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("橘")]),i("label",{attrs:{for:"fanju"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"fanju",value:"粉橘"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"粉橘")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="粉橘",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("粉橘")]),i("label",{attrs:{for:"moca"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isColor,expression:"isColor"}],attrs:{type:"checkbox",id:"moca",value:"摩卡"},domProps:{checked:Array.isArray(e.isColor)?e._i(e.isColor,"摩卡")>-1:e.isColor},on:{change:function(o){var i=e.isColor,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="摩卡",c=e._i(i,a);r.checked?c<0&&(e.isColor=i.concat([a])):c>-1&&(e.isColor=i.slice(0,c).concat(i.slice(c+1)))}else e.isColor=s}}}),e._v("摩卡")])]),i("div",{staticClass:"size"},[e._v(" 尺寸: "),i("label",{attrs:{for:"free"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isSize,expression:"isSize"}],attrs:{type:"checkbox",id:"free",value:"Free"},domProps:{checked:Array.isArray(e.isSize)?e._i(e.isSize,"Free")>-1:e.isSize},on:{change:function(o){var i=e.isSize,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="Free",c=e._i(i,a);r.checked?c<0&&(e.isSize=i.concat([a])):c>-1&&(e.isSize=i.slice(0,c).concat(i.slice(c+1)))}else e.isSize=s}}}),e._v("Free Size")]),i("label",{attrs:{for:"s"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isSize,expression:"isSize"}],attrs:{type:"checkbox",value:"S",id:"s"},domProps:{checked:Array.isArray(e.isSize)?e._i(e.isSize,"S")>-1:e.isSize},on:{change:function(o){var i=e.isSize,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="S",c=e._i(i,a);r.checked?c<0&&(e.isSize=i.concat([a])):c>-1&&(e.isSize=i.slice(0,c).concat(i.slice(c+1)))}else e.isSize=s}}}),e._v("S")]),i("label",{attrs:{for:"m"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isSize,expression:"isSize"}],attrs:{type:"checkbox",value:"M",id:"m"},domProps:{checked:Array.isArray(e.isSize)?e._i(e.isSize,"M")>-1:e.isSize},on:{change:function(o){var i=e.isSize,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="M",c=e._i(i,a);r.checked?c<0&&(e.isSize=i.concat([a])):c>-1&&(e.isSize=i.slice(0,c).concat(i.slice(c+1)))}else e.isSize=s}}}),e._v("M")]),i("label",{attrs:{for:"l"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isSize,expression:"isSize"}],attrs:{type:"checkbox",value:"L",id:"l"},domProps:{checked:Array.isArray(e.isSize)?e._i(e.isSize,"L")>-1:e.isSize},on:{change:function(o){var i=e.isSize,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="L",c=e._i(i,a);r.checked?c<0&&(e.isSize=i.concat([a])):c>-1&&(e.isSize=i.slice(0,c).concat(i.slice(c+1)))}else e.isSize=s}}}),e._v("L")]),i("label",{attrs:{for:"xl"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isSize,expression:"isSize"}],attrs:{type:"checkbox",value:"XL",id:"xl"},domProps:{checked:Array.isArray(e.isSize)?e._i(e.isSize,"XL")>-1:e.isSize},on:{change:function(o){var i=e.isSize,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="XL",c=e._i(i,a);r.checked?c<0&&(e.isSize=i.concat([a])):c>-1&&(e.isSize=i.slice(0,c).concat(i.slice(c+1)))}else e.isSize=s}}}),e._v("XL")]),i("label",{attrs:{for:"xll"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isSize,expression:"isSize"}],attrs:{type:"checkbox",value:"XLL",id:"xll"},domProps:{checked:Array.isArray(e.isSize)?e._i(e.isSize,"XLL")>-1:e.isSize},on:{change:function(o){var i=e.isSize,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="XLL",c=e._i(i,a);r.checked?c<0&&(e.isSize=i.concat([a])):c>-1&&(e.isSize=i.slice(0,c).concat(i.slice(c+1)))}else e.isSize=s}}}),e._v("XLL")]),i("label",{attrs:{for:"thirtyfive"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isSize,expression:"isSize"}],attrs:{type:"checkbox",value:"35",id:"thirtyfive"},domProps:{checked:Array.isArray(e.isSize)?e._i(e.isSize,"35")>-1:e.isSize},on:{change:function(o){var i=e.isSize,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="35",c=e._i(i,a);r.checked?c<0&&(e.isSize=i.concat([a])):c>-1&&(e.isSize=i.slice(0,c).concat(i.slice(c+1)))}else e.isSize=s}}}),e._v("35")]),i("label",{attrs:{for:"thirtysix"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isSize,expression:"isSize"}],attrs:{type:"checkbox",value:"36",id:"thirtysix"},domProps:{checked:Array.isArray(e.isSize)?e._i(e.isSize,"36")>-1:e.isSize},on:{change:function(o){var i=e.isSize,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="36",c=e._i(i,a);r.checked?c<0&&(e.isSize=i.concat([a])):c>-1&&(e.isSize=i.slice(0,c).concat(i.slice(c+1)))}else e.isSize=s}}}),e._v("36")]),i("label",{attrs:{for:"thirtyseven"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isSize,expression:"isSize"}],attrs:{type:"checkbox",value:"37",id:"thirtyseven"},domProps:{checked:Array.isArray(e.isSize)?e._i(e.isSize,"37")>-1:e.isSize},on:{change:function(o){var i=e.isSize,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="37",c=e._i(i,a);r.checked?c<0&&(e.isSize=i.concat([a])):c>-1&&(e.isSize=i.slice(0,c).concat(i.slice(c+1)))}else e.isSize=s}}}),e._v("37")]),i("label",{attrs:{for:"thirtyeight"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isSize,expression:"isSize"}],attrs:{type:"checkbox",value:"38",id:"thirtyeight"},domProps:{checked:Array.isArray(e.isSize)?e._i(e.isSize,"38")>-1:e.isSize},on:{change:function(o){var i=e.isSize,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="38",c=e._i(i,a);r.checked?c<0&&(e.isSize=i.concat([a])):c>-1&&(e.isSize=i.slice(0,c).concat(i.slice(c+1)))}else e.isSize=s}}}),e._v("38")]),i("label",{attrs:{for:"thirtynine"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isSize,expression:"isSize"}],attrs:{type:"checkbox",value:"39",id:"thirtynine"},domProps:{checked:Array.isArray(e.isSize)?e._i(e.isSize,"39")>-1:e.isSize},on:{change:function(o){var i=e.isSize,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="39",c=e._i(i,a);r.checked?c<0&&(e.isSize=i.concat([a])):c>-1&&(e.isSize=i.slice(0,c).concat(i.slice(c+1)))}else e.isSize=s}}}),e._v("39")]),i("label",{attrs:{for:"forty"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isSize,expression:"isSize"}],attrs:{type:"checkbox",value:"40",id:"forty"},domProps:{checked:Array.isArray(e.isSize)?e._i(e.isSize,"40")>-1:e.isSize},on:{change:function(o){var i=e.isSize,r=o.target,s=!!r.checked;if(Array.isArray(i)){var a="40",c=e._i(i,a);r.checked?c<0&&(e.isSize=i.concat([a])):c>-1&&(e.isSize=i.slice(0,c).concat(i.slice(c+1)))}else e.isSize=s}}}),e._v("40")])]),i("div",[e._v("創建時間: "+e._s(e.goodsData.timer))]),i("div",{staticClass:"goods_btn_wrap"},[i("button",{staticClass:"goods_edit_btn",on:{click:e.goChange}},[e._v("保存")]),i("button",{staticClass:"goods_edit_btn",on:{click:e.goBack}},[e._v("取消")]),i("button",{staticClass:"goods_edit_btn",on:{click:e.checkDel}},[e._v("刪除")])]),i("alert-window",{attrs:{isShow:e.isShow},on:{editShow:e.editShow},scopedSlots:e._u([{key:"alertContent",fn:function(){return[i("p",[e._v("確定要刪除？")])]},proxy:!0},{key:"allowBtn",fn:function(){return[i("span",{on:{click:e.goDel}},[e._v("是")])]},proxy:!0}])})],1)},s=[],a=i("c814"),c=i("1bab"),l=i("18fd"),t={mixins:[l["a"]],data(){return{iid:"",pGoods:"",isColor:[],isSize:[],sortList:[],goodsData:{},isShow:!1,iptDesabled:!0,finalPrice:"",isShowNativePrice:!0}},components:{AlertWindow:a["a"]},created(){this.iid=this.$route.query.iid,Object(c["b"])(this.$route.query.iid,"goodslistDetail","get").then(e=>{this.goodsData=e,this.finalPrice=e.finalPrice,this.pGoods=e.pGoods,e.isColor.forEach(e=>{this.isColor.push(e)}),e.isSize.forEach(e=>{this.isSize.push(e)})}).catch(e=>{console.log(e)})},methods:{goChange(){if(""==this.finalPrice||0==this.iptDesabled||!1===this.isShowNativePrice||""==this.pGoods||""==this.finalPrice)return alert("請確認商品資訊是否填妥");const e={};e.gName=this.goodsData.gName,e.gNum=this.iid,e.isColor=this.isColor,e.isSize=this.isSize,e.pGoods=this.pGoods,e.selfNum=this.goodsData.selfNum,e.sort=this.goodsData.sort,e.timer=this.goodsData.timer,e.finalPrice=this.finalPrice,Object(c["b"])(JSON.stringify(e),"goodsChange","post").then(e=>{window.alert("商品已修改"),this.$router.push("/goodsList")})},goBack(){this.$router.push("/goodsList")},checkDel(){this.isShow=!this.isShow},goDel(){this.isShow=!this.isShow,Object(c["b"])(this.iid,"goodsDel","delete").then(e=>{0==e&&window.alert(this.goodsData.gName+"商品已成功刪除"),this.$router.push("/goodsList")})},editShow(){this.isShow=!this.isShow},editFinalPrice(){this.iptDesabled=!this.iptDesabled,1==this.iptDesabled?(this.$refs.editBtn.textContent="修改",this.$refs.finalPriceIpt.disabled=this.iptDesabled):(this.$refs.editBtn.textContent="確定",this.$refs.finalPriceIpt.disabled=this.iptDesabled)},pGoodsCheck(){this.isShowNativePrice=!this.isShowNativePrice,this.isShowNativePrice?(this.$refs.nativePriceIpt.disabled=!0,this.$refs.nativePriceBtn.textContent="修改"):(this.$refs.nativePriceIpt.disabled=!1,this.$refs.nativePriceBtn.textContent="確定")}}},n=t,d=(i("b866"),i("2877")),v=Object(d["a"])(n,r,s,!1,null,"1b5c24f2",null);o["default"]=v.exports},b866:function(e,o,i){"use strict";i("ccda")},c814:function(e,o,i){"use strict";var r=function(){var e=this,o=e.$createElement,i=e._self._c||o;return i("div",[e.isShow?i("div",{staticClass:"bgc"},[i("div",{staticClass:"alert_wrap"},[i("div",{staticClass:"content"},[e._t("alertContent"),i("div",{staticClass:"control"},[i("span",{on:{click:e.returnShow}},[e._v("否")]),e._t("allowBtn")],2)],2)])]):e._e()])},s=[],a={props:{isShow:{type:Boolean,default:!1}},methods:{returnShow(){this.$emit("editShow")}}},c=a,l=(i("05e1"),i("2877")),t=Object(l["a"])(c,r,s,!1,null,"5dbc4292",null);o["a"]=t.exports},ccda:function(e,o,i){},f1bb:function(e,o,i){}}]);
//# sourceMappingURL=chunk-a1459380.acae4bdf.js.map
import{s as F,j as w,v as P,x as A,y as D,o as u,f as d,r as q,k as E,T as K,a as s,u as l,b as o,F as C,m as $,w as V,Z as T,t as n,q as m,g as b,d as L,p as N}from"./app-ciTZOVjc.js";import{a as v,_ as p}from"./TextInput-BF6fvj4r.js";import{_ as S}from"./Modal-BsSNX-tr.js";const O={__name:"Select",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(r,{expose:j}){const k=F(r,"modelValue"),f=w(null);return P(()=>{f.value.hasAttribute("autofocus")&&f.value.focus()}),j({focus:()=>f.value.focus()}),(c,x)=>A((u(),d("select",{class:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm","onUpdate:modelValue":x[0]||(x[0]=y=>k.value=y),ref_key:"input",ref:f},[q(c.$slots,"default")],512)),[[D,k.value]])}},I={class:"py-8"},Z={class:"max-w-7xl mx-auto px-6 lg:px-8"},z={class:"py-4 flex justify-between"},G={key:0,class:"bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 mt-4"},H={class:"relative overflow-x-auto rounded-lg"},J={class:"w-full text-sm text-left text-gray-500 dark:text-gray-100"},Q={class:"bg-white dark:bg-gray-800 border-b dark:border-gray-700 last:border-none hover:bg-black/10 cursor-pointer"},R={scope:"row",class:"px-6 py-4 font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap"},W={class:"px-6 py-4"},X={class:"px-6 py-4"},Y={class:"px-6 py-4"},ee={class:"px-6 py-4"},te={class:"px-6 py-4"},oe={class:"space-x-2"},re=["onClick"],le=["onClick"],se={key:1,class:"flex justify-center mt-12 dark:text-gray-400 text-gray-700"},ne={class:"p-4 dark:text-white"},ae=["value"],ue={key:0,class:"text-sm text-red-500"},de={key:1,class:"text-sm text-red-500"},ie={key:2,class:"text-sm text-red-500 mt-0"},ce={key:3,class:"text-sm text-red-500"},me={key:4,class:"text-sm text-red-500 mt-0"},be={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},pe=["disabled"],xe={class:"p-4 dark:text-white"},ve=["value"],fe={key:0,class:"text-sm text-red-500"},ke={key:1,class:"text-sm text-red-500"},ye={key:2,class:"text-sm text-red-500 mt-0"},ge={key:3,class:"text-sm text-red-500"},we={key:4,class:"text-sm text-red-500 mt-0"},_e={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},he=["disabled"],Ve={class:"p-4 dark:text-white"},Ce={class:"flex justify-center items-center flex-col"},$e={class:"grid grid-cols-2 gap-2 mt-6"},Ue={__name:"Index",props:{blocks:Object,lots:Object,filters:Object,errors:Object},setup(r){const k=w({search:r.filters.search});E(k,i=>{N.get(route("lots.index"),i,{preserveState:!0,preserveScroll:!0,replace:!0})},{deep:!0});const f=w(!1),c=K({block_id:"",lot_number:"",contract_number:"",price:"",owner:""}),x=()=>{c.post(route("lots.store"),{preserveState:i=>Object.keys(i.props.errors).length>0,preserveScroll:!0})},y=w(!1),a=K({block_id:"",lot_number:"",contract_number:"",price:"",owner:"",id:""}),U=i=>{a.id=i.id,a.lot_number=i.lot_number,a.contract_number=i.contract_number,a.price=i.price,a.owner=i.owner,a.block_id=i.block_id,y.value=!0},g=()=>{a.put(route("lots.update",a.id),{preserveScroll:!0,preserveState:i=>Object.keys(i.props.errors).length>0,onSuccess:i=>{Object.keys(i.props.errors).length===1&&U.reset()}})},_=w(!1),h=w(null),M=i=>{h.value=i,_.value=!0};return(i,e)=>(u(),d(C,null,[s(l(T),{title:"Lots"}),o("div",I,[o("div",Z,[o("div",z,[o("div",null,[e[18]||(e[18]=o("span",{class:"dark:text-white text-lg font-bold mr-4"},"Lots",-1)),o("button",{onClick:e[0]||(e[0]=t=>f.value=!0),class:"bg-blue-500 px-4 text-sm rounded-md text-white hover:bg-blue-700 active:bg-blue-800 ease-in-out duration-200"},"Add new")]),s(v,{modelValue:k.value.search,"onUpdate:modelValue":e[1]||(e[1]=t=>k.value.search=t),type:"text",class:"lg:w-96 lg:mt-0 w-full",placeholder:"Search"},null,8,["modelValue"])]),r.lots.length?(u(),d("div",G,[o("div",H,[o("table",J,[e[19]||(e[19]=o("thead",{class:"text-xs text-gray-700 dark:text-gray-200 uppercase bg-gray-50 dark:bg-gray-800"},[o("tr",null,[o("th",{scope:"col",class:"px-6 py-3"}," Contract Number "),o("th",{scope:"col",class:"px-6 py-3"}," Owner "),o("th",{scope:"col",class:"px-6 py-3"}," Block Number "),o("th",{scope:"col",class:"px-6 py-3"}," Lot Number "),o("th",{scope:"col",class:"px-6 py-3"}," Price "),o("th",{scope:"col",class:"px-6 py-3"}," Actions ")])],-1)),o("tbody",null,[(u(!0),d(C,null,$(r.lots,t=>(u(),d("tr",Q,[o("th",R,n(t.contract_number??"-"),1),o("td",W,n(t.owner??"-"),1),o("td",X,n(t.block.block_number),1),o("td",Y,n(t.lot_number),1),o("td",ee,n(Number(t.price).toAmountFormat()),1),o("td",te,[o("div",oe,[o("i",{onClick:B=>U(t),class:"bx bx-edit w-8 h-8 rounded-full bg-green-500 hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 inline-flex justify-center items-center"},null,8,re),o("i",{onClick:B=>M(t),class:"bx bx-trash w-8 h-8 rounded-full bg-red-500 hover:bg-red-700 active:bg-red-900 ease-in-out duration-200 inline-flex justify-center items-center"},null,8,le)])])]))),256))])])])])):(u(),d("div",se,e[20]||(e[20]=[o("span",null,"No data.",-1)])))])]),s(S,{show:f.value,closeable:!1},{default:V(()=>[o("div",ne,[s(p,{for:"block_number",value:"Block number"}),s(O,{onKeyup:m(x,["enter"]),id:"block_number",class:"mt-1 block w-full",modelValue:l(c).block_id,"onUpdate:modelValue":e[2]||(e[2]=t=>l(c).block_id=t)},{default:V(()=>[(u(!0),d(C,null,$(r.blocks,t=>(u(),d("option",{value:t.id},n(`${t.block_number} (${t.name})`),9,ae))),256))]),_:1},8,["modelValue"]),r.errors.block_id?(u(),d("span",ue,n(r.errors.block_id),1)):b("",!0),s(p,{class:"mt-4",for:"lot_number",value:"Lot number"}),s(v,{onKeyup:m(x,["enter"]),id:"lot_number",type:"text",class:"mt-1 block w-full",modelValue:l(c).lot_number,"onUpdate:modelValue":e[3]||(e[3]=t=>l(c).lot_number=t)},null,8,["modelValue"]),r.errors.lot_number?(u(),d("span",de,n(r.errors.lot_number),1)):b("",!0),s(p,{class:"mt-4",for:"price",value:"Price"}),s(v,{onKeyup:m(x,["enter"]),id:"price",type:"number",class:"mt-1 block w-full",modelValue:l(c).price,"onUpdate:modelValue":e[4]||(e[4]=t=>l(c).price=t)},null,8,["modelValue"]),r.errors.price?(u(),d("span",ie,n(r.errors.price),1)):b("",!0),s(p,{class:"mt-4",for:"contract_number",value:"Contract number"}),s(v,{onKeyup:m(x,["enter"]),id:"contract_number",type:"text",class:"mt-1 block w-full",modelValue:l(c).contract_number,"onUpdate:modelValue":e[5]||(e[5]=t=>l(c).contract_number=t)},null,8,["modelValue"]),r.errors.contract_number?(u(),d("span",ce,n(r.errors.contract_number),1)):b("",!0),s(p,{class:"mt-4",for:"owner",value:"Owner"}),s(v,{onKeyup:m(x,["enter"]),id:"owner",type:"text",class:"mt-1 block w-full",modelValue:l(c).owner,"onUpdate:modelValue":e[6]||(e[6]=t=>l(c).owner=t)},null,8,["modelValue"]),r.errors.owner?(u(),d("span",me,n(r.errors.owner),1)):b("",!0),o("div",be,[o("button",{onClick:e[7]||(e[7]=t=>f.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),o("button",{onClick:x,disabled:l(c).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(l(c).processing?"Processing":"Submit"),9,pe)])])]),_:1},8,["show"]),s(S,{show:y.value,onClose:e[14]||(e[14]=t=>y.value=!1)},{default:V(()=>[o("div",xe,[s(p,{for:"block_number",value:"Block number"}),s(O,{onKeyup:m(g,["enter"]),id:"block_number",class:"mt-1 block w-full",modelValue:l(a).block_id,"onUpdate:modelValue":e[8]||(e[8]=t=>l(a).block_id=t)},{default:V(()=>[(u(!0),d(C,null,$(r.blocks,t=>(u(),d("option",{value:t.id},n(`${t.block_number} (${t.name})`),9,ve))),256))]),_:1},8,["modelValue"]),r.errors.block_id?(u(),d("span",fe,n(r.errors.block_id),1)):b("",!0),s(p,{class:"mt-4",for:"lot_number",value:"Lot number"}),s(v,{onKeyup:m(g,["enter"]),id:"lot_number",type:"text",class:"mt-1 block w-full",modelValue:l(a).lot_number,"onUpdate:modelValue":e[9]||(e[9]=t=>l(a).lot_number=t)},null,8,["modelValue"]),r.errors.lot_number?(u(),d("span",ke,n(r.errors.lot_number),1)):b("",!0),s(p,{class:"mt-4",for:"price",value:"Price"}),s(v,{onKeyup:m(g,["enter"]),id:"price",type:"number",class:"mt-1 block w-full",modelValue:l(a).price,"onUpdate:modelValue":e[10]||(e[10]=t=>l(a).price=t)},null,8,["modelValue"]),r.errors.price?(u(),d("span",ye,n(r.errors.price),1)):b("",!0),s(p,{class:"mt-4",for:"contract_number",value:"Contract number"}),s(v,{onKeyup:m(g,["enter"]),id:"contract_number",type:"text",class:"mt-1 block w-full",modelValue:l(a).contract_number,"onUpdate:modelValue":e[11]||(e[11]=t=>l(a).contract_number=t)},null,8,["modelValue"]),r.errors.contract_number?(u(),d("span",ge,n(r.errors.contract_number),1)):b("",!0),s(p,{class:"mt-4",for:"owner",value:"Owner"}),s(v,{onKeyup:m(g,["enter"]),id:"owner",type:"text",class:"mt-1 block w-full",modelValue:l(a).owner,"onUpdate:modelValue":e[12]||(e[12]=t=>l(a).owner=t)},null,8,["modelValue"]),r.errors.owner?(u(),d("span",we,n(r.errors.owner),1)):b("",!0),o("div",_e,[o("button",{onClick:e[13]||(e[13]=t=>y.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),o("button",{onClick:g,disabled:l(a).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(l(a).processing?"Processing":"Submit"),9,he)])])]),_:1},8,["show"]),s(S,{show:_.value,onClose:e[17]||(e[17]=t=>_.value=!1)},{default:V(()=>[o("div",Ve,[o("div",Ce,[e[24]||(e[24]=o("i",{class:"bx bx-info-circle text-7xl text-red-500"},null,-1)),o("p",null,[e[21]||(e[21]=L("Delete block number ")),o("b",null,n(h.value.block.block_number),1),e[22]||(e[22]=L(" lot number ")),o("b",null,n(h.value.lot_number),1),e[23]||(e[23]=L("?"))])]),o("div",$e,[o("button",{onClick:e[15]||(e[15]=t=>l(N).delete(i.route("lots.destroy",h.value),{onSuccess:()=>{h.value=null,_.value=!1}})),class:"text-white bg-red-500 hover:bg-red-700 active:bg-red-900 rounded-md py-1 ease-in-out duration-200"},"Delete"),o("button",{onClick:e[16]||(e[16]=t=>_.value=!1),class:"border dark:border-gray-100 border-black hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-800 py-1 rounded-md ease-in-out duration-200"},"Cancel")])])]),_:1},8,["show"])],64))}};export{Ue as default};

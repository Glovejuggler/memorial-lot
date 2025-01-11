import{j as g,T as B,f as u,a as l,u as r,b as t,t as n,F as U,m as P,w as h,o as i,Z as M,q as b,g as m,d as L,p as N}from"./app-B8RcA6yV.js";import{_ as V}from"./Modal-aYQBKWnA.js";import{_ as x,a as v}from"./TextInput-Ben5HfjV.js";const E={class:"py-8"},A={class:"max-w-7xl mx-auto px-6 lg:px-8"},T={class:"bg-white dark:bg-gray-800 p-6 rounded-md dark:text-white border dark:border-gray-700 shadow-sm"},q={class:"text-3xl font-bold mb-4"},Z={class:"text-sm"},z={class:"flex mt-4 space-x-2"},G={class:"py-4"},H={key:0,class:"bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 mt-4"},I={class:"relative overflow-x-auto rounded-lg"},J={class:"w-full text-sm text-left text-gray-500 dark:text-gray-100"},Q={class:"bg-white dark:bg-gray-800 border-b dark:border-gray-700 last:border-none hover:bg-black/10 cursor-pointer"},R={scope:"row",class:"px-6 py-4 font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap"},W={class:"px-6 py-4"},X={class:"px-6 py-4"},Y={class:"px-6 py-4"},ee={class:"px-6 py-4"},te={class:"space-x-2"},oe=["onClick"],re=["onClick"],se={key:1,class:"flex justify-center mt-12 dark:text-gray-400 text-gray-700"},le={class:"p-4 dark:text-white"},ne={key:0,class:"text-sm text-red-500"},ae={key:1,class:"text-sm text-red-500 mt-0"},de={key:2,class:"text-sm text-red-500"},ue={key:3,class:"text-sm text-red-500 mt-0"},ie={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},ce=["disabled"],be={class:"p-4 dark:text-white"},me={key:0,class:"text-sm text-red-500"},xe={key:1,class:"text-sm text-red-500 mt-0"},ve={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},pe=["disabled"],ke={class:"p-4 dark:text-white"},ge={class:"flex justify-center items-center flex-col"},ye={class:"grid grid-cols-2 gap-2 mt-6"},fe={class:"p-4 dark:text-white"},we={key:0,class:"text-sm text-red-500"},he={key:1,class:"text-sm text-red-500 mt-0"},Ve={key:2,class:"text-sm text-red-500"},_e={key:3,class:"text-sm text-red-500 mt-0"},Ce={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},$e=["disabled"],je={class:"p-4 dark:text-white"},Le={class:"flex justify-center items-center flex-col"},Se={class:"grid grid-cols-2 gap-2 mt-6"},Ue={__name:"Show",props:{block:Object,errors:Object,lots:Object},setup(s){const k=s,S=g(!1),_=g(!1),C=g(!1),$=g(!1),y=g(!1),p=B({name:k.block.name,block_number:k.block.block_number}),c=B({block_id:k.block.id,lot_number:"",contract_number:"",price:"",owner:""}),a=B({block_id:k.block.id,lot_number:"",contract_number:"",price:"",owner:"",id:""}),f=()=>{c.post(route("lots.store"),{preserveState:d=>Object.keys(d.props.errors).length>0,preserveScroll:!0})},K=()=>{p.put(route("blocks.update",k.block),{preserveScroll:!0,preserveState:d=>Object.keys(d.props.errors).length>0})},O=d=>{a.id=d.id,a.lot_number=d.lot_number,a.contract_number=d.contract_number,a.price=d.price,a.owner=d.owner,a.block_id=k.block.id,$.value=!0},w=()=>{a.put(route("lots.update",a.id),{preserveScroll:!0,preserveState:d=>Object.keys(d.props.errors).length>0,onSuccess:d=>{Object.keys(d.props.errors).length===1&&O.reset()}})},j=g(null),D=d=>{j.value=d,y.value=!0};return(d,e)=>(i(),u(U,null,[l(r(M),{title:s.block.name},null,8,["title"]),t("div",E,[t("div",A,[t("div",T,[t("p",q,n(s.block.name),1),t("p",Z,"Block number: "+n(s.block.block_number),1),t("div",z,[t("button",{onClick:e[0]||(e[0]=o=>_.value=!0),class:"rounded-md text-white px-4 text-sm bg-green-500 hover:bg-green-700 active:bg-green-900 ease-in-out duration-200"},"Edit"),t("button",{onClick:e[1]||(e[1]=o=>C.value=!0),class:"rounded-md text-white px-4 text-sm bg-red-500 hover:bg-red-700 active:bg-red-900 ease-in-out duration-200"},"Delete")])]),t("div",G,[e[24]||(e[24]=t("span",{class:"dark:text-white text-lg font-bold mr-4"},"Lots",-1)),t("button",{onClick:e[2]||(e[2]=o=>S.value=!0),class:"bg-blue-500 px-4 text-sm rounded-md text-white hover:bg-blue-700 active:bg-blue-800 ease-in-out duration-200"},"Add new")]),s.lots.length?(i(),u("div",H,[t("div",I,[t("table",J,[e[25]||(e[25]=t("thead",{class:"text-xs text-gray-700 dark:text-gray-200 uppercase bg-gray-50 dark:bg-gray-800"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"}," Contract Number "),t("th",{scope:"col",class:"px-6 py-3"}," Owner "),t("th",{scope:"col",class:"px-6 py-3"}," Lot Number "),t("th",{scope:"col",class:"px-6 py-3"}," Price "),t("th",{scope:"col",class:"px-6 py-3"}," Actions ")])],-1)),t("tbody",null,[(i(!0),u(U,null,P(s.lots,o=>(i(),u("tr",Q,[t("th",R,n(o.contract_number??"-"),1),t("td",W,n(o.owner??"-"),1),t("td",X,n(o.lot_number),1),t("td",Y,n(Number(o.price).toAmountFormat()),1),t("td",ee,[t("div",te,[t("i",{onClick:F=>O(o),class:"bx bx-edit w-8 h-8 rounded-full bg-green-500 hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 inline-flex justify-center items-center"},null,8,oe),t("i",{onClick:F=>D(o),class:"bx bx-trash w-8 h-8 rounded-full bg-red-500 hover:bg-red-700 active:bg-red-900 ease-in-out duration-200 inline-flex justify-center items-center"},null,8,re)])])]))),256))])])])])):(i(),u("div",se,e[26]||(e[26]=[t("span",null,"No data.",-1)])))])]),l(V,{show:S.value,closeable:!1},{default:h(()=>[t("div",le,[l(x,{for:"lot_number",value:"Lot number"}),l(v,{onKeyup:b(f,["enter"]),id:"lot_number",type:"text",class:"mt-1 block w-full",modelValue:r(c).lot_number,"onUpdate:modelValue":e[3]||(e[3]=o=>r(c).lot_number=o)},null,8,["modelValue"]),s.errors.lot_number?(i(),u("span",ne,n(s.errors.lot_number),1)):m("",!0),l(x,{class:"mt-4",for:"price",value:"Price"}),l(v,{onKeyup:b(f,["enter"]),id:"price",type:"number",class:"mt-1 block w-full",modelValue:r(c).price,"onUpdate:modelValue":e[4]||(e[4]=o=>r(c).price=o)},null,8,["modelValue"]),s.errors.price?(i(),u("span",ae,n(s.errors.price),1)):m("",!0),l(x,{class:"mt-4",for:"contract_number",value:"Contract number"}),l(v,{onKeyup:b(f,["enter"]),id:"contract_number",type:"text",class:"mt-1 block w-full",modelValue:r(c).contract_number,"onUpdate:modelValue":e[5]||(e[5]=o=>r(c).contract_number=o)},null,8,["modelValue"]),s.errors.contract_number?(i(),u("span",de,n(s.errors.contract_number),1)):m("",!0),l(x,{class:"mt-4",for:"owner",value:"Owner"}),l(v,{onKeyup:b(f,["enter"]),id:"owner",type:"text",class:"mt-1 block w-full",modelValue:r(c).owner,"onUpdate:modelValue":e[6]||(e[6]=o=>r(c).owner=o)},null,8,["modelValue"]),s.errors.owner?(i(),u("span",ue,n(s.errors.owner),1)):m("",!0),t("div",ie,[t("button",{onClick:e[7]||(e[7]=o=>S.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),t("button",{onClick:f,disabled:r(c).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(r(c).processing?"Processing":"Submit"),9,ce)])])]),_:1},8,["show"]),l(V,{show:_.value,onClose:e[11]||(e[11]=o=>_.value=!1)},{default:h(()=>[t("div",be,[l(x,{for:"name",value:"Block name"}),l(v,{onKeyup:b(K,["enter"]),id:"name",type:"text",class:"mt-1 block w-full",modelValue:r(p).name,"onUpdate:modelValue":e[8]||(e[8]=o=>r(p).name=o)},null,8,["modelValue"]),s.errors.name?(i(),u("span",me,n(s.errors.name),1)):m("",!0),l(x,{class:"mt-4",for:"block_number",value:"Block number"}),l(v,{onKeyup:b(K,["enter"]),id:"block_number",type:"text",class:"mt-1 block w-full",modelValue:r(p).block_number,"onUpdate:modelValue":e[9]||(e[9]=o=>r(p).block_number=o)},null,8,["modelValue"]),s.errors.block_number?(i(),u("span",xe,n(s.errors.block_number),1)):m("",!0),t("div",ve,[t("button",{onClick:e[10]||(e[10]=o=>_.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),t("button",{onClick:K,disabled:r(p).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(r(p).processing?"Processing":"Submit"),9,pe)])])]),_:1},8,["show"]),l(V,{show:C.value,onClose:e[14]||(e[14]=o=>C.value=!1)},{default:h(()=>[t("div",ke,[t("div",ge,[e[29]||(e[29]=t("i",{class:"bx bx-info-circle text-7xl text-red-500"},null,-1)),t("p",null,[e[27]||(e[27]=L("Delete the block ")),t("b",null,n(s.block.name),1),e[28]||(e[28]=L("?"))])]),t("div",ye,[t("button",{onClick:e[12]||(e[12]=o=>r(N).delete(d.route("blocks.destroy",s.block))),class:"text-white bg-red-500 hover:bg-red-700 active:bg-red-900 rounded-md py-1 ease-in-out duration-200"},"Delete"),t("button",{onClick:e[13]||(e[13]=o=>C.value=!1),class:"border dark:border-gray-100 border-black hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-800 py-1 rounded-md ease-in-out duration-200"},"Cancel")])])]),_:1},8,["show"]),l(V,{show:$.value,onClose:e[20]||(e[20]=o=>$.value=!1)},{default:h(()=>[t("div",fe,[l(x,{for:"lot_number",value:"Lot number"}),l(v,{onKeyup:b(w,["enter"]),id:"lot_number",type:"text",class:"mt-1 block w-full",modelValue:r(a).lot_number,"onUpdate:modelValue":e[15]||(e[15]=o=>r(a).lot_number=o)},null,8,["modelValue"]),s.errors.lot_number?(i(),u("span",we,n(s.errors.lot_number),1)):m("",!0),l(x,{class:"mt-4",for:"price",value:"Price"}),l(v,{onKeyup:b(w,["enter"]),id:"price",type:"number",class:"mt-1 block w-full",modelValue:r(a).price,"onUpdate:modelValue":e[16]||(e[16]=o=>r(a).price=o)},null,8,["modelValue"]),s.errors.price?(i(),u("span",he,n(s.errors.price),1)):m("",!0),l(x,{class:"mt-4",for:"contract_number",value:"Contract number"}),l(v,{onKeyup:b(w,["enter"]),id:"contract_number",type:"text",class:"mt-1 block w-full",modelValue:r(a).contract_number,"onUpdate:modelValue":e[17]||(e[17]=o=>r(a).contract_number=o)},null,8,["modelValue"]),s.errors.contract_number?(i(),u("span",Ve,n(s.errors.contract_number),1)):m("",!0),l(x,{class:"mt-4",for:"owner",value:"Owner"}),l(v,{onKeyup:b(w,["enter"]),id:"owner",type:"text",class:"mt-1 block w-full",modelValue:r(a).owner,"onUpdate:modelValue":e[18]||(e[18]=o=>r(a).owner=o)},null,8,["modelValue"]),s.errors.owner?(i(),u("span",_e,n(s.errors.owner),1)):m("",!0),t("div",Ce,[t("button",{onClick:e[19]||(e[19]=o=>$.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),t("button",{onClick:w,disabled:r(a).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(r(a).processing?"Processing":"Submit"),9,$e)])])]),_:1},8,["show"]),l(V,{show:y.value,onClose:e[23]||(e[23]=o=>y.value=!1)},{default:h(()=>[t("div",je,[t("div",Le,[e[32]||(e[32]=t("i",{class:"bx bx-info-circle text-7xl text-red-500"},null,-1)),t("p",null,[e[30]||(e[30]=L("Delete lot number ")),t("b",null,n(j.value.lot_number),1),e[31]||(e[31]=L("?"))])]),t("div",Se,[t("button",{onClick:e[21]||(e[21]=o=>r(N).delete(d.route("lots.destroy",j.value),{onSuccess:()=>{j.value=null,y.value=!1}})),class:"text-white bg-red-500 hover:bg-red-700 active:bg-red-900 rounded-md py-1 ease-in-out duration-200"},"Delete"),t("button",{onClick:e[22]||(e[22]=o=>y.value=!1),class:"border dark:border-gray-100 border-black hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-800 py-1 rounded-md ease-in-out duration-200"},"Cancel")])])]),_:1},8,["show"])],64))}};export{Ue as default};
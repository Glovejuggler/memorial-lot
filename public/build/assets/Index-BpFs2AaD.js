import{j as g,k as T,T as L,f as d,a as o,u as r,b as l,w as k,F as w,m as _,o as u,Z as D,t as n,n as E,q as m,g as b,d as j,p as F}from"./app-BzsAMZal.js";import{a as y,_ as p}from"./TextInput-DwZsv0QV.js";import{_ as S}from"./Select-BaNLYgwx.js";import{_ as O}from"./Modal-B6iVOVRa.js";const M={class:"py-8"},z={class:"max-w-screen-2xl mx-auto px-6 lg:px-8"},q={class:"py-4 flex justify-between"},Z=["href"],G=["value"],H={key:0,class:"bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 mt-4"},J={class:"relative overflow-x-auto rounded-lg"},Q={class:"w-full text-sm text-left text-gray-500 dark:text-gray-100"},R={class:"bg-white dark:bg-gray-800 border-b dark:border-gray-700 last:border-none hover:bg-black/10 cursor-pointer"},W={scope:"row",class:"px-2 py-4 font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap"},X={class:"px-2 py-4"},Y={class:"px-2 py-4"},ee={class:"px-2 py-4"},te={class:"px-2 py-4"},le={class:"px-2 py-4"},se={class:"px-2 py-4"},oe={class:"px-2 py-4"},re={class:"px-2 py-4"},ne={class:"px-2 py-4"},ae={class:"space-x-1"},de=["onClick"],ue=["onClick"],ie={key:1,class:"flex justify-center mt-12 dark:text-gray-400 text-gray-700"},ce={class:"p-4 dark:text-white"},me=["value"],be={key:0,class:"text-sm text-red-500"},pe={key:1,class:"text-sm text-red-500"},ye={key:2,class:"text-sm text-red-500"},xe={key:3,class:"text-sm text-red-500 mt-0"},ve={key:4,class:"text-sm text-red-500"},fe={key:5,class:"text-sm text-red-500 mt-0"},ke={key:6,class:"text-sm text-red-500 mt-0"},ge={key:7,class:"text-sm text-red-500 mt-0"},we={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},Ve=["disabled"],he={class:"p-4 dark:text-white"},_e=["value"],Ce={key:0,class:"text-sm text-red-500"},Ue={key:1,class:"text-sm text-red-500"},Se={key:2,class:"text-sm text-red-500"},$e={key:3,class:"text-sm text-red-500 mt-0"},Ke={key:4,class:"text-sm text-red-500"},Le={key:5,class:"text-sm text-red-500 mt-0"},je={key:6,class:"text-sm text-red-500 mt-0"},Oe={key:7,class:"text-sm text-red-500 mt-0"},Ae={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},Ne=["disabled"],Fe={class:"p-4 dark:text-white"},Ie={class:"flex justify-center items-center flex-col"},Be={class:"grid grid-cols-2 gap-2 mt-6"},Pe={id:"lot_types"},Te=["value"],qe={__name:"Index",props:{blocks:Object,lots:Object,filters:Object,errors:Object,lot_types:Object},setup(s){const $=s,f=g({search:$.filters.search,status:$.filters.status??"",type:$.filters.type??"any"});T(f,i=>{F.get(route("lots.index"),i,{preserveState:!0,preserveScroll:!0,replace:!0})},{deep:!0});const K=g(!1),c=L({block_id:"",lot_number:"",contract_number:"",price:"",owner:"",address:"",contact:"",type:""}),x=()=>{c.post(route("lots.store"),{preserveState:i=>Object.keys(i.props.errors).length>0,preserveScroll:!0})},C=g(!1),a=L({block_id:"",lot_number:"",contract_number:"",price:"",owner:"",id:"",address:"",contact:"",type:""}),A=i=>{a.id=i.id,a.lot_number=i.lot_number,a.contract_number=i.contract_number,a.price=i.price,a.owner=i.owner,a.block_id=i.block_id,a.address=i.address,a.contact=i.contact,a.type=i.type,C.value=!0},v=()=>{a.put(route("lots.update",a.id),{preserveScroll:!0,preserveState:i=>Object.keys(i.props.errors).length>0,onSuccess:i=>{Object.keys(i.props.errors).length===1&&A.reset()}})},V=g(!1),h=g(null),I=i=>{h.value=i,V.value=!0},N=g(null),U=L({file:""}),B=()=>{U.post(route("lots.import"),{preserveScroll:!0,preserveState:!1,onSuccess:()=>U.reset("file"),onCancel:()=>U.reset("file")})};return(i,t)=>(u(),d(w,null,[o(r(D),{title:"Lots"}),l("input",{onInput:t[0]||(t[0]=e=>r(U).file=e.target.files[0]),onChange:B,type:"file",hidden:"",name:"import",id:"import",ref_key:"importFileInput",ref:N,accept:"application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},null,544),l("div",M,[l("div",z,[l("div",q,[l("div",null,[t[28]||(t[28]=l("span",{class:"dark:text-white text-lg font-bold mr-4"},"Lots",-1)),l("button",{onClick:t[1]||(t[1]=e=>K.value=!0),class:"bg-blue-500 px-4 text-sm rounded-md text-white hover:bg-blue-700 active:bg-blue-800 ease-in-out duration-200"},"Add new"),l("button",{onClick:t[2]||(t[2]=e=>N.value.click()),class:"bg-green-500 px-4 text-sm rounded-md text-white hover:bg-green-700 active:bg-green-800 ease-in-out duration-200 ml-4"},"Import"),l("a",{href:i.route("lots.export"),class:"bg-yellow-500 px-4 text-sm rounded-md text-white hover:bg-yellow-700 active:bg-yellow-800 ease-in-out duration-200 ml-4"},"Export",8,Z)]),l("div",null,[o(S,{modelValue:f.value.type,"onUpdate:modelValue":t[3]||(t[3]=e=>f.value.type=e)},{default:k(()=>[t[29]||(t[29]=l("option",{value:"any"},"Any",-1)),(u(!0),d(w,null,_(s.lot_types,e=>(u(),d("option",{value:e??"none"},n(e??"Uncategorized"),9,G))),256))]),_:1},8,["modelValue"]),o(S,{modelValue:f.value.status,"onUpdate:modelValue":t[4]||(t[4]=e=>f.value.status=e)},{default:k(()=>t[30]||(t[30]=[l("option",{value:""},"All",-1),l("option",{value:"available"},"Available",-1),l("option",{value:"sold"},"Sold",-1),l("option",{value:"installment"},"Installment",-1)])),_:1},8,["modelValue"]),o(y,{modelValue:f.value.search,"onUpdate:modelValue":t[5]||(t[5]=e=>f.value.search=e),type:"text",class:"lg:w-96 lg:mt-0 w-full",placeholder:"Search"},null,8,["modelValue"])])]),s.lots.length?(u(),d("div",H,[l("div",J,[l("table",Q,[t[31]||(t[31]=l("thead",{class:"text-xs text-gray-700 dark:text-gray-200 uppercase bg-gray-50 dark:bg-gray-800"},[l("tr",null,[l("th",{scope:"col",class:"p-3"}," Block Number "),l("th",{scope:"col",class:"p-3"}," Lot Number "),l("th",{scope:"col",class:"p-3"}," Type/Category "),l("th",{scope:"col",class:"p-3"}," Status "),l("th",{scope:"col",class:"p-3"}," Contract Number "),l("th",{scope:"col",class:"p-3"}," Owner "),l("th",{scope:"col",class:"p-3"}," Address "),l("th",{scope:"col",class:"p-3"}," Contact no. "),l("th",{scope:"col",class:"p-3"}," Price "),l("th",{scope:"col",class:"p-3"}," Actions ")])],-1)),l("tbody",null,[(u(!0),d(w,null,_(s.lots,e=>(u(),d("tr",R,[l("th",W,n(e.block.block_number??"-"),1),l("td",X,n(e.lot_number),1),l("td",Y,n(e.type??"-"),1),l("td",ee,[l("span",{class:E(["text-xs rounded-lg text-white px-2",{"bg-blue-500":!e.status,"bg-yellow-500":e.status=="Installment","bg-green-500":e.status=="Sold"}])},n(e.status??"Available"),3)]),l("td",te,n(e.contract_number??"-"),1),l("td",le,n(e.owner??"-"),1),l("td",se,n(e.address??"-"),1),l("td",oe,n(e.contact??"-"),1),l("td",re,n(Number(e.price).toAmountFormat()),1),l("td",ne,[l("div",ae,[l("i",{onClick:P=>A(e),class:"bx bx-edit w-6 h-6 rounded-full bg-green-500 hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 inline-flex justify-center items-center"},null,8,de),l("i",{onClick:P=>I(e),class:"bx bx-trash w-6 h-6 rounded-full bg-red-500 hover:bg-red-700 active:bg-red-900 ease-in-out duration-200 inline-flex justify-center items-center"},null,8,ue)])])]))),256))])])])])):(u(),d("div",ie,t[32]||(t[32]=[l("span",null,"No data.",-1)])))])]),o(O,{show:K.value,closeable:!1},{default:k(()=>[l("div",ce,[o(p,{for:"block_number",value:"Block number"}),o(S,{onKeyup:m(x,["enter"]),id:"block_number",class:"mt-1 block w-full",modelValue:r(c).block_id,"onUpdate:modelValue":t[6]||(t[6]=e=>r(c).block_id=e)},{default:k(()=>[(u(!0),d(w,null,_(s.blocks,e=>(u(),d("option",{value:e.id},n(`${e.block_number} (${e.name})`),9,me))),256))]),_:1},8,["modelValue"]),s.errors.block_id?(u(),d("span",be,n(s.errors.block_id),1)):b("",!0),o(p,{class:"mt-4",for:"type",value:"Type/Category"}),o(y,{list:"lot_types",onKeyup:m(x,["enter"]),id:"type",class:"mt-1 block w-full",modelValue:r(c).type,"onUpdate:modelValue":t[7]||(t[7]=e=>r(c).type=e)},null,8,["modelValue"]),s.errors.type?(u(),d("span",pe,n(s.errors.type),1)):b("",!0),o(p,{class:"mt-4",for:"lot_number",value:"Lot number"}),o(y,{onKeyup:m(x,["enter"]),id:"lot_number",type:"text",class:"mt-1 block w-full",modelValue:r(c).lot_number,"onUpdate:modelValue":t[8]||(t[8]=e=>r(c).lot_number=e)},null,8,["modelValue"]),s.errors.lot_number?(u(),d("span",ye,n(s.errors.lot_number),1)):b("",!0),o(p,{class:"mt-4",for:"price",value:"Price"}),o(y,{onKeyup:m(x,["enter"]),id:"price",type:"number",class:"mt-1 block w-full",modelValue:r(c).price,"onUpdate:modelValue":t[9]||(t[9]=e=>r(c).price=e)},null,8,["modelValue"]),s.errors.price?(u(),d("span",xe,n(s.errors.price),1)):b("",!0),o(p,{class:"mt-4",for:"contract_number",value:"Contract number"}),o(y,{onKeyup:m(x,["enter"]),id:"contract_number",type:"text",class:"mt-1 block w-full",modelValue:r(c).contract_number,"onUpdate:modelValue":t[10]||(t[10]=e=>r(c).contract_number=e)},null,8,["modelValue"]),s.errors.contract_number?(u(),d("span",ve,n(s.errors.contract_number),1)):b("",!0),o(p,{class:"mt-4",for:"owner",value:"Owner"}),o(y,{onKeyup:m(x,["enter"]),id:"owner",type:"text",class:"mt-1 block w-full",modelValue:r(c).owner,"onUpdate:modelValue":t[11]||(t[11]=e=>r(c).owner=e)},null,8,["modelValue"]),s.errors.owner?(u(),d("span",fe,n(s.errors.owner),1)):b("",!0),o(p,{class:"mt-4",for:"address",value:"Address"}),o(y,{onKeyup:m(x,["enter"]),id:"address",type:"text",class:"mt-1 block w-full",modelValue:r(c).address,"onUpdate:modelValue":t[12]||(t[12]=e=>r(c).address=e)},null,8,["modelValue"]),s.errors.address?(u(),d("span",ke,n(s.errors.address),1)):b("",!0),o(p,{class:"mt-4",for:"contact",value:"Contact no."}),o(y,{onKeyup:m(x,["enter"]),id:"contact",type:"text",class:"mt-1 block w-full",modelValue:r(c).contact,"onUpdate:modelValue":t[13]||(t[13]=e=>r(c).contact=e)},null,8,["modelValue"]),s.errors.contact?(u(),d("span",ge,n(s.errors.contact),1)):b("",!0),l("div",we,[l("button",{onClick:t[14]||(t[14]=e=>K.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),l("button",{onClick:x,disabled:r(c).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(r(c).processing?"Processing":"Submit"),9,Ve)])])]),_:1},8,["show"]),o(O,{show:C.value,onClose:t[24]||(t[24]=e=>C.value=!1)},{default:k(()=>[l("div",he,[o(p,{for:"block_number",value:"Block number"}),o(S,{onKeyup:m(v,["enter"]),id:"block_number",class:"mt-1 block w-full",modelValue:r(a).block_id,"onUpdate:modelValue":t[15]||(t[15]=e=>r(a).block_id=e)},{default:k(()=>[(u(!0),d(w,null,_(s.blocks,e=>(u(),d("option",{value:e.id},n(`${e.block_number} (${e.name})`),9,_e))),256))]),_:1},8,["modelValue"]),s.errors.block_id?(u(),d("span",Ce,n(s.errors.block_id),1)):b("",!0),o(p,{class:"mt-4",for:"type",value:"Type/Category"}),o(y,{list:"lot_types",onKeyup:m(v,["enter"]),id:"type",class:"mt-1 block w-full",modelValue:r(a).type,"onUpdate:modelValue":t[16]||(t[16]=e=>r(a).type=e)},null,8,["modelValue"]),s.errors.type?(u(),d("span",Ue,n(s.errors.type),1)):b("",!0),o(p,{class:"mt-4",for:"lot_number",value:"Lot number"}),o(y,{onKeyup:m(v,["enter"]),id:"lot_number",type:"text",class:"mt-1 block w-full",modelValue:r(a).lot_number,"onUpdate:modelValue":t[17]||(t[17]=e=>r(a).lot_number=e)},null,8,["modelValue"]),s.errors.lot_number?(u(),d("span",Se,n(s.errors.lot_number),1)):b("",!0),o(p,{class:"mt-4",for:"price",value:"Price"}),o(y,{onKeyup:m(v,["enter"]),id:"price",type:"number",class:"mt-1 block w-full",modelValue:r(a).price,"onUpdate:modelValue":t[18]||(t[18]=e=>r(a).price=e)},null,8,["modelValue"]),s.errors.price?(u(),d("span",$e,n(s.errors.price),1)):b("",!0),o(p,{class:"mt-4",for:"contract_number",value:"Contract number"}),o(y,{onKeyup:m(v,["enter"]),id:"contract_number",type:"text",class:"mt-1 block w-full",modelValue:r(a).contract_number,"onUpdate:modelValue":t[19]||(t[19]=e=>r(a).contract_number=e)},null,8,["modelValue"]),s.errors.contract_number?(u(),d("span",Ke,n(s.errors.contract_number),1)):b("",!0),o(p,{class:"mt-4",for:"owner",value:"Owner"}),o(y,{onKeyup:m(v,["enter"]),id:"owner",type:"text",class:"mt-1 block w-full",modelValue:r(a).owner,"onUpdate:modelValue":t[20]||(t[20]=e=>r(a).owner=e)},null,8,["modelValue"]),s.errors.owner?(u(),d("span",Le,n(s.errors.owner),1)):b("",!0),o(p,{class:"mt-4",for:"address",value:"Address"}),o(y,{onKeyup:m(v,["enter"]),id:"address",type:"text",class:"mt-1 block w-full",modelValue:r(a).address,"onUpdate:modelValue":t[21]||(t[21]=e=>r(a).address=e)},null,8,["modelValue"]),s.errors.address?(u(),d("span",je,n(s.errors.address),1)):b("",!0),o(p,{class:"mt-4",for:"contact",value:"Contact no."}),o(y,{onKeyup:m(v,["enter"]),id:"contact",type:"text",class:"mt-1 block w-full",modelValue:r(a).contact,"onUpdate:modelValue":t[22]||(t[22]=e=>r(a).contact=e)},null,8,["modelValue"]),s.errors.contact?(u(),d("span",Oe,n(s.errors.contact),1)):b("",!0),l("div",Ae,[l("button",{onClick:t[23]||(t[23]=e=>C.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),l("button",{onClick:v,disabled:r(a).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(r(a).processing?"Processing":"Submit"),9,Ne)])])]),_:1},8,["show"]),o(O,{show:V.value,onClose:t[27]||(t[27]=e=>V.value=!1)},{default:k(()=>[l("div",Fe,[l("div",Ie,[t[36]||(t[36]=l("i",{class:"bx bx-info-circle text-7xl text-red-500"},null,-1)),l("p",null,[t[33]||(t[33]=j("Delete block number ")),l("b",null,n(h.value.block.block_number),1),t[34]||(t[34]=j(" lot number ")),l("b",null,n(h.value.lot_number),1),t[35]||(t[35]=j("?"))])]),l("div",Be,[l("button",{onClick:t[25]||(t[25]=e=>r(F).delete(i.route("lots.destroy",h.value),{onSuccess:()=>{h.value=null,V.value=!1}})),class:"text-white bg-red-500 hover:bg-red-700 active:bg-red-900 rounded-md py-1 ease-in-out duration-200"},"Delete"),l("button",{onClick:t[26]||(t[26]=e=>V.value=!1),class:"border dark:border-gray-100 border-black hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-800 py-1 rounded-md ease-in-out duration-200"},"Cancel")])])]),_:1},8,["show"]),l("datalist",Pe,[(u(!0),d(w,null,_(s.lot_types,e=>(u(),d("option",{value:e},n(e),9,Te))),256))])],64))}};export{qe as default};
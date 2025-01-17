import{j as w,T as N,k as P,f as d,a as r,u as o,b as e,t as n,F as C,m as K,w as g,o as u,Z as M,n as E,q as m,g as b,d as L,p as B}from"./app-BzsAMZal.js";import{_}from"./Modal-B6iVOVRa.js";import{a as x,_ as p}from"./TextInput-DwZsv0QV.js";import{_ as F}from"./Select-BaNLYgwx.js";const z={class:"py-8"},q={class:"max-w-screen-2xl mx-auto px-6 lg:px-8"},Z={class:"bg-white dark:bg-gray-800 p-6 rounded-md dark:text-white border dark:border-gray-700 shadow-sm"},G={class:"lg:grid grid-cols-3 gap-2"},H={class:"text-3xl font-bold mb-4"},J={class:"mt-4 lg:mt-0"},Q={class:"mt-4 lg:mt-0"},R={class:"table table-fixed text-left text-sm"},W={class:"pr-4 py-1"},X={class:"pr-4 py-1"},Y={class:"pr-4 py-1"},ee={class:"pr-4 py-1"},te={class:"pr-4 py-1"},se={class:"flex mt-4 space-x-2"},le={class:"py-4 flex justify-between items-center"},oe={key:0,class:"bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700"},re={class:"relative overflow-x-auto rounded-lg"},ne={class:"w-full text-sm text-left text-gray-500 dark:text-gray-100 overflow-x-auto"},ae={class:"bg-white dark:bg-gray-800 border-b dark:border-gray-700 last:border-none hover:bg-black/10 cursor-pointer"},de={scope:"row",class:"px-3 py-4 font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap"},ue={class:"px-3 py-4"},ie={class:"px-3 py-4"},ce={class:"px-3 py-4"},me={class:"px-3 py-4"},be={class:"px-3 py-4"},pe={class:"px-3 py-4"},xe={class:"px-3 py-4"},ve={class:"px-3 py-4"},ye={class:"space-x-1"},ke=["onClick"],ge=["onClick"],fe={key:1,class:"flex justify-center mt-12 dark:text-gray-400 text-gray-700"},we={class:"p-4 dark:text-white"},he={key:0,class:"text-sm text-red-500"},Ve={key:1,class:"text-sm text-red-500"},Ce={key:2,class:"text-sm text-red-500"},_e={key:3,class:"text-sm text-red-500 mt-0"},Se={key:4,class:"text-sm text-red-500"},Ue={key:5,class:"text-sm text-red-500 mt-0"},$e={key:6,class:"text-sm text-red-500 mt-0"},je={key:7,class:"text-sm text-red-500 mt-0"},Ke={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},Le=["disabled"],Ae={class:"p-4 dark:text-white"},Oe={key:0,class:"text-sm text-red-500"},Ne={key:1,class:"text-sm text-red-500 mt-0"},Be={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},Fe=["disabled"],Ie={class:"p-4 dark:text-white"},Te={class:"flex justify-center items-center flex-col"},De={class:"grid grid-cols-2 gap-2 mt-6"},Pe={class:"p-4 dark:text-white"},Me={key:0,class:"text-sm text-red-500"},Ee={key:1,class:"text-sm text-red-500"},ze={key:2,class:"text-sm text-red-500 mt-0"},qe={key:3,class:"text-sm text-red-500 mt-0"},Ze={key:4,class:"text-sm text-red-500"},Ge={key:5,class:"text-sm text-red-500 mt-0"},He={key:6,class:"text-sm text-red-500 mt-0"},Je={key:7,class:"text-sm text-red-500 mt-0"},Qe={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},Re=["disabled"],We={class:"p-4 dark:text-white"},Xe={class:"flex justify-center items-center flex-col"},Ye={class:"grid grid-cols-2 gap-2 mt-6"},et={id:"lot_types"},tt=["value"],nt={__name:"Show",props:{block:Object,errors:Object,lots:Object,filters:Object,occupied:Number,available:Number,tallies:Object,lot_types:Object},setup(l){const v=l,A=w(!1),S=w(!1),U=w(!1),$=w(!1),h=w(!1),f=N({name:v.block.name,block_number:v.block.block_number}),c=N({block_id:v.block.id,type:"",lot_number:"",contract_number:"",price:"",status:"",owner:"",address:"",contact:""}),a=N({block_id:v.block.id,type:"",lot_number:"",contract_number:"",price:"",status:"",owner:"",address:"",contact:"",id:""}),y=()=>{c.post(route("lots.store"),{preserveState:i=>Object.keys(i.props.errors).length>0,preserveScroll:!0})},O=()=>{f.put(route("blocks.update",v.block),{preserveScroll:!0,preserveState:i=>Object.keys(i.props.errors).length>0})},I=i=>{a.id=i.id,a.type=i.type,a.lot_number=i.lot_number,a.contract_number=i.contract_number,a.price=i.price,a.status=i.status,a.owner=i.owner,a.block_id=v.block.id,a.address=i.address,a.contact=i.contact,$.value=!0},k=()=>{a.put(route("lots.update",a.id),{preserveScroll:!0,preserveState:i=>Object.keys(i.props.errors).length>0,onSuccess:i=>{Object.keys(i.props.errors).length===1&&I.reset()}})},j=w(null),T=i=>{j.value=i,h.value=!0},V=w({search:v.filters.search,type:v.filters.type??""});return P(V,i=>{B.get(route("blocks.show",v.block),i,{preserveState:!0,preserveScroll:!0,replace:!0})},{deep:!0}),(i,t)=>(u(),d(C,null,[r(o(M),{title:l.block.name},null,8,["title"]),e("div",z,[e("div",q,[e("div",Z,[e("div",G,[e("div",null,[e("p",H,n(l.block.name),1),e("p",null,"Block number: "+n(l.block.block_number),1)]),e("div",J,[(u(!0),d(C,null,K(l.tallies.status,s=>(u(),d("p",null,n(`${s.status??"Available"} Lots: ${s.count}`),1))),256))]),e("div",Q,[e("table",R,[t[34]||(t[34]=e("thead",null,[e("tr",{class:"text-xs font-bold"},[e("th",{class:"pr-4"},"Type/Category"),e("th",{class:"pr-4"},"Available"),e("th",{class:"pr-4"},"Sold"),e("th",{class:"pr-4"},"Installment"),e("th",{class:"pr-4"},"Total")])],-1)),e("tbody",null,[(u(!0),d(C,null,K(l.tallies.type,s=>(u(),d("tr",null,[e("td",W,n(s.type??"Uncategorized"),1),e("td",X,n(s.count-s.sold_lots-s.installment_lots),1),e("td",Y,n(s.sold_lots),1),e("td",ee,n(s.installment_lots),1),e("td",te,n(s.count),1)]))),256))])])])]),e("div",se,[e("button",{onClick:t[0]||(t[0]=s=>S.value=!0),class:"rounded-md text-white px-4 text-sm bg-green-500 hover:bg-green-700 active:bg-green-900 ease-in-out duration-200"},"Edit"),e("button",{onClick:t[1]||(t[1]=s=>U.value=!0),class:"rounded-md text-white px-4 text-sm bg-red-500 hover:bg-red-700 active:bg-red-900 ease-in-out duration-200"},"Delete")])]),e("div",le,[e("div",null,[t[35]||(t[35]=e("span",{class:"dark:text-white text-lg font-bold mr-4"},"Lots",-1)),e("button",{onClick:t[2]||(t[2]=s=>A.value=!0),class:"bg-blue-500 px-4 text-sm rounded-md text-white hover:bg-blue-700 active:bg-blue-800 ease-in-out duration-200"},"Add new")]),e("div",null,[r(F,{modelValue:V.value.type,"onUpdate:modelValue":t[3]||(t[3]=s=>V.value.type=s)},{default:g(()=>t[36]||(t[36]=[e("option",{value:""},"All",-1),e("option",{value:"available"},"Available",-1),e("option",{value:"sold"},"Sold",-1),e("option",{value:"installment"},"Installment",-1)])),_:1},8,["modelValue"]),r(x,{modelValue:V.value.search,"onUpdate:modelValue":t[4]||(t[4]=s=>V.value.search=s),type:"text",class:"lg:w-96 lg:mt-0 w-full",placeholder:"Search"},null,8,["modelValue"])])]),l.lots.length?(u(),d("div",oe,[e("div",re,[e("table",ne,[t[37]||(t[37]=e("thead",{class:"text-xs text-gray-700 dark:text-gray-200 uppercase bg-gray-50 dark:bg-gray-800"},[e("tr",null,[e("th",{scope:"col",class:"p-3"}," Lot Number "),e("th",{scope:"col",class:"p-3"}," Type/Category "),e("th",{scope:"col",class:"p-3"}," Status "),e("th",{scope:"col",class:"p-3"}," Contract Number "),e("th",{scope:"col",class:"p-3"}," Owner "),e("th",{scope:"col",class:"p-3"}," Address "),e("th",{scope:"col",class:"p-3"}," Contact no. "),e("th",{scope:"col",class:"p-3"}," Price "),e("th",{scope:"col",class:"p-3"}," Actions ")])],-1)),e("tbody",null,[(u(!0),d(C,null,K(l.lots,s=>(u(),d("tr",ae,[e("th",de,n(s.lot_number),1),e("td",ue,n(s.type??"Uncategorized"),1),e("td",ie,[e("span",{class:E(["text-xs rounded-lg text-white px-2",{"bg-blue-500":!s.status,"bg-yellow-500":s.status=="Installment","bg-green-500":s.status=="Sold"}])},n(s.status??"Available"),3)]),e("td",ce,n(s.contract_number??"-"),1),e("td",me,n(s.owner??"-"),1),e("td",be,n(s.address??"-"),1),e("td",pe,n(s.contact??"-"),1),e("td",xe,n(Number(s.price).toAmountFormat()),1),e("td",ve,[e("div",ye,[e("i",{onClick:D=>I(s),class:"bx bx-edit w-6 h-6 rounded-full bg-green-500 hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 inline-flex justify-center items-center"},null,8,ke),e("i",{onClick:D=>T(s),class:"bx bx-trash w-6 h-6 rounded-full bg-red-500 hover:bg-red-700 active:bg-red-900 ease-in-out duration-200 inline-flex justify-center items-center"},null,8,ge)])])]))),256))])])])])):(u(),d("div",fe,t[38]||(t[38]=[e("span",null,"No data.",-1)])))])]),r(_,{show:A.value,closeable:!1},{default:g(()=>[e("div",we,[r(p,{for:"type",value:"Type/Category"}),r(x,{list:"lot_types",onKeyup:m(y,["enter"]),id:"type",type:"text",class:"mt-1 block w-full",modelValue:o(c).type,"onUpdate:modelValue":t[5]||(t[5]=s=>o(c).type=s)},null,8,["modelValue"]),l.errors.type?(u(),d("span",he,n(l.errors.type),1)):b("",!0),r(p,{class:"mt-4",for:"lot_number",value:"Lot number"}),r(x,{onKeyup:m(y,["enter"]),id:"lot_number",type:"text",class:"mt-1 block w-full",modelValue:o(c).lot_number,"onUpdate:modelValue":t[6]||(t[6]=s=>o(c).lot_number=s)},null,8,["modelValue"]),l.errors.lot_number?(u(),d("span",Ve,n(l.errors.lot_number),1)):b("",!0),r(p,{class:"mt-4",for:"status",value:"Status"}),r(F,{onKeyup:m(y,["enter"]),id:"status",type:"text",class:"mt-1 block w-full",modelValue:o(c).status,"onUpdate:modelValue":t[7]||(t[7]=s=>o(c).status=s)},{default:g(()=>t[39]||(t[39]=[e("option",{value:""},"Available",-1),e("option",{value:"Installment"},"Installment",-1),e("option",{value:"Sold"},"Sold",-1)])),_:1},8,["modelValue"]),l.errors.status?(u(),d("span",Ce,n(l.errors.status),1)):b("",!0),r(p,{class:"mt-4",for:"price",value:"Price"}),r(x,{onKeyup:m(y,["enter"]),id:"price",type:"number",class:"mt-1 block w-full",modelValue:o(c).price,"onUpdate:modelValue":t[8]||(t[8]=s=>o(c).price=s)},null,8,["modelValue"]),l.errors.price?(u(),d("span",_e,n(l.errors.price),1)):b("",!0),r(p,{class:"mt-4",for:"contract_number",value:"Contract number"}),r(x,{onKeyup:m(y,["enter"]),id:"contract_number",type:"text",class:"mt-1 block w-full",modelValue:o(c).contract_number,"onUpdate:modelValue":t[9]||(t[9]=s=>o(c).contract_number=s)},null,8,["modelValue"]),l.errors.contract_number?(u(),d("span",Se,n(l.errors.contract_number),1)):b("",!0),r(p,{class:"mt-4",for:"owner",value:"Owner"}),r(x,{onKeyup:m(y,["enter"]),id:"owner",type:"text",class:"mt-1 block w-full",modelValue:o(c).owner,"onUpdate:modelValue":t[10]||(t[10]=s=>o(c).owner=s)},null,8,["modelValue"]),l.errors.owner?(u(),d("span",Ue,n(l.errors.owner),1)):b("",!0),r(p,{class:"mt-4",for:"address",value:"Address"}),r(x,{onKeyup:m(y,["enter"]),id:"address",type:"text",class:"mt-1 block w-full",modelValue:o(c).address,"onUpdate:modelValue":t[11]||(t[11]=s=>o(c).address=s)},null,8,["modelValue"]),l.errors.address?(u(),d("span",$e,n(l.errors.address),1)):b("",!0),r(p,{class:"mt-4",for:"contact",value:"Contact no."}),r(x,{onKeyup:m(y,["enter"]),id:"contact",type:"text",class:"mt-1 block w-full",modelValue:o(c).contact,"onUpdate:modelValue":t[12]||(t[12]=s=>o(c).contact=s)},null,8,["modelValue"]),l.errors.contact?(u(),d("span",je,n(l.errors.contact),1)):b("",!0),e("div",Ke,[e("button",{onClick:t[13]||(t[13]=s=>A.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),e("button",{onClick:y,disabled:o(c).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(o(c).processing?"Processing":"Submit"),9,Le)])])]),_:1},8,["show"]),r(_,{show:S.value,onClose:t[17]||(t[17]=s=>S.value=!1)},{default:g(()=>[e("div",Ae,[r(p,{for:"name",value:"Block name"}),r(x,{onKeyup:m(O,["enter"]),id:"name",type:"text",class:"mt-1 block w-full",modelValue:o(f).name,"onUpdate:modelValue":t[14]||(t[14]=s=>o(f).name=s)},null,8,["modelValue"]),l.errors.name?(u(),d("span",Oe,n(l.errors.name),1)):b("",!0),r(p,{class:"mt-4",for:"block_number",value:"Block number"}),r(x,{onKeyup:m(O,["enter"]),id:"block_number",type:"text",class:"mt-1 block w-full",modelValue:o(f).block_number,"onUpdate:modelValue":t[15]||(t[15]=s=>o(f).block_number=s)},null,8,["modelValue"]),l.errors.block_number?(u(),d("span",Ne,n(l.errors.block_number),1)):b("",!0),e("div",Be,[e("button",{onClick:t[16]||(t[16]=s=>S.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),e("button",{onClick:O,disabled:o(f).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(o(f).processing?"Processing":"Submit"),9,Fe)])])]),_:1},8,["show"]),r(_,{show:U.value,onClose:t[20]||(t[20]=s=>U.value=!1)},{default:g(()=>[e("div",Ie,[e("div",Te,[t[42]||(t[42]=e("i",{class:"bx bx-info-circle text-7xl text-red-500"},null,-1)),e("p",null,[t[40]||(t[40]=L("Delete the block ")),e("b",null,n(l.block.name),1),t[41]||(t[41]=L("?"))])]),e("div",De,[e("button",{onClick:t[18]||(t[18]=s=>o(B).delete(i.route("blocks.destroy",l.block))),class:"text-white bg-red-500 hover:bg-red-700 active:bg-red-900 rounded-md py-1 ease-in-out duration-200"},"Delete"),e("button",{onClick:t[19]||(t[19]=s=>U.value=!1),class:"border dark:border-gray-100 border-black hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-800 py-1 rounded-md ease-in-out duration-200"},"Cancel")])])]),_:1},8,["show"]),r(_,{show:$.value,onClose:t[30]||(t[30]=s=>$.value=!1)},{default:g(()=>[e("div",Pe,[r(p,{for:"type",value:"Type"}),r(x,{list:"lot_types",onKeyup:m(k,["enter"]),id:"type",type:"text",class:"mt-1 block w-full",modelValue:o(a).type,"onUpdate:modelValue":t[21]||(t[21]=s=>o(a).type=s)},null,8,["modelValue"]),l.errors.type?(u(),d("span",Me,n(l.errors.type),1)):b("",!0),r(p,{class:"mt-4",for:"lot_number",value:"Lot number"}),r(x,{onKeyup:m(k,["enter"]),id:"lot_number",type:"text",class:"mt-1 block w-full",modelValue:o(a).lot_number,"onUpdate:modelValue":t[22]||(t[22]=s=>o(a).lot_number=s)},null,8,["modelValue"]),l.errors.lot_number?(u(),d("span",Ee,n(l.errors.lot_number),1)):b("",!0),r(p,{class:"mt-4",for:"status",value:"Status"}),r(F,{onKeyup:m(k,["enter"]),id:"status",type:"number",class:"mt-1 block w-full",modelValue:o(a).status,"onUpdate:modelValue":t[23]||(t[23]=s=>o(a).status=s)},{default:g(()=>t[43]||(t[43]=[e("option",{value:null},"Available",-1),e("option",{value:"Installment"},"Installment",-1),e("option",{value:"Sold"},"Sold",-1)])),_:1},8,["modelValue"]),l.errors.status?(u(),d("span",ze,n(l.errors.status),1)):b("",!0),r(p,{class:"mt-4",for:"price",value:"Price"}),r(x,{onKeyup:m(k,["enter"]),id:"price",type:"number",class:"mt-1 block w-full",modelValue:o(a).price,"onUpdate:modelValue":t[24]||(t[24]=s=>o(a).price=s)},null,8,["modelValue"]),l.errors.price?(u(),d("span",qe,n(l.errors.price),1)):b("",!0),r(p,{class:"mt-4",for:"contract_number",value:"Contract number"}),r(x,{onKeyup:m(k,["enter"]),id:"contract_number",type:"text",class:"mt-1 block w-full",modelValue:o(a).contract_number,"onUpdate:modelValue":t[25]||(t[25]=s=>o(a).contract_number=s)},null,8,["modelValue"]),l.errors.contract_number?(u(),d("span",Ze,n(l.errors.contract_number),1)):b("",!0),r(p,{class:"mt-4",for:"owner",value:"Owner"}),r(x,{onKeyup:m(k,["enter"]),id:"owner",type:"text",class:"mt-1 block w-full",modelValue:o(a).owner,"onUpdate:modelValue":t[26]||(t[26]=s=>o(a).owner=s)},null,8,["modelValue"]),l.errors.owner?(u(),d("span",Ge,n(l.errors.owner),1)):b("",!0),r(p,{class:"mt-4",for:"address",value:"Address"}),r(x,{onKeyup:m(k,["enter"]),id:"address",type:"text",class:"mt-1 block w-full",modelValue:o(a).address,"onUpdate:modelValue":t[27]||(t[27]=s=>o(a).address=s)},null,8,["modelValue"]),l.errors.address?(u(),d("span",He,n(l.errors.address),1)):b("",!0),r(p,{class:"mt-4",for:"contact",value:"Contact no."}),r(x,{onKeyup:m(k,["enter"]),id:"contact",type:"text",class:"mt-1 block w-full",modelValue:o(a).contact,"onUpdate:modelValue":t[28]||(t[28]=s=>o(a).contact=s)},null,8,["modelValue"]),l.errors.contact?(u(),d("span",Je,n(l.errors.contact),1)):b("",!0),e("div",Qe,[e("button",{onClick:t[29]||(t[29]=s=>$.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),e("button",{onClick:k,disabled:o(a).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(o(a).processing?"Processing":"Submit"),9,Re)])])]),_:1},8,["show"]),r(_,{show:h.value,onClose:t[33]||(t[33]=s=>h.value=!1)},{default:g(()=>[e("div",We,[e("div",Xe,[t[46]||(t[46]=e("i",{class:"bx bx-info-circle text-7xl text-red-500"},null,-1)),e("p",null,[t[44]||(t[44]=L("Delete lot number ")),e("b",null,n(j.value.lot_number),1),t[45]||(t[45]=L("?"))])]),e("div",Ye,[e("button",{onClick:t[31]||(t[31]=s=>o(B).delete(i.route("lots.destroy",j.value),{onSuccess:()=>{j.value=null,h.value=!1}})),class:"text-white bg-red-500 hover:bg-red-700 active:bg-red-900 rounded-md py-1 ease-in-out duration-200"},"Delete"),e("button",{onClick:t[32]||(t[32]=s=>h.value=!1),class:"border dark:border-gray-100 border-black hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-800 py-1 rounded-md ease-in-out duration-200"},"Cancel")])])]),_:1},8,["show"]),e("datalist",et,[(u(!0),d(C,null,K(l.lot_types,s=>(u(),d("option",{value:s},n(s),9,tt))),256))])],64))}};export{nt as default};
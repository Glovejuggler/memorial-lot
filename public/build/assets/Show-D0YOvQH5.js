import{k as p,T as K,f as a,a as s,u as r,b as t,t as n,F as U,p as P,g as b,w,o as i,Z as M,n as E,s as v,d as S,q as D}from"./app-BciNWwhk.js";import{_ as y}from"./Modal-B4uMp_ag.js";import{_ as x,a as k}from"./TextInput-Cymvzqkq.js";const A={class:"py-8"},T={class:"max-w-7xl mx-auto px-6 lg:px-8"},q={class:"bg-white dark:bg-gray-800 p-6 rounded-md dark:text-white border dark:border-gray-700 shadow-sm"},z={class:"text-3xl font-bold mb-4"},Z={class:"text-sm"},G={class:"text-sm"},H={class:"flex mt-4 space-x-2"},I={class:"py-4"},J={key:0,class:"grid lg:grid-cols-4 grid-cols-1 gap-4"},Q={key:0},R={class:"absolute bottom-4 right-4 space-x-2 flex text-white"},W=["onClick"],X=["onClick"],Y={class:"p-4 dark:text-white"},ee={key:0,class:"text-sm text-red-500"},te={key:1,class:"text-sm text-red-500 mt-0"},oe={key:2,class:"text-sm text-red-500 mt-0"},le={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},re=["disabled"],se={class:"p-4 dark:text-white"},ne={key:0,class:"text-sm text-red-500"},de={key:1,class:"text-sm text-red-500 mt-0"},ue={key:2,class:"text-sm text-red-500 mt-0"},ae={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},ie=["disabled"],be={class:"p-4 dark:text-white"},me={class:"flex justify-center items-center flex-col"},ce={class:"grid grid-cols-2 gap-2 mt-6"},ve={class:"p-4 dark:text-white"},xe={key:0,class:"text-sm text-red-500"},ke={key:1,class:"text-sm text-red-500 mt-0"},ge={key:2,class:"text-sm text-red-500 mt-0"},pe={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},fe=["disabled"],we={class:"p-4 dark:text-white"},ye={class:"flex justify-center items-center flex-col"},he={class:"grid grid-cols-2 gap-2 mt-6"},_e={__name:"Show",props:{block:Object,errors:Object,lots:Object},setup(l){const g=l,B=p(!1),h=p(!1),V=p(!1),C=p(!1),f=p(!1),m=K({name:g.block.name,control_number:g.block.control_number,block_number:g.block.block_number}),c=K({block_id:g.block.id,lot_number:"",price:"",owner:""}),u=K({block_id:g.block.id,lot_number:"",price:"",owner:"",id:""}),$=()=>{c.post(route("lots.store"),{preserveState:d=>Object.keys(d.props.errors).length>0,preserveScroll:!0})},_=()=>{m.put(route("blocks.update",g.block),{preserveScroll:!0,preserveState:d=>Object.keys(d.props.errors).length>0})},O=d=>{u.id=d.id,u.lot_number=d.lot_number,u.price=d.price,u.owner=d.owner,u.block_id=g.block.id,C.value=!0},L=()=>{u.put(route("lots.update",u.id),{preserveScroll:!0,preserveState:d=>Object.keys(d.props.errors).length>0,onSuccess:d=>{Object.keys(d.props.errors).length===1&&O.reset()}})},j=p(null),F=d=>{j.value=d,f.value=!0};return(d,e)=>(i(),a(U,null,[s(r(M),{title:l.block.name},null,8,["title"]),t("div",A,[t("div",T,[t("div",q,[t("p",z,n(l.block.name),1),t("p",Z,"Control number: "+n(l.block.control_number),1),t("p",G,"Block number: "+n(l.block.block_number),1),t("div",H,[t("button",{onClick:e[0]||(e[0]=o=>h.value=!0),class:"rounded-md text-white px-4 text-sm bg-green-500 hover:bg-green-700 active:bg-green-900 ease-in-out duration-200"},"Edit"),t("button",{onClick:e[1]||(e[1]=o=>V.value=!0),class:"rounded-md text-white px-4 text-sm bg-red-500 hover:bg-red-700 active:bg-red-900 ease-in-out duration-200"},"Delete")])]),t("div",I,[e[23]||(e[23]=t("span",{class:"dark:text-white text-lg font-bold mr-4"},"Lots",-1)),t("button",{onClick:e[2]||(e[2]=o=>B.value=!0),class:"bg-blue-500 px-4 text-sm rounded-md text-white hover:bg-blue-700 active:bg-blue-800 ease-in-out duration-200"},"Add new")]),l.lots.length?(i(),a("div",J,[(i(!0),a(U,null,P(l.lots,o=>(i(),a("div",{class:E(["relative w-full lg:aspect-video rounded-md bg-white dark:bg-gray-800 p-4 dark:text-white flex flex-col cursor-pointer ease-in-out duration-200 border",o.owner?"border-blue-500":"border-green-500"])},[t("span",null,"Lot number: "+n(o.lot_number),1),t("span",null,"Price: "+n(Number(o.price).toAmountFormat()),1),o.owner?(i(),a("span",Q,"Owner: "+n(o.owner),1)):b("",!0),t("div",R,[t("i",{onClick:N=>O(o),class:"rounded-full bg-green-500 hover:bg-green-700 active:bg-green-900 duration-200 ease-in-out h-10 w-10 bx bx-edit inline-flex justify-center items-center"},null,8,W),t("i",{onClick:N=>F(o),class:"rounded-full bg-red-500 hover:bg-red-700 active:bg-red-900 duration-200 ease-in-out h-10 w-10 bx bx-trash inline-flex justify-center items-center"},null,8,X)])],2))),256))])):b("",!0)])]),s(y,{show:B.value,closeable:!1},{default:w(()=>[t("div",Y,[s(x,{for:"lot_number",value:"Lot number"}),s(k,{onKeyup:v($,["enter"]),id:"lot_number",type:"text",class:"mt-1 block w-full",modelValue:r(c).lot_number,"onUpdate:modelValue":e[3]||(e[3]=o=>r(c).lot_number=o)},null,8,["modelValue"]),l.errors.lot_number?(i(),a("span",ee,n(l.errors.lot_number),1)):b("",!0),s(x,{class:"mt-4",for:"price",value:"Price"}),s(k,{onKeyup:v($,["enter"]),id:"price",type:"number",class:"mt-1 block w-full",modelValue:r(c).price,"onUpdate:modelValue":e[4]||(e[4]=o=>r(c).price=o)},null,8,["modelValue"]),l.errors.price?(i(),a("span",te,n(l.errors.price),1)):b("",!0),s(x,{class:"mt-4",for:"owner",value:"Owner"}),s(k,{onKeyup:v($,["enter"]),id:"owner",type:"text",class:"mt-1 block w-full",modelValue:r(c).owner,"onUpdate:modelValue":e[5]||(e[5]=o=>r(c).owner=o)},null,8,["modelValue"]),l.errors.owner?(i(),a("span",oe,n(l.errors.owner),1)):b("",!0),t("div",le,[t("button",{onClick:e[6]||(e[6]=o=>B.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),t("button",{onClick:$,disabled:r(c).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(r(c).processing?"Processing":"Submit"),9,re)])])]),_:1},8,["show"]),s(y,{show:h.value,onClose:e[11]||(e[11]=o=>h.value=!1)},{default:w(()=>[t("div",se,[s(x,{for:"name",value:"Block name"}),s(k,{onKeyup:v(_,["enter"]),id:"name",type:"text",class:"mt-1 block w-full",modelValue:r(m).name,"onUpdate:modelValue":e[7]||(e[7]=o=>r(m).name=o)},null,8,["modelValue"]),l.errors.name?(i(),a("span",ne,n(l.errors.name),1)):b("",!0),s(x,{class:"mt-4",for:"control_number",value:"Control number"}),s(k,{onKeyup:v(_,["enter"]),id:"control_number",type:"text",class:"mt-1 block w-full",modelValue:r(m).control_number,"onUpdate:modelValue":e[8]||(e[8]=o=>r(m).control_number=o)},null,8,["modelValue"]),l.errors.control_number?(i(),a("span",de,n(l.errors.control_number),1)):b("",!0),s(x,{class:"mt-4",for:"block_number",value:"Block number"}),s(k,{onKeyup:v(_,["enter"]),id:"block_number",type:"text",class:"mt-1 block w-full",modelValue:r(m).block_number,"onUpdate:modelValue":e[9]||(e[9]=o=>r(m).block_number=o)},null,8,["modelValue"]),l.errors.block_number?(i(),a("span",ue,n(l.errors.block_number),1)):b("",!0),t("div",ae,[t("button",{onClick:e[10]||(e[10]=o=>h.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),t("button",{onClick:_,disabled:r(m).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(r(m).processing?"Processing":"Submit"),9,ie)])])]),_:1},8,["show"]),s(y,{show:V.value,onClose:e[14]||(e[14]=o=>V.value=!1)},{default:w(()=>[t("div",be,[t("div",me,[e[26]||(e[26]=t("i",{class:"bx bx-info-circle text-7xl text-red-500"},null,-1)),t("p",null,[e[24]||(e[24]=S("Delete the block ")),t("b",null,n(l.block.name),1),e[25]||(e[25]=S("?"))])]),t("div",ce,[t("button",{onClick:e[12]||(e[12]=o=>r(D).delete(d.route("blocks.destroy",l.block))),class:"text-white bg-red-500 hover:bg-red-700 active:bg-red-900 rounded-md py-1 ease-in-out duration-200"},"Delete"),t("button",{onClick:e[13]||(e[13]=o=>V.value=!1),class:"border dark:border-gray-100 border-black hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-800 py-1 rounded-md ease-in-out duration-200"},"Cancel")])])]),_:1},8,["show"]),s(y,{show:C.value,onClose:e[19]||(e[19]=o=>C.value=!1)},{default:w(()=>[t("div",ve,[s(x,{for:"lot_number",value:"Lot number"}),s(k,{onKeyup:v(L,["enter"]),id:"lot_number",type:"text",class:"mt-1 block w-full",modelValue:r(u).lot_number,"onUpdate:modelValue":e[15]||(e[15]=o=>r(u).lot_number=o)},null,8,["modelValue"]),l.errors.lot_number?(i(),a("span",xe,n(l.errors.lot_number),1)):b("",!0),s(x,{class:"mt-4",for:"price",value:"Price"}),s(k,{onKeyup:v(L,["enter"]),id:"price",type:"number",class:"mt-1 block w-full",modelValue:r(u).price,"onUpdate:modelValue":e[16]||(e[16]=o=>r(u).price=o)},null,8,["modelValue"]),l.errors.price?(i(),a("span",ke,n(l.errors.price),1)):b("",!0),s(x,{class:"mt-4",for:"owner",value:"Owner"}),s(k,{onKeyup:v(L,["enter"]),id:"owner",type:"text",class:"mt-1 block w-full",modelValue:r(u).owner,"onUpdate:modelValue":e[17]||(e[17]=o=>r(u).owner=o)},null,8,["modelValue"]),l.errors.owner?(i(),a("span",ge,n(l.errors.owner),1)):b("",!0),t("div",pe,[t("button",{onClick:e[18]||(e[18]=o=>C.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),t("button",{onClick:L,disabled:r(u).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},n(r(u).processing?"Processing":"Submit"),9,fe)])])]),_:1},8,["show"]),s(y,{show:f.value,onClose:e[22]||(e[22]=o=>f.value=!1)},{default:w(()=>[t("div",we,[t("div",ye,[e[29]||(e[29]=t("i",{class:"bx bx-info-circle text-7xl text-red-500"},null,-1)),t("p",null,[e[27]||(e[27]=S("Delete lot number ")),t("b",null,n(j.value.lot_number),1),e[28]||(e[28]=S("?"))])]),t("div",he,[t("button",{onClick:e[20]||(e[20]=o=>r(D).delete(d.route("lots.destroy",j.value),{onSuccess:()=>{j.value=null,f.value=!1}})),class:"text-white bg-red-500 hover:bg-red-700 active:bg-red-900 rounded-md py-1 ease-in-out duration-200"},"Delete"),t("button",{onClick:e[21]||(e[21]=o=>f.value=!1),class:"border dark:border-gray-100 border-black hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-800 py-1 rounded-md ease-in-out duration-200"},"Cancel")])])]),_:1},8,["show"])],64))}};export{_e as default};

import{j as b,T as w,k as V,f as n,a as d,u as l,b as e,l as B,F as y,m as C,w as N,o as c,Z as j,p as k,t as o,q as _,g as f}from"./app-BzsAMZal.js";import{_ as S}from"./Modal-B6iVOVRa.js";import{a as x,_ as h}from"./TextInput-DwZsv0QV.js";const $={class:"pt-4 pb-8"},L={class:"max-w-screen-2xl mx-auto px-6 lg:px-8"},F={class:"lg:flex justify-between items-center sticky top-0 z-50 dark:bg-gray-900 bg-gray-100 py-4"},O={key:0,class:"bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 mt-4 z-10"},K={class:"relative overflow-x-auto rounded-lg"},T={class:"w-full text-sm text-left text-gray-500 dark:text-gray-100"},U=["onClick"],z={scope:"row",class:"px-6 py-4 font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap"},A={class:"px-6 py-4"},I={class:"px-6 py-4"},M={class:"px-6 py-4"},q={class:"px-6 py-4"},D={class:"px-6 py-4"},E={key:1,class:"flex justify-center mt-12 dark:text-gray-400 text-gray-700"},P={class:"p-4 dark:text-white"},Z={key:0,class:"text-sm text-red-500"},G={key:1,class:"text-sm text-red-500 mt-0"},H={class:"mt-6 flex flex-col-reverse md:flex-row justify-end md:space-x-6"},J=["disabled"],Y={__name:"Index",props:{blocks:Object,filters:Object,errors:Object},setup(a){const v=a,i=b(!1),g=b(null),r=w({name:"",block_number:""}),m=b({search:v.filters.search});V(m,u=>{k.get(route("blocks.index"),u,{preserveState:!0,preserveScroll:!0,replace:!0})},{deep:!0});const p=()=>{r.post(route("blocks.store"),{preserveState:u=>Object.keys(u.props.errors).length>0,preserveScroll:!0})};return(u,t)=>(c(),n(y,null,[d(l(j),{title:"Memorial"}),e("div",$,[e("div",L,[e("div",F,[e("div",null,[t[6]||(t[6]=e("span",{class:"dark:text-white text-lg font-bold mr-4"},"Blocks",-1)),e("button",{onClick:t[0]||(t[0]=()=>{i.value=!0,B(()=>g.value.focus())}),class:"bg-blue-500 px-4 text-sm rounded-md text-white hover:bg-blue-700 active:bg-blue-800 ease-in-out duration-200"},"Add new")]),d(x,{modelValue:m.value.search,"onUpdate:modelValue":t[1]||(t[1]=s=>m.value.search=s),type:"text",class:"lg:w-96 mt-4 lg:mt-0 w-full",placeholder:"Search"},null,8,["modelValue"])]),a.blocks.length?(c(),n("div",O,[e("div",K,[e("table",T,[t[7]||(t[7]=e("thead",{class:"text-xs text-gray-700 dark:text-gray-200 uppercase bg-gray-50 dark:bg-gray-800"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Block Number "),e("th",{scope:"col",class:"px-6 py-3"}," Name "),e("th",{scope:"col",class:"px-6 py-3"}," Sold Lots "),e("th",{scope:"col",class:"px-6 py-3"}," Installment Lots "),e("th",{scope:"col",class:"px-6 py-3"}," Available Lots "),e("th",{scope:"col",class:"px-6 py-3"}," Total Lots ")])],-1)),e("tbody",null,[(c(!0),n(y,null,C(a.blocks,s=>(c(),n("tr",{onClick:Q=>l(k).get(u.route("blocks.show",s)),class:"bg-white dark:bg-gray-800 border-b dark:border-gray-700 last:border-none hover:bg-black/10 cursor-pointer"},[e("th",z,o(s.block_number),1),e("td",A,o(s.name),1),e("td",I,o(s.sold_lots_count),1),e("td",M,o(s.installment_lots_count),1),e("td",q,o(s.lots_count-s.sold_lots_count-s.installment_lots_count),1),e("td",D,o(s.lots_count),1)],8,U))),256))])])])])):(c(),n("div",E,t[8]||(t[8]=[e("span",null,"No data.",-1)])))])]),d(S,{show:i.value,onClose:t[5]||(t[5]=s=>i.value=!1)},{default:N(()=>[e("div",P,[d(h,{for:"name",value:"Block name"}),d(x,{ref_key:"blockName",ref:g,onKeyup:_(p,["enter"]),id:"name",type:"text",class:"mt-1 block w-full",modelValue:l(r).name,"onUpdate:modelValue":t[2]||(t[2]=s=>l(r).name=s)},null,8,["modelValue"]),a.errors.name?(c(),n("span",Z,o(a.errors.name),1)):f("",!0),d(h,{class:"mt-4",for:"block_number",value:"Block number"}),d(x,{onKeyup:_(p,["enter"]),id:"block_number",type:"text",class:"mt-1 block w-full",modelValue:l(r).block_number,"onUpdate:modelValue":t[3]||(t[3]=s=>l(r).block_number=s)},null,8,["modelValue"]),a.errors.block_number?(c(),n("span",G,o(a.errors.block_number),1)):f("",!0),e("div",H,[e("button",{onClick:t[4]||(t[4]=s=>i.value=!1),type:"button",class:"dark:text-white hover:underline md:mt-0 mt-4"},"Cancel"),e("button",{onClick:p,disabled:l(r).processing,class:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 ease-in-out duration-200 disabled:opacity-20"},o(l(r).processing?"Processing":"Submit"),9,J)])])]),_:1},8,["show"])],64))}};export{Y as default};
import{B as t,j as d,s as n,x as i,C as l,o as c,f}from"./app-BnLBjrV2.js";const g={__name:"TextInput",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(a,{expose:u}){const o=t(a,"modelValue"),e=d(null);return n(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),u({focus:()=>e.value.focus()}),(m,r)=>i((c(),f("input",{class:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm","onUpdate:modelValue":r[0]||(r[0]=s=>o.value=s),ref_key:"input",ref:e},null,512)),[[l,o.value]])}};export{g as _};

import{T as c,h as g,c as y,w as o,o as a,a as i,u as t,Z as p,b as r,f as k,g as x,d as n,n as v,i as b,e as h}from"./app-BnLBjrV2.js";import{G as w}from"./GuestLayout-Ck0kL_oh.js";import{P as V}from"./PrimaryButton-Dezpv6dV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},_={class:"mt-4 flex items-center justify-between"},S={__name:"VerifyEmail",props:{status:{type:String}},setup(d){const u=d,s=c({}),l=()=>{s.post(route("verification.send"))},f=g(()=>u.status==="verification-link-sent");return(m,e)=>(a(),y(w,null,{default:o(()=>[i(t(p),{title:"Email Verification"}),e[2]||(e[2]=r("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1)),f.value?(a(),k("div",B," A new verification link has been sent to the email address you provided during registration. ")):x("",!0),r("form",{onSubmit:h(l,["prevent"])},[r("div",_,[i(V,{class:v({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>e[0]||(e[0]=[n(" Resend Verification Email ")])),_:1},8,["class","disabled"]),i(t(b),{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:o(()=>e[1]||(e[1]=[n("Log Out")])),_:1},8,["href"])])],32)]),_:1}))}};export{S as default};

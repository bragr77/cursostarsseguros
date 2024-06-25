import{o as s,f as r,a,r as p,i as m,T as w,b as o,k as t,w as f,F as n,Z as C,j as l,g as v,n as $,p as V}from"./app-YHqRQc2P.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as I}from"./AuthenticationCardLogo-Dv3plVLY.js";import{_ as g}from"./InputError-C4kIsWG8.js";import{_ as h}from"./InputLabel-BNAj6nCE.js";import{_ as U}from"./PrimaryButton-BxCBF7Jo.js";import{_ as x}from"./TextInput-BNcqHvwz.js";const j={},B={class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},F={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"};function N(d,c){return s(),r("div",B,[a("div",null,[p(d.$slots,"logo")]),a("div",F,[p(d.$slots,"default")])])}const P=T(j,[["render",N]]),R={class:"mb-4 text-sm text-gray-600"},S={key:0},z={key:1},A={class:"flex items-center justify-end mt-4"},J={__name:"TwoFactorChallenge",setup(d){const c=m(!1),e=w({code:"",recovery_code:""}),_=m(null),y=m(null),b=async()=>{c.value^=!0,await V(),c.value?(_.value.focus(),e.code=""):(y.value.focus(),e.recovery_code="")},k=()=>{e.post(route("two-factor.login"))};return(E,i)=>(s(),r(n,null,[o(t(C),{title:"Two-factor Confirmation"}),o(P,null,{logo:f(()=>[o(I)]),default:f(()=>[a("div",R,[c.value?(s(),r(n,{key:1},[l(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(s(),r(n,{key:0},[l(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),a("form",{onSubmit:v(k,["prevent"])},[c.value?(s(),r("div",z,[o(h,{for:"recovery_code",value:"Recovery Code"}),o(x,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:_,modelValue:t(e).recovery_code,"onUpdate:modelValue":i[1]||(i[1]=u=>t(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(g,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(s(),r("div",S,[o(h,{for:"code",value:"Code"}),o(x,{id:"code",ref_key:"codeInput",ref:y,modelValue:t(e).code,"onUpdate:modelValue":i[0]||(i[0]=u=>t(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(g,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),a("div",A,[a("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:v(b,["prevent"])},[c.value?(s(),r(n,{key:1},[l(" Use an authentication code ")],64)):(s(),r(n,{key:0},[l(" Use a recovery code ")],64))]),o(U,{class:$(["ms-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:f(()=>[l(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{J as default};
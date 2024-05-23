import{T as c,o as d,c as m,w as t,b as a,k as e,Z as n,a as s,g as f,j as p,n as u}from"./app-CA1IZKiw.js";import{_}from"./GuestLayout-B76hE_ng.js";import{_ as w}from"./InputError-DKnlr5fp.js";import{_ as h}from"./InputLabel-DICwXZtU.js";import{_ as g}from"./PrimaryButton-q-AlXiqh.js";import{_ as x}from"./TextInput-DfQe8Mq6.js";const b={class:"flex flex-col overflow-y-auto md:flex-row"},v=s("div",{class:"h-32 md:h-auto md:w-1/2"},[s("img",{"aria-hidden":"true",class:"object-cover w-full h-full",src:"{{ asset('images/forgot-password-office.jpeg') }}",alt:"Office"})],-1),y={class:"flex items-center justify-center p-6 sm:p-12 md:w-1/2"},V={class:"w-full"},j=s("h1",{class:"mb-4 font-semibold text-gray-700 dark:text-gray-200"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),k={class:"flex justify-end mt-4"},F={__name:"ConfirmPassword",setup(C){const o=c({password:""}),i=()=>{o.post(route("password.confirm"),{onFinish:()=>o.reset()})};return($,r)=>(d(),m(_,null,{default:t(()=>[a(e(n),{title:"Confirm Password"}),s("div",b,[v,s("div",y,[s("div",V,[j,s("form",{onSubmit:f(i,["prevent"])},[s("div",null,[a(h,{for:"password",value:"Password"}),a(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(o).password,"onUpdate:modelValue":r[0]||(r[0]=l=>e(o).password=l),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(w,{class:"mt-2",message:e(o).errors.password},null,8,["message"])]),s("div",k,[a(g,{class:u(["ml-4",{"opacity-25":e(o).processing}]),disabled:e(o).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],32)])])])]),_:1}))}};export{F as default};
import{T as g,o as m,c as d,w as i,b as a,j as t,Z as h,a as e,e as x,t as b,g as n,f as v,l as y,i as c,n as k}from"./app-DYcZRAu5.js";import{_ as V}from"./Checkbox-quZWnBgl.js";import{_ as $}from"./GuestLayout-Ch_JH4Io.js";import{_ as u,a as f}from"./TextInput-CydjnDzr.js";import{_}from"./InputLabel-iDiG-jyL.js";import{_ as j}from"./PrimaryButton-B3DGK99j.js";const B={class:"flex flex-col overflow-y-auto md:flex-row"},L=e("div",{class:"h-32 md:h-auto md:w-1/2"},[e("img",{"aria-hidden":"true",class:"object-cover w-full h-full",src:"/images/login-office.jpeg",alt:"Office"})],-1),N={class:"flex items-center justify-center p-6 sm:p-12 md:w-1/2"},q={class:"w-full"},C=e("h1",{class:"mb-4 text-xl font-semibold text-gray-700"},"Login",-1),P={key:0,class:"mb-4 text-sm font-medium text-green-600"},R={class:"mt-4"},S={class:"mt-4"},U={class:"block mt-4"},E={class:"flex items-center"},F=e("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),T={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(r){const s=g({email:"",password:"",remember:!1}),p=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(w,o)=>(m(),d($,null,{default:i(()=>[a(t(h),{title:"Log in"}),e("div",B,[L,e("div",N,[e("div",q,[C,r.status?(m(),x("div",P,b(r.status),1)):n("",!0),e("form",{onSubmit:v(p,["prevent"])},[e("div",R,[a(_,{for:"email",value:"Email"}),a(u,{id:"email",type:"email",class:"block w-full mt-1",modelValue:t(s).email,"onUpdate:modelValue":o[0]||(o[0]=l=>t(s).email=l),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(f,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),e("div",S,[a(_,{for:"password",value:"Password"}),a(u,{id:"password",type:"password",class:"block w-full mt-1",modelValue:t(s).password,"onUpdate:modelValue":o[1]||(o[1]=l=>t(s).password=l),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(f,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),e("div",U,[e("label",E,[a(V,{name:"remember",checked:t(s).remember,"onUpdate:checked":o[2]||(o[2]=l=>t(s).remember=l)},null,8,["checked"]),F])]),e("div",T,[r.canResetPassword?(m(),d(t(y),{key:0,href:w.route("password.request"),class:"text-sm text-gray-600 underline hover:text-gray-900"},{default:i(()=>[c(" Forgot your password? ")]),_:1},8,["href"])):n("",!0),a(j,{class:k(["ml-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:i(()=>[c(" Log in ")]),_:1},8,["class","disabled"])])],32)])])])]),_:1}))}};export{G as default};
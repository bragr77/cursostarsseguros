import{T as h,o as i,f as n,b as d,k as s,a as o,g as v,e as c,q as m,h as _,F as b,Z as w,z as g,A as y}from"./app-2ECKy3HX.js";import{_ as f}from"./InputError-IvN62Rde.js";import{W as x,s as V}from"./inputmask.esm-BL_00Lzo.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const l=r=>(g("data-v-0d2d74a3"),r=r(),y(),r),U={class:"container mt-5"},E={class:"row justify-content-center"},N={class:"col-lg-7"},C={class:"card"},M=l(()=>o("div",{class:"card-header"},[o("div",{class:"d-flex justify-content-center"},[o("img",{class:"logo",src:"/images/logo-horizontal.png",alt:""})]),o("h3",{class:"text-center font-weight-light mt-3"},"Registrarse")],-1)),F={class:"card-body"},I={class:"row"},T={class:"col-md-6"},S=l(()=>o("label",{for:"name",class:"form-label"},"Nombre:",-1)),j={key:0},A=l(()=>o("div",{class:"text-errors"}," El campo Nombre es obligatorio ",-1)),B=[A],D={class:"col-md-6"},R=l(()=>o("label",{for:"lastname",class:"form-label"},"Apellido:",-1)),q={key:0},z=l(()=>o("div",{class:"text-errors"}," El campo Apellido es obligatorio ",-1)),W=[z],Z={class:"row mt-3"},$={class:"col-md-6"},G=l(()=>o("label",{for:"fechan",class:"form-label"},"Fecha de Nacimiento:",-1)),H={key:0},J=l(()=>o("div",{class:"text-errors"}," El campo Fecha de Nacimiento es obligatorio ",-1)),K=[J],L={class:"col-md-6"},O=l(()=>o("label",{for:"telefono",class:"form-label"},"Teléfono:",-1)),P={key:0},Q=l(()=>o("div",{class:"text-errors"}," El campo Teléfono es obligatorio ",-1)),X=[Q],Y={class:"row mt-3"},oo={class:""},so=l(()=>o("label",{for:"direccion",class:"form-label"},"Direccion:",-1)),eo={key:0},to=l(()=>o("div",{class:"text-errors"}," El campo Dirección es obligatorio ",-1)),ao=[to],lo={class:"row mt-3"},ro={class:""},io=l(()=>o("label",{for:"email",class:"form-label"},"Email:",-1)),no={class:"row mt-3"},co={class:"col-md-6"},mo=l(()=>o("label",{for:"password",class:"form-label"},"Contraseña:",-1)),_o={class:"col-md-6"},fo=l(()=>o("label",{for:"password_confirmation",class:"form-label"},"Confirmar Contraseña:",-1)),po=l(()=>o("div",{class:"mt-4 mb-0"},[o("div",{class:"d-grid"},[o("button",{type:"submit",class:"btn btn-primary btn-block"},"Registrarse")])],-1)),uo={class:"card-footer text-center py-3"},ho={class:"small"},vo=["href"],bo={__name:"Create",props:["errors","user"],setup(r){const e=h({name:"",lastname:"",fechan:"",telefono:"",direccion:"",role_id:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{e.post(route("registro.store"),{onFinish:()=>e.reset("password","password_confirmation")})};return(u,t)=>(i(),n(b,null,[d(s(w),{title:"Registro"}),o("div",U,[o("div",E,[o("div",N,[o("div",C,[M,o("div",F,[o("form",{onSubmit:v(p,["prevent"])},[o("div",I,[o("div",T,[S,c(o("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[0]||(t[0]=a=>s(e).name=a),autofocus:"",autocomplete:"name"},null,512),[[m,s(e).name]]),r.errors.name?(i(),n("div",j,B)):_("",!0)]),o("div",D,[R,c(o("input",{type:"text",class:"form-control",id:"lastname","onUpdate:modelValue":t[1]||(t[1]=a=>s(e).lastname=a)},null,512),[[m,s(e).lastname]]),r.errors.name?(i(),n("div",q,W)):_("",!0)])]),o("div",Z,[o("div",$,[G,d(s(x),{class:"vuejs3-datepicker-form-control",language:"es",format:"dd/MMMM/yyyy","full-month-name":!0,id:"fechan",modelValue:s(e).fechan,"onUpdate:modelValue":t[2]||(t[2]=a=>s(e).fechan=a)},null,8,["modelValue"]),r.errors.fechan?(i(),n("div",H,K)):_("",!0)]),o("div",L,[O,d(s(V),{type:"text",class:"form-control",id:"telefono",modelValue:s(e).telefono,"onUpdate:modelValue":t[3]||(t[3]=a=>s(e).telefono=a),mask:"(999) 999-9999",placeholder:"(000) 000-0000",autocomplete:"off"},null,8,["modelValue"]),r.errors.telefono?(i(),n("div",P,X)):_("",!0)])]),o("div",Y,[o("div",oo,[so,c(o("input",{type:"text",class:"form-control",id:"direccion","onUpdate:modelValue":t[4]||(t[4]=a=>s(e).direccion=a)},null,512),[[m,s(e).direccion]]),r.errors.direccion?(i(),n("div",eo,ao)):_("",!0)])]),o("div",lo,[o("div",ro,[io,c(o("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":t[5]||(t[5]=a=>s(e).email=a),autocomplete:"username"},null,512),[[m,s(e).email]]),d(f,{class:"text-errors",message:s(e).errors.email},null,8,["message"])])]),o("div",no,[o("div",co,[mo,c(o("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":t[6]||(t[6]=a=>s(e).password=a),autocomplete:"new-password"},null,512),[[m,s(e).password]]),d(f,{class:"text-errors",message:s(e).errors.password},null,8,["message"])]),o("div",_o,[fo,c(o("input",{type:"password",class:"form-control",id:"password_confirmation","onUpdate:modelValue":t[7]||(t[7]=a=>s(e).password_confirmation=a),autocomplete:"new-password"},null,512),[[m,s(e).password_confirmation]]),d(f,{class:"text-errors",message:s(e).errors.password_confirmation},null,8,["message"])])]),po],32)]),o("div",uo,[o("div",ho,[o("a",{href:u.route("login")},"¿Tienes una cuenta? - Inicia sesión aquí",8,vo)])])])])])])],64))}},Vo=k(bo,[["__scopeId","data-v-0d2d74a3"]]);export{Vo as default};

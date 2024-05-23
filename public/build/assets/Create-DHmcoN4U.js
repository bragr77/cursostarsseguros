import{T as f,o as a,f as i,b as n,k as o,w as u,F as h,Z as p,a as e,g as b,e as c,q as m,h as d,j as v}from"./app-CA1IZKiw.js";import{_ as y}from"./AuthenticatedLayout-CSrwiW5N.js";import{_ as g}from"./InputError-DKnlr5fp.js";import{W as x,s as V}from"./inputmask.esm-CsTf4gRY.js";import"./ResponsiveNavLink-CKIHVAZM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={class:"container-fluid p-4"},w={class:"card"},N=e("div",{class:"card-header bg-primary-subtle"},[e("h5",{class:"mt-2"},[e("i",{class:"fa-solid fa-user-plus text-primary"}),v(" Agregar Cliente ")])],-1),E={class:"card-body"},M={class:"row"},U={class:"col-md-6"},F=e("label",{for:"name",class:"form-label"},"Nombre:",-1),T={key:0},A=e("div",{class:"text-errors"}," El campo Nombre es obligatorio ",-1),C=[A],B={class:"col-md-6"},D=e("label",{for:"lastname",class:"form-label"},"Apellido:",-1),j={key:0},W=e("div",{class:"text-errors"}," El campo Apellido es obligatorio ",-1),$=[W],q={class:"row mt-3"},R={class:"col-md-6"},S=e("label",{for:"fechan",class:"form-label"},"Fecha de Nacimiento:",-1),Z={key:0},z=e("div",{class:"text-errors"}," El campo Fecha de Nacimiento es obligatorio ",-1),G=[z],H={class:"col-md-6"},I=e("label",{for:"telefono",class:"form-label"},"Teléfono:",-1),J={key:0},K=e("div",{class:"text-errors"}," El campo Teléfono es obligatorio ",-1),L=[K],O={class:"row mt-3"},P={class:""},Q=e("label",{for:"direccion",class:"form-label"},"Direccion:",-1),X={key:0},Y=e("div",{class:"text-errors"}," El campo Dirección es obligatorio ",-1),ee=[Y],oe={class:"row mt-3"},se={class:""},te=e("label",{for:"email",class:"form-label"},"Email:",-1),le=e("div",{class:"mt-4 mb-0"},[e("div",{class:"d-grid"},[e("button",{type:"submit",class:"btn btn-primary btn-block"},"Registrarse")])],-1),_e={__name:"Create",props:["errors","user"],setup(r){const s=f({name:"",lastname:"",fechan:"",telefono:"",direccion:"",role_id:"",email:""}),_=()=>{s.post(route("clientes.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(ae,t)=>(a(),i(h,null,[n(o(p),{title:"Agregar"}),n(y,null,{default:u(()=>[e("div",k,[e("div",w,[N,e("div",E,[e("form",{onSubmit:b(_,["prevent"])},[e("div",M,[e("div",U,[F,c(e("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[0]||(t[0]=l=>o(s).name=l),autofocus:"",autocomplete:"name"},null,512),[[m,o(s).name]]),r.errors.name?(a(),i("div",T,C)):d("",!0)]),e("div",B,[D,c(e("input",{type:"text",class:"form-control",id:"lastname","onUpdate:modelValue":t[1]||(t[1]=l=>o(s).lastname=l)},null,512),[[m,o(s).lastname]]),r.errors.name?(a(),i("div",j,$)):d("",!0)])]),e("div",q,[e("div",R,[S,n(o(x),{class:"vuejs3-datepicker-form-control",language:"es",format:"dd/MMMM/yyyy","full-month-name":!0,id:"fechan",modelValue:o(s).fechan,"onUpdate:modelValue":t[2]||(t[2]=l=>o(s).fechan=l)},null,8,["modelValue"]),r.errors.fechan?(a(),i("div",Z,G)):d("",!0)]),e("div",H,[I,n(o(V),{type:"text",class:"form-control",id:"telefono",modelValue:o(s).telefono,"onUpdate:modelValue":t[3]||(t[3]=l=>o(s).telefono=l),mask:"(999) 999-9999",placeholder:"(000) 000-0000",autocomplete:"off"},null,8,["modelValue"]),r.errors.telefono?(a(),i("div",J,L)):d("",!0)])]),e("div",O,[e("div",P,[Q,c(e("input",{type:"text",class:"form-control",id:"direccion","onUpdate:modelValue":t[4]||(t[4]=l=>o(s).direccion=l)},null,512),[[m,o(s).direccion]]),r.errors.direccion?(a(),i("div",X,ee)):d("",!0)])]),e("div",oe,[e("div",se,[te,c(e("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":t[5]||(t[5]=l=>o(s).email=l),autocomplete:"username"},null,512),[[m,o(s).email]]),n(g,{class:"text-errors",message:o(s).errors.email},null,8,["message"])])]),le],32)])])])]),_:1})],64))}};export{_e as default};

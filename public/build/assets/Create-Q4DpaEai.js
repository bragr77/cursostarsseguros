import{o as a,c as g,w as r,a as t,r as p,i as y,T as w,f as c,b as m,k as l,F as f,Z as $,j as x,g as k,e as u,q as v,h,W as V,l as D,t as b}from"./app-F22-eK_S.js";import{_ as S}from"./AuthenticatedLayout-CY9Bk89t.js";import{_ as B}from"./Modal-CVbv1tve.js";import"./ResponsiveNavLink-BTB3uoUx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},E={class:"row"},T=t("div",{class:"container-fluid text-center"},[t("h1",{class:"my-4"},[t("i",{class:"fa-solid fa-spinner fa-spin fa-2xl",style:{color:"#0D6EFD"}})])],-1),M={class:"container-fluid mt-3 text-center"},N={class:"text-gray-900"},F={class:"container-fluid mt-2 text-center"},U={class:"text-gray-600"},W={__name:"LoadingModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(i,{emit:n}){const e=n,d=()=>{e("close")};return(_,o)=>(a(),g(B,{show:i.show,"max-width":i.maxWidth,closeable:i.closeable,onClose:d},{default:r(()=>[t("div",C,[t("div",E,[T,t("div",M,[t("h3",N,[p(_.$slots,"title")])]),t("div",F,[t("div",U,[t("h4",null,[p(_.$slots,"content")])])])])])]),_:3},8,["show","max-width","closeable"]))}},A=t("p",{class:"p-4"}," Espere por favor. ",-1),I={class:"container-fluid p-4"},L={class:"card"},j=t("div",{class:"card-header bg-primary-subtle"},[t("h5",{class:"mt-2"},[t("i",{class:"fa-solid fa-video"}),x(" Agregar Video ")])],-1),q={class:"card-body"},R={class:"row"},Z={class:"col-12 col-md-6"},z=t("label",{for:"name",class:"form-label"},"Título:",-1),G={key:0},H=t("div",{class:"text-errors"}," El campo Título es obligatorio ",-1),J=[H],K={class:"row mt-3"},O={class:"col-12"},P=t("label",{for:"name",class:"form-label"},"Descripción:",-1),Q={key:0},X=t("div",{class:"text-errors"}," El campo Descripcion es obligatorio ",-1),Y=[X],tt={class:"row mt-3"},st={class:"col-12 col-md-4"},ot=t("label",{for:"tema_id",class:"form-label"},"Tema:",-1),et=t("option",{value:null},"Selecciona....",-1),lt=["value"],it={key:0},at=t("p",{class:"text-errors"}," Debe seleccionar un tema ",-1),ct=[at],nt={class:"col-12 col-md-4"},rt={class:"mb-3"},dt=t("label",{for:"archivo",class:"form-label"},"Selecciona el archivo de video:",-1),_t={class:"col-12 col-md-4"},mt={class:"mb-3"},ut=t("label",{for:"portada",class:"form-label"},"Selecciona la imagen de portada:",-1),ht={class:"mt-4 mb-0"},pt={class:"d-grid"},yt={__name:"Create",props:["errors","temas"],setup(i){const n=y(!1),e=w({titulo:null,descripcion:null,tema_id:null,archivo:null,portada:null}),d=()=>{e.post(route("cursos.store"),e)};return(_,o)=>(a(),c(f,null,[m(l($),{title:"Agregar Video"}),m(S,null,{default:r(()=>[m(W,{show:n.value},{title:r(()=>[x(" Culminando Registro ")]),content:r(()=>[A]),_:1},8,["show"]),t("div",I,[t("div",L,[j,t("div",q,[t("form",{onSubmit:k(d,["prevent"])},[t("div",R,[t("div",Z,[z,u(t("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":o[0]||(o[0]=s=>l(e).titulo=s),autofocus:"",autocomplete:"nombre_tema"},null,512),[[v,l(e).titulo]]),i.errors.titulo?(a(),c("div",G,J)):h("",!0)])]),t("div",K,[t("div",O,[P,u(t("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":o[1]||(o[1]=s=>l(e).descripcion=s)},null,512),[[v,l(e).descripcion]]),i.errors.descripcion?(a(),c("div",Q,Y)):h("",!0)])]),t("div",tt,[t("div",st,[ot,u(t("select",{class:"form-select","aria-label":"Default select example",id:"tema_id","onUpdate:modelValue":o[2]||(o[2]=s=>l(e).tema_id=s)},[et,(a(!0),c(f,null,D(i.temas,s=>(a(),c("option",{key:s.id,value:s.id},b(s.id)+" "+b(s.nombre_tema),9,lt))),128))],512),[[V,l(e).tema_id]]),i.errors.tema_id?(a(),c("div",it,ct)):h("",!0)]),t("div",nt,[t("div",rt,[dt,t("input",{class:"form-control",type:"file",id:"archivo",onInput:o[3]||(o[3]=s=>l(e).archivo=s.target.files[0])},null,32)])]),t("div",_t,[t("div",mt,[ut,t("input",{class:"form-control",type:"file",id:"portada",onInput:o[4]||(o[4]=s=>l(e).portada=s.target.files[0])},null,32)])])]),t("div",ht,[t("div",pt,[t("button",{type:"submit",onClick:o[5]||(o[5]=s=>n.value=!0),class:"btn btn-primary btn-block"},"Enviar")])])],32)])])])]),_:1})],64))}};export{yt as default};

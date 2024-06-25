import{_,a as v,b as C,c as m}from"./ResponsiveNavLink-Uc1rrgs2.js";import{m as b,i as k,H as g,o as r,f as l,a as e,b as a,w as s,j as n,h as f,e as h,B as p,U as L,t as w,C as y,k as u,V as z,F as j,r as $}from"./app-YHqRQc2P.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T={components:{NavLink:_,Link:b},setup(){return{showingTwoLevelMenu:k(!1)}},props:{usuario:Object}},V={class:"z-20 hidden w-64 overflow-y-auto bg-white lg:block flex-shrink-0"},N={class:"py-4 text-gray-500"},H=e("div",{class:"row"},[e("img",{class:"logo-dashboard ms-5",src:"/images/logostarsseguros.png",alt:""})],-1),S={class:"mt-6"},D={class:"relative px-6 py-3"},A=e("svg",{class:"w-5 h-5","aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),F={key:0,class:"relative px-6 py-3"},O=e("i",{class:"fa-solid fa-user-group"},null,-1),E={key:1,class:"relative px-6 py-3"},P=L('<span class="inline-flex items-center"><i class="fa-solid fa-video icon-size"></i><span class="ml-4">Video</span></span><svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>',2),R=[P],U={class:"p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50","aria-label":"submenu"},q={class:"relative px-6 py-3"},G=e("i",{class:"fa-solid fa-book"},null,-1),I={class:"relative px-6 py-3"},J=e("i",{class:"fa-solid fa-video"},null,-1);function K(i,o,t,d,x,ze){const M=g("Link"),c=g("NavLink");return r(),l("aside",V,[e("div",N,[a(M,{class:"",href:i.route("dashboard")},{default:s(()=>[H]),_:1},8,["href"]),e("ul",S,[e("li",D,[a(c,{href:i.route("dashboard"),active:i.route().current("dashboard")},{icon:s(()=>[A]),default:s(()=>[n(" Dashboard ")]),_:1},8,["href","active"])]),i.$page.props.auth.user.role_id!==3?(r(),l("li",F,[a(c,{href:i.route("clientes.index"),active:i.route().current("clientes.index")},{icon:s(()=>[O]),default:s(()=>[n(" Clientes ")]),_:1},8,["href","active"])])):f("",!0),i.$page.props.auth.user.role_id!==3?(r(),l("li",E,[e("button",{onClick:o[0]||(o[0]=je=>d.showingTwoLevelMenu=!d.showingTwoLevelMenu),class:"inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800","aria-haspopup":"true"},R),h(e("ul",U,[e("li",q,[a(c,{href:i.route("temas.index"),active:i.route().current("temas.index")},{icon:s(()=>[G]),default:s(()=>[n(" Temas ")]),_:1},8,["href","active"])]),e("li",I,[a(c,{href:i.route("videos.index"),active:i.route().current("videos.index")},{icon:s(()=>[J]),default:s(()=>[n(" Videos ")]),_:1},8,["href","active"])])],512),[[p,d.showingTwoLevelMenu]])])):f("",!0)])])])}const Q=B(T,[["render",K]]),W={class:"z-10 py-4 bg-white shadow-md"},X={class:"container flex justify-between items-center px-6 mx-auto h-full text-purple-600 lg:justify-end"},Y=e("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})],-1),Z=[Y],ee={class:"align-middle rounded-full focus:shadow-outline-purple focus:outline-none","aria-label":"Account","aria-haspopup":"true"},se=e("i",{class:"fa-solid fa-caret-down ms-2"},null,-1),oe=e("svg",{class:"mr-3 w-4 h-4","aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})],-1),te=e("svg",{class:"mr-3 w-4 h-4","aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})],-1),ae={__name:"TopMenu",setup(i){return(o,t)=>(r(),l("header",W,[e("div",X,[e("button",{onClick:t[0]||(t[0]=d=>o.$page.props.showingMobileMenu=!o.$page.props.showingMobileMenu),class:"p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple","aria-label":"Menu"},Z),a(C,null,{trigger:s(()=>[e("button",ee,[n(w(o.$page.props.auth.user.name)+" "+w(o.$page.props.auth.user.lastname),1),se])]),content:s(()=>[a(v,{href:o.route("profile.edit")},{icon:s(()=>[oe,n(" Profile ")]),_:1},8,["href"]),a(v,{href:o.route("logout"),method:"post",as:"button"},{icon:s(()=>[te,n(" Log Out ")]),_:1},8,["href"])]),_:1})])]))}},ie={class:"fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"},ne={class:"fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white lg:hidden"},re={class:"py-4 text-gray-500"},le={class:"mt-6"},de={class:"relative px-6 py-3"},ce=e("svg",{class:"w-5 h-5","aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),ue={key:0,class:"relative px-6 py-3"},he=e("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"})],-1),pe={key:1,class:"relative px-6 py-3"},fe=e("span",{class:"inline-flex items-center"},[e("i",{class:"fa-solid fa-video icon-size"}),e("span",{class:"ml-4"},"Video")],-1),_e=e("svg",{class:"w-4 h-4","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ve=[fe,_e],me={class:"p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50","aria-label":"submenu"},ge={class:"relative px-6 py-3"},we=e("i",{class:"fa-solid fa-book"},null,-1),ye={class:"relative px-6 py-3"},$e=e("i",{class:"fa-solid fa-video"},null,-1),be={__name:"NavigationMobile",setup(i){let o=k(!1);return(t,d)=>(r(),l(j,null,[a(y,{"enter-active-class":"transition ease-in-out duration-150","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition ease-in-out duration-150","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:s(()=>[h(e("div",ie,null,512),[[p,t.$page.props.showingMobileMenu]])]),_:1}),a(y,{"enter-active-class":"transition ease-in-out duration-150","enter-from-class":"opacity-0 transform -translate-x-20","enter-to-class":"opacity-100","leave-active-class":"transition ease-in-out duration-150","leave-from-class":"opacity-100","leave-to-class":"opacity-0 transform -translate-x-20"},{default:s(()=>[h(e("aside",ne,[e("div",re,[a(u(b),{class:"subrayado ml-6 text-lg font-bold text-gray-800",href:t.route("dashboard")},{default:s(()=>[n(" StarsSeguros ")]),_:1},8,["href"]),e("ul",le,[e("li",de,[a(m,{href:t.route("dashboard"),active:t.route().current("dashboard")},{icon:s(()=>[ce]),default:s(()=>[n(" Dashboard ")]),_:1},8,["href","active"])]),t.$page.props.auth.user.role_id!==3?(r(),l("li",ue,[a(m,{href:t.route("clientes.index"),active:t.route().current("clientes.index")},{icon:s(()=>[he]),default:s(()=>[n(" Clientes ")]),_:1},8,["href","active"])])):f("",!0),t.$page.props.auth.user.role_id!==3?(r(),l("li",pe,[e("button",{onClick:d[0]||(d[0]=x=>z(o)?o.value=!u(o):o=!u(o)),class:"inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800","aria-haspopup":"true"},ve),h(e("ul",me,[e("li",ge,[a(_,{href:t.route("temas.index"),active:t.route().current("temas.index")},{icon:s(()=>[we]),default:s(()=>[n(" Temas ")]),_:1},8,["href","active"])]),e("li",ye,[a(_,{href:t.route("videos.index"),active:t.route().current("videos.index")},{icon:s(()=>[$e]),default:s(()=>[n(" Videos ")]),_:1},8,["href","active"])])],512),[[p,u(o)]])])):f("",!0)])])],512),[[p,t.$page.props.showingMobileMenu]])]),_:1})],64))}},ke={class:"flex h-screen bg-gray-50"},xe={class:"flex flex-col flex-1 w-full"},Me={class:"h-full overflow-y-auto"},Ce={class:"container-fluid"},Le={class:"my-6 text-2xl font-semibold text-gray-700"},Ne={__name:"AuthenticatedLayout",setup(i){return(o,t)=>(r(),l("div",null,[e("div",ke,[a(Q),a(be),e("div",xe,[a(ae),e("main",Me,[e("div",Ce,[e("h2",Le,[$(o.$slots,"header")]),$(o.$slots,"default")])])])])]))}};export{Ne as _};
import{i as a,s,o as n,f as l}from"./app-2ECKy3HX.js";const i=["value"],p={__name:"TextInput",props:["modelValue"],emits:["update:modelValue"],setup(o){const e=a(null);return s(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),(u,t)=>(n(),l("input",{class:"mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600",value:o.modelValue,onInput:t[0]||(t[0]=r=>u.$emit("update:modelValue",r.target.value)),ref_key:"input",ref:e},null,40,i))}};export{p as _};

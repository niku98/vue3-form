import{E as o,a as b}from"./chunks/EzFormItem.526ce85f.js";import"./chunks/EzFormItemAutoBindingInput.9c80d43c.js";import{E as d}from"./chunks/EzFormList.87f0c658.js";import{d as C,o as e,c as r,G as n,B as a,e as l,F as h,L as g,z as s,t as A,O as D}from"./chunks/framework.f385a0f3.js";const E={class:"example-box"},q=s("input",{placeholder:"Enter Username"},null,-1),_=s("input",{placeholder:"Enter your First name"},null,-1),f=s("input",{placeholder:"Enter your Last name"},null,-1),v=s("input",{placeholder:"Password",type:"password"},null,-1),z=s("input",null,null,-1),w=s("select",null,[s("option",{value:"d-1"},"District 1"),s("option",{value:"d-2"},"District 2"),s("option",{value:"d-3"},"District 3"),s("option",{value:"d-4"},"District 4"),s("option",{value:"d-5"},"District 5")],-1),N=["onClick"],k=["onClick"],B=s("button",{type:"submit"},"Submit",-1),S=s("p",null,"Click submit then check console tab in devtool.",-1),P=C({__name:"FormListBasic",setup(y){function c(t){console.log(t)}function F(t){console.log(t)}return(t,x)=>(e(),r("div",E,[n(l(b),{onSubmit:c,onError:F},{default:a(()=>[n(l(o),{label:"Username",name:"user.username",rules:[{required:!0}]},{default:a(()=>[q]),_:1}),n(l(o),{label:"First name",name:"user.firstName",rules:[{required:!0}]},{default:a(()=>[_]),_:1}),n(l(o),{label:"First name",name:"user.lastName",rules:[{required:!0}]},{default:a(()=>[f]),_:1}),n(l(o),{label:"Password",name:"user.password",rules:[{required:!0}]},{default:a(()=>[v]),_:1}),n(l(d),{label:"Addresses",name:"user.addresses"},{default:a(({fields:i,add:u,remove:m})=>[(e(!0),r(h,null,g(i,p=>(e(),r("div",{key:p.key,style:{"margin-bottom":"1rem"}},[s("h4",null,"Address "+A(p.index+1),1),n(l(o),{label:"Detail",name:p.getNamePath("detail"),rules:[{required:!0}]},{default:a(()=>[z]),_:2},1032,["name"]),n(l(o),{label:"District",name:p.getNamePath("district"),rules:[{required:!0}]},{default:a(()=>[w]),_:2},1032,["name"]),s("button",{type:"button",class:"danger",onClick:V=>m(p.index)}," Remove address ",8,N)]))),128)),s("button",{type:"button",onClick:p=>u()},"Add address",8,k)]),_:1}),B]),_:1}),S]))}}),I=D("",4),L=D("",6),H=JSON.parse('{"title":"Form List","description":"","frontmatter":{"title":"Form List"},"headers":[],"relativePath":"guide/form-list.md","filePath":"guide/form-list.md"}'),T={name:"guide/form-list.md"},J=Object.assign(T,{setup(y){return(c,F)=>(e(),r("div",null,[I,n(P),L]))}});export{H as __pageData,J as default};

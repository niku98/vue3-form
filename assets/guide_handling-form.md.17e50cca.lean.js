import{E as t,a as i}from"./chunks/EzFormItem.526ce85f.js";import"./chunks/EzFormItemAutoBindingInput.9c80d43c.js";import{d as u,o as r,c,G as n,B as a,e as l,z as s,a2 as A,j as b,C as d,O as D}from"./chunks/framework.f385a0f3.js";const E={class:"example-box"},q=s("input",{placeholder:"Enter Username"},null,-1),_=s("input",{placeholder:"Password",type:"password"},null,-1),g=s("button",{type:"submit"},"Submit",-1),h=s("p",null,"Click submit then check console tab in devtool.",-1),f=u({__name:"HandleFormBasic",setup(y){function e(p){console.log(p)}return(p,o)=>(r(),c("div",E,[n(l(i),{onSubmit:e},{default:a(()=>[n(l(t),{label:"Username",name:"username"},{default:a(()=>[q]),_:1}),n(l(t),{label:"Password",name:"password"},{default:a(()=>[_]),_:1}),g]),_:1}),h]))}}),v={class:"example-box"},w=s("input",{placeholder:"Enter Username"},null,-1),S=s("input",{placeholder:"Enter Display name"},null,-1),z=s("button",{type:"submit"},"Submit",-1),I=s("p",null,"Click submit then check console tab in devtool.",-1),T=u({__name:"HandleFormWithInitialValues",setup(y){const e=A({username:"tester",displayName:"Tester"});function p(o){console.log(o)}return(o,C)=>(r(),c("div",v,[n(l(i),{"initial-values":e,onSubmit:p},{default:a(()=>[n(l(t),{label:"Username",name:"username",rules:{required:!0}},{default:a(()=>[w]),_:1}),n(l(t),{label:"Display name",name:"displayName",rules:{required:!0}},{default:a(()=>[S]),_:1}),z]),_:1},8,["initial-values"]),I]))}}),B={class:"example-box"},V=s("input",{placeholder:"Enter Username"},null,-1),x=s("input",{placeholder:"Enter Display name"},null,-1),P={style:{display:"flex",gap:"0.5rem"}},R=s("button",{type:"submit"},"Submit",-1),k={key:0},U=u({__name:"HandleFormReInitialize",setup(y){const e=A({username:"",name:""}),p=b(!1);function o(){p.value=!0,fetch("https://jsonplaceholder.typicode.com/users/1").then(F=>F.json()).then(F=>{Object.assign(e,F),p.value=!1})}function C(F){console.log(F)}return(F,m)=>(r(),c("div",B,[n(l(i),{"initial-values":e,onSubmit:C,enableReinitialize:""},{default:a(()=>[n(l(t),{label:"Username",name:"username",rules:{required:!0}},{default:a(()=>[V]),_:1}),n(l(t),{label:"Display name",name:"name",rules:{required:!0}},{default:a(()=>[x]),_:1}),s("div",P,[R,s("button",{type:"button",onClick:m[0]||(m[0]=as=>o())},"Fetch user")])]),_:1},8,["initial-values"]),p.value?(r(),c("div",k,"Loading...")):d("",!0)]))}}),$={class:"example-box"},N=s("input",{placeholder:"Enter Username"},null,-1),H=s("input",{placeholder:"Password",type:"password"},null,-1),j=s("div",{style:{display:"flex",gap:"0.5rem"}},[s("button",{type:"submit"},"Submit"),s("button",{type:"reset"},"Reset")],-1),W=u({__name:"HandleFormReset",setup(y){function e(o){console.log(o)}function p(){console.log("Form reset")}return(o,C)=>(r(),c("div",$,[n(l(i),{onSubmit:e,onReset:p},{default:a(()=>[n(l(t),{label:"Username",name:"username"},{default:a(()=>[N]),_:1}),n(l(t),{label:"Password",name:"password"},{default:a(()=>[H]),_:1}),j]),_:1})]))}}),O={class:"example-box"},L=s("input",{placeholder:"Enter Username"},null,-1),Y=s("input",{placeholder:"Password",type:"password"},null,-1),G=s("button",{type:"submit"},"Submit",-1),J=u({__name:"HandleFormError",setup(y){function e(o){console.log(o)}function p(o){console.log("Form errors",o)}return(o,C)=>(r(),c("div",O,[n(l(i),{onSubmit:e,onError:p},{default:a(()=>[n(l(t),{label:"Username",name:"username",rules:{required:!0}},{default:a(()=>[L]),_:1}),n(l(t),{label:"Password",name:"password",rules:{required:!0}},{default:a(()=>[Y]),_:1}),G]),_:1})]))}}),K=D("",7),M=D("",5),Q=D("",4),X=D("",3),Z=D("",3),ss=D("",1),es=JSON.parse('{"title":"Handling Form","description":"","frontmatter":{"title":"Handling Form"},"headers":[],"relativePath":"guide/handling-form.md","filePath":"guide/handling-form.md"}'),ns={name:"guide/handling-form.md"},ts=Object.assign(ns,{setup(y){return(e,p)=>(r(),c("div",null,[K,n(f),M,n(T),Q,n(U),X,n(W),Z,n(J),ss]))}});export{es as __pageData,ts as default};

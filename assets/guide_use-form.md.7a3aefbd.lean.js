import{E as r,a as d}from"./chunks/EzFormItem.526ce85f.js";import{e as i}from"./chunks/EzFormItemAutoBindingInput.9c80d43c.js";import{d as E,o as u,c as m,G as l,B as p,e as n,z as s,O as C}from"./chunks/framework.f385a0f3.js";const q={class:"example-box"},g=s("input",{placeholder:"Enter Username"},null,-1),f=s("input",{placeholder:"Password",type:"password"},null,-1),h={style:{display:"flex",gap:"0.5rem"}},_=s("p",null,"Click submit then check console tab in devtool.",-1),v=E({__name:"UseFormBasic",setup(A){const o=i();function t(c){console.log(c)}function F(){console.log("Form reset")}return(c,a)=>(u(),m("div",q,[l(n(d),{form:n(o),onSubmit:t,onReset:F},{default:p(()=>[l(n(r),{label:"Username",name:"username"},{default:p(()=>[g]),_:1}),l(n(r),{label:"Password",name:"password"},{default:p(()=>[f]),_:1}),s("div",h,[s("button",{type:"button",onClick:a[0]||(a[0]=D=>n(o).submit())},"Submit"),s("button",{type:"button",onClick:a[1]||(a[1]=D=>n(o).reset())},"Reset")])]),_:1},8,["form"]),_]))}}),w={class:"example-box"},k={class:"ez-form"},z=s("input",{placeholder:"Enter Username"},null,-1),S=s("input",{placeholder:"Password",type:"password"},null,-1),I={style:{display:"flex",gap:"0.5rem"}},x=s("p",null,"Click submit then check console tab in devtool.",-1),P=E({__name:"UseFormStandalone",setup(A){const o=i();function t(){o.submit().then(({values:c,errors:a})=>{a?console.log("Form errors",a):console.log("Form values",c)})}function F(){o.reset(),console.log("Form reset")}return(c,a)=>(u(),m("div",w,[s("div",k,[l(n(r),{label:"Username",name:"username"},{default:p(()=>[z]),_:1}),l(n(r),{label:"Password",name:"password"},{default:p(()=>[S]),_:1}),s("div",I,[s("button",{type:"button",onClick:a[0]||(a[0]=D=>t())},"Submit"),s("button",{type:"button",onClick:a[1]||(a[1]=D=>F())},"Reset")])]),x]))}}),R={class:"example-box",style:{display:"grid","grid-template-columns":"repeat(2, 1fr)"}},T=s("input",{placeholder:"Enter Username"},null,-1),$=s("input",{placeholder:"Password",type:"password"},null,-1),U={style:{display:"flex",gap:"0.5rem"}},V=s("p",null,"Click submit then check console tab in devtool.",-1),N=s("input",{placeholder:"Enter Username"},null,-1),B=s("input",{placeholder:"Password",type:"password"},null,-1),O={style:{display:"flex",gap:"0.5rem"}},M=s("p",null,"Click submit then check console tab in devtool.",-1),Y=E({__name:"UseFormMultiple",setup(A){const o=i(),t=i();function F(y){console.log("Form 1 submit",y)}function c(){console.log("Form reset")}function a(y){console.log("Form 2 submit",y)}function D(){console.log("Form 2 reset")}return(y,e)=>(u(),m("div",R,[s("div",null,[l(n(d),{form:n(o),onSubmit:F,onReset:c},{default:p(()=>[l(n(r),{label:"Username",name:"username"},{default:p(()=>[T]),_:1}),l(n(r),{label:"Password",name:"password"},{default:p(()=>[$]),_:1}),s("div",U,[s("button",{type:"button",onClick:e[0]||(e[0]=b=>n(o).submit())},"Submit"),s("button",{type:"button",onClick:e[1]||(e[1]=b=>n(o).reset())},"Reset")])]),_:1},8,["form"]),V]),s("div",null,[l(n(d),{form:n(t),onSubmit:a,onReset:D},{default:p(()=>[l(n(r),{label:"Username",name:"username"},{default:p(()=>[N]),_:1}),l(n(r),{label:"Password",name:"password"},{default:p(()=>[B]),_:1}),s("div",O,[s("button",{type:"button",onClick:e[2]||(e[2]=b=>n(t).submit())},"Submit"),s("button",{type:"button",onClick:e[3]||(e[3]=b=>n(t).reset())},"Reset")])]),_:1},8,["form"]),M])]))}}),G=C("",7),j=C("",6),J=C("",4),L=C("",1),X=JSON.parse('{"title":"useForm","description":"","frontmatter":{"title":"useForm"},"headers":[],"relativePath":"guide/use-form.md","filePath":"guide/use-form.md"}'),W={name:"guide/use-form.md"},Z=Object.assign(W,{setup(A){return(o,t)=>(u(),m("div",null,[G,l(v),j,l(Y),J,l(P),L]))}});export{X as __pageData,Z as default};

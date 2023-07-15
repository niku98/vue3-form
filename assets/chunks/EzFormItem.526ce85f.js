import{g as b,u as y,k as P,p as h,a as q,b as S,E as z}from"./EzFormItemAutoBindingInput.9c80d43c.js";import{d as I,l as v,ad as n}from"./framework.f385a0f3.js";const N=I({name:"EzForm",props:b(),setup:(e,r)=>{const{reset:a,submit:l,formInstance:t}=y(e,r.emit),{meta:m,setFieldValue:s,getFieldValue:o,validate:f,isDirty:i}=t,u=v(()=>`${t.classPrefix}-form`);r.expose(t);const c=d=>{d.preventDefault(),l()},F=d=>{d.preventDefault(),a()},g={values:m.values,errors:m.errors,dirty:m.dirty,submit:l,reset:a,validate:f,getFieldValue:o,setFieldValue:s,isDirty:i};return()=>{var d,E;return n("form",{class:u.value,onSubmit:c,onReset:F},(E=(d=r.slots).default)==null?void 0:E.call(d,g))}}}),B=N,p=I({name:"EzFormItemView",props:{label:{type:String,required:!1},idFor:{type:String,required:!1},requiredMark:{type:String,required:!1},noStyle:{type:Boolean,required:!1},colon:{type:Boolean,required:!1},hasError:{type:Boolean,required:!1}},setup:(e,r)=>{const a=P(),l=h(),t=v(()=>({main:`${a.classPrefix}-form-item`,get label(){return`${this.main}-label`},get input(){return`${this.main}-input`},get errors(){return`${this.main}-errors`},get extra(){return`${this.main}-extra`}})),m=v(()=>{const s=`--${a.classPrefix}-form-required-mark`,o=`--${a.classPrefix}-form-colon`;return{[s]:e.requiredMark,[o]:`"${e.colon??(l==null?void 0:l.colon)?":":""}"`}});return()=>n("fieldset",{class:[t.value.main,{"has-errors":e.hasError,"no-style":!!e.noStyle,required:!!e.requiredMark}],style:m},[e.label?n("label",{for:e.idFor,class:t.value.label},e.label):void 0,n("div",{class:t.value.input},{default:()=>{var s,o;return(o=(s=r.slots).default)==null?void 0:o.call(s)}}),r.slots.errors&&!e.noStyle&&e.hasError?n("div",{class:t.value.errors},{default:()=>{var s,o;return(o=(s=r.slots).errors)==null?void 0:o.call(s)}}):void 0,r.slots.extra&&!e.noStyle?n("div",{class:t.value.extra},{default:()=>{var s,o;return(o=(s=r.slots).extra)==null?void 0:o.call(s)}}):void 0])}}),$=p,k=I({name:"EzFormItem",props:q(),setup:(e,r)=>{const{formItemInstance:a,formInstance:l}=S(e,r.emit),{meta:t,requiredMarkString:m}=a,s=v(()=>`${l.classPrefix}-form-item`);return r.expose(a),()=>{var o,f;return n($,{label:e.label,idFor:t.id,requiredMark:m.value,noStyle:e.noStyle,colon:e.colon,class:s.value,hasError:!!t.error},{default:()=>n(z,{autoBinding:e.autoBinding,blurEventPropName:e.blurEventPropName,changeEventPropName:e.changeEventPropName,inputNodeIndex:e.inputNodeIndex,valuePropName:e.valuePropName},{default:i=>{var u,c;return(c=(u=r.slots).default)==null?void 0:c.call(u,i)}}),errors:t.error?()=>{var i;return r.slots.errors?r.slots.errors({errors:t.error,form:l,formItem:a}):(i=t.error)==null?void 0:i.messages.map(u=>n("span",null,u))}:void 0,extra:(f=(o=r.slots).extra)==null?void 0:f.call(o,{form:l,formItem:a})})}}}),M=k;export{M as E,B as a,$ as b};

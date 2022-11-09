import{_ as t,c as e,o,a}from"./app.bdb07605.js";const m=JSON.parse('{"title":"Auto Binding","description":"","frontmatter":{"title":"Auto Binding"},"headers":[{"level":2,"title":"Updating data","slug":"updating-data","link":"#updating-data","children":[]},{"level":2,"title":"Blur event","slug":"blur-event","link":"#blur-event","children":[]}],"relativePath":"guide/auto-binding.md"}'),n={name:"guide/auto-binding.md"},i=a('<h1 id="auto-binding" tabindex="-1">Auto Binding <a class="header-anchor" href="#auto-binding" aria-hidden="true">#</a></h1><h2 id="updating-data" tabindex="-1">Updating data <a class="header-anchor" href="#updating-data" aria-hidden="true">#</a></h2><p>In most case, your input will have a lots of complex requirements. Or you may use an UI Framework like <strong>Ant Design</strong>. It&#39;s very easy to use your input with <strong>Ez Form</strong>. Just make sure that your input component has two things bellow:</p><ul><li>Prop <code>value</code>: Form data will be pass to your input via this prop.</li><li>Event <code>@update:value</code>: <strong>Ez Form</strong> will listen to this event to update data from your input.</li></ul><p>Look familiar? Yes, it is <strong>Vue 3</strong> <code>v-model</code>, in this case, <code>v-model:value</code>. Normally, you usually use <code>v-model</code> to get data from input, so <strong>Ez Form</strong> do the same, but it is automatic.</p><p>In the other words, your input need provide a <code>v-model:value</code> to work with <strong>Ez Form</strong>.</p><h2 id="blur-event" tabindex="-1">Blur event <a class="header-anchor" href="#blur-event" aria-hidden="true">#</a></h2><p>By default, <strong>Ez Form</strong> will listen to event <code>@blur</code> to determine is input blur. So your component can emit <code>@blur</code> to be compatible with <strong>Ez Form</strong>.</p>',8),r=[i];function d(s,u,l,c,p,g){return o(),e("div",null,r)}const _=t(n,[["render",d]]);export{m as __pageData,_ as default};
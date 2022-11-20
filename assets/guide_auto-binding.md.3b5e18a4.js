import{_ as s,o as n,c as a,a as o}from"./app.a42c7a3e.js";const C=JSON.parse('{"title":"Auto Binding","description":"","frontmatter":{"title":"Auto Binding"},"headers":[{"level":2,"title":"Updating data","slug":"updating-data","link":"#updating-data","children":[]},{"level":2,"title":"Blur event","slug":"blur-event","link":"#blur-event","children":[]},{"level":2,"title":"useFormItemAutoBinding()","slug":"useformitemautobinding","link":"#useformitemautobinding","children":[]}],"relativePath":"guide/auto-binding.md"}'),l={name:"guide/auto-binding.md"},p=o(`<h1 id="auto-binding" tabindex="-1">Auto Binding <a class="header-anchor" href="#auto-binding" aria-hidden="true">#</a></h1><h2 id="updating-data" tabindex="-1">Updating data <a class="header-anchor" href="#updating-data" aria-hidden="true">#</a></h2><p>In most case, your input will have a lots of complex requirements. Or you may use an UI Framework like <strong>Ant Design</strong>. It&#39;s very easy to use your input with <strong>Ez Form</strong>. Just make sure that your input component has two things bellow:</p><ul><li>Prop <code>value</code>: Form data will be pass to your input via this prop.</li><li>Event <code>@update:value</code>: <strong>Ez Form</strong> will listen to this event to update data from your input.</li></ul><p>Look familiar? Yes, it is <strong>Vue 3</strong> <code>v-model</code>, in this case, <code>v-model:value</code>. Normally, you usually use <code>v-model</code> to get data from input, so <strong>Ez Form</strong> do the same, but it is automatic.</p><p>In the other words, your input need provide a <code>v-model:value</code> to work with <strong>Ez Form</strong>.</p><h2 id="blur-event" tabindex="-1">Blur event <a class="header-anchor" href="#blur-event" aria-hidden="true">#</a></h2><p>By default, <strong>Ez Form</strong> will listen to event <code>@blur</code> to determine is input blur. So your component can emit <code>@blur</code> to be compatible with <strong>Ez Form</strong>.</p><h2 id="useformitemautobinding" tabindex="-1">useFormItemAutoBinding() <a class="header-anchor" href="#useformitemautobinding" aria-hidden="true">#</a></h2><p>Use this composable to handle auto binding.</p><p><strong>Type</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFormItemAutoBinding</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#A6ACCD;">formItemInstance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FormItemInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">changeEventPropName</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">blurEventPropName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">valuePropName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">getVNodesFromDefaultSlot</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VNode</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">slotData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">rawValue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">handleChange</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FormInstance</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">error</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ValidateError</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">getInputItemProps</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">vNode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VNode</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p><strong>Example</strong></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span></span>
<span class="line"><span style="color:#89DDFF;">			</span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">vNode</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">) in </span><span style="color:#82AAFF;">getVNodesFromDefaultSlot</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">			:</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">vNode</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">			:</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">vNode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">patchFlag</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">			</span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;"> === </span><span style="color:#A6ACCD;">inputNodeIndex</span><span style="color:#89DDFF;"> ? </span><span style="color:#82AAFF;">getInputItemProps</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">vNode</span><span style="color:#89DDFF;">) : undefined</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">		/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useFormItem</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useFormItemAutoBinding</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/composables</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getFormItemDefinePropsObject</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/utilities</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> props </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineProps</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">getFormItemDefinePropsObject</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> formItemInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFormItem</span><span style="color:#A6ACCD;">(props)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> meta</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> requiredMarkString </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> formItemInstance</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Handle auto binding</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> getInputItemProps</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> slotData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> getVNodesFromDefaultSlot </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">useFormItemAutoBinding</span><span style="color:#A6ACCD;">(formItemInstance</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> props)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,14),t=[p];function e(r,c,D,F,y,i){return n(),a("div",null,t)}const d=s(l,[["render",e]]);export{C as __pageData,d as default};

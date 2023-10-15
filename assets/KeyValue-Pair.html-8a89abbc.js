import{_ as n,o as s,c as a,a as e,f as t}from"./app-bb4a7608.js";const p={},o=t(`<h1 id="键值对" tabindex="-1"><a class="header-anchor" href="#键值对" aria-hidden="true">#</a> 键值对</h1><p><strong>键值对的键和值可以被定义为标识符或者常量。</strong></p><p>下面将介绍键值对的使用场景。</p><ul><li>触发器中表示触发器属性的键值对。参考示例语句中 WITH 后的属性键值对。</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 以字符串形式表示键值对
CREATE TRIGGER \`alert-listener-sg1d1s1\`
AFTER INSERT
ON root.sg1.d1.s1
AS &#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;
WITH (
  &#39;lo&#39; = &#39;0&#39;, 
  &#39;hi&#39; = &#39;100.0&#39;
)

# 以标识符和常量形式表示键值对
CREATE TRIGGER \`alert-listener-sg1d1s1\`
AFTER INSERT
ON root.sg1.d1.s1
AS &#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;
WITH (
  lo = 0, 
  hi = 100.0
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间序列中用于表示标签和属性的键值对。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 创建时间序列时设定标签和属性，用字符串来表示键值对。</span>
<span class="token keyword">CREATE</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1<span class="token punctuation">(</span>temprature<span class="token punctuation">)</span> 
<span class="token keyword">WITH</span> datatype <span class="token operator">=</span> <span class="token keyword">FLOAT</span><span class="token punctuation">,</span> encoding <span class="token operator">=</span> RLE<span class="token punctuation">,</span> compression <span class="token operator">=</span> SNAPPY<span class="token punctuation">,</span> <span class="token string">&#39;max_point_number&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;5&#39;</span>
TAGS<span class="token punctuation">(</span><span class="token string">&#39;tag1&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tag2&#39;</span><span class="token operator">=</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span> ATTRIBUTES<span class="token punctuation">(</span><span class="token string">&#39;attr1&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;attr2&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 创建时间序列时设定标签和属性，用标识符和常量来表示键值对。</span>
<span class="token keyword">CREATE</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1<span class="token punctuation">(</span>temprature<span class="token punctuation">)</span> 
<span class="token keyword">WITH</span> datatype <span class="token operator">=</span> <span class="token keyword">FLOAT</span><span class="token punctuation">,</span> encoding <span class="token operator">=</span> RLE<span class="token punctuation">,</span> compression <span class="token operator">=</span> SNAPPY<span class="token punctuation">,</span> max_point_number <span class="token operator">=</span> <span class="token number">5</span>
TAGS<span class="token punctuation">(</span>tag1 <span class="token operator">=</span> v1<span class="token punctuation">,</span> tag2 <span class="token operator">=</span> v2<span class="token punctuation">)</span> ATTRIBUTES<span class="token punctuation">(</span>attr1 <span class="token operator">=</span> v1<span class="token punctuation">,</span> attr2 <span class="token operator">=</span> v2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 修改时间序列的标签和属性</span>
<span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">SET</span> <span class="token string">&#39;newTag1&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;newV1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;attr1&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;newV1&#39;</span>

<span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">SET</span> newTag1 <span class="token operator">=</span> newV1<span class="token punctuation">,</span> attr1 <span class="token operator">=</span> newV1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 修改标签名</span>
<span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">RENAME</span> <span class="token string">&#39;tag1&#39;</span> <span class="token keyword">TO</span> <span class="token string">&#39;newTag1&#39;</span>

<span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">RENAME</span> tag1 <span class="token keyword">TO</span> newTag1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 插入别名、标签、属性</span>
<span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 UPSERT 
ALIAS<span class="token operator">=</span><span class="token string">&#39;newAlias&#39;</span> TAGS<span class="token punctuation">(</span><span class="token string">&#39;tag2&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;newV2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tag3&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v3&#39;</span><span class="token punctuation">)</span> ATTRIBUTES<span class="token punctuation">(</span><span class="token string">&#39;attr3&#39;</span> <span class="token operator">=</span><span class="token string">&#39;v3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;attr4&#39;</span><span class="token operator">=</span><span class="token string">&#39;v4&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 UPSERT 
ALIAS <span class="token operator">=</span> newAlias TAGS<span class="token punctuation">(</span>tag2 <span class="token operator">=</span> newV2<span class="token punctuation">,</span> tag3 <span class="token operator">=</span> v3<span class="token punctuation">)</span> ATTRIBUTES<span class="token punctuation">(</span>attr3 <span class="token operator">=</span> v3<span class="token punctuation">,</span> attr4 <span class="token operator">=</span> v4<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 添加新的标签</span>
<span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">ADD</span> TAGS <span class="token string">&#39;tag3&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tag4&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v4&#39;</span>

<span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">ADD</span> TAGS tag3 <span class="token operator">=</span> v3<span class="token punctuation">,</span> tag4 <span class="token operator">=</span> v4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 添加新的属性</span>
<span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">ADD</span> ATTRIBUTES <span class="token string">&#39;attr3&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;attr4&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v4&#39;</span>

<span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">ADD</span> ATTRIBUTES attr3 <span class="token operator">=</span> v3<span class="token punctuation">,</span> attr4 <span class="token operator">=</span> v4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 查询符合条件的时间序列信息</span>
<span class="token keyword">SHOW</span> timeseries root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> WHRER <span class="token string">&#39;unit&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;c&#39;</span>

<span class="token keyword">SHOW</span> timeseries root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> WHRER unit <span class="token operator">=</span> c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建 Pipe 以及 PipeSink 时表示属性的键值对。</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 创建 PipeSink 时表示属性
CREATE PIPESINK my_iotdb AS IoTDB (&#39;ip&#39; = &#39;输入你的IP&#39;)

# 创建 Pipe 时在 WITH 子句中表示属性
CREATE PIPE my_pipe TO my_iotdb FROM 
(select ** from root WHERE time&gt;=yyyy-mm-dd HH:MM:SS) WITH &#39;SyncDelOp&#39; = &#39;true&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function i(l,c){return s(),a("div",null,[e(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),o])}const u=n(p,[["render",i],["__file","KeyValue-Pair.html.vue"]]);export{u as default};

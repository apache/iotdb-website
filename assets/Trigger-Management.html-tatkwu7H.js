import{_ as i,r,o as l,c as d,a as o,d as e,e as n,b as a,f as t}from"./app-A_mHgNUs.js";const p={},c=t(`<h1 id="管理触发器" tabindex="-1"><a class="header-anchor" href="#管理触发器" aria-hidden="true">#</a> 管理触发器</h1><p>您可以通过 SQL 语句注册和卸载一个触发器实例，您也可以通过 SQL 语句查询到所有已经注册的触发器。</p><p><strong>我们建议您在注册触发器时停止写入。</strong></p><h2 id="注册触发器" tabindex="-1"><a class="header-anchor" href="#注册触发器" aria-hidden="true">#</a> 注册触发器</h2><p>触发器可以注册在任意路径模式上。被注册有触发器的序列将会被触发器侦听，当序列上有数据变动时，触发器中对应的触发方法将会被调用。</p><p>注册一个触发器可以按如下流程进行：</p><ol><li>按照编写触发器章节的说明，实现一个完整的 Trigger 类，假定这个类的全类名为 <code>org.apache.iotdb.trigger.ClusterAlertingExample</code></li><li>将项目打成 JAR 包。</li><li>使用 SQL 语句注册该触发器。注册过程中会仅只会调用一次触发器的 <code>validate</code> 和 <code>onCreate</code> 接口，具体请参考编写触发器章节。</li></ol><p>完整 SQL 语法如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">// Create Trigger</span>
createTrigger
    : <span class="token keyword">CREATE</span> triggerType <span class="token keyword">TRIGGER</span> triggerName<span class="token operator">=</span>identifier triggerEventClause <span class="token keyword">ON</span> pathPattern <span class="token keyword">AS</span> className<span class="token operator">=</span>STRING_LITERAL uriClause? triggerAttributeClause?
    <span class="token punctuation">;</span>

triggerType
    : STATELESS <span class="token operator">|</span> STATEFUL
    <span class="token punctuation">;</span>

triggerEventClause
    : <span class="token punctuation">(</span>BEFORE <span class="token operator">|</span> <span class="token keyword">AFTER</span><span class="token punctuation">)</span> <span class="token keyword">INSERT</span>
    <span class="token punctuation">;</span>

uriClause
    : <span class="token keyword">USING</span> URI uri
    <span class="token punctuation">;</span>

uri
    : STRING_LITERAL
    <span class="token punctuation">;</span>

triggerAttributeClause
    : <span class="token keyword">WITH</span> LR_BRACKET triggerAttribute <span class="token punctuation">(</span>COMMA triggerAttribute<span class="token punctuation">)</span><span class="token operator">*</span> RR_BRACKET
    <span class="token punctuation">;</span>

triggerAttribute
    : <span class="token keyword">key</span><span class="token operator">=</span>attributeKey operator_eq <span class="token keyword">value</span><span class="token operator">=</span>attributeValue
    <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面对 SQL 语法进行说明，您可以结合使用说明章节进行理解：</p><ul><li>triggerName：触发器 ID，该 ID 是全局唯一的，用于区分不同触发器，大小写敏感。</li><li>triggerType：触发器类型，分为无状态（STATELESS）和有状态（STATEFUL）两类。</li><li>triggerEventClause：触发时机，目前仅支持写入前（BEFORE INSERT）和写入后（AFTER INSERT）两种。</li><li>pathPattern：触发器侦听的路径模式，可以包含通配符 * 和 **。</li><li>className：触发器实现类的类名。</li><li>uriClause：可选项，当不指定该选项时，我们默认 DBA 已经在各个 DataNode 节点的 trigger_root_dir 目录（配置项，默认为 IOTDB_HOME/ext/trigger）下放置好创建该触发器需要的 JAR 包。当指定该选项时，我们会将该 URI 对应的文件资源下载并分发到各 DataNode 的 trigger_root_dir/install 目录下。</li><li>triggerAttributeClause：用于指定触发器实例创建时需要设置的参数，SQL 语法中该部分是可选项。</li></ul><p>下面是一个帮助您理解的 SQL 语句示例：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> STATELESS <span class="token keyword">TRIGGER</span> triggerTest
BEFORE <span class="token keyword">INSERT</span>
<span class="token keyword">ON</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span>
<span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.trigger.ClusterAlertingExample&#39;</span>
<span class="token keyword">USING</span> URI <span class="token string">&#39;http://jar/ClusterAlertingExample.jar&#39;</span>
<span class="token keyword">WITH</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;name&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;trigger&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;limit&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;100&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 SQL 语句创建了一个名为 triggerTest 的触发器：</p>`,14),u=e("li",null,"该触发器是无状态的（STATELESS）",-1),g=e("li",null,"在写入前触发（BEFORE INSERT）",-1),v={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"所编写的触发器类名为 org.apache.iotdb.trigger.ClusterAlertingExample",-1),m={href:"http://jar/ClusterAlertingExample.jar",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,"创建该触发器实例时会传入 name 和 limit 两个参数。",-1),b=t(`<h2 id="卸载触发器" tabindex="-1"><a class="header-anchor" href="#卸载触发器" aria-hidden="true">#</a> 卸载触发器</h2><p>可以通过指定触发器 ID 的方式卸载触发器，卸载触发器的过程中会且仅会调用一次触发器的 <code>onDrop</code> 接口。</p><p>卸载触发器的 SQL 语法如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">// Drop Trigger</span>
dropTrigger
  : <span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> triggerName<span class="token operator">=</span>identifier
<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是示例语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> triggerTest1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述语句将会卸载 ID 为 triggerTest1 的触发器。</p><h2 id="查询触发器" tabindex="-1"><a class="header-anchor" href="#查询触发器" aria-hidden="true">#</a> 查询触发器</h2><p>可以通过 SQL 语句查询集群中存在的触发器的信息。SQL 语法如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> TRIGGERS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该语句的结果集格式如下：</p><table><thead><tr><th>TriggerName</th><th>Event</th><th>Type</th><th>State</th><th>PathPattern</th><th>ClassName</th><th>NodeId</th></tr></thead><tbody><tr><td>triggerTest1</td><td>BEFORE_INSERT / AFTER_INSERT</td><td>STATELESS / STATEFUL</td><td>INACTIVE / ACTIVE / DROPPING / TRANSFFERING</td><td>root.**</td><td>org.apache.iotdb.trigger.TriggerExample</td><td>ALL(STATELESS) / DATA_NODE_ID(STATEFUL)</td></tr></tbody></table><h2 id="触发器状态说明" tabindex="-1"><a class="header-anchor" href="#触发器状态说明" aria-hidden="true">#</a> 触发器状态说明</h2><p>在集群中注册以及卸载触发器的过程中，我们维护了触发器的状态，下面是对这些状态的说明：</p><table><thead><tr><th>状态</th><th>描述</th><th>是否建议写入进行</th></tr></thead><tbody><tr><td>INACTIVE</td><td>执行 <code>CREATE TRIGGER</code> 的中间状态，集群刚在 ConfigNode 上记录该触发器的信息，还未在任何 DataNode 上激活该触发器</td><td>否</td></tr><tr><td>ACTIVE</td><td>执行 <code>CREATE TRIGGE</code> 成功后的状态，集群所有 DataNode 上的该触发器都已经可用</td><td>是</td></tr><tr><td>DROPPING</td><td>执行 <code>DROP TRIGGER</code> 的中间状态，集群正处在卸载该触发器的过程中</td><td>否</td></tr><tr><td>TRANSFERRING</td><td>集群正在进行该触发器实例位置的迁移</td><td>否</td></tr></tbody></table>`,15);function T(E,S){const s=r("ExternalLinkIcon");return l(),d("div",null,[o(`

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

`),c,e("ul",null,[u,g,e("li",null,[n("该触发器侦听路径模式为 "),e("a",v,[n("root.sg"),a(s)]),n(".**")]),h,e("li",null,[n("JAR 包的 URI 为 "),e("a",m,[n("http://jar/ClusterAlertingExample.jar"),a(s)])]),k]),b])}const A=i(p,[["render",T],["__file","Trigger-Management.html.vue"]]);export{A as default};

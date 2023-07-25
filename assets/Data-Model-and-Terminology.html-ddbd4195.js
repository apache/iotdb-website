import{_ as r,r as i,o as s,c as l,a as h,d as o,e,b as n,w as d,f as t}from"./app-d4806199.js";const p={},u=t('<h1 id="数据模式与概念" tabindex="-1"><a class="header-anchor" href="#数据模式与概念" aria-hidden="true">#</a> 数据模式与概念</h1><h2 id="数据模型" tabindex="-1"><a class="header-anchor" href="#数据模型" aria-hidden="true">#</a> 数据模型</h2><p>我们以风电场物联网场景为例，说明如何在 IoTDB 中创建一个正确的数据模型。</p><p>根据企业组织结构和设备实体层次结构，我们将其物联网数据模型表示为如下图所示的属性层级组织结构，即电力集团层-风电场层-实体层-物理量层。其中 ROOT 为根节点，物理量层的每一个节点为叶子节点。IoTDB 采用树形结构定义数据模式，以从 ROOT 节点到叶子节点的路径来命名一个时间序列，层次间以“.”连接。例如，下图最左侧路径对应的时间序列名称为<code>ROOT.ln.wf01.wt01.status</code>。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/123542457-5f511d00-d77c-11eb-8006-562d83069baa.png">',5),m=o("strong",null,"元数据模板",-1),g=t(`<p>IoTDB 模型结构涉及的基本概念在下文将做详细叙述。</p><h3 id="物理量、实体、存储组、路径" tabindex="-1"><a class="header-anchor" href="#物理量、实体、存储组、路径" aria-hidden="true">#</a> 物理量、实体、存储组、路径</h3><h4 id="物理量-measurement" tabindex="-1"><a class="header-anchor" href="#物理量-measurement" aria-hidden="true">#</a> 物理量（Measurement）</h4><p><strong>物理量</strong>，也称工况或字段（field），是在实际场景中检测装置所记录的测量信息，且可以按一定规律变换成为电信号或其他所需形式的信息输出并发送给 IoTDB。在 IoTDB 当中，存储的所有数据及路径，都是以物理量为单位进行组织。</p><h4 id="实体-entity" tabindex="-1"><a class="header-anchor" href="#实体-entity" aria-hidden="true">#</a> 实体（Entity）</h4><p><strong>一个物理实体</strong>，也称设备（device），是在实际场景中拥有物理量的设备或装置。在 IoTDB 当中，所有的物理量都有其对应的归属实体。</p><h4 id="存储组-storage-group" tabindex="-1"><a class="header-anchor" href="#存储组-storage-group" aria-hidden="true">#</a> 存储组（Storage group）</h4><p><strong>一组物理实体</strong>，用户可以将任意前缀路径设置成存储组。如有 4 条时间序列<code>root.ln.wf01.wt01.status</code>, <code>root.ln.wf01.wt01.temperature</code>, <code>root.ln.wf02.wt02.hardware</code>, <code>root.ln.wf02.wt02.status</code>，路径<code>root.ln</code>下的两个实体 <code>wt01</code>, <code>wt02</code>可能属于同一个业主，或者同一个制造商，这时候就可以将前缀路径<code>root.ln</code>指定为一个存储组。未来<code>root.ln</code>下增加了新的实体，也将属于该存储组。</p><p>一个存储组中的所有实体的数据会存储在同一个文件夹下，不同存储组的实体数据会存储在磁盘的不同文件夹下，从而实现物理隔离。</p><blockquote><p>注意 1：不允许将一个完整路径（如上例的<code>root.ln.wf01.wt01.status</code>) 设置成存储组。</p><p>注意 2：一个时间序列其前缀必须属于某个存储组。在创建时间序列之前，用户必须设定该序列属于哪个存储组（Storage Group）。只有设置了存储组的时间序列才可以被持久化在磁盘上。</p></blockquote><p>一个前缀路径一旦被设定成存储组后就不可以再更改这个存储组的设定。</p><p>一个存储组设定后，其对应的前缀路径的祖先层级与孩子及后裔层级也不允许再设置存储组（如，<code>root.ln</code>设置存储组后，root 层级与<code>root.ln.wf01</code>不允许被设置为存储组）。</p><p>存储组节点名只支持中英文字符、数字、和下划线的组合。例如<code>root. 存储组_1</code> 。</p><h4 id="路径-path" tabindex="-1"><a class="header-anchor" href="#路径-path" aria-hidden="true">#</a> 路径（Path）</h4><p>路径（<code>path</code>）是指符合以下约束的表达式：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>path       
    : layer_name <span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span> layer_name<span class="token punctuation">)</span><span class="token operator">*</span>
    <span class="token punctuation">;</span>
layer_name
    : wildcard? id wildcard?
    <span class="token operator">|</span> wildcard
    <span class="token punctuation">;</span>
wildcard 
    : <span class="token string">&#39;*&#39;</span> 
    <span class="token operator">|</span> <span class="token string">&#39;**&#39;</span>
    <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),f=o("code",null,"id",-1),_=o("p",null,[e("我们称一个路径中由 "),o("code",null,"'.'"),e(" 分割的部分叫做层级（"),o("code",null,"layer_name"),e("）。例如："),o("code",null,"root.a.b.c"),e("为一个层级为 4 的路径。")],-1),b=o("p",null,[e("下面是对层级（"),o("code",null,"layer_name"),e("）的约束：")],-1),v=t("<li><p><code>root</code> 作为一个保留字符，它只允许出现在下文提到的时间序列的开头，若其他层级出现 <code>root</code>，则无法解析，提示报错。</p></li><li><p>除了时间序列的开头的层级（<code>root</code>）外，其他的层级支持的字符如下：</p><ul><li>中文字符<code>&quot;\\u2E80&quot;</code>到<code>&quot;\\u9FFF&quot;</code></li><li><code>_</code> <code>:</code> <code>@</code> <code>#</code> <code>$</code> <code>{</code> <code>}</code></li><li><code>&quot;A&quot;</code>到<code>&quot;Z&quot;</code>，<code>&quot;a&quot;</code>到<code>&quot;z&quot;</code>，<code>&quot;0&quot;</code>到<code>&quot;9&quot;</code></li></ul></li>",2),w=o("p",null,[e("除了时间序列的开头的层级（"),o("code",null,"root"),e("）和存储组层级外，层级还支持使用被 ` 或者 "),o("code",null,'"'),e(" 符号引用的特殊字符串作为其名称。需要注意的是，被引用的字符串不可带有 "),o("code",null,"."),e(" 字符。下面是一些合法的例子：")],-1),x={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},k={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},q=t("<li><p>层级 (<code>layer_name</code>) 不允许以数字开头，除非层级 (<code>layer_name</code>) 以 ` 或 <code>&quot;</code> 引用。</p></li><li><p>特别地，如果系统在 Windows 系统上部署，那么存储组层级名称是大小写不敏感的。例如，同时创建<code>root.ln</code> 和 <code>root.LN</code> 是不被允许的。</p></li>",2),y=t('<h4 id="路径模式-path-pattern" tabindex="-1"><a class="header-anchor" href="#路径模式-path-pattern" aria-hidden="true">#</a> 路径模式（Path Pattern）</h4><p>为了使得在表达多个时间序列的时候更加方便快捷，IoTDB 为用户提供带通配符<code>*</code>或<code>**</code>的路径。用户可以利用两种通配符构造出期望的路径模式。通配符可以出现在路径中的任何层。</p><p><code>*</code>在路径中表示一层。例如<code>root.vehicle.*.sensor1</code>代表的是以<code>root.vehicle</code>为前缀，以<code>sensor1</code>为后缀，层次等于 4 层的路径。</p><p><code>**</code>在路径中表示是（<code>*</code>）+，即为一层或多层<code>*</code>。例如<code>root.vehicle.device1.**</code>代表的是<code>root.vehicle.device1.*</code>, <code>root.vehicle.device1.*.*</code>, <code>root.vehicle.device1.*.*.*</code>等所有以<code>root.vehicle.device1</code>为前缀路径的大于等于 4 层的路径；<code>root.vehicle.**.sensor1</code>代表的是以<code>root.vehicle</code>为前缀，以<code>sensor1</code>为后缀，层次大于等于 4 层的路径。</p><blockquote><p>注意：<code>*</code>和<code>**</code>不能放在路径开头。</p></blockquote><h3 id="时间序列" tabindex="-1"><a class="header-anchor" href="#时间序列" aria-hidden="true">#</a> 时间序列</h3><h4 id="时间戳-timestamp" tabindex="-1"><a class="header-anchor" href="#时间戳-timestamp" aria-hidden="true">#</a> 时间戳 (Timestamp)</h4>',7),T=t('<h4 id="数据点-data-point" tabindex="-1"><a class="header-anchor" href="#数据点-data-point" aria-hidden="true">#</a> 数据点（Data Point）</h4><p><strong>一个“时间戳-值”对</strong>。</p><h4 id="时间序列-timeseries" tabindex="-1"><a class="header-anchor" href="#时间序列-timeseries" aria-hidden="true">#</a> 时间序列（Timeseries）</h4><p><strong>一个物理实体的某个物理量在时间轴上的记录</strong>，是数据点的序列。</p><p>一个实体的一个物理量对应一个时间序列，即实体+物理量=时间序列。</p><p>时间序列也被称测点（meter）、时间线（timeline）。实时数据库中常被称作标签（tag）、参数（parameter）。</p><p>例如，ln 电力集团、wf01 风电场的实体 wt01 有名为 status 的物理量，则它的时间序列可以表示为：<code>root.ln.wf01.wt01.status</code>。</p><h4 id="对齐时间序列-aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#对齐时间序列-aligned-timeseries" aria-hidden="true">#</a> 对齐时间序列（Aligned Timeseries）</h4><p>在实际应用中，存在某些实体的多个物理量<strong>同时采样</strong>，形成在时间列上对齐的多条时间序列。</p><p>通过使用对齐的时间序列，在插入数据时，一组对齐序列的时间戳列在内存和磁盘中仅需存储一次，而不是每个时间序列存储一次。</p><p>对齐的一组时间序列最好同时创建。</p><p>不可以在对齐序列所属的实体下创建非对齐的序列，不可以在非对齐序列所属的实体下创建对齐序列。</p><p>查询数据时，可以对于每一条时间序列单独查询。</p><p>插入数据时，对齐的时间序列中某列的某些行允许有空值。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/114125919-f4850800-9929-11eb-8211-81d4c04af1ec.png"><p>在后续数据定义语言、数据操作语言和 Java 原生接口章节，将对涉及到对齐时间序列的各种操作进行逐一介绍。</p>',16);function I(S,D){const a=i("RouterLink"),c=i("ExternalLinkIcon");return s(),l("div",null,[h(`

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

`),u,o("p",null,[e("在上图所描述的实际场景中，有许多实体所采集的物理量相同，即具有相同的工况名称和类型，因此，可以声明一个"),m,e("来定义可采集的物理量集合。在实践中，元数据模板的使用可帮助减少元数据的资源占用，详细内容参见 "),n(a,{to:"/zh/UserGuide/V0.13.x/Data-Concept/Schema-Template.html"},{default:d(()=>[e("元数据模板文档")]),_:1}),e("。")]),g,o("p",null,[e("其中，对 "),f,e(" 的定义可以参考"),n(a,{to:"/zh/UserGuide/V0.13.x/Reference/Syntax-Conventions.html"},{default:d(()=>[e("语法约定")]),_:1}),e("。")]),_,b,o("ul",null,[v,o("li",null,[w,o("ul",null,[o("li",null,[o("a",x,[e("root.sg"),n(c)]),e('."select"."+-from="."where""where"""."$"，6 个层级分别为 root, sg, select, +-from, where"where", $')]),o("li",null,[o("a",k,[e("root.sg"),n(c)]),e('.````.`select`.`+="from"`.`$`，6 个层级分别为 root, sg, `, select, +-"from", $')])])]),q]),y,o("p",null,[e("时间戳是一个数据到来的时间点，其中包括绝对时间戳和相对时间戳，详细描述参见 "),n(a,{to:"/zh/UserGuide/V0.13.x/Data-Concept/Data-Type.html"},{default:d(()=>[e("数据类型文档")]),_:1}),e("。")]),T])}const N=r(p,[["render",I],["__file","Data-Model-and-Terminology.html.vue"]]);export{N as default};

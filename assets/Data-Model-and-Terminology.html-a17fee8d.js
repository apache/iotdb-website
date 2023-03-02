import{_ as d}from"./122668849-b1c69280-d1ec-11eb-83cb-3b73c40bdf72-9ecf96a5.js";import{_ as l}from"./114125919-f4850800-9929-11eb-8211-81d4c04af1ec-2ac67247.js";import{_ as c,E as h,F as p,af as u,G as t,I as e,ag as a,ac as r,aT as o,C as s}from"./framework-a6959d27.js";const m={},g=o('<h1 id="data-model" tabindex="-1"><a class="header-anchor" href="#data-model" aria-hidden="true">#</a> Data Model</h1><p>A wind power IoT scenario is taken as an example to illustrate how to creat a correct data model in IoTDB.</p><p>According to the enterprise organization structure and equipment entity hierarchy, it is expressed as an attribute hierarchy structure, as shown below. The hierarchical from top to bottom is: power group layer - power plant layer - entity layer - measurement layer. ROOT is the root node, and each node of measurement layer is a leaf node. In the process of using IoTDB, the attributes on the path from ROOT node is directly connected to each leaf node with &quot;.&quot;, thus forming the name of a timeseries in IoTDB. For example, The left-most path in Figure 2.1 can generate a timeseries named <code>root.ln.wf01.wt01.status</code>.</p><center><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="'+d+`"></center><p>Here are the basic concepts of the model involved in IoTDB.</p><h2 id="measurement-entity-storage-group-path" tabindex="-1"><a class="header-anchor" href="#measurement-entity-storage-group-path" aria-hidden="true">#</a> Measurement, Entity, Storage Group, Path</h2><h3 id="measurement-also-called-field" tabindex="-1"><a class="header-anchor" href="#measurement-also-called-field" aria-hidden="true">#</a> Measurement (Also called field)</h3><p>It is information measured by detection equipment in an actual scene and can transform the sensed information into an electrical signal or other desired form of information output and send it to IoTDB. In IoTDB, all data and paths stored are organized in units of measurements.</p><h3 id="entity-also-called-device" tabindex="-1"><a class="header-anchor" href="#entity-also-called-device" aria-hidden="true">#</a> Entity (Also called device)</h3><p><strong>An entity</strong> is an equipped with measurements in real scenarios. In IoTDB, all measurements should have their corresponding entities.</p><h3 id="storage-group" tabindex="-1"><a class="header-anchor" href="#storage-group" aria-hidden="true">#</a> Storage Group</h3><p><strong>A group of entities.</strong> Users can set any prefix path as a storage group. Provided that there are four timeseries <code>root.ln.wf01.wt01.status</code>, <code>root.ln.wf01.wt01.temperature</code>, <code>root.ln.wf02.wt02.hardware</code>, <code>root.ln.wf02.wt02.status</code>, two devices <code>wt01</code>, <code>wt02</code> under the path <code>root.ln</code> may belong to the same owner or the same manufacturer, so d1 and d2 are closely related. At this point, the prefix path root.vehicle can be designated as a storage group, which will enable IoTDB to store all devices under it in the same folder. Newly added devices under <code>root.ln</code> will also belong to this storage group.</p><blockquote><p>Note1: A full path (<code>root.ln.wf01.wt01.status</code> as in the above example) is not allowed to be set as a storage group.</p><p>Note2: The prefix of a timeseries must belong to a storage group. Before creating a timeseries, users must set which storage group the series belongs to. Only timeseries whose storage group is set can be persisted to disk.</p></blockquote><p>Once a prefix path is set as a storage group, the storage group settings cannot be changed.</p><p>After a storage group is set, the ancestral layers, children and descendant layers of the corresponding prefix path are not allowed to be set up again (for example, after <code>root.ln</code> is set as the storage group, the root layer and <code>root.ln.wf01</code> are not allowed to be set as storage groups).</p><p>The Layer Name of storage group can only consist of characters, numbers and underscores, like <code>root.storagegroup_1</code>.</p><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> Path</h3><p>A <code>path</code> is an expression that conforms to the following constraints:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>path       
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),f=t("code",null,"id",-1),y=t("p",null,[e("We call the part of a path divided by "),t("code",null,"'.'"),e(" as a layer ("),t("code",null,"layer_name"),e("). For example: "),t("code",null,"root.a.b.c"),e(" is a path with 4 layers.")],-1),w=t("p",null,[e("The following are the constraints on the layer ("),t("code",null,"layer_name"),e("):")],-1),b=o("<li><p><code>root</code> is a reserved character, and it is only allowed to appear at the beginning layer of the time series mentioned below. If <code>root</code> appears in other layers, it cannot be parsed and an error will be reported.</p></li><li><p>Except for the beginning layer (<code>root</code>) of the time series, the characters supported in other layers are as follows:</p><ul><li>Chinese characters: <code>&quot;\\u2E80&quot;</code> to <code>&quot;\\u9FFF&quot;</code></li><li><code>_</code> <code>:</code> <code>@</code> <code>#</code> <code>$</code> <code>{</code> <code>}</code></li><li><code>&quot;A&quot;</code> to <code>&quot;Z&quot;</code>, <code>&quot;a&quot;</code> to <code>&quot;z&quot;</code>, <code>&quot;0&quot;</code> to <code>&quot;9&quot;</code></li></ul></li>",2),v=t("p",null,[e("In addition to the beginning layer ("),t("code",null,"root"),e(") of the time series and the storage group layer, other layers also support the use of special strings referenced by ` or "),t("code",null,'" '),e(" as its name. It should be noted that the quoted string cannot contain "),t("code",null,"."),e(" characters. Here are some legal examples:")],-1),x={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},_={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},T=o("<li><p>Layer (<code>layer_name</code>) cannot start with a digit unless the layer(<code>layer_name</code>) is quoted with ` or <code>&quot;</code>.</p></li><li><p>In particular, if the system is deployed on a Windows machine, the storage group layer name will be case-insensitive. For example, creating both <code>root.ln</code> and <code>root.LN</code> at the same time is not allowed.</p></li>",2),I=o('<h3 id="path-pattern" tabindex="-1"><a class="header-anchor" href="#path-pattern" aria-hidden="true">#</a> Path Pattern</h3><p>In order to make it easier and faster to express multiple timeseries paths, IoTDB provides users with the path pattern. Users can construct a path pattern by using wildcard <code>*</code> and <code>**</code>. Wildcard can appear in any layer of the path.</p><p><code>*</code> represents one layer. For example, <code>root.vehicle.*.sensor1</code> represents a 4-layer path which is prefixed with <code>root.vehicle</code> and suffixed with <code>sensor1</code>.</p><p><code>**</code> represents (<code>*</code>)+, which is one or more layers of <code>*</code>. For example, <code>root.vehicle.device1.**</code> represents all paths prefixed by <code>root.vehicle.device1</code> with layers greater than or equal to 4, like <code>root.vehicle.device1.*</code>, <code>root.vehicle.device1.*.*</code>, <code>root.vehicle.device1.*.*.*</code>, etc; <code>root.vehicle.**.sensor1</code> represents a path which is prefixed with <code>root.vehicle</code> and suffixed with <code>sensor1</code> and has at least 4 layers.</p><blockquote><p>Note1: Wildcard <code>*</code> and <code>**</code> cannot be placed at the beginning of the path.</p></blockquote><h2 id="timeseries" tabindex="-1"><a class="header-anchor" href="#timeseries" aria-hidden="true">#</a> Timeseries</h2><h3 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp" aria-hidden="true">#</a> Timestamp</h3>',7),q=o('<h3 id="data-point" tabindex="-1"><a class="header-anchor" href="#data-point" aria-hidden="true">#</a> Data point</h3><p><strong>A &quot;time-value&quot; pair</strong>.</p><h3 id="timeseries-1" tabindex="-1"><a class="header-anchor" href="#timeseries-1" aria-hidden="true">#</a> Timeseries</h3><p><strong>The record of a measurement of an entity on the time axis.</strong> Timeseries is a series of data points.</p><p>A measurement of an entity corresponds to a timeseries.</p><p>Also called meter, timeline, and tag, parameter in real time database.</p><p>For example, if entity wt01 in power plant wf01 of power group ln has a measurement named status, its timeseries can be expressed as: <code>root.ln.wf01.wt01.status</code>.</p><h3 id="aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#aligned-timeseries" aria-hidden="true">#</a> Aligned timeseries</h3><p>There is a situation that multiple measurements of an entity are sampled simultaneously in practical applications, forming multiple timeseries aligned on a time column.</p><p>By using aligned timeseries, the timestamp columns of a group of aligned timeseries need to be stored only once in memory and disk when inserting data, instead of once per timeseries.</p><p>It would be best if you created a group of aligned timeseries at the same time.</p><p>You cannot create non-aligned timeseries under the entity to which the aligned timeseries belong, nor can you create aligned timeseries under the entity to which the non-aligned timeseries belong.</p><p>When querying, you can query each timeseries separately.</p><p>When inserting data, it is allowed to insert null value in the aligned timeseries.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="'+l+'"><p>In the following chapters of data definition language, data operation language and Java Native Interface, various operations related to aligned timeseries will be introduced one by one.</p><h2 id="schema-template" tabindex="-1"><a class="header-anchor" href="#schema-template" aria-hidden="true">#</a> Schema Template</h2>',17),k=t("strong",null,"schema template",-1),A=t("p",null,"In the following chapters of, data definition language, data operation language and Java Native Interface, various operations related to schema template will be introduced one by one.",-1);function S(N,D){const n=s("RouterLink"),i=s("ExternalLinkIcon");return h(),p("div",null,[u(`

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

`),g,t("p",null,[e("You can refer to the definition of "),f,e(" in "),a(n,{to:"/UserGuide/V0.13.x/Reference/Syntax-Conventions.html"},{default:r(()=>[e("Syntax-Conventions")]),_:1}),e(".")]),y,w,t("ul",null,[b,t("li",null,[v,t("ul",null,[t("li",null,[t("a",x,[e("root.sg"),a(i)]),e('."select"."+-from="."where""where"""."$", which contains 6 layers: root, sg, select, +-from, where"where", $')]),t("li",null,[t("a",_,[e("root.sg"),a(i)]),e('.````.`select`.`+="from"`.`$`, which contains 6 layers: root, sg, `, select, +-"from", $')])])]),T]),I,t("p",null,[e("The timestamp is the time point at which data is produced. It includes absolute timestamps and relative timestamps. For detailed description, please go to "),a(n,{to:"/UserGuide/V0.13.x/Data-Concept/Data-Type.html"},{default:r(()=>[e("Data Type doc")]),_:1}),e(".")]),q,t("p",null,[e("In the actual scenario, many entities collect the same measurements, that is, they have the same measurements name and type. A "),k,e(" can be declared to define the collectable measurements set. Schema template helps save memory by implementing schema sharing. For detailed description, please refer to "),a(n,{to:"/UserGuide/V0.13.x/Data-Concept/Schema-Template.html"},{default:r(()=>[e("Schema Template doc")]),_:1}),e(".")]),A])}const C=c(m,[["render",S],["__file","Data-Model-and-Terminology.html.vue"]]);export{C as default};
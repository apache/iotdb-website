import{_ as o,r as p,o as c,c as i,a as l,d as n,e as s,b as e,f as t}from"./app-d263b843.js";const r={},u=t(`<h1 id="session-and-tsfile-api" tabindex="-1"><a class="header-anchor" href="#session-and-tsfile-api" aria-hidden="true">#</a> Session And TsFile API</h1><p>When using the Session and TsFile APIs, if the method you call requires parameters such as measurement, device, database, path in the form of String, <strong>please ensure that the parameters passed in the input string is the same as when using the SQL statement</strong>, here are some examples to help you understand. Code example could be found at: <code>example/session/src/main/java/org/apache/iotdb/SyntaxConventionRelatedExample.java</code></p><ol><li>Take creating a time series createTimeseries as an example:</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createTimeseries</span><span class="token punctuation">(</span>
    <span class="token class-name">String</span> path<span class="token punctuation">,</span>
    <span class="token class-name">TSDataType</span> dataType<span class="token punctuation">,</span>
    <span class="token class-name">TSEncoding</span> encoding<span class="token punctuation">,</span>
    <span class="token class-name">CompressionType</span> compressor<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">IoTDBConnectionException</span><span class="token punctuation">,</span> <span class="token class-name">StatementExecutionException</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},k={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>a <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">,</span>compressor<span class="token operator">=</span>SNAPPY<span class="token punctuation">;</span>

<span class="token comment"># node names contain special characters, each node in the time series is [&quot;root&quot;,&quot;sg&quot;,&quot;a.\`\\&quot;b&quot;]</span>
<span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>a.\`\`&quot;b<span class="token punctuation">\`</span></span> <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">,</span>compressor<span class="token operator">=</span>SNAPPY<span class="token punctuation">;</span>

<span class="token comment"># node names are pure numbers</span>
<span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">,</span>compressor<span class="token operator">=</span>SNAPPY<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you call the createTimeseries method, you should assign the path string as follows to ensure that the content of the path string is the same as when using SQL:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// timeseries root.sg.a</span>
<span class="token class-name">String</span> path <span class="token operator">=</span> <span class="token string">&quot;root.sg.a&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// timeseries root.sg.\`a.\`\`&quot;b\`</span>
<span class="token class-name">String</span> path <span class="token operator">=</span> <span class="token string">&quot;root.sg.\`a.\`\`\\&quot;b\`&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// timeseries root.sg.\`111\`</span>
<span class="token class-name">String</span> path <span class="token operator">=</span> <span class="token string">&quot;root.sg.\`111\`&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Take inserting data insertRecord as an example:</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertRecord</span><span class="token punctuation">(</span>
    <span class="token class-name">String</span> deviceId<span class="token punctuation">,</span>
    <span class="token keyword">long</span> time<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> measurements<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TSDataType</span><span class="token punctuation">&gt;</span></span> types<span class="token punctuation">,</span>
    <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> values<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">IoTDBConnectionException</span><span class="token punctuation">,</span> <span class="token class-name">StatementExecutionException</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},g={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},h=t('<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>a.``&quot;b<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>111<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>When you call the insertRecord method, you should assign deviceId and measurements as follows:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// deviceId is root.sg</span>\n<span class="token class-name">String</span> deviceId <span class="token operator">=</span> <span class="token string">&quot;root.sg&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// measurements</span>\n<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> measurements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;`a.``\\&quot;b`&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;`111`&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> measurementList <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>measurements<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Take executeRawDataQuery as an example:</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">SessionDataSet</span> <span class="token function">executeRawDataQuery</span><span class="token punctuation">(</span>\n    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> paths<span class="token punctuation">,</span> \n    <span class="token keyword">long</span> startTime<span class="token punctuation">,</span> \n    <span class="token keyword">long</span> endTime<span class="token punctuation">)</span>\n    <span class="token keyword">throws</span> <span class="token class-name">StatementExecutionException</span><span class="token punctuation">,</span> <span class="token class-name">IoTDBConnectionException</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),b={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},y={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},w=t('<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> a <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg\n\n<span class="token comment"># node name contains special characters</span>\n<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>a.``&quot;b<span class="token punctuation">`</span></span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">;</span>\n\n<span class="token comment"># node names are pure numbers</span>\n<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>111<span class="token punctuation">`</span></span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you call the executeRawDataQuery method, you should assign paths as follows:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// paths</span>\n<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> paths <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;root.sg.a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.sg.`a.``\\&quot;b`&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.sg.`111`&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> pathList <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>paths<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3);function f(S,q){const a=p("ExternalLinkIcon");return c(),i("div",null,[l(`

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

`),u,n("p",null,[s("If you wish to create the time series root.sg.a, "),n("a",d,[s("root.sg"),e(a)]),s('.`a.``"b`, '),n("a",k,[s("root.sg"),e(a)]),s(".`111`, the SQL statement you use should look like this:")]),m,n("p",null,[s("If you want to insert data into the time series root.sg.a, "),n("a",v,[s("root.sg"),e(a)]),s('.`a.``"b`, '),n("a",g,[s("root.sg"),e(a)]),s(".`111`, the SQL statement you use should be as follows:")]),h,n("p",null,[s("If you wish to query the data of the time series root.sg.a, "),n("a",b,[s("root.sg"),e(a)]),s('.`a.``"b`, '),n("a",y,[s("root.sg"),e(a)]),s(".`111`, the SQL statement you use should be as follows :")]),w])}const x=o(r,[["render",f],["__file","Session-And-TsFile-API.html.vue"]]);export{x as default};

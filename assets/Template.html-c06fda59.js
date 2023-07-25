import{_ as e,o as a,c as s,a as n,f as t}from"./app-d4806199.js";const o={},r=t(`<h1 id="schema-template" tabindex="-1"><a class="header-anchor" href="#schema-template" aria-hidden="true">#</a> Schema Template</h1><p>IoTDB supports the schema template function, enabling different entities of the same type to share metadata, reduce the memory usage of metadata, and simplify the management of numerous entities and measurements.</p><p>Note: The <code>schema</code> keyword in the following statements can be omitted.</p><h2 id="create-schema-template" tabindex="-1"><a class="header-anchor" href="#create-schema-template" aria-hidden="true">#</a> Create Schema Template</h2><p>The SQL syntax for creating a metadata template is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">SCHEMA</span> TEMPLATE <span class="token operator">&lt;</span>templateName<span class="token operator">&gt;</span> ALIGNED? <span class="token string">&#39;(&#39;</span> <span class="token operator">&lt;</span>measurementId<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>attributeClauses<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;,&#39;</span> <span class="token operator">&lt;</span>measurementId<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>attributeClauses<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">+</span> <span class="token string">&#39;)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Example 1:</strong> Create a template containing two non-aligned timeseires</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> create schema template t1 <span class="token punctuation">(</span>temperature FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>RLE, status BOOLEAN <span class="token assign-left variable">encoding</span><span class="token operator">=</span>PLAIN <span class="token assign-left variable">compression</span><span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Example 2:</strong> Create a template containing a group of aligned timeseires</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> create schema template t2 aligned <span class="token punctuation">(</span>lat FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>Gorilla, lon FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>Gorilla<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The<code> lat</code> and <code>lon</code> measurements are aligned.</p><h2 id="set-schema-template" tabindex="-1"><a class="header-anchor" href="#set-schema-template" aria-hidden="true">#</a> Set Schema Template</h2><p>After a schema template is created, it should be set to specific path before creating related timeseries or insert data.</p><p><strong>It should be ensured that the related database has been set before setting template.</strong></p><p><strong>It is recommended to set schema template to database path. It is not suggested to set schema template to some path above database</strong></p><p><strong>It is forbidden to create timeseries under a path setting schema template. Schema template shall not be set on a prefix path of an existing timeseries.</strong></p><p>The SQL Statement for setting schema template is as follow:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> schema template t1 to root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="activate-schema-template" tabindex="-1"><a class="header-anchor" href="#activate-schema-template" aria-hidden="true">#</a> Activate Schema Template</h2><p>After setting the schema template, with the system enabled to auto create schema, you can insert data into the timeseries. For example, suppose there&#39;s a database root.sg1 and t1 has been set to root.sg1.d1, then timeseries like root.sg1.d1.temperature and root.sg1.d1.status are available and data points can be inserted.</p><p><strong>Attention</strong>: Before inserting data or the system not enabled to auto create schema, timeseries defined by the schema template will not be created. You can use the following SQL statement to create the timeseries or activate the schema template, act before inserting data:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> create timeseries using schema template on root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Example:</strong> Execute the following statement</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> schema template t1 to root.sg1.d1
IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> schema template t2 to root.sg1.d2
IoTDB<span class="token operator">&gt;</span> create timeseries using schema template on root.sg1.d1
IoTDB<span class="token operator">&gt;</span> create timeseries using schema template on root.sg1.d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show the time series:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> timeseries root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-----------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
<span class="token operator">|</span>             timeseries<span class="token operator">|</span><span class="token builtin class-name">alias</span><span class="token operator">|</span>     database<span class="token operator">|</span>dataType<span class="token operator">|</span>encoding<span class="token operator">|</span>compression<span class="token operator">|</span>tags<span class="token operator">|</span>attributes<span class="token operator">|</span>deadband<span class="token operator">|</span>deadband parameters<span class="token operator">|</span>
+-----------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
<span class="token operator">|</span>root.sg1.d1.temperature<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span>   FLOAT<span class="token operator">|</span>     RLE<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span>
<span class="token operator">|</span>     root.sg1.d1.status<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span> BOOLEAN<span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span>
<span class="token operator">|</span>        root.sg1.d2.lon<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span>   FLOAT<span class="token operator">|</span> GORILLA<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span>
<span class="token operator">|</span>        root.sg1.d2.lat<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span>   FLOAT<span class="token operator">|</span> GORILLA<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span>
+-----------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show the devices:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> devices root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+---------------+---------+
<span class="token operator">|</span>        devices<span class="token operator">|</span>isAligned<span class="token operator">|</span>
+---------------+---------+
<span class="token operator">|</span>    root.sg1.d1<span class="token operator">|</span>    <span class="token boolean">false</span><span class="token operator">|</span>
<span class="token operator">|</span>    root.sg1.d2<span class="token operator">|</span>     <span class="token boolean">true</span><span class="token operator">|</span>
+---------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-schema-template" tabindex="-1"><a class="header-anchor" href="#show-schema-template" aria-hidden="true">#</a> Show Schema Template</h2><ul><li>Show all schema templates</li></ul><p>The SQL statement looks like this:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show schema templates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-------------+
<span class="token operator">|</span>template name<span class="token operator">|</span>
+-------------+
<span class="token operator">|</span>           t2<span class="token operator">|</span>
<span class="token operator">|</span>           t1<span class="token operator">|</span>
+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show nodes under in schema template</li></ul><p>The SQL statement looks like this:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show nodes <span class="token keyword">in</span> schema template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-----------+--------+--------+-----------+
<span class="token operator">|</span>child nodes<span class="token operator">|</span>dataType<span class="token operator">|</span>encoding<span class="token operator">|</span>compression<span class="token operator">|</span>
+-----------+--------+--------+-----------+
<span class="token operator">|</span>temperature<span class="token operator">|</span>   FLOAT<span class="token operator">|</span>     RLE<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>
<span class="token operator">|</span>     status<span class="token operator">|</span> BOOLEAN<span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>
+-----------+--------+--------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show the path prefix where a schema template is set</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show paths <span class="token builtin class-name">set</span> schema template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-----------+
<span class="token operator">|</span>child paths<span class="token operator">|</span>
+-----------+
<span class="token operator">|</span>root.sg1.d1<span class="token operator">|</span>
+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show the path prefix where a schema template is used (i.e. the time series has been created)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show paths using schema template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-----------+
<span class="token operator">|</span>child paths<span class="token operator">|</span>
+-----------+
<span class="token operator">|</span>root.sg1.d1<span class="token operator">|</span>
+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deactivate-schema-template" tabindex="-1"><a class="header-anchor" href="#deactivate-schema-template" aria-hidden="true">#</a> Deactivate Schema Template</h2><p>To delete a group of timeseries represented by schema template, namely deactivate the schema template, use the following SQL statement:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> delete timeseries of schema template t1 from root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> deactivate schema template t1 from root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The deactivation supports batch process.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> delete timeseries of schema template t1 from root.sg1.*, root.sg2.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> deactivate schema template t1 from root.sg1.*, root.sg2.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If the template name is not provided in sql, all template activation on paths matched by given path pattern will be removed.</p><h2 id="unset-schema-template" tabindex="-1"><a class="header-anchor" href="#unset-schema-template" aria-hidden="true">#</a> Unset Schema Template</h2><p>The SQL Statement for unsetting schema template is as follow:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">unset</span> schema template t1 from root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Attention</strong>: It should be guaranteed that none of the timeseries represented by the target schema template exists, before unset it. It can be achieved by deactivation operation.</p><h2 id="drop-schema-template" tabindex="-1"><a class="header-anchor" href="#drop-schema-template" aria-hidden="true">#</a> Drop Schema Template</h2><p>The SQL Statement for dropping schema template is as follow:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> drop schema template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Attention</strong>: Dropping an already set template is not supported.</p><h2 id="alter-schema-template" tabindex="-1"><a class="header-anchor" href="#alter-schema-template" aria-hidden="true">#</a> Alter Schema Template</h2><p>In a scenario where measurements need to be added, you can modify the schema template to add measurements to all devices using the schema template.</p><p>The SQL Statement for altering schema template is as follow:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> alter schema template t1 <span class="token function">add</span> <span class="token punctuation">(</span>speed FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>RLE, FLOAT TEXT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>PLAIN <span class="token assign-left variable">compression</span><span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>When executing data insertion to devices with schema template set on related prefix path and there are measurements not present in this schema template, the measurements will be auto added to this schema template.</strong></p>`,72);function l(p,i){return a(),s("div",null,[n(`

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

`),r])}const c=e(o,[["render",l],["__file","Template.html.vue"]]);export{c as default};

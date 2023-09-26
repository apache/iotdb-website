import{_ as e,o as a,c as s,a as n,f as t}from"./app-342a215c.js";const i={},r=t(`<h1 id="general-sql-statements" tabindex="-1"><a class="header-anchor" href="#general-sql-statements" aria-hidden="true">#</a> General SQL Statements</h1><h2 id="database-management" tabindex="-1"><a class="header-anchor" href="#database-management" aria-hidden="true">#</a> Database Management</h2><p>Database is similar to the database in the relational database, which is a collection of structured time series data.</p><h3 id="create-database" tabindex="-1"><a class="header-anchor" href="#create-database" aria-hidden="true">#</a> create database</h3><p>Create a database named <code>root.ln</code> with the following syntax:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> root<span class="token punctuation">.</span>ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="show-databases" tabindex="-1"><a class="header-anchor" href="#show-databases" aria-hidden="true">#</a> show databases</h3><p>View all databases:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="delete-database" tabindex="-1"><a class="header-anchor" href="#delete-database" aria-hidden="true">#</a> delete database</h3><p>Drop the database named <code>root.ln</code>:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">DATABASE</span> root<span class="token punctuation">.</span>ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="count-databases" tabindex="-1"><a class="header-anchor" href="#count-databases" aria-hidden="true">#</a> count databases</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>COUNT <span class="token keyword">DATABASES</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="time-series-management" tabindex="-1"><a class="header-anchor" href="#time-series-management" aria-hidden="true">#</a> Time Series Management</h2><p>Time series is a collection of data points indexed by time. In IoTDB, time series refers to a complete sequence of measurement points. This section mainly introduces the management of time series.</p><h3 id="create-timeseries" tabindex="-1"><a class="header-anchor" href="#create-timeseries" aria-hidden="true">#</a> create timeseries</h3><p>The encoding method and data type need to be specified. For example, create a time series named <code>root.ln.wf01.wt01.temperature</code>:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span>temperature <span class="token keyword">WITH</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>ENCODING<span class="token operator">=</span>RLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="show-timeseries" tabindex="-1"><a class="header-anchor" href="#show-timeseries" aria-hidden="true">#</a> show timeseries</h3><p>View all time series:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> TIMESERIES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Use wildcards to match time series under database <code>root.ln</code>:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="delete-timeseries" tabindex="-1"><a class="header-anchor" href="#delete-timeseries" aria-hidden="true">#</a> delete timeseries</h3><p>Delete a time series named <code>root.ln.wf01.wt01.temperature</code>:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span>temperature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="count-timeseries" tabindex="-1"><a class="header-anchor" href="#count-timeseries" aria-hidden="true">#</a> count timeseries</h3><p>Count the total number of time series:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>COUNT TIMESERIES root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Count the number of time series under a wildcard path:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>COUNT TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="time-series-path-management" tabindex="-1"><a class="header-anchor" href="#time-series-path-management" aria-hidden="true">#</a> Time Series Path Management</h2><p>In addition to the concept of time series, IoTDB also has the concepts of subpaths and devices.</p><p><strong>Subpath</strong>: It is a part of the path in a complete time series name. For example, if the time series name is <code>root.ln.wf01.wt01.temperature</code>, then <code>root.ln</code>, <code>root.ln.wf01</code>, and <code>root.ln.wf01.wt01</code> are all its subpaths.</p><p><strong>Device</strong>: It is a combination of a group of time series. In IoTDB, the device is a subpath from the root to the penultimate node. If the time series name is <code>root.ln.wf01.wt01.temperature</code>, then <code>root.ln.wf01.wt01</code> is its device.</p><h3 id="show-devices" tabindex="-1"><a class="header-anchor" href="#show-devices" aria-hidden="true">#</a> show devices</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> DEVICES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="show-child-paths" tabindex="-1"><a class="header-anchor" href="#show-child-paths" aria-hidden="true">#</a> show child paths</h3><p>Check out the next level of <code>root.ln</code>:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> CHILD PATHS root<span class="token punctuation">.</span>ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="show-child-nodes" tabindex="-1"><a class="header-anchor" href="#show-child-nodes" aria-hidden="true">#</a> show child nodes</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> CHILD NODES root<span class="token punctuation">.</span>ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="count-devices" tabindex="-1"><a class="header-anchor" href="#count-devices" aria-hidden="true">#</a> count devices</h3><p>Count the number of devices:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>COUNT DEVICES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="count-nodes" tabindex="-1"><a class="header-anchor" href="#count-nodes" aria-hidden="true">#</a> count nodes</h3><p>Count the number of nodes at the specified level in the path:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>COUNT NODES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">LEVEL</span><span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="query-data" tabindex="-1"><a class="header-anchor" href="#query-data" aria-hidden="true">#</a> Query Data</h2><p>The following are commonly used query statements in IoTDB.</p><h3 id="query-the-data-of-the-specified-time-series" tabindex="-1"><a class="header-anchor" href="#query-the-data-of-the-specified-time-series" aria-hidden="true">#</a> Query the data of the specified time series</h3><p>Query all time series data under the device <code>root.ln.wf01.wt01</code>:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="query-time-series-data-within-a-certain-time-range" tabindex="-1"><a class="header-anchor" href="#query-time-series-data-within-a-certain-time-range" aria-hidden="true">#</a> Query time series data within a certain time range</h3><p>Query the data in the time series <code>root.ln.wf01.wt01.temperature</code> whose timestamp is greater than 2022-01-01T00:05:00.000:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> temperature <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">WHERE</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="query-time-series-data-whose-values-are-within-the-specified-range" tabindex="-1"><a class="header-anchor" href="#query-time-series-data-whose-values-are-within-the-specified-range" aria-hidden="true">#</a> Query time series data whose values are within the specified range</h3><p>Query the data whose value is greater than 36.5 in the time series <code>root.ln.wf01.wt01.temperature</code>:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> temperature <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">WHERE</span> temperature <span class="token operator">&gt;</span> <span class="token number">36.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="use-last-to-query-the-latest-point-data" tabindex="-1"><a class="header-anchor" href="#use-last-to-query-the-latest-point-data" aria-hidden="true">#</a> Use last to query the latest point data</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">last</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,62);function d(o,l){return a(),s("div",null,[n(`

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

`),r])}const p=e(i,[["render",d],["__file","General-SQL-Statements.html.vue"]]);export{p as default};

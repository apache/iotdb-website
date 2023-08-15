import{_ as s,r as d,o as l,c as t,a,d as e,e as r,b as o,f as n}from"./app-8a2380a8.js";const c={},v=n(`<h1 id="node-management" tabindex="-1"><a class="header-anchor" href="#node-management" aria-hidden="true">#</a> Node Management</h1><h2 id="show-child-paths" tabindex="-1"><a class="header-anchor" href="#show-child-paths" aria-hidden="true">#</a> Show Child Paths</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CHILD PATHS pathPattern
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Return all child paths and their node types of all the paths matching pathPattern.</p><p>node types: ROOT -&gt; DB INTERNAL -&gt; DATABASE -&gt; INTERNAL -&gt; DEVICE -&gt; TIMESERIES</p><p>Example：</p><ul><li>return the child paths of root.ln：show child paths root.ln</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+----------+
| child paths|node types|
+------------+----------+
|root.ln.wf01|  INTERNAL|
|root.ln.wf02|  INTERNAL|
+------------+----------+
Total line number = 2
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>get all paths in form of root.xx.xx.xx：show child paths root.xx.xx</p></blockquote><h2 id="show-child-nodes" tabindex="-1"><a class="header-anchor" href="#show-child-nodes" aria-hidden="true">#</a> Show Child Nodes</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CHILD NODES pathPattern
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Return all child nodes of the pathPattern.</p><p>Example：</p><ul><li>return the child nodes of root：show child nodes root</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+
| child nodes|
+------------+
|          ln|
+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>return the child nodes of root.ln：show child nodes root.ln</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+
| child nodes|
+------------+
|        wf01|
|        wf02|
+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-nodes" tabindex="-1"><a class="header-anchor" href="#count-nodes" aria-hidden="true">#</a> Count Nodes</h2><p>IoTDB is able to use <code>COUNT NODES &lt;PathPattern&gt; LEVEL=&lt;INTEGER&gt;</code> to count the number of nodes at<br> the given level in current Metadata Tree considering a given pattern. IoTDB will find paths that<br> match the pattern and counts distinct nodes at the specified level among the matched paths.<br> This could be used to query the number of devices with specified measurements. The usage are as<br> follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; COUNT NODES root.** LEVEL=2
IoTDB &gt; COUNT NODES root.ln.** LEVEL=2
IoTDB &gt; COUNT NODES root.ln.wf01.** LEVEL=3
IoTDB &gt; COUNT NODES root.**.temperature LEVEL=3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As for the above mentioned example and Metadata tree, you can get following results:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+
|count(nodes)|
+------------+
|           4|
+------------+
Total line number = 1
It costs 0.003s

+------------+
|count(nodes)|
+------------+
|           2|
+------------+
Total line number = 1
It costs 0.002s

+------------+
|count(nodes)|
+------------+
|           1|
+------------+
Total line number = 1
It costs 0.002s

+------------+
|count(nodes)|
+------------+
|           2|
+------------+
Total line number = 1
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.</p></blockquote><h2 id="show-devices" tabindex="-1"><a class="header-anchor" href="#show-devices" aria-hidden="true">#</a> Show Devices</h2><ul><li>SHOW DEVICES pathPattern? (WITH DATABASE)? devicesWhereClause? limitClause?</li></ul><p>Similar to <code>Show Timeseries</code>, IoTDB also supports two ways of viewing devices:</p><ul><li><code>SHOW DEVICES</code> statement presents all devices&#39; information, which is equal to <code>SHOW DEVICES root.**</code>.</li><li><code>SHOW DEVICES &lt;PathPattern&gt;</code> statement specifies the <code>PathPattern</code> and returns the devices information matching the pathPattern and under the given level.</li><li><code>WHERE</code> condition supports <code>DEVICE contains &#39;xxx&#39;</code> to do a fuzzy query based on the device name.</li></ul><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show devices
IoTDB&gt; show devices root.ln.**
IoTDB&gt; show devices root.ln.** where device contains &#39;t&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can get results below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------+---------+
|            devices|isAligned|
+-------------------+---------+
|  root.ln.wf01.wt01|    false|
|  root.ln.wf02.wt02|    false|
|root.sgcc.wf03.wt01|    false|
|    root.turbine.d1|    false|
+-------------------+---------+
Total line number = 4
It costs 0.002s

+-----------------+---------+
|          devices|isAligned|
+-----------------+---------+
|root.ln.wf01.wt01|    false|
|root.ln.wf02.wt02|    false|
+-----------------+---------+
Total line number = 2
It costs 0.001s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>isAligned</code> indicates whether the timeseries under the device are aligned.</p><p>To view devices&#39; information with database, we can use <code>SHOW DEVICES WITH DATABASE</code> statement.</p><ul><li><code>SHOW DEVICES WITH DATABASE</code> statement presents all devices&#39; information with their database.</li><li><code>SHOW DEVICES &lt;PathPattern&gt; WITH DATABASE</code> statement specifies the <code>PathPattern</code> and returns the<br> devices&#39; information under the given level with their database information.</li></ul><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show devices with database
IoTDB&gt; show devices root.ln.** with database
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can get results below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------+-------------+---------+
|            devices|     database|isAligned|
+-------------------+-------------+---------+
|  root.ln.wf01.wt01|      root.ln|    false|
|  root.ln.wf02.wt02|      root.ln|    false|
|root.sgcc.wf03.wt01|    root.sgcc|    false|
|    root.turbine.d1| root.turbine|    false|
+-------------------+-------------+---------+
Total line number = 4
It costs 0.003s

+-----------------+-------------+---------+
|          devices|     database|isAligned|
+-----------------+-------------+---------+
|root.ln.wf01.wt01|      root.ln|    false|
|root.ln.wf02.wt02|      root.ln|    false|
+-----------------+-------------+---------+
Total line number = 2
It costs 0.001s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-devices" tabindex="-1"><a class="header-anchor" href="#count-devices" aria-hidden="true">#</a> Count Devices</h2>`,39),u=n(`<p>The above statement is used to count the number of devices. At the same time, it is allowed to specify <code>PathPattern</code> to count the number of devices matching the <code>PathPattern</code>.</p><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show devices
IoTDB&gt; count devices
IoTDB&gt; count devices root.ln.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can get results below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------+---------+
|            devices|isAligned|
+-------------------+---------+
|root.sgcc.wf03.wt03|    false|
|    root.turbine.d1|    false|
|  root.ln.wf02.wt02|    false|
|  root.ln.wf01.wt01|    false|
+-------------------+---------+
Total line number = 4
It costs 0.024s

+--------------+
|count(devices)|
+--------------+
|             4|
+--------------+
Total line number = 1
It costs 0.004s

+--------------+
|count(devices)|
+--------------+
|             2|
+--------------+
Total line number = 1
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(b,h){const i=d("PathPattern");return l(),t("div",null,[a(`

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

`),v,e("ul",null,[e("li",null,[r("COUNT DEVICES /"),o(i)])]),u])}const g=s(c,[["render",m],["__file","Node.html.vue"]]);export{g as default};

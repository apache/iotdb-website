import{_ as e,o as i,c as n,a as s,f as d}from"./app-1c59ff80.js";const l={},t=d(`<h1 id="node-management" tabindex="-1"><a class="header-anchor" href="#node-management" aria-hidden="true">#</a> Node Management</h1><h2 id="show-child-paths" tabindex="-1"><a class="header-anchor" href="#show-child-paths" aria-hidden="true">#</a> Show Child Paths</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CHILD PATHS pathPattern ? limitClause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Return all child paths of all the paths matching pathPattern.</p><p>The default size of result set is 10000000. To query more child paths, please use <code>limit</code> and <code>offset</code>.</p><p>Example：</p><ul><li>return the child paths of root.ln：show child paths root.ln</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+
| child paths|
+------------+
|root.ln.wf01|
|root.ln.wf02|
+------------+
Total line number = 2
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>get all paths in form of root.xx.xx.xx：show child paths root.xx.xx</p></blockquote><h2 id="show-child-nodes" tabindex="-1"><a class="header-anchor" href="#show-child-nodes" aria-hidden="true">#</a> Show Child Nodes</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CHILD NODES pathPattern ? limitClause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Return all child nodes of the pathPattern.</p><p>The default size of result set is 10000000. To query more child paths, please use <code>limit</code> and <code>offset</code>.</p><p>Example：</p><ul><li>return the child nodes of root：show child nodes root</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As for the above mentioned example and Metadata tree, you can get following results:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----+
|count|
+-----+
|    4|
+-----+
Total line number = 1
It costs 0.003s

+-----+
|count|
+-----+
|    2|
+-----+
Total line number = 1
It costs 0.002s

+-----+
|count|
+-----+
|    1|
+-----+
Total line number = 1
It costs 0.002s

+-----+
|count|
+-----+
|    2|
+-----+
Total line number = 1
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.</p></blockquote><h2 id="show-devices" tabindex="-1"><a class="header-anchor" href="#show-devices" aria-hidden="true">#</a> Show Devices</h2><ul><li>SHOW DEVICES pathPattern? (WITH STORAGE GROUP)? limitClause? #showDevices</li></ul><p>The default size of result set is 10000000. To query more child paths, please use <code>limit</code> and <code>offset</code>.</p><p>Similar to <code>Show Timeseries</code>, IoTDB also supports two ways of viewing devices:</p><ul><li><code>SHOW DEVICES</code> statement presents all devices&#39; information, which is equal to <code>SHOW DEVICES root.**</code>.</li><li><code>SHOW DEVICES &lt;PathPattern&gt;</code> statement specifies the <code>PathPattern</code> and returns the devices information matching the pathPattern and under the given level.</li></ul><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show devices
IoTDB&gt; show devices root.ln.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can get results below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------+---------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>isAligned</code> indicates whether the timeseries under the device are aligned.</p><p>To view devices&#39; information with storage group, we can use <code>SHOW DEVICES WITH STORAGE GROUP</code> statement.</p><ul><li><code>SHOW DEVICES WITH STORAGE GROUP</code> statement presents all devices&#39; information with their storage group.</li><li><code>SHOW DEVICES &lt;PathPattern&gt; WITH STORAGE GROUP</code> statement specifies the <code>PathPattern</code> and returns the<br> devices&#39; information under the given level with their storage group information.</li></ul><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show devices with storage group
IoTDB&gt; show devices root.ln.** with storage group
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can get results below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------+-------------+---------+
|            devices|storage group|isAligned|
+-------------------+-------------+---------+
|  root.ln.wf01.wt01|      root.ln|    false|
|  root.ln.wf02.wt02|      root.ln|    false|
|root.sgcc.wf03.wt01|    root.sgcc|    false|
|    root.turbine.d1| root.turbine|    false|
+-------------------+-------------+---------+
Total line number = 4
It costs 0.003s

+-----------------+-------------+---------+
|          devices|storage group|isAligned|
+-----------------+-------------+---------+
|root.ln.wf01.wt01|      root.ln|    false|
|root.ln.wf02.wt02|      root.ln|    false|
+-----------------+-------------+---------+
Total line number = 2
It costs 0.001s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function a(r,o){return i(),n("div",null,[s(`

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

`),t])}const v=e(l,[["render",a],["__file","Node.html.vue"]]);export{v as default};

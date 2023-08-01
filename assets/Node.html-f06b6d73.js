import{_ as e,o as n,c as i,a as s,f as d}from"./app-2cc08c2c.js";const l={},a=d(`<h2 id="节点管理" tabindex="-1"><a class="header-anchor" href="#节点管理" aria-hidden="true">#</a> 节点管理</h2><h3 id="查看子路径" tabindex="-1"><a class="header-anchor" href="#查看子路径" aria-hidden="true">#</a> 查看子路径</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CHILD PATHS pathPattern
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以查看此路径模式所匹配的所有路径的下一层的所有路径和它对应的节点类型，即pathPattern.*所匹配的路径及其节点类型。</p><p>节点类型：ROOT -&gt; SG INTERNAL -&gt; DATABASE -&gt; INTERNAL -&gt; DEVICE -&gt; TIMESERIES</p><p>示例：</p><ul><li>查询 root.ln 的下一层：show child paths root.ln</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+----------+
| child paths|node types|
+------------+----------+
|root.ln.wf01|  INTERNAL|
|root.ln.wf02|  INTERNAL|
+------------+----------+
Total line number = 2
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询形如 root.xx.xx.xx 的路径：show child paths root.*.*</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+
|    child paths|
+---------------+
|root.ln.wf01.s1|
|root.ln.wf02.s2|
+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看子节点" tabindex="-1"><a class="header-anchor" href="#查看子节点" aria-hidden="true">#</a> 查看子节点</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CHILD NODES pathPattern
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以查看此路径模式所匹配的节点的下一层的所有节点。</p><p>示例：</p><ul><li>查询 root 的下一层：show child nodes root</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+
| child nodes|
+------------+
|          ln|
+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询 root.ln 的下一层 ：show child nodes root.ln</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+
| child nodes|
+------------+
|        wf01|
|        wf02|
+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统计节点数" tabindex="-1"><a class="header-anchor" href="#统计节点数" aria-hidden="true">#</a> 统计节点数</h3><p>IoTDB 支持使用<code>COUNT NODES &lt;PathPattern&gt; LEVEL=&lt;INTEGER&gt;</code>来统计当前 Metadata<br> 树下满足某路径模式的路径中指定层级的节点个数。这条语句可以用来统计带有特定采样点的设备数。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; COUNT NODES root.** LEVEL=2
IoTDB &gt; COUNT NODES root.ln.** LEVEL=2
IoTDB &gt; COUNT NODES root.ln.wf01.* LEVEL=3
IoTDB &gt; COUNT NODES root.**.temperature LEVEL=3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上面提到的例子和 Metadata Tree，你可以获得如下结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：时间序列的路径只是过滤条件，与 level 的定义无关。</p></blockquote><h3 id="查看设备" tabindex="-1"><a class="header-anchor" href="#查看设备" aria-hidden="true">#</a> 查看设备</h3><ul><li>SHOW DEVICES pathPattern? (WITH DATABASE)? limitClause? #showDevices</li></ul><p>与 <code>Show Timeseries</code> 相似，IoTDB 目前也支持两种方式查看设备。</p><ul><li><code>SHOW DEVICES</code> 语句显示当前所有的设备信息，等价于 <code>SHOW DEVICES root.**</code>。</li><li><code>SHOW DEVICES &lt;PathPattern&gt;</code> 语句规定了 <code>PathPattern</code>，返回给定的路径模式所匹配的设备信息。</li></ul><p>SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show devices
IoTDB&gt; show devices root.ln.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以获得如下数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------+---------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>isAligned</code>表示该设备下的时间序列是否对齐。</p><p>查看设备及其 database 信息，可以使用 <code>SHOW DEVICES WITH DATABASE</code> 语句。</p><ul><li><code>SHOW DEVICES WITH DATABASE</code> 语句显示当前所有的设备信息和其所在的 database，等价于 <code>SHOW DEVICES root.**</code>。</li><li><code>SHOW DEVICES &lt;PathPattern&gt; WITH DATABASE</code> 语句规定了 <code>PathPattern</code>，返回给定的路径模式所匹配的设备信息和其所在的 database。</li></ul><p>SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show devices with database
IoTDB&gt; show devices root.ln.** with database
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以获得如下数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------+-------------+---------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统计设备数量" tabindex="-1"><a class="header-anchor" href="#统计设备数量" aria-hidden="true">#</a> 统计设备数量</h3><ul><li>COUNT DEVICES &lt;PathPattern&gt;</li></ul><p>上述语句用于统计设备的数量，同时允许指定<code>PathPattern</code> 用于统计匹配该<code>PathPattern</code> 的设备数量</p><p>SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show devices
IoTDB&gt; count devices
IoTDB&gt; count devices root.ln.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以获得如下数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------+---------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46);function t(r,v){return n(),i("div",null,[s(`

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

`),a])}const o=e(l,[["render",t],["__file","Node.html.vue"]]);export{o as default};

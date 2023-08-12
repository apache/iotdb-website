import{_ as t,r as s,o as l,c as r,a as o,d as c,e,b as i,w as n,f as d}from"./app-6140e563.js";const u={},v=d(`<h1 id="元数据操作" tabindex="-1"><a class="header-anchor" href="#元数据操作" aria-hidden="true">#</a> 元数据操作</h1><h2 id="数据库管理" tabindex="-1"><a class="header-anchor" href="#数据库管理" aria-hidden="true">#</a> 数据库管理</h2><p>数据库（Database）可以被视为关系数据库中的Database。</p><h3 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库" aria-hidden="true">#</a> 创建数据库</h3><p>我们可以根据存储模型建立相应的数据库。如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; CREATE DATABASE root.ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，database 的父子节点都不能再设置 database。例如在已经有<code>root.ln</code>和<code>root.sgcc</code>这两个 database 的情况下，创建<code>root.ln.wf01</code> database 是不可行的。系统将给出相应的错误提示，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; CREATE DATABASE root.ln.wf01
Msg: 300: root.ln has already been created as database.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Database 节点名只支持中英文字符、数字、下划线的组合，如果想设置为纯数字或者包含其他字符，需要用反引号(\`\`)把 database 名称引起来。</p><p>还需注意，如果在 Windows 系统上部署，database 名是大小写不敏感的。例如同时创建<code>root.ln</code> 和 <code>root.LN</code> 是不被允许的。</p><h3 id="查看数据库" tabindex="-1"><a class="header-anchor" href="#查看数据库" aria-hidden="true">#</a> 查看数据库</h3>`,11),b=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show databases
IoTDB&gt; show databases root.*
IoTDB&gt; show databases root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+----+-------------------------+-----------------------+-----------------------+
|     database| ttl|schema_replication_factor|data_replication_factor|time_partition_interval|
+-------------+----+-------------------------+-----------------------+-----------------------+
|    root.sgcc|null|                        2|                      2|                 604800|
|      root.ln|null|                        2|                      2|                 604800|
+-------------+----+-------------------------+-----------------------+-----------------------+
Total line number = 2
It costs 0.060s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库" aria-hidden="true">#</a> 删除数据库</h3><p>用户可以使用<code>DELETE DATABASE &lt;PathPattern&gt;</code>语句删除该路径模式匹配的所有的数据库。在删除的过程中，需要注意的是数据库的数据也会被删除。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; DELETE DATABASE root.ln
IoTDB &gt; DELETE DATABASE root.sgcc
// 删除所有数据，时间序列以及数据库
IoTDB &gt; DELETE DATABASE root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统计数据库数量" tabindex="-1"><a class="header-anchor" href="#统计数据库数量" aria-hidden="true">#</a> 统计数据库数量</h3><p>用户可以使用<code>COUNT DATABASES &lt;PathPattern&gt;</code>语句统计数据库的数量，允许指定<code>PathPattern</code> 用来统计匹配该<code>PathPattern</code> 的数据库的数量</p><p>SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show databases
IoTDB&gt; count databases
IoTDB&gt; count databases root.*
IoTDB&gt; count databases root.sgcc.*
IoTDB&gt; count databases root.sgcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+
|     database|
+-------------+
|    root.sgcc|
| root.turbine|
|      root.ln|
+-------------+
Total line number = 3
It costs 0.003s

+-------------+
|     Database|
+-------------+
|            3|
+-------------+
Total line number = 1
It costs 0.003s

+-------------+
|     Database|
+-------------+
|            3|
+-------------+
Total line number = 1
It costs 0.002s

+-------------+
|     Database|
+-------------+
|            0|
+-------------+
Total line number = 1
It costs 0.002s

+-------------+
|     database|
+-------------+
|            1|
+-------------+
Total line number = 1
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置异构数据库-进阶操作" tabindex="-1"><a class="header-anchor" href="#设置异构数据库-进阶操作" aria-hidden="true">#</a> 设置异构数据库（进阶操作）</h3><p>在熟悉 IoTDB 元数据建模的前提下，用户可以在 IoTDB 中设置异构的数据库，以便应对不同的生产需求。</p><p>目前支持的数据库异构参数有：</p><table><thead><tr><th>参数名</th><th>参数类型</th><th>参数描述</th></tr></thead><tbody><tr><td>TTL</td><td>Long</td><td>数据库的 TTL</td></tr><tr><td>SCHEMA_REPLICATION_FACTOR</td><td>Integer</td><td>数据库的元数据副本数</td></tr><tr><td>DATA_REPLICATION_FACTOR</td><td>Integer</td><td>数据库的数据副本数</td></tr><tr><td>SCHEMA_REGION_GROUP_NUM</td><td>Integer</td><td>数据库的 SchemaRegionGroup 数量</td></tr><tr><td>DATA_REGION_GROUP_NUM</td><td>Integer</td><td>数据库的 DataRegionGroup 数量</td></tr></tbody></table><p>用户在配置异构参数时需要注意以下三点：</p><ul><li>TTL 和 TIME_PARTITION_INTERVAL 必须为正整数。</li><li>SCHEMA_REPLICATION_FACTOR 和 DATA_REPLICATION_FACTOR 必须小于等于已部署的 DataNode 数量。</li><li>SCHEMA_REGION_GROUP_NUM 和 DATA_REGION_GROUP_NUM 的功能与 iotdb-common.properties 配置文件中的<br><code>schema_region_group_extension_policy</code> 和 <code>data_region_group_extension_policy</code> 参数相关，以 DATA_REGION_GROUP_NUM 为例：<br> 若设置 <code>data_region_group_extension_policy=CUSTOM</code>，则 DATA_REGION_GROUP_NUM 将作为 Database 拥有的 DataRegionGroup 的数量；<br> 若设置 <code>data_region_group_extension_policy=AUTO</code>，则 DATA_REGION_GROUP_NUM 将作为 Database 拥有的 DataRegionGroup 的配额下界，即当该 Database 开始写入数据时，将至少拥有此数量的 DataRegionGroup。</li></ul><p>用户可以在创建 Database 时设置任意异构参数，或在单机/分布式 IoTDB 运行时调整部分异构参数。</p><h4 id="创建-database-时设置异构参数" tabindex="-1"><a class="header-anchor" href="#创建-database-时设置异构参数" aria-hidden="true">#</a> 创建 Database 时设置异构参数</h4><p>用户可以在创建 Database 时设置上述任意异构参数，SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE DATABASE prefixPath (WITH databaseAttributeClause (COMMA? databaseAttributeClause)*)?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE DATABASE root.db WITH SCHEMA_REPLICATION_FACTOR=1, DATA_REPLICATION_FACTOR=3, SCHEMA_REGION_GROUP_NUM=1, DATA_REGION_GROUP_NUM=2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="运行时调整异构参数" tabindex="-1"><a class="header-anchor" href="#运行时调整异构参数" aria-hidden="true">#</a> 运行时调整异构参数</h4><p>用户可以在 IoTDB 运行时调整部分异构参数，SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER DATABASE prefixPath WITH databaseAttributeClause (COMMA? databaseAttributeClause)*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER DATABASE root.db WITH SCHEMA_REGION_GROUP_NUM=1, DATA_REGION_GROUP_NUM=2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，运行时只能调整下列异构参数：</p><ul><li>SCHEMA_REGION_GROUP_NUM</li><li>DATA_REGION_GROUP_NUM</li></ul><h4 id="查看异构数据库" tabindex="-1"><a class="header-anchor" href="#查看异构数据库" aria-hidden="true">#</a> 查看异构数据库</h4><p>用户可以查询每个 Database 的具体异构配置，SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DATABASES DETAILS prefixPath?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW DATABASES DETAILS
+--------+--------+-----------------------+---------------------+---------------------+--------------------+-----------------------+-----------------------+------------------+---------------------+---------------------+
|Database|     TTL|SchemaReplicationFactor|DataReplicationFactor|TimePartitionInterval|SchemaRegionGroupNum|MinSchemaRegionGroupNum|MaxSchemaRegionGroupNum|DataRegionGroupNum|MinDataRegionGroupNum|MaxDataRegionGroupNum|
+--------+--------+-----------------------+---------------------+---------------------+--------------------+-----------------------+-----------------------+------------------+---------------------+---------------------+
|root.db1|    null|                      1|                    3|            604800000|                   0|                      1|                      1|                 0|                    2|                    2|
|root.db2|86400000|                      1|                    1|            604800000|                   0|                      1|                      1|                 0|                    2|                    2|
|root.db3|    null|                      1|                    1|            604800000|                   0|                      1|                      1|                 0|                    2|                    2|
+--------+--------+-----------------------+---------------------+---------------------+--------------------+-----------------------+-----------------------+------------------+---------------------+---------------------+
Total line number = 3
It costs 0.058s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>各列查询结果依次为：</p><ul><li>数据库名称</li><li>数据库的 TTL</li><li>数据库的元数据副本数</li><li>数据库的数据副本数</li><li>数据库的时间分区间隔</li><li>数据库当前拥有的 SchemaRegionGroup 数量</li><li>数据库需要拥有的最小 SchemaRegionGroup 数量</li><li>数据库允许拥有的最大 SchemaRegionGroup 数量</li><li>数据库当前拥有的 DataRegionGroup 数量</li><li>数据库需要拥有的最小 DataRegionGroup 数量</li><li>数据库允许拥有的最大 DataRegionGroup 数量</li></ul>`,38);function m(h,p){const a=s("RouterLink");return l(),r("div",null,[o(`

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

`),v,c("p",null,[e("在 database 创建后，我们可以使用 "),i(a,{to:"/zh/UserGuide/Master/stage/Reference/SQL-Reference.html"},{default:n(()=>[e("SHOW DATABASES")]),_:1}),e(" 语句和 "),i(a,{to:"/zh/UserGuide/Master/stage/Reference/SQL-Reference.html"},{default:n(()=>[e("SHOW DATABASES <PathPattern>")]),_:1}),e(" 来查看 database，SQL 语句如下所示：")]),b])}const A=t(u,[["render",m],["__file","Database.html.vue"]]);export{A as default};

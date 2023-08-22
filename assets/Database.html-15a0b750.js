import{_ as i,r as d,o as r,c as o,a as l,d as c,e,b as t,w as n,f as s}from"./app-5080018f.js";const u={},h=s(`<h1 id="database-management" tabindex="-1"><a class="header-anchor" href="#database-management" aria-hidden="true">#</a> Database Management</h1><h2 id="create-database" tabindex="-1"><a class="header-anchor" href="#create-database" aria-hidden="true">#</a> Create Database</h2><p>According to the storage model we can set up the corresponding database. Two SQL statements are supported for creating databases, as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; create database root.ln
IoTDB &gt; create database root.sgcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>We can thus create two databases using the above two SQL statements.</p><p>It is worth noting that when the path itself or the parent/child layer of the path is already created as database, the path is then not allowed to be created as database. For example, it is not feasible to create <code>root.ln.wf01</code> as database when two databases <code>root.ln</code> and <code>root.sgcc</code> exist. The system gives the corresponding error prompt as shown below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; CREATE DATABASE root.ln.wf01
Msg: 300: root.ln has already been created as database.
IoTDB&gt; create database root.ln.wf01
Msg: 300: root.ln has already been created as database.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The LayerName of database can only be characters, numbers, underscores. If you want to set it to pure numbers or contain other characters, you need to enclose the database name with backticks (\`\`).</p><p>Besides, if deploy on Windows system, the LayerName is case-insensitive, which means it&#39;s not allowed to create databases <code>root.ln</code> and <code>root.LN</code> at the same time.</p><h2 id="show-databases" tabindex="-1"><a class="header-anchor" href="#show-databases" aria-hidden="true">#</a> Show Databases</h2>`,10),b=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW DATABASES
IoTDB&gt; SHOW DATABASES root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+----+-------------------------+-----------------------+-----------------------+
|database| ttl|schema_replication_factor|data_replication_factor|time_partition_interval|
+-------------+----+-------------------------+-----------------------+-----------------------+
|    root.sgcc|null|                        2|                      2|                 604800|
|      root.ln|null|                        2|                      2|                 604800|
+-------------+----+-------------------------+-----------------------+-----------------------+
Total line number = 2
It costs 0.060s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-database" tabindex="-1"><a class="header-anchor" href="#delete-database" aria-hidden="true">#</a> Delete Database</h2><p>User can use the <code>DELETE DATABASE &lt;PathPattern&gt;</code> statement to delete all databases matching the pathPattern. Please note the data in the database will also be deleted.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; DELETE DATABASE root.ln
IoTDB &gt; DELETE DATABASE root.sgcc
// delete all data, all timeseries and all databases
IoTDB &gt; DELETE DATABASE root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-databases" tabindex="-1"><a class="header-anchor" href="#count-databases" aria-hidden="true">#</a> Count Databases</h2><p>User can use the <code>COUNT DATABASE &lt;PathPattern&gt;</code> statement to count the number of databases. It is allowed to specify <code>PathPattern</code> to count the number of databases matching the <code>PathPattern</code>.</p><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; count databases
IoTDB&gt; count databases root.*
IoTDB&gt; count databases root.sgcc.*
IoTDB&gt; count databases root.sgcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+
|     database|
+-------------+
|    root.sgcc|
| root.turbine|
|      root.ln|
+-------------+
Total line number = 3
It costs 0.003s

+-------------+
|     database|
+-------------+
|            3|
+-------------+
Total line number = 1
It costs 0.003s

+-------------+
|     database|
+-------------+
|            3|
+-------------+
Total line number = 1
It costs 0.002s

+-------------+
|     database|
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setting-up-heterogeneous-databases-advanced-operations" tabindex="-1"><a class="header-anchor" href="#setting-up-heterogeneous-databases-advanced-operations" aria-hidden="true">#</a> Setting up heterogeneous databases (Advanced operations)</h3><p>Under the premise of familiar with IoTDB metadata modeling,<br> users can set up heterogeneous databases in IoTDB to cope with different production needs.</p><p>Currently, the following database heterogeneous parameters are supported:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>TTL</td><td>Long</td><td>TTL of the Database</td></tr><tr><td>SCHEMA_REPLICATION_FACTOR</td><td>Integer</td><td>The schema replication number of the Database</td></tr><tr><td>DATA_REPLICATION_FACTOR</td><td>Integer</td><td>The data replication number of the Database</td></tr><tr><td>SCHEMA_REGION_GROUP_NUM</td><td>Integer</td><td>The SchemaRegionGroup number of the Database</td></tr><tr><td>DATA_REGION_GROUP_NUM</td><td>Integer</td><td>The DataRegionGroup number of the Database</td></tr></tbody></table><p>Note the following when configuring heterogeneous parameters:</p><ul><li>TTL and TIME_PARTITION_INTERVAL must be positive integers.</li><li>SCHEMA_REPLICATION_FACTOR and DATA_REPLICATION_FACTOR must be smaller than or equal to the number of deployed DataNodes.</li><li>The function of SCHEMA_REGION_GROUP_NUM and DATA_REGION_GROUP_NUM are related to the parameter <code>schema_region_group_extension_policy</code> and <code>data_region_group_extension_policy</code> in iotdb-common.properties configuration file. Take DATA_REGION_GROUP_NUM as an example:<br> If <code>data_region_group_extension_policy=CUSTOM</code> is set, DATA_REGION_GROUP_NUM serves as the number of DataRegionGroups owned by the Database.<br> If <code>data_region_group_extension_policy=AUTO</code>, DATA_REGION_GROUP_NUM is used as the lower bound of the DataRegionGroup quota owned by the Database. That is, when the Database starts writing data, it will have at least this number of DataRegionGroups.</li></ul><p>Users can set any heterogeneous parameters when creating a Database, or adjust some heterogeneous parameters during a stand-alone/distributed IoTDB run.</p><h4 id="set-heterogeneous-parameters-when-creating-a-database" tabindex="-1"><a class="header-anchor" href="#set-heterogeneous-parameters-when-creating-a-database" aria-hidden="true">#</a> Set heterogeneous parameters when creating a Database</h4><p>The user can set any of the above heterogeneous parameters when creating a Database. The SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE DATABASE prefixPath (WITH databaseAttributeClause (COMMA? databaseAttributeClause)*)?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE DATABASE root.db WITH SCHEMA_REPLICATION_FACTOR=1, DATA_REPLICATION_FACTOR=3, SCHEMA_REGION_GROUP_NUM=1, DATA_REGION_GROUP_NUM=2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="adjust-heterogeneous-parameters-at-run-time" tabindex="-1"><a class="header-anchor" href="#adjust-heterogeneous-parameters-at-run-time" aria-hidden="true">#</a> Adjust heterogeneous parameters at run time</h4><p>Users can adjust some heterogeneous parameters during the IoTDB runtime, as shown in the following SQL statement:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER DATABASE prefixPath WITH databaseAttributeClause (COMMA? databaseAttributeClause)*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER DATABASE root.db WITH SCHEMA_REGION_GROUP_NUM=1, DATA_REGION_GROUP_NUM=2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note that only the following heterogeneous parameters can be adjusted at runtime:</p><ul><li>SCHEMA_REGION_GROUP_NUM</li><li>DATA_REGION_GROUP_NUM</li></ul><h4 id="show-heterogeneous-databases" tabindex="-1"><a class="header-anchor" href="#show-heterogeneous-databases" aria-hidden="true">#</a> Show heterogeneous databases</h4><p>The user can query the specific heterogeneous configuration of each Database, and the SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DATABASES DETAILS prefixPath?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW DATABASES DETAILS
+--------+--------+-----------------------+---------------------+---------------------+--------------------+-----------------------+-----------------------+------------------+---------------------+---------------------+
|Database|     TTL|SchemaReplicationFactor|DataReplicationFactor|TimePartitionInterval|SchemaRegionGroupNum|MinSchemaRegionGroupNum|MaxSchemaRegionGroupNum|DataRegionGroupNum|MinDataRegionGroupNum|MaxDataRegionGroupNum|
+--------+--------+-----------------------+---------------------+---------------------+--------------------+-----------------------+-----------------------+------------------+---------------------+---------------------+
|root.db1|    null|                      1|                    3|            604800000|                   0|                      1|                      1|                 0|                    2|                    2|
|root.db2|86400000|                      1|                    1|            604800000|                   0|                      1|                      1|                 0|                    2|                    2|
|root.db3|    null|                      1|                    1|            604800000|                   0|                      1|                      1|                 0|                    2|                    2|
+--------+--------+-----------------------+---------------------+---------------------+--------------------+-----------------------+-----------------------+------------------+---------------------+---------------------+
Total line number = 3
It costs 0.058s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The query results in each column are as follows:</p><ul><li>The name of the Database</li><li>The TTL of the Database</li><li>The schema replication number of the Database</li><li>The data replication number of the Database</li><li>The time partition interval of the Database</li><li>The current SchemaRegionGroup number of the Database</li><li>The required minimum SchemaRegionGroup number of the Database</li><li>The permitted maximum SchemaRegionGroup number of the Database</li><li>The current DataRegionGroup number of the Database</li><li>The required minimum DataRegionGroup number of the Database</li><li>The permitted maximum DataRegionGroup number of the Database</li></ul>`,38);function m(v,p){const a=d("RouterLink");return r(),o("div",null,[l(`

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

`),h,c("p",null,[e("After creating the database, we can use the "),t(a,{to:"/UserGuide/Master/stage/Reference/SQL-Reference.html"},{default:n(()=>[e("SHOW DATABASES")]),_:1}),e(" statement and "),t(a,{to:"/UserGuide/Master/stage/Reference/SQL-Reference.html"},{default:n(()=>[e("SHOW DATABASES <PathPattern>")]),_:1}),e(" to view the databases. The SQL statements are as follows:")]),b])}const T=i(u,[["render",m],["__file","Database.html.vue"]]);export{T as default};

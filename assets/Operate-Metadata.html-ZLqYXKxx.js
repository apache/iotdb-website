import{_ as r,r as l,o,c,a as u,d as a,e,b as s,w as i,f as t}from"./app-A8CjOHsr.js";const v={},m=t(`<h1 id="operate-metadata" tabindex="-1"><a class="header-anchor" href="#operate-metadata" aria-hidden="true">#</a> Operate Metadata</h1><h2 id="database-management" tabindex="-1"><a class="header-anchor" href="#database-management" aria-hidden="true">#</a> Database Management</h2><h3 id="create-database" tabindex="-1"><a class="header-anchor" href="#create-database" aria-hidden="true">#</a> Create Database</h3><p>According to the storage model we can set up the corresponding database. Two SQL statements are supported for creating databases, as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; create database root.ln
IoTDB &gt; create database root.sgcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>We can thus create two databases using the above two SQL statements.</p><p>It is worth noting that 1 database is recommended.</p><p>When the path itself or the parent/child layer of the path is already created as database, the path is then not allowed to be created as database. For example, it is not feasible to create <code>root.ln.wf01</code> as database when two databases <code>root.ln</code> and <code>root.sgcc</code> exist. The system gives the corresponding error prompt as shown below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; CREATE DATABASE root.ln.wf01
Msg: 300: root.ln has already been created as database.
IoTDB&gt; create database root.ln.wf01
Msg: 300: root.ln has already been created as database.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The LayerName of database can only be characters, numbers, underscores. If you want to set it to pure numbers or contain other characters, you need to enclose the database name with backticks (\`\`).</p><p>Besides, if deploy on Windows system, the LayerName is case-insensitive, which means it&#39;s not allowed to create databases <code>root.ln</code> and <code>root.LN</code> at the same time.</p><h3 id="show-databases" tabindex="-1"><a class="header-anchor" href="#show-databases" aria-hidden="true">#</a> Show Databases</h3>`,12),p=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW DATABASES
IoTDB&gt; SHOW DATABASES root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+----+-------------------------+-----------------------+-----------------------+
|database| ttl|schema_replication_factor|data_replication_factor|time_partition_interval|
+-------------+----+-------------------------+-----------------------+-----------------------+
|    root.sgcc|null|                        2|                      2|                 604800|
|      root.ln|null|                        2|                      2|                 604800|
+-------------+----+-------------------------+-----------------------+-----------------------+
Total line number = 2
It costs 0.060s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-database" tabindex="-1"><a class="header-anchor" href="#delete-database" aria-hidden="true">#</a> Delete Database</h3><p>User can use the <code>DELETE DATABASE &lt;PathPattern&gt;</code> statement to delete all databases matching the pathPattern. Please note the data in the database will also be deleted.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; DELETE DATABASE root.ln
IoTDB &gt; DELETE DATABASE root.sgcc
// delete all data, all timeseries and all databases
IoTDB &gt; DELETE DATABASE root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="count-databases" tabindex="-1"><a class="header-anchor" href="#count-databases" aria-hidden="true">#</a> Count Databases</h3><p>User can use the <code>COUNT DATABASE &lt;PathPattern&gt;</code> statement to count the number of databases. It is allowed to specify <code>PathPattern</code> to count the number of databases matching the <code>PathPattern</code>.</p><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; count databases
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The query results in each column are as follows:</p><ul><li>The name of the Database</li><li>The TTL of the Database</li><li>The schema replication number of the Database</li><li>The data replication number of the Database</li><li>The time partition interval of the Database</li><li>The current SchemaRegionGroup number of the Database</li><li>The required minimum SchemaRegionGroup number of the Database</li><li>The permitted maximum SchemaRegionGroup number of the Database</li><li>The current DataRegionGroup number of the Database</li><li>The required minimum DataRegionGroup number of the Database</li><li>The permitted maximum DataRegionGroup number of the Database</li></ul><h3 id="ttl" tabindex="-1"><a class="header-anchor" href="#ttl" aria-hidden="true">#</a> TTL</h3><p>IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can control the total disk space usage and prevent the machine from running out of disks. Moreover, the query performance may downgrade as the total number of files goes up and the memory usage also increase as there are more files. Timely removing such files helps to keep at a high query performance level and reduce memory usage.</p><p>The default unit of TTL is milliseconds. If the time precision in the configuration file changes to another, the TTL is still set to milliseconds.</p><h4 id="set-ttl" tabindex="-1"><a class="header-anchor" href="#set-ttl" aria-hidden="true">#</a> Set TTL</h4><p>The SQL Statement for setting TTL is as follow:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; set ttl to root.ln 3600000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This example means that for data in <code>root.ln</code>, only 3600000 ms, that is, the latest 1 hour will remain, the older one is removed or made invisible.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; set ttl to root.sgcc.** 3600000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It supports setting TTL for databases in a path. This example represents setting TTL for all databases in the <code>root.sgcc</code> path.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; set ttl to root.** 3600000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This example represents setting TTL for all databases.</p><h4 id="unset-ttl" tabindex="-1"><a class="header-anchor" href="#unset-ttl" aria-hidden="true">#</a> Unset TTL</h4><p>To unset TTL, we can use follwing SQL statement:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; unset ttl to root.ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After unset TTL, all data will be accepted in <code>root.ln</code>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; unset ttl to root.sgcc.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unset the TTL setting for all databases in the <code>root.sgcc</code> path.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; unset ttl to root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unset the TTL setting for all databases.</p><h4 id="show-ttl" tabindex="-1"><a class="header-anchor" href="#show-ttl" aria-hidden="true">#</a> Show TTL</h4><p>To Show TTL, we can use following SQL statement:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW ALL TTL
IoTDB&gt; SHOW TTL ON DataBaseNames
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The SHOW ALL TTL example gives the TTL for all databases.<br> The SHOW TTL ON root.ln,root.sgcc,root.DB example shows the TTL for the three storage<br> groups specified.<br> Note: the TTL for databases that do not have a TTL set will display as null.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show all ttl
+----------+-------+
| database|ttl(ms)|
+---------+-------+
|  root.ln|3600000|
|root.sgcc|   null|
|  root.DB|3600000|
+----------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="device-template" tabindex="-1"><a class="header-anchor" href="#device-template" aria-hidden="true">#</a> Device Template</h2><p>IoTDB supports the device template function, enabling different entities of the same type to share metadata, reduce the memory usage of metadata, and simplify the management of numerous entities and measurements.</p><p>Note: The <code>device</code> keyword in the following statements can be omitted.</p><h3 id="create-device-template" tabindex="-1"><a class="header-anchor" href="#create-device-template" aria-hidden="true">#</a> Create Device Template</h3><p>The SQL syntax for creating a metadata template is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> DEVICE TEMPLATE <span class="token operator">&lt;</span>templateName<span class="token operator">&gt;</span> ALIGNED? <span class="token string">&#39;(&#39;</span> <span class="token operator">&lt;</span>measurementId<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>attributeClauses<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;,&#39;</span> <span class="token operator">&lt;</span>measurementId<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>attributeClauses<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">+</span> <span class="token string">&#39;)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Example 1:</strong> Create a template containing two non-aligned timeseires</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> create device template t1 <span class="token punctuation">(</span>temperature FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>RLE, status BOOLEAN <span class="token assign-left variable">encoding</span><span class="token operator">=</span>PLAIN <span class="token assign-left variable">compression</span><span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Example 2:</strong> Create a template containing a group of aligned timeseires</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> create device template t2 aligned <span class="token punctuation">(</span>lat FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>Gorilla, lon FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>Gorilla<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The<code> lat</code> and <code>lon</code> measurements are aligned.</p><h3 id="set-device-template" tabindex="-1"><a class="header-anchor" href="#set-device-template" aria-hidden="true">#</a> Set Device Template</h3><p>After a device template is created, it should be set to specific path before creating related timeseries or insert data.</p><p><strong>It should be ensured that the related database has been set before setting template.</strong></p><p><strong>It is recommended to set device template to database path. It is not suggested to set device template to some path above database</strong></p><p><strong>It is forbidden to create timeseries under a path setting s tedeviceplate. Device template shall not be set on a prefix path of an existing timeseries.</strong></p><p>The SQL Statement for setting device template is as follow:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> device template t1 to root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="activate-device-template" tabindex="-1"><a class="header-anchor" href="#activate-device-template" aria-hidden="true">#</a> Activate Device Template</h3><p>After setting the device template, with the system enabled to auto create schema, you can insert data into the timeseries. For example, suppose there&#39;s a database root.sg1 and t1 has been set to root.sg1.d1, then timeseries like root.sg1.d1.temperature and root.sg1.d1.status are available and data points can be inserted.</p><p><strong>Attention</strong>: Before inserting data or the system not enabled to auto create schema, timeseries defined by the device template will not be created. You can use the following SQL statement to create the timeseries or activate the templdeviceate, act before inserting data:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> create timeseries using device template on root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Example:</strong> Execute the following statement</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> device template t1 to root.sg1.d1
IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> device template t2 to root.sg1.d2
IoTDB<span class="token operator">&gt;</span> create timeseries using device template on root.sg1.d1
IoTDB<span class="token operator">&gt;</span> create timeseries using device template on root.sg1.d2
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show-device-template" tabindex="-1"><a class="header-anchor" href="#show-device-template" aria-hidden="true">#</a> Show Device Template</h3><ul><li>Show all device templates</li></ul><p>The SQL statement looks like this:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show device templates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-------------+
<span class="token operator">|</span>template name<span class="token operator">|</span>
+-------------+
<span class="token operator">|</span>           t2<span class="token operator">|</span>
<span class="token operator">|</span>           t1<span class="token operator">|</span>
+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show nodes under in device template</li></ul><p>The SQL statement looks like this:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show nodes <span class="token keyword">in</span> device template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-----------+--------+--------+-----------+
<span class="token operator">|</span>child nodes<span class="token operator">|</span>dataType<span class="token operator">|</span>encoding<span class="token operator">|</span>compression<span class="token operator">|</span>
+-----------+--------+--------+-----------+
<span class="token operator">|</span>temperature<span class="token operator">|</span>   FLOAT<span class="token operator">|</span>     RLE<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>
<span class="token operator">|</span>     status<span class="token operator">|</span> BOOLEAN<span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>
+-----------+--------+--------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show the path prefix where a device template is set</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show paths <span class="token builtin class-name">set</span> device template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-----------+
<span class="token operator">|</span>child paths<span class="token operator">|</span>
+-----------+
<span class="token operator">|</span>root.sg1.d1<span class="token operator">|</span>
+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show the path prefix where a device template is used (i.e. the time series has been created)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show paths using device template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-----------+
<span class="token operator">|</span>child paths<span class="token operator">|</span>
+-----------+
<span class="token operator">|</span>root.sg1.d1<span class="token operator">|</span>
+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deactivate-device-template" tabindex="-1"><a class="header-anchor" href="#deactivate-device-template" aria-hidden="true">#</a> Deactivate device Template</h3><p>To delete a group of timeseries represented by device template, namely deactivate the device template, use the following SQL statement:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> delete timeseries of device template t1 from root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> deactivate device template t1 from root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The deactivation supports batch process.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> delete timeseries of device template t1 from root.sg1.*, root.sg2.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> deactivate device template t1 from root.sg1.*, root.sg2.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If the template name is not provided in sql, all template activation on paths matched by given path pattern will be removed.</p><h3 id="unset-device-template" tabindex="-1"><a class="header-anchor" href="#unset-device-template" aria-hidden="true">#</a> Unset Device Template</h3><p>The SQL Statement for unsetting device template is as follow:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">unset</span> device template t1 from root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Attention</strong>: It should be guaranteed that none of the timeseries represented by the target device template exists, before unset it. It can be achieved by deactivation operation.</p><h3 id="drop-device-template" tabindex="-1"><a class="header-anchor" href="#drop-device-template" aria-hidden="true">#</a> Drop Device Template</h3><p>The SQL Statement for dropping device template is as follow:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> drop device template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Attention</strong>: Dropping an already set template is not supported.</p><h3 id="alter-device-template" tabindex="-1"><a class="header-anchor" href="#alter-device-template" aria-hidden="true">#</a> Alter Device Template</h3><p>In a scenario where measurements need to be added, you can modify the template to add measurements to all devicesdevice using the device template.</p><p>The SQL Statement for altering device template is as follow:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> alter device template t1 <span class="token function">add</span> <span class="token punctuation">(</span>speed FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>RLE, FLOAT TEXT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>PLAIN <span class="token assign-left variable">compression</span><span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>When executing data insertion to devices with device template set on related prefix path and there are measurements not present in this device template, the measurements will be auto added to this device template.</strong></p><h2 id="timeseries-management" tabindex="-1"><a class="header-anchor" href="#timeseries-management" aria-hidden="true">#</a> Timeseries Management</h2><h3 id="create-timeseries" tabindex="-1"><a class="header-anchor" href="#create-timeseries" aria-hidden="true">#</a> Create Timeseries</h3><p>According to the storage model selected before, we can create corresponding timeseries in the two databases respectively. The SQL statements for creating timeseries are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN
IoTDB &gt; create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE
IoTDB &gt; create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN
IoTDB &gt; create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN
IoTDB &gt; create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN
IoTDB &gt; create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>From v0.13, you can use a simplified version of the SQL statements to create timeseries:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; create timeseries root.ln.wf01.wt01.status BOOLEAN encoding=PLAIN
IoTDB &gt; create timeseries root.ln.wf01.wt01.temperature FLOAT encoding=RLE
IoTDB &gt; create timeseries root.ln.wf02.wt02.hardware TEXT encoding=PLAIN
IoTDB &gt; create timeseries root.ln.wf02.wt02.status BOOLEAN encoding=PLAIN
IoTDB &gt; create timeseries root.sgcc.wf03.wt01.status BOOLEAN encoding=PLAIN
IoTDB &gt; create timeseries root.sgcc.wf03.wt01.temperature FLOAT encoding=RLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that when in the CREATE TIMESERIES statement the encoding method conflicts with the data type, the system gives the corresponding error prompt as shown below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF
error: encoding TS_2DIFF does not support BOOLEAN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,142),b=t(`<h3 id="create-aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#create-aligned-timeseries" aria-hidden="true">#</a> Create Aligned Timeseries</h3><p>The SQL statement for creating a group of timeseries are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; CREATE ALIGNED TIMESERIES root.ln.wf01.GPS(latitude FLOAT encoding=PLAIN compressor=SNAPPY, longitude FLOAT encoding=PLAIN compressor=SNAPPY)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can set different datatype, encoding, and compression for the timeseries in a group of aligned timeseries</p><p>It is also supported to set an alias, tag, and attribute for aligned timeseries.</p><h3 id="delete-timeseries" tabindex="-1"><a class="header-anchor" href="#delete-timeseries" aria-hidden="true">#</a> Delete Timeseries</h3><p>To delete the timeseries we created before, we are able to use <code>(DELETE | DROP) TimeSeries &lt;PathPattern&gt;</code> statement.</p><p>The usage are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; delete timeseries root.ln.wf01.wt01.status
IoTDB&gt; delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware
IoTDB&gt; delete timeseries root.ln.wf02.*
IoTDB&gt; drop timeseries root.ln.wf02.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show-timeseries" tabindex="-1"><a class="header-anchor" href="#show-timeseries" aria-hidden="true">#</a> Show Timeseries</h3><ul><li><p>SHOW LATEST? TIMESERIES pathPattern? whereClause? limitClause?</p><p>There are four optional clauses added in SHOW TIMESERIES, return information of time series</p></li></ul><p>Timeseries information includes: timeseries path, alias of measurement, database it belongs to, data type, encoding type, compression type, tags and attributes.</p><p>Examples:</p><ul><li><p>SHOW TIMESERIES</p><p>presents all timeseries information in JSON form</p></li><li><p>SHOW TIMESERIES &lt;<code>PathPattern</code>&gt;</p><p>returns all timeseries information matching the given &lt;<code>PathPattern</code>&gt;. SQL statements are as follows:</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.**
IoTDB&gt; show timeseries root.ln.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The results are shown below respectively:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
|                     timeseries|   alias|     database|dataType|encoding|compression|                                       tags|                                              attributes|deadband|deadband parameters|
+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
|root.sgcc.wf03.wt01.temperature|    null|    root.sgcc|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|
|     root.sgcc.wf03.wt01.status|    null|    root.sgcc| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|
|             root.turbine.d1.s1|newAlias| root.turbine|   FLOAT|     RLE|     SNAPPY|{&quot;newTag1&quot;:&quot;newV1&quot;,&quot;tag4&quot;:&quot;v4&quot;,&quot;tag3&quot;:&quot;v3&quot;}|{&quot;attr2&quot;:&quot;v2&quot;,&quot;attr1&quot;:&quot;newV1&quot;,&quot;attr4&quot;:&quot;v4&quot;,&quot;attr3&quot;:&quot;v3&quot;}|    null|               null|
|     root.ln.wf02.wt02.hardware|    null|      root.ln|    TEXT|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|
|       root.ln.wf02.wt02.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|
|  root.ln.wf01.wt01.temperature|    null|      root.ln|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|
|       root.ln.wf01.wt01.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|
+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
Total line number = 7
It costs 0.016s

+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
|                   timeseries|alias|     database|dataType|encoding|compression|tags|attributes|deadband|deadband parameters|
+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
|   root.ln.wf02.wt02.hardware| null|      root.ln|    TEXT|   PLAIN|     SNAPPY|null|      null|    null|               null|
|     root.ln.wf02.wt02.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|    null|               null|
|root.ln.wf01.wt01.temperature| null|      root.ln|   FLOAT|     RLE|     SNAPPY|null|      null|    null|               null|
|     root.ln.wf01.wt01.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|    null|               null|
+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
Total line number = 4
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>SHOW TIMESERIES LIMIT INT OFFSET INT</p><p>returns all the timeseries information start from the offset and limit the number of series returned. For example,</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show timeseries root.ln.** limit 10 offset 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>SHOW TIMESERIES WHERE TIMESERIES contains &#39;containStr&#39;</p><p>The query result set is filtered by string fuzzy matching based on the names of the timeseries. For example:</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show timeseries root.ln.** where timeseries contains &#39;wf01.wt&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result is shown below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
|                     timeseries|   alias|     database|dataType|encoding|compression|                                       tags|                                              attributes|deadband|deadband parameters|
+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
|  root.ln.wf01.wt01.temperature|    null|      root.ln|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|
|       root.ln.wf01.wt01.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|
+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
Total line number = 2
It costs 0.016s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>SHOW TIMESERIES WHERE DataType=type</p><p>The query result set is filtered by data type. For example:</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show timeseries root.ln.** where dataType=FLOAT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result is shown below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
|                     timeseries|   alias|     database|dataType|encoding|compression|                                       tags|                                              attributes|deadband|deadband parameters|
+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
|root.sgcc.wf03.wt01.temperature|    null|    root.sgcc|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|
|             root.turbine.d1.s1|newAlias| root.turbine|   FLOAT|     RLE|     SNAPPY|{&quot;newTag1&quot;:&quot;newV1&quot;,&quot;tag4&quot;:&quot;v4&quot;,&quot;tag3&quot;:&quot;v3&quot;}|{&quot;attr2&quot;:&quot;v2&quot;,&quot;attr1&quot;:&quot;newV1&quot;,&quot;attr4&quot;:&quot;v4&quot;,&quot;attr3&quot;:&quot;v3&quot;}|    null|               null|
|  root.ln.wf01.wt01.temperature|    null|      root.ln|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|
+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
Total line number = 3
It costs 0.016s

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>SHOW LATEST TIMESERIES</p><p>all the returned timeseries information should be sorted in descending order of the last timestamp of timeseries</p></li></ul><p>It is worth noting that when the queried path does not exist, the system will return no timeseries.</p><h3 id="count-timeseries" tabindex="-1"><a class="header-anchor" href="#count-timeseries" aria-hidden="true">#</a> Count Timeseries</h3><p>IoTDB is able to use <code>COUNT TIMESERIES &lt;Path&gt;</code> to count the number of timeseries matching the path. SQL statements are as follows:</p><ul><li><code>WHERE</code> condition could be used to fuzzy match a time series name with the following syntax: <code>COUNT TIMESERIES &lt;Path&gt; WHERE TIMESERIES contains &#39;containStr&#39;</code>.</li><li><code>WHERE</code> condition could be used to filter result by data type with the syntax: <code>COUNT TIMESERIES &lt;Path&gt; WHERE DataType=&lt;DataType&gt;&#39;</code>.</li><li><code>WHERE</code> condition could be used to filter result by tags with the syntax: <code>COUNT TIMESERIES &lt;Path&gt; WHERE TAGS(key)=&#39;value&#39;</code> or <code>COUNT TIMESERIES &lt;Path&gt; WHERE TAGS(key) contains &#39;value&#39;</code>.</li><li><code>LEVEL</code> could be defined to show count the number of timeseries of each node at the given level in current Metadata Tree. This could be used to query the number of sensors under each device. The grammar is: <code>COUNT TIMESERIES &lt;Path&gt; GROUP BY LEVEL=&lt;INTEGER&gt;</code>.</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; COUNT TIMESERIES root.**
IoTDB &gt; COUNT TIMESERIES root.ln.**
IoTDB &gt; COUNT TIMESERIES root.ln.*.*.status
IoTDB &gt; COUNT TIMESERIES root.ln.wf01.wt01.status
IoTDB &gt; COUNT TIMESERIES root.** WHERE TIMESERIES contains &#39;sgcc&#39; 
IoTDB &gt; COUNT TIMESERIES root.** WHERE DATATYPE = INT64
IoTDB &gt; COUNT TIMESERIES root.** WHERE TAGS(unit) contains &#39;c&#39; 
IoTDB &gt; COUNT TIMESERIES root.** WHERE TAGS(unit) = &#39;c&#39; 
IoTDB &gt; COUNT TIMESERIES root.** WHERE TIMESERIES contains &#39;sgcc&#39; group by level = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For example, if there are several timeseries (use <code>show timeseries</code> to show all timeseries):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
|                     timeseries|   alias|     database|dataType|encoding|compression|                                       tags|                                              attributes|deadband|deadband parameters|
+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
|root.sgcc.wf03.wt01.temperature|    null|    root.sgcc|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|
|     root.sgcc.wf03.wt01.status|    null|    root.sgcc| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|
|             root.turbine.d1.s1|newAlias| root.turbine|   FLOAT|     RLE|     SNAPPY|{&quot;newTag1&quot;:&quot;newV1&quot;,&quot;tag4&quot;:&quot;v4&quot;,&quot;tag3&quot;:&quot;v3&quot;}|{&quot;attr2&quot;:&quot;v2&quot;,&quot;attr1&quot;:&quot;newV1&quot;,&quot;attr4&quot;:&quot;v4&quot;,&quot;attr3&quot;:&quot;v3&quot;}|    null|               null|
|     root.ln.wf02.wt02.hardware|    null|      root.ln|    TEXT|   PLAIN|     SNAPPY|                               {&quot;unit&quot;:&quot;c&quot;}|                                                    null|    null|               null|
|       root.ln.wf02.wt02.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                    {&quot;description&quot;:&quot;test1&quot;}|                                                    null|    null|               null|
|  root.ln.wf01.wt01.temperature|    null|      root.ln|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|
|       root.ln.wf01.wt01.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|
+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
Total line number = 7
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the Metadata Tree will be as below:</p><center><img style="width:100%;max-width:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"></center><p>As can be seen, <code>root</code> is considered as <code>LEVEL=0</code>. So when you enter statements such as:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; COUNT TIMESERIES root.** GROUP BY LEVEL=1
IoTDB &gt; COUNT TIMESERIES root.ln.** GROUP BY LEVEL=2
IoTDB &gt; COUNT TIMESERIES root.ln.wf01.* GROUP BY LEVEL=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You will get following results:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+-----------------+
|      column|count(timeseries)|
+------------+-----------------+
|   root.sgcc|                2|
|root.turbine|                1|
|     root.ln|                4|
+------------+-----------------+
Total line number = 3
It costs 0.002s

+------------+-----------------+
|      column|count(timeseries)|
+------------+-----------------+
|root.ln.wf02|                2|
|root.ln.wf01|                2|
+------------+-----------------+
Total line number = 2
It costs 0.002s

+------------+-----------------+
|      column|count(timeseries)|
+------------+-----------------+
|root.ln.wf01|                2|
+------------+-----------------+
Total line number = 1
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.</p></blockquote><h3 id="tag-and-attribute-management" tabindex="-1"><a class="header-anchor" href="#tag-and-attribute-management" aria-hidden="true">#</a> Tag and Attribute Management</h3><p>We can also add an alias, extra tag and attribute information while creating one timeseries.</p><p>The differences between tag and attribute are:</p><ul><li>Tag could be used to query the path of timeseries, we will maintain an inverted index in memory on the tag: Tag -&gt; Timeseries</li><li>Attribute could only be queried by timeseries path : Timeseries -&gt; Attribute</li></ul><p>The SQL statements for creating timeseries with extra tag and attribute information are extended as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>temprature</code> in the brackets is an alias for the sensor <code>s1</code>. So we can use <code>temprature</code> to replace <code>s1</code> anywhere.</p><blockquote><p>IoTDB also supports using AS function to set alias. The difference between the two is: the alias set by the AS function is used to replace the whole time series name, temporary and not bound with the time series; while the alias mentioned above is only used as the alias of the sensor, which is bound with it and can be used equivalent to the original sensor name.</p></blockquote><blockquote><p>Notice that the size of the extra tag and attribute information shouldn&#39;t exceed the <code>tag_attribute_total_size</code>.</p></blockquote><p>We can update the tag information after creating it as following:</p><ul><li>Rename the tag/attribute key</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 RENAME tag1 TO newTag1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Reset the tag/attribute value</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 SET newTag1=newV1, attr1=newV1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Delete the existing tag/attribute</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 DROP tag1, tag2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Add new tags</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Add new attributes</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 ADD ATTRIBUTES attr3=v3, attr4=v4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Upsert alias, tags and attributes</li></ul><blockquote><p>add alias or a new key-value if the alias or key doesn&#39;t exist, otherwise, update the old one with new value.</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias TAGS(tag3=v3, tag4=v4) ATTRIBUTES(attr3=v3, attr4=v4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Show timeseries using tags. Use TAGS(tagKey) to identify the tags used as filter key</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TIMESERIES (&lt;\`PathPattern\`&gt;)? timeseriesWhereClause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>returns all the timeseries information that satisfy the where condition and match the pathPattern. SQL statements are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.ln.wf02.wt02.hardware ADD TAGS unit=c
ALTER timeseries root.ln.wf02.wt02.status ADD TAGS description=test1
show timeseries root.ln.** where TAGS(unit)=&#39;c&#39;
show timeseries root.ln.** where TAGS(description) contains &#39;test1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The results are shown below respectly:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+
|                timeseries|alias|     database|dataType|encoding|compression|        tags|attributes|deadband|deadband parameters|
+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+
|root.ln.wf02.wt02.hardware| null|      root.ln|    TEXT|   PLAIN|     SNAPPY|{&quot;unit&quot;:&quot;c&quot;}|      null|    null|               null|
+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+
Total line number = 1
It costs 0.005s

+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+
|              timeseries|alias|     database|dataType|encoding|compression|                   tags|attributes|deadband|deadband parameters|
+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+
|root.ln.wf02.wt02.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|{&quot;description&quot;:&quot;test1&quot;}|      null|    null|               null|
+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+
Total line number = 1
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>count timeseries using tags</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>COUNT TIMESERIES (&lt;\`PathPattern\`&gt;)? timeseriesWhereClause
COUNT TIMESERIES (&lt;\`PathPattern\`&gt;)? timeseriesWhereClause GROUP BY LEVEL=&lt;INTEGER&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>returns all the number of timeseries that satisfy the where condition and match the pathPattern. SQL statements are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>count timeseries
count timeseries root.** where TAGS(unit)=&#39;c&#39;
count timeseries root.** where TAGS(unit)=&#39;c&#39; group by level = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The results are shown below respectly :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; count timeseries
+-----------------+
|count(timeseries)|
+-----------------+
|                6|
+-----------------+
Total line number = 1
It costs 0.019s
IoTDB&gt; count timeseries root.** where TAGS(unit)=&#39;c&#39;
+-----------------+
|count(timeseries)|
+-----------------+
|                2|
+-----------------+
Total line number = 1
It costs 0.020s
IoTDB&gt; count timeseries root.** where TAGS(unit)=&#39;c&#39; group by level = 2
+--------------+-----------------+
|        column|count(timeseries)|
+--------------+-----------------+
|  root.ln.wf02|                2|
|  root.ln.wf01|                0|
|root.sgcc.wf03|                0|
+--------------+-----------------+
Total line number = 3
It costs 0.011s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Notice that, we only support one condition in the where clause. Either it&#39;s an equal filter or it is an <code>contains</code> filter. In both case, the property in the where condition must be a tag.</p></blockquote><p>create aligned timeseries</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create aligned timeseries root.sg1.d1(s1 INT32 tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2), s2 DOUBLE tags(tag3=v3, tag4=v4) attributes(attr3=v3, attr4=v4))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries
+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+
|    timeseries|alias|     database|dataType|encoding|compression|                     tags|                 attributes|deadband|deadband parameters|
+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+
|root.sg1.d1.s1| null|     root.sg1|   INT32|     RLE|     SNAPPY|{&quot;tag1&quot;:&quot;v1&quot;,&quot;tag2&quot;:&quot;v2&quot;}|{&quot;attr2&quot;:&quot;v2&quot;,&quot;attr1&quot;:&quot;v1&quot;}|    null|               null|
|root.sg1.d1.s2| null|     root.sg1|  DOUBLE| GORILLA|     SNAPPY|{&quot;tag4&quot;:&quot;v4&quot;,&quot;tag3&quot;:&quot;v3&quot;}|{&quot;attr4&quot;:&quot;v4&quot;,&quot;attr3&quot;:&quot;v3&quot;}|    null|               null|
+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Support query：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries where TAGS(tag1)=&#39;v1&#39;
+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+
|    timeseries|alias|     database|dataType|encoding|compression|                     tags|                 attributes|deadband|deadband parameters|
+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+
|root.sg1.d1.s1| null|     root.sg1|   INT32|     RLE|     SNAPPY|{&quot;tag1&quot;:&quot;v1&quot;,&quot;tag2&quot;:&quot;v2&quot;}|{&quot;attr2&quot;:&quot;v2&quot;,&quot;attr1&quot;:&quot;v1&quot;}|    null|               null|
+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above operations are supported for timeseries tag, attribute updates, etc.</p><h2 id="node-management" tabindex="-1"><a class="header-anchor" href="#node-management" aria-hidden="true">#</a> Node Management</h2><h3 id="show-child-paths" tabindex="-1"><a class="header-anchor" href="#show-child-paths" aria-hidden="true">#</a> Show Child Paths</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CHILD PATHS pathPattern
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Return all child paths and their node types of all the paths matching pathPattern.</p><p>node types: ROOT -&gt; DB INTERNAL -&gt; DATABASE -&gt; INTERNAL -&gt; DEVICE -&gt; TIMESERIES</p><p>Example：</p><ul><li>return the child paths of root.ln：show child paths root.ln</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+----------+
| child paths|node types|
+------------+----------+
|root.ln.wf01|  INTERNAL|
|root.ln.wf02|  INTERNAL|
+------------+----------+
Total line number = 2
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>get all paths in form of root.xx.xx.xx：show child paths root.xx.xx</p></blockquote><h3 id="show-child-nodes" tabindex="-1"><a class="header-anchor" href="#show-child-nodes" aria-hidden="true">#</a> Show Child Nodes</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CHILD NODES pathPattern
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="count-nodes" tabindex="-1"><a class="header-anchor" href="#count-nodes" aria-hidden="true">#</a> Count Nodes</h3><p>IoTDB is able to use <code>COUNT NODES &lt;PathPattern&gt; LEVEL=&lt;INTEGER&gt;</code> to count the number of nodes at<br> the given level in current Metadata Tree considering a given pattern. IoTDB will find paths that<br> match the pattern and counts distinct nodes at the specified level among the matched paths.<br> This could be used to query the number of devices with specified measurements. The usage are as<br> follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; COUNT NODES root.** LEVEL=2
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.</p></blockquote><h3 id="show-devices" tabindex="-1"><a class="header-anchor" href="#show-devices" aria-hidden="true">#</a> Show Devices</h3><ul><li>SHOW DEVICES pathPattern? (WITH DATABASE)? devicesWhereClause? limitClause?</li></ul><p>Similar to <code>Show Timeseries</code>, IoTDB also supports two ways of viewing devices:</p><ul><li><code>SHOW DEVICES</code> statement presents all devices&#39; information, which is equal to <code>SHOW DEVICES root.**</code>.</li><li><code>SHOW DEVICES &lt;PathPattern&gt;</code> statement specifies the <code>PathPattern</code> and returns the devices information matching the pathPattern and under the given level.</li><li><code>WHERE</code> condition supports <code>DEVICE contains &#39;xxx&#39;</code> to do a fuzzy query based on the device name.</li></ul><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show devices
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="count-devices" tabindex="-1"><a class="header-anchor" href="#count-devices" aria-hidden="true">#</a> Count Devices</h3>`,124),h=t(`<p>The above statement is used to count the number of devices. At the same time, it is allowed to specify <code>PathPattern</code> to count the number of devices matching the <code>PathPattern</code>.</p><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show devices
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function g(T,f){const n=l("RouterLink"),d=l("PathPattern");return o(),c("div",null,[u(`

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

`),m,a("p",null,[e("After creating the database, we can use the "),s(n,{to:"/UserGuide/latest/Reference/SQL-Reference.html"},{default:i(()=>[e("SHOW DATABASES")]),_:1}),e(" statement and "),s(n,{to:"/UserGuide/latest/Reference/SQL-Reference.html"},{default:i(()=>[e("SHOW DATABASES <PathPattern>")]),_:1}),e(" to view the databases. The SQL statements are as follows:")]),p,a("p",null,[e("Please refer to "),s(n,{to:"/UserGuide/latest/Basic-Concept/Encoding-and-Compression.html"},{default:i(()=>[e("Encoding")]),_:1}),e(" for correspondence between data type and encoding.")]),b,a("ul",null,[a("li",null,[e("COUNT DEVICES /"),s(d)])]),h])}const x=r(v,[["render",g],["__file","Operate-Metadata.html.vue"]]);export{x as default};

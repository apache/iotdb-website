import{_ as d,r as o,o as s,c as r,a as c,d as i,e,b as a,f as t}from"./app-1758c693.js";const l={},h=t('<h2 id="hive-tsfile" tabindex="-1"><a class="header-anchor" href="#hive-tsfile" aria-hidden="true">#</a> Hive-TsFile</h2><h3 id="about-hive-tsfile-connector" tabindex="-1"><a class="header-anchor" href="#about-hive-tsfile-connector" aria-hidden="true">#</a> About Hive-TsFile-Connector</h3><p>Hive-TsFile-Connector implements the support of Hive for external data sources of Tsfile type. This enables users to operate TsFile by Hive.</p><p>With this connector, you can</p><ul><li>Load a single TsFile, from either the local file system or hdfs, into hive</li><li>Load all files in a specific directory, from either the local file system or hdfs, into hive</li><li>Query the tsfile through HQL.</li><li>As of now, the write operation is not supported in hive-connector. So, insert operation in HQL is not allowed while operating tsfile through hive.</li></ul><h3 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements" aria-hidden="true">#</a> System Requirements</h3><table><thead><tr><th>Hadoop Version</th><th>Hive Version</th><th>Java Version</th><th>TsFile</th></tr></thead><tbody><tr><td><code>2.7.3</code> or <code>3.2.1</code></td><td><code>2.3.6</code> or <code>3.1.2</code></td><td><code>1.8</code></td><td><code>0.13.0-SNAPSHOT</code></td></tr></tbody></table>',7),u={href:"https://github.com/apache/iotdb/tree/master/tsfile",target:"_blank",rel:"noopener noreferrer"},v=t('<h3 id="data-type-correspondence" tabindex="-1"><a class="header-anchor" href="#data-type-correspondence" aria-hidden="true">#</a> Data Type Correspondence</h3><table><thead><tr><th>TsFile data type</th><th>Hive field type</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>Boolean</td></tr><tr><td>INT32</td><td>INT</td></tr><tr><td>INT64</td><td>BIGINT</td></tr><tr><td>FLOAT</td><td>Float</td></tr><tr><td>DOUBLE</td><td>Double</td></tr><tr><td>TEXT</td><td>STRING</td></tr></tbody></table><h3 id="add-dependency-for-hive" tabindex="-1"><a class="header-anchor" href="#add-dependency-for-hive" aria-hidden="true">#</a> Add Dependency For Hive</h3><p>To use hive-connector in hive, we should add the hive-connector jar into hive.</p>',4),m={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},b=i("code",null,"mvn clean package -pl hive-connector -am -Dmaven.test.skip=true -P get-jar-with-dependencies",-1),p=i("code",null,"hive-connector-X.X.X-jar-with-dependencies.jar",-1),f=t(`<p>Then in hive, use the command of <code>add jar XXX</code> to add the dependency. For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hive&gt; add jar /Users/hive/iotdb/hive-connector/target/hive-connector-0.13.0-SNAPSHOT-jar-with-dependencies.jar;

Added [/Users/hive/iotdb/hive-connector/target/hive-connector-0.13.0-SNAPSHOT-jar-with-dependencies.jar] to class path
Added resources: [/Users/hive/iotdb/hive-connector/target/hive-connector-0.13.0-SNAPSHOT-jar-with-dependencies.jar]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-tsfile-backed-hive-tables" tabindex="-1"><a class="header-anchor" href="#create-tsfile-backed-hive-tables" aria-hidden="true">#</a> Create Tsfile-backed Hive tables</h3><p>To create a Tsfile-backed table, specify the <code>serde</code> as <code>org.apache.iotdb.hive.TsFileSerDe</code>,<br> specify the <code>inputformat</code> as <code>org.apache.iotdb.hive.TSFHiveInputFormat</code>,<br> and the <code>outputformat</code> as <code>org.apache.iotdb.hive.TSFHiveOutputFormat</code>.</p><p>Also provide a schema which only contains two fields: <code>time_stamp</code> and <code>sensor_id</code> for the table.<br><code>time_stamp</code> is the time value of the time series<br> and <code>sensor_id</code> is the sensor name to extract from the tsfile to hive such as <code>sensor_1</code>.<br> The name of the table can be any valid table names in hive.</p><p>Also a location provided for hive-connector to pull the most current data for the table.</p><p>The location should be a specific directory on your local file system or HDFS to set up Hadoop.<br> If it is in your local file system, the location should look like <code>file:///data/data/sequence/root.baic2.WWS.leftfrontdoor/</code></p><p>Last, set the <code>device_id</code> in <code>TBLPROPERTIES</code> to the device name you want to analyze.</p><p>For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE EXTERNAL TABLE IF NOT EXISTS only_sensor_1(
  time_stamp TIMESTAMP,
  sensor_1 BIGINT)
ROW FORMAT SERDE &#39;org.apache.iotdb.hive.TsFileSerDe&#39;
STORED AS
  INPUTFORMAT &#39;org.apache.iotdb.hive.TSFHiveInputFormat&#39;
  OUTPUTFORMAT &#39;org.apache.iotdb.hive.TSFHiveOutputFormat&#39;
LOCATION &#39;/data/data/sequence/root.baic2.WWS.leftfrontdoor/&#39;
TBLPROPERTIES (&#39;device_id&#39;=&#39;root.baic2.WWS.leftfrontdoor.plc1&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the data of <code>root.baic2.WWS.leftfrontdoor.plc1.sensor_1</code> is pulled from the directory of <code>/data/data/sequence/root.baic2.WWS.leftfrontdoor/</code>.<br> This table results in a description as below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hive&gt; describe only_sensor_1;
OK
time_stamp          	timestamp              	from deserializer
sensor_1            	bigint              	from deserializer
Time taken: 0.053 seconds, Fetched: 2 row(s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>At this point, the Tsfile-backed table can be worked with in Hive like any other table.</p><h3 id="query-from-tsfile-backed-hive-tables" tabindex="-1"><a class="header-anchor" href="#query-from-tsfile-backed-hive-tables" aria-hidden="true">#</a> Query from TsFile-backed Hive tables</h3><p>Before we do any queries, we should set the <code>hive.input.format</code> in hive by executing the following command.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hive&gt; set hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, we already have an external table named <code>only_sensor_1</code> in hive.<br> We can use any query operations through HQL to analyse it.</p><p>For example:</p><h4 id="select-clause-example" tabindex="-1"><a class="header-anchor" href="#select-clause-example" aria-hidden="true">#</a> Select Clause Example</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hive&gt; select * from only_sensor_1 limit 10;
OK
1	1000000
2	1000001
3	1000002
4	1000003
5	1000004
6	1000005
7	1000006
8	1000007
9	1000008
10	1000009
Time taken: 1.464 seconds, Fetched: 10 row(s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="aggregate-clause-example" tabindex="-1"><a class="header-anchor" href="#aggregate-clause-example" aria-hidden="true">#</a> Aggregate Clause Example</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hive&gt; select count(*) from only_sensor_1;
WARNING: Hive-on-MR is deprecated in Hive 2 and may not be available in the future versions. Consider using a different execution engine (i.e. spark, tez) or using Hive 1.X releases.
Query ID = jackietien_20191016202416_d1e3e233-d367-4453-b39a-2aac9327a3b6
Total jobs = 1
Launching Job 1 out of 1
Number of reduce tasks determined at compile time: 1
In order to change the average load for a reducer (in bytes):
  set hive.exec.reducers.bytes.per.reducer=&lt;number&gt;
In order to limit the maximum number of reducers:
  set hive.exec.reducers.max=&lt;number&gt;
In order to set a constant number of reducers:
  set mapreduce.job.reduces=&lt;number&gt;
Job running in-process (local Hadoop)
2019-10-16 20:24:18,305 Stage-1 map = 0%,  reduce = 0%
2019-10-16 20:24:27,443 Stage-1 map = 100%,  reduce = 100%
Ended Job = job_local867757288_0002
MapReduce Jobs Launched:
Stage-Stage-1:  HDFS Read: 0 HDFS Write: 0 SUCCESS
Total MapReduce CPU Time Spent: 0 msec
OK
1000000
Time taken: 11.334 seconds, Fetched: 1 row(s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function g(T,y){const n=o("ExternalLinkIcon");return s(),r("div",null,[c(`

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

`),h,i("blockquote",null,[i("p",null,[e("Note: For more information about how to download and use TsFile, please see the following link: "),i("a",u,[e("https://github.com/apache/iotdb/tree/master/tsfile"),a(n)]),e(".")])]),v,i("p",null,[e("After downloading the code of iotdb from "),i("a",m,[e("https://github.com/apache/iotdb"),a(n)]),e(", you can use the command of "),b,e(" to get a "),p,e(".")]),f])}const _=d(l,[["render",g],["__file","Hive-TsFile.html.vue"]]);export{_ as default};

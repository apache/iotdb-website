import{_ as l,r,o,c as d,a as u,d as t,e,b as s,w as a,f as i}from"./app-77dc4b6e.js";const c={},m=i(`<h1 id="timeseries-management" tabindex="-1"><a class="header-anchor" href="#timeseries-management" aria-hidden="true">#</a> Timeseries Management</h1><h2 id="create-timeseries" tabindex="-1"><a class="header-anchor" href="#create-timeseries" aria-hidden="true">#</a> Create Timeseries</h2><p>According to the storage model selected before, we can create corresponding timeseries in the two storage groups respectively. The SQL statements for creating timeseries are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),v=i(`<h2 id="create-aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#create-aligned-timeseries" aria-hidden="true">#</a> Create Aligned Timeseries</h2><p>The SQL statement for creating a group of timeseries are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; CREATE ALIGNED TIMESERIES root.ln.wf01.GPS(latitude FLOAT encoding=PLAIN compressor=SNAPPY, longitude FLOAT encoding=PLAIN compressor=SNAPPY)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can set different datatype, encoding, and compression for the timeseries in a group of aligned timeseries</p><p>It is not currently supported to set an alias, tag, and attribute for aligned timeseries.</p><h2 id="delete-timeseries" tabindex="-1"><a class="header-anchor" href="#delete-timeseries" aria-hidden="true">#</a> Delete Timeseries</h2><p>To delete the timeseries we created before, we are able to use <code>DELETE TimeSeries &lt;PathPattern&gt;</code> statement.</p><p>The usage are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; delete timeseries root.ln.wf01.wt01.status
IoTDB&gt; delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware
IoTDB&gt; delete timeseries root.ln.wf02.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-timeseries" tabindex="-1"><a class="header-anchor" href="#show-timeseries" aria-hidden="true">#</a> Show Timeseries</h2><ul><li><p>SHOW LATEST? TIMESERIES pathPattern? whereClause? limitClause?</p><p>There are four optional clauses added in SHOW TIMESERIES, return information of time series</p></li></ul><p>Timeseries information includes: timeseries path, alias of measurement, storage group it belongs to, data type, encoding type, compression type, tags and attributes.</p><p>The default size of result set is 10000000. To query more child paths, please use <code>limit</code> and <code>offset</code>.</p><p>Examples:</p><ul><li><p>SHOW TIMESERIES</p><p>presents all timeseries information in JSON form</p></li><li><p>SHOW TIMESERIES &lt;<code>PathPattern</code>&gt;</p><p>returns all timeseries information matching the given &lt;<code>PathPattern</code>&gt;. SQL statements are as follows:</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.**
IoTDB&gt; show timeseries root.ln.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The results are shown below respectively:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
|                     timeseries|   alias|storage group|dataType|encoding|compression|                                       tags|                                              attributes|deadband|deadband parameters|
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
|                   timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|deadband|deadband parameters|
+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
|   root.ln.wf02.wt02.hardware| null|      root.ln|    TEXT|   PLAIN|     SNAPPY|null|      null|    null|               null|
|     root.ln.wf02.wt02.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|    null|               null|
|root.ln.wf01.wt01.temperature| null|      root.ln|   FLOAT|     RLE|     SNAPPY|null|      null|    null|               null|
|     root.ln.wf01.wt01.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|    null|               null|
+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
Total line number = 4
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>SHOW TIMESERIES LIMIT INT OFFSET INT</p><p>returns all the timeseries information start from the offset and limit the number of series returned. For example,</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show timeseries root.ln.** limit 10 offset 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>SHOW LATEST TIMESERIES</p><p>all the returned timeseries information should be sorted in descending order of the last timestamp of timeseries</p></li></ul><p>It is worth noting that when the queried path does not exist, the system will return no timeseries.</p><h2 id="count-timeseries" tabindex="-1"><a class="header-anchor" href="#count-timeseries" aria-hidden="true">#</a> Count Timeseries</h2><p>IoTDB is able to use <code>COUNT TIMESERIES &lt;Path&gt;</code> to count the number of timeseries matching the path. SQL statements are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; COUNT TIMESERIES root.**
IoTDB &gt; COUNT TIMESERIES root.ln.**
IoTDB &gt; COUNT TIMESERIES root.ln.*.*.status
IoTDB &gt; COUNT TIMESERIES root.ln.wf01.wt01.status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Besides, <code>LEVEL</code> could be defined to show count the number of timeseries of each node at the given level in current Metadata Tree. This could be used to query the number of sensors under each device. The grammar is: <code>COUNT TIMESERIES &lt;Path&gt; GROUP BY LEVEL=&lt;INTEGER&gt;</code>.</p><p>For example, if there are several timeseries (use <code>show timeseries</code> to show all timeseries):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
|                     timeseries|   alias|storage group|dataType|encoding|compression|                                       tags|                                              attributes|deadband|deadband parameters|
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You will get following results:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+-----+
|      column|count|
+------------+-----+
|   root.sgcc|    2|
|root.turbine|    1|
|     root.ln|    4|
+------------+-----+
Total line number = 3
It costs 0.002s

+------------+-----+
|      column|count|
+------------+-----+
|root.ln.wf02|    2|
|root.ln.wf01|    2|
+------------+-----+
Total line number = 2
It costs 0.002s

+------------+-----+
|      column|count|
+------------+-----+
|root.ln.wf01|    2|
+------------+-----+
Total line number = 1
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.</p></blockquote><h2 id="tag-and-attribute-management" tabindex="-1"><a class="header-anchor" href="#tag-and-attribute-management" aria-hidden="true">#</a> Tag and Attribute Management</h2><p>We can also add an alias, extra tag and attribute information while creating one timeseries.</p><p>The differences between tag and attribute are:</p><ul><li>Tag could be used to query the path of timeseries, we will maintain an inverted index in memory on the tag: Tag -&gt; Timeseries</li><li>Attribute could only be queried by timeseries path : Timeseries -&gt; Attribute</li></ul><p>The SQL statements for creating timeseries with extra tag and attribute information are extended as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>temprature</code> in the brackets is an alias for the sensor <code>s1</code>. So we can use <code>temprature</code> to replace <code>s1</code> anywhere.</p>`,42),g=i(`<blockquote><p>Notice that the size of the extra tag and attribute information shouldn&#39;t exceed the <code>tag_attribute_total_size</code>.</p></blockquote><p>We can update the tag information after creating it as following:</p><ul><li>Rename the tag/attribute key</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 RENAME tag1 TO newTag1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>reset the tag/attribute value</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 SET newTag1=newV1, attr1=newV1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>delete the existing tag/attribute</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 DROP tag1, tag2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>add new tags</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>add new attributes</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 ADD ATTRIBUTES attr3=v3, attr4=v4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>upsert alias, tags and attributes</li></ul><blockquote><p>add alias or a new key-value if the alias or key doesn&#39;t exist, otherwise, update the old one with new value.</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias TAGS(tag3=v3, tag4=v4) ATTRIBUTES(attr3=v3, attr4=v4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>show timeseries using tags</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TIMESERIES (&lt;\`PathPattern\`&gt;)? WhereClause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>returns all the timeseries information that satisfy the where condition and match the pathPattern. SQL statements are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.ln.wf02.wt02.hardware ADD TAGS unit=c
ALTER timeseries root.ln.wf02.wt02.status ADD TAGS description=test1
show timeseries root.ln.** where unit=c
show timeseries root.ln.** where description contains &#39;test1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The results are shown below respectly:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+
|                timeseries|alias|storage group|dataType|encoding|compression|        tags|attributes|deadband|deadband parameters|
+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+
|root.ln.wf02.wt02.hardware| null|      root.ln|    TEXT|   PLAIN|     SNAPPY|{&quot;unit&quot;:&quot;c&quot;}|      null|    null|               null|
+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+
Total line number = 1
It costs 0.005s

+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+
|              timeseries|alias|storage group|dataType|encoding|compression|                   tags|attributes|deadband|deadband parameters|
+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+
|root.ln.wf02.wt02.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|{&quot;description&quot;:&quot;test1&quot;}|      null|    null|               null|
+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+
Total line number = 1
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Notice that, we only support one condition in the where clause. Either it&#39;s an equal filter or it is an <code>contains</code> filter. In both case, the property in the where condition must be a tag.</p></blockquote>`,22);function b(h,p){const n=r("RouterLink");return o(),d("div",null,[u(`

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

`),m,t("p",null,[e("Please refer to "),s(n,{to:"/UserGuide/V0.13.x/Data-Concept/Encoding.html"},{default:a(()=>[e("Encoding")]),_:1}),e(" for correspondence between data type and encoding.")]),v,t("blockquote",null,[t("p",null,[e("IoTDB also supports "),s(n,{to:"/UserGuide/V0.13.x/Query-Data/Select-Expression.html#use-alias"},{default:a(()=>[e("using AS function")]),_:1}),e(" to set alias. The difference between the two is: the alias set by the AS function is used to replace the whole time series name, temporary and not bound with the time series; while the alias mentioned above is only used as the alias of the sensor, which is bound with it and can be used equivalent to the original sensor name.")])]),g])}const T=l(c,[["render",b],["__file","Timeseries.html.vue"]]);export{T as default};

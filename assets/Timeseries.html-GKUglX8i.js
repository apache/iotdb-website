import{_ as l,r,o as d,c as o,a as u,d as i,e,b as s,w as a,f as t}from"./app-rEULWpiv.js";const c={},v=t(`<h1 id="timeseries-management" tabindex="-1"><a class="header-anchor" href="#timeseries-management" aria-hidden="true">#</a> Timeseries Management</h1><h2 id="create-timeseries" tabindex="-1"><a class="header-anchor" href="#create-timeseries" aria-hidden="true">#</a> Create Timeseries</h2><p>According to the storage model selected before, we can create corresponding timeseries in the two databases respectively. The SQL statements for creating timeseries are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),m=t(`<h2 id="create-aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#create-aligned-timeseries" aria-hidden="true">#</a> Create Aligned Timeseries</h2><p>The SQL statement for creating a group of timeseries are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; CREATE ALIGNED TIMESERIES root.ln.wf01.GPS(latitude FLOAT encoding=PLAIN compressor=SNAPPY, longitude FLOAT encoding=PLAIN compressor=SNAPPY)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can set different datatype, encoding, and compression for the timeseries in a group of aligned timeseries</p><p>It is also supported to set an alias, tag, and attribute for aligned timeseries.</p><h2 id="delete-timeseries" tabindex="-1"><a class="header-anchor" href="#delete-timeseries" aria-hidden="true">#</a> Delete Timeseries</h2><p>To delete the timeseries we created before, we are able to use <code>(DELETE | DROP) TimeSeries &lt;PathPattern&gt;</code> statement.</p><p>The usage are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; delete timeseries root.ln.wf01.wt01.status
IoTDB&gt; delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware
IoTDB&gt; delete timeseries root.ln.wf02.*
IoTDB&gt; drop timeseries root.ln.wf02.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-timeseries" tabindex="-1"><a class="header-anchor" href="#show-timeseries" aria-hidden="true">#</a> Show Timeseries</h2><ul><li><p>SHOW LATEST? TIMESERIES pathPattern? whereClause? limitClause?</p><p>There are four optional clauses added in SHOW TIMESERIES, return information of time series</p></li></ul><p>Timeseries information includes: timeseries path, alias of measurement, database it belongs to, data type, encoding type, compression type, tags and attributes.</p><p>Examples:</p><ul><li><p>SHOW TIMESERIES</p><p>presents all timeseries information in JSON form</p></li><li><p>SHOW TIMESERIES &lt;<code>PathPattern</code>&gt;</p><p>returns all timeseries information matching the given &lt;<code>PathPattern</code>&gt;. SQL statements are as follows:</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.**
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>SHOW LATEST TIMESERIES</p><p>all the returned timeseries information should be sorted in descending order of the last timestamp of timeseries</p></li></ul><p>It is worth noting that when the queried path does not exist, the system will return no timeseries.</p><h2 id="count-timeseries" tabindex="-1"><a class="header-anchor" href="#count-timeseries" aria-hidden="true">#</a> Count Timeseries</h2><p>IoTDB is able to use <code>COUNT TIMESERIES &lt;Path&gt;</code> to count the number of timeseries matching the path. SQL statements are as follows:</p><ul><li><code>WHERE</code> condition could be used to fuzzy match a time series name with the following syntax: <code>COUNT TIMESERIES &lt;Path&gt; WHERE TIMESERIES contains &#39;containStr&#39;</code>.</li><li><code>WHERE</code> condition could be used to filter result by data type with the syntax: <code>COUNT TIMESERIES &lt;Path&gt; WHERE DataType=&lt;DataType&gt;&#39;</code>.</li><li><code>WHERE</code> condition could be used to filter result by tags with the syntax: <code>COUNT TIMESERIES &lt;Path&gt; WHERE TAGS(key)=&#39;value&#39;</code> or <code>COUNT TIMESERIES &lt;Path&gt; WHERE TAGS(key) contains &#39;value&#39;</code>.</li><li><code>LEVEL</code> could be defined to show count the number of timeseries of each node at the given level in current Metadata Tree. This could be used to query the number of sensors under each device. The grammar is: <code>COUNT TIMESERIES &lt;Path&gt; GROUP BY LEVEL=&lt;INTEGER&gt;</code>.</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; COUNT TIMESERIES root.**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the Metadata Tree will be as below:</p><center><img style="width:100%;max-width:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"></center>`,37),b=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; COUNT TIMESERIES root.** GROUP BY LEVEL=1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.</p></blockquote><h2 id="tag-and-attribute-management" tabindex="-1"><a class="header-anchor" href="#tag-and-attribute-management" aria-hidden="true">#</a> Tag and Attribute Management</h2><p>We can also add an alias, extra tag and attribute information while creating one timeseries.</p><p>The differences between tag and attribute are:</p><ul><li>Tag could be used to query the path of timeseries, we will maintain an inverted index in memory on the tag: Tag -&gt; Timeseries</li><li>Attribute could only be queried by timeseries path : Timeseries -&gt; Attribute</li></ul><p>The SQL statements for creating timeseries with extra tag and attribute information are extended as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>temprature</code> in the brackets is an alias for the sensor <code>s1</code>. So we can use <code>temprature</code> to replace <code>s1</code> anywhere.</p>`,11),g=t(`<blockquote><p>Notice that the size of the extra tag and attribute information shouldn&#39;t exceed the <code>tag_attribute_total_size</code>.</p></blockquote><p>We can update the tag information after creating it as following:</p><ul><li>Rename the tag/attribute key</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 RENAME tag1 TO newTag1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above operations are supported for timeseries tag, attribute updates, etc.</p>`,35);function p(h,T){const n=r("RouterLink");return d(),o("div",null,[u(`

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

`),v,i("p",null,[e("Please refer to "),s(n,{to:"/UserGuide/Master/stage/Basic-Concept/Encoding-and-Compression.html"},{default:a(()=>[e("Encoding")]),_:1}),e(" for correspondence between data type and encoding.")]),m,e(" As can be seen, `root` is considered as `LEVEL=0`. So when you enter statements such as: "),b,i("blockquote",null,[i("p",null,[e("IoTDB also supports "),s(n,{to:"/UserGuide/Master/stage/Reference/SQL-Reference.html#data-management-statement"},{default:a(()=>[e("using AS function")]),_:1}),e(" to set alias. The difference between the two is: the alias set by the AS function is used to replace the whole time series name, temporary and not bound with the time series; while the alias mentioned above is only used as the alias of the sensor, which is bound with it and can be used equivalent to the original sensor name.")])]),g])}const E=l(c,[["render",p],["__file","Timeseries.html.vue"]]);export{E as default};

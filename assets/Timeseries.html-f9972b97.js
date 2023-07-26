import{_ as a,r as d,o as r,c as u,a as o,d as n,e,b as l,w as s,f as t}from"./app-d463a4e4.js";const c={},v=t(`<h1 id="时间序列管理" tabindex="-1"><a class="header-anchor" href="#时间序列管理" aria-hidden="true">#</a> 时间序列管理</h1><h2 id="创建时间序列" tabindex="-1"><a class="header-anchor" href="#创建时间序列" aria-hidden="true">#</a> 创建时间序列</h2><p>根据建立的数据模型，我们可以分别在两个存储组中创建相应的时间序列。创建时间序列的 SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN
IoTDB &gt; create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE
IoTDB &gt; create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN
IoTDB &gt; create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN
IoTDB &gt; create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN
IoTDB &gt; create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 v0.13 起，可以使用简化版的 SQL 语句创建时间序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; create timeseries root.ln.wf01.wt01.status BOOLEAN encoding=PLAIN
IoTDB &gt; create timeseries root.ln.wf01.wt01.temperature FLOAT encoding=RLE
IoTDB &gt; create timeseries root.ln.wf02.wt02.hardware TEXT encoding=PLAIN
IoTDB &gt; create timeseries root.ln.wf02.wt02.status BOOLEAN encoding=PLAIN
IoTDB &gt; create timeseries root.sgcc.wf03.wt01.status BOOLEAN encoding=PLAIN
IoTDB &gt; create timeseries root.sgcc.wf03.wt01.temperature FLOAT encoding=RLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，当创建时间序列时指定的编码方式与数据类型不对应时，系统会给出相应的错误提示，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF
error: encoding TS_2DIFF does not support BOOLEAN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),m=t(`<h2 id="创建对齐时间序列" tabindex="-1"><a class="header-anchor" href="#创建对齐时间序列" aria-hidden="true">#</a> 创建对齐时间序列</h2><p>创建一组对齐时间序列的SQL语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; CREATE ALIGNED TIMESERIES root.ln.wf01.GPS(latitude FLOAT encoding=PLAIN compressor=SNAPPY, longitude FLOAT encoding=PLAIN compressor=SNAPPY) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一组对齐序列中的序列可以有不同的数据类型、编码方式以及压缩方式。</p><p>对齐的时间序列也支持设置别名、标签、属性。</p><h2 id="删除时间序列" tabindex="-1"><a class="header-anchor" href="#删除时间序列" aria-hidden="true">#</a> 删除时间序列</h2><p>我们可以使用<code>(DELETE | DROP) TimeSeries &lt;PathPattern&gt;</code>语句来删除我们之前创建的时间序列。SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; delete timeseries root.ln.wf01.wt01.status
IoTDB&gt; delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware
IoTDB&gt; delete timeseries root.ln.wf02.*
IoTDB&gt; drop timeseries root.ln.wf02.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看时间序列" tabindex="-1"><a class="header-anchor" href="#查看时间序列" aria-hidden="true">#</a> 查看时间序列</h2><ul><li><p>SHOW LATEST? TIMESERIES pathPattern? whereClause? limitClause?</p><p>SHOW TIMESERIES 中可以有四种可选的子句，查询结果为这些时间序列的所有信息</p></li></ul><p>时间序列信息具体包括：时间序列路径名，database，Measurement 别名，数据类型，编码方式，压缩方式，属性和标签。</p><p>示例：</p><ul><li><p>SHOW TIMESERIES</p><p>展示系统中所有的时间序列信息</p></li><li><p>SHOW TIMESERIES &lt;<code>Path</code>&gt;</p><p>返回给定路径的下的所有时间序列信息。其中 <code>Path</code> 需要为一个时间序列路径或路径模式。例如，分别查看<code>root</code>路径和<code>root.ln</code>路径下的时间序列，SQL 语句如下所示：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.**
IoTDB&gt; show timeseries root.ln.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果分别为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>SHOW TIMESERIES LIMIT INT OFFSET INT</p><p>只返回从指定下标开始的结果，最大返回条数被 LIMIT 限制，用于分页查询。例如：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show timeseries root.ln.** limit 10 offset 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>SHOW LATEST TIMESERIES</p><p>表示查询出的时间序列需要按照最近插入时间戳降序排列</p></li></ul><p>需要注意的是，当查询路径不存在时，系统会返回 0 条时间序列。</p><h2 id="统计时间序列总数" tabindex="-1"><a class="header-anchor" href="#统计时间序列总数" aria-hidden="true">#</a> 统计时间序列总数</h2><p>IoTDB 支持使用<code>COUNT TIMESERIES&lt;Path&gt;</code>来统计一条路径中的时间序列个数。SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; COUNT TIMESERIES root.**
IoTDB &gt; COUNT TIMESERIES root.ln.**
IoTDB &gt; COUNT TIMESERIES root.ln.*.*.status
IoTDB &gt; COUNT TIMESERIES root.ln.wf01.wt01.status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，还可以通过定义<code>LEVEL</code>来统计指定层级下的时间序列个数。这条语句可以用来统计每一个设备下的传感器数量，语法为：<code>COUNT TIMESERIES &lt;Path&gt; GROUP BY LEVEL=&lt;INTEGER&gt;</code>。</p><p>例如有如下时间序列（可以使用<code>show timeseries</code>展示所有时间序列）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么 Metadata Tree 如下所示：</p><img style="width:100%;max-width:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"><p>可以看到，<code>root</code>被定义为<code>LEVEL=0</code>。那么当你输入如下语句时：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; COUNT TIMESERIES root.** GROUP BY LEVEL=1
IoTDB &gt; COUNT TIMESERIES root.ln.** GROUP BY LEVEL=2
IoTDB &gt; COUNT TIMESERIES root.ln.wf01.* GROUP BY LEVEL=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你将得到以下结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; COUNT TIMESERIES root.** GROUP BY LEVEL=1
+------------+-----------------+
|      column|count(timeseries)|
+------------+-----------------+
|   root.sgcc|                2|
|root.turbine|                1|
|     root.ln|                4|
+------------+-----------------+
Total line number = 3
It costs 0.002s

IoTDB &gt; COUNT TIMESERIES root.ln.** GROUP BY LEVEL=2
+------------+-----------------+
|      column|count(timeseries)|
+------------+-----------------+
|root.ln.wf02|                2|
|root.ln.wf01|                2|
+------------+-----------------+
Total line number = 2
It costs 0.002s

IoTDB &gt; COUNT TIMESERIES root.ln.wf01.* GROUP BY LEVEL=2
+------------+-----------------+
|      column|count(timeseries)|
+------------+-----------------+
|root.ln.wf01|                2|
+------------+-----------------+
Total line number = 1
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：时间序列的路径只是过滤条件，与 level 的定义无关。</p></blockquote><h2 id="标签点管理" tabindex="-1"><a class="header-anchor" href="#标签点管理" aria-hidden="true">#</a> 标签点管理</h2><p>我们可以在创建时间序列的时候，为它添加别名和额外的标签和属性信息。</p><p>标签和属性的区别在于：</p><ul><li>标签可以用来查询时间序列路径，会在内存中维护标点到时间序列路径的倒排索引：标签 -&gt; 时间序列路径</li><li>属性只能用时间序列路径来查询：时间序列路径 -&gt; 属性</li></ul><p>所用到的扩展的创建时间序列的 SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>括号里的<code>temprature</code>是<code>s1</code>这个传感器的别名。<br> 我们可以在任何用到<code>s1</code>的地方，将其用<code>temprature</code>代替，这两者是等价的。</p>`,40),b=t(`<blockquote><p>注意：额外的标签和属性信息总的大小不能超过<code>tag_attribute_total_size</code>.</p></blockquote><ul><li>标签点属性更新<br> 创建时间序列后，我们也可以对其原有的标签点属性进行更新，主要有以下六种更新方式：</li><li>重命名标签或属性</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 RENAME tag1 TO newTag1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>重新设置标签或属性的值</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 SET newTag1=newV1, attr1=newV1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除已经存在的标签或属性</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 DROP tag1, tag2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>添加新的标签</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>添加新的属性</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 ADD ATTRIBUTES attr3=v3, attr4=v4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>更新插入别名，标签和属性</li></ul><blockquote><p>如果该别名，标签或属性原来不存在，则插入，否则，用新值更新原来的旧值</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias TAGS(tag2=newV2, tag3=v3) ATTRIBUTES(attr3=v3, attr4=v4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用标签作为过滤条件查询时间序列</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TIMESERIES (&lt;\`PathPattern\`&gt;)? WhereClause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回给定路径的下的所有满足条件的时间序列信息，SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER timeseries root.ln.wf02.wt02.hardware ADD TAGS unit=c
ALTER timeseries root.ln.wf02.wt02.status ADD TAGS description=test1
show timeseries root.ln.** where unit=c
show timeseries root.ln.** where description contains &#39;test1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果分别为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用标签作为过滤条件统计时间序列数量</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>COUNT TIMESERIES (&lt;\`PathPattern\`&gt;)? WhereClause
COUNT TIMESERIES (&lt;\`PathPattern\`&gt;)? WhereClause GROUP BY LEVEL=&lt;INTEGER&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>返回给定路径的下的所有满足条件的时间序列的数量，SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>count timeseries
count timeseries root.** where unit = c
count timeseries root.** where unit = c group by level = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果分别为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; count timeseries
+-----------------+
|count(timeseries)|
+-----------------+
|                6|
+-----------------+
Total line number = 1
It costs 0.019s
IoTDB&gt; count timeseries root.** where unit = c
+-----------------+
|count(timeseries)|
+-----------------+
|                2|
+-----------------+
Total line number = 1
It costs 0.020s
IoTDB&gt; count timeseries root.** where unit = c group by level = 2
+--------------+-----------------+
|        column|count(timeseries)|
+--------------+-----------------+
|  root.ln.wf02|                2|
|  root.ln.wf01|                0|
|root.sgcc.wf03|                0|
+--------------+-----------------+
Total line number = 3
It costs 0.011s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意，现在我们只支持一个查询条件，要么是等值条件查询，要么是包含条件查询。当然 where 子句中涉及的必须是标签值，而不能是属性值。</p></blockquote><p>创建对齐时间序列</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create aligned timeseries root.sg1.d1(s1 INT32 tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2), s2 DOUBLE tags(tag3=v3, tag4=v4) attributes(attr3=v3, attr4=v4))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries
+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+
|    timeseries|alias|     database|dataType|encoding|compression|                     tags|                 attributes|deadband|deadband parameters|
+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+
|root.sg1.d1.s1| null|     root.sg1|   INT32|     RLE|     SNAPPY|{&quot;tag1&quot;:&quot;v1&quot;,&quot;tag2&quot;:&quot;v2&quot;}|{&quot;attr2&quot;:&quot;v2&quot;,&quot;attr1&quot;:&quot;v1&quot;}|    null|               null|
|root.sg1.d1.s2| null|     root.sg1|  DOUBLE| GORILLA|     SNAPPY|{&quot;tag4&quot;:&quot;v4&quot;,&quot;tag3&quot;:&quot;v3&quot;}|{&quot;attr4&quot;:&quot;v4&quot;,&quot;attr3&quot;:&quot;v3&quot;}|    null|               null|
+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持查询：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries where tag1=&#39;v1&#39;
+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+
|    timeseries|alias|     database|dataType|encoding|compression|                     tags|                 attributes|deadband|deadband parameters|
+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+
|root.sg1.d1.s1| null|     root.sg1|   INT32|     RLE|     SNAPPY|{&quot;tag1&quot;:&quot;v1&quot;,&quot;tag2&quot;:&quot;v2&quot;}|{&quot;attr2&quot;:&quot;v2&quot;,&quot;attr1&quot;:&quot;v1&quot;}|    null|               null|
+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述对时间序列标签、属性的更新等操作都支持。</p>`,34);function g(p,T){const i=d("RouterLink");return r(),u("div",null,[o(`

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

`),v,n("p",null,[e("详细的数据类型与编码方式的对应列表请参见 "),l(i,{to:"/zh/UserGuide/V1.0.x/Data-Concept/Encoding.html"},{default:s(()=>[e("编码方式")]),_:1}),e("。")]),m,n("blockquote",null,[n("p",null,[e("IoTDB 同时支持在查询语句中 "),l(i,{to:"/zh/UserGuide/V1.0.x/Reference/SQL-Reference.html#%E6%95%B0%E6%8D%AE%E7%AE%A1%E7%90%86%E8%AF%AD%E5%8F%A5"},{default:s(()=>[e("使用 AS 函数")]),_:1}),e(" 设置别名。二者的区别在于：AS 函数设置的别名用于替代整条时间序列名，且是临时的，不与时间序列绑定；而上文中的别名只作为传感器的别名，与其绑定且可与原传感器名等价使用。")])]),b])}const h=a(c,[["render",g],["__file","Timeseries.html.vue"]]);export{h as default};

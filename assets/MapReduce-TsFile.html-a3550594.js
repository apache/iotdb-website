import{_ as d,M as s,N as l,af as r,O as e,Q as t,ag as n,aT as a,C as o}from"./framework-ae7271bd.js";const u={},c=a('<h2 id="hadoop-tsfile" tabindex="-1"><a class="header-anchor" href="#hadoop-tsfile" aria-hidden="true">#</a> Hadoop-TsFile</h2><p>TsFile 的 Hadoop 连接器实现了对 Hadoop 读取外部 Tsfile 类型的文件格式的支持。让用户可以使用 Hadoop 的 map、reduce 等操作对 Tsfile 文件进行读取、写入和查询。</p><p>有了这个连接器，用户可以</p><ul><li>将单个 Tsfile 文件加载进 Hadoop，不论文件是存储在本地文件系统或者是 HDFS 中</li><li>将某个特定目录下的所有文件加载进 Hadoop，不论文件是存储在本地文件系统或者是 HDFS 中</li><li>将 Hadoop 处理完后的结果以 Tsfile 的格式保存</li></ul><h3 id="系统环境要求" tabindex="-1"><a class="header-anchor" href="#系统环境要求" aria-hidden="true">#</a> 系统环境要求</h3><table><thead><tr><th>Hadoop 版本</th><th>Java 版本</th><th>TsFile 版本</th></tr></thead><tbody><tr><td><code>2.7.3</code></td><td><code>1.8</code></td><td><code>0.13.0-SNAPSHOT+</code></td></tr></tbody></table>',6),v={href:"https://github.com/apache/iotdb/tree/master/tsfile",target:"_blank",rel:"noopener noreferrer"},b=a(`<h3 id="数据类型对应关系" tabindex="-1"><a class="header-anchor" href="#数据类型对应关系" aria-hidden="true">#</a> 数据类型对应关系</h3><table><thead><tr><th>TsFile 数据类型</th><th>Hadoop writable</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>BooleanWritable</td></tr><tr><td>INT32</td><td>IntWritable</td></tr><tr><td>INT64</td><td>LongWritable</td></tr><tr><td>FLOAT</td><td>FloatWritable</td></tr><tr><td>DOUBLE</td><td>DoubleWritable</td></tr><tr><td>TEXT</td><td>Text</td></tr></tbody></table><h3 id="关于-tsfinputformat-的说明" tabindex="-1"><a class="header-anchor" href="#关于-tsfinputformat-的说明" aria-hidden="true">#</a> 关于 TSFInputFormat 的说明</h3><p>TSFInputFormat 继承了 Hadoop 中 FileInputFormat 类，重写了其中切片的方法。</p><p>目前的切片方法是根据每个 ChunkGroup 的中点的 offset 是否属于 Hadoop 所切片的 startOffset 和 endOffset 之间，来判断是否将该 ChunkGroup 放入此切片。</p><p>TSFInputFormat 将 tsfile 中的数据以多个<code>MapWritable</code>记录的形式返回给用户。</p><p>假设我们想要从 Tsfile 中获得名为<code>d1</code>的设备的数据，该设备有三个传感器，名称分别为<code>s1</code>, <code>s2</code>, <code>s3</code>。</p><p><code>s1</code>的类型是<code>BOOLEAN</code>, <code>s2</code>的类型是 <code>DOUBLE</code>, <code>s3</code>的类型是<code>TEXT</code>.</p><p><code>MapWritable</code>的结构如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;time_stamp&quot;: 10000000,
    &quot;device_id&quot;:  d1,
    &quot;s1&quot;:         true,
    &quot;s2&quot;:         3.14,
    &quot;s3&quot;:         &quot;middle&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Hadoop 的 Map job 中，你可以采用如下方法获得你想要的任何值</p><p><code>mapwritable.get(new Text(&quot;s1&quot;))</code></p><blockquote><p>注意：<code>MapWritable</code>中所有的键值类型都是<code>Text</code>。</p></blockquote><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><h4 id="读示例-求和" tabindex="-1"><a class="header-anchor" href="#读示例-求和" aria-hidden="true">#</a> 读示例：求和</h4><p>首先，我们需要在 TSFInputFormat 中配置我们需要哪些数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// configure reading time enable
TSFInputFormat.setReadTime(job, true); 
// configure reading deviceId enable
TSFInputFormat.setReadDeviceId(job, true); 
// configure reading which deltaObjectIds
String[] deviceIds = {&quot;device_1&quot;};
TSFInputFormat.setReadDeviceIds(job, deltaObjectIds);
// configure reading which measurementIds
String[] measurementIds = {&quot;sensor_1&quot;, &quot;sensor_2&quot;, &quot;sensor_3&quot;};
TSFInputFormat.setReadMeasurementIds(job, measurementIds);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，必须指定 mapper 和 reducer 输出的键和值类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// set inputformat and outputformat
job.setInputFormatClass(TSFInputFormat.class);
// set mapper output key and value
job.setMapOutputKeyClass(Text.class);
job.setMapOutputValueClass(DoubleWritable.class);
// set reducer output key and value
job.setOutputKeyClass(Text.class);
job.setOutputValueClass(DoubleWritable.class);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，就可以编写包含具体的处理数据逻辑的<code>mapper</code>和<code>reducer</code>类了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static class TSMapper extends Mapper&lt;NullWritable, MapWritable, Text, DoubleWritable&gt; {

	@Override
	protected void map(NullWritable key, MapWritable value,
	    Mapper&lt;NullWritable, MapWritable, Text, DoubleWritable&gt;.Context context)
	    throws IOException, InterruptedException {
	
	  Text deltaObjectId = (Text) value.get(new Text(&quot;device_id&quot;));
	  context.write(deltaObjectId, (DoubleWritable) value.get(new Text(&quot;sensor_3&quot;)));
	}
}

public static class TSReducer extends Reducer&lt;Text, DoubleWritable, Text, DoubleWritable&gt; {

	@Override
	protected void reduce(Text key, Iterable&lt;DoubleWritable&gt; values,
	    Reducer&lt;Text, DoubleWritable, Text, DoubleWritable&gt;.Context context)
	    throws IOException, InterruptedException {
	
	  double sum = 0;
	  for (DoubleWritable value : values) {
	    sum = sum + value.get();
	  }
	  context.write(key, new DoubleWritable(sum));
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),m={href:"https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb/hadoop/tsfile/TSFMRReadExample.java",target:"_blank",rel:"noopener noreferrer"},p=a(`<h3 id="写示例-计算平均数并写入-tsfile-中" tabindex="-1"><a class="header-anchor" href="#写示例-计算平均数并写入-tsfile-中" aria-hidden="true">#</a> 写示例：计算平均数并写入 Tsfile 中</h3><p>除了<code>OutputFormatClass</code>，剩下的配置代码跟上面的读示例是一样的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>job.setOutputFormatClass(TSFOutputFormat.class);
// set reducer output key and value
job.setOutputKeyClass(NullWritable.class);
job.setOutputValueClass(HDFSTSRecord.class);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，是包含具体的处理数据逻辑的<code>mapper</code>和<code>reducer</code>类。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static class TSMapper extends Mapper&lt;NullWritable, MapWritable, Text, MapWritable&gt; {

    @Override
    protected void map(NullWritable key, MapWritable value,
                       Mapper&lt;NullWritable, MapWritable, Text, MapWritable&gt;.Context context)
            throws IOException, InterruptedException {

        Text deltaObjectId = (Text) value.get(new Text(&quot;device_id&quot;));
        long timestamp = ((LongWritable)value.get(new Text(&quot;timestamp&quot;))).get();
        if (timestamp % 100000 == 0) {
            context.write(deltaObjectId, new MapWritable(value));
        }
    }
}

/**
 * This reducer calculate the average value.
 */
public static class TSReducer extends Reducer&lt;Text, MapWritable, NullWritable, HDFSTSRecord&gt; {

    @Override
    protected void reduce(Text key, Iterable&lt;MapWritable&gt; values,
                          Reducer&lt;Text, MapWritable, NullWritable, HDFSTSRecord&gt;.Context context) throws IOException, InterruptedException {
        long sensor1_value_sum = 0;
        long sensor2_value_sum = 0;
        double sensor3_value_sum = 0;
        long num = 0;
        for (MapWritable value : values) {
            num++;
            sensor1_value_sum += ((LongWritable)value.get(new Text(&quot;sensor_1&quot;))).get();
            sensor2_value_sum += ((LongWritable)value.get(new Text(&quot;sensor_2&quot;))).get();
            sensor3_value_sum += ((DoubleWritable)value.get(new Text(&quot;sensor_3&quot;))).get();
        }
        HDFSTSRecord tsRecord = new HDFSTSRecord(1L, key.toString());
        DataPoint dPoint1 = new LongDataPoint(&quot;sensor_1&quot;, sensor1_value_sum / num);
        DataPoint dPoint2 = new LongDataPoint(&quot;sensor_2&quot;, sensor2_value_sum / num);
        DataPoint dPoint3 = new DoubleDataPoint(&quot;sensor_3&quot;, sensor3_value_sum / num);
        tsRecord.addTuple(dPoint1);
        tsRecord.addTuple(dPoint2);
        tsRecord.addTuple(dPoint3);
        context.write(NullWritable.get(), tsRecord);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h={href:"https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb/hadoop/tsfile/TSMRWriteExample.java",target:"_blank",rel:"noopener noreferrer"};function x(g,T){const i=o("ExternalLinkIcon");return s(),l("div",null,[r(`

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

`),c,e("blockquote",null,[e("p",null,[t("注意：关于如何下载和使用 Tsfile, 请参考以下链接："),e("a",v,[t("https://github.com/apache/iotdb/tree/master/tsfile"),n(i)]),t(".")])]),b,e("blockquote",null,[e("p",null,[t("注意：完整的代码示例可以在如下链接中找到："),e("a",m,[t("https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb/hadoop/tsfile/TSFMRReadExample.java"),n(i)])])]),p,e("blockquote",null,[e("p",null,[t("注意：完整的代码示例可以在如下链接中找到："),e("a",h,[t("https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb/hadoop/tsfile/TSMRWriteExample.java"),n(i)])])])])}const _=d(u,[["render",x],["__file","MapReduce-TsFile.html.vue"]]);export{_ as default};
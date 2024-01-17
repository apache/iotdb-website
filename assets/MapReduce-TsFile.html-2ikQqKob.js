import{_ as d,r as s,o as l,c as o,a as r,d as e,e as t,b as i,f as n}from"./app-1OOS2xKC.js";const c={},u=n('<h2 id="hadoop-tsfile" tabindex="-1"><a class="header-anchor" href="#hadoop-tsfile" aria-hidden="true">#</a> Hadoop-TsFile</h2><h3 id="about-hadoop-tsfile-connector" tabindex="-1"><a class="header-anchor" href="#about-hadoop-tsfile-connector" aria-hidden="true">#</a> About Hadoop-TsFile-Connector</h3><p>TsFile-Hadoop-Connector implements the support of Hadoop for external data sources of Tsfile type. This enables users to read, write and query Tsfile by Hadoop.</p><p>With this connector, you can</p><ul><li>load a single TsFile, from either the local file system or hdfs, into Hadoop</li><li>load all files in a specific directory, from either the local file system or hdfs, into hadoop</li><li>write data from Hadoop into TsFile</li></ul><h3 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements" aria-hidden="true">#</a> System Requirements</h3><table><thead><tr><th style="text-align:center;">Hadoop Version</th><th style="text-align:center;">Java Version</th><th style="text-align:center;">TsFile Version</th></tr></thead><tbody><tr><td style="text-align:center;"><code>2.7.3</code></td><td style="text-align:center;"><code>1.8</code></td><td style="text-align:center;"><code>1.0.0</code></td></tr></tbody></table>',7),v={href:"https://github.com/apache/iotdb/tree/master/tsfile",target:"_blank",rel:"noopener noreferrer"},b=n(`<h3 id="data-type-correspondence" tabindex="-1"><a class="header-anchor" href="#data-type-correspondence" aria-hidden="true">#</a> Data Type Correspondence</h3><table><thead><tr><th>TsFile data type</th><th>Hadoop writable</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>BooleanWritable</td></tr><tr><td>INT32</td><td>IntWritable</td></tr><tr><td>INT64</td><td>LongWritable</td></tr><tr><td>FLOAT</td><td>FloatWritable</td></tr><tr><td>DOUBLE</td><td>DoubleWritable</td></tr><tr><td>TEXT</td><td>Text</td></tr></tbody></table><h3 id="tsfinputformat-explanation" tabindex="-1"><a class="header-anchor" href="#tsfinputformat-explanation" aria-hidden="true">#</a> TSFInputFormat Explanation</h3><p>TSFInputFormat extract data from tsfile and format them into records of <code>MapWritable</code>.</p><p>Suppose that we want to extract data of the device named <code>d1</code> which has three sensors named <code>s1</code>, <code>s2</code>, <code>s3</code>.</p><p><code>s1</code>&#39;s type is <code>BOOLEAN</code>, <code>s2</code>&#39;s type is <code>DOUBLE</code>, <code>s3</code>&#39;s type is <code>TEXT</code>.</p><p>The <code>MapWritable</code> struct will be like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;time_stamp&quot;: 10000000,
    &quot;device_id&quot;:  d1,
    &quot;s1&quot;:         true,
    &quot;s2&quot;:         3.14,
    &quot;s3&quot;:         &quot;middle&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the Map job of Hadoop, you can get any value you want by key as following:</p><p><code>mapwritable.get(new Text(&quot;s1&quot;))</code></p><blockquote><p>Note: All keys in <code>MapWritable</code> are <code>Text</code> type.</p></blockquote><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><h4 id="read-example-calculate-the-sum" tabindex="-1"><a class="header-anchor" href="#read-example-calculate-the-sum" aria-hidden="true">#</a> Read Example: calculate the sum</h4><p>First of all, we should tell InputFormat what kind of data we want from tsfile.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // configure reading time enable
    TSFInputFormat.setReadTime(job, true); 
    // configure reading deviceId enable
    TSFInputFormat.setReadDeviceId(job, true); 
    // configure reading which deltaObjectIds
    String[] deviceIds = {&quot;device_1&quot;};
    TSFInputFormat.setReadDeviceIds(job, deltaObjectIds);
    // configure reading which measurementIds
    String[] measurementIds = {&quot;sensor_1&quot;, &quot;sensor_2&quot;, &quot;sensor_3&quot;};
    TSFInputFormat.setReadMeasurementIds(job, measurementIds);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And then,the output key and value of mapper and reducer should be specified</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // set inputformat and outputformat
    job.setInputFormatClass(TSFInputFormat.class);
    // set mapper output key and value
    job.setMapOutputKeyClass(Text.class);
    job.setMapOutputValueClass(DoubleWritable.class);
    // set reducer output key and value
    job.setOutputKeyClass(Text.class);
    job.setOutputValueClass(DoubleWritable.class);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, the <code>mapper</code> and <code>reducer</code> class is how you deal with the <code>MapWritable</code> produced by <code>TSFInputFormat</code> class.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  public static class TSMapper extends Mapper&lt;NullWritable, MapWritable, Text, DoubleWritable&gt; {

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),m={href:"https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb//hadoop/tsfile/TSFMRReadExample.java",target:"_blank",rel:"noopener noreferrer"},p=n(`<h4 id="write-example-write-the-average-into-tsfile" tabindex="-1"><a class="header-anchor" href="#write-example-write-the-average-into-tsfile" aria-hidden="true">#</a> Write Example: write the average into Tsfile</h4><p>Except for the <code>OutputFormatClass</code>, the rest of configuration code for hadoop map-reduce job is almost same as above.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   job.setOutputFormatClass(TSFOutputFormat.class);
   // set reducer output key and value
   job.setOutputKeyClass(NullWritable.class);
   job.setOutputValueClass(HDFSTSRecord.class);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, the <code>mapper</code> and <code>reducer</code> class is how you deal with the <code>MapWritable</code> produced by <code>TSFInputFormat</code> class.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public static class TSMapper extends Mapper&lt;NullWritable, MapWritable, Text, MapWritable&gt; {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h={href:"https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb//hadoop/tsfile/TSMRWriteExample.java",target:"_blank",rel:"noopener noreferrer"};function x(g,f){const a=s("ExternalLinkIcon");return l(),o("div",null,[r(`

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

`),u,e("blockquote",null,[e("p",null,[t("Note: For more information about how to download and use TsFile, please see the following link: "),e("a",v,[t("https://github.com/apache/iotdb/tree/master/tsfile"),i(a)]),t(".")])]),b,e("blockquote",null,[e("p",null,[t("Note: For the complete code, please see the following link: "),e("a",m,[t("https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb//hadoop/tsfile/TSFMRReadExample.java"),i(a)])])]),p,e("blockquote",null,[e("p",null,[t("Note: For the complete code, please see the following link: "),e("a",h,[t("https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb//hadoop/tsfile/TSMRWriteExample.java"),i(a)])])])])}const w=d(c,[["render",x],["__file","MapReduce-TsFile.html.vue"]]);export{w as default};

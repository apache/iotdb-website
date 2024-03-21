import{_ as s,r as o,o as a,c as l,a as r,d as e,e as i,b as u,f as n}from"./app-G4h01DGF.js";const d={},c=n('<h1 id="telegraf-introduction" tabindex="-1"><a class="header-anchor" href="#telegraf-introduction" aria-hidden="true">#</a> Telegraf Introduction</h1><p>Telegraf is an open-source agent that facilitates the collection, processing, and transmission of metric data. Developed by InfluxData.<br> Telegraf includes the following features:</p><ul><li>Plugin Architecture: Telegraf&#39;s strength lies in its extensive plugin ecosystem. It supports a wide range of input, output, and processor plugins, allowing seamless integration with various data sources and destinations.</li><li>Data Collection: Telegraf excels in collecting metrics from diverse sources, such as system metrics, logs, databases, and more. Its versatility makes it suitable for monitoring applications, infrastructure, and IoT devices.</li><li>Output Destinations: Once collected, data can be sent to various output destinations, including popular databases like InfluxDB. This flexibility makes Telegraf adaptable to different monitoring and analytics setups.</li><li>Ease of Configuration: Telegraf&#39;s configuration is done using TOML files. This simplicity allows users to define inputs, outputs, and processors with ease, making customization straightforward.</li><li>Community and Support: Being open-source, Telegraf benefits from an active community. Users can contribute plugins, report issues, and seek assistance through forums and documentation.</li></ul><h1 id="telegraf-iotdb-output-plugin" tabindex="-1"><a class="header-anchor" href="#telegraf-iotdb-output-plugin" aria-hidden="true">#</a> Telegraf IoTDB Output Plugin</h1><p>This output plugin saves Telegraf metrics to an Apache IoTDB backend, supporting session connection and data insertion.</p><h2 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions" aria-hidden="true">#</a> Precautions</h2>',6),v=e("li",null,"Before using this plugin, please configure the IP address, port number, username, password and other information of the database server, as well as some data type conversion, time unit and other configurations.",-1),m=e("li",null,"The path should follow the rule in Chapter 'Syntax Rule'",-1),p={href:"https://github.com/influxdata/telegraf/tree/master/plugins/outputs/iotdb",target:"_blank",rel:"noopener noreferrer"},g=n(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Here is an example that demonstrates how to collect cpu data from Telegraf into IoTDB.</p><ol><li>generate the configuration file by telegraf</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>telegraf --sample-config --input-filter cpu --output-filter iotdb &gt; cpu_iotdb.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>modify the default cpu inputs plugin configuration</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Read metrics about cpu usage
[[inputs.cpu]]
  ## Whether to report per-cpu stats or not
  percpu = true
  ## Whether to report total system cpu stats or not
  totalcpu = true
  ## If true, collect raw CPU time metrics
  collect_cpu_time = false
  ## If true, compute and report the sum of all non-idle CPU states
  report_active = false
  ## If true and the info is available then add core_id and physical_id tags
  core_tags = false
  name_override = &quot;root.demo.telgraf.cpu&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>modify the IoTDB outputs plugin configuration</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Save metrics to an IoTDB Database
[[outputs.iotdb]]
  ## Configuration of IoTDB server connection
  host = &quot;127.0.0.1&quot;
  # port = &quot;6667&quot;

  ## Configuration of authentication
  # user = &quot;root&quot;
  # password = &quot;root&quot;

  ## Timeout to open a new session.
  ## A value of zero means no timeout.
  # timeout = &quot;5s&quot;

  ## Configuration of type conversion for 64-bit unsigned int
  ## IoTDB currently DOES NOT support unsigned integers (version 13.x).
  ## 32-bit unsigned integers are safely converted into 64-bit signed integers by the plugin,
  ## however, this is not true for 64-bit values in general as overflows may occur.
  ## The following setting allows to specify the handling of 64-bit unsigned integers.
  ## Available values are:
  ##   - &quot;int64&quot;       --  convert to 64-bit signed integers and accept overflows
  ##   - &quot;int64_clip&quot;  --  convert to 64-bit signed integers and clip the values on overflow to 9,223,372,036,854,775,807
  ##   - &quot;text&quot;        --  convert to the string representation of the value
  # uint64_conversion = &quot;int64_clip&quot;

  ## Configuration of TimeStamp
  ## TimeStamp is always saved in 64bits int. timestamp_precision specifies the unit of timestamp.
  ## Available value:
  ## &quot;second&quot;, &quot;millisecond&quot;, &quot;microsecond&quot;, &quot;nanosecond&quot;(default)
  timestamp_precision = &quot;millisecond&quot;

  ## Handling of tags
  ## Tags are not fully supported by IoTDB.
  ## A guide with suggestions on how to handle tags can be found here:
  ##     https://iotdb.apache.org/UserGuide/Master/API/InfluxDB-Protocol.html
  ##
  ## Available values are:
  ##   - &quot;fields&quot;     --  convert tags to fields in the measurement
  ##   - &quot;device_id&quot;  --  attach tags to the device ID
  ##
  ## For Example, a metric named &quot;root.sg.device&quot; with the tags \`tag1: &quot;private&quot;\`  and  \`tag2: &quot;working&quot;\` and
  ##  fields \`s1: 100\`  and \`s2: &quot;hello&quot;\` will result in the following representations in IoTDB
  ##   - &quot;fields&quot;     --  root.sg.device, s1=100, s2=&quot;hello&quot;, tag1=&quot;private&quot;, tag2=&quot;working&quot;
  ##   - &quot;device_id&quot;  --  root.sg.device.private.working, s1=100, s2=&quot;hello&quot;
  convert_tags_to = &quot;fields&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>run telegraf with this configuration file, after some time, the data can be found in IoTDB</li></ol>`,9);function f(h,b){const t=o("ExternalLinkIcon");return a(),l("div",null,[r(`

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

`),c,e("ol",null,[v,m,e("li",null,[i("See "),e("a",p,[i("https://github.com/influxdata/telegraf/tree/master/plugins/outputs/iotdb"),u(t)]),i(" for how to configure this plugin.")])]),g])}const T=s(d,[["render",f],["__file","Telegraf-IoTDB.html.vue"]]);export{T as default};

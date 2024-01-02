import{_ as s,r as a,o as l,c as o,a as r,d as e,e as i,b as d,f as n}from"./app-nKSDvTe9.js";const u={},c=n('<h1 id="telegraf-介绍" tabindex="-1"><a class="header-anchor" href="#telegraf-介绍" aria-hidden="true">#</a> Telegraf 介绍</h1><p>Telegraf 是一个开源代理工具，用于收集、处理和传输度量数据,由 InfluxData 开发。<br> Telegraf 有以下这些特点:</p><ul><li>插件体系结构: Telegraf 的强大之处在于其广泛的插件生态系统。它支持多种输入、输出和处理器插件，可以与各种数据源和目标无缝集成。</li><li>数据收集: Telegraf 擅长从不同来源收集度量数据，例如系统指标、日志、数据库等。其多功能性使其适用于监视应用程序、基础架构和物联网设备。</li><li>输出目标: 一旦收集到数据，可以将其发送到各种输出目标，包括流行的数据库如 InfluxDB。这种灵活性使 Telegraf 适应不同的监视和分析设置。</li><li>配置简易: Telegraf 的配置使用 TOML 文件进行。这种简单性使用户能够轻松定义输入、输出和处理器，使定制变得简单明了。</li><li>社区与支持: 作为开源项目，Telegraf 受益于活跃的社区。用户可以通过论坛和文档贡献插件、报告问题并寻求帮助。</li></ul><h1 id="telegraf-iotdb-输出插件" tabindex="-1"><a class="header-anchor" href="#telegraf-iotdb-输出插件" aria-hidden="true">#</a> Telegraf IoTDB 输出插件</h1><p>这个输出插件保存 Telegraf 中的监控信息到 Apache IoTDB 的后端，支持 session 连接和数据写入。</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2>',6),v=e("li",null,"在使用这个插件前，需要配置 IP 地址，端口号，用户名，密码以及其他数据库服务器的信息，另外还有数据转换，时间单位和其他配置。",-1),m=e("li",null,"输出到 IoTDB 的路径需要满足章节 ‘语法约定’ 中的要求",-1),b={href:"https://github.com/influxdata/telegraf/tree/master/plugins/outputs/iotdb",target:"_blank",rel:"noopener noreferrer"},g=n(`<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>以下是一个使用 Telegraf 收集 CPU 数据输出到 IoTDB 的示例。</p><ol><li>使用 telegraf 命令生成配置文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>telegraf --sample-config --input-filter cpu --output-filter iotdb &gt; cpu_iotdb.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>修改 input cpu 插件的配置</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Read metrics about cpu usage
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>修改 output iotdb 插件的配置</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Save metrics to an IoTDB Database
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>使用这个配置文件运行 Telegraf，一段时间后，可以在 IoTDB 中查询到收集的这些数据</li></ol>`,9);function h(p,f){const t=a("ExternalLinkIcon");return l(),o("div",null,[r(`

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

`),c,e("ol",null,[v,m,e("li",null,[i("查看 "),e("a",b,[i("https://github.com/influxdata/telegraf/tree/master/plugins/outputs/iotdb"),d(t)]),i(" 了解如何配置 Telegraf IoTDB Output 插件.")])]),g])}const T=s(u,[["render",h],["__file","Telegraf-IoTDB.html.vue"]]);export{T as default};

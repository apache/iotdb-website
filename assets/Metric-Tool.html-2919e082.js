import{_ as l,r,o as i,c as u,a as c,d as t,t as n,e,b as o,f as s}from"./app-6f9cebab.js";const m={},h=s('<p>当前用户可以使用多种手段对正在运行的IoTDB进程进行系统监控，包括使用 Java 的 Jconsole 工具对正在运行的 IoTDB 进程进行系统状态监控，使用 IoTDB 为用户开发的接口查看数据统计量，使用监控框架进行 IoTDB 的运行状态监控</p><h1 id="_1-监控框架" tabindex="-1"><a class="header-anchor" href="#_1-监控框架" aria-hidden="true">#</a> 1. 监控框架</h1><p>在IoTDB运行过程中，我们希望对IoTDB的状态进行观测，以便于排查系统问题或者及时发现系统潜在的风险。能<strong>反映系统运行状态的一系列指标</strong>就是系统监控指标。</p><h2 id="_1-1-什么场景下会使用到监控框架" tabindex="-1"><a class="header-anchor" href="#_1-1-什么场景下会使用到监控框架" aria-hidden="true">#</a> 1.1. 什么场景下会使用到监控框架?</h2><p>那么什么时候会用到监控框架呢？下面列举一些常见的场景。</p><ol><li><p>系统变慢了</p><p>系统变慢几乎是最常见也最头疼的问题，这时候我们需要尽可能多的信息来帮助我们找到系统变慢的原因，比如：</p><ul><li>JVM信息：是不是有FGC？GC耗时多少？GC后内存有没有恢复？是不是有大量的线程？</li><li>系统信息：CPU使用率是不是太高了？磁盘IO是不是很频繁？</li><li>连接数：当前连接是不是太多？</li><li>接口：当前TPS是多少？各个接口耗时有没有变化？</li><li>线程池：系统中各种任务是否有积压？</li><li>缓存命中率</li></ul></li><li><p>磁盘快满了</p><p>这时候我们迫切想知道最近一段时间数据文件的增长情况，看看是不是某种文件有突增。</p></li><li><p>系统运行是否正常</p><p>此时我们可能需要通过错误日志的数量、集群节点的状态等指标来判断系统是否在正常运行。</p></li></ol><h2 id="_1-2-什么人需要使用监控框架" tabindex="-1"><a class="header-anchor" href="#_1-2-什么人需要使用监控框架" aria-hidden="true">#</a> 1.2. 什么人需要使用监控框架?</h2><p>所有关注系统状态的人员都可以使用，包括但不限于研发、测试、运维、DBA等等</p><h2 id="_1-3-iotdb都有哪些监控指标" tabindex="-1"><a class="header-anchor" href="#_1-3-iotdb都有哪些监控指标" aria-hidden="true">#</a> 1.3. IoTDB都有哪些监控指标?</h2><p>目前，IoTDB对外提供一些主要模块的metrics，并且随着新功能的开发以及系统优化或者重构，metrics也会同步添加和更新。</p><h3 id="_1-3-1-名词解释" tabindex="-1"><a class="header-anchor" href="#_1-3-1-名词解释" aria-hidden="true">#</a> 1.3.1. 名词解释</h3><p>在进一步了解这些指标之前，我们先来看几个名词解释：</p><ul><li><p>Metric Name</p><p>指标名称，比如logback_events_total表示日志事件发生的总次数。</p></li><li><p>Tag</p><p>每个指标下面可以有0到多个分类，比如logback_events_total下有一个<code>level</code>的分类，用来表示特定级别下的日志数量。</p></li></ul><h3 id="_1-3-2-数据格式" tabindex="-1"><a class="header-anchor" href="#_1-3-2-数据格式" aria-hidden="true">#</a> 1.3.2. 数据格式</h3><p>IoTDB对外提供JMX和Prometheus格式的监控指标，对于JMX，可以通过<code>org.apache.iotdb.metrics</code>获取系统监控指标指标。</p><p>接下来我们以Prometheus格式为例对目前已有监控项进行说明。</p><h3 id="_1-3-3-iotdb-默认指标" tabindex="-1"><a class="header-anchor" href="#_1-3-3-iotdb-默认指标" aria-hidden="true">#</a> 1.3.3. IoTDB 默认指标</h3><h4 id="_1-3-3-1-接入层" tabindex="-1"><a class="header-anchor" href="#_1-3-3-1-接入层" aria-hidden="true">#</a> 1.3.3.1. 接入层</h4>',18),_=t("thead",null,[t("tr",null,[t("th",null,"Metric"),t("th",null,"Tag"),t("th",null,"level"),t("th",null,"说明"),t("th",null,"示例")])],-1),p=t("td",null,"entry_seconds_count",-1),b=t("td",null,"important",-1),v=t("td",null,"接口累计访问次数",-1),q=t("td",null,'entry_seconds_count{name="openSession",} 1.0',-1),g=t("td",null,"entry_seconds_sum",-1),f=t("td",null,"important",-1),y=t("td",null,"接口累计耗时(s)",-1),k=t("td",null,'entry_seconds_sum{name="openSession",} 0.024',-1),x=t("td",null,"entry_seconds_max",-1),T=t("td",null,"important",-1),M=t("td",null,"接口最大耗时(s)",-1),j=t("td",null,'entry_seconds_max{name="openSession",} 0.024',-1),I=t("tr",null,[t("td",null,"quantity_total"),t("td",null,'name="pointsIn"'),t("td",null,"important"),t("td",null,"系统累计写入点数"),t("td",null,'quantity_total{name="pointsIn",} 1.0')],-1),C=t("td",null,"thrift_connections",-1),E=t("td",null,"core",-1),D=t("td",null,"thrift当前连接数",-1),B=t("td",null,'thrift_connections{name="RPC",} 1.0',-1),P=s('<h4 id="_1-3-3-2-task" tabindex="-1"><a class="header-anchor" href="#_1-3-3-2-task" aria-hidden="true">#</a> 1.3.3.2. Task</h4><table><thead><tr><th>Metric</th><th>Tag</th><th>level</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>queue</td><td>name=&quot;compaction_inner/compaction_cross/flush&quot;,<br>status=&quot;running/waiting&quot;</td><td>important</td><td>当前时间任务数</td><td>queue{name=&quot;flush&quot;,status=&quot;waiting&quot;,} 0.0<br>queue{name=&quot;compaction/flush&quot;,status=&quot;running&quot;,} 0.0</td></tr><tr><td>cost_task_seconds_count</td><td>name=&quot;compaction/flush&quot;</td><td>important</td><td>任务累计发生次数</td><td>cost_task_seconds_count{name=&quot;flush&quot;,} 1.0</td></tr><tr><td>cost_task_seconds_max</td><td>name=&quot;compaction/flush&quot;</td><td>important</td><td>到目前为止任务耗时(s)最大的一次</td><td>cost_task_seconds_max{name=&quot;flush&quot;,} 0.363</td></tr><tr><td>cost_task_seconds_sum</td><td>name=&quot;compaction/flush&quot;</td><td>important</td><td>任务累计耗时(s)</td><td>cost_task_seconds_sum{name=&quot;flush&quot;,} 0.363</td></tr><tr><td>data_written_total</td><td>name=&quot;compaction&quot;, <br>type=&quot;aligned/not-aligned/total&quot;</td><td>important</td><td>合并文件时写入量</td><td>data_written{name=&quot;compaction&quot;,type=&quot;total&quot;,} 10240</td></tr><tr><td>data_read_total</td><td>name=&quot;compaction&quot;</td><td>important</td><td>合并文件时的读取量</td><td>data_read={name=&quot;compaction&quot;,} 10240</td></tr></tbody></table><h4 id="_1-3-3-3-内存占用" tabindex="-1"><a class="header-anchor" href="#_1-3-3-3-内存占用" aria-hidden="true">#</a> 1.3.3.3. 内存占用</h4><table><thead><tr><th>Metric</th><th>Tag</th><th>level</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>mem</td><td>name=&quot;chunkMetaData/storageGroup/schemaUsage/schemaRemaining&quot;</td><td>important</td><td>chunkMetaData 占用/storageGroup 占用/schema 占用/schema 剩余的内存（byte）</td><td>mem{name=&quot;chunkMetaData&quot;,} 2050.0</td></tr></tbody></table><h4 id="_1-3-3-4-缓存" tabindex="-1"><a class="header-anchor" href="#_1-3-3-4-缓存" aria-hidden="true">#</a> 1.3.3.4. 缓存</h4><table><thead><tr><th>Metric</th><th>Tag</th><th>level</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>cache_hit</td><td>name=&quot;chunk/timeSeriesMeta/bloomFilter&quot;</td><td>important</td><td>chunk/timeSeriesMeta缓存命中率,bloomFilter拦截率</td><td>cache_hit{name=&quot;chunk&quot;,} 80</td></tr></tbody></table><h4 id="_1-3-3-5-业务数据" tabindex="-1"><a class="header-anchor" href="#_1-3-3-5-业务数据" aria-hidden="true">#</a> 1.3.3.5. 业务数据</h4>',7),S=t("thead",null,[t("tr",null,[t("th",null,"Metric"),t("th",null,"Tag"),t("th",null,"level"),t("th",null,"说明"),t("th",null,"示例")])],-1),G=t("tr",null,[t("td",null,"quantity"),t("td",null,'name="timeSeries/storageGroup/device/deviceUsingTemplate", type="total/normal/template/template"'),t("td",null,"important"),t("td",null,"当前时间timeSeries/storageGroup/device/激活了模板的device的数量"),t("td",null,'quantity{name="timeSeries",type="normal"} 1.0')],-1),w=t("td",null,"points",-1),L=t("td",null,"core",-1),A=t("td",null,"最新一个刷盘的memtale的点数",-1),z=t("td",null,'quantity{name="memtable",type="flush"} 1.0',-1),J=t("h4",{id:"_1-3-3-6-集群",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-3-3-6-集群","aria-hidden":"true"},"#"),e(" 1.3.3.6. 集群")],-1),O=t("thead",null,[t("tr",null,[t("th",null,"Metric"),t("th",null,"Tag"),t("th",null,"level"),t("th",null,"说明"),t("th",null,"示例")])],-1),R=t("td",null,"cluster_node_leader_count",-1),N=t("td",null,"important",-1),V=t("td",null,[e("节点上"),t("code",null,"dataGroupLeader"),e("的数量，用来观察leader是否分布均匀")],-1),F=t("td",null,'cluster_node_leader_count{name="127.0.0.1",} 2.0',-1),H=t("td",null,"cluster_uncommitted_log",-1),Y=t("td",null,"important",-1),U=t("td",null,[e("节点"),t("code",null,"uncommitted_log"),e("的数量")],-1),X=t("td",null,'cluster_uncommitted_log{name="127.0.0.1_Data-127.0.0.1-40010-raftId-0",} 0.0',-1),K=t("td",null,"cluster_node_status",-1),W=t("td",null,"important",-1),Z=t("td",null,"节点状态，1=online 2=offline",-1),Q=t("td",null,'cluster_node_status{name="127.0.0.1",} 1.0',-1),$=t("td",null,"cluster_elect_total",-1),tt=t("td",null,"important",-1),et=t("td",null,"节点参与选举的次数及结果",-1),at=t("td",null,'cluster_elect_total{name="127.0.0.1",status="win",} 1.0',-1),nt=s('<h3 id="_1-3-4-iotdb-预定义指标集" tabindex="-1"><a class="header-anchor" href="#_1-3-4-iotdb-预定义指标集" aria-hidden="true">#</a> 1.3.4. IoTDB 预定义指标集</h3><p>用户可以在<code>iotdb-metric.yml</code>文件中，修改<code>predefinedMetrics</code>的值来启用预定义指标集，目前有<code>JVM</code>、<code>LOGBACK</code>、<code>FILE</code>、<code>PROCESS</code>、<code>SYSYTEM</code>这五种。</p><h4 id="_1-3-4-1-jvm" tabindex="-1"><a class="header-anchor" href="#_1-3-4-1-jvm" aria-hidden="true">#</a> 1.3.4.1. JVM</h4><h5 id="_1-3-4-1-1-线程" tabindex="-1"><a class="header-anchor" href="#_1-3-4-1-1-线程" aria-hidden="true">#</a> 1.3.4.1.1. 线程</h5><table><thead><tr><th>Metric</th><th>Tag</th><th>level</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>jvm_threads_live_threads</td><td>无</td><td>important</td><td>当前线程数</td><td>jvm_threads_live_threads 25.0</td></tr><tr><td>jvm_threads_daemon_threads</td><td>无</td><td>important</td><td>当前daemon线程数</td><td>jvm_threads_daemon_threads 12.0</td></tr><tr><td>jvm_threads_peak_threads</td><td>无</td><td>important</td><td>峰值线程数</td><td>jvm_threads_peak_threads 28.0</td></tr><tr><td>jvm_threads_states_threads</td><td>state=&quot;runnable/blocked/waiting/timed-waiting/new/terminated&quot;</td><td>important</td><td>当前处于各种状态的线程数</td><td>jvm_threads_states_threads{state=&quot;runnable&quot;,} 10.0</td></tr></tbody></table><h5 id="_1-3-4-1-2-垃圾回收" tabindex="-1"><a class="header-anchor" href="#_1-3-4-1-2-垃圾回收" aria-hidden="true">#</a> 1.3.4.1.2. 垃圾回收</h5><table><thead><tr><th>Metric</th><th>Tag</th><th>level</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>jvm_gc_pause_seconds_count</td><td>action=&quot;end of major GC/end of minor GC&quot;,cause=&quot;xxxx&quot;</td><td>important</td><td>YGC/FGC发生次数及其原因</td><td>jvm_gc_pause_seconds_count{action=&quot;end of major GC&quot;,cause=&quot;Metadata GC Threshold&quot;,} 1.0</td></tr><tr><td>jvm_gc_pause_seconds_sum</td><td>action=&quot;end of major GC/end of minor GC&quot;,cause=&quot;xxxx&quot;</td><td>important</td><td>YGC/FGC累计耗时及其原因</td><td>jvm_gc_pause_seconds_sum{action=&quot;end of major GC&quot;,cause=&quot;Metadata GC Threshold&quot;,} 0.03</td></tr><tr><td>jvm_gc_pause_seconds_max</td><td>action=&quot;end of major GC&quot;,cause=&quot;Metadata GC Threshold&quot;</td><td>important</td><td>YGC/FGC最大耗时及其原因</td><td>jvm_gc_pause_seconds_max{action=&quot;end of major GC&quot;,cause=&quot;Metadata GC Threshold&quot;,} 0.0</td></tr><tr><td>jvm_gc_memory_promoted_bytes_total</td><td>无</td><td>important</td><td>从GC之前到GC之后老年代内存池大小正增长的累计</td><td>jvm_gc_memory_promoted_bytes_total 8425512.0</td></tr><tr><td>jvm_gc_max_data_size_bytes</td><td>无</td><td>important</td><td>老年代内存的历史最大值</td><td>jvm_gc_max_data_size_bytes 2.863661056E9</td></tr><tr><td>jvm_gc_live_data_size_bytes</td><td>无</td><td>important</td><td>GC后老年代内存的大小</td><td>jvm_gc_live_data_size_bytes 8450088.0</td></tr><tr><td>jvm_gc_memory_allocated_bytes_total</td><td>无</td><td>important</td><td>在一个GC之后到下一个GC之前年轻代增加的内存</td><td>jvm_gc_memory_allocated_bytes_total 4.2979144E7</td></tr></tbody></table><h5 id="_1-3-4-1-3-内存" tabindex="-1"><a class="header-anchor" href="#_1-3-4-1-3-内存" aria-hidden="true">#</a> 1.3.4.1.3. 内存</h5>',8),st=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Metric"),t("th",null,"Tag"),t("th",null,"level"),t("th",null,"说明"),t("th",null,"示例")])]),t("tbody",null,[t("tr",null,[t("td",null,"jvm_buffer_memory_used_bytes"),t("td",null,'id="direct/mapped"'),t("td",null,"important"),t("td",null,"已经使用的缓冲区大小"),t("td",null,'jvm_buffer_memory_used_bytes{id="direct",} 3.46728099E8')]),t("tr",null,[t("td",null,"jvm_buffer_total_capacity_bytes"),t("td",null,'id="direct/mapped"'),t("td",null,"important"),t("td",null,"最大缓冲区大小"),t("td",null,'jvm_buffer_total_capacity_bytes{id="mapped",} 0.0')]),t("tr",null,[t("td",null,"jvm_buffer_count_buffers"),t("td",null,'id="direct/mapped"'),t("td",null,"important"),t("td",null,"当前缓冲区数量"),t("td",null,'jvm_buffer_count_buffers{id="direct",} 183.0')]),t("tr",null,[t("td",null,"jvm_memory_committed_bytes"),t("td",{area:'heap/nonheap,id="xxx",'}),t("td",null,"important"),t("td",null,"当前向JVM申请的内存大小"),t("td",null,[e('jvm_memory_committed_bytes{area="heap",id="Par Survivor Space",} 2.44252672E8'),t("br"),e('jvm_memory_committed_bytes{area="nonheap",id="Metaspace",} 3.9051264E7'),t("br")])]),t("tr",null,[t("td",null,"jvm_memory_max_bytes"),t("td",{area:'heap/nonheap,id="xxx",'}),t("td",null,"important"),t("td",null,"JVM最大内存"),t("td",null,[e('jvm_memory_max_bytes{area="heap",id="Par Survivor Space",} 2.44252672E8'),t("br"),e('jvm_memory_max_bytes{area="nonheap",id="Compressed Class Space",} 1.073741824E9')])]),t("tr",null,[t("td",null,"jvm_memory_used_bytes"),t("td",{area:'heap/nonheap,id="xxx",'}),t("td",null,"important"),t("td",null,"JVM已使用内存大小"),t("td",null,[e('jvm_memory_used_bytes{area="heap",id="Par Eden Space",} 1.000128376E9'),t("br"),e('jvm_memory_used_bytes{area="nonheap",id="Code Cache",} 2.9783808E7'),t("br")])])])],-1),dt=t("h5",{id:"_1-3-4-1-4-classes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-3-4-1-4-classes","aria-hidden":"true"},"#"),e(" 1.3.4.1.4. Classes")],-1),ot=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Metric"),t("th",null,"Tag"),t("th",null,"level"),t("th",null,"说明"),t("th",null,"示例")])]),t("tbody",null,[t("tr",null,[t("td",null,"jvm_classes_unloaded_classes_total"),t("td",null,"无"),t("td",null,"important"),t("td",null,"jvm累计卸载的class数量"),t("td",null,"jvm_classes_unloaded_classes_total 680.0")]),t("tr",null,[t("td",null,"jvm_classes_loaded_classes"),t("td",null,"无"),t("td",null,"important"),t("td",null,"jvm累计加载的class数量"),t("td",null,"jvm_classes_loaded_classes 5975.0")]),t("tr",null,[t("td",null,"jvm_compilation_time_ms_total"),t("td",{compiler:"HotSpot 64-Bit Tiered Compilers,"}),t("td",null,"important"),t("td",null,"jvm耗费在编译上的时间"),t("td",null,'jvm_compilation_time_ms_total{compiler="HotSpot 64-Bit Tiered Compilers",} 107092.0')])])],-1),lt=s('<h4 id="_1-3-4-2-文件-file" tabindex="-1"><a class="header-anchor" href="#_1-3-4-2-文件-file" aria-hidden="true">#</a> 1.3.4.2. 文件（File）</h4><table><thead><tr><th>Metric</th><th>Tag</th><th>level</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>file_size</td><td>name=&quot;wal/seq/unseq&quot;</td><td>important</td><td>当前时间wal/seq/unseq文件大小(byte)</td><td>file_size{name=&quot;wal&quot;,} 67.0</td></tr><tr><td>file_count</td><td>name=&quot;wal/seq/unseq&quot;</td><td>important</td><td>当前时间wal/seq/unseq文件个数</td><td>file_count{name=&quot;seq&quot;,} 1.0</td></tr></tbody></table><h4 id="_1-3-4-3-日志-logback" tabindex="-1"><a class="header-anchor" href="#_1-3-4-3-日志-logback" aria-hidden="true">#</a> 1.3.4.3. 日志(logback)</h4>',3),rt=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Metric"),t("th",null,"Tag"),t("th",null,"level"),t("th",null,"说明"),t("th",null,"示例")])]),t("tbody",null,[t("tr",null,[t("td",null,"logback_events_total"),t("td",{level:"trace/debug/info/warn/error,"}),t("td",null,"important"),t("td",null,"trace/debug/info/warn/error日志累计数量"),t("td",null,'logback_events_total{level="warn",} 0.0')])])],-1),it=s('<h5 id="_1-3-4-3-1-进程-process" tabindex="-1"><a class="header-anchor" href="#_1-3-4-3-1-进程-process" aria-hidden="true">#</a> 1.3.4.3.1. 进程（Process）</h5><table><thead><tr><th>Metric</th><th>Tag</th><th>level</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>process_cpu_load</td><td>name=&quot;cpu&quot;</td><td>core</td><td>process当前CPU占用率（%）</td><td>process_cpu_load{name=&quot;process&quot;,} 5.0</td></tr><tr><td>process_cpu_time</td><td>name=&quot;cpu&quot;</td><td>core</td><td>process累计占用CPU时间（ns)</td><td>process_cpu_time{name=&quot;process&quot;,} 3.265625E9</td></tr><tr><td>process_max_mem</td><td>name=&quot;memory&quot;</td><td>core</td><td>JVM最大可用内存</td><td>process_max_mem{name=&quot;process&quot;,} 3.545759744E9</td></tr><tr><td>process_used_mem</td><td>name=&quot;memory&quot;</td><td>core</td><td>JVM当前使用内存</td><td>process_used_mem{name=&quot;process&quot;,} 4.6065456E7</td></tr><tr><td>process_total_mem</td><td>name=&quot;memory&quot;</td><td>core</td><td>JVM当前已申请内存</td><td>process_total_mem{name=&quot;process&quot;,} 2.39599616E8</td></tr><tr><td>process_free_mem</td><td>name=&quot;memory&quot;</td><td>core</td><td>JVM当前剩余可用内存</td><td>process_free_mem{name=&quot;process&quot;,} 1.94035584E8</td></tr><tr><td>process_mem_ratio</td><td>name=&quot;memory&quot;</td><td>core</td><td>进程的内存占用比例</td><td>process_mem_ratio{name=&quot;process&quot;,} 0.0</td></tr><tr><td>process_threads_count</td><td>name=&quot;process&quot;</td><td>core</td><td>当前线程数</td><td>process_threads_count{name=&quot;process&quot;,} 11.0</td></tr><tr><td>process_status</td><td>name=&quot;process&quot;</td><td>core</td><td>进程存活状态，1.0为存活，0.0为终止</td><td>process_status{name=&quot;process&quot;,} 1.0</td></tr></tbody></table><h4 id="_1-3-4-5-系统-system" tabindex="-1"><a class="header-anchor" href="#_1-3-4-5-系统-system" aria-hidden="true">#</a> 1.3.4.5. 系统（System）</h4><table><thead><tr><th>Metric</th><th>Tag</th><th>level</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>sys_cpu_load</td><td>name=&quot;cpu&quot;</td><td>core</td><td>system当前CPU占用率（%）</td><td>sys_cpu_load{name=&quot;system&quot;,} 15.0</td></tr><tr><td>sys_cpu_cores</td><td>name=&quot;cpu&quot;</td><td>core</td><td>jvm可用处理器数</td><td>sys_cpu_cores{name=&quot;system&quot;,} 16.0</td></tr><tr><td>sys_total_physical_memory_size</td><td>name=&quot;memory&quot;</td><td>core</td><td>system最大物理内存</td><td>sys_total_physical_memory_size{name=&quot;system&quot;,} 1.5950999552E10</td></tr><tr><td>sys_free_physical_memory_size</td><td>name=&quot;memory&quot;</td><td>core</td><td>system当前剩余可用内存</td><td>sys_free_physical_memory_size{name=&quot;system&quot;,} 4.532396032E9</td></tr><tr><td>sys_total_swap_space_size</td><td>name=&quot;memory&quot;</td><td>core</td><td>system交换区最大空间</td><td>sys_total_swap_space_size{name=&quot;system&quot;,} 2.1051273216E10</td></tr><tr><td>sys_free_swap_space_size</td><td>name=&quot;memory&quot;</td><td>core</td><td>system交换区剩余可用空间</td><td>sys_free_swap_space_size{name=&quot;system&quot;,} 2.931576832E9</td></tr><tr><td>sys_committed_vm_size</td><td>name=&quot;memory&quot;</td><td>important</td><td>system保证可用于正在运行的进程的虚拟内存量</td><td>sys_committed_vm_size{name=&quot;system&quot;,} 5.04344576E8</td></tr><tr><td>sys_disk_total_space</td><td>name=&quot;disk&quot;</td><td>core</td><td>磁盘总大小</td><td>sys_disk_total_space{name=&quot;system&quot;,} 5.10770798592E11</td></tr><tr><td>sys_disk_free_space</td><td>name=&quot;disk&quot;</td><td>core</td><td>磁盘可用大小</td><td>sys_disk_free_space{name=&quot;system&quot;,} 3.63467845632E11</td></tr></tbody></table><h3 id="_1-3-5-自定义添加埋点" tabindex="-1"><a class="header-anchor" href="#_1-3-5-自定义添加埋点" aria-hidden="true">#</a> 1.3.5. 自定义添加埋点</h3>',5),ut={href:"https://github.com/apache/iotdb/tree/master/metrics",target:"_blank",rel:"noopener noreferrer"},ct=s("<li>Metric 埋点定义规则 <ul><li><code>Metric</code>：监控项的名称，比如<code>entry_seconds_count</code>为接口累计访问次数，file_size 为文件总数。</li><li><code>Tags</code>：Key-Value对，用来明确被监控项，可选项 <ul><li><code>name = xxx</code>：被监控项的名称，比如对<code>entry_seconds_count</code>这个监控项，name 的含义是被监控的接口名称。</li><li><code>status = xxx</code>：被监控项的状态细分，比如监控 Task 的监控项可以通过该参数，将运行的 Task 和停止的 Task 分开。</li><li><code>user = xxx</code>：被监控项和某个特定用户相关，比如统计root用户的写入总次数。</li><li>根据具体情况自定义......</li></ul></li></ul></li><li>监控指标级别含义： <ul><li>线上运行默认启动级别为<code>Important</code>级，线下调试默认启动级别为<code>Normal</code>级，审核严格程度<code>Core &gt; Important &gt; Normal &gt; All</code></li><li><code>Core</code>：系统的核心指标，供<strong>运维人员</strong>使用，关乎系统的<strong>性能、稳定性、安全性</strong>，比如实例的状况，系统的负载等。</li><li><code>Important</code>：模块的重要指标，供<strong>运维和测试人员</strong>使用，直接关乎<strong>每个模块的运行状态</strong>，比如合并文件个数、执行情况等。</li><li><code>Normal</code>：模块的一般指标，供<strong>开发人员</strong>使用，方便在出现问题时<strong>定位模块</strong>，比如合并中的特定关键操作情况。</li><li><code>All</code>：模块的全部指标，供<strong>模块开发人员</strong>使用，往往在复现问题的时候使用，从而快速解决问题。</li></ul></li>",2),mt=s(`<h2 id="_1-4-怎样获取这些系统监控指标" tabindex="-1"><a class="header-anchor" href="#_1-4-怎样获取这些系统监控指标" aria-hidden="true">#</a> 1.4. 怎样获取这些系统监控指标？</h2><p>metric采集默认是关闭的，需要先到conf/iotdb-metric.yml中打开后启动server，目前也支持启动后，通过<code>load configuration</code>热加载。</p><h3 id="_1-4-1-配置文件" tabindex="-1"><a class="header-anchor" href="#_1-4-1-配置文件" aria-hidden="true">#</a> 1.4.1. 配置文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 是否启动监控模块，默认为false</span>
<span class="token key atrule">enableMetric</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment"># 是否启用操作延迟统计</span>
<span class="token key atrule">enablePerformanceStat</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment"># 数据提供方式，对外部通过jmx和prometheus协议提供metrics的数据, 可选参数：[JMX, PROMETHEUS, IOTDB],IOTDB是默认关闭的。</span>
<span class="token key atrule">metricReporterList</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> JMX
  <span class="token punctuation">-</span> PROMETHEUS

<span class="token comment"># 底层使用的metric架构，可选参数：[MICROMETER, DROPWIZARD]</span>
<span class="token key atrule">monitorType</span><span class="token punctuation">:</span> MICROMETER

<span class="token comment"># 初始化metric的级别，可选参数: [CORE, IMPORTANT, NORMAL, ALL]</span>
<span class="token key atrule">metricLevel</span><span class="token punctuation">:</span> IMPORTANT

<span class="token comment"># 预定义的指标集, 可选参数: [JVM, LOGBACK, FILE, PROCESS, SYSTEM]</span>
<span class="token key atrule">predefinedMetrics</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> JVM
  <span class="token punctuation">-</span> FILE

<span class="token comment"># Prometheus Reporter 使用的端口</span>
<span class="token key atrule">prometheusExporterPort</span><span class="token punctuation">:</span> <span class="token number">9091</span>

<span class="token comment"># 是否将预设置的监控指标写回 IoTDB</span>
<span class="token key atrule">isStoreToLocal</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment"># IoTDB Reporter相关的配置</span>
<span class="token key atrule">ioTDBReporterConfig</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6667</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> root
  <span class="token key atrule">password</span><span class="token punctuation">:</span> root
  <span class="token key atrule">database</span><span class="token punctuation">:</span> _metric
  <span class="token key atrule">pushPeriodInSecond</span><span class="token punctuation">:</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后按照下面的操作获取监控指标数据</p><ol><li>打开配置文件中的metric开关</li><li>其他参数使用默认配置即可</li><li>启动IoTDB</li><li>打开浏览器或者用<code>curl</code> 访问 <code>http://servier_ip:9091/metrics</code>, 就能看到metric数据了:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...
# HELP file_count
# TYPE file_count gauge
file_count{name=&quot;wal&quot;,} 0.0
file_count{name=&quot;unseq&quot;,} 0.0
file_count{name=&quot;seq&quot;,} 2.0
# HELP file_size
# TYPE file_size gauge
file_size{name=&quot;wal&quot;,} 0.0
file_size{name=&quot;unseq&quot;,} 0.0
file_size{name=&quot;seq&quot;,} 560.0
# HELP queue
# TYPE queue gauge
queue{name=&quot;flush&quot;,status=&quot;waiting&quot;,} 0.0
queue{name=&quot;flush&quot;,status=&quot;running&quot;,} 0.0
# HELP quantity
# TYPE quantity gauge
quantity{name=&quot;timeSeries&quot;,} 1.0
quantity{name=&quot;storageGroup&quot;,} 1.0
quantity{name=&quot;device&quot;,} 1.0
# HELP logback_events_total Number of error level events that made it to the logs
# TYPE logback_events_total counter
logback_events_total{level=&quot;warn&quot;,} 0.0
logback_events_total{level=&quot;debug&quot;,} 2760.0
logback_events_total{level=&quot;error&quot;,} 0.0
logback_events_total{level=&quot;trace&quot;,} 0.0
logback_events_total{level=&quot;info&quot;,} 71.0
# HELP mem
# TYPE mem gauge
mem{name=&quot;storageGroup&quot;,} 0.0
mem{name=&quot;mtree&quot;,} 1328.0
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-2-对接prometheus和grafana" tabindex="-1"><a class="header-anchor" href="#_1-4-2-对接prometheus和grafana" aria-hidden="true">#</a> 1.4.2. 对接Prometheus和Grafana</h3><p>如上面所述，IoTDB对外暴露出标准Prometheus格式的监控指标数据，可以直接和Prometheus以及Grafana集成。</p><p>IoTDB、Prometheus、Grafana三者的关系如下图所示:</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/iotdb_prometheus_grafana.png" alt="iotdb_prometheus_grafana" tabindex="0" loading="lazy"><figcaption>iotdb_prometheus_grafana</figcaption></figure><ol><li>IoTDB在运行过程中持续收集监控指标数据。</li><li>Prometheus以固定的间隔（可配置）从IoTDB的HTTP接口拉取监控指标数据。</li><li>Prometheus将拉取到的监控指标数据存储到自己的TSDB中。</li><li>Grafana以固定的间隔（可配置）从Prometheus查询监控指标数据并绘图展示。</li></ol><p>从交互流程可以看出，我们需要做一些额外的工作来部署和配置Prometheus和Grafana。</p><p>比如，你可以对Prometheus进行如下的配置（部分参数可以自行调整）来从IoTDB获取监控数据</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">job_name</span><span class="token punctuation">:</span> pull<span class="token punctuation">-</span>metrics
<span class="token key atrule">honor_labels</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">honor_timestamps</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> 15s
<span class="token key atrule">scrape_timeout</span><span class="token punctuation">:</span> 10s
<span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> /metrics
<span class="token key atrule">scheme</span><span class="token punctuation">:</span> http
<span class="token key atrule">follow_redirects</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> localhost<span class="token punctuation">:</span><span class="token number">9091</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多细节可以参考下面的文档：</p>`,16),ht={href:"https://prometheus.io/docs/prometheus/latest/getting_started/",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config",target:"_blank",rel:"noopener noreferrer"},pt={href:"https://grafana.com/docs/grafana/latest/getting-started/getting-started/",target:"_blank",rel:"noopener noreferrer"},bt={href:"https://prometheus.io/docs/visualization/grafana/#grafana-support-for-prometheus",target:"_blank",rel:"noopener noreferrer"},vt=t("h3",{id:"_1-4-3-apache-iotdb-dashboard",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-4-3-apache-iotdb-dashboard","aria-hidden":"true"},"#"),e(" 1.4.3. Apache IoTDB Dashboard")],-1),qt=t("p",null,"我们提供了Apache IoTDB Dashboard，在Grafana中显示的效果图如下所示：",-1),gt=t("figure",null,[t("img",{src:"https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/dashboard.png",alt:"Apache IoTDB Dashboard",tabindex:"0",loading:"lazy"}),t("figcaption",null,"Apache IoTDB Dashboard")],-1),ft=t("p",null,"Apache IoTDB Dashboard的获取方式：",-1),yt=t("li",null,"您可以在grafana-metrics-example文件夹下获取到对应不同iotdb版本的Dashboard的json文件。",-1),kt={href:"https://grafana.com/grafana/dashboards/",target:"_blank",rel:"noopener noreferrer"},xt=t("code",null,"Apache IoTDB Dashboard",-1),Tt=s('<p>在创建Grafana时，您可以选择Import刚刚下载的json文件，并为Apache IoTDB Dashboard选择对应目标数据源。</p><h1 id="_2-系统状态监控" tabindex="-1"><a class="header-anchor" href="#_2-系统状态监控" aria-hidden="true">#</a> 2. 系统状态监控</h1><p>进入 Jconsole 监控页面后，首先看到的是 IoTDB 各类运行情况的概览。在这里，您可以看到堆内存信息、线程信息、类信息以及服务器的 CPU 使用情况。</p><h1 id="_3-jmx-mbean-监控" tabindex="-1"><a class="header-anchor" href="#_3-jmx-mbean-监控" aria-hidden="true">#</a> 3. JMX MBean 监控</h1><p>通过使用 JConsole 工具并与 JMX 连接，您可以查看一些系统统计信息和参数。<br> 本节描述如何使用 JConsole 的 &quot;Mbean&quot; 选项卡来监视 IoTDB 的一些系统配置、写入数据统计等等。 连接到 JMX 后，您可以通过 &quot;MBeans&quot; 标签找到名为 &quot;org.apache.iotdb.service&quot; 的 &quot;MBean&quot;，如下图所示。</p><p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/149951720-707f1ee8-32ee-4fde-9252-048caebd232e.png"> <br></p><h1 id="_4-性能监控" tabindex="-1"><a class="header-anchor" href="#_4-性能监控" aria-hidden="true">#</a> 4. 性能监控</h1><h2 id="_4-1-介绍" tabindex="-1"><a class="header-anchor" href="#_4-1-介绍" aria-hidden="true">#</a> 4.1. 介绍</h2><p>性能监控模块用来监控 IOTDB 每一个操作的耗时，以便用户更好的了解数据库的整体性能。此模块会统计每一种操作的平均耗时，以及耗时在一定时间区间内（1ms，4ms，16ms，64ms，256ms，1024ms，以上）的操作的比例。输出文件在 log_measure.log 中。输出样例如下：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/60937461-14296f80-a303-11e9-9602-a7bed624bfb3.png"><h2 id="_4-2-配置参数" tabindex="-1"><a class="header-anchor" href="#_4-2-配置参数" aria-hidden="true">#</a> 4.2. 配置参数</h2><p>配置文件位置：conf/iotdb-datanode.properties</p><center><p><strong>表 -配置参数以及描述项</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">默认值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">enable_performance_stat</td><td style="text-align:left;">false</td><td style="text-align:left;">是否开启性能监控模块</td></tr></tbody></table></center><h1 id="_5-cache-命中率统计" tabindex="-1"><a class="header-anchor" href="#_5-cache-命中率统计" aria-hidden="true">#</a> 5. Cache 命中率统计</h1><p>为了提高查询性能，IOTDB 对 ChunkMetaData 和 TsFileMetaData 进行了缓存。用户可以通过 debug 级别的日志以及 MXBean 两种方式来查看缓存的命中率，并根据缓存命中率以及系统内存来调节缓存所使用的内存大小。使用 MXBean 查看缓存命中率的方法为：</p><ol><li>通过端口 31999 连接 jconsole，并在上方菜单项中选择‘MBean’.</li><li>展开侧边框并选择 &#39;org.apache.iotdb.db.service&#39;. 将会得到如下图所示结果：</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/112426760-73e3da80-8d73-11eb-9a8f-9232d1f2033b.png">',17);function Mt(a,jt){const d=r("ExternalLinkIcon");return i(),u("div",null,[c(`

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

`),h,t("table",null,[_,t("tbody",null,[t("tr",null,[p,t("td",null,'name="'+n(a.interface)+'"',1),b,v,q]),t("tr",null,[g,t("td",null,'name="'+n(a.interface)+'"',1),f,y,k]),t("tr",null,[x,t("td",null,'name="'+n(a.interface)+'"',1),T,M,j]),I,t("tr",null,[C,t("td",null,'name="'+n(a.thriftService)+'"',1),E,D,B])])]),P,t("table",null,[S,t("tbody",null,[G,t("tr",null,[w,t("td",null,'sg="'+n(a.storageGroup)+'", type="flush"',1),L,A,z])])]),J,t("table",null,[O,t("tbody",null,[t("tr",null,[R,t("td",null,'name="'+n(a.ip)+'"',1),N,V,F]),t("tr",null,[H,t("td",null,'name="'+n(a.ip_datagroupHeader)+'"',1),Y,U,X]),t("tr",null,[K,t("td",null,'name="'+n(a.ip)+'"',1),W,Z,Q]),t("tr",null,[$,t("td",null,'name="'+n(a.ip)+'",status="fail/win"',1),tt,et,at])])]),nt,st,dt,ot,lt,rt,it,t("ul",null,[t("li",null,[e("如果想自己在IoTDB中添加更多系统监控指标埋点，可以参考"),t("a",ut,[e("IoTDB Metrics Framework"),o(d)]),e("使用说明")]),ct]),mt,t("p",null,[t("a",ht,[e("Prometheus安装使用文档"),o(d)])]),t("p",null,[t("a",_t,[e("Prometheus从HTTP接口拉取metrics数据的配置说明"),o(d)])]),t("p",null,[t("a",pt,[e("Grafana安装使用文档"),o(d)])]),t("p",null,[t("a",bt,[e("Grafana从Prometheus查询数据并绘图的文档"),o(d)])]),vt,qt,gt,ft,t("ol",null,[yt,t("li",null,[e("您可以访问"),t("a",kt,[e("Grafana Dashboard官网"),o(d)]),e("搜索"),xt,e("并使用")])]),Tt])}const Ct=l(m,[["render",Mt],["__file","Metric-Tool.html.vue"]]);export{Ct as default};

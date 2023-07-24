import{_ as t,o as e,c as l,a,f as i}from"./app-c075fd0e.js";const d={},n=i('<h1 id="iotdb-部署推荐" tabindex="-1"><a class="header-anchor" href="#iotdb-部署推荐" aria-hidden="true">#</a> IoTDB 部署推荐</h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>系统能力</p><ul><li>性能需求：系统读写速度，压缩比</li><li>扩展性：系统能够用多节点管理数据，本质上是数据是否可分区管理</li><li>高可用：系统能够容忍节点失效，本质上是数据是否有副本</li><li>一致性：当数据有多副本时，不同副本是否一致，本质上用户是否能将数据库当做单机看待</li></ul><p>缩写</p><ul><li>C：ConfigNode</li><li>D：DataNode</li><li>aCbD：a 个 ConfigNode 和 b 个 DataNode</li></ul><h2 id="部署模式选型" tabindex="-1"><a class="header-anchor" href="#部署模式选型" aria-hidden="true">#</a> 部署模式选型</h2><table><thead><tr><th style="text-align:center;">模式</th><th style="text-align:left;">性能</th><th style="text-align:left;">扩展性</th><th style="text-align:left;">高可用</th><th style="text-align:left;">一致性</th></tr></thead><tbody><tr><td style="text-align:center;">轻量单机模式</td><td style="text-align:left;">最高</td><td style="text-align:left;">无</td><td style="text-align:left;">无</td><td style="text-align:left;">高</td></tr><tr><td style="text-align:center;">可扩展单节点模式 （默认）</td><td style="text-align:left;">高</td><td style="text-align:left;">高</td><td style="text-align:left;">中</td><td style="text-align:left;">高</td></tr><tr><td style="text-align:center;">高性能分布式模式</td><td style="text-align:left;">高</td><td style="text-align:left;">高</td><td style="text-align:left;">高</td><td style="text-align:left;">中</td></tr><tr><td style="text-align:center;">强一致分布式模式</td><td style="text-align:left;">中</td><td style="text-align:left;">高</td><td style="text-align:left;">高</td><td style="text-align:left;">高</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">配置</th><th style="text-align:left;">轻量单机模式</th><th style="text-align:left;">可扩展单节点模式</th><th style="text-align:left;">高性能分布式模式</th><th style="text-align:left;">强一致分布式模式</th></tr></thead><tbody><tr><td style="text-align:center;">ConfigNode 个数</td><td style="text-align:left;">1</td><td style="text-align:left;">≥1 （奇数）</td><td style="text-align:left;">≥1 （奇数）</td><td style="text-align:left;">≥1（奇数）</td></tr><tr><td style="text-align:center;">DataNode 个数</td><td style="text-align:left;">1</td><td style="text-align:left;">≥1</td><td style="text-align:left;">≥3</td><td style="text-align:left;">≥3</td></tr><tr><td style="text-align:center;">元数据副本 schema_replication_factor</td><td style="text-align:left;">1</td><td style="text-align:left;">1</td><td style="text-align:left;">3</td><td style="text-align:left;">3</td></tr><tr><td style="text-align:center;">数据副本 data_replication_factor</td><td style="text-align:left;">1</td><td style="text-align:left;">1</td><td style="text-align:left;">2</td><td style="text-align:left;">3</td></tr><tr><td style="text-align:center;">ConfigNode 协议 config_node_consensus_protocol_class</td><td style="text-align:left;">Simple</td><td style="text-align:left;">Ratis</td><td style="text-align:left;">Ratis</td><td style="text-align:left;">Ratis</td></tr><tr><td style="text-align:center;">SchemaRegion 协议 schema_region_consensus_protocol_class</td><td style="text-align:left;">Simple</td><td style="text-align:left;">Ratis</td><td style="text-align:left;">Ratis</td><td style="text-align:left;">Ratis</td></tr><tr><td style="text-align:center;">DataRegion 协议 data_region_consensus_protocol_class</td><td style="text-align:left;">Simple</td><td style="text-align:left;">IoT</td><td style="text-align:left;">IoT</td><td style="text-align:left;">Ratis</td></tr></tbody></table><h2 id="部署配置推荐" tabindex="-1"><a class="header-anchor" href="#部署配置推荐" aria-hidden="true">#</a> 部署配置推荐</h2><h3 id="从-0-13-版本升级到-1-0" tabindex="-1"><a class="header-anchor" href="#从-0-13-版本升级到-1-0" aria-hidden="true">#</a> 从 0.13 版本升级到 1.0</h3><p>场景：<br> 已在 0.13 版本存储了部分数据，希望迁移到 1.0 版本，并且与 0.13 表现保持一致。</p><p>可选方案：</p><ol><li>升级到 1C1D 单机版，ConfigNode 分配 2G 内存，DataNode 与 0.13 一致。</li><li>升级到 3C3D 高性能分布式，ConfigNode 分配 2G 内存，DataNode 与 0.13 一致。</li></ol><p>配置修改：<br> 1.0 配置参数修改：</p><ul><li>数据目录不要指向0.13原有数据目录</li><li>region_group_extension_strategy=COSTOM</li><li>data_region_group_per_database <ul><li>如果是 3C3D 高性能分布式：则改为：集群 CPU 总核数/ 数据副本数</li><li>如果是 1C1D，则改为：等于 0.13 的 virtual_storage_group_num 即可 （&quot;database&quot;一词 与 0.13 中的 &quot;sg&quot; 同义）</li></ul></li><li>如果启动时遇到元数据内存不足的提示，这是因为1.0版本中分配给元数据的内存不再全部用于 schema region 存储 <ul><li>storage_query_schema_consensus_free_memory_proportion：增大 schema 的内存比例至两倍</li></ul></li></ul><p>数据迁移：<br> 配置修改完成后，通过 load-tsfile 工具将 0.13 的 TsFile 都加载进 1.0 的 IoTDB 中，即可使用。</p><h3 id="直接使用-1-0" tabindex="-1"><a class="header-anchor" href="#直接使用-1-0" aria-hidden="true">#</a> 直接使用 1.0</h3><p><strong>推荐用户仅设置 1 个 Database</strong></p><h4 id="内存设置方法" tabindex="-1"><a class="header-anchor" href="#内存设置方法" aria-hidden="true">#</a> 内存设置方法</h4><h5 id="根据活跃序列数估计内存" tabindex="-1"><a class="header-anchor" href="#根据活跃序列数估计内存" aria-hidden="true">#</a> 根据活跃序列数估计内存</h5><p>集群 DataNode 总堆内内存（GB） = 活跃序列数/100000 * 数据副本数</p><p>每个 DataNode 堆内内存（GB）= 集群DataNode总堆内内存 / DataNode 个数</p><blockquote><p>假设需要用3C3D管理100万条序列，数据采用3副本，则：</p><ul><li>集群 DataNode 总堆内内存（GB）：1,000,000 / 100,000 * 3 = 30G</li><li>每台 DataNode 的堆内内存配置为：30 / 3 = 10G</li></ul></blockquote><h5 id="根据总序列数估计内存" tabindex="-1"><a class="header-anchor" href="#根据总序列数估计内存" aria-hidden="true">#</a> 根据总序列数估计内存</h5><p>集群 DataNode 总堆内内存 （B） = 20 * （180 + 2 * 序列的全路径的平均字符数）* 序列总量 * 元数据副本数</p><p>每个 DataNode 内存配置推荐：集群 DataNode 总堆内内存 / DataNode 数目</p><blockquote><p>假设需要用3C3D管理100万条序列，元数据采用3副本，序列名形如 root.sg_1.d_10.s_100（约20字符），则：</p><ul><li>集群 DataNode 总堆内内存：20 * （180 + 2 * 20）* 1,000,000 * 3 = 13.2 GB</li><li>每台 DataNode 的堆内内存配置为：13.2 GB / 3 = 4.4 GB</li></ul></blockquote><h4 id="磁盘估计" tabindex="-1"><a class="header-anchor" href="#磁盘估计" aria-hidden="true">#</a> 磁盘估计</h4><p>IoTDB 存储空间=数据存储空间 + 元数据存储空间 + 临时存储空间</p><h5 id="数据磁盘空间" tabindex="-1"><a class="header-anchor" href="#数据磁盘空间" aria-hidden="true">#</a> 数据磁盘空间</h5><p>序列数量 * 采样频率 * 每个数据点大小 * 存储时长 * 副本数 / 10 倍压缩比</p><table><thead><tr><th style="text-align:center;">数据类型 \\ 数据点大小</th><th style="text-align:left;">时间戳（字节）</th><th style="text-align:left;">值（字节）</th><th style="text-align:left;">总共（字节）</th></tr></thead><tbody><tr><td style="text-align:center;">开关量（Boolean）</td><td style="text-align:left;">8</td><td style="text-align:left;">1</td><td style="text-align:left;">9</td></tr><tr><td style="text-align:center;">整型（INT32）/单精度浮点数（FLOAT）</td><td style="text-align:left;">8</td><td style="text-align:left;">4</td><td style="text-align:left;">12</td></tr><tr><td style="text-align:center;">长整型（INT64）/双精度浮点数（DOUBLE）</td><td style="text-align:left;">8</td><td style="text-align:left;">8</td><td style="text-align:left;">16</td></tr><tr><td style="text-align:center;">字符串（TEXT）</td><td style="text-align:left;">8</td><td style="text-align:left;">假设为 a</td><td style="text-align:left;">8+a</td></tr></tbody></table><blockquote><p>示例：1000设备，每个设备100 测点，共 100000 序列。整型。采样频率1Hz（每秒一次），存储1年，3副本，压缩比按 10 算，则数据存储空间占用：</p><ul><li>简版：1000 * 100 * 12 * 86400 * 365 * 3 / 10 = 11T</li><li>完整版：1000设备 * 100测点 * 12字节每数据点 * 86400秒每天 * 365天每年 * 3副本 / 10压缩比 = 11T</li></ul></blockquote><h5 id="元数据磁盘空间" tabindex="-1"><a class="header-anchor" href="#元数据磁盘空间" aria-hidden="true">#</a> 元数据磁盘空间</h5><p>每条序列在磁盘日志文件中大约占用 序列字符数 + 20 字节。<br> 若序列有tag描述信息，则仍需加上约 tag 总字符数字节的空间。</p><h5 id="临时磁盘空间" tabindex="-1"><a class="header-anchor" href="#临时磁盘空间" aria-hidden="true">#</a> 临时磁盘空间</h5><p>临时磁盘空间 = 写前日志 + 共识协议 + 合并临时空间</p><ol><li>写前日志</li></ol><p>最大写前日志空间占用 = memtable 总内存占用 ÷ 最小有效信息占比</p><ul><li>memtable 总内存占用和 storage_query_schema_consensus_free_memory_proportion、storage_engine_memory_proportion、write_memory_proportion 三个参数有关</li><li>最小有效信息占比由 wal_min_effective_info_ratio 决定</li></ul><blockquote><p>示例：为 IoTDB 分配 16G 内存，配置文件如下<br> storage_query_schema_consensus_free_memory_proportion=3:3:1:1:2<br> storage_engine_memory_proportion=8:2<br> write_memory_proportion=19:1<br> wal_min_effective_info_ratio=0.1<br> 最大写前日志空间占用 = 16 * (3 / 10) * (8 / 10) * (19 / 20) ÷ 0.1 = 36.48G</p></blockquote><ol start="2"><li>共识协议</li></ol><p>Ratis共识协议<br> 采用Ratis共识协议的情况下，需要额外磁盘空间存储Raft Log。Raft Log会在每一次状态机 Snapshot 之后删除，因此可以通过调整 trigger_snapshot_threshold 参数控制Raft Log最大空间占用。</p><p>每一个 Region Raft Log占用最大空间 = 平均请求大小 * trigger_snapshot_threshold。<br> 集群中一个Region总的Raft Log占用空间和Raft数据副本数成正比。</p><blockquote><p>示例：DataRegion, 平均每一次插入20k数据，data_region_trigger_snapshot_threshold = 400,000，那么Raft Log最大占用 = 20K * 400,000 = 8G。<br> Raft Log会从0增长到8G，接着在snapshot之后重新变成0。平均占用为4G。<br> 当副本数为3时，集群中这个DataRegion总Raft Log最大占用 3 * 8G = 24G。</p></blockquote><p>此外，可以通过data_region_ratis_log_max_size规定每一个DataRegion的Raft Log磁盘占用最大值，<br> 默认为20G，能够保障运行全程中单DataRegion Raft Log总大小不超过20G。</p><ol start="3"><li>合并临时空间</li></ol><ul><li><p>空间内合并<br> 临时文件的磁盘空间 = 源文件大小总和</p><blockquote><p>示例：10个源文件，每个文件大小为100M<br> 临时文件的磁盘空间 = 10 * 100 = 1000M</p></blockquote></li><li><p>跨空间合并<br> 跨空间合并的临时文件大小与源文件大小和顺乱序数据的重叠度有关，当乱序数据与顺序数据有相同的时间戳时，就认为有重叠。<br> 乱序数据的重叠度 = 重叠的乱序数据量 / 总的乱序数据量</p><p>临时文件的磁盘空间 = 源顺序文件总大小 + 源乱序文件总大小 *（1 - 重叠度）</p><blockquote><p>示例：10个顺序文件，10个乱序文件，每个顺序文件100M，每个乱序文件50M，每个乱序文件里有一半的数据与顺序文件有相同的时间戳<br> 乱序数据的重叠度 = 25M/50M * 100% = 50%<br> 临时文件的磁盘空间 = 10 * 100 + 10 * 50 * 50% = 1250M</p></blockquote></li></ul>',49);function o(r,s){return e(),l("div",null,[a(`

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

`),n])}const g=t(d,[["render",o],["__file","Deployment-Recommendation.html.vue"]]);export{g as default};

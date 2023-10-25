import{_ as e,o as i,c as t,a as n,f as o}from"./app-9073a2e6.js";const r={},a=o('<h1 id="系统架构" tabindex="-1"><a class="header-anchor" href="#系统架构" aria-hidden="true">#</a> 系统架构</h1><p>IoTDB 套件由若干个组件构成，共同形成“数据收集-数据写入-数据存储-数据查询-数据可视化-数据分析”等一系列功能。</p><p>如下图展示了使用 IoTDB 套件全部组件后形成的整体应用架构。下文称所有组件形成 IoTDB 套件，而 IoTDB 特指其中的时间序列数据库组件。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/IoTDB-Introduction/Architecture/Structure-of-Apache-IoTDB-cn.png?raw=true"><p>在上图中，用户可以通过 JDBC 将来自设备上传感器采集的时序数据、服务器负载和 CPU 内存等系统状态数据、消息队列中的时序数据、应用程序的时序数据或者其他数据库中的时序数据导入到本地或者远程的 IoTDB 中。用户还可以将上述数据直接写成本地（或位于 HDFS 上）的 TsFile 文件。</p><p>可以将 TsFile 文件写入到 HDFS 上，进而实现在 Hadoop 或 Spark 的数据处理平台上的诸如异常检测、机器学习等数据处理任务。</p><p>对于写入到 HDFS 或者本地的 TsFile 文件，可以利用 TsFile-Hadoop 或 TsFile-Spark 连接器允许 Hadoop 或 Spark 进行数据处理。</p><p>对于分析的结果，可以写回成 TsFile 文件。</p><p>IoTDB 和 TsFile 还提供了相应的客户端工具，满足用户查看和写入数据的 SQL 形式、脚本形式和图形化形式等多种需求。</p><p>IoTDB 提供了单机部署和集群部署两种模式。在集群部署模式下，IoTDB支持自动故障转移，确保系统在节点故障时能够快速切换到备用节点。切换时间可以达到秒级，从而最大限度地减少系统中断时间，且可保证切换后数据不丢失。当故障节点恢复正常，系统会自动将其重新纳入集群，确保集群的高可用性和可伸缩性。</p><p>IoTDB还支持读写分离模式部署，可以将读操作和写操作分别分配给不同的节点，从而实现负载均衡和提高系统的并发处理能力。</p><p>通过这些特性，IoTDB能够避免单点性能瓶颈和单点故障（SPOF），提供高可用性和可靠性的数据存储和管理解决方案。</p>',12);function s(c,p){return i(),t("div",null,[n(`

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

`),a])}const d=e(r,[["render",s],["__file","Architecture.html.vue"]]);export{d as default};

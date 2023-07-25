import{_ as t,o as n,c as i,a as o,d as e,e as s}from"./app-d4806199.js";const a={},r=e("h2",{id:"系统架构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统架构","aria-hidden":"true"},"#"),s(" 系统架构")],-1),c=e("p",null,"IoTDB 套件由若干个组件构成，共同形成“数据收集-数据写入-数据存储-数据查询-数据可视化-数据分析”等一系列功能。",-1),l=e("p",null,"如下图展示了使用 IoTDB 套件全部组件后形成的整体应用架构。下文称所有组件形成 IoTDB 套件，而 IoTDB 特指其中的时间序列数据库组件。",-1),h=e("img",{style:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:"https://alioss.timecho.com/docs/img/github/67943956-39c1e800-fc16-11e9-8da2-a662f8246816.png"},null,-1),d=e("p",null,"在上图中，用户可以通过 JDBC 将来自设备上传感器采集的时序数据、服务器负载和 CPU 内存等系统状态数据、消息队列中的时序数据、应用程序的时序数据或者其他数据库中的时序数据导入到本地或者远程的 IoTDB 中。用户还可以将上述数据直接写成本地（或位于 HDFS 上）的 TsFile 文件。",-1),p=e("p",null,"可以将 TsFile 文件写入到 HDFS 上，进而实现在 Hadoop 或 Spark 的数据处理平台上的诸如异常检测、机器学习等数据处理任务。",-1),u=e("p",null,"对于写入到 HDFS 或者本地的 TsFile 文件，可以利用 TsFile-Hadoop 或 TsFile-Spark 连接器允许 Hadoop 或 Spark 进行数据处理。",-1),_=e("p",null,"对于分析的结果，可以写回成 TsFile 文件。",-1),m=e("p",null,"IoTDB 和 TsFile 还提供了相应的客户端工具，满足用户查看和写入数据的 SQL 形式、脚本形式和图形化形式等多种需求。",-1);function f(T,g){return n(),i("div",null,[o(`

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

`),r,c,l,h,d,p,u,_,m])}const I=t(a,[["render",f],["__file","Architecture.html.vue"]]);export{I as default};

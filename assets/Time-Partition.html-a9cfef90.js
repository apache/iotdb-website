import{_ as a,r as n,o as r,c as l,a as s,d as e,e as t,b as o,w as d,f as h}from"./app-1485d6da.js";const c={},m=h('<h2 id="时间分区" tabindex="-1"><a class="header-anchor" href="#时间分区" aria-hidden="true">#</a> 时间分区</h2><h3 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h3><p>时间分区按照时间分割数据，一个时间分区用于保存某个时间范围内的所有数据。时间分区编号使用自然数表示，0 表示 1970 年 1 月 1 日，每隔 partition_interval 毫秒后加一。数据通过计算 timestamp / partition_interval 得到自己所在的时间分区编号，主要配置项如下所示：</p><ul><li>time_partition_interval</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">time_partition_interval</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">Database 分区的时间段长度，用户指定的 database 下会使用该时间段进行分区，单位：毫秒</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Int64</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">604800000</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">仅允许在第一次启动服务前修改</td></tr></tbody></table><h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例" aria-hidden="true">#</a> 配置示例</h3><p>开启时间分区功能，并设置 partition_interval 为 86400000（一天），则数据的分布情况如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Data-Concept/Time-Partition/time_partition_example.png?raw=true" alt="time partition example"><ul><li><p>插入一条时间戳为 0 的数据，计算 0 / 86400000 = 0，则该数据会被存储到 0 号文件夹下的TsFile中</p></li><li><p>插入一条时间戳为 1609459200010 的数据，计算 1609459200010 / 86400000 = 18628，则该数据会被存储到 18628 号文件夹下的TsFile中</p></li></ul><h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议" aria-hidden="true">#</a> 使用建议</h3>',10),p=e("ul",null,[e("li",null,[e("p",null,"enable_timed_flush_unseq_memtable: 是否开启乱序 Memtable 的定时刷盘，默认打开。")]),e("li",null,[e("p",null,"enable_timed_flush_seq_memtable: 是否开启顺序 Memtable 的定时刷盘，默认关闭。应当在开启时间分区后打开，定时刷盘非活跃时间分区下的 Memtable，为定时关闭 TsFileProcessor 作准备。")])],-1);function u(_,f){const i=n("RouterLink");return r(),l("div",null,[s(`

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

`),m,e("p",null,[t("使用时间分区功能时，建议同时打开 Memtable 的定时刷盘功能，共 6 个相关配置参数（详情见 "),o(i,{to:"/zh/UserGuide/Master/Reference/DataNode-Config-Manual.html"},{default:d(()=>[t("timed_flush配置项")]),_:1}),t("）。")]),p])}const b=a(c,[["render",u],["__file","Time-Partition.html.vue"]]);export{b as default};

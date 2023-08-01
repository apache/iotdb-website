import{_ as e,o as i,c as n,a as t,f as a}from"./app-2cc08c2c.js";const o={},r=a('<p>本章节从数据库连接、数据库读写性能及存储性能角度介绍IoTDB的性能特点。</p><h2 id="数据库连接" tabindex="-1"><a class="header-anchor" href="#数据库连接" aria-hidden="true">#</a> 数据库连接</h2><ul><li>在单台16核32GB机器上，IoTDB服务端的每秒并发连接数可超过20000次/秒</li></ul><h2 id="数据库读写性能" tabindex="-1"><a class="header-anchor" href="#数据库读写性能" aria-hidden="true">#</a> 数据库读写性能</h2><ul><li>客户端使用8核机器、设置并发度为8时，IoTDB数据库在单核服务器处理写入请求的能力最高可达4.9万次/秒</li><li>客户端使用单台16核32GB服务器、设置并发度为10，IoTDB数据库部署在单台16核32GB服务器时，写入数据点的处理能力可达3322万点/秒</li><li>客户端使用单台16核32GB服务器、设置并发度为10，IoTDB数据库部署在单台16核32GB服务器时，读取数据点的处理能力可达6791万点/秒</li><li>客户端使用三台64核256GB服务器、设置并发度为192，IoTDB数据库以集群模式部署在三台64核256GB服务器时（1ConfigNode + 3DataNode），集群的并发写入性能可超过5.23亿点/秒</li><li>IoTDB支持百亿级数据的聚合计算查询，部署在单台16核32GB服务器时，可在毫秒级返回百亿级数据的计算结果</li></ul><h2 id="存储性能" tabindex="-1"><a class="header-anchor" href="#存储性能" aria-hidden="true">#</a> 存储性能</h2><ul><li>IoTDB数据库支持PB级数据的存储和处理能力</li><li>使用ZSTD压缩方式，IoTDB对数值类型原始数据的压缩率可达到10%的级别</li></ul>',7);function s(l,c){return i(),n("div",null,[t(`
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
`),r])}const d=e(o,[["render",s],["__file","Performance.html.vue"]]);export{d as default};

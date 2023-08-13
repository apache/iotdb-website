import{_ as e,o as i,c as n,a as t,f as a}from"./app-6410b1bc.js";const r={},o=a('<p>本章节从数据库连接、数据库读写性能及存储性能角度介绍IoTDB的性能特点，测试工具使用开源的时序数据库基准测试工具 IoTDBBenchmark。</p><h2 id="数据库连接" tabindex="-1"><a class="header-anchor" href="#数据库连接" aria-hidden="true">#</a> 数据库连接</h2><ul><li>支持高并发连接，单台服务器可支持数万次并发连接。</li></ul><h2 id="数据库读写性能" tabindex="-1"><a class="header-anchor" href="#数据库读写性能" aria-hidden="true">#</a> 数据库读写性能</h2><ul><li>具备高写入吞吐的特点，单核处理写入请求大于 10 万次/秒，单台服务器写入性能达到数千万点/秒，集群可线性扩展，写入性能可达数亿点/秒。</li><li>具备高查询吞吐、低查询延迟的特点，单台服务器支持数千万点/秒查询吞吐，可在毫秒级聚合百亿数据点。</li></ul><h2 id="存储性能" tabindex="-1"><a class="header-anchor" href="#存储性能" aria-hidden="true">#</a> 存储性能</h2><ul><li>支持存储海量数据，具备PB级数据的存储和处理能力。</li><li>支持高压缩比，无损压缩能够达到20倍压缩比，有损压缩能够达到100倍压缩比。</li></ul>',7);function s(c,h){return i(),n("div",null,[t(`
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
`),o])}const d=e(r,[["render",s],["__file","Performance.html.vue"]]);export{d as default};

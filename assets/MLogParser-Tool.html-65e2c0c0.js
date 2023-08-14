import{_ as e,o as n,c as o,a as t,f as i}from"./app-90a9dcfb.js";const a={},r=i('<h1 id="mlog-解析工具" tabindex="-1"><a class="header-anchor" href="#mlog-解析工具" aria-hidden="true">#</a> Mlog 解析工具</h1><p>0.12.x 版本之后，IoTDB 将元数据文件编码成二进制。</p><p>如果想要将二进制元数据解析为人可读的字符串格式，可以使用本工具。</p><p>该工具目前仅支持解析 mlog.bin 文件。</p><p>在分布式场景下，若 SchemaRegion 的共识协议采用的是 RatisConsensus，IoTDB 不会使用 mlog.bin 文件来存储元数据，也将不会生成 mlog.bin 文件。</p><h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h2><p>Linux/MacOS</p><blockquote><p>./print-schema-log.sh -f /your path/mlog.bin -o /your path/mlog.txt</p></blockquote><p>Windows</p><blockquote><p>.\\print-schema-log.bat -f \\your path\\mlog.bin -o \\your path\\mlog.txt</p></blockquote>',10);function s(c,h){return n(),o("div",null,[t(`

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

`),r])}const p=e(a,[["render",s],["__file","MLogParser-Tool.html.vue"]]);export{p as default};

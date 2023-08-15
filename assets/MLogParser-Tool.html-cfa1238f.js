import{_ as e,o,c as t,a as n,f as a}from"./app-dc5882c4.js";const i={},r=a('<h1 id="mlogparser-tool" tabindex="-1"><a class="header-anchor" href="#mlogparser-tool" aria-hidden="true">#</a> MlogParser Tool</h1><p>After version 0.12.x, IoTDB encodes metadata files into binary format.</p><p>If you want to parse metadata into a human-readable way, you can use this tool to parse the specified metadata file.</p><p>Currently, the tool can only parse mlog.bin file.</p><p>If the consensus protocol used in cluster for SchemaRegion is RatisConsensus, IoTDB won&#39;t use mlog.bin file to store metadata and won&#39;t generate mlog.bin file.</p><h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h2><p>Linux/MacOS</p><blockquote><p>./print-schema-log.sh -f /your path/mlog.bin -o /your path/mlog.txt</p></blockquote><p>Windows</p><blockquote><p>.\\print-schema-log.bat -f \\your path\\mlog.bin -o \\your path\\mlog.txt</p></blockquote>',10);function s(c,l){return o(),t("div",null,[n(`

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

`),r])}const p=e(i,[["render",s],["__file","MLogParser-Tool.html.vue"]]);export{p as default};

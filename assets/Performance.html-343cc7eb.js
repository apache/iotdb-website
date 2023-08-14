import{_ as e,o as n,c as o,a as t,f as a}from"./app-38e86945.js";const r={},i=a('<p>This chapter introduces the performance characteristics of IoTDB from the perspectives of database connection, database read and write performance, and storage performance.</p><h2 id="database-connection" tabindex="-1"><a class="header-anchor" href="#database-connection" aria-hidden="true">#</a> Database connection</h2><ul><li>In the 16C32GB machine, the number of concurrent connections of the IoTDB server can exceed 20,000 times per second.</li></ul><h2 id="read-and-write-performance" tabindex="-1"><a class="header-anchor" href="#read-and-write-performance" aria-hidden="true">#</a> Read and write performance</h2><ul><li>When the client uses an 8C machine and sets concurrency to 8, the maximum writing throughput of IoTDB on a single-core server can exceed 49,000 times per second.</li><li>When the client uses a 16C32GB machine and sets concurrency to 10, the writing throughput of IoTDB deployed on 16C32GB server can reach 33.22 million points/second.</li><li>When the client uses a 16C32GB machine and sets concurrency to 10, the reading throughput of IoTDB deployed on 16C32GB server can reach 67.91 million points/second.</li><li>When the client uses three 64C256GB machines and sets concurrency to 192, the writing throughput of IoTDB deployed on three 64C256GB servers(1ConfigNode + 3DataNode) can reach 523 million points/second.</li><li>IoTDB can support aggregation queries of tens of billions of data, and when deployed on a single 16C32GB server, IoTDB can return the calculation results of tens of billions of data in milliseconds.</li></ul><h2 id="storage-performance" tabindex="-1"><a class="header-anchor" href="#storage-performance" aria-hidden="true">#</a> Storage performance</h2><ul><li>IoTDB supports the storage and processing of PB-level data.</li><li>Using the ZSTD compression method, IoTDB can achieve a compression rate of 10% for the raw data of the numerical type.</li></ul>',7);function s(c,h){return n(),o("div",null,[t(`
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
`),i])}const l=e(r,[["render",s],["__file","Performance.html.vue"]]);export{l as default};

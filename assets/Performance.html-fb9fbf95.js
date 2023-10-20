import{_ as e,o as n,c as a,a as r,f as o}from"./app-02e7f176.js";const t={},i=o('<h1 id="performance" tabindex="-1"><a class="header-anchor" href="#performance" aria-hidden="true">#</a> Performance</h1><p>This chapter introduces the performance characteristics of IoTDB from the perspectives of database connection, database read and write performance, and storage performance.<br> The test tool uses IoTDBBenchmark, an open source time series database benchmark tool.</p><h2 id="database-connection" tabindex="-1"><a class="header-anchor" href="#database-connection" aria-hidden="true">#</a> Database connection</h2><ul><li>Support high concurrent connections, a single server can support tens of thousands of concurrent connections per second.</li></ul><h2 id="read-and-write-performance" tabindex="-1"><a class="header-anchor" href="#read-and-write-performance" aria-hidden="true">#</a> Read and write performance</h2><ul><li>It has the characteristics of high write throughput, a single core can handle more than tens of thousands of write requests per second, and the write performance of a single server can reach tens of millions of points per second; the cluster can be linearly scaled, and the write performance of the cluster can reach hundreds of millions points/second.</li><li>It has the characteristics of high query throughput and low query latency, a single server supports tens of millions of points/second query throughput, and can aggregate tens of billions of data points in milliseconds.</li><li></li></ul><h2 id="storage-performance" tabindex="-1"><a class="header-anchor" href="#storage-performance" aria-hidden="true">#</a> Storage performance</h2><ul><li>Supports the storage of massive data, with the storage and processing capabilities of PB-level data.</li><li>Support high compression ratio, lossless compression can reach 20 times compression ratio, lossy compression can reach 100 times compression ratio.</li></ul>',8);function s(c,h){return n(),a("div",null,[r(`
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
`),i])}const l=e(t,[["render",s],["__file","Performance.html.vue"]]);export{l as default};

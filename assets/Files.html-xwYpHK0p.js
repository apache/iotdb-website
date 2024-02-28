import{_ as r,r as n,o,c as d,a as l,d as t,e,b as i,w as s,f as c}from"./app-EnSYQARc.js";const h={},u=t("h2",{id:"files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#files","aria-hidden":"true"},"#"),e(" Files")],-1),f=t("p",null,"In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data management.",-1),g=t("p",null,"The data in IoTDB is divided into three categories, namely data files, system files, and pre-write log files.",-1),m=t("h3",{id:"data-files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#data-files","aria-hidden":"true"},"#"),e(" Data Files")],-1),p=t("code",null,"data_dirs",-1),_=t("h3",{id:"system-files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#system-files","aria-hidden":"true"},"#"),e(" System files")],-1),y=t("code",null,"base_dir",-1),w=t("h3",{id:"pre-write-log-files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pre-write-log-files","aria-hidden":"true"},"#"),e(" Pre-write Log Files")],-1),x=t("code",null,"wal_dir",-1),b=c(`<h3 id="example-of-setting-data-storage-directory" tabindex="-1"><a class="header-anchor" href="#example-of-setting-data-storage-directory" aria-hidden="true">#</a> Example of Setting Data storage Directory</h3><p>For a clearer understanding of configuring the data storage directory, we will give an example in this section.</p><p>The data directory path included in storage directory setting are: base_dir, data_dirs, multi_dir_strategy, and wal_dir, which refer to system files, data folders, storage strategy, and pre-write log files.</p><p>An example of the configuration items are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>base_dir = $IOTDB_HOME/data
data_dirs = /data1/data, /data2/data, /data3/data 
multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy
wal_dir= $IOTDB_HOME/data/wal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After setting the configuration, the system will:</p><ul><li>Save all system files in $IOTDB_HOME/data</li><li>Save TsFile in /data1/data, /data2/data, /data3/data. And the choosing strategy is <code>MaxDiskUsableSpaceFirstStrategy</code>, when data writes to the disk, the system will automatically select a directory with the largest remaining disk space to write data.</li><li>Save WAL data in $IOTDB_HOME/data/wal</li></ul>`,7);function S(T,I){const a=n("RouterLink");return o(),d("div",null,[l(`

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

`),u,f,g,m,t("p",null,[e("Data files store all the data that the user wrote to IoTDB, which contains TsFile and other files. TsFile storage directory can be configured with the "),p,e(" configuration item (see "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("file layer")]),_:1}),e(" for details). Other files can be configured through "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("data_dirs")]),_:1}),e(" configuration item (see "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("Engine Layer")]),_:1}),e(" for details).")]),t("p",null,[e("In order to support users' storage requirements such as disk space expansion better, IoTDB supports multiple file directories storage methods for TsFile storage configuration. Users can set multiple storage paths as data storage locations( see "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("data_dirs")]),_:1}),e(" configuration item), and you can specify or customize the directory selection strategy (see "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("multi_dir_strategy")]),_:1}),e(" configuration item for details).")]),_,t("p",null,[e("System files include schema files, which store metadata information of data in IoTDB. It can be configured through the "),y,e(" configuration item (see "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("System Layer")]),_:1}),e(" for details).")]),w,t("p",null,[e("Pre-write log files store WAL files. It can be configured through the "),x,e(" configuration item (see "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("System Layer")]),_:1}),e(" for details).")]),b])}const D=r(h,[["render",S],["__file","Files.html.vue"]]);export{D as default};

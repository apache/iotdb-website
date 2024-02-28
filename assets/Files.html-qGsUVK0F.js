import{_ as s,r as l,o as d,c as n,a as c,d as a,e,b as i,w as o,f as r}from"./app-EnSYQARc.js";const u={},h=a("h1",{id:"files",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#files","aria-hidden":"true"},"#"),e(" Files")],-1),f=a("p",null,"In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data management.",-1),m=a("p",null,"The data in IoTDB is divided into three categories, namely data files, system files, and pre-write log files.",-1),p=a("h2",{id:"data-files",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#data-files","aria-hidden":"true"},"#"),e(" Data Files")],-1),g=a("blockquote",null,[a("p",null,"under directory basedir/data/")],-1),b=a("code",null,"data_dirs",-1),_=r('<h3 id="tsfile" tabindex="-1"><a class="header-anchor" href="#tsfile" aria-hidden="true">#</a> TsFile</h3><blockquote><p>under directory data/sequence or unsequence/{DatabaseName}/{DataRegionId}/{TimePartitionId}/</p></blockquote><ol><li>{time}-{version}-{inner_compaction_count}-{cross_compaction_count}.tsfile <ul><li>normal data file</li></ul></li><li>{TsFileName}.tsfile.mod <ul><li>modification file</li><li>record delete operation</li></ul></li></ol><h3 id="tsfileresource" tabindex="-1"><a class="header-anchor" href="#tsfileresource" aria-hidden="true">#</a> TsFileResource</h3><ol><li>{TsFileName}.tsfile.resource <ul><li>descriptor and statistic file of a TsFile</li></ul></li></ol><h3 id="compaction-related-files" tabindex="-1"><a class="header-anchor" href="#compaction-related-files" aria-hidden="true">#</a> Compaction Related Files</h3><blockquote><p>under directory basedir/data/sequence or unsequence/{DatabaseName}/</p></blockquote><ol><li>file suffixe with <code>.cross </code> or <code>.inner</code><ul><li>temporary files of metadata generated in a compaction task</li></ul></li><li>file suffixe with <code>.inner-compaction.log</code> or <code>.cross-compaction.log</code><ul><li>record the progress of a compaction task</li></ul></li><li>file suffixe with <code>.compaction.mods</code><ul><li>modification file generated during a compaction task</li></ul></li><li>file suffixe with <code>.meta</code><ul><li>temporary files of metadata generated during a merge</li></ul></li></ol><h2 id="system-files" tabindex="-1"><a class="header-anchor" href="#system-files" aria-hidden="true">#</a> System files</h2>',9),y=a("code",null,"base_dir",-1),x=r('<h3 id="metadata-related-files" tabindex="-1"><a class="header-anchor" href="#metadata-related-files" aria-hidden="true">#</a> MetaData Related Files</h3><blockquote><p>under directory basedir/system/schema</p></blockquote><h4 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> Meta</h4><ol><li>mlog.bin <ul><li>record the meta operation</li></ul></li><li>mtree-1.snapshot <ul><li>snapshot of metadata</li></ul></li><li>mtree-1.snapshot.tmp <ul><li>temp file, to avoid damaging the snapshot when updating it</li></ul></li></ol><h4 id="tags-attributes" tabindex="-1"><a class="header-anchor" href="#tags-attributes" aria-hidden="true">#</a> Tags&amp;Attributes</h4><ol><li>tlog.txt <ul><li>store tags and attributes of each TimeSeries</li><li>about 700 bytes for each TimeSeries</li></ul></li></ol><h3 id="other-system-files" tabindex="-1"><a class="header-anchor" href="#other-system-files" aria-hidden="true">#</a> Other System Files</h3><h4 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> Version</h4><blockquote><p>under directory basedir/system/database/{DatabaseName}/{TimePartitionId} or upgrade</p></blockquote>',9),w=a("ol",null,[a("li",{version:""},[e("Version- "),a("ul",null,[a("li",null,"version file, record the max version in fileName of a storage group")])])],-1),T=r('<h4 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade" aria-hidden="true">#</a> Upgrade</h4><blockquote><p>under directory basedir/system/upgrade</p></blockquote><ol><li>upgrade.txt <ul><li>record which files have been upgraded</li></ul></li></ol><h4 id="authority" tabindex="-1"><a class="header-anchor" href="#authority" aria-hidden="true">#</a> Authority</h4><blockquote><p>under directory basedir/system/users/<br> under directory basedir/system/roles/</p></blockquote><h4 id="compressratio" tabindex="-1"><a class="header-anchor" href="#compressratio" aria-hidden="true">#</a> CompressRatio</h4><blockquote><p>under directory basedir/system/compression_ration</p></blockquote>',7),v=a("ol",null,[a("li",{calTimes:""},[e("Ration-{compressionRatioSum}- "),a("ul",null,[a("li",null,"record compression ratio of each tsfile")])])],-1),D=a("h2",{id:"pre-write-log-files",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#pre-write-log-files","aria-hidden":"true"},"#"),e(" Pre-write Log Files")],-1),k=a("code",null,"wal_dir",-1),S=r(`<blockquote><p>under directory basedir/wal</p></blockquote><ol><li>{DatabaseName}-{TsFileName}/wal1 <ul><li>every storage group has several wal files, and every memtable has one associated wal file before it is flushed into a TsFile</li></ul></li></ol><h2 id="example-of-setting-data-storage-directory" tabindex="-1"><a class="header-anchor" href="#example-of-setting-data-storage-directory" aria-hidden="true">#</a> Example of Setting Data storage Directory</h2><p>For a clearer understanding of configuring the data storage directory, we will give an example in this section.</p><p>The data directory path included in storage directory setting are: base_dir, data_dirs, multi_dir_strategy, and wal_dir, which refer to system files, data folders, storage strategy, and pre-write log files.</p><p>An example of the configuration items are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dn_system_dir = $IOTDB_HOME/data/datanode/system
dn_data_dirs = /data1/datanode/data, /data2/datanode/data, /data3/datanode/data 
dn_multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy
dn_wal_dir= $IOTDB_HOME/data/datanode/wal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After setting the configuration, the system will:</p><ul><li>Save all system files in $IOTDB_HOME/data/datanode/system</li><li>Save TsFile in /data1/datanode/data, /data2/datanode/data, /data3/datanode/data. And the choosing strategy is <code>MaxDiskUsableSpaceFirstStrategy</code>, when data writes to the disk, the system will automatically select a directory with the largest remaining disk space to write data.</li><li>Save WAL data in $IOTDB_HOME/data/datanode/wal</li><li></li></ul>`,9);function I(N,F){const t=l("RouterLink");return d(),n("div",null,[c(`

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

`),h,f,m,p,g,a("p",null,[e("Data files store all the data that the user wrote to IoTDB, which contains TsFile and other files. TsFile storage directory can be configured with the "),b,e(" configuration item (see "),i(t,{to:"/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:o(()=>[e("file layer")]),_:1}),e(" for details). Other files can be configured through "),i(t,{to:"/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:o(()=>[e("data_dirs")]),_:1}),e(" configuration item (see "),i(t,{to:"/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:o(()=>[e("Engine Layer")]),_:1}),e(" for details).")]),a("p",null,[e("In order to support users' storage requirements such as disk space expansion better, IoTDB supports multiple file directories storage methods for TsFile storage configuration. Users can set multiple storage paths as data storage locations( see "),i(t,{to:"/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:o(()=>[e("data_dirs")]),_:1}),e(" configuration item), and you can specify or customize the directory selection strategy (see "),i(t,{to:"/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:o(()=>[e("multi_dir_strategy")]),_:1}),e(" configuration item for details).")]),_,a("p",null,[e("System files include schema files, which store metadata information of data in IoTDB. It can be configured through the "),y,e(" configuration item (see "),i(t,{to:"/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:o(()=>[e("System Layer")]),_:1}),e(" for details).")]),x,w,T,v,D,a("p",null,[e("Pre-write log files store WAL files. It can be configured through the "),k,e(" configuration item (see "),i(t,{to:"/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:o(()=>[e("System Layer")]),_:1}),e(" for details).")]),S])}const R=s(u,[["render",I],["__file","Files.html.vue"]]);export{R as default};

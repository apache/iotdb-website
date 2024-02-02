import{_ as l,r,o,c as s,a as n,d as e,e as i,b as d,f as a}from"./app-a-RiV1so.js";const c={},u=e("blockquote",null,[e("p",null,"Here are all files generated or used by IoTDB"),e("p",null,"Continuously Updating...")],-1),h=e("h1",{id:"stand-alone",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stand-alone","aria-hidden":"true"},"#"),i(" Stand-alone")],-1),m=e("h2",{id:"configuration-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration-files","aria-hidden":"true"},"#"),i(" Configuration Files")],-1),p=e("blockquote",null,[e("p",null,"under conf directory")],-1),f=e("li",null,"iotdb-datanode.properties",-1),b=e("li",null,"logback.xml",-1),g={href:"http://datanode-env.sh",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,"jmx.access",-1),y=e("li",null,"jmx.password",-1),k=e("li",null,[i("iotdb-sync-client.properties "),e("ul",null,[e("li",null,"only sync tool use it")])],-1),x=a('<blockquote><p>under directory basedir/system/schema</p></blockquote><ol><li>system.properties <ul><li>record all immutable properties, will be checked when starting IoTDB to avoid system errors</li></ul></li></ol><h2 id="state-related-files" tabindex="-1"><a class="header-anchor" href="#state-related-files" aria-hidden="true">#</a> State Related Files</h2><h3 id="metadata-related-files" tabindex="-1"><a class="header-anchor" href="#metadata-related-files" aria-hidden="true">#</a> MetaData Related Files</h3><blockquote><p>under directory basedir/system/schema</p></blockquote><h4 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> Meta</h4><ol><li>mlog.bin <ul><li>record the meta operation</li></ul></li><li>mtree-1.snapshot <ul><li>snapshot of metadata</li></ul></li><li>mtree-1.snapshot.tmp <ul><li>temp file, to avoid damaging the snapshot when updating it</li></ul></li></ol><h4 id="tags-attributes" tabindex="-1"><a class="header-anchor" href="#tags-attributes" aria-hidden="true">#</a> Tags&amp;Attributes</h4><ol><li>tlog.txt <ul><li>store tags and attributes of each TimeSeries</li><li>about 700 bytes for each TimeSeries</li></ul></li></ol><h3 id="data-related-files" tabindex="-1"><a class="header-anchor" href="#data-related-files" aria-hidden="true">#</a> Data Related Files</h3><blockquote><p>under directory basedir/data/</p></blockquote><h4 id="wal" tabindex="-1"><a class="header-anchor" href="#wal" aria-hidden="true">#</a> WAL</h4><blockquote><p>under directory basedir/wal</p></blockquote><ol><li>{StorageGroupName}-{TsFileName}/wal1 <ul><li>every database has several wal files, and every memtable has one associated wal file before it is flushed into a TsFile</li></ul></li></ol><h4 id="tsfile" tabindex="-1"><a class="header-anchor" href="#tsfile" aria-hidden="true">#</a> TsFile</h4><blockquote><p>under directory data/sequence or unsequence/{DatabaseName}/{DataRegionId}/{TimePartitionId}/</p></blockquote><ol><li>{time}-{version}-{mergeCnt}.tsfile <ul><li>normal data file</li></ul></li><li>{TsFileName}.tsfile.mod <ul><li>modification file</li><li>record delete operation</li></ul></li></ol><h4 id="tsfileresource" tabindex="-1"><a class="header-anchor" href="#tsfileresource" aria-hidden="true">#</a> TsFileResource</h4><ol><li>{TsFileName}.tsfile.resource <ul><li>descriptor and statistic file of a TsFile</li></ul></li><li>{TsFileName}.tsfile.resource.temp <ul><li>temp file</li><li>avoid damaging the tsfile.resource when updating it</li></ul></li><li>{TsFileName}.tsfile.resource.closing <ul><li>close flag file, to mark a tsfile closing so during restarts we can continue to close it or reopen it</li></ul></li></ol><h4 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> Version</h4><blockquote><p>under directory basedir/system/databases/{DatabaseName}/{DataRegionId}/{TimePartitionId} or upgrade</p></blockquote>',21),q=e("ol",null,[e("li",{version:""},[i("Version- "),e("ul",null,[e("li",null,"version file, record the max version in fileName of a database")])])],-1),v=a('<h4 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade" aria-hidden="true">#</a> Upgrade</h4><blockquote><p>under directory basedir/system/upgrade</p></blockquote><ol><li>upgrade.txt <ul><li>record which files have been upgraded</li></ul></li></ol><h4 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> Merge</h4><blockquote><p>under directory basedir/system/databases/{StorageGroup}/</p></blockquote><ol><li>merge.mods <ul><li>modification file generated during a merge</li></ul></li><li>merge.log <ul><li>record the progress of a merge</li></ul></li><li>tsfile.merge <ul><li>temporary merge result file, an involved sequence tsfile may have one during a merge</li></ul></li></ol><h4 id="authority" tabindex="-1"><a class="header-anchor" href="#authority" aria-hidden="true">#</a> Authority</h4><blockquote><p>under directory basedir/system/users/<br> under directory basedir/system/roles/</p></blockquote><h4 id="compressratio" tabindex="-1"><a class="header-anchor" href="#compressratio" aria-hidden="true">#</a> CompressRatio</h4><blockquote><p>under directory basedir/system/compression_ration</p></blockquote>',10),w=e("ol",null,[e("li",{calTimes:""},[i("Ration-{compressionRatioSum}- "),e("ul",null,[e("li",null,"record compression ratio of each tsfile")])])],-1);function T(S,N){const t=r("ExternalLinkIcon");return o(),s("div",null,[n(`

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

`),u,h,m,p,e("ol",null,[f,b,e("li",null,[e("a",g,[i("datanode-env.sh"),d(t)])]),_,y,k]),x,q,v,w])}const I=l(c,[["render",T],["__file","ServerFileList.html.vue"]]);export{I as default};

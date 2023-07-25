import{_ as o,r as t,o as s,c as r,a as n,d as e,e as i,b as d,f as l}from"./app-d4806199.js";const h={},c=e("blockquote",null,[e("p",null,"下面是 IoTDB 生成或使用的文件"),e("p",null,"持续更新中。..")],-1),u=e("h1",{id:"单机模式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#单机模式","aria-hidden":"true"},"#"),i(" 单机模式")],-1),b=e("h2",{id:"配置文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置文件","aria-hidden":"true"},"#"),i(" 配置文件")],-1),m=e("blockquote",null,[e("p",null,"conf 目录下")],-1),p=e("li",null,"iotdb-datanode.properties",-1),f=e("li",null,"logback.xml",-1),_={href:"http://datanode-env.sh",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,"jmx.access",-1),k=e("li",null,"jmx.password",-1),x=e("li",null,[i("iotdb-sync-client.properties "),e("ul",null,[e("li",null,"只有 Sync 工具会使用")])],-1),q=l('<blockquote><p>在 basedir/system/schema 目录下</p></blockquote><ol><li>system.properties <ul><li>记录的是所有不能变动的配置，启动时会检查，防止系统错误</li></ul></li></ol><h2 id="状态相关的文件" tabindex="-1"><a class="header-anchor" href="#状态相关的文件" aria-hidden="true">#</a> 状态相关的文件</h2><h3 id="元数据相关文件" tabindex="-1"><a class="header-anchor" href="#元数据相关文件" aria-hidden="true">#</a> 元数据相关文件</h3><blockquote><p>在 basedir/system/schema 目录下</p></blockquote><h4 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据" aria-hidden="true">#</a> 元数据</h4><ol><li>mlog.bin <ul><li>记录的是元数据操作</li></ul></li><li>mtree-1.snapshot <ul><li>元数据快照</li></ul></li><li>mtree-1.snapshot.tmp <ul><li>临时文件，防止快照更新时，损坏旧快照文件</li></ul></li></ol><h4 id="标签和属性" tabindex="-1"><a class="header-anchor" href="#标签和属性" aria-hidden="true">#</a> 标签和属性</h4><ol><li>tlog.txt <ul><li>存储每个时序的标签和属性</li><li>默认情况下每个时序 700 字节</li></ul></li></ol><h3 id="数据相关文件" tabindex="-1"><a class="header-anchor" href="#数据相关文件" aria-hidden="true">#</a> 数据相关文件</h3><blockquote><p>在 basedir/data/目录下</p></blockquote><h4 id="wal" tabindex="-1"><a class="header-anchor" href="#wal" aria-hidden="true">#</a> WAL</h4><blockquote><p>在 basedir/wal 目录下</p></blockquote><ol><li>{StroageName}-{TsFileName}/wal1 <ul><li>每个 memtable 会对应一个 wal 文件</li></ul></li></ol><h4 id="tsfile" tabindex="-1"><a class="header-anchor" href="#tsfile" aria-hidden="true">#</a> TsFile</h4><blockquote><p>在 basedir/data/sequence or unsequence/{DatabaseName}/{DataRegionId}/{TimePartitionId}/目录下</p></blockquote><ol><li>{time}-{version}-{mergeCnt}.tsfile <ul><li>数据文件</li></ul></li><li>{TsFileName}.tsfile.mod <ul><li>更新文件，主要记录删除操作</li></ul></li></ol><h4 id="tsfileresource" tabindex="-1"><a class="header-anchor" href="#tsfileresource" aria-hidden="true">#</a> TsFileResource</h4><ol><li>{TsFileName}.tsfile.resource <ul><li>TsFile 的概要与索引文件</li></ul></li><li>{TsFileName}.tsfile.resource.temp <ul><li>临时文件，用于避免更新 tsfile.resource 时损坏 tsfile.resource</li></ul></li><li>{TsFileName}.tsfile.resource.closing <ul><li>关闭标记文件，用于标记 TsFile 处于关闭状态，重启后可以据此选择是关闭或继续写入该文件</li></ul></li></ol><h4 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> Version</h4><blockquote><p>在 basedir/system/databases/{DatabaseName}/{DataRegionId}/{TimePartitionId} or upgrade 目录下</p></blockquote>',21),y=e("ol",null,[e("li",{version:""},[i("Version- "),e("ul",null,[e("li",null,"版本号文件，使用文件名来记录当前最大的版本号")])])],-1),N=l('<h4 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade" aria-hidden="true">#</a> Upgrade</h4><blockquote><p>在 basedir/system/upgrade 目录下</p></blockquote><ol><li>upgrade.txt <ul><li>记录升级进度</li></ul></li></ol><h4 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> Merge</h4><blockquote><p>在 basedir/system/databases/{DatabaseName}/目录下</p></blockquote><ol><li>merge.mods <ul><li>记录合并过程中发生的删除等操作</li></ul></li><li>merge.log <ul><li>记录合并进展</li></ul></li><li>tsfile.merge <ul><li>临时文件，每个顺序文件在合并时会产生一个对应的 merge 文件，用于存放临时数据</li></ul></li></ol><h4 id="authority" tabindex="-1"><a class="header-anchor" href="#authority" aria-hidden="true">#</a> Authority</h4><blockquote><p>在 basedir/system/users/目录下是用户信息<br> 在 basedir/system/roles/目录下是角色信息</p></blockquote><h4 id="compressratio" tabindex="-1"><a class="header-anchor" href="#compressratio" aria-hidden="true">#</a> CompressRatio</h4><blockquote><p>在 basedir/system/compression_ration 目录下</p></blockquote>',10),T=e("ol",null,[e("li",{calTimes:""},[i("Ration-{compressionRatioSum}- "),e("ul",null,[e("li",null,"记录每个文件的压缩率")])])],-1);function S(w,I){const a=t("ExternalLinkIcon");return s(),r("div",null,[n(`

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

`),c,u,b,m,e("ol",null,[p,f,e("li",null,[e("a",_,[i("datanode-env.sh"),d(a)])]),g,k,x]),q,y,N,T])}const L=o(h,[["render",S],["__file","ServerFileList.html.vue"]]);export{L as default};

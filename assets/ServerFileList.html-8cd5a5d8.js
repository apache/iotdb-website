import{_ as o,r as t,o as r,c as s,a as n,d as e,e as i,b as d,f as l}from"./app-342a215c.js";const h={},u=l('<blockquote><p>下面是 IoTDB 生成或使用的文件</p><p>持续更新中。..</p></blockquote><h2 id="文件列表" tabindex="-1"><a class="header-anchor" href="#文件列表" aria-hidden="true">#</a> 文件列表</h2><h3 id="单机模式" tabindex="-1"><a class="header-anchor" href="#单机模式" aria-hidden="true">#</a> 单机模式</h3><h4 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h4><blockquote><p>conf 目录下</p></blockquote>',5),c=e("li",null,"iotdb-engine.properties",-1),p=e("li",null,"logback.xml",-1),m={href:"http://iotdb-env.sh",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"jmx.access",-1),f=e("li",null,"jmx.password",-1),g=e("li",null,[i("iotdb-sync-client.properties "),e("ul",null,[e("li",null,"只有 Sync 工具会使用")])],-1),_=l('<blockquote><p>在 basedir/system/schema 目录下</p></blockquote><ol><li>system.properties <ul><li>记录的是所有不能变动的配置，启动时会检查，防止系统错误</li></ul></li></ol><h4 id="状态相关的文件" tabindex="-1"><a class="header-anchor" href="#状态相关的文件" aria-hidden="true">#</a> 状态相关的文件</h4><h5 id="元数据相关文件" tabindex="-1"><a class="header-anchor" href="#元数据相关文件" aria-hidden="true">#</a> 元数据相关文件</h5><blockquote><p>在 basedir/system/schema 目录下</p></blockquote><h6 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据" aria-hidden="true">#</a> 元数据</h6><ol><li>mlog.bin <ul><li>记录的是元数据操作</li></ul></li><li>mtree-1.snapshot <ul><li>元数据快照</li></ul></li><li>mtree-1.snapshot.tmp <ul><li>临时文件，防止快照更新时，损坏旧快照文件</li></ul></li></ol><h6 id="标签和属性" tabindex="-1"><a class="header-anchor" href="#标签和属性" aria-hidden="true">#</a> 标签和属性</h6><ol><li>tlog.txt <ul><li>存储每个时序的标签和属性</li><li>默认情况下每个时序 700 字节</li></ul></li></ol><h5 id="数据相关文件" tabindex="-1"><a class="header-anchor" href="#数据相关文件" aria-hidden="true">#</a> 数据相关文件</h5><blockquote><p>在 basedir/data/目录下</p></blockquote><h6 id="wal" tabindex="-1"><a class="header-anchor" href="#wal" aria-hidden="true">#</a> WAL</h6><blockquote><p>在 basedir/wal 目录下</p></blockquote><ol><li>{StroageName}-{TsFileName}/wal1 <ul><li>每个 memtable 会对应一个 wal 文件</li></ul></li></ol><h6 id="tsfile" tabindex="-1"><a class="header-anchor" href="#tsfile" aria-hidden="true">#</a> TsFile</h6><blockquote><p>在 basedir/data/sequence or unsequence/{StorageGroupName}/{TimePartitionId}/目录下</p></blockquote><ol><li>{time}-{version}-{mergeCnt}.tsfile <ul><li>数据文件</li></ul></li><li>{TsFileName}.tsfile.mod <ul><li>更新文件，主要记录删除操作</li></ul></li></ol><h6 id="tsfileresource" tabindex="-1"><a class="header-anchor" href="#tsfileresource" aria-hidden="true">#</a> TsFileResource</h6><ol><li>{TsFileName}.tsfile.resource <ul><li>TsFile 的概要与索引文件</li></ul></li><li>{TsFileName}.tsfile.resource.temp <ul><li>临时文件，用于避免更新 tsfile.resource 时损坏 tsfile.resource</li></ul></li><li>{TsFileName}.tsfile.resource.closing <ul><li>关闭标记文件，用于标记 TsFile 处于关闭状态，重启后可以据此选择是关闭或继续写入该文件</li></ul></li></ol><h6 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> Version</h6><blockquote><p>在 basedir/system/storage_groups/{StorageGroupName}/{TimePartitionId} or upgrade 目录下</p></blockquote>',21),k=e("ol",null,[e("li",{version:""},[i("Version- "),e("ul",null,[e("li",null,"版本号文件，使用文件名来记录当前最大的版本号")])])],-1),x=l('<h6 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade" aria-hidden="true">#</a> Upgrade</h6><blockquote><p>在 basedir/system/upgrade 目录下</p></blockquote><ol><li>upgrade.txt <ul><li>记录升级进度</li></ul></li></ol><h6 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> Merge</h6><blockquote><p>在 basedir/system/storage_groups/{StorageGroup}/目录下</p></blockquote><ol><li>merge.mods <ul><li>记录合并过程中发生的删除等操作</li></ul></li><li>merge.log <ul><li>记录合并进展</li></ul></li><li>tsfile.merge <ul><li>临时文件，每个顺序文件在合并时会产生一个对应的 merge 文件，用于存放临时数据</li></ul></li></ol><h6 id="authority" tabindex="-1"><a class="header-anchor" href="#authority" aria-hidden="true">#</a> Authority</h6><blockquote><p>在 basedir/system/users/目录下是用户信息<br> 在 basedir/system/roles/目录下是角色信息</p></blockquote><h6 id="compressratio" tabindex="-1"><a class="header-anchor" href="#compressratio" aria-hidden="true">#</a> CompressRatio</h6><blockquote><p>在 basedir/system/compression_ration 目录下</p></blockquote>',10),q=e("ol",null,[e("li",{calTimes:""},[i("Ration-{compressionRatioSum}- "),e("ul",null,[e("li",null,"记录每个文件的压缩率")])])],-1),T=l('<hr><h3 id="集群模式" tabindex="-1"><a class="header-anchor" href="#集群模式" aria-hidden="true">#</a> 集群模式</h3><blockquote><p>注意：下面文件是相对单机新增的文件列表</p></blockquote><h4 id="配置文件-1" tabindex="-1"><a class="header-anchor" href="#配置文件-1" aria-hidden="true">#</a> 配置文件</h4><ol><li>iotdb-cluster.properties</li></ol><h4 id="状态相关文件" tabindex="-1"><a class="header-anchor" href="#状态相关文件" aria-hidden="true">#</a> 状态相关文件</h4><blockquote><p>在 basedir 目录下</p></blockquote><ol><li>node_identifier <ul><li>本地节点在集群中的唯一标识</li></ul></li><li>partitions <ul><li>分区表文件，记录数据分布信息</li></ul></li><li>{time}_{random}.task <ul><li>pullSnapshotTask 文件，记录的是 slot 和 owner，当一个节点加入集群时，会创建这个文件来跟踪数据拉取情况</li><li>在 basedir/raft/{nodeIdentifier}/snapshot_task/目录下</li></ul></li></ol><h4 id="raft-相关文件" tabindex="-1"><a class="header-anchor" href="#raft-相关文件" aria-hidden="true">#</a> Raft 相关文件</h4><blockquote><p>在 basedir/system/raftLog/{nodeIdentifier}/目录下</p></blockquote><h5 id="raft-log" tabindex="-1"><a class="header-anchor" href="#raft-log" aria-hidden="true">#</a> Raft Log</h5>',11),N=e("ol",null,[e("li",{version:""},[i(".data- "),e("ul",null,[e("li",null,"raft committed log, 默认只保留最新的 1000 条日志")])])],-1),S=l('<h5 id="raft-meta" tabindex="-1"><a class="header-anchor" href="#raft-meta" aria-hidden="true">#</a> Raft Meta</h5><ol><li>logMeta <ul><li>raft 一些相关元数据，例如选举相关信息和日志提交信息 <ul><li>hardState: voteFor, term</li><li>Meta: commitLogTerm, commitLogIndex, lastLogTerm, lastLogIndex</li><li>...</li></ul></li></ul></li><li>logMeta.tmp <ul><li>临时文件，用于更新 logMeta 时防止损坏旧的 logMeta 文件</li></ul></li></ol><h5 id="raft-catch-up" tabindex="-1"><a class="header-anchor" href="#raft-catch-up" aria-hidden="true">#</a> Raft Catch Up</h5><blockquote><p>在 basedir/remote/{nodeIdentifier}/{storageGroupName}/{partitionNum}/目录下</p></blockquote><ol><li>{fileName}.tsfile <ul><li>远程 TsFile，拉取完毕会 load 进对应的存储组数据目录下</li></ul></li><li>{fileName}.tsfile.mod <ul><li>远程更新文件 TsFile.mod，拉取完毕会 load 进对应的存储组数据目录下</li></ul></li></ol>',5);function y(L,I){const a=t("ExternalLinkIcon");return r(),s("div",null,[n(`

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

`),u,e("ol",null,[c,p,e("li",null,[e("a",m,[i("iotdb-env.sh"),d(a)])]),b,f,g]),_,k,x,q,T,N,S])}const F=o(h,[["render",y],["__file","ServerFileList.html.vue"]]);export{F as default};

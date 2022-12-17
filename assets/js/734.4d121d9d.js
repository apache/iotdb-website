(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{1138:function(e,s,a){"use strict";a.r(s);var t=a(19),r=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("blockquote",[s("p",[e._v("下面是 IoTDB 生成或使用的文件")]),e._v(" "),s("p",[e._v("持续更新中。..")])]),e._v(" "),s("h1",{attrs:{id:"单机模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单机模式"}},[e._v("#")]),e._v(" 单机模式")]),e._v(" "),s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[e._v("#")]),e._v(" 配置文件")]),e._v(" "),s("blockquote",[s("p",[e._v("conf 目录下")])]),e._v(" "),s("ol",[s("li",[e._v("iotdb-datanode.properties")]),e._v(" "),s("li",[e._v("logback.xml")]),e._v(" "),s("li",[e._v("datanode-env.sh")]),e._v(" "),s("li",[e._v("jmx.access")]),e._v(" "),s("li",[e._v("jmx.password")]),e._v(" "),s("li",[e._v("iotdb-sync-client.properties\n"),s("ul",[s("li",[e._v("只有 Sync 工具会使用")])])])]),e._v(" "),s("blockquote",[s("p",[e._v("在 basedir/system/schema 目录下")])]),e._v(" "),s("ol",[s("li",[e._v("system.properties\n"),s("ul",[s("li",[e._v("记录的是所有不能变动的配置，启动时会检查，防止系统错误")])])])]),e._v(" "),s("h2",{attrs:{id:"状态相关的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态相关的文件"}},[e._v("#")]),e._v(" 状态相关的文件")]),e._v(" "),s("h3",{attrs:{id:"元数据相关文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元数据相关文件"}},[e._v("#")]),e._v(" 元数据相关文件")]),e._v(" "),s("blockquote",[s("p",[e._v("在 basedir/system/schema 目录下")])]),e._v(" "),s("h4",{attrs:{id:"元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元数据"}},[e._v("#")]),e._v(" 元数据")]),e._v(" "),s("ol",[s("li",[e._v("mlog.bin\n"),s("ul",[s("li",[e._v("记录的是元数据操作")])])]),e._v(" "),s("li",[e._v("mtree-1.snapshot\n"),s("ul",[s("li",[e._v("元数据快照")])])]),e._v(" "),s("li",[e._v("mtree-1.snapshot.tmp\n"),s("ul",[s("li",[e._v("临时文件，防止快照更新时，损坏旧快照文件")])])])]),e._v(" "),s("h4",{attrs:{id:"标签和属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签和属性"}},[e._v("#")]),e._v(" 标签和属性")]),e._v(" "),s("ol",[s("li",[e._v("tlog.txt\n"),s("ul",[s("li",[e._v("存储每个时序的标签和属性")]),e._v(" "),s("li",[e._v("默认情况下每个时序 700 字节")])])])]),e._v(" "),s("h3",{attrs:{id:"数据相关文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据相关文件"}},[e._v("#")]),e._v(" 数据相关文件")]),e._v(" "),s("blockquote",[s("p",[e._v("在 basedir/data/目录下")])]),e._v(" "),s("h4",{attrs:{id:"wal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wal"}},[e._v("#")]),e._v(" WAL")]),e._v(" "),s("blockquote",[s("p",[e._v("在 basedir/wal 目录下")])]),e._v(" "),s("ol",[s("li",[e._v("{StroageName}-{TsFileName}/wal1\n"),s("ul",[s("li",[e._v("每个 memtable 会对应一个 wal 文件")])])])]),e._v(" "),s("h4",{attrs:{id:"tsfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsfile"}},[e._v("#")]),e._v(" TsFile")]),e._v(" "),s("blockquote",[s("p",[e._v("在 basedir/data/sequence or unsequence/{DatabaseName}/{DataRegionId}/{TimePartitionId}/目录下")])]),e._v(" "),s("ol",[s("li",[e._v("{time}-{version}-{mergeCnt}.tsfile\n"),s("ul",[s("li",[e._v("数据文件")])])]),e._v(" "),s("li",[e._v("{TsFileName}.tsfile.mod\n"),s("ul",[s("li",[e._v("更新文件，主要记录删除操作")])])])]),e._v(" "),s("h4",{attrs:{id:"tsfileresource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsfileresource"}},[e._v("#")]),e._v(" TsFileResource")]),e._v(" "),s("ol",[s("li",[e._v("{TsFileName}.tsfile.resource\n"),s("ul",[s("li",[e._v("TsFile 的概要与索引文件")])])]),e._v(" "),s("li",[e._v("{TsFileName}.tsfile.resource.temp\n"),s("ul",[s("li",[e._v("临时文件，用于避免更新 tsfile.resource 时损坏 tsfile.resource")])])]),e._v(" "),s("li",[e._v("{TsFileName}.tsfile.resource.closing\n"),s("ul",[s("li",[e._v("关闭标记文件，用于标记 TsFile 处于关闭状态，重启后可以据此选择是关闭或继续写入该文件")])])])]),e._v(" "),s("h4",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" Version")]),e._v(" "),s("blockquote",[s("p",[e._v("在 basedir/system/databases/{DatabaseName}/{DataRegionId}/{TimePartitionId} or upgrade 目录下")])]),e._v(" "),s("ol",[s("li",[e._v("Version-{version}\n"),s("ul",[s("li",[e._v("版本号文件，使用文件名来记录当前最大的版本号")])])])]),e._v(" "),s("h4",{attrs:{id:"upgrade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[e._v("#")]),e._v(" Upgrade")]),e._v(" "),s("blockquote",[s("p",[e._v("在 basedir/system/upgrade 目录下")])]),e._v(" "),s("ol",[s("li",[e._v("upgrade.txt\n"),s("ul",[s("li",[e._v("记录升级进度")])])])]),e._v(" "),s("h4",{attrs:{id:"merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[e._v("#")]),e._v(" Merge")]),e._v(" "),s("blockquote",[s("p",[e._v("在 basedir/system/databases/{DatabaseName}/目录下")])]),e._v(" "),s("ol",[s("li",[e._v("merge.mods\n"),s("ul",[s("li",[e._v("记录合并过程中发生的删除等操作")])])]),e._v(" "),s("li",[e._v("merge.log\n"),s("ul",[s("li",[e._v("记录合并进展")])])]),e._v(" "),s("li",[e._v("tsfile.merge\n"),s("ul",[s("li",[e._v("临时文件，每个顺序文件在合并时会产生一个对应的 merge 文件，用于存放临时数据")])])])]),e._v(" "),s("h4",{attrs:{id:"authority"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authority"}},[e._v("#")]),e._v(" Authority")]),e._v(" "),s("blockquote",[s("p",[e._v("在 basedir/system/users/目录下是用户信息\n在 basedir/system/roles/目录下是角色信息")])]),e._v(" "),s("h4",{attrs:{id:"compressratio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compressratio"}},[e._v("#")]),e._v(" CompressRatio")]),e._v(" "),s("blockquote",[s("p",[e._v("在 basedir/system/compression_ration 目录下")])]),e._v(" "),s("ol",[s("li",[e._v("Ration-{compressionRatioSum}-{calTimes}\n"),s("ul",[s("li",[e._v("记录每个文件的压缩率")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
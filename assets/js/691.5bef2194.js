(window.webpackJsonp=window.webpackJsonp||[]).push([[691],{1251:function(v,_,e){"use strict";e.r(_);var t=e(69),l=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"元数据管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元数据管理"}},[v._v("#")]),v._v(" 元数据管理")]),v._v(" "),e("p",[v._v("IoTDB 的元数据统一由 MManger 管理，包括以下几个部分：")]),v._v(" "),e("ul",[e("li",[v._v("元数据树")]),v._v(" "),e("li",[v._v("元数据日志管理")]),v._v(" "),e("li",[v._v("标签/属性管理")])]),v._v(" "),e("h2",{attrs:{id:"mmanager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mmanager"}},[v._v("#")]),v._v(" MManager")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("维护 tag 倒排索引："),e("code",[v._v("Map<String, Map<String, Set<LeafMNode>>> tagIndex")])]),v._v(" "),e("blockquote",[e("p",[v._v("tag key -> tag value -> timeseries LeafMNode")])])])]),v._v(" "),e("p",[v._v("该类初始化时，会replay mlog中的内容，将元数据信息还原出来，元数据操作日志主要有六种类型，每个操作前都会先获得整个元数据的写锁（存储在MManager中），操作完后释放：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("创建时间序列")]),v._v(" "),e("ul",[e("li",[v._v("检查存储组是否存在，如果不存在且开启自动创建，则创建存储组")]),v._v(" "),e("li",[v._v("在 MTree 中创建时间序列，可带扩展名")]),v._v(" "),e("li",[v._v("如果开启动态参数，检查内存是否满足")]),v._v(" "),e("li",[v._v("如果非重启（需要记录日志）\n"),e("ul",[e("li",[v._v("拿到标签文件当前 offset")]),v._v(" "),e("li",[v._v("将时间序列信息记录到 mlog 中")]),v._v(" "),e("li",[v._v("将 tags/attributes 持久化到tlog中")])])]),v._v(" "),e("li",[v._v("如果是重启（需要恢复内存结构）\n"),e("ul",[e("li",[v._v("根据 mlog 中的 offset 读取标签文件，重建 tagIndex 索引")])])])])]),v._v(" "),e("li",[e("p",[v._v("删除时间序列")]),v._v(" "),e("ul",[e("li",[v._v("获得所有满足前缀的时间序列的fullPath")]),v._v(" "),e("li",[v._v("遍历上一步获得的所有时间序列，并逐个在 MTree 中删除\n"),e("ul",[e("li",[v._v("删除的时候，需要首先获得该时间序列所在device的InternalMNode的写锁")]),v._v(" "),e("li",[v._v("若获取成功\n"),e("ul",[e("li",[v._v("删除MTree中对应的LeafMNode")]),v._v(" "),e("li",[v._v("根据LeafMNode中的offset，读取标签文件，更新 tagIndex 索引")]),v._v(" "),e("li",[v._v("若发现某一个存储组为空，则记录下该空的存储组名")])])]),v._v(" "),e("li",[v._v("若获取失败\n"),e("ul",[e("li",[v._v("返回此未删除成功的时间序列")])])])])]),v._v(" "),e("li",[v._v("如果非重启（需要记录日志）\n*  删除记录下的空的存储组\n"),e("ul",[e("li",[v._v("将所删除的时间序列信息记录到 mlog 中")]),v._v(" "),e("li",[v._v("目前并不会删除 tlog 中关于此时间序列的标签/属性信息。")])])])])]),v._v(" "),e("li",[e("p",[v._v("设置存储组")]),v._v(" "),e("ul",[e("li",[v._v("在 MTree 中创建存储组")]),v._v(" "),e("li",[v._v("如果开启动态参数，检查内存是否满足")]),v._v(" "),e("li",[v._v("如果非重启，将log持久化至mlog中")])])]),v._v(" "),e("li",[e("p",[v._v("删除存储组")]),v._v(" "),e("ul",[e("li",[v._v("在 MTree 中删除对应的存储组，并返回该存储组下的所有时间序列的LeafMNode\n"),e("ul",[e("li",[v._v("删除的时候，需要首先获得该存储组的InternalMNode的写锁")]),v._v(" "),e("li",[v._v("若获取成功\n"),e("ul",[e("li",[v._v("删除MTree中对应的InternalMNode")])])]),v._v(" "),e("li",[v._v("若获取失败\n"),e("ul",[e("li",[v._v("返回此未删除成功的存储组名")])])])])]),v._v(" "),e("li",[v._v("遍历上一步返回的LeafMNode，根据LeafMNode中的offset，读取标签文件，更新tagIndex 索引")]),v._v(" "),e("li",[v._v("如果非重启，将log持久化至mlog中")])])]),v._v(" "),e("li",[e("p",[v._v("设置TTL")]),v._v(" "),e("ul",[e("li",[v._v("获得对应存储组的StorageGroupMNode，修改其TTL属性")]),v._v(" "),e("li",[v._v("如果非重启，将log持久化至mlog中")])])]),v._v(" "),e("li",[e("p",[v._v("改变时间序列标签信息offset")]),v._v(" "),e("ul",[e("li",[v._v("修改时间序列对应的LeafMNode中的offset")])])]),v._v(" "),e("li",[e("p",[v._v("改变时间序列的别名")]),v._v(" "),e("ul",[e("li",[v._v("更新LeafMNode中的alias属性，并更新其父节点中的aliasMap属性")])])])]),v._v(" "),e("p",[v._v("除了这七种需要记录日志的操作外，还有六种对时间序列标签/属性信息进行更新的操作，同样的，每个操作前都会先获得整个元数据的写锁（存储在MManager中），操作完后释放：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("重命名标签或属性")]),v._v(" "),e("ul",[e("li",[v._v("获得该时间序列的LeafMNode")]),v._v(" "),e("li",[v._v("通过 LeafMNode 中的 offset 读取标签和属性信息")]),v._v(" "),e("li",[v._v("若新键已经存在，则抛异常")]),v._v(" "),e("li",[v._v("若新键不存在\n"),e("ul",[e("li",[v._v("若旧键不存在，则抛异常")]),v._v(" "),e("li",[v._v("若旧键存在，用新键替换旧键，并持久化至tlog中")]),v._v(" "),e("li",[v._v("如果旧键是标签，则还需更新 tagIndex")])])])])]),v._v(" "),e("li",[e("p",[v._v("重新设置标签或属性的值")]),v._v(" "),e("ul",[e("li",[v._v("获得该时间序列的LeafMNode")]),v._v(" "),e("li",[v._v("通过 LeafMNode 中的 offset 读取标签和属性信息")]),v._v(" "),e("li",[v._v("若需要重新设置的标签或属性的键值不存在，则抛异常")]),v._v(" "),e("li",[v._v("若需要重新设置的是标签，则还需更新 tagIndex")]),v._v(" "),e("li",[v._v("将更新后的标签和属性信息持久化至tlog中")])])]),v._v(" "),e("li",[e("p",[v._v("删除已经存在的标签或属性")]),v._v(" "),e("ul",[e("li",[v._v("获得该时间序列的LeafMNode")]),v._v(" "),e("li",[v._v("通过 LeafMNode 中的 offset 读取标签和属性信息")]),v._v(" "),e("li",[v._v("遍历需要删除的标签或属性，若不存在，则跳过")]),v._v(" "),e("li",[v._v("若需要删除的是标签，则还需更新 tagIndex")]),v._v(" "),e("li",[v._v("将更新后的标签和属性信息持久化至tlog中")])])]),v._v(" "),e("li",[e("p",[v._v("添加新的标签")]),v._v(" "),e("ul",[e("li",[v._v("获得该时间序列的LeafMNode")]),v._v(" "),e("li",[v._v("通过 LeafMNode 中的 offset 读取标签信息")]),v._v(" "),e("li",[v._v("遍历需要添加的标签，若已存在，则抛异常")]),v._v(" "),e("li",[v._v("将更新后的标签信息持久化至tlog中")]),v._v(" "),e("li",[v._v("根据添加的标签信息，更新 tagIndex")])])]),v._v(" "),e("li",[e("p",[v._v("添加新的属性")]),v._v(" "),e("ul",[e("li",[v._v("获得该时间序列的LeafMNode")]),v._v(" "),e("li",[v._v("通过 LeafMNode 中的 offset 读取属性信息")]),v._v(" "),e("li",[v._v("遍历需要添加的属性，若已存在，则抛异常")]),v._v(" "),e("li",[v._v("将更新后的属性信息持久化至tlog中")])])]),v._v(" "),e("li",[e("p",[v._v("更新插入标签和属性")]),v._v(" "),e("ul",[e("li",[v._v("获得该时间序列的LeafMNode")]),v._v(" "),e("li",[v._v("更新LeafMNode中的alias属性，并更新其父节点中的aliasMap属性")]),v._v(" "),e("li",[v._v("讲更新后的别名持久化至mlog中")]),v._v(" "),e("li",[v._v("通过 LeafMNode 中的 offset 读取标签和属性信息")]),v._v(" "),e("li",[v._v("遍历需要更新插入的标签和属性，若已存在，则用新值更新；若不存在，则添加")]),v._v(" "),e("li",[v._v("将更新后的属性信息持久化至tlog中")]),v._v(" "),e("li",[v._v("如果包含更新插入中包含标签信息，还需更新 tagIndex")])])])]),v._v(" "),e("h2",{attrs:{id:"元数据树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元数据树"}},[v._v("#")]),v._v(" 元数据树")]),v._v(" "),e("ul",[e("li",[v._v("org.apache.iotdb.db.metadata.MTree")])]),v._v(" "),e("p",[v._v("树中包括三种节点：StorageGroupMNode、InternalMNode（非叶子节点）、LeafMNode（叶子节点），他们都是MNode的子类。")]),v._v(" "),e("p",[v._v("每个InternalMNode中都有一个读写锁，查询元数据信息时，需要获得路径上每一个InternalMNode的读锁，修改元数据信息时，如果修改的是LeafMNode，需要获得其父节点的写锁，若修改的是InternalMNode，则只需获得本身的写锁。若该InternalMNode位于Device层，则还包含了一个"),e("code",[v._v("Map<String, MNode> aliasChildren")]),v._v("，用于存储别名信息。")]),v._v(" "),e("p",[v._v("StorageGroupMNode 继承 InternalMNode，包含存储组的元数据信息，如 TTL。")]),v._v(" "),e("p",[v._v("LeafMNode 中包含了对应时间序列的Schema信息，其别名(若没有别名，则为null)以及该时间序列的标签/属性信息在tlog文件中的offset(若没有标签/属性，则为-1)")]),v._v(" "),e("p",[v._v("示例：")]),v._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/73625246-fc3e8200-467e-11ea-8815-67b9c4ab716e.png"}}),v._v(" "),e("p",[v._v("IoTDB 的元数据管理采用目录树的形式，倒数第二层为设备层，最后一层为传感器层。")]),v._v(" "),e("p",[v._v("默认存在根节点 root，创建存储组、删除存储组、创建时间序列、删除时间序列均为对树的节点的操作。")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("创建存储组（root.a.b.sg）")]),v._v(" "),e("ul",[e("li",[v._v("为当前存储组创建中间节点（a.b）")]),v._v(" "),e("li",[v._v("确保此路径前缀不存在其他存储组（不允许存储组嵌套）")]),v._v(" "),e("li",[v._v("检查确保存储组不存在")]),v._v(" "),e("li",[v._v("创建存储组节点")])])]),v._v(" "),e("li",[e("p",[v._v("创建时间序列（root.a.b.sg.d.s1）")]),v._v(" "),e("ul",[e("li",[v._v("遍历路径，确保存储组已经创建")]),v._v(" "),e("li",[v._v("找到倒数第二层节点，检查叶子节点是否存在")]),v._v(" "),e("li",[v._v("创建叶子节点，叶子节点内存储别名")]),v._v(" "),e("li",[v._v("如果有别名，则在设备节点多创建一个链接指向叶子节点")])])]),v._v(" "),e("li",[e("p",[v._v("删除存储组和删除时间序列的操作相似，即将存储组或时间序列节点在其父节点中删除，时间序列节点还需要将其别名在父节点中删除；若在删除过程中，发现某一节点没有任何子节点了，还需要递归删除此节点。")])])]),v._v(" "),e("h2",{attrs:{id:"mtree-检查点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mtree-检查点"}},[v._v("#")]),v._v(" MTree 检查点")]),v._v(" "),e("h3",{attrs:{id:"创建条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建条件"}},[v._v("#")]),v._v(" 创建条件")]),v._v(" "),e("p",[v._v("为了加快 IoTDB 重启速度，我们为 MTree 设置了检查点，这样避免了在重启时按行读取并复现 "),e("code",[v._v("mlog.txt")]),v._v(" 中的信息。创建 MTree 的快照有两种方式：")]),v._v(" "),e("ol",[e("li",[v._v("后台线程检查自动创建：每隔10分钟，后台线程检查 MTree 的最后修改时间，需要同时满足")])]),v._v(" "),e("ul",[e("li",[v._v("用户超过1小时（可配置）没修改 MTree，即"),e("code",[v._v("mlog.txt")]),v._v(" 文件超过1小时没有修改")]),v._v(" "),e("li",[e("code",[v._v("mlog.txt")]),v._v(" 中积累了100000行日志（可配置）")])]),v._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[v._v("手动创建：使用"),e("code",[v._v("create snapshot for schema")]),v._v("命令手动触发创建 MTree 快照")])]),v._v(" "),e("h3",{attrs:{id:"创建过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建过程"}},[v._v("#")]),v._v(" 创建过程")]),v._v(" "),e("p",[v._v("方法见"),e("code",[v._v("MManager.createMTreeSnapshot()")]),v._v("：")]),v._v(" "),e("ol",[e("li",[v._v("首先给 MTree 加读锁，防止创建快照过程中对其进行修改")]),v._v(" "),e("li",[v._v("将 MTree 序列化进临时 snapshot 文件（"),e("code",[v._v("mtree.snapshot.tmp")]),v._v("）。MTree 的序列化采用“先子节点、后父节点”的深度优先序列化方式，将节点的信息按照类型转化成对应格式的字符串，便于反序列化时读取和组装MTree。")])]),v._v(" "),e("ul",[e("li",[v._v("普通节点：0,名字,子节点个数")]),v._v(" "),e("li",[v._v("存储组节点：1,名字,TTL,子节点个数")]),v._v(" "),e("li",[v._v("传感器节点：2,名字,别名,数据类型,编码,压缩方式,属性,偏移量,子节点个数")])]),v._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[v._v("序列化结束后，将临时文件重命名为正式文件（"),e("code",[v._v("mtree.snapshot")]),v._v("），防止在序列化过程中出现服务器人为或意外关闭，导致序列化失败的情况。")]),v._v(" "),e("li",[v._v("调用"),e("code",[v._v("MLogWriter.clear()")]),v._v("方法，清空 "),e("code",[v._v("mlog.txt")]),v._v("：")])]),v._v(" "),e("ul",[e("li",[v._v("关闭 BufferedWriter，删除"),e("code",[v._v("mlog.txt")]),v._v("文件；")]),v._v(" "),e("li",[v._v("新建一个 BufferedWriter；")]),v._v(" "),e("li",[v._v("将 "),e("code",[v._v("lineNumber")]),v._v(" 置为0，"),e("code",[v._v("lineNumber")]),v._v(" 记录"),e("code",[v._v("mlog.txt")]),v._v("的行数，用于在后台检查时判断其是否超过用户配置的阈值而触发自动创建快照。")])]),v._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[v._v("释放 MTree 读锁")])]),v._v(" "),e("h3",{attrs:{id:"恢复过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#恢复过程"}},[v._v("#")]),v._v(" 恢复过程")]),v._v(" "),e("p",[v._v("方法见"),e("code",[v._v("MManager.initFromLog()")]),v._v("：")]),v._v(" "),e("ol",[e("li",[v._v("检查临时文件"),e("code",[v._v("mtree.snapshot.tmp")]),v._v("是否存在，如果存在证明在创建快照的序列化过程中出现服务器人为或意外关闭，导致序列化失败，删除临时文件；")]),v._v(" "),e("li",[v._v("检查快照文件"),e("code",[v._v("mtree.snapshot")]),v._v("是否存在。如果不存在，则使用新的 MTree；否则启动反序列化过程，得到 MTree")]),v._v(" "),e("li",[v._v("对于"),e("code",[v._v("mlog.txt")]),v._v("中的内容，逐行读取并操作，完成 MTree 的恢复。读取过程中更新 "),e("code",[v._v("lineNumber")]),v._v("，并返回，用于后面"),e("code",[v._v("mlog.txt")]),v._v("行数的记录。")])]),v._v(" "),e("h2",{attrs:{id:"元数据日志管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元数据日志管理"}},[v._v("#")]),v._v(" 元数据日志管理")]),v._v(" "),e("ul",[e("li",[v._v("org.apache.iotdb.db.metadata.MLogWriter")])]),v._v(" "),e("p",[v._v("所有元数据的操作均会记录到元数据日志文件中，此文件默认为 data/system/schema/mlog.txt。")]),v._v(" "),e("p",[v._v("系统重启时会重做 mlog 中的日志，重做之前需要标记不需要记录日志。当重启结束后，标记需要记录日志。")]),v._v(" "),e("p",[v._v("元数据日志的类型由 MetadataOperationType 类记录。mlog 直接存储字符串编码。")]),v._v(" "),e("p",[v._v("示例 sql 及对应的 mlog 记录：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("set storage group to root.turbine")]),v._v(" "),e("blockquote",[e("p",[v._v("mlog: 2,root.turbine")])]),v._v(" "),e("blockquote",[e("p",[v._v("格式: 2,path")])])]),v._v(" "),e("li",[e("p",[v._v("delete storage group root.turbine")]),v._v(" "),e("blockquote",[e("p",[v._v("mlog: 1,root.turbine")])]),v._v(" "),e("blockquote",[e("p",[v._v("格式: 1,path")])])]),v._v(" "),e("li",[e("p",[v._v("create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)")]),v._v(" "),e("blockquote",[e("p",[v._v("mlog: 0,root.turbine.d1.s1,3,2,1,,温度,offset")])]),v._v(" "),e("blockquote",[e("p",[v._v("格式: 0,path,TSDataType,TSEncoding,CompressionType,[properties],[alias],[tag-attribute offset]")])])]),v._v(" "),e("li",[e("p",[v._v("delete timeseries root.turbine.d1.s1")]),v._v(" "),e("blockquote",[e("p",[v._v("mlog: 1,root.turbine.d1.s1")])]),v._v(" "),e("blockquote",[e("p",[v._v("格式: 1,path")])])]),v._v(" "),e("li",[e("p",[v._v("set ttl to root.turbine 10")]),v._v(" "),e("blockquote",[e("p",[v._v("mlog: 10,root.turbine,10")])]),v._v(" "),e("blockquote",[e("p",[v._v("格式: 10,path,ttl")])])]),v._v(" "),e("li",[e("p",[v._v("alter timeseries root.turbine.d1.s1 add tags(tag1=v1)")]),v._v(" "),e("blockquote",[e("p",[v._v("只有当root.turbine.d1.s1原来不存在任何标签/属性信息时，该sql才会产生日志")])]),v._v(" "),e("blockquote",[e("p",[v._v("mlog: 12,root.turbine.d1.s1,10")])]),v._v(" "),e("blockquote",[e("p",[v._v("格式: 10,path,[change offset]")])])]),v._v(" "),e("li",[e("p",[v._v("alter timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias")]),v._v(" "),e("blockquote",[e("p",[v._v("mlog: 13,root.turbine.d1.s1,newAlias")])]),v._v(" "),e("blockquote",[e("p",[v._v("格式: 13,path,[new alias]")])])])]),v._v(" "),e("h2",{attrs:{id:"标签文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签文件"}},[v._v("#")]),v._v(" 标签文件")]),v._v(" "),e("ul",[e("li",[v._v("org.apache.iotdb.db.metadata.TagLogFile")])]),v._v(" "),e("p",[v._v("所有时间序列的标签/属性信息都会保存在标签文件中，此文件默认为 data/system/schema/mlog.txt。")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("每条时间序列的 tags 和 attributes 持久化总字节数为 L，在 iotdb-engine.properties 中配置。")])]),v._v(" "),e("li",[e("p",[v._v("持久化内容：Map<String,String> tags, Map<String,String> attributes，如果内容不足 L，则需补空。")])])]),v._v(" "),e("blockquote",[e("p",[v._v("create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes (attr1=v1, attr2=v2)")])]),v._v(" "),e("blockquote",[e("p",[v._v("在tlog.txt中的内容：")])]),v._v(" "),e("blockquote",[e("p",[v._v("tagsSize (tag1=v1, tag2=v2) attributesSize (attr1=v1, attr2=v2)")])])])}),[],!1,null,null,null);_.default=l.exports}}]);
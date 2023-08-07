const e=JSON.parse('{"key":"v-f9cfa6f4","path":"/zh/UserGuide/V1.0.x/Cluster/Cluster-Setup.html","title":"1. 目标","lang":"zh-CN","frontmatter":{"description":"本文档为 IoTDB 集群版（1.0.0）的安装及启动教程。 1. JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。 2. 设置最大文件打开数为 65535。 3. 关闭交换内存。 4. 首次启动ConfigNode节点时，确保已清空ConfigNode节点的data/confignode目录；首次启动DataNode节点时，确保...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Cluster/Cluster-Setup.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Cluster/Cluster-Setup.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"1. 目标"}],["meta",{"property":"og:description","content":"本文档为 IoTDB 集群版（1.0.0）的安装及启动教程。 1. JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。 2. 设置最大文件打开数为 65535。 3. 关闭交换内存。 4. 首次启动ConfigNode节点时，确保已清空ConfigNode节点的data/confignode目录；首次启动DataNode节点时，确保..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-07T08:05:11.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-07T08:05:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1. 目标\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T08:05:11.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"3.1 下载二进制文件","slug":"_3-1-下载二进制文件","link":"#_3-1-下载二进制文件","children":[]},{"level":2,"title":"3.2 使用源码编译","slug":"_3-2-使用源码编译","link":"#_3-2-使用源码编译","children":[{"level":3,"title":"3.2.1 下载源码","slug":"_3-2-1-下载源码","link":"#_3-2-1-下载源码","children":[]},{"level":3,"title":"3.2.2 编译源码","slug":"_3-2-2-编译源码","link":"#_3-2-2-编译源码","children":[]}]},{"level":2,"title":"5.1 集群安装","slug":"_5-1-集群安装","link":"#_5-1-集群安装","children":[]},{"level":2,"title":"5.2 集群配置","slug":"_5-2-集群配置","link":"#_5-2-集群配置","children":[{"level":3,"title":"5.2.1 通用配置","slug":"_5-2-1-通用配置","link":"#_5-2-1-通用配置","children":[]},{"level":3,"title":"5.2.2 ConfigNode 配置","slug":"_5-2-2-confignode-配置","link":"#_5-2-2-confignode-配置","children":[]},{"level":3,"title":"5.2.3 DataNode 配置","slug":"_5-2-3-datanode-配置","link":"#_5-2-3-datanode-配置","children":[]}]},{"level":2,"title":"6.1 启动集群","slug":"_6-1-启动集群","link":"#_6-1-启动集群","children":[{"level":3,"title":"6.1.1 启动 Seed-ConfigNode","slug":"_6-1-1-启动-seed-confignode","link":"#_6-1-1-启动-seed-confignode","children":[]},{"level":3,"title":"6.1.2 增加更多 ConfigNode（可选）","slug":"_6-1-2-增加更多-confignode-可选","link":"#_6-1-2-增加更多-confignode-可选","children":[]},{"level":3,"title":"6.1.3 增加 DataNode","slug":"_6-1-3-增加-datanode","link":"#_6-1-3-增加-datanode","children":[]}]},{"level":2,"title":"6.2 启动 Cli","slug":"_6-2-启动-cli","link":"#_6-2-启动-cli","children":[]},{"level":2,"title":"6.3 验证集群","slug":"_6-3-验证集群","link":"#_6-3-验证集群","children":[]},{"level":2,"title":"6.4 停止 IoTDB 进程","slug":"_6-4-停止-iotdb-进程","link":"#_6-4-停止-iotdb-进程","children":[{"level":3,"title":"6.4.1 使用脚本停止 ConfigNode","slug":"_6-4-1-使用脚本停止-confignode","link":"#_6-4-1-使用脚本停止-confignode","children":[]},{"level":3,"title":"6.4.2 使用脚本停止 DataNode","slug":"_6-4-2-使用脚本停止-datanode","link":"#_6-4-2-使用脚本停止-datanode","children":[]},{"level":3,"title":"6.4.3 停止节点进程","slug":"_6-4-3-停止节点进程","link":"#_6-4-3-停止节点进程","children":[]}]},{"level":2,"title":"6.5 集群缩容","slug":"_6-5-集群缩容","link":"#_6-5-集群缩容","children":[{"level":3,"title":"6.5.1 移除 ConfigNode","slug":"_6-5-1-移除-confignode","link":"#_6-5-1-移除-confignode","children":[]},{"level":3,"title":"6.5.2 移除 DataNode","slug":"_6-5-2-移除-datanode","link":"#_6-5-2-移除-datanode","children":[]}]}],"git":{"createdTime":1691395511000,"updatedTime":1691395511000,"contributors":[{"name":"Caideyipi","email":"87789683+Caideyipi@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":11.35,"words":3404},"filePathRelative":"zh/UserGuide/V1.0.x/Cluster/Cluster-Setup.md","localizedDate":"2023年8月7日","autoDesc":true}');export{e as data};

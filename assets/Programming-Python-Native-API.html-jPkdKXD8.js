const e=JSON.parse('{"key":"v-5cf3e3ed","path":"/zh/UserGuide/V1.2.x/API/Programming-Python-Native-API.html","title":"Python 原生接口","lang":"zh-CN","frontmatter":{"description":"依赖 在使用 Python 原生接口包前，您需要安装 thrift (>=0.13) 依赖。 如何使用 （示例） 首先下载包：pip3 install apache-iotdb 您可以从这里得到一个使用该包进行数据读写的例子：Session Example (https://github.com/apache/iotdb/blob/master/cli...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/API/Programming-Python-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/API/Programming-Python-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Python 原生接口"}],["meta",{"property":"og:description","content":"依赖 在使用 Python 原生接口包前，您需要安装 thrift (>=0.13) 依赖。 如何使用 （示例） 首先下载包：pip3 install apache-iotdb 您可以从这里得到一个使用该包进行数据读写的例子：Session Example (https://github.com/apache/iotdb/blob/master/cli..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-28T09:28:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-28T09:28:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python 原生接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-28T09:28:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":2,"title":"如何使用 （示例）","slug":"如何使用-示例","link":"#如何使用-示例","children":[]},{"level":2,"title":"基本接口说明","slug":"基本接口说明","link":"#基本接口说明","children":[{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"通过SessionPool管理session连接","slug":"通过sessionpool管理session连接","link":"#通过sessionpool管理session连接","children":[]}]},{"level":2,"title":"数据定义接口 DDL","slug":"数据定义接口-ddl","link":"#数据定义接口-ddl","children":[{"level":3,"title":"Database 管理","slug":"database-管理","link":"#database-管理","children":[]},{"level":3,"title":"时间序列管理","slug":"时间序列管理","link":"#时间序列管理","children":[]}]},{"level":2,"title":"数据操作接口 DML","slug":"数据操作接口-dml","link":"#数据操作接口-dml","children":[{"level":3,"title":"数据写入","slug":"数据写入","link":"#数据写入","children":[]},{"level":3,"title":"带有类型推断的写入","slug":"带有类型推断的写入","link":"#带有类型推断的写入","children":[]},{"level":3,"title":"对齐时间序列的写入","slug":"对齐时间序列的写入","link":"#对齐时间序列的写入","children":[]}]},{"level":2,"title":"IoTDB-SQL 接口","slug":"iotdb-sql-接口","link":"#iotdb-sql-接口","children":[]},{"level":2,"title":"元数据模版接口","slug":"元数据模版接口","link":"#元数据模版接口","children":[{"level":3,"title":"构建元数据模版","slug":"构建元数据模版","link":"#构建元数据模版","children":[]},{"level":3,"title":"修改模版节点信息","slug":"修改模版节点信息","link":"#修改模版节点信息","children":[]},{"level":3,"title":"挂载元数据模板","slug":"挂载元数据模板","link":"#挂载元数据模板","children":[]},{"level":3,"title":"卸载元数据模版","slug":"卸载元数据模版","link":"#卸载元数据模版","children":[]},{"level":3,"title":"查看元数据模版","slug":"查看元数据模版","link":"#查看元数据模版","children":[]},{"level":3,"title":"删除元数据模版","slug":"删除元数据模版","link":"#删除元数据模版","children":[]}]},{"level":2,"title":"对 Pandas 的支持","slug":"对-pandas-的支持","link":"#对-pandas-的支持","children":[]},{"level":2,"title":"IoTDB Testcontainer","slug":"iotdb-testcontainer","link":"#iotdb-testcontainer","children":[]},{"level":2,"title":"IoTDB DBAPI","slug":"iotdb-dbapi","link":"#iotdb-dbapi","children":[{"level":3,"title":"例子","slug":"例子","link":"#例子","children":[]}]},{"level":2,"title":"IoTDB SQLAlchemy Dialect（实验性）","slug":"iotdb-sqlalchemy-dialect-实验性","link":"#iotdb-sqlalchemy-dialect-实验性","children":[{"level":3,"title":"元数据模型映射","slug":"元数据模型映射","link":"#元数据模型映射","children":[]},{"level":3,"title":"数据类型映射","slug":"数据类型映射","link":"#数据类型映射","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"给开发人员","slug":"给开发人员","link":"#给开发人员","children":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"依赖","slug":"依赖-1","link":"#依赖-1","children":[]},{"level":3,"title":"编译 thrift 库并调试","slug":"编译-thrift-库并调试","link":"#编译-thrift-库并调试","children":[]},{"level":3,"title":"Session 客户端 & 使用示例","slug":"session-客户端-使用示例","link":"#session-客户端-使用示例","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":3,"title":"其他工具","slug":"其他工具","link":"#其他工具","children":[]}]},{"level":2,"title":"发版","slug":"发版","link":"#发版","children":[{"level":3,"title":"准备您的环境","slug":"准备您的环境","link":"#准备您的环境","children":[]},{"level":3,"title":"发版","slug":"发版-1","link":"#发版-1","children":[]}]}],"git":{"createdTime":1709112484000,"updatedTime":1709112484000,"contributors":[{"name":"tongshs","email":"37606220+tongshs@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":10.88,"words":3264},"filePathRelative":"zh/UserGuide/V1.2.x/API/Programming-Python-Native-API.md","localizedDate":"2024年2月28日","autoDesc":true}');export{e as data};

const e=JSON.parse('{"key":"v-424c5fc6","path":"/zh/UserGuide/Master/User-Manuel/IoTDB-Data-Pipe_timecho.html","title":"IoTDB 数据订阅","lang":"zh-CN","frontmatter":{"description":"IoTDB 数据订阅功能可以将 IoTDB 的数据传输到另一个数据平台，我们将一个数据订阅任务称为 Pipe。 一个 Pipe 包含三个子任务（插件）： 抽取（Extract）; 处理（Process）; 发送（Connect）; Pipe 允许用户自定义三个子任务的处理逻辑，通过类似 UDF 的方式处理数据。在一个 Pipe 中，上述的子任务分别由三...","head":[["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/Master/User-Manuel/IoTDB-Data-Pipe_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"IoTDB 数据订阅"}],["meta",{"property":"og:description","content":"IoTDB 数据订阅功能可以将 IoTDB 的数据传输到另一个数据平台，我们将一个数据订阅任务称为 Pipe。 一个 Pipe 包含三个子任务（插件）： 抽取（Extract）; 处理（Process）; 发送（Connect）; Pipe 允许用户自定义三个子任务的处理逻辑，通过类似 UDF 的方式处理数据。在一个 Pipe 中，上述的子任务分别由三..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-28T09:28:10.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-28T09:28:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IoTDB 数据订阅\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-28T09:28:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"创建流水线","slug":"创建流水线","link":"#创建流水线","children":[]},{"level":2,"title":"启动流水线","slug":"启动流水线","link":"#启动流水线","children":[]},{"level":2,"title":"停止流水线","slug":"停止流水线","link":"#停止流水线","children":[]},{"level":2,"title":"删除流水线","slug":"删除流水线","link":"#删除流水线","children":[]},{"level":2,"title":"展示流水线","slug":"展示流水线","link":"#展示流水线","children":[]},{"level":2,"title":"流水线运行状态迁移","slug":"流水线运行状态迁移","link":"#流水线运行状态迁移","children":[]},{"level":2,"title":"预置 extractor","slug":"预置-extractor","link":"#预置-extractor","children":[{"level":3,"title":"iotdb-extractor","slug":"iotdb-extractor","link":"#iotdb-extractor","children":[]}]},{"level":2,"title":"预置 processor","slug":"预置-processor","link":"#预置-processor","children":[{"level":3,"title":"do-nothing-processor","slug":"do-nothing-processor","link":"#do-nothing-processor","children":[]}]},{"level":2,"title":"预置 connector","slug":"预置-connector","link":"#预置-connector","children":[{"level":3,"title":"iotdb-thrift-connector-v1（别名：iotdb-thrift-connector）","slug":"iotdb-thrift-connector-v1-别名-iotdb-thrift-connector","link":"#iotdb-thrift-connector-v1-别名-iotdb-thrift-connector","children":[]},{"level":3,"title":"iotdb-thrift-connector-v2","slug":"iotdb-thrift-connector-v2","link":"#iotdb-thrift-connector-v2","children":[]},{"level":3,"title":"iotdb-sync-connector","slug":"iotdb-sync-connector","link":"#iotdb-sync-connector","children":[]},{"level":3,"title":"do-nothing-connector","slug":"do-nothing-connector","link":"#do-nothing-connector","children":[]}]},{"level":2,"title":"编程开发依赖","slug":"编程开发依赖","link":"#编程开发依赖","children":[]},{"level":2,"title":"事件驱动编程模型","slug":"事件驱动编程模型","link":"#事件驱动编程模型","children":[{"level":3,"title":"操作日志写入事件（TabletInsertionEvent）","slug":"操作日志写入事件-tabletinsertionevent","link":"#操作日志写入事件-tabletinsertionevent","children":[]},{"level":3,"title":"数据文件写入事件（TsFileInsertionEvent）","slug":"数据文件写入事件-tsfileinsertionevent","link":"#数据文件写入事件-tsfileinsertionevent","children":[]}]},{"level":2,"title":"自定义数据订阅插件编程接口定义","slug":"自定义数据订阅插件编程接口定义","link":"#自定义数据订阅插件编程接口定义","children":[{"level":3,"title":"数据抽取插件接口","slug":"数据抽取插件接口","link":"#数据抽取插件接口","children":[]},{"level":3,"title":"数据处理插件接口","slug":"数据处理插件接口","link":"#数据处理插件接口","children":[]},{"level":3,"title":"数据发送插件接口","slug":"数据发送插件接口","link":"#数据发送插件接口","children":[]}]},{"level":2,"title":"加载插件语句","slug":"加载插件语句","link":"#加载插件语句","children":[]},{"level":2,"title":"删除插件语句","slug":"删除插件语句","link":"#删除插件语句","children":[]},{"level":2,"title":"查看插件语句","slug":"查看插件语句","link":"#查看插件语句","children":[]},{"level":2,"title":"Pipe 任务","slug":"pipe-任务","link":"#pipe-任务","children":[]},{"level":2,"title":"Pipe 插件","slug":"pipe-插件","link":"#pipe-插件","children":[]},{"level":2,"title":"最少一次语义保证 at-least-once","slug":"最少一次语义保证-at-least-once","link":"#最少一次语义保证-at-least-once","children":[]},{"level":2,"title":"源端：数据写入与 Pipe 处理、发送数据异步解耦","slug":"源端-数据写入与-pipe-处理、发送数据异步解耦","link":"#源端-数据写入与-pipe-处理、发送数据异步解耦","children":[]},{"level":2,"title":"源端：可自适应数据写入负载的数据传输策略","slug":"源端-可自适应数据写入负载的数据传输策略","link":"#源端-可自适应数据写入负载的数据传输策略","children":[]},{"level":2,"title":"源端：高可用集群部署时，Pipe 服务高可用","slug":"源端-高可用集群部署时-pipe-服务高可用","link":"#源端-高可用集群部署时-pipe-服务高可用","children":[]}],"git":{"createdTime":1690536490000,"updatedTime":1690536490000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":28.53,"words":8559},"filePathRelative":"zh/UserGuide/Master/User-Manuel/IoTDB-Data-Pipe_timecho.md","localizedDate":"2023年7月28日","autoDesc":true}');export{e as data};

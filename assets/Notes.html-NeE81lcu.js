const e=JSON.parse('{"key":"v-9676651e","path":"/zh/UserGuide/V1.0.x/Trigger/Notes.html","title":"重要注意事项","lang":"zh-CN","frontmatter":{"description":"触发器从注册时开始生效，不对已有的历史数据进行处理。即只有成功注册触发器之后发生的写入请求才会被触发器侦听到。; 触发器目前采用同步触发，所以编写时需要保证触发器效率，否则可能会大幅影响写入性能。您需要自己保证触发器内部的并发安全性。; 集群中不能注册过多触发器。因为触发器信息全量保存在 ConfigNode 中，并且在所有 DataNode 都有一份...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Trigger/Notes.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Trigger/Notes.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"重要注意事项"}],["meta",{"property":"og:description","content":"触发器从注册时开始生效，不对已有的历史数据进行处理。即只有成功注册触发器之后发生的写入请求才会被触发器侦听到。; 触发器目前采用同步触发，所以编写时需要保证触发器效率，否则可能会大幅影响写入性能。您需要自己保证触发器内部的并发安全性。; 集群中不能注册过多触发器。因为触发器信息全量保存在 ConfigNode 中，并且在所有 DataNode 都有一份..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-17T01:32:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-17T01:32:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"重要注意事项\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-17T01:32:18.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1705455138000,"updatedTime":1705455138000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.21,"words":664},"filePathRelative":"zh/UserGuide/V1.0.x/Trigger/Notes.md","localizedDate":"2024年1月17日","autoDesc":true}');export{e as data};

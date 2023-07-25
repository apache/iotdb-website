const e=JSON.parse('{"key":"v-51527b76","path":"/zh/UserGuide/Master/Trigger/Notes.html","title":"","lang":"zh-CN","frontmatter":{"description":"重要注意事项 触发器从注册时开始生效，不对已有的历史数据进行处理。即只有成功注册触发器之后发生的写入请求才会被触发器侦听到。; 触发器目前采用同步触发，所以编写时需要保证触发器效率，否则可能会大幅影响写入性能。您需要自己保证触发器内部的并发安全性。; 集群中不能注册过多触发器。因为触发器信息全量保存在 ConfigNode 中，并且在所有 DataNo...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/Master/Trigger/Notes.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/Master/Trigger/Notes.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"重要注意事项 触发器从注册时开始生效，不对已有的历史数据进行处理。即只有成功注册触发器之后发生的写入请求才会被触发器侦听到。; 触发器目前采用同步触发，所以编写时需要保证触发器效率，否则可能会大幅影响写入性能。您需要自己保证触发器内部的并发安全性。; 集群中不能注册过多触发器。因为触发器信息全量保存在 ConfigNode 中，并且在所有 DataNo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-25T09:36:26.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-25T09:36:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-25T09:36:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"重要注意事项","slug":"重要注意事项","link":"#重要注意事项","children":[]}],"git":{"createdTime":1690277786000,"updatedTime":1690277786000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.21,"words":664},"filePathRelative":"zh/UserGuide/Master/Trigger/Notes.md","localizedDate":"2023年7月25日","autoDesc":true}');export{e as data};

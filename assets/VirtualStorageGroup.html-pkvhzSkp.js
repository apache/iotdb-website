const e=JSON.parse('{"key":"v-767c1a52","path":"/zh/UserGuide/V0.13.x/Data-Modeling/VirtualStorageGroup.html","title":"虚拟存储组","lang":"zh-CN","frontmatter":{"description":"背景 存储组由用户显示指定，使用语句\\"SET STORAGE GROUP TO\\"来指定存储组，每一个存储组有一个对应的 StorageGroupProcessor 为了确保最终一致性，每一个存储组有一个数据插入锁（排它锁）来同步每一次插入操作。 所以服务端数据写入的并行度为存储组的数量。 问题 从背景中可知，IoTDB数据写入的并行度为 max(客户端...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Data-Modeling/VirtualStorageGroup.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Data-Modeling/VirtualStorageGroup.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"虚拟存储组"}],["meta",{"property":"og:description","content":"背景 存储组由用户显示指定，使用语句\\"SET STORAGE GROUP TO\\"来指定存储组，每一个存储组有一个对应的 StorageGroupProcessor 为了确保最终一致性，每一个存储组有一个数据插入锁（排它锁）来同步每一次插入操作。 所以服务端数据写入的并行度为存储组的数量。 问题 从背景中可知，IoTDB数据写入的并行度为 max(客户端..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-28T09:28:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-28T09:28:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"虚拟存储组\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-28T09:28:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]}],"git":{"createdTime":1709112484000,"updatedTime":1709112484000,"contributors":[{"name":"tongshs","email":"37606220+tongshs@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.75,"words":524},"filePathRelative":"zh/UserGuide/V0.13.x/Data-Modeling/VirtualStorageGroup.md","localizedDate":"2024年2月28日","autoDesc":true}');export{e as data};

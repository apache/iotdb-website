const e=JSON.parse('{"key":"v-97bea6de","path":"/zh/UserGuide/V1.0.x/Query-Data/Continuous-Query.html","title":"连续查询（Continuous Query, CQ）","lang":"zh-CN","frontmatter":{"description":"简介 连续查询(Continuous queries, aka CQ) 是对实时数据周期性地自动执行的查询，并将查询结果写入指定的时间序列中。 语法 注意： 1. 如果where子句中出现任何时间过滤条件，IoTDB将会抛出异常，因为IoTDB会自动为每次查询执行指定时间范围。 2. GROUP BY TIME CLAUSE在连续查询中的语法稍有不同，...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Query-Data/Continuous-Query.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Query-Data/Continuous-Query.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"连续查询（Continuous Query, CQ）"}],["meta",{"property":"og:description","content":"简介 连续查询(Continuous queries, aka CQ) 是对实时数据周期性地自动执行的查询，并将查询结果写入指定的时间序列中。 语法 注意： 1. 如果where子句中出现任何时间过滤条件，IoTDB将会抛出异常，因为IoTDB会自动为每次查询执行指定时间范围。 2. GROUP BY TIME CLAUSE在连续查询中的语法稍有不同，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-07T08:05:11.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-07T08:05:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"连续查询（Continuous Query, CQ）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T08:05:11.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[{"level":3,"title":"连续查询语法中参数含义的描述","slug":"连续查询语法中参数含义的描述","link":"#连续查询语法中参数含义的描述","children":[]}]},{"level":2,"title":"连续查询的用例","slug":"连续查询的用例","link":"#连续查询的用例","children":[{"level":3,"title":"配置连续查询执行的周期性间隔","slug":"配置连续查询执行的周期性间隔","link":"#配置连续查询执行的周期性间隔","children":[]},{"level":3,"title":"配置连续查询的时间窗口大小","slug":"配置连续查询的时间窗口大小","link":"#配置连续查询的时间窗口大小","children":[]},{"level":3,"title":"同时配置连续查询执行的周期性间隔和时间窗口大小","slug":"同时配置连续查询执行的周期性间隔和时间窗口大小","link":"#同时配置连续查询执行的周期性间隔和时间窗口大小","children":[]},{"level":3,"title":"配置连续查询每次查询执行时间窗口的结束时间","slug":"配置连续查询每次查询执行时间窗口的结束时间","link":"#配置连续查询每次查询执行时间窗口的结束时间","children":[]},{"level":3,"title":"没有GROUP BY TIME子句的连续查询","slug":"没有group-by-time子句的连续查询","link":"#没有group-by-time子句的连续查询","children":[]}]},{"level":2,"title":"连续查询的管理","slug":"连续查询的管理","link":"#连续查询的管理","children":[{"level":3,"title":"查询系统已有的连续查询","slug":"查询系统已有的连续查询","link":"#查询系统已有的连续查询","children":[]},{"level":3,"title":"删除已有的连续查询","slug":"删除已有的连续查询","link":"#删除已有的连续查询","children":[]},{"level":3,"title":"修改已有的连续查询","slug":"修改已有的连续查询","link":"#修改已有的连续查询","children":[]}]},{"level":2,"title":"连续查询的使用场景","slug":"连续查询的使用场景","link":"#连续查询的使用场景","children":[{"level":3,"title":"对数据进行降采样并对降采样后的数据使用不同的保留策略","slug":"对数据进行降采样并对降采样后的数据使用不同的保留策略","link":"#对数据进行降采样并对降采样后的数据使用不同的保留策略","children":[]},{"level":3,"title":"预计算代价昂贵的查询","slug":"预计算代价昂贵的查询","link":"#预计算代价昂贵的查询","children":[]},{"level":3,"title":"作为子查询的替代品","slug":"作为子查询的替代品","link":"#作为子查询的替代品","children":[]}]},{"level":2,"title":"连续查询相关的配置参数","slug":"连续查询相关的配置参数","link":"#连续查询相关的配置参数","children":[]}],"git":{"createdTime":1691395511000,"updatedTime":1691395511000,"contributors":[{"name":"Caideyipi","email":"87789683+Caideyipi@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":16.61,"words":4982},"filePathRelative":"zh/UserGuide/V1.0.x/Query-Data/Continuous-Query.md","localizedDate":"2023年8月7日","autoDesc":true}');export{e as data};

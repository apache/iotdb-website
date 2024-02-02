const l=JSON.parse('{"key":"v-4ba252e8","path":"/zh/UserGuide/latest/SQL-Manual/SQL-Manual.html","title":"SQL手册","lang":"zh-CN","frontmatter":{"description":"元数据操作 1、数据库管理 创建数据库 查看数据库 删除数据库 统计数据库数量 2、时间序列管理 创建时间序列 简化版; 错误提示; 创建对齐时间序列 删除时间序列 查看时间序列 统计时间序列数量 标签点管理 重命名标签或属性; 重新设置标签或属性的值; 删除已经存在的标签或属性; 添加新的标签; 添加新的属性; 更新插入别名，标签和属性; 使用标签作...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/SQL-Manual/SQL-Manual.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/SQL-Manual/SQL-Manual.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"SQL手册"}],["meta",{"property":"og:description","content":"元数据操作 1、数据库管理 创建数据库 查看数据库 删除数据库 统计数据库数量 2、时间序列管理 创建时间序列 简化版; 错误提示; 创建对齐时间序列 删除时间序列 查看时间序列 统计时间序列数量 标签点管理 重命名标签或属性; 重新设置标签或属性的值; 删除已经存在的标签或属性; 添加新的标签; 添加新的属性; 更新插入别名，标签和属性; 使用标签作..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-02T03:31:29.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T03:31:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL手册\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T03:31:29.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"元数据操作","slug":"元数据操作","link":"#元数据操作","children":[{"level":3,"title":"1、数据库管理","slug":"_1、数据库管理","link":"#_1、数据库管理","children":[]},{"level":3,"title":"2、时间序列管理","slug":"_2、时间序列管理","link":"#_2、时间序列管理","children":[]},{"level":3,"title":"3、时间序列路径管理","slug":"_3、时间序列路径管理","link":"#_3、时间序列路径管理","children":[]},{"level":3,"title":"4、设备模板管理","slug":"_4、设备模板管理","link":"#_4、设备模板管理","children":[]},{"level":3,"title":"5、数据存活时间管理","slug":"_5、数据存活时间管理","link":"#_5、数据存活时间管理","children":[]}]},{"level":2,"title":"写入数据","slug":"写入数据","link":"#写入数据","children":[{"level":3,"title":"1、写入单列数据","slug":"_1、写入单列数据","link":"#_1、写入单列数据","children":[]},{"level":3,"title":"2、写入多列数据","slug":"_2、写入多列数据","link":"#_2、写入多列数据","children":[]},{"level":3,"title":"3、使用服务器时间戳","slug":"_3、使用服务器时间戳","link":"#_3、使用服务器时间戳","children":[]},{"level":3,"title":"4、写入对齐时间序列数据","slug":"_4、写入对齐时间序列数据","link":"#_4、写入对齐时间序列数据","children":[]},{"level":3,"title":"5、加载 TsFile 文件数据","slug":"_5、加载-tsfile-文件数据","link":"#_5、加载-tsfile-文件数据","children":[]}]},{"level":2,"title":"删除数据","slug":"删除数据","link":"#删除数据","children":[{"level":3,"title":"1、删除单列数据","slug":"_1、删除单列数据","link":"#_1、删除单列数据","children":[]},{"level":3,"title":"2、删除多列数据","slug":"_2、删除多列数据","link":"#_2、删除多列数据","children":[]}]},{"level":2,"title":"数据查询","slug":"数据查询","link":"#数据查询","children":[{"level":3,"title":"1、基础查询","slug":"_1、基础查询","link":"#_1、基础查询","children":[]},{"level":3,"title":"2、选择表达式","slug":"_2、选择表达式","link":"#_2、选择表达式","children":[]},{"level":3,"title":"3、查询过滤条件","slug":"_3、查询过滤条件","link":"#_3、查询过滤条件","children":[]},{"level":3,"title":"4、分段分组聚合","slug":"_4、分段分组聚合","link":"#_4、分段分组聚合","children":[]},{"level":3,"title":"5、聚合结果过滤","slug":"_5、聚合结果过滤","link":"#_5、聚合结果过滤","children":[]},{"level":3,"title":"6、结果集补空值","slug":"_6、结果集补空值","link":"#_6、结果集补空值","children":[]},{"level":3,"title":"7、查询结果分页","slug":"_7、查询结果分页","link":"#_7、查询结果分页","children":[]},{"level":3,"title":"8、排序","slug":"_8、排序","link":"#_8、排序","children":[]},{"level":3,"title":"9、查询对齐模式","slug":"_9、查询对齐模式","link":"#_9、查询对齐模式","children":[]},{"level":3,"title":"10、查询写回（SELECT INTO）","slug":"_10、查询写回-select-into","link":"#_10、查询写回-select-into","children":[]}]},{"level":2,"title":"运算符","slug":"运算符-1","link":"#运算符-1","children":[{"level":3,"title":"算数运算符","slug":"算数运算符","link":"#算数运算符","children":[]},{"level":3,"title":"比较运算符","slug":"比较运算符","link":"#比较运算符","children":[]},{"level":3,"title":"逻辑运算符","slug":"逻辑运算符","link":"#逻辑运算符","children":[]}]},{"level":2,"title":"内置函数","slug":"内置函数","link":"#内置函数","children":[{"level":3,"title":"Aggregate Functions","slug":"aggregate-functions","link":"#aggregate-functions","children":[]},{"level":3,"title":"算数函数","slug":"算数函数","link":"#算数函数","children":[]},{"level":3,"title":"比较函数","slug":"比较函数","link":"#比较函数","children":[]},{"level":3,"title":"字符串处理函数","slug":"字符串处理函数","link":"#字符串处理函数","children":[]},{"level":3,"title":"数据类型转换函数","slug":"数据类型转换函数","link":"#数据类型转换函数","children":[]},{"level":3,"title":"常序列生成函数","slug":"常序列生成函数","link":"#常序列生成函数","children":[]},{"level":3,"title":"选择函数","slug":"选择函数","link":"#选择函数","children":[]},{"level":3,"title":"区间查询函数","slug":"区间查询函数","link":"#区间查询函数","children":[]},{"level":3,"title":"趋势计算函数","slug":"趋势计算函数","link":"#趋势计算函数","children":[]},{"level":3,"title":"采样函数","slug":"采样函数","link":"#采样函数","children":[]},{"level":3,"title":"时间序列处理函数","slug":"时间序列处理函数","link":"#时间序列处理函数","children":[]},{"level":3,"title":"时间序列处理函数","slug":"时间序列处理函数-1","link":"#时间序列处理函数-1","children":[]}]},{"level":2,"title":"数据质量函数库","slug":"数据质量函数库","link":"#数据质量函数库","children":[{"level":3,"title":"数据质量","slug":"数据质量","link":"#数据质量","children":[]},{"level":3,"title":"数据画像","slug":"数据画像","link":"#数据画像","children":[]},{"level":3,"title":"异常检测","slug":"异常检测","link":"#异常检测","children":[]},{"level":3,"title":"频域分析","slug":"频域分析","link":"#频域分析","children":[]},{"level":3,"title":"数据匹配","slug":"数据匹配","link":"#数据匹配","children":[]},{"level":3,"title":"数据修复","slug":"数据修复","link":"#数据修复","children":[]},{"level":3,"title":"序列发现","slug":"序列发现","link":"#序列发现","children":[]},{"level":3,"title":"机器学习","slug":"机器学习","link":"#机器学习","children":[]}]},{"level":2,"title":"Lambda 表达式","slug":"lambda-表达式","link":"#lambda-表达式","children":[]},{"level":2,"title":"条件表达式","slug":"条件表达式","link":"#条件表达式","children":[]},{"level":2,"title":"触发器","slug":"触发器","link":"#触发器","children":[{"level":3,"title":"使用 SQL 语句注册该触发器","slug":"使用-sql-语句注册该触发器","link":"#使用-sql-语句注册该触发器","children":[]},{"level":3,"title":"卸载触发器","slug":"卸载触发器","link":"#卸载触发器","children":[]},{"level":3,"title":"查询触发器","slug":"查询触发器","link":"#查询触发器","children":[]}]},{"level":2,"title":"连续查询（Continuous Query, CQ）","slug":"连续查询-continuous-query-cq","link":"#连续查询-continuous-query-cq","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"连续查询的管理","slug":"连续查询的管理","link":"#连续查询的管理","children":[]}]},{"level":2,"title":"用户自定义函数","slug":"用户自定义函数","link":"#用户自定义函数","children":[{"level":3,"title":"UDFParameters","slug":"udfparameters","link":"#udfparameters","children":[]},{"level":3,"title":"UDF 注册","slug":"udf-注册","link":"#udf-注册","children":[]},{"level":3,"title":"UDF 卸载","slug":"udf-卸载","link":"#udf-卸载","children":[]},{"level":3,"title":"UDF 查询","slug":"udf-查询","link":"#udf-查询","children":[]},{"level":3,"title":"查看所有注册的 UDF","slug":"查看所有注册的-udf","link":"#查看所有注册的-udf","children":[]}]},{"level":2,"title":"权限管理","slug":"权限管理","link":"#权限管理","children":[{"level":3,"title":"用户与角色相关","slug":"用户与角色相关","link":"#用户与角色相关","children":[]},{"level":3,"title":"授权与取消授权","slug":"授权与取消授权","link":"#授权与取消授权","children":[]}]}],"git":{"createdTime":1706844689000,"updatedTime":1706844689000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":27.44,"words":8232},"filePathRelative":"zh/UserGuide/latest/SQL-Manual/SQL-Manual.md","localizedDate":"2024年2月2日","autoDesc":true}');export{l as data};

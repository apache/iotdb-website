const e=JSON.parse('{"key":"v-c72370e6","path":"/UserGuide/V1.2.x/stage/Operators-Functions/User-Defined-Function.html","title":"User Defined Function (UDF)","lang":"en-US","frontmatter":{"description":"IoTDB provides a variety of built-in functions to meet your computing needs, and you can also create user defined functions to meet more computing needs. This document describes...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/stage/Operators-Functions/User-Defined-Function.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/stage/Operators-Functions/User-Defined-Function.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"User Defined Function (UDF)"}],["meta",{"property":"og:description","content":"IoTDB provides a variety of built-in functions to meet your computing needs, and you can also create user defined functions to meet more computing needs. This document describes..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-26T13:54:04.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-26T13:54:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"User Defined Function (UDF)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-26T13:54:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"UDF Types","slug":"udf-types","link":"#udf-types","children":[]},{"level":2,"title":"UDF Development Dependencies","slug":"udf-development-dependencies","link":"#udf-development-dependencies","children":[]},{"level":2,"title":"UDTF（User Defined Timeseries Generating Function）","slug":"udtf-user-defined-timeseries-generating-function","link":"#udtf-user-defined-timeseries-generating-function","children":[{"level":3,"title":"void validate(UDFParameterValidator validator) throws Exception","slug":"void-validate-udfparametervalidator-validator-throws-exception","link":"#void-validate-udfparametervalidator-validator-throws-exception","children":[]},{"level":3,"title":"void beforeStart(UDFParameters parameters, UDTFConfigurations configurations) throws Exception","slug":"void-beforestart-udfparameters-parameters-udtfconfigurations-configurations-throws-exception","link":"#void-beforestart-udfparameters-parameters-udtfconfigurations-configurations-throws-exception","children":[]},{"level":3,"title":"void transform(Row row, PointCollector collector) throws Exception","slug":"void-transform-row-row-pointcollector-collector-throws-exception","link":"#void-transform-row-row-pointcollector-collector-throws-exception","children":[]},{"level":3,"title":"void transform(RowWindow rowWindow, PointCollector collector) throws Exception","slug":"void-transform-rowwindow-rowwindow-pointcollector-collector-throws-exception","link":"#void-transform-rowwindow-rowwindow-pointcollector-collector-throws-exception","children":[]},{"level":3,"title":"void terminate(PointCollector collector) throws Exception","slug":"void-terminate-pointcollector-collector-throws-exception","link":"#void-terminate-pointcollector-collector-throws-exception","children":[]},{"level":3,"title":"void beforeDestroy()","slug":"void-beforedestroy","link":"#void-beforedestroy","children":[]}]},{"level":2,"title":"Maven Project Example","slug":"maven-project-example","link":"#maven-project-example","children":[]},{"level":2,"title":"UDF Registration","slug":"udf-registration","link":"#udf-registration","children":[{"level":3,"title":"Example: register UDF named example, you can choose either of the following two registration methods","slug":"example-register-udf-named-example-you-can-choose-either-of-the-following-two-registration-methods","link":"#example-register-udf-named-example-you-can-choose-either-of-the-following-two-registration-methods","children":[]},{"level":3,"title":"Note","slug":"note","link":"#note","children":[]}]},{"level":2,"title":"UDF Deregistration","slug":"udf-deregistration","link":"#udf-deregistration","children":[]},{"level":2,"title":"UDF Queries","slug":"udf-queries","link":"#udf-queries","children":[{"level":3,"title":"Basic SQL syntax support","slug":"basic-sql-syntax-support","link":"#basic-sql-syntax-support","children":[]},{"level":3,"title":"Queries with * in SELECT Clauses","slug":"queries-with-in-select-clauses","link":"#queries-with-in-select-clauses","children":[]},{"level":3,"title":"Queries with Key-value Attributes in UDF Parameters","slug":"queries-with-key-value-attributes-in-udf-parameters","link":"#queries-with-key-value-attributes-in-udf-parameters","children":[]},{"level":3,"title":"Nested Queries","slug":"nested-queries","link":"#nested-queries","children":[]}]},{"level":2,"title":"Show All Registered UDFs","slug":"show-all-registered-udfs","link":"#show-all-registered-udfs","children":[]},{"level":2,"title":"User Permission Management","slug":"user-permission-management","link":"#user-permission-management","children":[]},{"level":2,"title":"Configurable Properties","slug":"configurable-properties","link":"#configurable-properties","children":[]},{"level":2,"title":"Contribute UDF","slug":"contribute-udf","link":"#contribute-udf","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"What you need to prepare","slug":"what-you-need-to-prepare","link":"#what-you-need-to-prepare","children":[]},{"level":3,"title":"Submit a PR","slug":"submit-a-pr","link":"#submit-a-pr","children":[]}]},{"level":2,"title":"Known Implementations","slug":"known-implementations","link":"#known-implementations","children":[{"level":3,"title":"Built-in UDF","slug":"built-in-udf","link":"#built-in-udf","children":[]},{"level":3,"title":"Data Quality Function Library","slug":"data-quality-function-library","link":"#data-quality-function-library","children":[]}]},{"level":2,"title":"Q&A","slug":"q-a","link":"#q-a","children":[]}],"git":{"createdTime":1695736444000,"updatedTime":1695736444000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":17.13,"words":5138},"filePathRelative":"UserGuide/V1.2.x/stage/Operators-Functions/User-Defined-Function.md","localizedDate":"September 26, 2023","autoDesc":true}');export{e as data};

const e=JSON.parse('{"key":"v-3bd57044","path":"/UserGuide/V1.2.x/stage/Operators-Functions/Data-Profiling.html","title":"Data Profiling","lang":"en-US","frontmatter":{"description":"ACF Usage This function is used to calculate the auto-correlation factor of the input time series, which equals to cross correlation between the same series. For more informatio...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/stage/Operators-Functions/Data-Profiling.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/stage/Operators-Functions/Data-Profiling.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Data Profiling"}],["meta",{"property":"og:description","content":"ACF Usage This function is used to calculate the auto-correlation factor of the input time series, which equals to cross correlation between the same series. For more informatio..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-17T09:32:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-17T09:32:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Profiling\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-17T09:32:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"ACF","slug":"acf","link":"#acf","children":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]},{"level":2,"title":"Distinct","slug":"distinct","link":"#distinct","children":[{"level":3,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]},{"level":3,"title":"Examples","slug":"examples-1","link":"#examples-1","children":[]}]},{"level":2,"title":"Histogram","slug":"histogram","link":"#histogram","children":[{"level":3,"title":"Usage","slug":"usage-2","link":"#usage-2","children":[]},{"level":3,"title":"Examples","slug":"examples-2","link":"#examples-2","children":[]}]},{"level":2,"title":"Integral","slug":"integral","link":"#integral","children":[{"level":3,"title":"Usage","slug":"usage-3","link":"#usage-3","children":[]},{"level":3,"title":"Examples","slug":"examples-3","link":"#examples-3","children":[]}]},{"level":2,"title":"IntegralAvg","slug":"integralavg","link":"#integralavg","children":[{"level":3,"title":"Usage","slug":"usage-4","link":"#usage-4","children":[]},{"level":3,"title":"Examples","slug":"examples-4","link":"#examples-4","children":[]}]},{"level":2,"title":"Mad","slug":"mad","link":"#mad","children":[{"level":3,"title":"Usage","slug":"usage-5","link":"#usage-5","children":[]},{"level":3,"title":"Examples","slug":"examples-5","link":"#examples-5","children":[]}]},{"level":2,"title":"Median","slug":"median","link":"#median","children":[{"level":3,"title":"Usage","slug":"usage-6","link":"#usage-6","children":[]},{"level":3,"title":"Examples","slug":"examples-6","link":"#examples-6","children":[]}]},{"level":2,"title":"MinMax","slug":"minmax","link":"#minmax","children":[{"level":3,"title":"Usage","slug":"usage-7","link":"#usage-7","children":[]},{"level":3,"title":"Examples","slug":"examples-7","link":"#examples-7","children":[]}]},{"level":2,"title":"Mode","slug":"mode","link":"#mode","children":[{"level":3,"title":"Usage","slug":"usage-8","link":"#usage-8","children":[]},{"level":3,"title":"Examples","slug":"examples-8","link":"#examples-8","children":[]}]},{"level":2,"title":"MvAvg","slug":"mvavg","link":"#mvavg","children":[{"level":3,"title":"Usage","slug":"usage-9","link":"#usage-9","children":[]},{"level":3,"title":"Examples","slug":"examples-9","link":"#examples-9","children":[]}]},{"level":2,"title":"PACF","slug":"pacf","link":"#pacf","children":[{"level":3,"title":"Usage","slug":"usage-10","link":"#usage-10","children":[]},{"level":3,"title":"Examples","slug":"examples-10","link":"#examples-10","children":[]}]},{"level":2,"title":"Percentile","slug":"percentile","link":"#percentile","children":[{"level":3,"title":"Usage","slug":"usage-11","link":"#usage-11","children":[]},{"level":3,"title":"Examples","slug":"examples-11","link":"#examples-11","children":[]}]},{"level":2,"title":"Quantile","slug":"quantile","link":"#quantile","children":[{"level":3,"title":"Usage","slug":"usage-12","link":"#usage-12","children":[]},{"level":3,"title":"Examples","slug":"examples-12","link":"#examples-12","children":[]}]},{"level":2,"title":"Period","slug":"period","link":"#period","children":[{"level":3,"title":"Usage","slug":"usage-13","link":"#usage-13","children":[]},{"level":3,"title":"Examples","slug":"examples-13","link":"#examples-13","children":[]}]},{"level":2,"title":"QLB","slug":"qlb","link":"#qlb","children":[{"level":3,"title":"Usage","slug":"usage-14","link":"#usage-14","children":[]},{"level":3,"title":"Examples","slug":"examples-14","link":"#examples-14","children":[]}]},{"level":2,"title":"Resample","slug":"resample","link":"#resample","children":[{"level":3,"title":"Usage","slug":"usage-15","link":"#usage-15","children":[]},{"level":3,"title":"Examples","slug":"examples-15","link":"#examples-15","children":[]}]},{"level":2,"title":"Sample","slug":"sample","link":"#sample","children":[{"level":3,"title":"Usage","slug":"usage-16","link":"#usage-16","children":[]},{"level":3,"title":"Examples","slug":"examples-16","link":"#examples-16","children":[]}]},{"level":2,"title":"Segment","slug":"segment","link":"#segment","children":[{"level":3,"title":"Usage","slug":"usage-17","link":"#usage-17","children":[]},{"level":3,"title":"Examples","slug":"examples-17","link":"#examples-17","children":[]}]},{"level":2,"title":"Skew","slug":"skew","link":"#skew","children":[{"level":3,"title":"Usage","slug":"usage-18","link":"#usage-18","children":[]},{"level":3,"title":"Examples","slug":"examples-18","link":"#examples-18","children":[]}]},{"level":2,"title":"Spline","slug":"spline","link":"#spline","children":[{"level":3,"title":"Usage","slug":"usage-19","link":"#usage-19","children":[]},{"level":3,"title":"Examples","slug":"examples-19","link":"#examples-19","children":[]}]},{"level":2,"title":"Spread","slug":"spread","link":"#spread","children":[{"level":3,"title":"Usage","slug":"usage-20","link":"#usage-20","children":[]},{"level":3,"title":"Examples","slug":"examples-20","link":"#examples-20","children":[]}]},{"level":2,"title":"Stddev","slug":"stddev","link":"#stddev","children":[{"level":3,"title":"Usage","slug":"usage-21","link":"#usage-21","children":[]},{"level":3,"title":"Examples","slug":"examples-21","link":"#examples-21","children":[]}]},{"level":2,"title":"ZScore","slug":"zscore","link":"#zscore","children":[{"level":3,"title":"Usage","slug":"usage-22","link":"#usage-22","children":[]},{"level":3,"title":"Examples","slug":"examples-22","link":"#examples-22","children":[]}]}],"git":{"createdTime":1692264765000,"updatedTime":1692264765000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":32.21,"words":9663},"filePathRelative":"UserGuide/V1.2.x/stage/Operators-Functions/Data-Profiling.md","localizedDate":"August 17, 2023","autoDesc":true}');export{e as data};

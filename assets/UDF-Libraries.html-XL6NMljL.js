const e=JSON.parse('{"key":"v-29c95b5a","path":"/zh/UserGuide/V1.2.x/Reference/UDF-Libraries.html","title":"数据质量函数库","lang":"zh-CN","frontmatter":{"description":"数据质量 Completeness 函数简介 本函数用于计算时间序列的完整性。将输入序列划分为若干个连续且不重叠的窗口，分别计算每一个窗口的完整性，并输出窗口第一个数据点的时间戳和窗口的完整性。 函数名： COMPLETENESS 输入序列： 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。 参数： windo...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/Reference/UDF-Libraries.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Reference/UDF-Libraries.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据质量函数库"}],["meta",{"property":"og:description","content":"数据质量 Completeness 函数简介 本函数用于计算时间序列的完整性。将输入序列划分为若干个连续且不重叠的窗口，分别计算每一个窗口的完整性，并输出窗口第一个数据点的时间戳和窗口的完整性。 函数名： COMPLETENESS 输入序列： 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。 参数： windo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-02T03:31:29.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T03:31:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据质量函数库\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T03:31:29.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据质量","slug":"数据质量","link":"#数据质量","children":[{"level":3,"title":"Completeness","slug":"completeness","link":"#completeness","children":[]},{"level":3,"title":"Consistency","slug":"consistency","link":"#consistency","children":[]},{"level":3,"title":"Timeliness","slug":"timeliness","link":"#timeliness","children":[]},{"level":3,"title":"Validity","slug":"validity","link":"#validity","children":[]},{"level":3,"title":"Accuracy","slug":"accuracy","link":"#accuracy","children":[]}]},{"level":2,"title":"数据画像","slug":"数据画像","link":"#数据画像","children":[{"level":3,"title":"ACF","slug":"acf","link":"#acf","children":[]},{"level":3,"title":"Distinct","slug":"distinct","link":"#distinct","children":[]},{"level":3,"title":"Histogram","slug":"histogram","link":"#histogram","children":[]},{"level":3,"title":"Integral","slug":"integral","link":"#integral","children":[]},{"level":3,"title":"IntegralAvg","slug":"integralavg","link":"#integralavg","children":[]},{"level":3,"title":"Mad","slug":"mad","link":"#mad","children":[]},{"level":3,"title":"Median","slug":"median","link":"#median","children":[]},{"level":3,"title":"MinMax","slug":"minmax","link":"#minmax","children":[]},{"level":3,"title":"Mode","slug":"mode","link":"#mode","children":[]},{"level":3,"title":"MvAvg","slug":"mvavg","link":"#mvavg","children":[]},{"level":3,"title":"PACF","slug":"pacf","link":"#pacf","children":[]},{"level":3,"title":"Percentile","slug":"percentile","link":"#percentile","children":[]},{"level":3,"title":"Quantile","slug":"quantile","link":"#quantile","children":[]},{"level":3,"title":"Period","slug":"period","link":"#period","children":[]},{"level":3,"title":"QLB","slug":"qlb","link":"#qlb","children":[]},{"level":3,"title":"Resample","slug":"resample","link":"#resample","children":[]},{"level":3,"title":"Sample","slug":"sample","link":"#sample","children":[]},{"level":3,"title":"Segment","slug":"segment","link":"#segment","children":[]},{"level":3,"title":"Skew","slug":"skew","link":"#skew","children":[]},{"level":3,"title":"Spline","slug":"spline","link":"#spline","children":[]},{"level":3,"title":"Spread","slug":"spread","link":"#spread","children":[]},{"level":3,"title":"Stddev","slug":"stddev","link":"#stddev","children":[]},{"level":3,"title":"ZScore","slug":"zscore","link":"#zscore","children":[]}]},{"level":2,"title":"异常检测","slug":"异常检测","link":"#异常检测","children":[{"level":3,"title":"IQR","slug":"iqr","link":"#iqr","children":[]},{"level":3,"title":"KSigma","slug":"ksigma","link":"#ksigma","children":[]},{"level":3,"title":"LOF","slug":"lof","link":"#lof","children":[]},{"level":3,"title":"MissDetect","slug":"missdetect","link":"#missdetect","children":[]},{"level":3,"title":"Range","slug":"range","link":"#range","children":[]},{"level":3,"title":"TwoSidedFilter","slug":"twosidedfilter","link":"#twosidedfilter","children":[]},{"level":3,"title":"Outlier","slug":"outlier","link":"#outlier","children":[]},{"level":3,"title":"MasterTrain","slug":"mastertrain","link":"#mastertrain","children":[]},{"level":3,"title":"MasterDetect","slug":"masterdetect","link":"#masterdetect","children":[]}]},{"level":2,"title":"频域分析","slug":"频域分析","link":"#频域分析","children":[{"level":3,"title":"Conv","slug":"conv","link":"#conv","children":[]},{"level":3,"title":"Deconv","slug":"deconv","link":"#deconv","children":[]},{"level":3,"title":"DWT","slug":"dwt","link":"#dwt","children":[]},{"level":3,"title":"FFT","slug":"fft","link":"#fft","children":[]},{"level":3,"title":"HighPass","slug":"highpass","link":"#highpass","children":[]},{"level":3,"title":"IFFT","slug":"ifft","link":"#ifft","children":[]},{"level":3,"title":"LowPass","slug":"lowpass","link":"#lowpass","children":[]}]},{"level":2,"title":"数据匹配","slug":"数据匹配","link":"#数据匹配","children":[{"level":3,"title":"Cov","slug":"cov","link":"#cov","children":[]},{"level":3,"title":"Dtw","slug":"dtw","link":"#dtw","children":[]},{"level":3,"title":"Pearson","slug":"pearson","link":"#pearson","children":[]},{"level":3,"title":"PtnSym","slug":"ptnsym","link":"#ptnsym","children":[]},{"level":3,"title":"XCorr","slug":"xcorr","link":"#xcorr","children":[]}]},{"level":2,"title":"数据修复","slug":"数据修复","link":"#数据修复","children":[{"level":3,"title":"TimestampRepair","slug":"timestamprepair","link":"#timestamprepair","children":[]},{"level":3,"title":"函数简介","slug":"函数简介-49","link":"#函数简介-49","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-49","link":"#使用示例-49","children":[]},{"level":3,"title":"ValueFill","slug":"valuefill","link":"#valuefill","children":[]},{"level":3,"title":"ValueRepair","slug":"valuerepair","link":"#valuerepair","children":[]},{"level":3,"title":"MasterRepair","slug":"masterrepair","link":"#masterrepair","children":[]},{"level":3,"title":"SeasonalRepair","slug":"seasonalrepair","link":"#seasonalrepair","children":[]}]},{"level":2,"title":"序列发现","slug":"序列发现","link":"#序列发现","children":[{"level":3,"title":"ConsecutiveSequences","slug":"consecutivesequences","link":"#consecutivesequences","children":[]},{"level":3,"title":"ConsecutiveWindows","slug":"consecutivewindows","link":"#consecutivewindows","children":[]}]},{"level":2,"title":"机器学习","slug":"机器学习","link":"#机器学习","children":[{"level":3,"title":"AR","slug":"ar","link":"#ar","children":[]},{"level":3,"title":"Representation","slug":"representation","link":"#representation","children":[]},{"level":3,"title":"RM","slug":"rm","link":"#rm","children":[]}]}],"git":{"createdTime":1706844689000,"updatedTime":1706844689000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":107.03,"words":32108},"filePathRelative":"zh/UserGuide/V1.2.x/Reference/UDF-Libraries.md","localizedDate":"2024年2月2日","autoDesc":true}');export{e as data};

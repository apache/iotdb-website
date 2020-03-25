# 数据类型

IoTDB支持:
* BOOLEAN（布尔值）
* INT32（整型）
* INT64（长整型）
* FLOAT（单精度浮点数）
* DOUBLE（双精度浮点数）
* TEXT（字符串）

一共六种数据类型。

其中**FLOAT**与**DOUBLE**类型的序列，如果编码方式采用[RLE](/zh/document/V0.9.x/UserGuide/2-Concept/3-Encoding.html)或[TS_2DIFF](/zh/document/V0.9.x/UserGuide/2-Concept/3-Encoding.html)可以指定MAX_POINT_NUMBER，该项为浮点数的小数点后位数，具体指定方式请参见本文[第5.4节](/zh/document/V0.9.x/UserGuide/5-Operation%20Manual/4-SQL%20Reference.html)，若不指定则系统会根据配置文件`tsfile-format.properties`文件中的[float_precision项](/zh/document/V0.9.x/UserGuide/3-Server/4-Config%20Manual.html)配置。

当系统中用户输入的数据类型与该时间序列的数据类型不对应时，系统会提醒类型错误，如下所示，二阶差分不支持布尔类型的编码：

```
IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF
error: encoding TS_2DIFF does not support BOOLEAN
```

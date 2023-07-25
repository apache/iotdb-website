import{_ as e,o as i,c as n,a as l,f as t}from"./app-d4806199.js";const s={},a=t(`<h2 id="sql-参考文档" tabindex="-1"><a class="header-anchor" href="#sql-参考文档" aria-hidden="true">#</a> SQL 参考文档</h2><h3 id="显示版本号" tabindex="-1"><a class="header-anchor" href="#显示版本号" aria-hidden="true">#</a> 显示版本号</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+
|        version|
+---------------+
|1.0.0|
+---------------+
Total line number = 1
It costs 0.417s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="schema-语句" tabindex="-1"><a class="header-anchor" href="#schema-语句" aria-hidden="true">#</a> Schema 语句</h3><ul><li>设置 database</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE DATABASE &lt;FullPath&gt;
Eg: IoTDB &gt; CREATE DATABASE root.ln.wf01.wt01
Note: FullPath can not include wildcard \`*\` or \`**\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除 database</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE DATABASE &lt;PathPattern&gt; [COMMA &lt;PathPattern&gt;]*
Eg: IoTDB &gt; DELETE DATABASE root.ln
Eg: IoTDB &gt; DELETE DATABASE root.*
Eg: IoTDB &gt; DELETE DATABASE root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建时间序列语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TIMESERIES &lt;FullPath&gt; WITH &lt;AttributeClauses&gt;
alias
    : LR_BRACKET ID RR_BRACKET
    ;
attributeClauses
    : DATATYPE OPERATOR_EQ &lt;DataTypeValue&gt; 
    COMMA ENCODING OPERATOR_EQ &lt;EncodingValue&gt;
    (COMMA (COMPRESSOR | COMPRESSION) OPERATOR_EQ &lt;CompressorValue&gt;)?
    (COMMA property)*
    tagClause
    attributeClause
    ;
attributeClause
    : ATTRIBUTES LR_BRACKET propertyClause (COMMA propertyClause)* RR_BRACKET
    ;
tagClause
    : TAGS LR_BRACKET propertyClause (COMMA propertyClause)* RR_BRACKET
    ;
propertyClause
    : name=ID OPERATOR_EQ propertyValue
    ;
DataTypeValue: BOOLEAN | DOUBLE | FLOAT | INT32 | INT64 | TEXT
EncodingValue: GORILLA | PLAIN | RLE | TS_2DIFF | REGULAR
CompressorValue: UNCOMPRESSED | SNAPPY
AttributesType: SDT | COMPDEV | COMPMINTIME | COMPMAXTIME
PropertyValue: ID | constant
Eg: CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, COMPRESSOR=SNAPPY, MAX_POINT_NUMBER=3
Eg: CREATE TIMESERIES root.turbine.d0.s0(temperature) WITH DATATYPE=FLOAT, ENCODING=RLE, COMPRESSOR=SNAPPY tags(unit=f, description=&#39;turbine this is a test1&#39;) attributes(H_Alarm=100, M_Alarm=50)
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, DEADBAND=SDT, COMPDEV=0.01
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, DEADBAND=SDT, COMPDEV=0.01, COMPMINTIME=3
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, DEADBAND=SDT, COMPDEV=0.01, COMPMINTIME=2, COMPMAXTIME=15
Note: Datatype and encoding type must be corresponding. Please check Chapter 3 Encoding Section for details.
Note: When propertyValue is SDT, it is required to set compression deviation COMPDEV, which is the maximum absolute difference between values.
Note: For SDT, values withtin COMPDEV will be discarded.
Note: For SDT, it is optional to set compression minimum COMPMINTIME, which is the minimum time difference between stored values for purpose of noise reduction.
Note: For SDT, it is optional to set compression maximum COMPMAXTIME, which is the maximum time difference between stored values regardless of COMPDEV.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建时间序列语句（简化版本，从v0.13起支持）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TIMESERIES &lt;FullPath&gt; &lt;SimplifiedAttributeClauses&gt;
SimplifiedAttributeClauses
    : WITH? (DATATYPE OPERATOR_EQ)? &lt;DataTypeValue&gt; 
    ENCODING OPERATOR_EQ &lt;EncodingValue&gt;
    ((COMPRESSOR | COMPRESSION) OPERATOR_EQ &lt;CompressorValue&gt;)?
    (COMMA property)*
    tagClause
    attributeClause
    ;
Eg: CREATE TIMESERIES root.ln.wf01.wt01.status BOOLEAN ENCODING=PLAIN
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE COMPRESSOR=SNAPPY MAX_POINT_NUMBER=3
Eg: CREATE TIMESERIES root.turbine.d0.s0(temperature) FLOAT ENCODING=RLE COMPRESSOR=SNAPPY tags(unit=f, description=&#39;turbine this is a test1&#39;) attributes(H_Alarm=100, M_Alarm=50)
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE DEADBAND=SDT COMPDEV=0.01
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE DEADBAND=SDT COMPDEV=0.01 COMPMINTIME=3
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE DEADBAND=SDT COMPDEV=0.01 COMPMINTIME=2 COMPMAXTIME=15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建对齐时间序列语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE ALIGNED TIMESERIES &lt;FullPath&gt; alignedMeasurements
alignedMeasurements
    : LR_BRACKET nodeNameWithoutWildcard attributeClauses
    (COMMA nodeNameWithoutWildcard attributeClauses)+ RR_BRACKET
    ;
Eg: CREATE ALIGNED TIMESERIES root.ln.wf01.GPS(lat FLOAT ENCODING=GORILLA, lon FLOAT ENCODING=GORILLA COMPRESSOR=SNAPPY)
Note: It is not supported to set different compression for a group of aligned timeseries.
Note: It is not currently supported to set an alias, tag, and attribute for aligned timeseries.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建元数据模板语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE SCHEMA TEMPLATE &lt;TemplateName&gt; LR_BRACKET &lt;TemplateMeasurementClause&gt; (COMMA plateMeasurementClause&gt;)* RR_BRACKET
templateMeasurementClause
    : suffixPath attributeClauses #nonAlignedTemplateMeasurement
    | suffixPath LR_BRACKET nodeNameWithoutWildcard attributeClauses 
    (COMMA nodeNameWithoutWildcard attributeClauses)+ RR_BRACKET #alignedTemplateMeasurement
    ;
Eg: CREATE SCHEMA TEMPLATE temp1(
        s1 INT32 encoding=Gorilla, compression=SNAPPY,
        vector1(
            s1 INT32 encoding=Gorilla,
            s2 FLOAT encoding=RLE, compression=SNAPPY)
    )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>挂载元数据模板语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SET SCHEMA TEMPLATE &lt;TemplateName&gt; TO &lt;PrefixPath&gt;
Eg: SET SCHEMA TEMPLATE temp1 TO root.beijing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>根据元数据模板创建时间序列语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TIMESERIES OF SCHEMA TEMPLATE ON &lt;PrefixPath&gt;
Eg: CREATE TIMESERIES OF SCHEMA TEMPLATE ON root.beijing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>卸载元数据模板语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UNSET SCHEMA TEMPLATE &lt;TemplateName&gt; FROM &lt;PrefixPath&gt;
Eg: UNSET SCHEMA TEMPLATE temp1 FROM root.beijing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除时间序列语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(DELETE | DROP) TIMESERIES &lt;PathPattern&gt; [COMMA &lt;PathPattern&gt;]*
Eg: IoTDB &gt; DELETE TIMESERIES root.ln.wf01.wt01.status
Eg: IoTDB &gt; DELETE TIMESERIES root.ln.wf01.wt01.status, root.ln.wf01.wt01.temperature
Eg: IoTDB &gt; DELETE TIMESERIES root.ln.wf01.wt01.*
Eg: IoTDB &gt; DROP TIMESERIES root.ln.wf01.wt01.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改时间序列标签属性语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TIMESERIES fullPath alterClause
alterClause
    : RENAME beforeName=ID TO currentName=ID
    | SET property (COMMA property)*
    | DROP ID (COMMA ID)*
    | ADD TAGS property (COMMA property)*
    | ADD ATTRIBUTES property (COMMA property)*
    | UPSERT tagClause attributeClause
    ;
attributeClause
    : (ATTRIBUTES LR_BRACKET property (COMMA property)* RR_BRACKET)?
    ;
tagClause
    : (TAGS LR_BRACKET property (COMMA property)* RR_BRACKET)?
    ;
Eg: ALTER timeseries root.turbine.d1.s1 RENAME tag1 TO newTag1
Eg: ALTER timeseries root.turbine.d1.s1 SET tag1=newV1, attr1=newV1
Eg: ALTER timeseries root.turbine.d1.s1 DROP tag1, tag2
Eg: ALTER timeseries root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4
Eg: ALTER timeseries root.turbine.d1.s1 ADD ATTRIBUTES attr3=v3, attr4=v4
EG: ALTER timeseries root.turbine.d1.s1 UPSERT TAGS(tag2=newV2, tag3=v3) ATTRIBUTES(attr3=v3, attr4=v4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示所有时间序列语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TIMESERIES
Eg: IoTDB &gt; SHOW TIMESERIES
Note: This statement can only be used in IoTDB Client. If you need to show all timeseries in JDBC, please use \`DataBaseMetadata\` interface.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示特定时间序列语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TIMESERIES &lt;Path&gt;
Eg: IoTDB &gt; SHOW TIMESERIES root.**
Eg: IoTDB &gt; SHOW TIMESERIES root.ln.**
Eg: IoTDB &gt; SHOW TIMESERIES root.ln.*.*.status
Eg: IoTDB &gt; SHOW TIMESERIES root.ln.wf01.wt01.status
Note: The path can be timeseries path or path pattern
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示满足条件的时间序列语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TIMESERIES pathPattern? showWhereClause?
showWhereClause
    : WHERE (property | containsExpression)
    ;
containsExpression
    : name=ID OPERATOR_CONTAINS value=propertyValue
    ;

Eg: show timeseries root.ln.** where unit=&#39;c&#39;
Eg: show timeseries root.ln.** where description contains &#39;test1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分页显示满足条件的时间序列语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TIMESERIES pathPattern? showWhereClause? limitClause?

showWhereClause
    : WHERE (property | containsExpression)
    ;
containsExpression
    : name=ID OPERATOR_CONTAINS value=propertyValue
    ;
limitClause
    : LIMIT INT offsetClause?
    | offsetClause? LIMIT INT
    ;
    
Eg: show timeseries root.ln.** where unit=&#39;c&#39;
Eg: show timeseries root.ln.** where description contains &#39;test1&#39;
Eg: show timeseries root.ln.** where unit=&#39;c&#39; limit 10 offset 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看所有 database 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DATABASES
Eg: IoTDB &gt; SHOW DATABASES
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示特定 database</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DATABASES &lt;PathPattern&gt;
Eg: IoTDB &gt; SHOW DATABASES root.*
Eg: IoTDB &gt; SHOW DATABASES root.**
Eg: IoTDB &gt; SHOW DATABASES root.ln
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示 Merge 状态语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW MERGE INFO
Eg: IoTDB &gt; SHOW MERGE INFO
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示指定路径下时间序列数语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>COUNT TIMESERIES &lt;Path&gt;
Eg: IoTDB &gt; COUNT TIMESERIES root.**
Eg: IoTDB &gt; COUNT TIMESERIES root.ln.**
Eg: IoTDB &gt; COUNT TIMESERIES root.ln.*.*.status
Eg: IoTDB &gt; COUNT TIMESERIES root.ln.wf01.wt01.status
Note: The path can be timeseries path or path pattern.
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>COUNT TIMESERIES &lt;Path&gt; GROUP BY LEVEL=&lt;INTEGER&gt;
Eg: IoTDB &gt; COUNT TIMESERIES root.** GROUP BY LEVEL=1
Eg: IoTDB &gt; COUNT TIMESERIES root.ln.** GROUP BY LEVEL=2
Eg: IoTDB &gt; COUNT TIMESERIES root.ln.wf01.* GROUP BY LEVEL=3
Note: The path can be timeseries path or path pattern.
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示指定路径下特定层级的节点数语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>COUNT NODES &lt;Path&gt; LEVEL=&lt;INTEGER&gt;
Eg: IoTDB &gt; COUNT NODES root.** LEVEL=2
Eg: IoTDB &gt; COUNT NODES root.ln.** LEVEL=2
Eg: IoTDB &gt; COUNT NODES root.ln.*.* LEVEL=3
Eg: IoTDB &gt; COUNT NODES root.ln.wf01.* LEVEL=3
Note: The path can be timeseries path or path pattern.
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示所有设备语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DEVICES (WITH DATABASE)? limitClause? 
Eg: IoTDB &gt; SHOW DEVICES
Eg: IoTDB &gt; SHOW DEVICES WITH DATABASE
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示特定设备语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DEVICES &lt;PathPattern&gt; (WITH DATABASE)? limitClause?
Eg: IoTDB &gt; SHOW DEVICES root.**
Eg: IoTDB &gt; SHOW DEVICES root.ln.*
Eg: IoTDB &gt; SHOW DEVICES root.*.wf01
Eg: IoTDB &gt; SHOW DEVICES root.ln.* WITH DATABASE
Eg: IoTDB &gt; SHOW DEVICES root.*.wf01 WITH DATABASE
Note: The path can be path pattern.
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示 ROOT 节点的子节点名称语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CHILD PATHS
Eg: IoTDB &gt; SHOW CHILD PATHS
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示子节点名称语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CHILD PATHS &lt;PathPattern&gt;
Eg: IoTDB &gt; SHOW CHILD PATHS root
Eg: IoTDB &gt; SHOW CHILD PATHS root.ln
Eg: IoTDB &gt; SHOW CHILD PATHS root.*.wf01
Eg: IoTDB &gt; SHOW CHILD PATHS root.ln.wf*
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据管理语句" tabindex="-1"><a class="header-anchor" href="#数据管理语句" aria-hidden="true">#</a> 数据管理语句</h3><ul><li>插入记录语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INSERT INTO &lt;PrefixPath&gt; LPAREN TIMESTAMP COMMA &lt;Sensor&gt; [COMMA &lt;Sensor&gt;]* RPAREN VALUES LPAREN &lt;TimeValue&gt;, &lt;PointValue&gt; [COMMA &lt;PointValue&gt;]* RPAREN
Sensor : Identifier
Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)
Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) VALUES(NOW(), false)
Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,temperature) VALUES(2017-11-01T00:17:00.000+08:00,24.22028)
Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) VALUES (1509466680000,false,20.060787)
Eg: IoTDB &gt; INSERT INTO root.sg.d1(timestamp,(s1,s2),(s3,s4)) VALUES (1509466680000,(1.0,2),(NULL,4))
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
Note: The order of Sensor and PointValue need one-to-one correspondence
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除记录语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE FROM &lt;PathPattern&gt; [COMMA &lt;PathPattern&gt;]* [WHERE &lt;WhereClause&gt;]?
WhereClause : &lt;Condition&gt; [(AND) &lt;Condition&gt;]*
Condition  : &lt;TimeExpr&gt; [(AND) &lt;TimeExpr&gt;]*
TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)
Eg: DELETE FROM root.ln.wf01.wt01.temperature WHERE time &gt; 2016-01-05T00:15:00+08:00 and time &lt; 2017-11-1T00:05:00+08:00
Eg: DELETE FROM root.ln.wf01.wt01.status, root.ln.wf01.wt01.temperature WHERE time &lt; NOW()
Eg: DELETE FROM root.ln.wf01.wt01.* WHERE time &gt;= 1509466140000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>选择记录语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
SelectClause : &lt;SelectPath&gt; (COMMA &lt;SelectPath&gt;)*
SelectPath : &lt;FUNCTION&gt; LPAREN &lt;Path&gt; RPAREN | &lt;Path&gt;
FUNCTION : ‘COUNT’ , ‘MIN_TIME’, ‘MAX_TIME’, ‘MIN_VALUE’, ‘MAX_VALUE’
FromClause : &lt;PrefixPath&gt; (COMMA &lt;PrefixPath&gt;)?
WhereClause : &lt;Condition&gt; [(AND | OR) &lt;Condition&gt;]*
Condition  : &lt;Expression&gt; [(AND | OR) &lt;Expression&gt;]*
Expression : [NOT | !]? &lt;TimeExpr&gt; | [NOT | !]? &lt;SensorExpr&gt;
TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)
RelativeTimeDurationUnit = Integer (&#39;Y&#39;|&#39;MO&#39;|&#39;W&#39;|&#39;D&#39;|&#39;H&#39;|&#39;M&#39;|&#39;S&#39;|&#39;MS&#39;|&#39;US&#39;|&#39;NS&#39;)
RelativeTime : (now() | &lt;TimeValue&gt;) [(+|-) RelativeTimeDurationUnit]+
SensorExpr : (&lt;Timeseries&gt; | &lt;Path&gt;) PrecedenceEqualOperator &lt;PointValue&gt;
Eg: IoTDB &gt; SELECT status, temperature FROM root.ln.wf01.wt01 WHERE temperature &lt; 24 and time &gt; 2017-11-01 00:13:00
Eg. IoTDB &gt; SELECT ** FROM root
Eg. IoTDB &gt; SELECT * FROM root.**
Eg. IoTDB &gt; SELECT * FROM root.** where time &gt; now() - 5m
Eg. IoTDB &gt; SELECT * FROM root.ln.*.wf*
Eg. IoTDB &gt; SELECT COUNT(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 25
Eg. IoTDB &gt; SELECT MIN_TIME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 25
Eg. IoTDB &gt; SELECT MAX_TIME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &gt; 24
Eg. IoTDB &gt; SELECT MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &gt; 23
Eg. IoTDB &gt; SELECT MAX_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 25
Eg. IoTDB &gt; SELECT COUNT(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 25 GROUP BY LEVEL=1
Note: the statement needs to satisfy this constraint: &lt;Path&gt;(SelectClause) + &lt;PrefixPath&gt;(FromClause) = &lt;Timeseries&gt;
Note: If the &lt;SensorExpr&gt;(WhereClause) is started with &lt;Path&gt; and not with ROOT, the statement needs to satisfy this constraint: &lt;PrefixPath&gt;(FromClause) + &lt;Path&gt;(SensorExpr) = &lt;Timeseries&gt;
Note: In Version 0.7.0, if &lt;WhereClause&gt; includes \`OR\`, time filter can not be used.
Note: There must be a space on both sides of the plus and minus operator appearing in the time expression 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Group By 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt; GROUP BY &lt;GroupByTimeClause&gt;
SelectClause : &lt;Function&gt; [COMMA &lt; Function &gt;]*
Function : &lt;AggregationFunction&gt; LPAREN &lt;Path&gt; RPAREN
FromClause : &lt;PrefixPath&gt;
WhereClause : &lt;Condition&gt; [(AND | OR) &lt;Condition&gt;]*
Condition  : &lt;Expression&gt; [(AND | OR) &lt;Expression&gt;]*
Expression : [NOT | !]? &lt;TimeExpr&gt; | [NOT | !]? &lt;SensorExpr&gt;
TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)
RelativeTimeDurationUnit = Integer (&#39;Y&#39;|&#39;MO&#39;|&#39;W&#39;|&#39;D&#39;|&#39;H&#39;|&#39;M&#39;|&#39;S&#39;|&#39;MS&#39;|&#39;US&#39;|&#39;NS&#39;)
RelativeTime : (now() | &lt;TimeValue&gt;) [(+|-) RelativeTimeDurationUnit]+
SensorExpr : (&lt;Timeseries&gt; | &lt;Path&gt;) PrecedenceEqualOperator &lt;PointValue&gt;
GroupByTimeClause : LPAREN &lt;TimeInterval&gt; COMMA &lt;TimeUnit&gt; (COMMA &lt;TimeUnit&gt;)? RPAREN
TimeInterval: LSBRACKET &lt;TimeValue&gt; COMMA &lt;TimeValue&gt; RRBRACKET | LRBRACKET &lt;TimeValue&gt; COMMA &lt;TimeValue&gt; RSBRACKET
TimeUnit : Integer &lt;DurationUnit&gt;
DurationUnit : &quot;ms&quot; | &quot;s&quot; | &quot;m&quot; | &quot;h&quot; | &quot;d&quot; | &quot;w&quot; | &quot;mo&quot;
Eg: SELECT COUNT(status), COUNT(temperature) FROM root.ln.wf01.wt01 where temperature &lt; 24 GROUP BY([1509465720000, 1509466380000), 5m)
Eg: SELECT COUNT(status), COUNT(temperature) FROM root.ln.wf01.wt01 where temperature &lt; 24 GROUP BY((1509465720000, 1509466380000], 5m)
Eg. SELECT COUNT (status), MAX_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE time &lt; 1509466500000 GROUP BY([1509465720000, 1509466380000), 5m, 10m)
Eg. SELECT MIN_TIME(status), MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE temperature &lt; 25 GROUP BY ([1509466140000, 1509466380000), 3m, 5ms)
Eg. SELECT MIN_TIME(status), MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE temperature &lt; 25 GROUP BY ((1509466140000, 1509466380000], 3m, 5ms)
Eg. SELECT MIN_TIME(status), MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE temperature &lt; 25 GROUP BY ((1509466140000, 1509466380000], 1mo)
Eg. SELECT MIN_TIME(status), MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE temperature &lt; 25 GROUP BY ((1509466140000, 1509466380000], 1mo, 1mo)
Eg. SELECT MIN_TIME(status), MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE temperature &lt; 25 GROUP BY ((1509466140000, 1509466380000], 1mo, 2mo)
Note: the statement needs to satisfy this constraint: &lt;Path&gt;(SelectClause) + &lt;PrefixPath&gt;(FromClause) = &lt;Timeseries&gt;
Note: If the &lt;SensorExpr&gt;(WhereClause) is started with &lt;Path&gt; and not with ROOT, the statement needs to satisfy this constraint: &lt;PrefixPath&gt;(FromClause) + &lt;Path&gt;(SensorExpr) = &lt;Timeseries&gt;
Note: &lt;TimeValue&gt;(TimeInterval) needs to be greater than 0
Note: First &lt;TimeValue&gt;(TimeInterval) in needs to be smaller than second &lt;TimeValue&gt;(TimeInterval)
Note: &lt;TimeUnit&gt; needs to be greater than 0
Note: Third &lt;TimeUnit&gt; if set shouldn&#39;t be smaller than second &lt;TimeUnit&gt;
Note: If the second &lt;DurationUnit&gt; is &quot;mo&quot;, the third &lt;DurationUnit&gt; need to be in month
Note: If the third &lt;DurationUnit&gt; is &quot;mo&quot;, the second &lt;DurationUnit&gt; can be in any unit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Fill 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE &lt;WhereClause&gt; FILL &lt;FillClause&gt;
SelectClause : &lt;Path&gt; [COMMA &lt;Path&gt;]*
FromClause : &lt; PrefixPath &gt; [COMMA &lt; PrefixPath &gt;]*
WhereClause : &lt;WhereExpression&gt;
WhereExpression : TIME EQUAL &lt;TimeValue&gt;
FillClause : LPAREN &lt;TypeClause&gt; [COMMA &lt;TypeClause&gt;]* RPAREN
TypeClause : &lt;Int32Clause&gt; | &lt;Int64Clause&gt; | &lt;FloatClause&gt; | &lt;DoubleClause&gt; | &lt;BoolClause&gt; | &lt;TextClause&gt;
Int32Clause: INT32 LBRACKET (&lt;LinearClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
Int64Clause: INT64 LBRACKET (&lt;LinearClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
FloatClause: FLOAT LBRACKET (&lt;LinearClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
DoubleClause: DOUBLE LBRACKET (&lt;LinearClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
BoolClause: BOOLEAN LBRACKET (&lt;LinearClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
TextClause: TEXT LBRACKET (&lt;LinearClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
PreviousClause : PREVIOUS [COMMA &lt;ValidPreviousTime&gt;]?
LinearClause : LINEAR [COMMA &lt;ValidPreviousTime&gt; COMMA &lt;ValidBehindTime&gt;]?
ValidPreviousTime, ValidBehindTime: &lt;TimeUnit&gt;
TimeUnit : Integer &lt;DurationUnit&gt;
DurationUnit : &quot;ms&quot; | &quot;s&quot; | &quot;m&quot; | &quot;h&quot; | &quot;d&quot; | &quot;w&quot;
Eg: SELECT temperature FROM root.ln.wf01.wt01 WHERE time = 2017-11-01T16:37:50.000 FILL(float[previous, 1m])
Eg: SELECT temperature,status FROM root.ln.wf01.wt01 WHERE time = 2017-11-01T16:37:50.000 FILL (float[linear, 1m, 1m], boolean[previous, 1m])
Eg: SELECT temperature,status,hardware FROM root.ln.wf01.wt01 WHERE time = 2017-11-01T16:37:50.000 FILL (float[linear, 1m, 1m], boolean[previous, 1m], text[previous])
Eg: SELECT temperature,status,hardware FROM root.ln.wf01.wt01 WHERE time = 2017-11-01T16:37:50.000 FILL (float[linear], boolean[previous, 1m], text[previous])
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt;(FromClause) + &lt;Path&gt;(SelectClause) = &lt;Timeseries&gt;
Note: Integer in &lt;TimeUnit&gt; needs to be greater than 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Group By Fill 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># time 区间规则为：只能为左开右闭或左闭右开，例如：[20, 100)

SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt; GROUP BY &lt;GroupByClause&gt; (FILL &lt;GROUPBYFillClause&gt;)?
GroupByClause : LPAREN &lt;TimeInterval&gt; COMMA &lt;TimeUnit&gt; RPAREN
GROUPBYFillClause : LPAREN &lt;TypeClause&gt; RPAREN
TypeClause : &lt;AllClause&gt; | &lt;Int32Clause&gt; | &lt;Int64Clause&gt; | &lt;FloatClause&gt; | &lt;DoubleClause&gt; | &lt;BoolClause&gt; | &lt;TextClause&gt; 
AllClause: ALL LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
Int32Clause: INT32 LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
Int64Clause: INT64 LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
FloatClause: FLOAT LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
DoubleClause: DOUBLE LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
BoolClause: BOOLEAN LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
TextClause: TEXT LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET
PreviousClause : PREVIOUS
PreviousUntilLastClause : PREVIOUSUNTILLAST
Eg: SELECT last_value(temperature) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (float[PREVIOUS])
Eg: SELECT last_value(temperature) FROM root.ln.wf01.wt01 GROUP BY((15, 100], 5m) FILL (float[PREVIOUS])
Eg: SELECT last_value(power) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (int32[PREVIOUSUNTILLAST])
Eg: SELECT last_value(power) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (int32[PREVIOUSUNTILLAST, 5m])
Eg: SELECT last_value(temperature), last_value(power) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (ALL[PREVIOUS])
Eg: SELECT last_value(temperature), last_value(power) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (ALL[PREVIOUS, 5m])
Note: In group by fill, sliding step is not supported in group by clause
Note: Now, only last_value aggregation function is supported in group by fill.
Note: Linear fill is not supported in group by fill.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Order by time 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt; GROUP BY &lt;GroupByClause&gt; (FILL &lt;GROUPBYFillClause&gt;)? orderByTimeClause?
orderByTimeClause: order by time (asc | desc)?

Eg: SELECT last_value(temperature) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (float[PREVIOUS]) order by time desc
Eg: SELECT * from root.** order by time desc
Eg: SELECT * from root.** order by time desc align by device 
Eg: SELECT * from root.** order by time desc disable align
Eg: SELECT last * from root order by time desc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Limit &amp; SLimit 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;] [&lt;LIMITClause&gt;] [&lt;SLIMITClause&gt;]
SelectClause : [&lt;Path&gt; | Function]+
Function : &lt;AggregationFunction&gt; LPAREN &lt;Path&gt; RPAREN
FromClause : &lt;Path&gt;
WhereClause : &lt;Condition&gt; [(AND | OR) &lt;Condition&gt;]*
Condition : &lt;Expression&gt; [(AND | OR) &lt;Expression&gt;]*
Expression: [NOT|!]?&lt;TimeExpr&gt; | [NOT|!]?&lt;SensorExpr&gt;
TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)
RelativeTimeDurationUnit = Integer (&#39;Y&#39;|&#39;MO&#39;|&#39;W&#39;|&#39;D&#39;|&#39;H&#39;|&#39;M&#39;|&#39;S&#39;|&#39;MS&#39;|&#39;US&#39;|&#39;NS&#39;)
RelativeTime : (now() | &lt;TimeValue&gt;) [(+|-) RelativeTimeDurationUnit]+
SensorExpr : (&lt;Timeseries&gt;|&lt;Path&gt;) PrecedenceEqualOperator &lt;PointValue&gt;
LIMITClause : LIMIT &lt;N&gt; [OFFSETClause]?
N : Integer
OFFSETClause : OFFSET &lt;OFFSETValue&gt;
OFFSETValue : Integer
SLIMITClause : SLIMIT &lt;SN&gt; [SOFFSETClause]?
SN : Integer
SOFFSETClause : SOFFSET &lt;SOFFSETValue&gt;
SOFFSETValue : Integer
Eg: IoTDB &gt; SELECT status, temperature FROM root.ln.wf01.wt01 WHERE temperature &lt; 24 and time &gt; 2017-11-01 00:13:00 LIMIT 3 OFFSET 2
Eg. IoTDB &gt; SELECT COUNT (status), MAX_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE time &lt; 1509466500000 GROUP BY([1509465720000, 1509466380000), 5m) LIMIT 3
Note: N, OFFSETValue, SN and SOFFSETValue must be greater than 0.
Note: The order of &lt;LIMITClause&gt; and &lt;SLIMITClause&gt; does not affect the grammatical correctness.
Note: &lt;FillClause&gt; can not use &lt;LIMITClause&gt; but not &lt;SLIMITClause&gt;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Align by device 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>AlignbyDeviceClause : ALIGN BY DEVICE

规则：
1. 大小写不敏感。
正例：select * from root.sg1.** align by device
正例：select * from root.sg1.** ALIGN BY DEVICE

2. AlignbyDeviceClause 只能放在末尾。
正例：select * from root.sg1.** where time &gt; 10 align by device  
错例：select * from root.sg1.** align by device where time &gt; 10  

3. Select 子句中的 path 只能是单层，或者通配符，不允许有 path 分隔符&quot;.&quot;。
正例：select s0,s1 from root.sg1.* align by device  
正例：select s0,s1 from root.sg1.d0, root.sg1.d1 align by device  
正例：select * from root.sg1.* align by device  
正例：select * from root.** align by device  
正例：select s0,s1,* from root.*.* align by device  
错例：select d0.s1, d0.s2, d1.s0 from root.sg1 align by device  
错例：select *.s0, *.s1 from root.* align by device  
错例：select *.*.* from root align by device

4. 相同 measurement 的各设备的数据类型必须都相同，

正例：select s0 from root.sg1.d0,root.sg1.d1 align by device   
root.sg1.d0.s0 and root.sg1.d1.s0 are both INT32.  

正例：select count(s0) from root.sg1.d0,root.sg1.d1 align by device   
count(root.sg1.d0.s0) and count(root.sg1.d1.s0) are both INT64.  

错例：select s0 from root.sg1.d0, root.sg2.d3 align by device  
root.sg1.d0.s0 is INT32 while root.sg2.d3.s0 is FLOAT. 

5. 结果集的展示规则：对于 select 中给出的列，不论是否有数据（是否被注册），均会被显示。此外，select 子句中还支持常数列（例如，&#39;a&#39;, &#39;123&#39;等等）。
例如，&quot;select s0,s1,s2,&#39;abc&#39;,s1,s2 from root.sg.d0, root.sg.d1, root.sg.d2 align by device&quot;. 假设只有下述三列有数据：
- root.sg.d0.s0
- root.sg.d0.s1
- root.sg.d1.s0

结果集形如：

| Time | Device   | s0 | s1 |  s2  | &#39;abc&#39; | s1 |  s2  |
| ---  | ---      | ---| ---| null | &#39;abc&#39; | ---| null |
|  1   |root.sg.d0| 20 | 2.5| null | &#39;abc&#39; | 2.5| null |
|  2   |root.sg.d0| 23 | 3.1| null | &#39;abc&#39; | 3.1| null |
| ...  | ...      | ...| ...| null | &#39;abc&#39; | ...| null |
|  1   |root.sg.d1| 12 |null| null | &#39;abc&#39; |null| null |
|  2   |root.sg.d1| 19 |null| null | &#39;abc&#39; |null| null |
| ...  | ...      | ...| ...| null | &#39;abc&#39; | ...| null |

注意注意 设备&#39;root.sg.d1&#39;的&#39;s0&#39;的值全为 null

6. 在 From 中重复写设备名字或者设备前缀是没有任何作用的。
例如，&quot;select s0,s1 from root.sg.d0,root.sg.d0,root.sg.d1 align by device&quot; 等于 &quot;select s0,s1 from root.sg.d0,root.sg.d1 align by device&quot;.  
例如。&quot;select s0,s1 from root.sg.*,root.sg.d0 align by device&quot; 等于 &quot;select s0,s1 from root.sg.* align by device&quot;.  

7. 在 Select 子句中重复写列名是生效的。例如，&quot;select s0,s0,s1 from root.sg.* align by device&quot; 不等于 &quot;select s0,s1 from root.sg.* align by device&quot;.

8. 在 Where 子句中时间过滤条件和值过滤条件均可以使用，值过滤条件可以使用叶子节点 path，或以 root 开头的整个 path，不允许存在通配符。例如，
- select * from root.sg.* where time = 1 align by device
- select * from root.sg.* where s0 &lt; 100 align by device
- select * from root.sg.* where time &lt; 20 AND s0 &gt; 50 align by device
- select * from root.sg.d0 where root.sg.d0.s0 = 15 align by device

9. 更多正例：
   - select * from root.vehicle.* align by device
   - select s0,s0,s1 from root.vehicle.* align by device
   - select s0,s1 from root.vehicle.* limit 10 offset 1 align by device
   - select * from root.vehicle.* slimit 10 soffset 2 align by device
   - select * from root.vehicle.* where time &gt; 10 align by device
   - select * from root.vehicle.* where time &lt; 10 AND s0 &gt; 25 align by device
   - select * from root.vehicle.* where root.vehicle.d0.s0&gt;0 align by device
   - select count(*) from root.vehicle.* align by device
   - select sum(*) from root.vehicle.* GROUP BY (20ms,0,[2,50]) align by device
   - select * from root.vehicle.* where time = 3 Fill(int32[previous, 5ms]) align by device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Disable align 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>规则：
1. 大小写均可。
正例：select * from root.sg1.* disable align  
正例：select * from root.sg1.* DISABLE ALIGN  

2. Disable Align 只能用于查询语句句尾。
正例：select * from root.sg1.* where time &gt; 10 disable align 
错例：select * from root.sg1.* disable align where time &gt; 10 

3. Disable Align 不能用于聚合查询、Fill 语句、Group by 或 Group by device 语句，但可用于 Limit 语句。
正例：select * from root.sg1.* limit 3 offset 2 disable align
正例：select * from root.sg1.* slimit 3 soffset 2 disable align
错例：select count(s0),count(s1) from root.sg1.d1 disable align
错例：select * from root.vehicle.* where root.vehicle.d0.s0&gt;0 disable align
错例：select * from root.vehicle.* align by device disable align

4. 结果显示若无数据显示为空白。

查询结果样式如下表：
| Time | root.sg.d0.s1 | Time | root.sg.d0.s2 | Time | root.sg.d1.s1 |
| ---  | ---           | ---  | ---           | ---  | ---           |
|  1   | 100           | 20   | 300           | 400  | 600           |
|  2   | 300           | 40   | 800           | 700  | 900           |
|  4   | 500           |      |               | 800  | 1000          |
|      |               |      |               | 900  | 8000          |

5. 一些正确使用样例：
   - select * from root.vehicle.* disable align
   - select s0,s0,s1 from root.vehicle.* disable align
   - select s0,s1 from root.vehicle.* limit 10 offset 1 disable align
   - select * from root.vehicle.* slimit 10 soffset 2 disable align
   - select * from root.vehicle.* where time &gt; 10 disable align

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Last 语句</li></ul><p>Last 语句返回所要查询时间序列的最近时间戳的一条数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT LAST &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE &lt;WhereClause&gt;
Select Clause : &lt;Path&gt; [COMMA &lt;Path&gt;]*
FromClause : &lt; PrefixPath &gt; [COMMA &lt; PrefixPath &gt;]*
WhereClause : &lt;TimeExpr&gt; [(AND | OR) &lt;TimeExpr&gt;]*
TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)

Eg. SELECT LAST s1 FROM root.sg.d1
Eg. SELECT LAST s1, s2 FROM root.sg.d1
Eg. SELECT LAST s1 FROM root.sg.d1, root.sg.d2
Eg. SELECT LAST s1 FROM root.sg.d1 where time &gt; 100
Eg. SELECT LAST s1, s2 FROM root.sg.d1 where time &gt;= 500

规则：
1. 需要满足 PrefixPath.Path 为一条完整的时间序列，即 &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;

2. 当前 SELECT LAST 语句只支持包含&#39;&gt;&#39;或&#39;&gt;=&#39;的时间过滤条件

3. 结果集以四列的表格的固定形式返回。
例如 &quot;select last s1, s2 from root.sg.d1, root.sg.d2&quot;, 结果集返回如下：

| Time |    timeseries | value | dataType |
| ---  | ------------- | ----- | -------- |
|  5   | root.sg.d1.s1 |   100 |    INT32 |
|  2   | root.sg.d1.s2 |   400 |    INT32 |
|  4   | root.sg.d2.s1 |   250 |    INT32 |
|  9   | root.sg.d2.s2 |   600 |    INT32 |

4. 注意 LAST 语句不支持与&quot;disable align&quot;关键词一起使用。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>As 语句</li></ul><p>As 语句为 SELECT 语句中出现的时间序列规定一个别名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在每个查询中都可以使用 As 语句来规定时间序列的别名，但是对于通配符的使用有一定限制。

1. 原始数据查询：
select s1 as speed, s2 as temperature from root.sg.d1

结果集将显示为：
| Time | speed | temperature |
|  ... |  ...  |     ....    |

2. 聚合查询
select count(s1) as s1_num, max_value(s2) as s2_max from root.sg.d1

3. 降频聚合查询
select count(s1) as s1_num from root.sg.d1 group by ([100,500), 80ms)

4. 按设备对齐查询
select s1 as speed, s2 as temperature from root.sg.d1 align by device

select count(s1) as s1_num, count(s2), count(s3) as s3_num from root.sg.d2 align by device

5. 最新数据查询
select last s1 as speed, s2 from root.sg.d1

规则：
1. 除按设备对齐查询外，每一个 AS 语句必须唯一对应一个时间序列。

E.g. select s1 as temperature from root.sg.*

此时如果 database root.sg.* 中含有多个设备，则会抛出异常。

2. 按设备对齐查询中，每个 AS 语句对应的前缀路径可以含多个设备，而后缀路径不能含多个传感器。

E.g. select s1 as temperature from root.sg.*

这种情况即使有多个设备，也可以正常显示。

E.g. select * as temperature from root.sg.d1

这种情况如果 * 匹配多个传感器，则无法正常显示。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Regexp 语句</li></ul><p>Regexp语句仅支持数据类型为 TEXT的列进行过滤，传入的过滤条件为 Java 标准库风格的正则表达式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt;
Select Clause : &lt;Path&gt; [COMMA &lt;Path&gt;]*
FromClause : &lt; PrefixPath &gt; [COMMA &lt; PrefixPath &gt;]*
WhereClause : andExpression (OPERATOR_OR andExpression)*
andExpression : predicate (OPERATOR_AND predicate)*
predicate : (suffixPath | fullPath) REGEXP regularExpression
regularExpression: Java standard regularexpression, like &#39;^[a-z][0-9]$&#39;, [details](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html)

Eg. select s1 from root.sg.d1 where s1 regexp &#39;^[0-9]*$&#39;
Eg. select s1, s2 FROM root.sg.d1 where s1 regexp &#39;^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$&#39; and s2 regexp &#39;^\\d{15}|\\d{18}$&#39;
Eg. select * from root.sg.d1 where s1 regexp &#39;^[a-zA-Z]\\w{5,17}$&#39;
Eg. select * from root.sg.d1 where s1 regexp &#39;^\\d{4}-\\d{1,2}-\\d{1,2}&#39; and time &gt; 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Like 语句</li></ul><p>Like语句的用法和mysql相同, 但是仅支持对数据类型为 TEXT的列进行过滤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt;
Select Clause : &lt;Path&gt; [COMMA &lt;Path&gt;]*
FromClause : &lt; PrefixPath &gt; [COMMA &lt; PrefixPath &gt;]*
WhereClause : andExpression (OPERATOR_OR andExpression)*
andExpression : predicate (OPERATOR_AND predicate)*
predicate : (suffixPath | fullPath) LIKE likeExpression
likeExpression : string that may contains &quot;%&quot; or &quot;_&quot;, while &quot;%value&quot; means a string that ends with the value,  &quot;value%&quot; means a string starts with the value, &quot;%value%&quot; means string that contains values, and &quot;_&quot; represents any character.

Eg. select s1 from root.sg.d1 where s1 like &#39;abc&#39;
Eg. select s1, s2 from root.sg.d1 where s1 like &#39;abc%&#39;
Eg. select * from root.sg.d1 where s1 like &#39;abc_&#39;
Eg. select * from root.sg.d1 where s1 like &#39;abc\\%&#39;
这种情况，&#39;\\%&#39;表示&#39;%&#39;将会被转义
结果集将显示为：
| Time | Path         | Value |
| ---  | ------------ | ----- |
|  200 | root.sg.d1.s1| abc%  |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库管理语句" tabindex="-1"><a class="header-anchor" href="#数据库管理语句" aria-hidden="true">#</a> 数据库管理语句</h3><ul><li>创建用户</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE USER &lt;userName&gt; &lt;password&gt;;  
userName:=identifier  
password:=string
Eg: IoTDB &gt; CREATE USER thulab &#39;passwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除用户</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP USER &lt;userName&gt;;  
userName:=identifier
Eg: IoTDB &gt; DROP USER xiaoming;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE ROLE &lt;roleName&gt;;  
roleName:=identifie
Eg: IoTDB &gt; CREATE ROLE admin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP ROLE &lt;roleName&gt;;  
roleName:=identifier
Eg: IoTDB &gt; DROP ROLE admin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予用户权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
userName:=identifier  
nodeName:=identifier (DOT identifier)*  
privileges:= string (COMMA string)*
Eg: IoTDB &gt; GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予角色权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
privileges:= string (COMMA string)*  
roleName:=identifier  
nodeName:=identifier (DOT identifier)*
Eg: IoTDB &gt; GRANT ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予用户角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT &lt;roleName&gt; TO &lt;userName&gt;;  
roleName:=identifier  
userName:=identifier
Eg: IoTDB &gt; GRANT temprole TO tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销用户权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;   
privileges:= string (COMMA string)*  
userName:=identifier  
nodeName:=identifier (DOT identifier)*
Eg: IoTDB &gt; REVOKE USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销角色权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
privileges:= string (COMMA string)*  
roleName:= identifier  
nodeName:=identifier (DOT identifier)*
Eg: IoTDB &gt; REVOKE ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销用户角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE &lt;roleName&gt; FROM &lt;userName&gt;;
roleName:=identifier
userName:=identifier
Eg: IoTDB &gt; REVOKE temprole FROM tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出用户</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST USER
Eg: IoTDB &gt; LIST USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ROLE
Eg: IoTDB &gt; LIST ROLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST PRIVILEGES USER  &lt;username&gt; ON &lt;path&gt;;    
username:=identifier    
path=‘root’ (DOT identifier)*
Eg: IoTDB &gt; LIST PRIVILEGES USER sgcc_wirte_user ON root.sgcc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ROLE PRIVILEGES &lt;roleName&gt;
roleName:=identifier
Eg: IoTDB &gt; LIST ROLE PRIVILEGES actor;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色在具体路径上的权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST PRIVILEGES ROLE &lt;roleName&gt; ON &lt;path&gt;;    
roleName:=identifier  
path=‘root’ (DOT identifier)*
Eg: IoTDB &gt; LIST PRIVILEGES ROLE wirte_role ON root.sgcc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出用户权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST USER PRIVILEGES &lt;username&gt; ;   
username:=identifier  
Eg: IoTDB &gt; LIST USER PRIVILEGES tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出用户角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ALL ROLE OF USER &lt;username&gt; ;  
username:=identifier
Eg: IoTDB &gt; LIST ALL ROLE OF USER tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色用户</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ALL USER OF ROLE &lt;roleName&gt;;
roleName:=identifier
Eg: IoTDB &gt; LIST ALL USER OF ROLE roleuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更新密码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;
roleName:=identifier
password:=string
Eg: IoTDB &gt; ALTER USER tempuser SET PASSWORD &#39;newpwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3><ul><li>COUNT</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT COUNT(Path) (COMMA COUNT(Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT COUNT(status), COUNT(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>FIRST_VALUE<br> 原有的 <code>FIRST</code> 方法在 <code>v0.10.0</code> 版本更名为 <code>FIRST_VALUE</code>。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT FIRST_VALUE (Path) (COMMA FIRST_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT FIRST_VALUE (status), FIRST_VALUE (temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>LAST_VALUE</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT LAST_VALUE (Path) (COMMA LAST_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT LAST_VALUE (status), LAST_VALUE (temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MAX_TIME</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT MAX_TIME (Path) (COMMA MAX_TIME (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT MAX_TIME(status), MAX_TIME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MAX_VALUE</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT MAX_VALUE (Path) (COMMA MAX_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT MAX_VALUE(status), MAX_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>EXTREME<br> 极值：具有最大绝对值的值（正值优先）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT EXTREME (Path) (COMMA EXT (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT EXTREME(status), EXTREME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AVG<br> 原有的 <code>MEAN</code> 方法在 <code>v0.9.0</code> 版本更名为 <code>AVG</code>。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT AVG (Path) (COMMA AVG (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT AVG (temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MIN_TIME</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT MIN_TIME (Path) (COMMA MIN_TIME (Path))*FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT MIN_TIME(status), MIN_TIME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MIN_VALUE</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT MIN_VALUE (Path) (COMMA MIN_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT MIN_VALUE(status),MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NOW</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NOW()
Eg. INSERT INTO root.ln.wf01.wt01(timestamp,status) VALUES(NOW(), false) 
Eg. DELETE FROM root.ln.wf01.wt01.status, root.ln.wf01.wt01.temperature WHERE time &lt; NOW()
Eg. SELECT * FROM root.** WHERE time &lt; NOW()
Eg. SELECT COUNT(temperature) FROM root.ln.wf01.wt01 WHERE time &lt; NOW()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>SUM</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT SUM(Path) (COMMA SUM(Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT SUM(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ttl" tabindex="-1"><a class="header-anchor" href="#ttl" aria-hidden="true">#</a> TTL</h3><p>IoTDB 支持对 database 级别设置数据存活时间（TTL），这使得 IoTDB 可以定期、自动地删除一定时间之前的数据。合理使用 TTL<br> 可以帮助您控制 IoTDB 占用的总磁盘空间以避免出现磁盘写满等异常。并且，随着文件数量的增多，查询性能往往随之下降，<br> 内存占用也会有所提高。及时地删除一些较老的文件有助于使查询性能维持在一个较高的水平和减少内存资源的占用。<br> IoTDB 中的 TTL 操作可以由以下的语句进行实现：</p><ul><li>设置 TTL</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SET TTL TO StorageGroupName TTLTime
Eg. SET TTL TO root.group1 3600000
这个例子展示了如何使得 root.group1 这个 database 只保留近一个小时的数据，一个小时前的数据会被删除或者进入不可见状态。
注意：TTLTime 应是毫秒时间戳。一旦 TTL 被设置，超过 TTL 时间范围的写入将被拒绝。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>取消 TTL</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UNSET TTL TO StorageGroupName
Eg. UNSET TTL TO root.group1
这个例子展示了如何取消 database root.group1 的 TTL，这将使得该 database 接受任意时刻的数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示 TTL</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW ALL TTL
SHOW TTL ON StorageGroupNames
Eg.1 SHOW ALL TTL
这个例子会给出所有 database 的 TTL。
Eg.2 SHOW TTL ON root.group1,root.group2,root.group3
这个例子会显示指定的三个 database 的 TTL。
注意：没有设置 TTL 的 database 的 TTL 将显示为 null。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：当您对某个 database 设置 TTL 的时候，超过 TTL 范围的数据将会立即不可见。但由于数据文件可能混合包含处在 TTL 范围内<br> 与范围外的数据，同时数据文件可能正在接受查询，数据文件的物理删除不会立即进行。如果你在此时取消或者调大 TTL，<br> 一部分之前不可见的数据可能重新可见，而那些已经被物理删除的数据则将永久丢失。也就是说，TTL 操作不会原子性地删除<br> 对应的数据。因此我们不推荐您频繁修改 TTL，除非您能接受该操作带来的一定程度的不可预知性。</p><ul><li>删除时间分区 （实验性功能）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE PARTITION StorageGroupName INT(COMMA INT)*
Eg DELETE PARTITION root.sg1 0,1,2
该例子将删除 database root.sg1 的前三个时间分区
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>partitionId 可以通过查看数据文件夹获取，或者是计算 <code>timestamp / partitionInterval</code>得到。</p><h3 id="中止查询" tabindex="-1"><a class="header-anchor" href="#中止查询" aria-hidden="true">#</a> 中止查询</h3><ul><li>显示正在执行的查询列表</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW QUERY PROCESSLIST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>中止查询</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>KILL QUERY INT?
E.g. KILL QUERY
E.g. KILL QUERY 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置系统为只读-可写入模式" tabindex="-1"><a class="header-anchor" href="#设置系统为只读-可写入模式" aria-hidden="true">#</a> 设置系统为只读/可写入模式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SET SYSTEM TO READONLY
IoTDB&gt; SET SYSTEM TO WRITABLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标识符列表" tabindex="-1"><a class="header-anchor" href="#标识符列表" aria-hidden="true">#</a> 标识符列表</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>QUOTE := &#39;\\&#39;&#39;;
DOT := &#39;.&#39;;
COLON : &#39;:&#39; ;
COMMA := &#39;,&#39; ;
SEMICOLON := &#39;;&#39; ;
LPAREN := &#39;(&#39; ;
RPAREN := &#39;)&#39; ;
LBRACKET := &#39;[&#39;;
RBRACKET := &#39;]&#39;;
EQUAL := &#39;=&#39; | &#39;==&#39;;
NOTEQUAL := &#39;&lt;&gt;&#39; | &#39;!=&#39;;
LESSTHANOREQUALTO := &#39;&lt;=&#39;;
LESSTHAN := &#39;&lt;&#39;;
GREATERTHANOREQUALTO := &#39;&gt;=&#39;;
GREATERTHAN := &#39;&gt;&#39;;
DIVIDE := &#39;/&#39;;
PLUS := &#39;+&#39;;
MINUS := &#39;-&#39;;
STAR := &#39;*&#39;;
Letter := &#39;a&#39;..&#39;z&#39; | &#39;A&#39;..&#39;Z&#39;;
HexDigit := &#39;a&#39;..&#39;f&#39; | &#39;A&#39;..&#39;F&#39;;
Digit := &#39;0&#39;..&#39;9&#39;;
Boolean := TRUE | FALSE | 0 | 1 (case insensitive)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>StringLiteral := ( &#39;\\&#39;&#39; ( ~(&#39;\\&#39;&#39;) )* &#39;\\&#39;&#39;;
eg. &#39;abc&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Integer := (&#39;-&#39; | &#39;+&#39;)? Digit+;
eg. 123
eg. -222
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Float := (&#39;-&#39; | &#39;+&#39;)? Digit+ DOT Digit+ ((&#39;e&#39; | &#39;E&#39;) (&#39;-&#39; | &#39;+&#39;)? Digit+)?;
eg. 3.1415
eg. 1.2E10
eg. -1.33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Identifier := (Letter | &#39;_&#39;) (Letter | Digit | &#39;_&#39; | MINUS)*;
eg. a123
eg. _abc123

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常量列表" tabindex="-1"><a class="header-anchor" href="#常量列表" aria-hidden="true">#</a> 常量列表</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PointValue : Integer | Float | StringLiteral | Boolean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>TimeValue : Integer | DateTime | ISO8601 | NOW()<br> Note: Integer means timestamp type.</p><p>DateTime :<br> eg. 2016-11-16T16:22:33+08:00<br> eg. 2016-11-16 16:22:33+08:00<br> eg. 2016-11-16T16:22:33.000+08:00<br> eg. 2016-11-16 16:22:33.000+08:00<br> Note: DateTime Type can support several types, see Chapter 3 Datetime section for details.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PrecedenceEqualOperator : EQUAL | NOTEQUAL | LESSTHANOREQUALTO | LESSTHAN | GREATERTHANOREQUALTO | GREATERTHAN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Timeseries : ROOT [DOT &lt;LayerName&gt;]* DOT &lt;SensorName&gt;<br> LayerName : Identifier<br> SensorName : Identifier<br> eg. root.ln.wf01.wt01.status<br> eg. root.sgcc.wf03.wt01.temperature<br> Note: Timeseries must be start with <code>root</code>(case insensitive) and end with sensor name.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PrefixPath : ROOT (DOT &lt;LayerName&gt;)*<br> LayerName : Identifier | STAR<br> eg. root.sgcc<br> eg. root.*</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Path: (ROOT | &lt;LayerName&gt;) (DOT &lt;LayerName&gt;)* 
LayerName: Identifier | STAR
eg. root.ln.wf01.wt01.status
eg. root.*.wf01.wt01.status
eg. root.ln.wf01.wt01.*
eg. *.wt01.*
eg. *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,183);function d(r,u){return i(),n("div",null,[l(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),a])}const o=e(s,[["render",d],["__file","SQL-Reference.html.vue"]]);export{o as default};

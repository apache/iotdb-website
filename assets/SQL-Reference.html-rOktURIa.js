import{_ as e,o as i,c as t,a as n,f as l}from"./app-n-N-QVvk.js";const s={},a=l(`<h1 id="sql-reference" tabindex="-1"><a class="header-anchor" href="#sql-reference" aria-hidden="true">#</a> SQL Reference</h1><p>In this part, we will introduce you IoTDB&#39;s Query Language. IoTDB offers you a SQL-like query language for interacting with IoTDB, the query language can be devided into 4 major parts:</p><ul><li>Schema Statement: statements about schema management are all listed in this section.</li><li>Data Management Statement: statements about data management (such as: data insertion, data query, etc.) are all listed in this section.</li><li>Database Management Statement: statements about database management and authentication are all listed in this section.</li><li>Functions: functions that IoTDB offers are all listed in this section.</li></ul><p>All of these statements are write in IoTDB&#39;s own syntax, for details about the syntax composition, please check the <code>Reference</code> section.</p><h2 id="show-version" tabindex="-1"><a class="header-anchor" href="#show-version" aria-hidden="true">#</a> Show Version</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+
|        version|
+---------------+
|0.13.0-SNAPSHOT|
+---------------+
Total line number = 1
It costs 0.417s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="schema-statement" tabindex="-1"><a class="header-anchor" href="#schema-statement" aria-hidden="true">#</a> Schema Statement</h2><ul><li>Set Storage Group</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SET STORAGE GROUP TO &lt;FullPath&gt;
Eg: IoTDB &gt; SET STORAGE GROUP TO root.ln.wf01.wt01
Note: FullPath can not include wildcard \`*\` or \`**\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete Storage Group</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE STORAGE GROUP &lt;PathPattern&gt; [COMMA &lt;PathPattern&gt;]*
Eg: IoTDB &gt; DELETE STORAGE GROUP root.ln.wf01.wt01
Eg: IoTDB &gt; DELETE STORAGE GROUP root.ln.wf01.wt01, root.ln.wf01.wt02
Eg: IoTDB &gt; DELETE STORAGE GROUP root.ln.wf01.*
Eg: IoTDB &gt; DELETE STORAGE GROUP root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TIMESERIES &lt;FullPath&gt; WITH &lt;AttributeClauses&gt;
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
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, LOSS=SDT, COMPDEV=0.01
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, LOSS=SDT, COMPDEV=0.01, COMPMINTIME=3
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, LOSS=SDT, COMPDEV=0.01, COMPMINTIME=2, COMPMAXTIME=15
Note: Datatype and encoding type must be corresponding. Please check Chapter 3 Encoding Section for details.
Note: When propertyValue is SDT, it is required to set compression deviation COMPDEV, which is the maximum absolute difference between values.
Note: For SDT, values withtin COMPDEV will be discarded.
Note: For SDT, it is optional to set compression minimum COMPMINTIME, which is the minimum time difference between stored values for purpose of noise reduction.
Note: For SDT, it is optional to set compression maximum COMPMAXTIME, which is the maximum time difference between stored values regardless of COMPDEV.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Timeseries Statement (Simplified version, from v0.13)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TIMESERIES &lt;FullPath&gt; &lt;SimplifiedAttributeClauses&gt;
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
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE LOSS=SDT COMPDEV=0.01
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE LOSS=SDT COMPDEV=0.01 COMPMINTIME=3
Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE LOSS=SDT COMPDEV=0.01 COMPMINTIME=2 COMPMAXTIME=15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Aligned Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE ALIGNED TIMESERIES &lt;FullPath&gt; alignedMeasurements
alignedMeasurements
    : LR_BRACKET nodeNameWithoutWildcard attributeClauses
    (COMMA nodeNameWithoutWildcard attributeClauses)+ RR_BRACKET
    ;
Eg: CREATE ALIGNED TIMESERIES root.ln.wf01.GPS(lat FLOAT ENCODING=GORILLA, lon FLOAT ENCODING=GORILLA COMPRESSOR=SNAPPY)
Note: It is not supported to set different compression for a group of aligned timeseries.
Note: It is not currently supported to set an alias, tag, and attribute for aligned timeseries.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Schema Template Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE SCHEMA TEMPLATE &lt;TemplateName&gt; LR_BRACKET &lt;TemplateMeasurementClause&gt; (COMMA plateMeasurementClause&gt;)* RR_BRACKET
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Set Schema Template Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SET SCHEMA TEMPLATE &lt;TemplateName&gt; TO &lt;PrefixPath&gt;
Eg: SET SCHEMA TEMPLATE temp1 TO root.beijing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Timeseries Of Schema Template Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TIMESERIES OF SCHEMA TEMPLATE ON &lt;PrefixPath&gt;
Eg: CREATE TIMESERIES OF SCHEMA TEMPLATE ON root.beijing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Unset Schema Template Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UNSET SCHEMA TEMPLATE &lt;TemplateName&gt; FROM &lt;PrefixPath&gt;
Eg: UNSET SCHEMA TEMPLATE temp1 FROM root.beijing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE TIMESERIES &lt;PathPattern&gt; [COMMA &lt;PathPattern&gt;]*
Eg: IoTDB &gt; DELETE TIMESERIES root.ln.wf01.wt01.status
Eg: IoTDB &gt; DELETE TIMESERIES root.ln.wf01.wt01.status, root.ln.wf01.wt01.temperature
Eg: IoTDB &gt; DELETE TIMESERIES root.ln.wf01.wt01.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Alter Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TIMESERIES fullPath alterClause
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show All Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TIMESERIES
Eg: IoTDB &gt; SHOW TIMESERIES
Note: This statement can only be used in IoTDB Client. If you need to show all timeseries in JDBC, please use \`DataBaseMetadata\` interface.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Specific Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TIMESERIES &lt;Path&gt;
Eg: IoTDB &gt; SHOW TIMESERIES root.**
Eg: IoTDB &gt; SHOW TIMESERIES root.ln.**
Eg: IoTDB &gt; SHOW TIMESERIES root.ln.*.*.status
Eg: IoTDB &gt; SHOW TIMESERIES root.ln.wf01.wt01.status
Note: The path can be timeseries path or path pattern.
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Specific Timeseries Statement with where clause</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TIMESERIES pathPattern? showWhereClause?
showWhereClause
    : WHERE (property | containsExpression)
    ;
containsExpression
    : name=ID OPERATOR_CONTAINS value=propertyValue
    ;

Eg: show timeseries root.ln.** where unit=&#39;c&#39;
Eg: show timeseries root.ln.** where description contains &#39;test1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Specific Timeseries Statement with where clause start from offset and limit the total number of result</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TIMESERIES pathPattern? showWhereClause? limitClause?

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Storage Group Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW STORAGE GROUP
Eg: IoTDB &gt; SHOW STORAGE GROUP
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Specific Storage Group Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW STORAGE GROUP &lt;Path&gt;
Eg: IoTDB &gt; SHOW STORAGE GROUP root.*
Eg: IoTDB &gt; SHOW STORAGE GROUP root.ln
Note: The path can be full path or path pattern.
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Merge Status Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW MERGE INFO
Eg: IoTDB &gt; SHOW MERGE INFO
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Count Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>COUNT TIMESERIES &lt;Path&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Count Nodes Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>COUNT NODES &lt;Path&gt; LEVEL=&lt;INTEGER&gt;
Eg: IoTDB &gt; COUNT NODES root.** LEVEL=2
Eg: IoTDB &gt; COUNT NODES root.ln.** LEVEL=2
Eg: IoTDB &gt; COUNT NODES root.ln.* LEVEL=3
Eg: IoTDB &gt; COUNT NODES root.ln.wf01 LEVEL=3
Note: The path can be full path or path pattern.
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show All Devices Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DEVICES (WITH STORAGE GROUP)? limitClause? 
Eg: IoTDB &gt; SHOW DEVICES
Eg: IoTDB &gt; SHOW DEVICES WITH STORAGE GROUP
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Specific Devices Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DEVICES &lt;PathPattern&gt; (WITH STORAGE GROUP)? limitClause?
Eg: IoTDB &gt; SHOW DEVICES root.**
Eg: IoTDB &gt; SHOW DEVICES root.ln.**
Eg: IoTDB &gt; SHOW DEVICES root.*.wf01
Eg: IoTDB &gt; SHOW DEVICES root.ln WITH STORAGE GROUP
Eg: IoTDB &gt; SHOW DEVICES root.*.wf01 WITH STORAGE GROUP
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Child Paths of Root Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CHILD PATHS
Eg: IoTDB &gt; SHOW CHILD PATHS
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Child Paths Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CHILD PATHS &lt;PathPattern&gt;
Eg: IoTDB &gt; SHOW CHILD PATHS root
Eg: IoTDB &gt; SHOW CHILD PATHS root.ln
Eg: IoTDB &gt; SHOW CHILD PATHS root.*.wf01
Eg: IoTDB &gt; SHOW CHILD PATHS root.ln.wf* 
Note: This statement can be used in IoTDB Client and JDBC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create snapshot for schema</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE SNAPSHOT FOR SCHEMA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="data-management-statement" tabindex="-1"><a class="header-anchor" href="#data-management-statement" aria-hidden="true">#</a> Data Management Statement</h2><ul><li>Insert Record Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INSERT INTO &lt;PrefixPath&gt; LPAREN TIMESTAMP COMMA &lt;Sensor&gt; [COMMA &lt;Sensor&gt;]* RPAREN VALUES LPAREN &lt;TimeValue&gt;, &lt;PointValue&gt; [COMMA &lt;PointValue&gt;]* RPAREN
Sensor : Identifier
Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)
Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) VALUES(NOW(), false)
Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,temperature) VALUES(2017-11-01T00:17:00.000+08:00,24.22028)
Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) VALUES (1509466680000,false,20.060787)
Eg: IoTDB &gt; INSERT INTO root.sg.d1(timestamp,(s1,s2),(s3,s4)) VALUES (1509466680000,(1.0,2),(NULL,4))
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
Note: The order of Sensor and PointValue need one-to-one correspondence
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete Record Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE FROM &lt;PathPattern&gt; [COMMA &lt;PathPattern&gt;]* [WHERE &lt;WhereClause&gt;]?
WhereClause : &lt;Condition&gt; [(AND) &lt;Condition&gt;]*
Condition  : &lt;TimeExpr&gt; [(AND) &lt;TimeExpr&gt;]*
TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)
Eg: DELETE FROM root.ln.wf01.wt01.temperature WHERE time &gt; 2016-01-05T00:15:00+08:00 and time &lt; 2017-11-1T00:05:00+08:00
Eg: DELETE FROM root.ln.wf01.wt01.status, root.ln.wf01.wt01.temperature WHERE time &lt; NOW()
Eg: DELETE FROM root.ln.wf01.wt01.* WHERE time &gt;= 1509466140000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Select Record Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
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
Eg: IoTDB &gt; SELECT status, temperature FROM root.ln.wf01.wt01 WHERE temperature &lt; 24 and time &gt; 2017-11-1 0:13:00
Eg. IoTDB &gt; SELECT ** FROM root
Eg. IoTDB &gt; SELECT * FROM root.**
Eg. IoTDB &gt; SELECT * FROM root where time &gt; now() - 5m
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Group By Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt; GROUP BY &lt;GroupByTimeClause&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Fill Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE &lt;WhereClause&gt; FILL &lt;FillClause&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Group By Fill Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt; GROUP BY &lt;GroupByClause&gt; (FILL &lt;GROUPBYFillClause&gt;)?
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Order by time Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt; GROUP BY &lt;GroupByClause&gt; (FILL &lt;GROUPBYFillClause&gt;)? orderByTimeClause?
orderByTimeClause: order by time (asc | desc)?

Eg: SELECT last_value(temperature) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (float[PREVIOUS]) order by time desc
Eg: SELECT * from root.** order by time desc
Eg: SELECT * from root.** order by time desc align by device 
Eg: SELECT * from root.** order by time desc disable align
Eg: SELECT last * from root.** order by time desc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Limit Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;] [&lt;LIMITClause&gt;] [&lt;SLIMITClause&gt;]
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
Eg: IoTDB &gt; SELECT status, temperature FROM root.ln.wf01.wt01 WHERE temperature &lt; 24 and time &gt; 2017-11-1 0:13:00 LIMIT 3 OFFSET 2
Eg. IoTDB &gt; SELECT COUNT (status), MAX_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE time &lt; 1509466500000 GROUP BY([1509465720000, 1509466380000], 5m) LIMIT 3
Note: N, OFFSETValue, SN and SOFFSETValue must be greater than 0.
Note: The order of &lt;LIMITClause&gt; and &lt;SLIMITClause&gt; does not affect the grammatical correctness.
Note: &lt;FillClause&gt; can not use &lt;LIMITClause&gt; but not &lt;SLIMITClause&gt;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Align By Device Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>AlignbyDeviceClause : ALIGN BY DEVICE

Rules:  
1. Both uppercase and lowercase are ok.  
Correct example: select * from root.sg1.* align by device  
Correct example: select * from root.sg1.* ALIGN BY DEVICE  

2. AlignbyDeviceClause can only be used at the end of a query statement.  
Correct example: select * from root.sg1.* where time &gt; 10 align by device  
Wrong example: select * from root.sg1.* align by device where time &gt; 10  

3. The paths of the SELECT clause can only be single level. In other words, the paths of the SELECT clause can only be measurements or STAR, without DOT.
Correct example: select s0,s1 from root.sg1.* align by device  
Correct example: select s0,s1 from root.sg1.d0, root.sg1.d1 align by device  
Correct example: select * from root.sg1.* align by device  
Correct example: select * from root.** align by device  
Correct example: select s0,s1,* from root.*.* align by device  
Wrong example: select d0.s1, d0.s2, d1.s0 from root.sg1 align by device  
Wrong example: select *.s0, *.s1 from root.* align by device  
Wrong example: select *.*.* from root align by device

4. The data types of the same measurement column should be the same across devices. 
Note that when it comes to aggregated paths, the data type of the measurement column will reflect 
the aggregation function rather than the original timeseries.

Correct example: select s0 from root.sg1.d0,root.sg1.d1 align by device   
root.sg1.d0.s0 and root.sg1.d1.s0 are both INT32.  

Correct example: select count(s0) from root.sg1.d0,root.sg1.d1 align by device   
count(root.sg1.d0.s0) and count(root.sg1.d1.s0) are both INT64.  

Wrong example: select s0 from root.sg1.d0, root.sg2.d3 align by device  
root.sg1.d0.s0 is INT32 while root.sg2.d3.s0 is FLOAT. 

5. The display principle of the result table is that all the columns (no matther whther a column has has existing data) will be shown, with nonexistent cells being null. Besides, the select clause support const column (e.g., &#39;a&#39;, &#39;123&#39; etc..).  
For example, &quot;select s0,s1,s2,&#39;abc&#39;,s1,s2 from root.sg.d0, root.sg.d1, root.sg.d2 align by device&quot;. Suppose that the actual existing timeseries are as follows:  
- root.sg.d0.s0
- root.sg.d0.s1
- root.sg.d1.s0

Then you could expect a table like:  

| Time | Device   | s0 | s1 |  s2  | &#39;abc&#39; | s1 |  s2  |
| ---  | ---      | ---| ---| null | &#39;abc&#39; | ---| null |
|  1   |root.sg.d0| 20 | 2.5| null | &#39;abc&#39; | 2.5| null |
|  2   |root.sg.d0| 23 | 3.1| null | &#39;abc&#39; | 3.1| null |
| ...  | ...      | ...| ...| null | &#39;abc&#39; | ...| null |
|  1   |root.sg.d1| 12 |null| null | &#39;abc&#39; |null| null |
|  2   |root.sg.d1| 19 |null| null | &#39;abc&#39; |null| null |
| ...  | ...      | ...| ...| null | &#39;abc&#39; | ...| null |

Note that the cells of measurement &#39;s0&#39; and device &#39;root.sg.d1&#39; are all null.    

6. The duplicated devices in the prefix paths are neglected.  
For example, &quot;select s0,s1 from root.sg.d0,root.sg.d0,root.sg.d1 align by device&quot; is equal to &quot;select s0,s1 from root.sg.d0,root.sg.d1 align by device&quot;.  
For example. &quot;select s0,s1 from root.sg.*,root.sg.d0 align by device&quot; is equal to &quot;select s0,s1 from root.sg.* align by device&quot;.  

7. The duplicated measurements in the suffix paths are not neglected.  
For example, &quot;select s0,s0,s1 from root.sg.* align by device&quot; is not equal to &quot;select s0,s1 from root.sg.* align by device&quot;.

8. Both time predicates and value predicates are allowed in Where Clause. The paths of the value predicates can be the leaf node or full path started with ROOT. And wildcard is not allowed here. For example:
- select * from root.sg.* where time = 1 align by device
- select * from root.sg.* where s0 &lt; 100 align by device
- select * from root.sg.* where time &lt; 20 AND s0 &gt; 50 align by device
- select * from root.sg.d0 where root.sg.d0.s0 = 15 align by device

9. More correct examples:
   - select * from root.vehicle.* align by device
   - select s0,s0,s1 from root.vehicle.* align by device
   - select s0,s1 from root.vehicle.* limit 10 offset 1 align by device
   - select * from root.vehicle.* slimit 10 soffset 2 align by device
   - select * from root.vehicle.* where time &gt; 10 align by device
   - select * from root.vehicle.* where time &lt; 10 AND s0 &gt; 25 align by device
   - select * from root.vehicle.* where root.vehicle.d0.s0&gt;0 align by device
   - select count(*) from root.vehicle align by device
   - select sum(*) from root.vehicle.* GROUP BY (20ms,0,[2,50]) align by device
   - select * from root.vehicle.* where time = 3 Fill(int32[previous, 5ms]) align by device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Disable Align Statement</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Disable Align Clause: DISABLE ALIGN

Rules:  
1. Both uppercase and lowercase are ok.  
Correct example: select * from root.sg1.* disable align  
Correct example: select * from root.sg1.* DISABLE ALIGN  

2. Disable Align Clause can only be used at the end of a query statement.  
Correct example: select * from root.sg1.* where time &gt; 10 disable align 
Wrong example: select * from root.sg1.* disable align where time &gt; 10 

3. Disable Align Clause cannot be used with Aggregation, Fill Statements, Group By or Group By Device Statements, but can with Limit Statements.
Correct example: select * from root.sg1.* limit 3 offset 2 disable align
Correct example: select * from root.sg1.* slimit 3 soffset 2 disable align
Wrong example: select count(s0),count(s1) from root.sg1.d1 disable align
Wrong example: select * from root.vehicle.* where root.vehicle.d0.s0&gt;0 disable align
Wrong example: select * from root.vehicle.* align by device disable align

4. The display principle of the result table is that only when the column (or row) has existing data will the column (or row) be shown, with nonexistent cells being empty.

You could expect a table like:
| Time | root.sg.d0.s1 | Time | root.sg.d0.s2 | Time | root.sg.d1.s1 |
| ---  | ---           | ---  | ---           | ---  | ---           |
|  1   | 100           | 20   | 300           | 400  | 600           |
|  2   | 300           | 40   | 800           | 700  | 900           |
|  4   | 500           |      |               | 800  | 1000          |
|      |               |      |               | 900  | 8000          |

5. More correct examples: 
   - select * from root.vehicle.* disable align
   - select s0,s0,s1 from root.vehicle.* disable align
   - select s0,s1 from root.vehicle.* limit 10 offset 1 disable align
   - select * from root.vehicle.* slimit 10 soffset 2 disable align
   - select * from root.vehicle.* where time &gt; 10 disable align

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Select Last Record Statement</li></ul><p>The LAST function returns the last time-value pair of the given timeseries. Currently filters are not supported in LAST queries.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT LAST &lt;SelectClause&gt; FROM &lt;FromClause&gt;
Select Clause : &lt;Path&gt; [COMMA &lt;Path&gt;]*
FromClause : &lt; PrefixPath &gt; [COMMA &lt; PrefixPath &gt;]*
WhereClause : &lt;TimeExpr&gt; [(AND | OR) &lt;TimeExpr&gt;]*
TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)

Eg. SELECT LAST s1 FROM root.sg.d1
Eg. SELECT LAST s1, s2 FROM root.sg.d1
Eg. SELECT LAST s1 FROM root.sg.d1, root.sg.d2
Eg. SELECT LAST s1 FROM root.sg.d1 where time &gt; 100
Eg. SELECT LAST s1, s2 FROM root.sg.d1 where time &gt;= 500

Rules:
1. the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;

2. SELECT LAST only supports time filter that contains &#39;&gt;&#39; or &#39;&gt;=&#39; currently.

3. The result set of last query will always be displayed in a fixed three column table format.
For example, &quot;select last s1, s2 from root.sg.d1, root.sg.d2&quot;, the query result would be:

| Time | Path          | Value | dataType |
| ---  | ------------- |------ | -------- |
|  5   | root.sg.d1.s1 | 100   | INT32    |
|  2   | root.sg.d1.s2 | 400   | INT32    |
|  4   | root.sg.d2.s1 | 250   | INT32    |
|  9   | root.sg.d2.s2 | 600   | INT32    |

4. It is not supported to use &quot;diable align&quot; in LAST query. 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>As Statement</li></ul><p>As statement assigns an alias to time seires queried in SELECT statement</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>You can use as statement in all queries, but some rules are restricted about wildcard.

1. Raw data query
select s1 as speed, s2 as temperature from root.sg.d1

The result set will be like：
| Time | speed | temperature |
|  ... |  ...  |     ....    |

2. Aggregation query
select count(s1) as s1_num, max_value(s2) as s2_max from root.sg.d1

3. Down-frequence query
select count(s1) as s1_num from root.sg.d1 group by ([100,500), 80ms)

4. Align by device query
select s1 as speed, s2 as temperature from root.sg.d1 align by device

select count(s1) as s1_num, count(s2), count(s3) as s3_num from root.sg.d2 align by device

5. Last Record query
select last s1 as speed, s2 from root.sg.d1

Rules：
1. In addition to Align by device query，each AS statement has to corresponding to one time series exactly.

E.g. select s1 as temperature from root.sg.*

At this time if \`root.sg.*\` includes more than one device，then an exception will be thrown。

2. In align by device query，the prefix path that each AS statement corresponding to can includes multiple device, but the suffix path can only be single sensor.

E.g. select s1 as temperature from root.sg.*

In this situation, it will be show correctly even if multiple devices are selected.

E.g. select * as temperature from root.sg.d1

In this situation, it will throws an exception if * corresponds to multiple sensors.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Regexp Statement</li></ul><p>Regexp Statement only supports regular expressions with Java standard library style on timeseries which is TEXT data type</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Like Statement</li></ul><p>The usage of LIKE Statement similar with mysql, but only support timeseries which is TEXT data type</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt;
Select Clause : &lt;Path&gt; [COMMA &lt;Path&gt;]*
FromClause : &lt; PrefixPath &gt; [COMMA &lt; PrefixPath &gt;]*
WhereClause : andExpression (OPERATOR_OR andExpression)*
andExpression : predicate (OPERATOR_AND predicate)*
predicate : (suffixPath | fullPath) LIKE likeExpression
likeExpression : string that may contains &quot;%&quot; or &quot;_&quot;, while &quot;%value&quot; means a string that ends with the value,  &quot;value%&quot; means a string starts with the value, &quot;%value%&quot; means string that contains values, and &quot;_&quot; represents any character.

Eg. select s1 from root.sg.d1 where s1 like &#39;abc&#39;
Eg. select s1, s2 from root.sg.d1 where s1 like &#39;a%bc&#39;
Eg. select * from root.sg.d1 where s1 like &#39;abc_&#39;
Eg. select * from root.sg.d1 where s1 like &#39;abc\\%&#39; and time &gt; 100
In this situation, &#39;\\%&#39; means &#39;%&#39; will be escaped
The result set will be like:
| Time | Path         | Value |
| ---  | ------------ | ----- |
|  200 | root.sg.d1.s1| abc%  |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="database-management-statement" tabindex="-1"><a class="header-anchor" href="#database-management-statement" aria-hidden="true">#</a> Database Management Statement</h2><ul><li>Create User</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE USER &lt;userName&gt; &lt;password&gt;;  
userName:=identifier  
password:=string
Eg: IoTDB &gt; CREATE USER thulab &#39;pwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete User</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP USER &lt;userName&gt;;  
userName:=identifier
Eg: IoTDB &gt; DROP USER xiaoming;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Role</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE ROLE &lt;roleName&gt;;  
roleName:=identifie
Eg: IoTDB &gt; CREATE ROLE admin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete Role</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP ROLE &lt;roleName&gt;;  
roleName:=identifier
Eg: IoTDB &gt; DROP ROLE admin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Grant User Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
userName:=identifier  
nodeName:=identifier (DOT identifier)*  
privileges:= string (COMMA string)*
Eg: IoTDB &gt; GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Grant Role Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
privileges:= string (COMMA string)*  
roleName:=identifier  
nodeName:=identifier (DOT identifier)*
Eg: IoTDB &gt; GRANT ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Grant User Role</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT &lt;roleName&gt; TO &lt;userName&gt;;  
roleName:=identifier  
userName:=identifier
Eg: IoTDB &gt; GRANT temprole TO tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Revoke User Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;   
privileges:= string (COMMA string)*  
userName:=identifier  
nodeName:=identifier (DOT identifier)*
Eg: IoTDB &gt; REVOKE USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Revoke Role Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
privileges:= string (COMMA string)*  
roleName:= identifier  
nodeName:=identifier (DOT identifier)*
Eg: IoTDB &gt; REVOKE ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Revoke Role From User</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE &lt;roleName&gt; FROM &lt;userName&gt;;
roleName:=identifier
userName:=identifier
Eg: IoTDB &gt; REVOKE temprole FROM tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Users</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST USER
Eg: IoTDB &gt; LIST USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Roles</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ROLE
Eg: IoTDB &gt; LIST ROLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST PRIVILEGES USER  &lt;username&gt; ON &lt;path&gt;;    
username:=identifier    
path=‘root’ (DOT identifier)*
Eg: IoTDB &gt; LIST PRIVILEGES USER sgcc_wirte_user ON root.sgcc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges of Roles</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ROLE PRIVILEGES &lt;roleName&gt;
roleName:=identifier
Eg: IoTDB &gt; LIST ROLE PRIVILEGES actor;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges of Roles(On Specific Path)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST PRIVILEGES ROLE &lt;roleName&gt; ON &lt;path&gt;;    
roleName:=identifier  
path=‘root’ (DOT identifier)*
Eg: IoTDB &gt; LIST PRIVILEGES ROLE wirte_role ON root.sgcc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges of Users</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST USER PRIVILEGES &lt;username&gt; ;   
username:=identifier  
Eg: IoTDB &gt; LIST USER PRIVILEGES tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Roles of Users</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ALL ROLE OF USER &lt;username&gt; ;  
username:=identifier
Eg: IoTDB &gt; LIST ALL ROLE OF USER tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Users of Role</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ALL USER OF ROLE &lt;roleName&gt;;
roleName:=identifier
Eg: IoTDB &gt; LIST ALL USER OF ROLE roleuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Alter Password</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;
roleName:=identifier
password:=identifier
Eg: IoTDB &gt; ALTER USER tempuser SET PASSWORD &#39;newpwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2><ul><li>COUNT</li></ul><p>The COUNT function returns the value number of timeseries(one or more) non-null values selected by the SELECT statement. The result is a signed 64-bit integer. If there are no matching rows, COUNT () returns 0.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT COUNT(Path) (COMMA COUNT(Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT COUNT(status), COUNT(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>FIRST_VALUE(Rename from <code>FIRST</code> at <code>V0.10.0</code>)</li></ul><p>The FIRST_VALUE function returns the first point value of the choosen timeseries(one or more).</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT FIRST_VALUE (Path) (COMMA FIRST_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT FIRST_VALUE (status), FIRST_VALUE (temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>LAST_VALUE</li></ul><p>The LAST_VALUE function returns the last point value of the choosen timeseries(one or more).</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT LAST_VALUE (Path) (COMMA LAST_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT LAST_VALUE (status), LAST_VALUE (temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MAX_TIME</li></ul><p>The MAX_TIME function returns the maximum timestamp of the choosen timeseries(one or more). The result is a signed 64-bit integer, greater than 0.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT MAX_TIME (Path) (COMMA MAX_TIME (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT MAX_TIME(status), MAX_TIME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MAX_VALUE</li></ul><p>The MAX_VALUE function returns the maximum value(lexicographically ordered) of the choosen timeseries (one or more).</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT MAX_VALUE (Path) (COMMA MAX_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT MAX_VALUE(status), MAX_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>EXTREME</li></ul><p>The EXTREME function returns the extreme value(lexicographically ordered) of the choosen timeseries (one or more).<br> extreme value: The value that has the maximum absolute value.<br> If the maximum absolute value of a positive value and a negative value is equal, return the positive value.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT EXTREME (Path) (COMMA EXT (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT EXTREME(status), EXTREME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AVG(Rename from <code>MEAN</code> at <code>V0.9.0</code>)</li></ul><p>The AVG function returns the arithmetic mean value of the choosen timeseries over a specified period of time. The timeseries must be int32, int64, float, double type, and the other types are not to be calculated. The result is a double type number.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT AVG (Path) (COMMA AVG (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT AVG (temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MIN_TIME</li></ul><p>The MIN_TIME function returns the minimum timestamp of the choosen timeseries(one or more). The result is a signed 64-bit integer, greater than 0.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT MIN_TIME (Path) (COMMA MIN_TIME (Path))*FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT MIN_TIME(status), MIN_TIME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MIN_VALUE</li></ul><p>The MIN_VALUE function returns the minimum value(lexicographically ordered) of the choosen timeseries (one or more).</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT MIN_VALUE (Path) (COMMA MIN_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT MIN_VALUE(status),MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NOW</li></ul><p>The NOW function returns the current timestamp. This function can be used in the data operation statement to represent time. The result is a signed 64-bit integer, greater than 0.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NOW()
Eg. INSERT INTO root.ln.wf01.wt01(timestamp,status) VALUES(NOW(), false)
Eg. DELETE FROM root.ln.wf01.wt01.status, root.ln.wf01.wt01.temperature WHERE time &lt; NOW()
Eg. SELECT * FROM root WHERE time &lt; NOW()
Eg. SELECT COUNT(temperature) FROM root.ln.wf01.wt01 WHERE time &lt; NOW()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>SUM</li></ul><p>The SUM function returns the sum of the choosen timeseries (one or more) over a specified period of time. The timeseries must be int32, int64, float, double type, and the other types are not to be calculated. The result is a double type number.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT SUM(Path) (COMMA SUM(Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?
Eg. SELECT SUM(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24
Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ttl" tabindex="-1"><a class="header-anchor" href="#ttl" aria-hidden="true">#</a> TTL</h2><p>IoTDB supports storage-level TTL settings, which means it is able to delete old data<br> automatically and periodically. The benefit of using TTL is that hopefully you can control the<br> total disk space usage and prevent the machine from running out of disks. Moreover, the query<br> performance may downgrade as the total number of files goes up and the memory usage also increase<br> as there are more files. Timely removing such files helps to keep at a high query performance<br> level and reduce memory usage. The TTL operations in IoTDB are supported by the following three<br> statements:</p><ul><li>Set TTL</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SET TTL TO StorageGroupName TTLTime
Eg. SET TTL TO root.group1 3600000
This example means that for data in root.group1, only that of the latest 1 hour will remain, the
older one is removed or made invisible. 
Note: TTLTime should be millisecond timestamp. When TTL is set, insertions that fall
out of TTL will be rejected.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Unset TTL</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UNSET TTL TO StorageGroupName
Eg. UNSET TTL TO root.group1
This example means that data of all time will be accepted in this group. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show TTL</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW ALL TTL
SHOW TTL ON StorageGroupNames
Eg.1 SHOW ALL TTL
This example will show TTLs of all storage groups.
Eg.2 SHOW TTL ON root.group1,root.group2,root.group3
This example will show TTLs of the specified 3 groups.
Notice: storage groups without TTL will show a &quot;null&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice: When you set TTL to some storage groups, data out of the TTL will be made invisible<br> immediately, but because the data files may contain both out-dated and living data or the data files may<br> be being used by queries, the physical removal of data is stale. If you increase or unset TTL<br> just after setting it previously, some previously invisible data may be seen again, but the<br> physically removed one is lost forever. In other words, different from delete statement, the<br> atomicity of data deletion is not guaranteed for efficiency concerns. So we recommend that you do<br> not change the TTL once it is set or at least do not reset it frequently, unless you are determined<br> to suffer the unpredictability.</p><ul><li>Delete Partition (experimental)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE PARTITION StorageGroupName INT(COMMA INT)*
Eg DELETE PARTITION root.sg1 0,1,2
This example will delete the first 3 time partitions of storage group root.sg1.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The partitionId can be found in data folders or converted using <code>timestamp / partitionInterval</code>.</p><h2 id="kill-query" tabindex="-1"><a class="header-anchor" href="#kill-query" aria-hidden="true">#</a> Kill query</h2><ul><li>Show the list of queries in progress</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW QUERY PROCESSLIST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Kill query</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>KILL QUERY INT?
E.g. KILL QUERY
E.g. KILL QUERY 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-system-to-readonly-writable" tabindex="-1"><a class="header-anchor" href="#set-system-to-readonly-writable" aria-hidden="true">#</a> SET SYSTEM TO READONLY / WRITABLE</h2><p>Set IoTDB system to read-only or writable mode.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SET SYSTEM TO READONLY
IoTDB&gt; SET SYSTEM TO WRITABLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="identifiers" tabindex="-1"><a class="header-anchor" href="#identifiers" aria-hidden="true">#</a> Identifiers</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>QUOTE := &#39;\\&#39;&#39;;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="literals" tabindex="-1"><a class="header-anchor" href="#literals" aria-hidden="true">#</a> Literals</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PointValue : Integer | Float | StringLiteral | Boolean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TimeValue : Integer | DateTime | ISO8601 | NOW()
Note: Integer means timestamp type.

DateTime : 
eg. 2016-11-16T16:22:33+08:00
eg. 2016-11-16 16:22:33+08:00
eg. 2016-11-16T16:22:33.000+08:00
eg. 2016-11-16 16:22:33.000+08:00
Note: DateTime Type can support several types, see Chapter 3 Datetime section for details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PrecedenceEqualOperator : EQUAL | NOTEQUAL | LESSTHANOREQUALTO | LESSTHAN | GREATERTHANOREQUALTO | GREATERTHAN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Timeseries : ROOT [DOT \\&lt;LayerName\\&gt;]* DOT \\&lt;SensorName\\&gt;
LayerName : Identifier
SensorName : Identifier
eg. root.ln.wf01.wt01.status
eg. root.sgcc.wf03.wt01.temperature
Note: Timeseries must be start with \`root\`(case insensitive) and end with sensor name.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PrefixPath : ROOT (DOT \\&lt;LayerName\\&gt;)*
LayerName : Identifier | STAR
eg. root.sgcc
eg. root.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Path: (ROOT | &lt;LayerName&gt;) (DOT &lt;LayerName&gt;)* 
LayerName: Identifier | STAR
eg. root.ln.wf01.wt01.status
eg. root.*.wf01.wt01.status
eg. root.ln.wf01.wt01.*
eg. *.wt01.*
eg. *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,198);function r(d,u){return i(),t("div",null,[n(`

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

`),a])}const v=e(s,[["render",r],["__file","SQL-Reference.html.vue"]]);export{v as default};

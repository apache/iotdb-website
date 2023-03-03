import{_ as d,E as l,F as o,af as p,G as t,I as n,ag as e,aT as a,C as r}from"./framework-6055ecdb.js";const i={},c=a('<h2 id="spark-tsfile" tabindex="-1"><a class="header-anchor" href="#spark-tsfile" aria-hidden="true">#</a> Spark-TsFile</h2><h3 id="about-tsfile-spark-connector" tabindex="-1"><a class="header-anchor" href="#about-tsfile-spark-connector" aria-hidden="true">#</a> About TsFile-Spark-Connector</h3><p>TsFile-Spark-Connector 对 Tsfile 类型的外部数据源实现 Spark 的支持。 这使用户可以通过 Spark 读取，写入和查询 Tsfile。</p><p>使用此连接器，您可以</p><ul><li>从本地文件系统或 hdfs 加载单个 TsFile 到 Spark</li><li>将本地文件系统或 hdfs 中特定目录中的所有文件加载到 Spark 中</li><li>将数据从 Spark 写入 TsFile</li></ul><h3 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements" aria-hidden="true">#</a> System Requirements</h3><table><thead><tr><th>Spark Version</th><th>Scala Version</th><th>Java Version</th><th>TsFile</th></tr></thead><tbody><tr><td><code>2.4.3</code></td><td><code>2.11.8</code></td><td><code>1.8</code></td><td><code>0.13.0-SNAPSHOT</code></td></tr></tbody></table>',7),u={href:"https://github.com/apache/iotdb/tree/master/tsfile",target:"_blank",rel:"noopener noreferrer"},k=a(`<h3 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h3><h4 id="本地模式" tabindex="-1"><a class="header-anchor" href="#本地模式" aria-hidden="true">#</a> 本地模式</h4><p>在本地模式下使用 TsFile-Spark-Connector 启动 Spark：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./&lt;spark-shell-path&gt;  --jars  tsfile-spark-connector.jar,tsfile-{version}-jar-with-dependencies.jar,hadoop-tsfile-{version}-jar-with-dependencies.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),h=t("li",null,"<spark-shell-path>是您的 spark-shell 的真实路径。",-1),f=t("li",null,"多个 jar 包用逗号分隔，没有任何空格。",-1),b={href:"https://github.com/apache/iotdb/tree/master/tsfile%E3%80%82",target:"_blank",rel:"noopener noreferrer"},w=t("li",null,[n("获取到 dependency 包："),t("code",null,"mvn clean package -DskipTests -P get-jar-with-dependencies")],-1),m=a(`<h4 id="分布式模式" tabindex="-1"><a class="header-anchor" href="#分布式模式" aria-hidden="true">#</a> 分布式模式</h4><p>在分布式模式下使用 TsFile-Spark-Connector 启动 Spark（即，Spark 集群通过 spark-shell 连接）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>. /&lt;spark-shell-path&gt;   --jars  tsfile-spark-connector.jar,tsfile-{version}-jar-with-dependencies.jar,hadoop-tsfile-{version}-jar-with-dependencies.jar  --master spark://ip:7077
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：</p>`,4),v=t("li",null,"<spark-shell-path>是您的 spark-shell 的真实路径。",-1),g=t("li",null,"多个 jar 包用逗号分隔，没有任何空格。",-1),T={href:"https://github.com/apache/iotdb/tree/master/tsfile%E3%80%82",target:"_blank",rel:"noopener noreferrer"},_=a(`<h3 id="数据类型对应" tabindex="-1"><a class="header-anchor" href="#数据类型对应" aria-hidden="true">#</a> 数据类型对应</h3><table><thead><tr><th>TsFile 数据类型</th><th>SparkSQL 数据类型</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>BooleanType</td></tr><tr><td>INT32</td><td>IntegerType</td></tr><tr><td>INT64</td><td>LongType</td></tr><tr><td>FLOAT</td><td>FloatType</td></tr><tr><td>DOUBLE</td><td>DoubleType</td></tr><tr><td>TEXT</td><td>StringType</td></tr></tbody></table><h3 id="模式推断" tabindex="-1"><a class="header-anchor" href="#模式推断" aria-hidden="true">#</a> 模式推断</h3><p>显示 TsFile 的方式取决于架构。 以以下 TsFile 结构为例：TsFile 模式中有三个度量：状态，温度和硬件。 这三种测量的基本信息如下：</p><table><thead><tr><th>名称</th><th>类型</th><th>编码</th></tr></thead><tbody><tr><td>状态</td><td>Boolean</td><td>PLAIN</td></tr><tr><td>温度</td><td>Float</td><td>RLE</td></tr><tr><td>硬件</td><td>Text</td><td>PLAIN</td></tr></tbody></table><p>TsFile 中的现有数据如下：</p><ul><li>d1:root.ln.wf01.wt01</li><li>d2:root.ln.wf02.wt02</li></ul><p>time|d1.status|time|d1.temperature |time | d2.hardware |time|d2.status ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- 1|True |1|2.2|2|&quot;aaa&quot;|1|True 3|True |2|2.2|4|&quot;bbb&quot;|2|False 5|False|3 |2.1|6 |&quot;ccc&quot;|4|True</p><p>相应的 SparkSQL 表如下：</p><table><thead><tr><th>time</th><th>root.ln.wf02.wt02.temperature</th><th>root.ln.wf02.wt02.status</th><th>root.ln.wf02.wt02.hardware</th><th>root.ln.wf01.wt01.temperature</th><th>root.ln.wf01.wt01.status</th><th>root.ln.wf01.wt01.hardware</th></tr></thead><tbody><tr><td>1</td><td>null</td><td>true</td><td>null</td><td>2.2</td><td>true</td><td>null</td></tr><tr><td>2</td><td>null</td><td>false</td><td>aaa</td><td>2.2</td><td>null</td><td>null</td></tr><tr><td>3</td><td>null</td><td>null</td><td>null</td><td>2.1</td><td>true</td><td>null</td></tr><tr><td>4</td><td>null</td><td>true</td><td>bbb</td><td>null</td><td>null</td><td>null</td></tr><tr><td>5</td><td>null</td><td>null</td><td>null</td><td>null</td><td>false</td><td>null</td></tr><tr><td>6</td><td>null</td><td>null</td><td>ccc</td><td>null</td><td>null</td><td>null</td></tr></tbody></table><p>您还可以使用如下所示的窄表形式：（您可以参阅第 6 部分，了解如何使用窄表形式）</p><table><thead><tr><th>time</th><th>device_name</th><th>status</th><th>hardware</th><th>temperature</th></tr></thead><tbody><tr><td>1</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.2</td></tr><tr><td>1</td><td>root.ln.wf02.wt02</td><td>true</td><td>null</td><td>null</td></tr><tr><td>2</td><td>root.ln.wf02.wt01</td><td>null</td><td>null</td><td>2.2</td></tr><tr><td>2</td><td>root.ln.wf02.wt02</td><td>false</td><td>aaa</td><td>null</td></tr><tr><td>3</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.1</td></tr><tr><td>4</td><td>root.ln.wf02.wt02</td><td>true</td><td>bbb</td><td>null</td></tr><tr><td>5</td><td>root.ln.wf02.wt01</td><td>false</td><td>null</td><td>null</td></tr><tr><td>6</td><td>root.ln.wf02.wt02</td><td>null</td><td>ccc</td><td>null</td></tr></tbody></table><h3 id="scala-api" tabindex="-1"><a class="header-anchor" href="#scala-api" aria-hidden="true">#</a> Scala API</h3><p>注意：请记住预先分配必要的读写权限。</p><ul><li>示例 1：从本地文件系统读取</li></ul><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>tsfile<span class="token punctuation">.</span></span>_
<span class="token keyword">val</span> wide_df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;test.tsfile&quot;</span><span class="token punctuation">)</span>  
wide_df<span class="token punctuation">.</span>show

<span class="token keyword">val</span> narrow_df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;test.tsfile&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>  
narrow_df<span class="token punctuation">.</span>show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例 2：从 hadoop 文件系统读取</li></ul><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>tsfile<span class="token punctuation">.</span></span>_
<span class="token keyword">val</span> wide_df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span class="token punctuation">)</span> 
wide_df<span class="token punctuation">.</span>show

<span class="token keyword">val</span> narrow_df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>  
narrow_df<span class="token punctuation">.</span>show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例 3：从特定目录读取</li></ul><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>tsfile<span class="token punctuation">.</span></span>_
<span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/usr/hadoop&quot;</span><span class="token punctuation">)</span> 
df<span class="token punctuation">.</span>show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注 1：现在不支持目录中所有 TsFile 的全局时间排序。</p><p>注 2：具有相同名称的度量应具有相同的架构。</p><ul><li>示例 4：广泛形式的查询</li></ul><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>tsfile<span class="token punctuation">.</span></span>_
<span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span class="token punctuation">)</span> 
df<span class="token punctuation">.</span>createOrReplaceTempView<span class="token punctuation">(</span><span class="token string">&quot;tsfile_table&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> newDf <span class="token operator">=</span> spark<span class="token punctuation">.</span>sql<span class="token punctuation">(</span><span class="token string">&quot;select * from tsfile_table where \`device_1.sensor_1\`&gt;0 and \`device_1.sensor_2\` &lt; 22&quot;</span><span class="token punctuation">)</span>
newDf<span class="token punctuation">.</span>show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>tsfile<span class="token punctuation">.</span></span>_
<span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span class="token punctuation">)</span> 
df<span class="token punctuation">.</span>createOrReplaceTempView<span class="token punctuation">(</span><span class="token string">&quot;tsfile_table&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> newDf <span class="token operator">=</span> spark<span class="token punctuation">.</span>sql<span class="token punctuation">(</span><span class="token string">&quot;select count(*) from tsfile_table&quot;</span><span class="token punctuation">)</span>
newDf<span class="token punctuation">.</span>show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例 5：缩小形式的查询</li></ul><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>tsfile<span class="token punctuation">.</span></span>_
<span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> 
df<span class="token punctuation">.</span>createOrReplaceTempView<span class="token punctuation">(</span><span class="token string">&quot;tsfile_table&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> newDf <span class="token operator">=</span> spark<span class="token punctuation">.</span>sql<span class="token punctuation">(</span><span class="token string">&quot;select * from tsfile_table where device_name = &#39;root.ln.wf02.wt02&#39; and temperature &gt; 5&quot;</span><span class="token punctuation">)</span>
newDf<span class="token punctuation">.</span>show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>tsfile<span class="token punctuation">.</span></span>_
<span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> 
df<span class="token punctuation">.</span>createOrReplaceTempView<span class="token punctuation">(</span><span class="token string">&quot;tsfile_table&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> newDf <span class="token operator">=</span> spark<span class="token punctuation">.</span>sql<span class="token punctuation">(</span><span class="token string">&quot;select count(*) from tsfile_table&quot;</span><span class="token punctuation">)</span>
newDf<span class="token punctuation">.</span>show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>例 6：写宽格式</li></ul><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">// we only support wide_form table to write</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>tsfile<span class="token punctuation">.</span></span>_

<span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span class="token punctuation">)</span> 
df<span class="token punctuation">.</span>show
df<span class="token punctuation">.</span>write<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/output&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">val</span> newDf <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/output&quot;</span><span class="token punctuation">)</span>
newDf<span class="token punctuation">.</span>show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>例 7：写窄格式</li></ul><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token comment">// we only support wide_form table to write</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>tsfile<span class="token punctuation">.</span></span>_

<span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> 
df<span class="token punctuation">.</span>show
df<span class="token punctuation">.</span>write<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/output&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

<span class="token keyword">val</span> newDf <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>tsfile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://localhost:9000/output&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
newDf<span class="token punctuation">.</span>show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>附录 A：模式推断的旧设计</p><p>显示 TsFile 的方式与 TsFile Schema 有关。 以以下 TsFile 结构为例：TsFile 架构中有三个度量：状态，温度和硬件。 这三个度量的基本信息如下：</p><table><thead><tr><th>名称</th><th>类型</th><th>编码</th></tr></thead><tbody><tr><td>状态</td><td>Boolean</td><td>PLAIN</td></tr><tr><td>温度</td><td>Float</td><td>RLE</td></tr><tr><td>硬件</td><td>Text</td><td>PLAIN</td></tr></tbody></table><p>文件中的现有数据如下：</p><ul><li>delta_object1: root.ln.wf01.wt01</li><li>delta_object2: root.ln.wf02.wt02</li><li>delta_object3: :root.sgcc.wf03.wt01</li></ul><p>time|delta_object1.status|time|delta_object1.temperature |time | delta_object2.hardware |time|delta_object2.status |time|delta_object3.status|time|delta_object3.temperature ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- 1|True |1|2.2|2|&quot;aaa&quot;|1|True|2|True|3|3.3 3|True |2|2.2|4|&quot;bbb&quot;|2|False|3|True|6|6.6 5|False|3 |2.1|6 |&quot;ccc&quot;|4|True|4|True|8|8.8 7|True|4|2.0|8|&quot;ddd&quot;|5|False|6|True|9|9.9</p><p>有两种显示方法：</p><ul><li>默认方式</li></ul><p>将创建两列来存储设备的完整路径：time（LongType）和 delta_object（StringType）。</p><ul><li><code>time</code>：时间戳记，LongType</li><li><code>delta_object</code>：Delta_object ID，StringType</li></ul><p>接下来，为每个度量创建一列以存储特定数据。 SparkSQL 表结构如下：</p><table><thead><tr><th>time(LongType)</th><th>delta_object(StringType)</th><th>status(BooleanType)</th><th>temperature(FloatType)</th><th>hardware(StringType)</th></tr></thead><tbody><tr><td>1</td><td>root.ln.wf01.wt01</td><td>True</td><td>2.2</td><td>null</td></tr><tr><td>1</td><td>root.ln.wf02.wt02</td><td>True</td><td>null</td><td>null</td></tr><tr><td>2</td><td>root.ln.wf01.wt01</td><td>null</td><td>2.2</td><td>null</td></tr><tr><td>2</td><td>root.ln.wf02.wt02</td><td>False</td><td>null</td><td>&quot;aaa&quot;</td></tr><tr><td>2</td><td>root.sgcc.wf03.wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>3</td><td>root.ln.wf01.wt01</td><td>True</td><td>2.1</td><td>null</td></tr><tr><td>3</td><td>root.sgcc.wf03.wt01</td><td>True</td><td>3.3</td><td>null</td></tr><tr><td>4</td><td>root.ln.wf01.wt01</td><td>null</td><td>2.0</td><td>null</td></tr><tr><td>4</td><td>root.ln.wf02.wt02</td><td>True</td><td>null</td><td>&quot;bbb&quot;</td></tr><tr><td>4</td><td>root.sgcc.wf03.wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>5</td><td>root.ln.wf01.wt01</td><td>False</td><td>null</td><td>null</td></tr><tr><td>5</td><td>root.ln.wf02.wt02</td><td>False</td><td>null</td><td>null</td></tr><tr><td>5</td><td>root.sgcc.wf03.wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>6</td><td>root.ln.wf02.wt02</td><td>null</td><td>null</td><td>&quot;ccc&quot;</td></tr><tr><td>6</td><td>root.sgcc.wf03.wt01</td><td>null</td><td>6.6</td><td>null</td></tr><tr><td>7</td><td>root.ln.wf01.wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>8</td><td>root.ln.wf02.wt02</td><td>null</td><td>null</td><td>&quot;ddd&quot;</td></tr><tr><td>8</td><td>root.sgcc.wf03.wt01</td><td>null</td><td>8.8</td><td>null</td></tr><tr><td>9</td><td>root.sgcc.wf03.wt01</td><td>null</td><td>9.9</td><td>null</td></tr></tbody></table><ul><li>展开 delta_object 列</li></ul><p>通过“。”将设备列展开为多个列，忽略根目录“root”。方便进行更丰富的聚合操作。如果用户想使用这种显示方式，需要在表创建语句中设置参数“delta_object_name”（参考本手册 5.1 节中的示例 5)，在本例中，将参数“delta_object_name”设置为“root.device.turbine”。路径层的数量必须是一对一的。此时，除了“根”层之外，为设备路径的每一层创建一列。列名是参数中的名称，值是设备相应层的名称。接下来，将为每个度量创建一个列来存储特定的数据。</p><p>那么 SparkSQL 表结构如下：</p><table><thead><tr><th>time(LongType)</th><th>group(StringType)</th><th>field(StringType)</th><th>device(StringType)</th><th>status(BooleanType)</th><th>temperature(FloatType)</th><th>hardware(StringType)</th></tr></thead><tbody><tr><td>1</td><td>ln</td><td>wf01</td><td>wt01</td><td>True</td><td>2.2</td><td>null</td></tr><tr><td>1</td><td>ln</td><td>wf02</td><td>wt02</td><td>True</td><td>null</td><td>null</td></tr><tr><td>2</td><td>ln</td><td>wf01</td><td>wt01</td><td>null</td><td>2.2</td><td>null</td></tr><tr><td>2</td><td>ln</td><td>wf02</td><td>wt02</td><td>False</td><td>null</td><td>&quot;aaa&quot;</td></tr><tr><td>2</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>3</td><td>ln</td><td>wf01</td><td>wt01</td><td>True</td><td>2.1</td><td>null</td></tr><tr><td>3</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>True</td><td>3.3</td><td>null</td></tr><tr><td>4</td><td>ln</td><td>wf01</td><td>wt01</td><td>null</td><td>2.0</td><td>null</td></tr><tr><td>4</td><td>ln</td><td>wf02</td><td>wt02</td><td>True</td><td>null</td><td>&quot;bbb&quot;</td></tr><tr><td>4</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>5</td><td>ln</td><td>wf01</td><td>wt01</td><td>False</td><td>null</td><td>null</td></tr><tr><td>5</td><td>ln</td><td>wf02</td><td>wt02</td><td>False</td><td>null</td><td>null</td></tr><tr><td>5</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>6</td><td>ln</td><td>wf02</td><td>wt02</td><td>null</td><td>null</td><td>&quot;ccc&quot;</td></tr><tr><td>6</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>null</td><td>6.6</td><td>null</td></tr><tr><td>7</td><td>ln</td><td>wf01</td><td>wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>8</td><td>ln</td><td>wf02</td><td>wt02</td><td>null</td><td>null</td><td>&quot;ddd&quot;</td></tr><tr><td>8</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>null</td><td>8.8</td><td>null</td></tr><tr><td>9</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>null</td><td>9.9</td><td>null</td></tr></tbody></table><p>TsFile-Spark-Connector 可以通过 SparkSQL 在 SparkSQL 中以表的形式显示一个或多个 tsfile。它还允许用户指定一个目录或使用通配符来匹配多个目录。如果有多个 tsfile，那么所有 tsfile 中的度量值的并集将保留在表中，并且具有相同名称的度量值在默认情况下具有相同的数据类型。注意，如果存在名称相同但数据类型不同的情况，TsFile-Spark-Connector 将不能保证结果的正确性。</p><p>写入过程是将数据 aframe 写入一个或多个 tsfile。默认情况下，需要包含两个列：time 和 delta_object。其余的列用作测量。如果用户希望将第二个表结构写回 TsFile，可以设置“delta_object_name”参数（请参阅本手册 5.1 节的 5.1 节）。</p><p>附录 B：旧注</p><p>注意：检查 Spark 根目录中的 jar 软件包，并将 libthrift-0.9.2.jar 和 libfb303-0.9.2.jar 分别替换为 libthrift-0.9.1.jar 和 libfb303-0.9.1.jar。</p>`,52);function q(y,S){const s=r("ExternalLinkIcon");return l(),o("div",null,[p(`

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

`),c,t("blockquote",null,[t("p",null,[n("注意：有关如何下载和使用 TsFile 的更多信息，请参见以下链接："),t("a",u,[n("https://github.com/apache/iotdb/tree/master/tsfile"),e(s)]),n(" 注意：spark 版本目前仅支持 2.4.3, 其他版本可能存在不适配的问题，目前已知 2.4.7 的版本存在不适配的问题")])]),k,t("ul",null,[h,f,t("li",null,[n("有关如何获取 TsFile 的信息，请参见 "),t("a",b,[n("https://github.com/apache/iotdb/tree/master/tsfile。"),e(s)])]),w]),m,t("ul",null,[v,g,t("li",null,[n("有关如何获取 TsFile 的信息，请参见 "),t("a",T,[n("https://github.com/apache/iotdb/tree/master/tsfile。"),e(s)])])]),_])}const j=d(i,[["render",q],["__file","Spark TsFile.html.vue"]]);export{j as default};
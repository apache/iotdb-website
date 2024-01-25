import{_ as n,o as s,c as a,a as e,f as t}from"./app-PmNjAyI-.js";const i={},o=t(`<h1 id="数据同步软件" tabindex="-1"><a class="header-anchor" href="#数据同步软件" aria-hidden="true">#</a> 数据同步软件</h1><p>除了内置的 Pipe 同步功能之外，IoTDB 还提供外置的数据同步软件。该软件由 Java 编写，因此具有跨平台性，在 Windows 和 Linux 下都可以执行同步功能。该软件除 Pipe 的基础功能外，还添加了额外功能。该软件支持命令行中以 SQL 语句执行，此外还支持图形化界面。</p><h2 id="连接方法" tabindex="-1"><a class="header-anchor" href="#连接方法" aria-hidden="true">#</a> 连接方法</h2><p>在使用数据同步软件时，首先需定位发送端集群。为允许发送端集群出于关闭状态，此处除可以通过 ip:port 定位集群，也可以给定发送端集群的 data 目录。将以下两组配置其一写入 data-sync.properties 即可：</p><ul><li>ssh_port, ssh_user, ssh_password, data_dir：用于定位数据目录位置，当 ssh 未配置时默认为本机。</li><li>user, password, dn_rpc_address, dn_rpc_port：用于定位运行中的 IoTDB 位置，user 和 password 可不填写，默认为 root。</li></ul><h2 id="软件特性及用法" tabindex="-1"><a class="header-anchor" href="#软件特性及用法" aria-hidden="true">#</a> 软件特性及用法</h2><p>数据同步软件支持 SQL 及图形化界面的交互。其中，SQL 语句的用法与 IoTDB Pipe 的命令行用法相同。下面先介绍创建同步任务的 SQL 语句：</p><h3 id="创建同步任务" tabindex="-1"><a class="header-anchor" href="#创建同步任务" aria-hidden="true">#</a> 创建同步任务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create pipe p1 
  with extractor <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span> 
  with processor <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span> 
  with connector <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 extractor，processor，connector 均为可自定义的插件。extractor 为数据的收集器，负责收集 IoTDB 内的特定数据；processor 为处理器，负责对收集到的数据进行过滤等处理；connector 为连接器，负责对数据进行发送。此外，with extractor， with processor 两段均可不填，不填时，extractor 与 processor 均为默认值。上述命令中（....）部分为可配置的参数，容忍无效参数，具体有效参数取决于插件实现本身。</p><p>下面将列出该软件的所有特性及其 SQL 用法。</p><h3 id="数据收集" tabindex="-1"><a class="header-anchor" href="#数据收集" aria-hidden="true">#</a> 数据收集</h3><p>目前软件自带的 Extractor 为 iotdb-extractor，该 extractor 支持对任意前缀路径进行同步，即支持选定任意数据库，设备和时间序列。此外，还可以选择同步历史数据 / 实时数据或是两者，还支持规定历史数据的起始时间和截止时间。示例的 extractor 参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create pipe p1 
    with extractor <span class="token punctuation">(</span>
    <span class="token string">&#39;extractor&#39;</span><span class="token operator">=</span><span class="token string">&#39;iotdb-extractor&#39;</span>,
    <span class="token string">&#39;extractor.pattern&#39;</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span>, 
    <span class="token string">&#39;extractor.history.enable&#39;</span><span class="token operator">=</span><span class="token string">&#39;true&#39;</span>,
    <span class="token string">&#39;extractor.history.start-time&#39;</span><span class="token operator">=</span><span class="token string">&#39;2023-07-03T16:49:58.845+08:00&#39;</span>, 
    <span class="token string">&#39;extractor.history.end-time&#39;</span><span class="token operator">=</span><span class="token string">&#39;2023-07-04T16:49:58.845+08:00&#39;</span>,
    <span class="token string">&#39;extractor.realtime.enable&#39;</span><span class="token operator">=</span><span class="token string">&#39;true&#39;</span>,
    <span class="token string">&#39;extractor.realtime.mode&#39;</span><span class="token operator">=</span><span class="token string">&#39;log&#39;</span>
    <span class="token punctuation">)</span>
    with processor <span class="token punctuation">(</span>
      <span class="token punctuation">..</span><span class="token punctuation">..</span>
    <span class="token punctuation">)</span>
    with connector <span class="token punctuation">(</span>
      <span class="token punctuation">..</span><span class="token punctuation">..</span>
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，各参数的含义如下：</p><table><thead><tr><th>参数名</th><th>参数说明</th><th>是否必需</th></tr></thead><tbody><tr><td>extractor</td><td>通用配置，表示选用的 extractor 类型，这里是软件自带的 iotdb-extractor。</td><td>否，默认为 iotdb-extractor</td></tr><tr><td>extractor.pattern</td><td>为 iotdb-extractor 规定的特定配置，之后的参数相同。这里为选定的数据前缀路径。</td><td>否，默认为 root</td></tr><tr><td>extractor.history.enable</td><td>规定是否可以同步历史数据，取值为 true 或 false。</td><td>否，默认为 true</td></tr><tr><td>extractor.history.start-time</td><td>为历史数据的截取开始时间戳，用于截取某一时间段的数据。</td><td>否，默认为历史数据开始时间</td></tr><tr><td>extractor.history.end-time</td><td>为历史数据的截取停止时间戳，用于截取某一时间段的数据。</td><td>否，默认为历史数据结束时间</td></tr><tr><td>extractor.realtime.enable</td><td>规定是否可以同步实时数据，取值为 true 或 false</td><td>否，默认为true</td></tr><tr><td>extractor.realtime.mode</td><td>规定实时数据的同步方式，取值为 log，hybrid，file，表示基于文件，WAL或混合同步</td><td>否，默认为hybrid</td></tr></tbody></table><h3 id="数据处理" tabindex="-1"><a class="header-anchor" href="#数据处理" aria-hidden="true">#</a> 数据处理</h3><p>此外，该软件支持对选择的数据进行处理。目前的 processor 内置了一些简单功能，例如基于某个字段取值的过滤，选择和重命名等，还可以自定义流处理算法，来对收集到的数据进行处理，例如滑动平均等。一些较为简单的功能已经封装在软件内部，而如果想要自定义复杂功能，可以编写相关的类作为数据的处理插件。</p><h4 id="无操作" tabindex="-1"><a class="header-anchor" href="#无操作" aria-hidden="true">#</a> 无操作</h4><p>无操作时，使用 do-nothing-processor 即可。示例的 processor 参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create pipe p1 
  with extractor <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span>
  with processor <span class="token punctuation">(</span>
    <span class="token string">&#39;processor&#39;</span><span class="token operator">=</span><span class="token string">&#39;do-nothing-processor&#39;</span>
  <span class="token punctuation">)</span>
  with connector <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与上述相似，此处的 processor 为通用配置，表示选用的 processor 类型。该配置非必选项，不填时即默认为 do-nothing-processor。</p><h4 id="取值过滤及选择" tabindex="-1"><a class="header-anchor" href="#取值过滤及选择" aria-hidden="true">#</a> 取值过滤及选择</h4><p>使用自带的取值过滤 processor 可以根据 IoTDB 点的取值进行过滤。示例的 processor 参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create pipe p1 
  with extractor <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span>
  with processor <span class="token punctuation">(</span>
    <span class="token string">&#39;processor&#39;</span><span class="token operator">=</span><span class="token string">&#39;filter-processor&#39;</span>,
    <span class="token string">&#39;processor.include.condition.type&#39;</span><span class="token operator">=</span><span class="token string">&#39;double&#39;</span>,
    <span class="token string">&#39;processor.include.condition&#39;</span><span class="token operator">=</span><span class="token string">&#39;&gt;1&#39;</span>,
    <span class="token string">&#39;processor.exclude.condition.type&#39;</span><span class="token operator">=</span><span class="token string">&#39;double&#39;</span>,
    <span class="token string">&#39;processor.exclude.condition&#39;</span><span class="token operator">=</span><span class="token string">&#39;&gt;=2&#39;</span>
  <span class="token punctuation">)</span>
  with connector <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处的 processor.include.condition 为选择某个取值的条件，processor.exclude.condition 为过滤某个取值的条件，二者必填其一。此处的参数表示选取收集的数据中，类型为 double 且大于 1 小于 2 的数据。</p><h4 id="取值重写" tabindex="-1"><a class="header-anchor" href="#取值重写" aria-hidden="true">#</a> 取值重写</h4><p>使用取值重写 processor 可以根据 IoTDB 点的取值进行改写。processor 参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create pipe p1 
  with extractor <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span> 
  with processor <span class="token punctuation">(</span>
    <span class="token string">&#39;processor&#39;</span><span class="token operator">=</span><span class="token string">&#39;rewrite-processor&#39;</span>,
    <span class="token string">&#39;processor.rewrite.condition.type&#39;</span><span class="token operator">=</span><span class="token string">&#39;double&#39;</span>,
    <span class="token string">&#39;processor.rewrite.condition&#39;</span><span class="token operator">=</span><span class="token string">&#39;&gt;1&#39;</span>,
    <span class="token string">&#39;processor.rewrite.newValue&#39;</span><span class="token operator">=</span><span class="token string">&#39;1&#39;</span>
  <span class="token punctuation">)</span>
  with connector <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处的 processor.rewrite.condition 表示进行重写的判断条件，必填；processor.rewrite.newValue 表示进行重写的新值，同样必填。此处的参数表示将收集的数据中，类型为 double 且值大于 1 的数据改为 1，其他数据不变。</p><h4 id="字段重命名" tabindex="-1"><a class="header-anchor" href="#字段重命名" aria-hidden="true">#</a> 字段重命名</h4><p>除了取值重写的功能之外，软件还支持对字段的重命名功能。该功能的参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create pipe p1 
  with extractor <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span> 
  with processor <span class="token punctuation">(</span>
    <span class="token string">&#39;processor&#39;</span><span class="token operator">=</span><span class="token string">&#39;rename-processor&#39;</span>,
    <span class="token string">&#39;processor.rename.oldPattern&#39;</span><span class="token operator">=</span><span class="token string">&#39;root.testpipe.d0&#39;</span>,
    <span class="token string">&#39;processor.rename.newPattern&#39;</span><span class="token operator">=</span><span class="token string">&#39;root.receive.d1&#39;</span>
  <span class="token punctuation">)</span>
  with connector <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处的 processor.rename.oldPattern 表示被重命名的序列，processor.rename.newPattern 表示序列的新名称。两者均为必填。</p><h3 id="数据发送" tabindex="-1"><a class="header-anchor" href="#数据发送" aria-hidden="true">#</a> 数据发送</h3><p>数据同步软件提供了内置的多种 connector，这些 connector 的类型如下：</p><h4 id="thrift-connector" tabindex="-1"><a class="header-anchor" href="#thrift-connector" aria-hidden="true">#</a> Thrift connector</h4><p>支持使用 Thrift 方式，将数据同步到 IoTDB 的接收端。采用 Thrift 方式的同步参数如下：</p><ul><li>iotdb-thrift-connector</li><li>iotdb-thrift-connector-v1</li><li>iotdb-thrift-connector-v2</li></ul><p>其中，iotdb-thrift-connector-v1 会选择某个接收端地址进行发送，通常在单个地址时效率较高；iotdb-thrift-connector-v2 会并发在所有接收端地址进行发送，在多个地址时效率较高。<br> iotdb-thrift-connector 会选择当前版本默认的 connector 进行发送，目前为 iotdb-thrift-connector-v1。以上 connector 公用相关参数，其取值示例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create pipe p1 
  with extractor <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span>
  with processor <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span>
  with connector <span class="token punctuation">(</span>
    <span class="token string">&#39;connector&#39;</span><span class="token operator">=</span><span class="token string">&#39;iotdb-thrift-connector&#39;</span>,
    <span class="token string">&#39;connector.ip&#39;</span><span class="token operator">=</span><span class="token string">&#39;xxx.xxx.xxx.xxx&#39;</span>, 
    <span class="token string">&#39;connector.port&#39;</span><span class="token operator">=</span><span class="token string">&#39;xxxx&#39;</span>,
    <span class="token string">&#39;connector.node-urls&#39;</span><span class="token operator">=</span><span class="token string">&#39;xxx.xxx.xxx.xxx:xxxx,yyy.yyy.yyy.yyy:yyyy&#39;</span>,
    <span class="token string">&#39;connector.compression&#39;</span><span class="token operator">=</span><span class="token string">&#39;zstd&#39;</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数名</th><th>参数说明</th><th>是否必需</th></tr></thead><tbody><tr><td>connector</td><td>通用配置，表示选用的 connector 类型，这里是 iotdb-thrift-connector， iotdb-thrift-connector-v1 或 iotdb-thrift-connector-v2。</td><td>否，默认为iotdb-thrift-connector</td></tr><tr><td>connector.ip</td><td>表示接收端选定 IoTDB 的 IP 地址</td><td>与 node-urls 必选其一</td></tr><tr><td>connector.port</td><td>表示接收端选定 IoTDB 的端口</td><td>与 node-urls 必选其一</td></tr><tr><td>connector.node-urls</td><td>表示接收端集群的地址列表，与上面的 ip/port 可以共存</td><td>与 ip/port 必选其一</td></tr><tr><td>connector.compression</td><td>表示发送时 tsFile 使用的二次压缩算法</td><td>否，默认为不压缩</td></tr></tbody></table><h4 id="influxdb-connector" tabindex="-1"><a class="header-anchor" href="#influxdb-connector" aria-hidden="true">#</a> InfluxDB connector</h4><p>此外，使用 InfluxDB connector，还可以将上述经过筛选、处理的数据同步到 InfluxDB。该 Connector 的名称为 influxdb-connector。目前仅支持单点传输。参数取值示例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create pipe p1 
  with extractor <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span>
  with processor <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span> 
  with connector <span class="token punctuation">(</span>
    <span class="token string">&#39;connector&#39;</span><span class="token operator">=</span><span class="token string">&#39;influxdb-connector&#39;</span>,
    <span class="token string">&#39;connector.ip&#39;</span><span class="token operator">=</span><span class="token string">&#39;xxx.xxx.xxx.xxx&#39;</span>,
    <span class="token string">&#39;connector.port&#39;</span><span class="token operator">=</span><span class="token string">&#39;xxxx&#39;</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的参数名和参数说明同上，但 ip 和 port 此时为必选项。</p><h4 id="local-file-backup-connector" tabindex="-1"><a class="header-anchor" href="#local-file-backup-connector" aria-hidden="true">#</a> Local file backup connector</h4><p>Local file backup connector 能够将 IoTDB 内部的 tsFile 文件备份至本地。此时的参数为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create pipe p1 
  with extractor <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span>
  with processor <span class="token punctuation">(</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span>
  <span class="token punctuation">)</span>
  with connector <span class="token punctuation">(</span>
    <span class="token string">&#39;connector&#39;</span><span class="token operator">=</span><span class="token string">&#39;local-file-backup-connector&#39;</span>,
    <span class="token string">&#39;connector.path&#39;</span><span class="token operator">=</span><span class="token string">&#39;/usr/local&#39;</span>, 
    <span class="token string">&#39;connector.compression&#39;</span><span class="token operator">=</span><span class="token string">&#39;zstd&#39;</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 connector.path 指要备份的文件目录，必填。connector.compression 为二次压缩方式，可选，非空时将根据 compression 的类型对打包出的 tsFile 进行二次压缩。</p><p>除了以上三类 connector 外，用户还可以自定义 connector 来实现数据的自定义发送。理论上，可以将数据以任意压缩格式，通过任何方法，发送至任何端口。</p><h3 id="rest-api" tabindex="-1"><a class="header-anchor" href="#rest-api" aria-hidden="true">#</a> REST api</h3><p>与 IoTDB 自带的 Pipe 功能相同，该软件也提供了使用 REST 接口的访问方式，能够查看同步任务的启停和执行状态等。下面是一个示例的 REST 接口访问方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show pipes&quot;}&#39;</span> http://127.0.0.1:18080/rest/v2/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中示例中 Authorization: Basic cm9vdDpyb2901 字符串为用户名 root，密码 root 对应的 Basic 鉴权 Header 格式。用户名、密码对应的完整鉴权格式为 base64.encode(username + &#39;:&#39; + password)，如果手动设置了用户名及密码，需要按照该格式来编写鉴权字符串。<br> SQL 中的 show pipes 与 IoTDB 中的对应格式相同，18080 则为配置的 REST 端口。</p><p>此处的 REST api 也提供了配置文件，在项目根目录下的 data-sync.properties 中。其中能够对 REST 服务是否启用，用户名，密码及 REST 对外的端口进行配置。</p><h3 id="开启同步任务" tabindex="-1"><a class="header-anchor" href="#开启同步任务" aria-hidden="true">#</a> 开启同步任务</h3><p>开启同步任务的 SQL 同样与 IoTDB 内置 Pipe 的定义方式相同，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>start pipe p1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="停止同步任务" tabindex="-1"><a class="header-anchor" href="#停止同步任务" aria-hidden="true">#</a> 停止同步任务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>stop pipe p1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除同步任务" tabindex="-1"><a class="header-anchor" href="#删除同步任务" aria-hidden="true">#</a> 删除同步任务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drop pipe p1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,63);function r(c,p){return s(),a("div",null,[e(`

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

`),o])}const d=n(i,[["render",r],["__file","Data-Sync-Software_timecho.html.vue"]]);export{d as default};

import{_ as t,r as d,o as r,c as o,a as c,d as e,e as i,b as n,w as u,f as s}from"./app-ylfPYgtp.js";const v={},m=s('<h1 id="内生机器学习框架-ainode" tabindex="-1"><a class="header-anchor" href="#内生机器学习框架-ainode" aria-hidden="true">#</a> 内生机器学习框架（AINode）</h1><p>AINode 是 IoTDB 在ConfigNode、DataNode后提供的第三种内生节点，该节点通过与 IoTDB 集群的 DataNode、ConfigNode 的交互，扩展了对时间序列进行机器学习分析的能力，支持从外部引入已有机器学习模型进行注册，并使用注册的模型在指定时序数据上通过简单 SQL 语句完成时序分析任务的过程，将模型的创建、管理及推理融合在数据库引擎中。目前已提供常见时序分析场景（例如预测与异常检测）的机器学习算法或自研模型。</p><p>系统架构如下图所示：</p><img src="https://alioss.timecho.com/docs/img/h4.PNG" style="zoom:50%;"><p>三种节点的职责如下：</p><ul><li><strong>ConfigNode</strong>：负责保存和管理模型的元信息；负责分布式节点管理。</li><li><strong>DataNode</strong>：负责接收并解析用户的 SQL请求；负责存储时间序列数据；负责数据的预处理计算。</li><li><strong>AINode</strong>：负责模型文件的导入创建以及模型推理。</li></ul><h2 id="_1-优势特点" tabindex="-1"><a class="header-anchor" href="#_1-优势特点" aria-hidden="true">#</a> 1. 优势特点</h2><p>与单独构建机器学习服务相比，具有以下优势：</p><ul><li><p><strong>简单易用</strong>：无需使用 Python 或 Java 编程，使用 SQL 语句即可完成机器学习模型管理与推理的完整流程。如创建模型可使用CREATE MODEL语句、使用模型进行推理可使用CALL INFERENCE(...)语句等，使用更急简单便捷。</p></li><li><p><strong>避免数据迁移</strong>：使用 IoTDB 原生机器学习可以将存储在 IoTDB 中的数据直接应用于机器学习模型的推理，无需将数据移动到单独的机器学习服务平台，从而加速数据处理、提高安全性并降低成本。</p></li></ul><figure><img src="https://alioss.timecho.com/docs/img/h1.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>内置先进算法</strong>：支持业内领先机器学习分析算法，覆盖典型时序分析任务，为时序数据库赋能原生数据分析能力。如： <ul><li><strong>时间序列预测（Time Series Forecasting）</strong>：从过去时间序列中学习变化模式；从而根据给定过去时间的观测值，输出未来序列最可能的预测。</li><li><strong>时序异常检测（Anomaly Detection for Time Series）</strong>：在给定的时间序列数据中检测和识别异常值，帮助发现时间序列中的异常行为。</li><li><strong>时间序列标注（Time Series Annotation）</strong>：为每个数据点或特定时间段添加额外的信息或标记，例如事件发生、异常点、趋势变化等，以便更好地理解和分析数据。</li></ul></li></ul><h2 id="_2-基本概念" tabindex="-1"><a class="header-anchor" href="#_2-基本概念" aria-hidden="true">#</a> 2. 基本概念</h2><ul><li><strong>模型（Model）</strong>：机器学习模型，以时序数据作为输入，输出分析任务的结果或决策。模型是AINode 的基本管理单元，支持模型的增（注册）、删、查、用（推理）。</li><li><strong>创建（Create）</strong>: 将外部设计或训练好的模型文件或算法加载到MLNode中，由IoTDB统一管理与使用。</li><li><strong>推理（Inference）</strong>：使用创建的模型在指定时序数据上完成该模型适用的时序分析任务的过程。</li><li><strong>内置能力（Built-in）</strong>：AINode 自带常见时序分析场景（例如预测与异常检测）的机器学习算法或自研模型。</li></ul><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/h3.PNG" style="zoom:50%;"></div><h2 id="_3-安装部署" tabindex="-1"><a class="header-anchor" href="#_3-安装部署" aria-hidden="true">#</a> 3. 安装部署</h2>',15),h=s(`<h2 id="_4-使用指导" tabindex="-1"><a class="header-anchor" href="#_4-使用指导" aria-hidden="true">#</a> 4. 使用指导</h2><p>AINode 对时序数据相关的深度学习模型提供了模型创建及删除的流程，内置模型无需创建及删除，可直接使用，并且在完成推理后创建的内置模型实例将自动销毁。</p><h3 id="_4-1-注册模型" tabindex="-1"><a class="header-anchor" href="#_4-1-注册模型" aria-hidden="true">#</a> 4.1 注册模型</h3><p>通过指定模型输入输出的向量维度，可以注册训练好的深度学习模型，从而用于模型推理。下方为模型注册的SQL语法定义。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create model &lt;model_name&gt; using uri &lt;uri&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>SQL中参数的具体含义如下：</p><ul><li><p>model_name：模型的全局唯一标识，不可重复。模型名称具备以下约束：</p><ul><li>允许出现标识符 [ 0-9 a-z A-Z _ ] （字母，数字，下划线）</li><li>长度限制为2-64字符</li><li>大小写敏感</li></ul></li><li><p>uri：模型注册文件的资源路径，路径下应包含<strong>模型权重model.pt文件和模型的元数据描述文件config.yaml</strong></p><ul><li><p>模型权重文件：深度学习模型训练完成后得到的权重文件，目前支持pytorch训练得到的.pt文件</p></li><li><p>yaml元数据描述文件：模型注册时需要提供的与模型结构有关的参数，其中必须包含模型的输入输出维度用于模型推理：</p><ul><li><table><thead><tr><th><strong>参数名</strong></th><th><strong>参数描述</strong></th><th><strong>示例</strong></th></tr></thead><tbody><tr><td>input_shape</td><td>模型输入的行列，用于模型推理</td><td>[96,2]</td></tr><tr><td>output_shape</td><td>模型输出的行列，用于模型推理</td><td>[48,2]</td></tr></tbody></table></li><li><p>​ 除了模型推理外，还可以指定模型输入输出的数据类型：</p></li><li><table><thead><tr><th><strong>参数名</strong></th><th><strong>参数描述</strong></th><th><strong>示例</strong></th></tr></thead><tbody><tr><td>input_type</td><td>模型输入的数据类型</td><td>[&#39;float32&#39;,&#39;float32&#39;]</td></tr><tr><td>output_type</td><td>模型输出的数据类型</td><td>[&#39;float32&#39;,&#39;float32&#39;]</td></tr></tbody></table></li><li><p>​ 除此之外，可以额外指定备注信息用于在模型管理时进行展示</p></li><li><table><thead><tr><th><strong>参数名</strong></th><th><strong>参数描述</strong></th><th><strong>示例</strong></th></tr></thead><tbody><tr><td>attributes</td><td>可选，用户自行设定的模型备注信息，用于模型展示</td><td>&#39;model_type&#39;: &#39;dlinear&#39;,&#39;kernel_size&#39;: &#39;25&#39;</td></tr></tbody></table></li></ul></li></ul></li></ul><p>除了本地模型文件的注册，还可以通过URI来指定远程资源路径来进行注册，使用开源的模型仓库（例如HuggingFace）。</p><h4 id="_4-1-1-示例" tabindex="-1"><a class="header-anchor" href="#_4-1-1-示例" aria-hidden="true">#</a> 4.1.1 示例</h4><p>在当前的example文件夹下，包含model.pt和config.yaml文件，model.pt为训练得到，config.yaml的内容如下：</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>configs:                
    # 必选项
    input_shape: [96, 2]      # 表示模型接收的数据为96行x2列
    output_shape: [48, 2]     # 表示模型输出的数据为48行x2列
    
    # 可选项 默认为全部float32，列数为shape对应的列数
    input_type: [&quot;int64&quot;,&quot;int64&quot;] #输入对应的数据类型，需要与输入列数匹配
    output_type: [&quot;text&quot;,&quot;int64&quot;] #输出对应的数据类型，需要与输出列数匹配

attributes:           # 可选项 为用户自定义的备注信息
   &#39;model_type&#39;: &#39;dlinear&#39;
   &#39;kernel_size&#39;: &#39;25&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定该文件夹作为加载路径就可以注册该模型</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>IoTDB&gt; create model dlinear_example using uri &quot;file://./example&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以从huggingFace上下载对应的模型文件进行注册</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>IoTDB&gt; create model dlinear_example using uri &quot;https://huggingface.com/IoTDBML/dlinear/&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>SQL执行后会异步进行注册的流程，可以通过模型展示查看模型的注册状态（见模型展示章节），注册成功的耗时主要受到模型文件大小的影响。</p><p>模型注册完成后，就可以通过使用正常查询的方式调用具体函数，进行模型推理。</p><h3 id="_4-2-查看模型" tabindex="-1"><a class="header-anchor" href="#_4-2-查看模型" aria-hidden="true">#</a> 4.2 查看模型</h3><p>注册成功的模型可以通过show models指令查询模型的具体信息。其SQL定义如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>show models

show models &lt;model_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了直接展示所有模型的信息外，可以指定model id来查看某一具体模型的信息。模型展示的结果中包含如下信息：</p><table><thead><tr><th><strong>ModelId</strong></th><th><strong>State</strong></th><th><strong>Configs</strong></th><th><strong>Attributes</strong></th></tr></thead><tbody><tr><td>模型唯一标识</td><td>模型注册状态(LOADING,ACTIVE,DROPPING)</td><td>InputShape, outputShapeInputTypes, outputTypes</td><td>模型备注信息</td></tr></tbody></table><p>其中，State用于展示当前模型注册的状态，包含以下三个阶段</p><ul><li>**LOADING：**已经在configNode中添加对应的模型元信息，正将模型文件传输到AINode节点上</li><li><strong>ACTIVE:</strong> 模型已经设置完成，模型处于可用状态</li><li>**DROPPING：**模型删除中，正在从configNode以及AINode处删除模型相关信息</li><li><strong>UNAVAILABLE</strong>: 模型创建失败，可以通过drop model删除创建失败的model_name。</li></ul><h4 id="_4-2-1-示例" tabindex="-1"><a class="header-anchor" href="#_4-2-1-示例" aria-hidden="true">#</a> 4.2.1 示例</h4><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>IoTDB&gt; show models


+---------------------+--------------------------+-----------+----------------------------+-----------------------+
|              ModelId|                 ModelType|      State|                     Configs|                  Notes|
+---------------------+--------------------------+-----------+----------------------------+-----------------------+
|      dlinear_example|              USER_DEFINED|     ACTIVE|           inputShape:[96,2]|                       |
|                     |                          |           |          outputShape:[48,2]|                       |
|                     |                          |           | inputDataType:[float,float]|                       |
|                     |                          |           |outputDataType:[float,float]|                       | 
|       _STLForecaster|         BUILT_IN_FORECAST|     ACTIVE|                            |Built-in model in IoTDB|
|     _NaiveForecaster|         BUILT_IN_FORECAST|     ACTIVE|                            |Built-in model in IoTDB|
|               _ARIMA|         BUILT_IN_FORECAST|     ACTIVE|                            |Built-in model in IoTDB|
|_ExponentialSmoothing|         BUILT_IN_FORECAST|     ACTIVE|                            |Built-in model in IoTDB|
|         _GaussianHMM|BUILT_IN_ANOMALY_DETECTION|     ACTIVE|                            |Built-in model in IoTDB|
|              _GMMHMM|BUILT_IN_ANOMALY_DETECTION|     ACTIVE|                            |Built-in model in IoTDB|
|               _Stray|BUILT_IN_ANOMALY_DETECTION|     ACTIVE|                            |Built-in model in IoTDB|
+---------------------+--------------------------+-----------+------------------------------------------------------------+-----------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们前面已经注册了对应的模型，可以通过对应的指定查看模型状态，active表明模型注册成功，可用于推理。</p><h3 id="_4-3-删除模型" tabindex="-1"><a class="header-anchor" href="#_4-3-删除模型" aria-hidden="true">#</a> 4.3 删除模型</h3><p>对于注册成功的模型，用户可以通过SQL进行删除。该操作除了删除configNode上的元信息外，还会删除所有AINode下的相关模型文件。其SQL如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>drop model &lt;model_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要指定已经成功注册的模型model_name来删除对应的模型。由于模型删除涉及多个节点上的数据删除，操作不会立即完成，此时模型的状态为DROPPING，该状态的模型不能用于模型推理。</p><h3 id="_4-4-使用内置模型推理" tabindex="-1"><a class="header-anchor" href="#_4-4-使用内置模型推理" aria-hidden="true">#</a> 4.4 使用内置模型推理</h3><p>SQL语法如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>call inference(&lt;built_in_model_name&gt;,sql[,&lt;parameterName&gt;=&lt;parameterValue&gt;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>内置模型推理无需注册流程，通过call关键字，调用inference函数就可以使用模型的推理功能，其对应的参数介绍如下：</p><ul><li><strong>built_in_model_name:</strong> 内置模型名称</li><li>**parameterName：**参数名</li><li>**parameterValue：**参数值</li></ul><h4 id="_4-4-1-内置模型及参数说明" tabindex="-1"><a class="header-anchor" href="#_4-4-1-内置模型及参数说明" aria-hidden="true">#</a> 4.4.1 内置模型及参数说明</h4><p>目前已内置如下机器学习模型，具体参数说明请参考以下链接。</p>`,38),b=e("thead",null,[e("tr",null,[e("th",null,"模型"),e("th",null,"built_in_model_name"),e("th",null,"任务类型"),e("th",null,"参数说明")])],-1),g=e("td",null,"Arima",-1),p=e("td",null,"_Arima",-1),_=e("td",null,"预测",-1),T={href:"https://www.sktime.net/en/latest/api_reference/auto_generated/sktime.forecasting.arima.ARIMA.html?highlight=Arima",target:"_blank",rel:"noopener noreferrer"},f=e("td",null,"STLForecaster",-1),S=e("td",null,"_STLForecaster",-1),I=e("td",null,"预测",-1),L={href:"https://www.sktime.net/en/latest/api_reference/auto_generated/sktime.forecasting.trend.STLForecaster.html#sktime.forecasting.trend.STLForecaster",target:"_blank",rel:"noopener noreferrer"},x=e("td",null,"NaiveForecaster",-1),w=e("td",null,"_NaiveForecaster",-1),A=e("td",null,"预测",-1),B={href:"https://www.sktime.net/en/latest/api_reference/auto_generated/sktime.forecasting.naive.NaiveForecaster.html#naiveforecaster",target:"_blank",rel:"noopener noreferrer"},N=e("td",null,"ExponentialSmoothing",-1),D=e("td",null,"_ExponentialSmoothing",-1),y=e("td",null,"预测",-1),E={href:"https://www.sktime.net/en/latest/api_reference/auto_generated/sktime.forecasting.exp_smoothing.ExponentialSmoothing.html",target:"_blank",rel:"noopener noreferrer"},M=e("td",null,"GaussianHMM",-1),Q=e("td",null,"_GaussianHMM",-1),C=e("td",null,"标注",-1),k={href:"https://www.sktime.net/en/latest/api_reference/auto_generated/sktime.annotation.hmm_learn.gaussian.GaussianHMM.html",target:"_blank",rel:"noopener noreferrer"},q=e("td",null,"GMMHMM",-1),F=e("td",null,"_GMMHMM",-1),O=e("td",null,"标注",-1),z={href:"https://www.sktime.net/en/latest/api_reference/auto_generated/sktime.annotation.hmm_learn.gmm.GMMHMM.html",target:"_blank",rel:"noopener noreferrer"},G=e("td",null,"Stray",-1),R=e("td",null,"_Stray",-1),U=e("td",null,"异常检测",-1),V={href:"https://www.sktime.net/en/latest/api_reference/auto_generated/sktime.annotation.stray.STRAY.html",target:"_blank",rel:"noopener noreferrer"},H=s(`<h4 id="_4-4-2-示例" tabindex="-1"><a class="header-anchor" href="#_4-4-2-示例" aria-hidden="true">#</a> 4.4.2 示例</h4><p>下面是使用内置模型推理的一个操作示例，使用内置的Stray模型进行异常检测算法，输入为<code>[144,1]</code>，输出为<code>[144,1]</code>，我们通过SQL使用其进行推理。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>IoTDB&gt; select * from root.eg.airline
+-----------------------------+------------------+
|                         Time|root.eg.airline.s0|
+-----------------------------+------------------+
|1949-01-31T00:00:00.000+08:00|             224.0|
|1949-02-28T00:00:00.000+08:00|             118.0|
|1949-03-31T00:00:00.000+08:00|             132.0|
|1949-04-30T00:00:00.000+08:00|             129.0|
......
|1960-09-30T00:00:00.000+08:00|             508.0|
|1960-10-31T00:00:00.000+08:00|             461.0|
|1960-11-30T00:00:00.000+08:00|             390.0|
|1960-12-31T00:00:00.000+08:00|             432.0|
+-----------------------------+------------------+
Total line number = 144

IoTDB&gt; call inference(_Stray, &quot;select s0 from root.eg.airline&quot;, k=2)
+-------+
|output0|
+-------+
|      0|
|      0|
|      0|
|      0|
......
|      1|
|      1|
|      0|
|      0|
|      0|
|      0|
+-------+
Total line number = 144
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-使用深度学习模型推理" tabindex="-1"><a class="header-anchor" href="#_4-5-使用深度学习模型推理" aria-hidden="true">#</a> 4.5 使用深度学习模型推理</h3><p>SQL语法如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>call inference(&lt;model_name&gt;,sql[,window=&lt;window_function&gt;])


window_function:
    head(window_size)
    tail(window_size)
    count(window_size,sliding_step)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在完成模型的注册后，通过call关键字，调用inference函数就可以使用模型的推理功能，其对应的参数介绍如下：</p><ul><li><strong>model_name</strong>: 对应一个已经注册的模型</li><li><strong>sql</strong>：sql查询语句，查询的结果作为模型的输入进行模型推理。查询的结果中行列的维度需要与具体模型config中指定的大小相匹配。(这里的sql不建议使用‘SELECT <em>’子句，因为在IoTDB中，‘</em>’并不会对列进行排序，因此列的顺序是未定义的，可以使用&#39;SELECT s0,s1&#39;的方式确保列的顺序符合模型输入的预期)</li><li><strong>window_function</strong>: 推理过程中可以使用的窗口函数，目前提供三种类型的窗口函数用于辅助模型推理： <ul><li><p><strong>head(window_size)</strong>: 获取数据中最前的window_size个点用于模型推理，该窗口可用于数据裁剪<br><img src="https://alioss.timecho.com/docs/img/s1.png" alt="" loading="lazy"></p></li><li><p><strong>tail(window_size)</strong>：获取数据中最后的window_size个点用于模型推，该窗口可用于数据裁剪<br><img src="https://alioss.timecho.com/docs/img/s2.png" alt="" loading="lazy"></p></li><li><p>**count(window_size, sliding_step)：**基于点数的滑动窗口，每个窗口的数据会分别通过模型进行推理，如下图示例所示，window_size为2的窗口函数将输入数据集分为三个窗口，每个窗口分别进行推理运算生成结果。该窗口可用于连续推理<br><img src="https://alioss.timecho.com/docs/img/s3.png" alt="" loading="lazy"></p></li></ul></li></ul><p><strong>说明1: window可以用来解决sql查询结果和模型的输入行数要求不一致时的问题，对行进行裁剪。需要注意的是，当列数不匹配或是行数直接少于模型需求时，推理无法进行，会返回错误信息。</strong></p><p><strong>说明2: 在深度学习应用中，经常将时间戳衍生特征（数据中的时间列）作为生成式任务的协变量，一同输入到模型中以提升模型的效果，但是在模型的输出结果中一般不包含时间列。为了保证实现的通用性，模型推理结果只对应模型的真实输出，如果模型不输出时间列，则结果中不会包含。</strong></p><h4 id="_4-5-1-示例" tabindex="-1"><a class="header-anchor" href="#_4-5-1-示例" aria-hidden="true">#</a> 4.5.1 示例</h4><p>下面是使用深度学习模型推理的一个操作示例，针对上面提到的输入为<code>[96,2]</code>，输出为<code>[48,2]</code>的<code>dlinear</code>预测模型，我们通过SQL使用其进行推理。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>IoTDB&gt; select s1,s2 from root.**
+-----------------------------+-------------------+-------------------+
|                         Time|    root.eg.etth.s0|    root.eg.etth.s1|
+-----------------------------+-------------------+-------------------+
|1990-01-01T00:00:00.000+08:00|             0.7855|              1.611|
|1990-01-02T00:00:00.000+08:00|             0.7818|               1.61|
|1990-01-03T00:00:00.000+08:00|             0.7867|             1.6293|
|1990-01-04T00:00:00.000+08:00|              0.786|              1.637|
|1990-01-05T00:00:00.000+08:00|             0.7849|              1.653|
|1990-01-06T00:00:00.000+08:00|             0.7866|             1.6537|
|1990-01-07T00:00:00.000+08:00|             0.7886|              1.662|
......
|1990-03-31T00:00:00.000+08:00|             0.7585|              1.678|
|1990-04-01T00:00:00.000+08:00|             0.7587|             1.6763|
|1990-04-02T00:00:00.000+08:00|               0.76|             1.6813|
|1990-04-03T00:00:00.000+08:00|             0.7669|              1.684|
|1990-04-04T00:00:00.000+08:00|             0.7645|              1.677|
|1990-04-05T00:00:00.000+08:00|             0.7625|               1.68|
|1990-04-06T00:00:00.000+08:00|             0.7617|             1.6917|
+-----------------------------+-------------------+-------------------+
Total line number = 96

IoTDB&gt; call inference(dlinear_example,&quot;select s0,s1 from root.**&quot;)
+--------------------------------------------+-----------------------------+
|                                   _result_0|                    _result_1|
+--------------------------------------------+-----------------------------+
|                           0.726302981376648|           1.6549958229064941|
|                          0.7354921698570251|           1.6482787370681763|
|                          0.7238251566886902|           1.6278168201446533|
......
|                          0.7692174911499023|            1.654654049873352|
|                          0.7685555815696716|           1.6625318765640259|
|                          0.7856493592262268|           1.6508299350738525|
+--------------------------------------------+-----------------------------+
Total line number = 48
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-2-使用tail-head窗口函数的示例" tabindex="-1"><a class="header-anchor" href="#_4-5-2-使用tail-head窗口函数的示例" aria-hidden="true">#</a> 4.5.2 使用tail/head窗口函数的示例</h4><p>当数据量不定且想要取96行最新数据用于推理时，可以使用对应的窗口函数tail。head函数的用法与其类似，不同点在于其取的是最早的96个点。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>IoTDB&gt; select s1,s2 from root.**
+-----------------------------+-------------------+-------------------+
|                         Time|    root.eg.etth.s0|    root.eg.etth.s1|
+-----------------------------+-------------------+-------------------+
|1988-01-01T00:00:00.000+08:00|             0.7355|              1.211|
......
|1990-01-01T00:00:00.000+08:00|             0.7855|              1.611|
|1990-01-02T00:00:00.000+08:00|             0.7818|               1.61|
|1990-01-03T00:00:00.000+08:00|             0.7867|             1.6293|
|1990-01-04T00:00:00.000+08:00|              0.786|              1.637|
|1990-01-05T00:00:00.000+08:00|             0.7849|              1.653|
|1990-01-06T00:00:00.000+08:00|             0.7866|             1.6537|
|1990-01-07T00:00:00.000+08:00|             0.7886|              1.662|
......
|1990-03-31T00:00:00.000+08:00|             0.7585|              1.678|
|1990-04-01T00:00:00.000+08:00|             0.7587|             1.6763|
|1990-04-02T00:00:00.000+08:00|               0.76|             1.6813|
|1990-04-03T00:00:00.000+08:00|             0.7669|              1.684|
|1990-04-04T00:00:00.000+08:00|             0.7645|              1.677|
|1990-04-05T00:00:00.000+08:00|             0.7625|               1.68|
|1990-04-06T00:00:00.000+08:00|             0.7617|             1.6917|
+-----------------------------+-------------------+-------------------+
Total line number = 996

IoTDB&gt; call inference(dlinear_example,&quot;select s0,s1 from root.**&quot;,window=tail(96))
+--------------------------------------------+-----------------------------+
|                                   _result_0|                    _result_1|
+--------------------------------------------+-----------------------------+
|                           0.726302981376648|           1.6549958229064941|
|                          0.7354921698570251|           1.6482787370681763|
|                          0.7238251566886902|           1.6278168201446533|
......
|                          0.7692174911499023|            1.654654049873352|
|                          0.7685555815696716|           1.6625318765640259|
|                          0.7856493592262268|           1.6508299350738525|
+--------------------------------------------+-----------------------------+
Total line number = 48
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-3-使用count窗口函数的示例" tabindex="-1"><a class="header-anchor" href="#_4-5-3-使用count窗口函数的示例" aria-hidden="true">#</a> 4.5.3 使用count窗口函数的示例</h4><p>该窗口主要用于计算式任务，当任务对应的模型一次只能处理固定行数据而最终想要的确实多组预测结果时，使用该窗口函数可以使用点数滑动窗口进行连续推理。假设我们现在有一个异常检测模型anomaly_example(input: [24,2], output[1,1])，对每行数据会生成一个0/1的标签，其使用示例如下：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>IoTDB&gt; select s1,s2 from root.**
+-----------------------------+-------------------+-------------------+
|                         Time|    root.eg.etth.s0|    root.eg.etth.s1|
+-----------------------------+-------------------+-------------------+
|1990-01-01T00:00:00.000+08:00|             0.7855|              1.611|
|1990-01-02T00:00:00.000+08:00|             0.7818|               1.61|
|1990-01-03T00:00:00.000+08:00|             0.7867|             1.6293|
|1990-01-04T00:00:00.000+08:00|              0.786|              1.637|
|1990-01-05T00:00:00.000+08:00|             0.7849|              1.653|
|1990-01-06T00:00:00.000+08:00|             0.7866|             1.6537|
|1990-01-07T00:00:00.000+08:00|             0.7886|              1.662|
......
|1990-03-31T00:00:00.000+08:00|             0.7585|              1.678|
|1990-04-01T00:00:00.000+08:00|             0.7587|             1.6763|
|1990-04-02T00:00:00.000+08:00|               0.76|             1.6813|
|1990-04-03T00:00:00.000+08:00|             0.7669|              1.684|
|1990-04-04T00:00:00.000+08:00|             0.7645|              1.677|
|1990-04-05T00:00:00.000+08:00|             0.7625|               1.68|
|1990-04-06T00:00:00.000+08:00|             0.7617|             1.6917|
+-----------------------------+-------------------+-------------------+
Total line number = 96

IoTDB&gt; call inference(anomaly_example,&quot;select s0,s1 from root.**&quot;,window=count(24,24))
+-------------------------+
|                _result_0|
+-------------------------+
|                        0|
|                        1|
|                        1|
|                        0|
+-------------------------+
Total line number = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中结果集中的每行的标签对应16行输入对应的模型输出。</p><h2 id="_5-权限管理" tabindex="-1"><a class="header-anchor" href="#_5-权限管理" aria-hidden="true">#</a> 5. 权限管理</h2><p>使用AINode相关的功能时，可以使用IoTDB本身的鉴权去做一个权限管理，用户只有在具备USE_ML权限时，才可以使用模型管理的相关功能。当使用推理功能时，用户需要有访问输入模型的SQL对应的源序列的权限。</p><table><thead><tr><th>权限名称</th><th>权限范围</th><th>管理员用户（默认ROOT）</th><th>普通用户</th><th>路径相关</th></tr></thead><tbody><tr><td>USE_MODEL</td><td>create modelshow modelsdrop model</td><td>√</td><td>√</td><td>x</td></tr><tr><td></td><td>call inference</td><td></td><td></td><td></td></tr></tbody></table><h2 id="_6-实际案例" tabindex="-1"><a class="header-anchor" href="#_6-实际案例" aria-hidden="true">#</a> 6. 实际案例</h2><h3 id="_6-1-电力负载预测" tabindex="-1"><a class="header-anchor" href="#_6-1-电力负载预测" aria-hidden="true">#</a> 6.1 电力负载预测</h3><p>在部分工业场景下，会存在预测电力负载的需求，预测结果可用于优化电力供应、节约能源和资源、支持规划和扩展以及增强电力系统的可靠性。</p>`,26),P={href:"https://alioss.timecho.com/docs/img/ETTh1.csv",target:"_blank",rel:"noopener noreferrer"},Y=s(`<p>包含间隔1h采集一次的电力数据，每条数据由负载和油温构成，分别为：High UseFul Load, High UseLess Load, Middle UseLess Load, Low UseFul Load, Low UseLess Load, Oil Temperature。</p><p>在该数据集上，IoTDB-ML的模型推理功能可以通过以往高中低三种负载的数值和对应时间戳油温的关系，预测未来一段时间内的油温，赋能电网变压器的自动调控和监视。</p><h4 id="步骤一-数据导入" tabindex="-1"><a class="header-anchor" href="#步骤一-数据导入" aria-hidden="true">#</a> 步骤一：数据导入</h4><p>用户可以使用tools文件夹中的<code>import-csv.sh</code> 向 IoTDB 中导入 ETT 数据集</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>bash ./import-csv.sh -h 127.0.0.1 -p 6667 -u root -pw root -f ../../ETTh1.csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="步骤二-模型导入" tabindex="-1"><a class="header-anchor" href="#步骤二-模型导入" aria-hidden="true">#</a> 步骤二：模型导入</h4><p>我们可以在iotdb-cli 中输入以下SQL从 huggingface 上拉取一个已经训练好的模型进行注册，用于后续的推理。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create model dlinear using uri &#39;https://huggingface.co/hvlgo/dlinear/resolve/main&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该模型基于较为轻量化的深度模型DLinear训练而得，能够以相对快的推理速度尽可能多地捕捉到序列内部的变化趋势和变量间的数据变化关系，相较于其他更深的模型更适用于快速实时预测。</p><h4 id="步骤三-模型推理" tabindex="-1"><a class="header-anchor" href="#步骤三-模型推理" aria-hidden="true">#</a> 步骤三：模型推理</h4><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>IoTDB&gt; select s0,s1,s2,s3,s4,s5,s6 from root.eg.etth LIMIT 96
+-----------------------------+---------------+---------------+---------------+---------------+---------------+---------------+---------------+
|                         Time|root.eg.etth.s0|root.eg.etth.s1|root.eg.etth.s2|root.eg.etth.s3|root.eg.etth.s4|root.eg.etth.s5|root.eg.etth.s6|
+-----------------------------+---------------+---------------+---------------+---------------+---------------+---------------+---------------+
|2017-10-20T00:00:00.000+08:00|         10.449|          3.885|          8.706|          2.025|          2.041|          0.944|          8.864|
|2017-10-20T01:00:00.000+08:00|         11.119|          3.952|          8.813|           2.31|          2.071|          1.005|          8.442|
|2017-10-20T02:00:00.000+08:00|          9.511|           2.88|          7.533|          1.564|          1.949|          0.883|           8.16|
|2017-10-20T03:00:00.000+08:00|          9.645|           2.21|          7.249|          1.066|          1.828|          0.914|          7.949|
......
|2017-10-23T20:00:00.000+08:00|          8.105|          0.938|          4.371|         -0.569|          3.533|          1.279|          9.708|
|2017-10-23T21:00:00.000+08:00|          7.167|          1.206|          4.087|         -0.462|          3.107|          1.432|          8.723|
|2017-10-23T22:00:00.000+08:00|            7.1|           1.34|          4.015|          -0.32|          2.772|           1.31|          8.864|
|2017-10-23T23:00:00.000+08:00|          9.176|          2.746|          7.107|          1.635|           2.65|          1.097|          9.004|
+-----------------------------+---------------+---------------+---------------+---------------+---------------+---------------+---------------+
Total line number = 96

IoTDB&gt; call inference(dlinear_example, &quot;select s0,s1,s2,s3,s4,s5,s6 from root.eg.etth&quot;, window=head(96))
+-----------+----------+----------+------------+---------+----------+----------+
|    output0|   output1|   output2|     output3|  output4|   output5|   output6|
+-----------+----------+----------+------------+---------+----------+----------+
|  10.319546| 3.1450553|  7.877341|   1.5723765|2.7303758| 1.1362307|  8.867775|
|  10.443649| 3.3286757| 7.8593454|   1.7675098| 2.560634| 1.1177158|  8.920919|
|  10.883752| 3.2341104|   8.47036|   1.6116762|2.4874182| 1.1760603|  8.798939| 
......
|  8.0115595| 1.2995274| 6.9900327|-0.098746896|  3.04923|  1.176214|  9.548782|
|   8.612427| 2.5036244| 5.6790237|  0.66474205|2.8870275| 1.2051733|  9.330128|
|  10.096699|  3.399722|    6.9909|   1.7478468|2.7642853| 1.1119363|  9.541455|
+-----------+----------+----------+------------+---------+----------+----------+
Total line number = 48
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将对油温的预测的结果和真实结果进行对比，可以得到以下的图像。</p><p>图中10/24 00:00之前的数据为输入模型的过去数据，10/24 00:00后的黄色线条为模型给出的油温预测结果，而蓝色为数据集中实际的油温数据（用于进行对比）。</p><figure><img src="https://alioss.timecho.com/docs/img/s4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到，我们使用了过去96个小时（4天）的六个负载信息和对应时间油温的关系，基于之前学习到的序列间相互关系对未来48个小时（2天）的油温这一数据的可能变化进行了建模，可以看到可视化后预测曲线与实际结果在趋势上保持了较高程度的一致性。</p><h3 id="_6-2-功率预测" tabindex="-1"><a class="header-anchor" href="#_6-2-功率预测" aria-hidden="true">#</a> 6.2 功率预测</h3><p>变电站需要对电流、电压、功率等数据进行电力监控，用于检测潜在的电网问题、识别电力系统中的故障、有效管理电网负载以及分析电力系统的性能和趋势等。</p><p>我们利用某变电站中的电流、电压和功率等数据构成了真实场景下的数据集。该数据集包括变电站近四个月时间跨度，每5 - 6s 采集一次的 A相电压、B相电压、C相电压等数据。</p>`,18),W={href:"https://alioss.timecho.com/docs/img/data.csv",target:"_blank",rel:"noopener noreferrer"},J=s(`<p>在该数据集上，IoTDB-ML的模型推理功能可以通过以往A相电压，B相电压和C相电压的数值和对应时间戳，预测未来一段时间内的C相电压，赋能变电站的监视管理。</p><h4 id="步骤一-数据导入-1" tabindex="-1"><a class="header-anchor" href="#步骤一-数据导入-1" aria-hidden="true">#</a> 步骤一：数据导入</h4><p>用户可以使用tools文件夹中的<code>import-csv.sh</code> 导入数据集</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>bash ./import-csv.sh -h 127.0.0.1 -p 6667 -u root -pw root -f ../../data.csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="步骤二-模型导入-1" tabindex="-1"><a class="header-anchor" href="#步骤二-模型导入-1" aria-hidden="true">#</a> 步骤二：模型导入</h4><p>我们可以在iotdb-cli 中输入以下SQL从 huggingface 上拉取一个已经训练好的模型进行注册，用于后续的推理。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create model patchtst using uri &#39;https://huggingface.co/hvlgo/patchtst/resolve/main&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们采用深度模型PatchTST进行预测，PatchTST 是一种基于 transformer 的时序预测模型，在长时间序列预测任务中有出色的表现。</p><h4 id="步骤三-模型推理-1" tabindex="-1"><a class="header-anchor" href="#步骤三-模型推理-1" aria-hidden="true">#</a> 步骤三：模型推理</h4><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>IoTDB&gt; select * from root.eg.voltage limit 96
+-----------------------------+------------------+------------------+------------------+
|                         Time|root.eg.voltage.s0|root.eg.voltage.s1|root.eg.voltage.s2|
+-----------------------------+------------------+------------------+------------------+
|2023-02-14T20:38:32.000+08:00|            2038.0|            2028.0|            2041.0|
|2023-02-14T20:38:38.000+08:00|            2014.0|            2005.0|            2018.0|
|2023-02-14T20:38:44.000+08:00|            2014.0|            2005.0|            2018.0|
......
|2023-02-14T20:47:52.000+08:00|            2024.0|            2016.0|            2027.0|
|2023-02-14T20:47:57.000+08:00|            2024.0|            2016.0|            2027.0|
|2023-02-14T20:48:03.000+08:00|            2024.0|            2016.0|            2027.0|
+-----------------------------+------------------+------------------+------------------+
Total line number = 96

IoTDB&gt; call inference(patchtst, &quot;select s0,s1,s2 from root.eg.voltage&quot;, window=head(96))
+---------+---------+---------+
|  output0|  output1|  output2|
+---------+---------+---------+
|2013.4113|2011.2539|2010.2732|
|2013.2792| 2007.902|2035.7709|
|2019.9114|2011.0453|2016.5848|
......
|2018.7078|2009.7993|2017.3502|
|2033.9062|2010.2087|2018.1757|
|2022.2194| 2011.923|2020.5442|
|2022.1393|2023.4688|2020.9344|
+---------+---------+---------+
Total line number = 48
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将对C相电压的预测的结果和真实结果进行对比，可以得到以下的图像。</p><p>图中 01/25 14:33 之前的数据为输入模型的过去数据， 01/25 14:33 后的黄色线条为模型给出的C相电压预测结果，而蓝色为数据集中实际的A相电压数据（用于进行对比）。</p><figure><img src="https://alioss.timecho.com/docs/img/s5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到，我们使用了过去8分钟的电压的数据，基于之前学习到的序列间相互关系对未来4分钟的A相电压这一数据的可能变化进行了建模，可以看到可视化后预测曲线与实际结果在趋势上保持了较高程度的同步性。</p><h3 id="_6-3-异常检测" tabindex="-1"><a class="header-anchor" href="#_6-3-异常检测" aria-hidden="true">#</a> 6.3 异常检测</h3><p>在民航交通运输业，存在着对乘机旅客数量进行异常检测的需求。异常检测的结果可用于指导调整航班的调度，以使得企业获得更大效益。</p>`,16),K={href:"https://alioss.timecho.com/docs/img/airline.csv",target:"_blank",rel:"noopener noreferrer"},Z=e("br",null,null,-1),j=s(`<h4 id="步骤一-数据导入-2" tabindex="-1"><a class="header-anchor" href="#步骤一-数据导入-2" aria-hidden="true">#</a> 步骤一：数据导入</h4><p>用户可以使用tools文件夹中的<code>import-csv.sh</code> 导入数据集</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>bash ./import-csv.sh -h 127.0.0.1 -p 6667 -u root -pw root -f ../../data.csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="步骤二-模型推理" tabindex="-1"><a class="header-anchor" href="#步骤二-模型推理" aria-hidden="true">#</a> 步骤二：模型推理</h4><p>IoTDB内置有部分可以直接使用的机器学习算法，使用其中的异常检测算法进行预测的样例如下：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>IoTDB&gt; select * from root.eg.airline
+-----------------------------+------------------+
|                         Time|root.eg.airline.s0|
+-----------------------------+------------------+
|1949-01-31T00:00:00.000+08:00|             224.0|
|1949-02-28T00:00:00.000+08:00|             118.0|
|1949-03-31T00:00:00.000+08:00|             132.0|
|1949-04-30T00:00:00.000+08:00|             129.0|
......
|1960-09-30T00:00:00.000+08:00|             508.0|
|1960-10-31T00:00:00.000+08:00|             461.0|
|1960-11-30T00:00:00.000+08:00|             390.0|
|1960-12-31T00:00:00.000+08:00|             432.0|
+-----------------------------+------------------+
Total line number = 144

IoTDB&gt; call inference(_Stray, &quot;select s0 from root.eg.airline&quot;, k=2)
+-------+
|output0|
+-------+
|      0|
|      0|
|      0|
|      0|
......
|      1|
|      1|
|      0|
|      0|
|      0|
|      0|
+-------+
Total line number = 144
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将检测为异常的结果进行绘制，可以得到以下图像。其中蓝色曲线为原时间序列，用红色点特殊标注的时间点为算法检测为异常的时间点。</p><figure><img src="https://alioss.timecho.com/docs/img/s6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到，Stray模型对输入序列变化进行了建模，成功检测出出现异常的时间点。</p>`,9);function X($,ee){const a=d("RouterLink"),l=d("ExternalLinkIcon");return r(),o("div",null,[c(`

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

`),m,e("p",null,[i("AINode 的部署可参考文档 "),n(a,{to:"/zh/UserGuide/V1.3.x/Deployment-and-Maintenance/Deployment-Guide_timecho.html#AINode-%E9%83%A8%E7%BD%B2"},{default:u(()=>[i("部署指导")]),_:1}),i(" 章节。")]),h,e("table",null,[b,e("tbody",null,[e("tr",null,[g,p,_,e("td",null,[e("a",T,[i("Arima参数说明"),n(l)])])]),e("tr",null,[f,S,I,e("td",null,[e("a",L,[i("STLForecaster参数说明"),n(l)])])]),e("tr",null,[x,w,A,e("td",null,[e("a",B,[i("NaiveForecaster参数说明"),n(l)])])]),e("tr",null,[N,D,y,e("td",null,[e("a",E,[i("ExponentialSmoothing参数说明"),n(l)])])]),e("tr",null,[M,Q,C,e("td",null,[e("a",k,[i("GaussianHMM参数说明"),n(l)])])]),e("tr",null,[q,F,O,e("td",null,[e("a",z,[i("GMMHMM参数说明"),n(l)])])]),e("tr",null,[G,R,U,e("td",null,[e("a",V,[i("Stray参数说明"),n(l)])])])])]),H,e("p",null,[i("我们所使用的 ETTh1 的测试集的数据为"),e("a",P,[i("ETTh1"),n(l)]),i("。")]),Y,e("p",null,[i("测试集数据内容为"),e("a",W,[i("data"),n(l)]),i("。")]),J,e("p",null,[i("Airline Passengers一个时间序列数据集，该数据集记录了1949年至1960年期间国际航空乘客数量，间隔一个月进行一次采样。该数据集共含一条时间序列。数据集为"),e("a",K,[i("airline"),n(l)]),i("。"),Z,i(" 在该数据集上，IoTDB-ML的模型推理功能可以通过捕捉序列的变化规律以对序列时间点进行异常检测，赋能交通运输业。")]),j])}const ne=t(v,[["render",X],["__file","IoTDB-AINode_timecho.html.vue"]]);export{ne as default};

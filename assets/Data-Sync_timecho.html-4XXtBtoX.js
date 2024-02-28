import{_ as e,o as t,c as i,a,f as n}from"./app-q7RXDTub.js";const s={},d=n(`<h1 id="data-synchronisation" tabindex="-1"><a class="header-anchor" href="#data-synchronisation" aria-hidden="true">#</a> Data synchronisation</h1><p>Data synchronisation is a typical requirement of industrial IoT. Through the data synchronisation mechanism, data sharing between IoTDBs can be achieved, and a complete data link can be built to meet the needs of intranet and extranet data interoperability, end-to-end cloud synchronisation, data migration, data backup, and so on.</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><h3 id="synchronisation-task-overview" tabindex="-1"><a class="header-anchor" href="#synchronisation-task-overview" aria-hidden="true">#</a> Synchronisation Task Overview</h3><p>A data synchronisation task consists of 2 phases:</p><ul><li>Source phase: This part is used to extract data from the source IoTDB, which is defined in the source part of the SQL statement.</li><li>Sink phase: This part is used to send data to the target IoTDB and is defined in the sink part of the SQL statement.</li></ul><p>Flexible data synchronisation capabilities can be achieved by declaratively configuring the specifics of the 2 sections through SQL statements.</p><h3 id="synchronisation-task-create" tabindex="-1"><a class="header-anchor" href="#synchronisation-task-create" aria-hidden="true">#</a> Synchronisation Task - Create</h3><p>Use the <code>CREATE PIPE</code> statement to create a data synchronisation task, the following attributes <code>PipeId</code> and <code>sink</code> are mandatory, <code>source</code> and <code>processor</code> are optional, when entering the SQL note that the order of the <code>SOURCE </code> and <code>SINK</code> plugins are not interchangeable.</p><p>The SQL example is as follows:</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE PIPE &lt;PipeId&gt; -- PipeId is the name that uniquely identifies the task.
-- Data Extraction Plugin, Required Plugin
WITH SOURCE (
  [&lt;parameter&gt; = &lt;value&gt;,], [&lt;value&gt;,]
-- Data connection plugin, required
WITH SINK (
  [&lt;parameter&gt; = &lt;value&gt;,], -- data connection plugin, required.
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>📌 Note: To use the data synchronisation feature, make sure that automatic metadata creation is enabled on the receiving side</p></blockquote><h3 id="synchronisation-tasks-management" tabindex="-1"><a class="header-anchor" href="#synchronisation-tasks-management" aria-hidden="true">#</a> Synchronisation Tasks - Management</h3><p>The Data Synchronisation task has three states; RUNNING, STOPPED and DROPPED.The task state transitions are shown below:</p><figure><img src="https://alioss.timecho.com/docs/img/状态迁移图.png" alt="State Migration Diagram" tabindex="0" loading="lazy"><figcaption>State Migration Diagram</figcaption></figure><p>A data synchronisation task passes through multiple states during its lifecycle:</p><ul><li>RUNNING: Running state.</li><li>STOPPED: Stopped state. <ul><li>Explanation 1: The initial state of the task is the stopped state, and you need to use SQL statements to start the task.</li><li>Description 2: You can also manually stop a running task with a SQL statement, and the state will change from RUNNING to STOPPED.</li><li>Description 3: When a task has an unrecoverable error, its status will automatically change from RUNNING to STOPPED.</li></ul></li><li>DROPPED: deleted state.</li></ul><p>We provide the following SQL statements to manage the status of synchronisation tasks.</p><h4 id="starting-a-task" tabindex="-1"><a class="header-anchor" href="#starting-a-task" aria-hidden="true">#</a> Starting a Task</h4><p>After creation, the task will not be processed immediately, you need to start the task. Use the <code>START PIPE</code> statement to start the task so that it can begin processing data:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>START PIPE&lt;PipeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="stop-the-task" tabindex="-1"><a class="header-anchor" href="#stop-the-task" aria-hidden="true">#</a> Stop the task</h4><p>Stop processing data:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>STOP PIPE &lt;PipeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="delete-a-task" tabindex="-1"><a class="header-anchor" href="#delete-a-task" aria-hidden="true">#</a> Delete a task</h4><p>Deletes the specified task:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>DROP PIPE &lt;PipeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Deleting a task does not require you to stop synchronising the task first.</p><h4 id="viewing-tasks" tabindex="-1"><a class="header-anchor" href="#viewing-tasks" aria-hidden="true">#</a> Viewing Tasks</h4><p>View all tasks:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>SHOW PIPES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To view a specified task:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>SHOW PIPE &lt;PipeId&gt;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> Plugin</h3><p>In order to make the overall architecture more flexible to match different synchronisation scenarios, IoTDB supports plug-in assembly in the above synchronisation task framework. Some common plug-ins are pre-built for you to use directly, and you can also customise sink plug-ins and load them into the IoTDB system for use.</p><table><thead><tr><th>Modules</th><th>Plug-ins</th><th>Pre-configured Plug-ins</th><th>Customised Plug-ins</th></tr></thead><tbody><tr><td>Extract (Source)</td><td>Source Plugin</td><td>iotdb-source</td><td>Not Supported</td></tr><tr><td>Send (Sink)</td><td>Sink plugin</td><td>iotdb-thrift-sink, iotdb-air-gap-sink</td><td>Support</td></tr></tbody></table><h4 id="preconfigured-plugins" tabindex="-1"><a class="header-anchor" href="#preconfigured-plugins" aria-hidden="true">#</a> Preconfigured Plugins</h4><p>The preset plug-ins are listed below:</p><table><thead><tr><th>Plugin Name</th><th>Type</th><th>Introduction</th><th>Available Versions</th></tr></thead><tbody><tr><td>iotdb-source</td><td>source plugin</td><td>Default source plugin for extracting IoTDB historical or real-time data</td><td>1.2.x</td></tr><tr><td></td><td>iotdb-thrift-sink</td><td>sink plugin</td><td>Used for data transfer between IoTDB (v1.2.0 and above) and IoTDB (v1.2.0 and above). Uses the Thrift RPC framework to transfer data, multi-threaded async non-blocking IO model, high transfer performance, especially for scenarios where the target is distributed</td></tr><tr><td>iotdb-air-gap-sink</td><td>sink plug-in</td><td>Used for data synchronisation from IoTDB (v1.2.2+) to IoTDB (v1.2.2+) across unidirectional data gates. Supported gate models include Nanrui Syskeeper 2000, etc.</td><td>1.2.1+</td></tr></tbody></table><p>Detailed parameters for each plug-in can be found in the <a href="#sink-parameters">Parameter Description</a> section of this document.</p><h4 id="view-plug-ins" tabindex="-1"><a class="header-anchor" href="#view-plug-ins" aria-hidden="true">#</a> View Plug-ins</h4><p>To view the plug-ins in the system (including custom and built-in plug-ins) you can use the following statement:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>SHOW PIPEPLUGINS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The following results are returned:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>IoTDB&gt; show pipeplugins
+--------------------+----------+---------------------------------------------------------------------------+---------+
|          PluginName|PluginType|                                                                  ClassName|PluginJar|
+--------------------+----------+---------------------------------------------------------------------------+---------+
|DO-NOTHING-PROCESSOR|   Builtin|  org.apache.iotdb.commons.pipe.plugin.builtin.processor.DoNothingProcessor|         |
|     DO-NOTHING-SINK|   Builtin|  org.apache.iotdb.commons.pipe.plugin.builtin.sink.DoNothingSink|         |
|  IOTDB-AIR-GAP-SINK|   Builtin|org.apache.iotdb.commons.pipe.plugin.builtin.sink.IoTDBAirGapSink|         |
|        IOTDB-SOURCE|   Builtin|      org.apache.iotdb.commons.pipe.plugin.builtin.source.IoTDBSOURCE|         |
|   IOTDB-THRIFT-SINK|   Builtin|org.apache.iotdb.commons.pipe.plugin.builtin.sink.IoTDBThriftSinkr|         |
|         OPC-UA-SINK|   Builtin|      org.apache.iotdb.commons.pipe.plugin.builtin.sink.OpcUaSink|         |
+--------------------+----------+---------------------------------------------------------------------------+---------+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="use-examples" tabindex="-1"><a class="header-anchor" href="#use-examples" aria-hidden="true">#</a> Use examples</h2><h3 id="full-data-synchronisation" tabindex="-1"><a class="header-anchor" href="#full-data-synchronisation" aria-hidden="true">#</a> Full data synchronisation</h3><p>This example is used to demonstrate the synchronisation of all data from one IoTDB to another IoTDB with the data link as shown below:</p><figure><img src="https://alioss.timecho.com/upload/pipe1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>In this example, we can create a synchronisation task named A2B to synchronise the full amount of data from IoTDB A to IoTDB B. Here we need to use the iotdb-thrift-sink plugin (built-in plugin) which uses sink, and we need to specify the address of the receiving end, in this example, we have specified &#39;sink.ip&#39; and &#39;sink.port&#39;, and we can also specify &#39;sink.port&#39;. This example specifies &#39;sink.ip&#39; and &#39;sink.port&#39;, and also &#39;sink.node-urls&#39;, as in the following example statement:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>create pipe A2B
with sink (
  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;, &#39;sink.ip&#39;=&#39;iotdb-thrift-sink&#39;,
  
  &#39;sink.port&#39;=&#39;6668&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="synchronising-historical-data" tabindex="-1"><a class="header-anchor" href="#synchronising-historical-data" aria-hidden="true">#</a> Synchronising historical data</h3><p>This example is used to demonstrate the synchronisation of data from a certain historical time range (8:00pm 23 August 2023 to 8:00pm 23 October 2023) to another IoTDB, the data link is shown below:</p><figure><img src="https://alioss.timecho.com/upload/pipe2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>In this example we can create a synchronisation task called A2B. First of all, we need to define the range of data to be transferred in source, since the data to be transferred is historical data (historical data refers to the data that existed before the creation of the synchronisation task), we need to configure the source.realtime.enable parameter to false; at the same time, we need to configure the start-time and end-time of the data and the mode mode of the transfer. At the same time, you need to configure the start-time and end-time of the data and the mode mode of transmission, and it is recommended that the mode be set to hybrid mode (hybrid mode is a mixed transmission mode, which adopts the real-time transmission mode when there is no backlog of data, and adopts the batch transmission mode when there is a backlog of data, and automatically switches according to the internal situation of the system).</p><p>The detailed statements are as follows:</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create pipe A2B
WITH SOURCE (
&#39;source&#39;= &#39;iotdb-source&#39;,
&#39;source.realtime.enable&#39; = &#39;false&#39;, 
&#39;source.realtime.mode&#39;=&#39;hybrid&#39;,
&#39;source.history.start-time&#39; = &#39;2023.08.23T08:00:00+00:00&#39;,
&#39;source.history.end-time&#39; = &#39;2023.10.23T08:00:00+00:00&#39;) 
with SINK (
&#39;sink&#39;=&#39;iotdb-thrift-async-sink&#39;,
&#39;sink.node-urls&#39;=&#39;xxxx:6668&#39;,
&#39;sink.batch.enable&#39;=&#39;false&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bidirectional-data-transfer" tabindex="-1"><a class="header-anchor" href="#bidirectional-data-transfer" aria-hidden="true">#</a> Bidirectional data transfer</h3><p>This example is used to demonstrate a scenario where two IoTDBs are dual-active with each other, with the data link shown below:</p><figure><img src="https://alioss.timecho.com/upload/pipe3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>In this example, in order to avoid an infinite loop of data, the parameter <code>&#39;source.forwarding-pipe-requests</code> needs to be set to <code>false</code> on both A and B to indicate that the data transferred from the other pipe will not be forwarded. Also set <code>&#39;source.history.enable&#39;</code> to <code>false</code> to indicate that historical data is not transferred, i.e., data prior to the creation of the task is not synchronised.</p><p>The detailed statement is as follows:</p><p>Execute the following statements on A IoTDB:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>create pipe AB
with source (
  &#39;source.history.enable&#39; = &#39;false&#39;,
  &#39;source.forwarding-pipe-requests&#39; = &#39;false&#39;,
with sink (
  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,
  &#39;sink.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;sink.port&#39;=&#39;6668&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Execute the following statements on B IoTDB:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>create pipe BA
with source (
  &#39;source.history.enable&#39; = &#39;false&#39;,
  &#39;source.forwarding-pipe-requests&#39; = &#39;false&#39;,
with sink (
  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,
  &#39;sink.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;sink.port&#39;=&#39;6667&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cascading-data-transfer" tabindex="-1"><a class="header-anchor" href="#cascading-data-transfer" aria-hidden="true">#</a> Cascading Data Transfer</h3><p>This example is used to demonstrate a cascading data transfer scenario between multiple IoTDBs, where data is synchronised from cluster A to cluster B and then to cluster C. The data link is shown in the figure below:</p><figure><img src="https://alioss.timecho.com/upload/pipe4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>In this example, in order to synchronise the data from cluster A to C, the pipe between BC needs to be configured with <code>source.forwarding-pipe-requests</code> to <code>true</code>, the detailed statement is as follows:</p><p>Execute the following statement on A IoTDB to synchronise data from A to B:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>create pipe AB
with sink (
  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,
  &#39;sink.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;sink.port&#39;=&#39;6668&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Execute the following statement on the B IoTDB to synchronise data in B to C:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>create pipe BC
with source (
  &#39;source.forwarding-pipe-requests&#39; = &#39;true&#39;,
with sink (
  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,
  &#39;sink.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;sink.port&#39;=&#39;6669&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="transmission-of-data-across-a-netgate" tabindex="-1"><a class="header-anchor" href="#transmission-of-data-across-a-netgate" aria-hidden="true">#</a> Transmission of data across a netgate</h3><p>This example is used to demonstrate a scenario where data from one IoTDB is synchronised to another IoTDB via a unidirectional gate, with the data link shown below:</p><figure><img src="https://alioss.timecho.com/upload/pipe5.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>In this example, you need to use the iotdb-air-gap-sink plug-in in the sink task (currently supports some models of network gates, please contact the staff of Tianmou Technology to confirm the specific model), and after configuring the network gate, execute the following statements on IoTDB A, where ip and port fill in the information of the network gate, and the detailed statements are as follows:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>create pipe A2B
with sink (
  &#39;sink&#39;=&#39;iotdb-air-gap-sink&#39;,
  &#39;sink.ip&#39;=&#39;10.53.53.53&#39;,
  &#39;sink.port&#39;=&#39;9780&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference-notes" tabindex="-1"><a class="header-anchor" href="#reference-notes" aria-hidden="true">#</a> Reference: Notes</h2><p>The IoTDB configuration file (iotdb-common.properties) can be modified in order to adjust the parameters for data synchronisation, such as the synchronisation data storage directory. The complete configuration is as follows:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>####################
### Pipe Configuration
####################

# Uncomment the following field to configure the pipe lib directory.
# For Windows platform
# If its prefix is a drive specifier followed by &quot;\\\\&quot;, or if its prefix is &quot;\\\\\\\\&quot;, then the path is
# absolute. Otherwise, it is relative.
# pipe_lib_dir=ext\\\\pipe
# For Linux platform
# If its prefix is &quot;/&quot;, then the path is absolute. Otherwise, it is relative.
# pipe_lib_dir=ext/pipe

# The maximum number of threads that can be used to execute the pipe subtasks in PipeSubtaskExecutor.
# The actual value will be min(pipe_subtask_executor_max_thread_num, max(1, CPU core number / 2)).
# pipe_subtask_executor_max_thread_num=5

# The connection timeout (in milliseconds) for the thrift client.
# pipe_connector_timeout_ms=900000

# The maximum number of selectors that can be used in the async connector.
# pipe_async_connector_selector_number=1

# The core number of clients that can be used in the async connector.
# pipe_async_connector_core_client_number=8

# The maximum number of clients that can be used in the async connector.
# pipe_async_connector_max_client_number=16

# Whether to enable receiving pipe data through air gap.
# The receiver can only return 0 or 1 in tcp mode to indicate whether the data is received successfully.
# pipe_air_gap_receiver_enabled=false

# The port for the server to receive pipe data through air gap.
# pipe_air_gap_receiver_port=9780
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference-parameter-description" tabindex="-1"><a class="header-anchor" href="#reference-parameter-description" aria-hidden="true">#</a> Reference: parameter description</h2><h3 id="source-parameter" tabindex="-1"><a class="header-anchor" href="#source-parameter" aria-hidden="true">#</a> source parameter</h3><table><thead><tr><th>key</th><th>value</th><th>value range</th><th>required or not</th><th>default value</th></tr></thead><tbody><tr><td>source</td><td>iotdb-source</td><td>String: iotdb-source</td><td>required</td><td>-</td></tr><tr><td>source.pattern</td><td>Path prefix for filtering time series</td><td>String: any time series prefix</td><td>optional</td><td>root</td></tr><tr><td>source.history.enable</td><td>Whether to synchronise history data</td><td>Boolean: true, false</td><td>optional</td><td>true</td></tr><tr><td>source.history.start-time</td><td>Synchronise the start event time of historical data, including start-time</td><td>Long: [Long.MIN_VALUE, Long.MAX_VALUE]</td><td>optional</td><td>Long.MIN_VALUE</td></tr><tr><td>source.history.end-time</td><td>end event time for synchronised history data, contains end-time</td><td>Long: [Long.MIN_VALUE, Long.MAX_VALUE]</td><td>optional</td><td>Long.MAX_VALUE</td></tr><tr><td>source.realtime.enable</td><td>Whether to synchronise real-time data</td><td>Boolean: true, false</td><td>optional</td><td>true</td></tr><tr><td>source.realtime.mode</td><td>Extraction mode for real-time data</td><td>String: hybrid, stream, batch</td><td>optional</td><td>hybrid</td></tr><tr><td>source.forwarding-pipe-requests</td><td>Whether to forward data written by another Pipe (usually Data Sync)</td><td>Boolean: true, false</td><td>optional</td><td>true</td></tr></tbody></table><blockquote><p>💎 <strong>Note: Difference between historical and real-time data</strong></p><ul><li><strong>Historical data</strong>: all data with arrival time &lt; current system time when the pipe was created is called historical data</li><li><strong>Real-time data</strong>: All data with arrival time &gt;= current system time when the pipe was created is called real-time data.</li><li><strong>Full data</strong>: full data = historical data + real time data</li></ul></blockquote><blockquote><p>💎 <strong>Explanation: Difference between data extraction modes hybrid, stream and batch</strong></p><ul><li><strong>hybrid (recommended)</strong>: In this mode, the task will give priority to real-time processing and sending of data, and automatically switch to batch sending mode when data backlog occurs, which is characterised by a balance between timeliness of data synchronisation and throughput</li><li><strong>stream</strong>: In this mode, the task will process and send data in real time, which is characterised by high timeliness and low throughput.</li><li><strong>batch</strong>: In this mode, the task will process and send data in batch (by underlying data file), which is characterised by low latency and high throughput.</li></ul></blockquote><h3 id="sink-parameters" tabindex="-1"><a class="header-anchor" href="#sink-parameters" aria-hidden="true">#</a> sink parameters</h3><h4 id="iotdb-thrift-sink" tabindex="-1"><a class="header-anchor" href="#iotdb-thrift-sink" aria-hidden="true">#</a> iotdb-thrift-sink</h4><table><thead><tr><th>key</th><th>value</th><th>value range</th><th>required or not</th><th>default value</th></tr></thead><tbody><tr><td>sink</td><td>iotdb-thrift-sink or iotdb-thrift-sync-sink</td><td>String: iotdb-thrift-sink or iotdb-thrift-sync-sink</td><td>required</td><td></td></tr><tr><td>sink.ip</td><td>Data service IP of a Datanode node in the target IoTDB (note that the synchronisation task does not support forwarding to its own service)</td><td>String</td><td>Optional</td><td>Fill in either sink.node-urls</td></tr><tr><td>sink.port</td><td>Data service port of a Datanode node in the target IoTDB (note that the synchronisation task does not support forwarding to its own service)</td><td>Integer</td><td>Optional</td><td>Fill in either sink.node-urls</td></tr><tr><td>sink.node-urls</td><td>The url of the data service port of any number of DataNode nodes on the target IoTDB (note that the synchronisation task does not support forwarding to its own service)</td><td>String. Example: &#39;127.0.0.1:6667,127.0.0.1:6668,127.0.0.1:6669&#39;, &#39;127.0.0.1:6667&#39;</td><td>Optional</td><td>Fill in either sink.ip:sink.port</td></tr><tr><td>sink.batch.enable</td><td>Whether to enable the log saving wholesale delivery mode, which is used to improve transmission throughput and reduce IOPS</td><td>Boolean: true, false</td><td>Optional</td><td>true</td></tr><tr><td>sink.batch.max-delay-seconds</td><td>Effective when the log save and send mode is turned on, indicates the longest time a batch of data waits before being sent (unit: s)</td><td>Integer</td><td>Optional</td><td>1</td></tr><tr><td>sink.batch.size-bytes</td><td>Effective when log saving and delivery mode is enabled, indicates the maximum saving size of a batch of data (unit: byte)</td><td>Long</td><td>Optional</td><td></td></tr></tbody></table><h4 id="iotdb-air-gap-sink" tabindex="-1"><a class="header-anchor" href="#iotdb-air-gap-sink" aria-hidden="true">#</a> iotdb-air-gap-sink</h4><table><thead><tr><th>key</th><th>value</th><th>value range</th><th>required or not</th><th>default value</th></tr></thead><tbody><tr><td>sink</td><td>iotdb-air-gap-sink</td><td>String: iotdb-air-gap-sink</td><td>required</td><td></td></tr><tr><td>sink.ip</td><td>Data service IP of a Datanode node in the target IoTDB</td><td>String</td><td>Optional</td><td>Fill in either sink.node-urls</td></tr><tr><td>sink.port</td><td>Data service port of a Datanode node in the target IoTDB</td><td>Integer</td><td>Optional</td><td>Fill in either sink.node-urls</td></tr><tr><td>sink.node-urls</td><td>URL of the data service port of any multiple DATANODE nodes on the target</td><td>String.Example: &#39;127.0.0.1:6667,127.0.0.1:6668,127.0.0.1:6669&#39;, &#39;127.0.0.1:6667&#39;</td><td>Optional</td><td>Fill in either sink.ip:sink.port</td></tr><tr><td>sink.air-gap.handshake-timeout-ms</td><td>The timeout length of the handshake request when the sender and the receiver try to establish a connection for the first time, unit: milliseconds</td><td>Integer</td><td>Optional</td><td>5000</td></tr></tbody></table>`,92);function r(o,l){return t(),i("div",null,[a(`

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

`),d])}const h=e(s,[["render",r],["__file","Data-Sync_timecho.html.vue"]]);export{h as default};

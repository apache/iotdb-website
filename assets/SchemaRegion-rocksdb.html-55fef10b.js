import{_ as t,o as e,c as n,a as l,f as d}from"./app-d4806199.js";const a={},i=d(`<h1 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h1><p>When IoTDB service is started, metadata information is organized by loading log file <code>mlog.bin</code> and the results are held<br> in memory for a long time. As metadata continues to grow, memory continues to grow. In order to support the controllable<br> fluctuation in the massive metadata scenario, we provide a metadata storage type based on rocksDB.</p><h1 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h1><p>Firstly, you should package <strong>schema-engine-rocksdb</strong> by the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn clean package <span class="token parameter variable">-pl</span> schema-engine-rocksdb <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After that, you can get a <strong>conf</strong> directory and a <strong>lib</strong> directory in<br> schema-engine-rocksdb/target/schema-engine-rocksdb. Copy the file in the conf directory to the conf directory of server,<br> and copy the files in the lib directory to the lib directory of server.</p><p>Then, open the <strong>iotdb-datanode.properties</strong> in the conf directory of server, and set the <code>schema_engine_mode</code> to<br> Rocksdb_based. Restart the IoTDB, the system will use <code>RSchemaRegion</code> to manage the metadata.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>####################
### Schema Engine Configuration
####################
# Choose the mode of schema engine. The value could be Memory,PBTree and Rocksdb_based. If the provided value doesn&#39;t match any pre-defined value, Memory mode will be used as default.
# Datatype: string
schema_engine_mode=Rocksdb_based

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When rocksdb is specified as the metadata storage type, configuration parameters of rocksDB are open to the public as file. You can modify the configuration file <code>schema-rocksdb.properties</code> to adjust parameters according to your own requirements, such as block cache. If there is no special requirement, use the default value.</p><h1 id="function-support" tabindex="-1"><a class="header-anchor" href="#function-support" aria-hidden="true">#</a> Function Support</h1><p>The module is still being improved, and some functions are not supported at the moment. The function modules are supported as follows:</p><table><thead><tr><th style="text-align:left;">function</th><th style="text-align:right;">support</th></tr></thead><tbody><tr><td style="text-align:left;">timeseries addition and deletion</td><td style="text-align:right;">yes</td></tr><tr><td style="text-align:left;">query the wildcard path(* and **)</td><td style="text-align:right;">yes</td></tr><tr><td style="text-align:left;">tag addition and deletion</td><td style="text-align:right;">yes</td></tr><tr><td style="text-align:left;">aligned timeseries</td><td style="text-align:right;">yes</td></tr><tr><td style="text-align:left;">wildcard node name(*)</td><td style="text-align:right;">no</td></tr><tr><td style="text-align:left;">meta template</td><td style="text-align:right;">no</td></tr><tr><td style="text-align:left;">tag index</td><td style="text-align:right;">no</td></tr><tr><td style="text-align:left;">continuous query</td><td style="text-align:right;">no</td></tr></tbody></table><h1 id="appendix-interface-support" tabindex="-1"><a class="header-anchor" href="#appendix-interface-support" aria-hidden="true">#</a> Appendix: Interface support</h1><p>The external interface, that is, the client can sense, related SQL is not supported;</p><p>The internal interface, that is, the invocation logic of other modules within the service, has no direct dependence on the external SQL;</p><table><thead><tr><th style="text-align:left;">interface</th><th style="text-align:right;">type</th><th style="text-align:center;">support</th><th style="text-align:center;">comment</th></tr></thead><tbody><tr><td style="text-align:left;">createTimeseries</td><td style="text-align:right;">external</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">createAlignedTimeSeries</td><td style="text-align:right;">external</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">showTimeseries</td><td style="text-align:right;">external</td><td style="text-align:center;">part of the support</td><td style="text-align:center;">not support LATEST</td></tr><tr><td style="text-align:left;">changeAlias</td><td style="text-align:right;">external</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">upsertTagsAndAttributes</td><td style="text-align:right;">external</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">addAttributes</td><td style="text-align:right;">external</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">addTags</td><td style="text-align:right;">external</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">dropTagsOrAttributes</td><td style="text-align:right;">external</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">setTagsOrAttributesValue</td><td style="text-align:right;">external</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">renameTagOrAttributeKey</td><td style="text-align:right;">external</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">*template</td><td style="text-align:right;">external</td><td style="text-align:center;">no</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">*trigger</td><td style="text-align:right;">external</td><td style="text-align:center;">no</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">deleteSchemaRegion</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">autoCreateDeviceMNode</td><td style="text-align:right;">internal</td><td style="text-align:center;">no</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">isPathExist</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getAllTimeseriesCount</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getDevicesNum</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getNodesCountInGivenLevel</td><td style="text-align:right;">internal</td><td style="text-align:center;">conditional support</td><td style="text-align:center;">path does not support wildcard</td></tr><tr><td style="text-align:left;">getMeasurementCountGroupByLevel</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getNodesListInGivenLevel</td><td style="text-align:right;">internal</td><td style="text-align:center;">conditional support</td><td style="text-align:center;">path does not support wildcard</td></tr><tr><td style="text-align:left;">getChildNodePathInNextLevel</td><td style="text-align:right;">internal</td><td style="text-align:center;">conditional support</td><td style="text-align:center;">path does not support wildcard</td></tr><tr><td style="text-align:left;">getChildNodeNameInNextLevel</td><td style="text-align:right;">internal</td><td style="text-align:center;">conditional support</td><td style="text-align:center;">path does not support wildcard</td></tr><tr><td style="text-align:left;">getBelongedDevices</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getMatchedDevices</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getMeasurementPaths</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getMeasurementPathsWithAlias</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getAllMeasurementByDevicePath</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getDeviceNode</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getMeasurementMNodes</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getSeriesSchemasAndReadLockDevice</td><td style="text-align:right;">internal</td><td style="text-align:center;">yes</td><td style="text-align:center;"></td></tr></tbody></table>`,16);function r(s,o){return e(),n("div",null,[l(`

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

`),i])}const c=t(a,[["render",r],["__file","SchemaRegion-rocksdb.html.vue"]]);export{c as default};

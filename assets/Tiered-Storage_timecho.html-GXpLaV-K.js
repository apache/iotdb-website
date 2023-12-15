import{_ as t,o as e,c as d,a,f as r}from"./app-NuitFc9A.js";const n={},i=r(`<h1 id="多级存储" tabindex="-1"><a class="header-anchor" href="#多级存储" aria-hidden="true">#</a> 多级存储</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>多级存储功能向用户提供多种存储介质管理的能力，用户可以使用多级存储功能为 IoTDB 配置不同类型的存储介质，并为存储介质进行分级。IoTDB 可以根据数据的冷热程度，仅通过参数配置的方式来支持内存、SSD、普通硬盘到网络硬盘的多级存储。具体的，在 IoTDB 中，多级存储的配置体现为多目录的管理。用户可以将多个存储目录归为同一类，作为一个“层级”向 IoTDB 中配置，这种“层级”我们称之为 storage tier；同时，用户可以根据数据的冷热进行分类，并将不同类别的数据存储到指定的“层级”中。当前 IoTDB 支持通过数据的 TTL 进行冷热数据的分类，当一个层级中的数据不满足当前层级定义的 TTL 规则时，该数据会被自动迁移至下一层级中。</p><h2 id="参数定义" tabindex="-1"><a class="header-anchor" href="#参数定义" aria-hidden="true">#</a> 参数定义</h2><p>在 IoTDB 中开启多级存储，需要进行以下几个方面的配置：</p><ol><li>配置数据目录，并将数据目录分为不同的层级</li><li>配置每个层级所管理的数据的 TTL，以区分不同层级管理的冷热数据类别。</li><li>配置每个层级的最小剩余存储空间比例，当该层级的存储空间触发该阈值时，该层级的数据会被自动迁移至下一层级（可选）。</li></ol><p>具体的参数定义及其描述如下。</p><table><thead><tr><th>配置项</th><th>默认值</th><th>说明</th><th>约束</th></tr></thead><tbody><tr><td>dn_data_dirs</td><td>无</td><td>用来指定不同的存储目录，并将存储目录进行层级划分</td><td>每级存储使用分号分隔，单级内使用逗号分隔；云端配置只能作为最后一级存储且第一级不能作为云端存储；最多配置一个云端对象；远端存储目录使用 OBJECT_STORAGE 来表示</td></tr><tr><td>default_ttl_in_ms</td><td>无</td><td>定义每个层级负责的数据范围，通过 TTL 表示</td><td>每级存储使用分号分隔；层级数量需与 dn_data_dirs 定义的层级数一致</td></tr><tr><td>dn_default_space_move_thresholds</td><td>0.15</td><td>定义每个层级数据目录的最小剩余空间比例；当剩余空间少于该比例时，数据会被自动迁移至下一个层级；当最后一个层级的剩余存储空间到低于此阈值时，会将系统置为 READ_ONLY</td><td>每级存储使用分号分隔；层级数量需与 dn_data_dirs 定义的层级数一致</td></tr><tr><td>object_storage_type</td><td>AWS_S3</td><td>云端存储类型</td><td>IoTDB 当前只支持 AWS S3 作为远端存储类型，此参数不支持修改</td></tr><tr><td>object_storage_bucket</td><td>无</td><td>云端存储 bucket 的名称</td><td>AWS S3 中的 bucket 定义；如果未使用远端存储，无需配置</td></tr><tr><td>object_storage_endpoiont</td><td></td><td>云端存储的 endpoint</td><td>AWS S3 的 endpoint；如果未使用远端存储，无需配置</td></tr><tr><td>object_storage_access_key</td><td></td><td>云端存储的验证信息 key</td><td>AWS S3 的 credential key；如果未使用远端存储，无需配置</td></tr><tr><td>object_storage_access_secret</td><td></td><td>云端存储的验证信息 secret</td><td>AWS S3 的 credential secret；如果未使用远端存储，无需配置</td></tr><tr><td>remote_tsfile_cache_dirs</td><td>data/datanode/data/cache</td><td>云端存储在本地的缓存目录</td><td>如果未使用远端存储，无需配置</td></tr><tr><td>remote_tsfile_cache_page_size_in_kb</td><td>20480</td><td>云端存储在本地缓存文件的块大小</td><td>如果未使用远端存储，无需配置</td></tr><tr><td>remote_tsfile_cache_max_disk_usage_in_mb</td><td>51200</td><td>云端存储本地缓存的最大磁盘占用大小</td><td>如果未使用远端存储，无需配置</td></tr></tbody></table><h2 id="本地多级存储配置示例" tabindex="-1"><a class="header-anchor" href="#本地多级存储配置示例" aria-hidden="true">#</a> 本地多级存储配置示例</h2><p>以下以本地两级存储的配置示例。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 必须配置项
dn_data_dirs=/data1/data;/data2/data,/data3/data;
default_ttl_in_ms=86400000;-1
dn_default_space_move_thresholds=0.2;0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在该示例中，共配置了两个层级的存储，具体为：</p><table><thead><tr><th><strong>层级</strong></th><th><strong>数据目录</strong></th><th><strong>数据范围</strong></th><th><strong>磁盘最小剩余空间阈值</strong></th></tr></thead><tbody><tr><td>层级一</td><td>目录一：/data1/data</td><td>最近 1 天的数据</td><td>20%</td></tr><tr><td>层级二</td><td>目录一：/data2/data目录二：/data3/data</td><td>1 天以前的数据</td><td>10%</td></tr></tbody></table><h2 id="远端多级存储配置示例" tabindex="-1"><a class="header-anchor" href="#远端多级存储配置示例" aria-hidden="true">#</a> 远端多级存储配置示例</h2><p>以下以三级存储为例：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 必须配置项
dn_data_dirs=/data1/data;/data2/data,/data3/data;OBJECT_STORAGE
default_ttl_in_ms=86400000;864000000;-1
dn_default_space_move_thresholds=0.2;0.15;0.1
object_storage_name=AWS_S3
object_storage_bucket=iotdb
object_storage_endpoiont=&lt;your_endpoint&gt;
object_storage_access_key=&lt;your_access_key&gt;
object_storage_access_secret=&lt;your_access_secret&gt;

// 可选配置项
remote_tsfile_cache_dirs=data/datanode/data/cache
remote_tsfile_cache_page_size_in_kb=20971520
remote_tsfile_cache_max_disk_usage_in_mb=53687091200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在该示例中，共配置了三个层级的存储，具体为：</p><table><thead><tr><th><strong>层级</strong></th><th><strong>数据目录</strong></th><th><strong>数据范围</strong></th><th><strong>磁盘最小剩余空间阈值</strong></th></tr></thead><tbody><tr><td>层级一</td><td>目录一：/data1/data</td><td>最近 1 天的数据</td><td>20%</td></tr><tr><td>层级二</td><td>目录一：/data2/data目录二：/data3/data</td><td>过去1 天至过去 10 天内的数据</td><td>15%</td></tr><tr><td>层级三</td><td>远端 AWS S3 存储</td><td>过去 10 天以前的数据</td><td>10%</td></tr></tbody></table>`,18);function s(o,c){return e(),d("div",null,[a(`

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

`),i])}const _=t(n,[["render",s],["__file","Tiered-Storage_timecho.html.vue"]]);export{_ as default};

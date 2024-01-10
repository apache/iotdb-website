import{_ as e,o as a,c as i,a as t,f as n}from"./app-saYZgPSe.js";const r={},o=n('<h1 id="集群数据分区与负载均衡" tabindex="-1"><a class="header-anchor" href="#集群数据分区与负载均衡" aria-hidden="true">#</a> 集群数据分区与负载均衡</h1><p>IoTDB 以数据分区（DataRegion）为单位对元数据和数据进行管理，从序列和时间两个维度进行数据划分。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/分区槽与数据分区.png?raw=true"><h2 id="分区槽" tabindex="-1"><a class="header-anchor" href="#分区槽" aria-hidden="true">#</a> 分区槽</h2><p>一个序列分区槽和一个时间分区槽可以组合产生一个数据分区(当该序列分区槽在该时间分区槽下有对应数据时)。</p><h3 id="序列分区槽" tabindex="-1"><a class="header-anchor" href="#序列分区槽" aria-hidden="true">#</a> 序列分区槽</h3><p>每个数据库持有固定数量的序列分区槽，默认为1000个。该数据库管理的每个时间序列都将通过序列分区算法（通常为某种哈希算法）被分配给唯一的序列分区槽管理。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/SeriesPartitionSlot.png?raw=true"><h3 id="时间分区槽" tabindex="-1"><a class="header-anchor" href="#时间分区槽" aria-hidden="true">#</a> 时间分区槽</h3><p>每个时间序列都将持续产生数据，如果一个时间序列产生的全部数据持续存储于一个节点，那么集群新增的 DataNode 可能无法得到有效利用。</p><p>时间分区槽从时间维度对时序数据进行分片（默认为每 7 天一个时间分区），使得集群时序数据的存储易于规划。</p><h2 id="元数据分区" tabindex="-1"><a class="header-anchor" href="#元数据分区" aria-hidden="true">#</a> 元数据分区</h2><p>单个数据库的元数据分区管理，会按照一定的负载均衡策略，将所有序列槽分配到相应的 SchemaRegionGroup 中，进而在集群中横向扩展。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/SchemaRegion.png?raw=true"><h2 id="数据分区" tabindex="-1"><a class="header-anchor" href="#数据分区" aria-hidden="true">#</a> 数据分区</h2><p>会按照一定的负载均衡策略，进行时间分区槽和序列分区槽的划分，并分配到相应的 DataRegionGroup 中，进而在集群中横向扩展。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/DataRegion.png?raw=true"><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><p>当集群容量保持不变时，数据会被均匀分配到各个节点，以实现存储和计算资源的均衡利用。</p><p>同时，在进行集群扩容时，系统会自动增加区域（region）的数量，以充分利用所有节点的计算资源，无需人工干预。这种动态扩展能够提高集群的性能和可扩展性，使整个系统更加灵活和高效。</p>',20);function h(s,d){return a(),i("div",null,[t(`

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

`),o])}const p=e(r,[["render",h],["__file","Cluster-data-partitioning.html.vue"]]);export{p as default};

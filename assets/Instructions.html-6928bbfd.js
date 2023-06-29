import{_ as e,O as i,P as n,ah as a,aW as t}from"./framework-16612ca2.js";const r={},o=t('<h1 id="触发器" tabindex="-1"><a class="header-anchor" href="#触发器" aria-hidden="true">#</a> 触发器</h1><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2><p>触发器提供了一种侦听序列数据变动的机制。配合用户自定义逻辑，可完成告警、数据转发等功能。</p><p>触发器基于 Java 反射机制实现。用户通过简单实现 Java 接口，即可实现数据侦听。IoTDB 允许用户动态注册、卸载触发器，在注册、卸载期间，无需启停服务器。</p><h3 id="侦听模式" tabindex="-1"><a class="header-anchor" href="#侦听模式" aria-hidden="true">#</a> 侦听模式</h3><p>IoTDB 的单个触发器可用于侦听符合特定模式的时间序列的数据变动，如时间序列 root.sg.a 上的数据变动，或者符合路径模式 root.**.a 的时间序列上的数据变动。您在注册触发器时可以通过 SQL 语句指定触发器侦听的路径模式。</p><h3 id="触发器类型" tabindex="-1"><a class="header-anchor" href="#触发器类型" aria-hidden="true">#</a> 触发器类型</h3><p>目前触发器分为两类，您在注册触发器时可以通过 SQL 语句指定类型：</p><ul><li>有状态的触发器。该类触发器的执行逻辑可能依赖前后的多条数据，框架会将不同节点写入的数据汇总到同一个触发器实例进行计算，来保留上下文信息，通常用于采样或者统计一段时间的数据聚合信息。集群中只有一个节点持有有状态触发器的实例。</li><li>无状态的触发器。触发器的执行逻辑只和当前输入的数据有关，框架无需将不同节点的数据汇总到同一个触发器实例中，通常用于单行数据的计算和异常检测等。集群中每个节点均持有无状态触发器的实例。</li></ul><h3 id="触发时机" tabindex="-1"><a class="header-anchor" href="#触发时机" aria-hidden="true">#</a> 触发时机</h3><p>触发器的触发时机目前有两种，后续会拓展其它触发时机。您在注册触发器时可以通过 SQL 语句指定触发时机：</p><ul><li>BEFORE INSERT，即在数据持久化之前触发。请注意，目前触发器并不支持数据清洗，不会对要持久化的数据本身进行变动。</li><li>AFTER INSERT，即在数据持久化之后触发。</li></ul>',12);function s(h,c){return i(),n("div",null,[a(`

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

`),o])}const l=e(r,[["render",s],["__file","Instructions.html.vue"]]);export{l as default};
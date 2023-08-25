import{_ as t,o as e,c as d,a as n,f as r}from"./app-ca59fe27.js";const i={},o=r('<h1 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h1><p>聚合函数是多对一函数。它们对一组值进行聚合计算，得到单个聚合结果。</p><p>除了 <code>COUNT()</code> 之外，其他所有聚合函数都忽略空值，并在没有输入行或所有值为空时返回空值。 例如，<code>SUM()</code> 返回 null 而不是零，而 <code>AVG()</code> 在计数中不包括 null 值。</p><p>IoTDB 支持的聚合函数如下：</p><table><thead><tr><th>函数名</th><th>功能描述</th><th>允许的输入类型</th><th>输出类型</th></tr></thead><tbody><tr><td>SUM</td><td>求和。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>DOUBLE</td></tr><tr><td>COUNT</td><td>计算数据点数。</td><td>所有类型</td><td>INT</td></tr><tr><td>AVG</td><td>求平均值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>DOUBLE</td></tr><tr><td>EXTREME</td><td>求具有最大绝对值的值。如果正值和负值的最大绝对值相等，则返回正值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>与输入类型一致</td></tr><tr><td>MAX_VALUE</td><td>求最大值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>与输入类型一致</td></tr><tr><td>MIN_VALUE</td><td>求最小值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>与输入类型一致</td></tr><tr><td>FIRST_VALUE</td><td>求时间戳最小的值。</td><td>所有类型</td><td>与输入类型一致</td></tr><tr><td>LAST_VALUE</td><td>求时间戳最大的值。</td><td>所有类型</td><td>与输入类型一致</td></tr><tr><td>MAX_TIME</td><td>求最大时间戳。</td><td>所有类型</td><td>Timestamp</td></tr><tr><td>MIN_TIME</td><td>求最小时间戳。</td><td>所有类型</td><td>Timestamp</td></tr></tbody></table>',5);function a(s,c){return e(),d("div",null,[n(`

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

`),o])}const T=t(i,[["render",a],["__file","Aggregation.html.vue"]]);export{T as default};

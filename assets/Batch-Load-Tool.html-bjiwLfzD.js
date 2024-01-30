import{_ as s,r as a,o as r,c,a as d,d as n,e,b as o,w as i}from"./app-BqaE_o4D.js";const l={},h=n("h1",{id:"批量数据导入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#批量数据导入","aria-hidden":"true"},"#"),e(" 批量数据导入")],-1),u=n("p",null,"针对于不同场景，IoTDB 为用户提供多种批量导入数据的操作方式，本章节向大家介绍最为常用的两种方式为 CSV文本形式的导入 和 TsFile文件形式的导入。",-1),T=n("h2",{id:"tsfile批量导入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tsfile批量导入","aria-hidden":"true"},"#"),e(" TsFile批量导入")],-1),f=n("h2",{id:"csv批量导入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#csv批量导入","aria-hidden":"true"},"#"),e(" CSV批量导入")],-1);function p(_,m){const t=a("RouterLink");return r(),c("div",null,[d(`

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

`),h,u,T,n("p",null,[e("TsFile 是在 IoTDB 中使用的时间序列的文件格式，您可以通过CLI等工具直接将存有时间序列的一个或多个 TsFile 文件导入到另外一个正在运行的IoTDB实例中。具体操作方式请参考"),o(t,{to:"/zh/UserGuide/V1.0.x/Maintenance-Tools/Load-Tsfile.html"},{default:i(()=>[e("TsFile 导入工具")]),_:1}),e("，"),o(t,{to:"/zh/UserGuide/V1.0.x/Maintenance-Tools/TsFile-Load-Export-Tool.html"},{default:i(()=>[e("TsFile 导出工具")]),_:1}),e("。")]),f,n("p",null,[e("CSV 是以纯文本形式存储表格数据，您可以在CSV文件中写入多条格式化的数据，并批量的将这些数据导入到 IoTDB 中，在导入数据之前，建议在IoTDB中创建好对应的元数据信息。如果忘记创建元数据也不要担心，IoTDB 可以自动将CSV中数据推断为其对应的数据类型，前提是你每一列的数据类型必须唯一。除单个文件外，此工具还支持以文件夹的形式导入多个 CSV 文件，并且支持设置如时间精度等优化参数。具体操作方式请参考 "),o(t,{to:"/zh/UserGuide/V1.0.x/Maintenance-Tools/CSV-Tool.html"},{default:i(()=>[e("CSV 导入导出工具")]),_:1}),e("。")])])}const I=s(l,[["render",p],["__file","Batch-Load-Tool.html.vue"]]);export{I as default};

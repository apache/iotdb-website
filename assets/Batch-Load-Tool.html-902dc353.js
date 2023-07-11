import{_ as n,M as s,N as r,af as d,O as t,Q as e,ag as a,ac as i,C as c}from"./framework-ae7271bd.js";const l={},h=t("h1",{id:"batch-data-load",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#batch-data-load","aria-hidden":"true"},"#"),e(" Batch Data Load")],-1),u=t("p",null,"In different scenarios, the IoTDB provides a variety of methods for importing data in batches. This section describes the two most common methods for importing data in CSV format and TsFile format.",-1),f=t("h2",{id:"tsfile-batch-load",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tsfile-batch-load","aria-hidden":"true"},"#"),e(" TsFile Batch Load")],-1),m=t("h2",{id:"csv-batch-load",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#csv-batch-load","aria-hidden":"true"},"#"),e(" CSV Batch Load")],-1);function p(T,_){const o=c("RouterLink");return s(),r("div",null,[d(`

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

`),h,u,f,t("p",null,[e("TsFile is the file format of time series used in IoTDB. You can directly import one or more TsFile files with time series into another running IoTDB instance through tools such as CLI. For details, see "),a(o,{to:"/UserGuide/Master/Maintenance-Tools/Load-Tsfile.html"},{default:i(()=>[e("TsFile Load Tool")]),_:1}),e(),a(o,{to:"/UserGuide/Master/Maintenance-Tools/TsFile-Load-Export-Tool.html"},{default:i(()=>[e("TsFile Export Tools")]),_:1}),e(".")]),m,t("p",null,[e("CSV stores table data in plain text. You can write multiple formatted data into a CSV file and import the data into the IoTDB in batches. Before importing data, you are advised to create the corresponding metadata in the IoTDB. Don't worry if you forget to create one, the IoTDB can automatically infer the data in the CSV to its corresponding data type, as long as you have a unique data type for each column. In addition to a single file, the tool supports importing multiple CSV files as folders and setting optimization parameters such as time precision. For details, see "),a(o,{to:"/UserGuide/Master/Maintenance-Tools/CSV-Tool.html"},{default:i(()=>[e("CSV Load Export Tools")]),_:1}),e(".")])])}const L=n(l,[["render",p],["__file","Batch-Load-Tool.html.vue"]]);export{L as default};

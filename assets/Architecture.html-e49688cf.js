import{_ as t,o,c as i,a as s,d as e,e as a}from"./app-f4b54c17.js";const n={},r=e("h2",{id:"system-architecture",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#system-architecture","aria-hidden":"true"},"#"),a(" System Architecture")],-1),c=e("p",null,"Besides IoTDB engine, we also developed several components to provide better IoT service. All components are referred to below as the IoTDB suite, and IoTDB refers specifically to the IoTDB engine.",-1),l=e("p",null,"IoTDB suite can provide a series of functions in the real situation such as data collection, data writing, data storage, data query, data visualization and data analysis. Figure 1.1 shows the overall application architecture brought by all the components of the IoTDB suite.",-1),d=e("img",{style:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:"https://alioss.timecho.com/docs/img/UserGuide/IoTDB-Introduction/Architecture/Structure-of-Apache-IoTDB.png?raw=true"},null,-1),h=e("p",null,"As shown in Figure 1.1, users can use JDBC to import timeseries data collected by sensor on the device to local/remote IoTDB. These timeseries data may be system state data (such as server load and CPU memory, etc.), message queue data, timeseries data from applications, or other timeseries data in the database. Users can also write the data directly to the TsFile (local or on HDFS).",-1),u=e("p",null,"TsFile could be written to the HDFS, thereby implementing data processing tasks such as abnormality detection and machine learning on the Hadoop or Spark data processing platform.",-1),p=e("p",null,"For the data written to HDFS or local TsFile, users can use TsFile-Hadoop-Connector or TsFile-Spark-Connector to allow Hadoop or Spark to process data.",-1),m=e("p",null,"The results of the analysis can be write back to TsFile in the same way.",-1),f=e("p",null,"Also, IoTDB and TsFile provide client tools to meet the various needs of users in writing and viewing data in SQL form, script form and graphical form.",-1);function g(_,w){return o(),i("div",null,[s(`

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

`),r,c,l,d,h,u,p,m,f])}const y=t(n,[["render",g],["__file","Architecture.html.vue"]]);export{y as default};

import{_ as a,r as i,o as r,c as s,a as h,d as e,e as t,b as n,f as l}from"./app-c075fd0e.js";const d={},c=e("h1",{id:"some-notes-on-release-0-9-3-and-upcoming-0-10-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#some-notes-on-release-0-9-3-and-upcoming-0-10-0","aria-hidden":"true"},"#"),t(" Some Notes on Release 0.9.3 and upcoming 0.10.0")],-1),u=e("em",null,"Note:",-1),p=e("a",{href:"mailto:qjl16@mails.tsinghua.edu.cn"},"Jialin Qiao",-1),m={href:"https://mp.weixin.qq.com/s/MUoUsoRRDUqkQb0-XekXbA",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),b=e("a",{href:"www.DeepL.com/Translator"},"DeepL",-1),f=e("a",{href:"mailto:jfeinauer@pragmaticminds.de"},"Julian Feinauer",-1),_=e("h2",{id:"notes-on-0-9-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-on-0-9-3","aria-hidden":"true"},"#"),t(" Notes on 0.9.3")],-1),w=e("p",null,"It's been a long time since I've written an article, I've been working on development and took advantage of this release to write a bit now. The Release 0.9.3 is a minor release with no changes in file structure or RPC and can be upgraded painlessly. In fact, shortly after 0.9.2 was released, a serious bug was found, so the IoTDB Community decided to Release 0.9.3 shortly after.",-1),y=e("p",null,"Let me say a few general things.",-1),T={href:"http://iotdb.apache.org/",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"The official website has also added Chinese and English design documents, although not yet complete, but basically all the big modules are documented in both languages and the IoTDB Community highly welcomes suggestions how to improve or contributions that do so:",-1),I={href:"http://iotdb.apache.org/SystemDesign/Architecture/Architecture.html",target:"_blank",rel:"noopener noreferrer"},k=e("br",null,null,-1),S={href:"http://iotdb.apache.org/zh/SystemDesign/Architecture/Architecture.html",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"The Release 0.9.3 is a minor/bugfix release in the 0.9 release series that mainly fixes one serious bug: if the wrong metadata operation is performed, such as deleting a non-existent database, the metadata is empty after server restart. This is caused by the metadata module beeing nulled when the metadata log was redone. The fix is to skip the wrong metadata log. In the preparation of version 0.10, we take an execution before logging approach and do not log errors again.",-1),A={href:"https://github.com/apache/iotdb/issues",target:"_blank",rel:"noopener noreferrer"},v=l('<h2 id="fixes-in-0-9-3" tabindex="-1"><a class="header-anchor" href="#fixes-in-0-9-3" aria-hidden="true">#</a> Fixes in 0.9.3</h2><ul><li>[IOTDB-531] Fix the bug that JDBC UTL does not support domain names</li><li>[IOTDB-563] Fix pentaho cannot be downloaded</li><li>[IOTDB-608] Error metadata log skipped on reboot</li><li>[IOTDB-634] Fixes data merge issues when setting the underlying file system to HDFS</li><li>[IOTDB-636] Fix Grafana connector not using correct time granularity</li><li>[IOTDB-528] Adding a downsampling method for the Grafana connector</li><li>[IOTDB-635] When Grafana uses the wrong aggregation for a data type, modify to the generic aggregation function last retry</li><li>Remove the official website about loading external TsFile documentation (this feature is version 0.10, not yet released)</li></ul>',2),B={href:"https://downloads.apache.org/incubator/iotdb/0.9.3-incubating/apache-iotdb-0.9.3-incubating-bin.zip",target:"_blank",rel:"noopener noreferrer"},L={href:"http://iotdb.apache.org/UserGuide/Master/0-Get%20Started/1-QuickStart.html",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,"The github repository has a well-established example module that contains sample code for each of the other modules.",-1),R=e("h2",{id:"some-previews-about-upcoming-release-0-10-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#some-previews-about-upcoming-release-0-10-0","aria-hidden":"true"},"#"),t(" Some previews About upcoming release 0.10.0")],-1),F=e("p",null,"The release manual for version 0.9.3 is shorter because many features and improvements were put into version 0.10.0, including query engine upgrades, TsFile structure upgrades, cache optimization, tags, property management, and more. The file structure of 0.10.0 has been fixed and the upgrade tool is almost complete, 0.10.0 will be released soon.",-1);function O(U,q){const o=i("ExternalLinkIcon");return r(),s("div",null,[h(`

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

`),c,e("p",null,[u,t(" This Blog Post was initially written by "),p,t(" and has been published here: "),e("a",m,[t("https://mp.weixin.qq.com/s/MUoUsoRRDUqkQb0-XekXbA"),n(o)]),t("."),g,t(" This Text was translated with "),b,t(" and slightly corrected by "),f,t(".")]),_,w,y,e("p",null,[t("The official website of IoTDB has gotten a big upgrade in the last few months, with a much more beautiful interface than before! You can have a look at: "),e("a",T,[t("http://iotdb.apache.org/"),n(o)]),t(".")]),x,e("p",null,[t("English: "),e("a",I,[t("http://iotdb.apache.org/SystemDesign/Architecture/Architecture.html"),n(o)]),k,t(" Chinese: "),e("a",S,[t("http://iotdb.apache.org/zh/SystemDesign/Architecture/Architecture.html"),n(o)])]),D,e("p",null,[t("The "),e("a",A,[t("issue module"),n(o)]),t(" is open on Github, so you can ask questions about bugs or new requirements, and we will answer them promptly.")]),v,e("p",null,[t("To download and use the new Version of IoTDB go to: "),e("a",B,[t("https://downloads.apache.org/incubator/iotdb/0.9.3-incubating/apache-iotdb-0.9.3-incubating-bin.zip"),n(o)])]),e("p",null,[t("User documentation for this release can be found under: "),e("a",L,[t("http://iotdb.apache.org/UserGuide/Master/0-Get Started/1-QuickStart.html"),n(o)])]),N,R,F])}const E=a(d,[["render",O],["__file","Release0_93.html.vue"]]);export{E as default};

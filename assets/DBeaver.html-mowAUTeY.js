import{_ as o,r as s,o as r,c as l,a as d,d as e,e as i,b as n,f as t}from"./app-a-RiV1so.js";const c={},p=e("h2",{id:"dbeaver-iotdb",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-iotdb","aria-hidden":"true"},"#"),i(" DBeaver-IoTDB")],-1),h=e("p",null,"DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB via the JDBC driver.",-1),g=e("h3",{id:"dbeaver-installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-installation","aria-hidden":"true"},"#"),i(" DBeaver Installation")],-1),u={href:"https://dbeaver.io/download/",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"iotdb-installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iotdb-installation","aria-hidden":"true"},"#"),i(" IoTDB Installation")],-1),b={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"Version >= 0.13.0",-1),v={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},_=e("h3",{id:"connect-iotdb-and-dbeaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#connect-iotdb-and-dbeaver","aria-hidden":"true"},"#"),i(" Connect IoTDB and DBeaver")],-1),D=t(`<li><p>Start IoTDB server</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./sbin/start-server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Start DBeaver</p></li><li><p>Open Driver Manager</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Create a new driver type for IoTDB</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>`,4),B={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},I=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn clean package <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),w=t('<li><p>Find and add a lib named <code>apache-iotdb-jdbc-{version}-jar-with-dependencies.jar</code>, which should be under <code>jdbc/target/</code>, then select <code>Find Class</code>.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Edit the driver Settings</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Open New DataBase Connection and select iotdb</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Edit JDBC Connection Settings</p></li>',4),y=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JDBC URL: jdbc:iotdb://127.0.0.1:6667/
Username: root
Password: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="11"><li>Test Connection</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="12"><li>Enjoy IoTDB with DBeaver</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,6);function x(S,E){const a=s("ExternalLinkIcon");return r(),l("div",null,[d(`

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

`),p,h,g,e("ul",null,[e("li",null,[i("From DBeaver site: "),e("a",u,[i("https://dbeaver.io/download/"),n(a)])])]),m,e("ul",null,[e("li",null,[i("Download binary version "),e("ul",null,[e("li",null,[i("From IoTDB site: "),e("a",b,[i("https://iotdb.apache.org/Download/"),n(a)])]),f])]),e("li",null,[i("Or compile from source code "),e("ul",null,[e("li",null,[i("See "),e("a",v,[i("https://github.com/apache/iotdb"),n(a)])])])])]),_,e("ol",null,[D,e("li",null,[e("p",null,[i("Download "),e("a",B,[i("Sources"),n(a)]),i("，unzip it and compile jdbc driver by the following command")]),I]),w]),y])}const k=o(c,[["render",x],["__file","DBeaver.html.vue"]]);export{k as default};

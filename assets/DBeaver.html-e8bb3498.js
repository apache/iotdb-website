import{_ as r}from"./01-e2efc420.js";import{_ as o,a as s,b as l,c as d,d as c,e as p,f as h}from"./09-6c9e330b.js";import{_ as g,E as u,F as b,af as f,G as e,I as a,ag as n,aT as t,C as _}from"./framework-6055ecdb.js";const m={},v=e("h2",{id:"dbeaver-iotdb",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-iotdb","aria-hidden":"true"},"#"),a(" DBeaver-IoTDB")],-1),D=e("p",null,"DBeaver 是一个 SQL 客户端和数据库管理工具。DBeaver 可以使用 IoTDB 的 JDBC 驱动与 IoTDB 进行交互。",-1),B=e("h3",{id:"dbeaver-安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-安装","aria-hidden":"true"},"#"),a(" DBeaver 安装")],-1),x={href:"https://dbeaver.io/download/",target:"_blank",rel:"noopener noreferrer"},I=e("h3",{id:"iotdb-安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iotdb-安装","aria-hidden":"true"},"#"),a(" IoTDB 安装")],-1),w={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},T=e("li",null,"版本 >= 0.13.0",-1),k={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"连接-iotdb-与-dbeaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#连接-iotdb-与-dbeaver","aria-hidden":"true"},"#"),a(" 连接 IoTDB 与 DBeaver")],-1),S=t(`<li><p>启动 IoTDB 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./sbin/start-server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>启动 DBeaver</p></li><li><p>打开 Driver Manager</p><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>为 IoTDB 新建一个驱动类型</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>',4),L={href:"https://iotdb.apache.org/zh/Download/",target:"_blank",rel:"noopener noreferrer"},N=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn clean package <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),C=t('<li><p>在<code>jdbc/target/</code>下找到并添加名为<code>apache-iotdb-jdbc-{version}-jar-with-dependencies.jar</code>的库，点击 <code>Find Class</code>。</p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>编辑驱动设置</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>新建 DataBase Connection， 选择 iotdb</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>编辑 JDBC 连接设置</p></li>',4),z=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JDBC URL: jdbc:iotdb://127.0.0.1:6667/
Username: root
Password: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="11"><li>测试连接</li></ol><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="12"><li>可以开始通过 DBeaver 使用 IoTDB</li></ol><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',6);function A(j,E){const i=_("ExternalLinkIcon");return u(),b("div",null,[f(`

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

`),v,D,B,e("ul",null,[e("li",null,[a("DBeaver 下载地址："),e("a",x,[a("https://dbeaver.io/download/"),n(i)])])]),I,e("ul",null,[e("li",null,[a("下载 IoTDB 二进制版本 "),e("ul",null,[e("li",null,[a("IoTDB 下载地址："),e("a",w,[a("https://iotdb.apache.org/Download/"),n(i)])]),T])]),e("li",null,[a("或者从源代码中编译 "),e("ul",null,[e("li",null,[a("参考 "),e("a",k,[a("https://github.com/apache/iotdb"),n(i)])])])])]),y,e("ol",null,[S,e("li",null,[e("p",null,[a("下载"),e("a",L,[a("源代码"),n(i)]),a("，解压并运行下面的命令编译 jdbc 驱动")]),N]),C]),z])}const R=g(m,[["render",A],["__file","DBeaver.html.vue"]]);export{R as default};
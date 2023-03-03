import{_ as t,a as o}from"./81462909-53a53e80-91e8-11ea-98df-0012380da0b2-0b678c84.js";import{_ as a,E as s,F as r,af as l,G as e,I as n,ag as c,aT as d,C as h}from"./framework-6055ecdb.js";const p={},u=d(`<h2 id="jmx-工具" tabindex="-1"><a class="header-anchor" href="#jmx-工具" aria-hidden="true">#</a> JMX 工具</h2><p>Java VisualVM 提供了一个可视化的界面，用于查看 Java 应用程序在 Java 虚拟机（JVM）上运行的详细信息，并对这些应用程序进行故障排除和分析。</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>第一步：获得 IoTDB-server。</p><p>第二步：编辑配置文件</p><ul><li><p>IoTDB 在本地 查看<code>$IOTDB_HOME/conf/jmx.password</code>，使用默认用户或者在此添加新用户 若新增用户，编辑<code>$IOTDB_HOME/conf/jmx.access</code>，添加新增用户权限</p></li><li><p>IoTDB 不在本地 编辑<code>$IOTDB_HOME/conf/iotdb-env.sh</code> 修改以下参数：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JMX_LOCAL=&quot;false&quot;
JMX_IP=&quot;the_real_iotdb_server_ip&quot;  # 填写实际 IoTDB 的 IP 地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看<code>$IOTDB_HOME/conf/jmx.password</code>，使用默认用户或者在此添加新用户 若新增用户，编辑<code>$IOTDB_HOME/conf/jmx.access</code>，添加新增用户权限</p><p>第三步：启动 IoTDB-server。</p><p>第四步：使用 jvisualvm</p>`,10),m={href:"https://visualvm.github.io/download.html",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,[e("p",null,"打开 jvisualvm")],-1),f=e("li",null,[e("p",null,[n("在左侧导航栏空白处右键 -> 添加 JMX 连接 "),e("img",{style:{width:"100%","max-width":"300px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:t})])],-1),g=e("li",null,[e("p",null,[n("填写信息进行登录，按下图分别填写，注意需要勾选”不要求 SSL 连接”。 例如： 连接：192.168.130.15:31999 用户名：iotdb 口令：passw!d "),e("img",{style:{width:"100%","max-width":"300px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:o})])],-1);function x(v,I){const i=h("ExternalLinkIcon");return s(),r("div",null,[l(`

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

`),u,e("ol",null,[e("li",null,[e("p",null,[n("确保安装 jdk 8。jdk 8 以上需要 "),e("a",m,[n("下载 visualvm"),c(i)])])]),_,f,g])])}const w=a(p,[["render",x],["__file","JMX-Tool.html.vue"]]);export{w as default};
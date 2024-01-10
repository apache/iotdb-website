import{_ as o,r as a,o as s,c as r,a as c,d as e,e as i,b as d,f as t}from"./app-6NKkOQun.js";const l={},h=t(`<h1 id="jmx-工具" tabindex="-1"><a class="header-anchor" href="#jmx-工具" aria-hidden="true">#</a> JMX 工具</h1><p>Java VisualVM 提供了一个可视化的界面，用于查看 Java 应用程序在 Java 虚拟机（JVM）上运行的详细信息，并对这些应用程序进行故障排除和分析。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>第一步：获得 IoTDB-server。</p><p>第二步：编辑配置文件</p><ul><li><p>IoTDB 在本地<br> 查看<code>$IOTDB_HOME/conf/jmx.password</code>，使用默认用户或者在此添加新用户<br> 若新增用户，编辑<code>$IOTDB_HOME/conf/jmx.access</code>，添加新增用户权限</p></li><li><p>IoTDB 不在本地<br> 编辑<code>$IOTDB_HOME/conf/datanode-env.sh</code><br> 修改以下参数：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JMX_LOCAL=&quot;false&quot;
JMX_IP=&quot;the_real_iotdb_server_ip&quot;  # 填写实际 IoTDB 的 IP 地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看<code>$IOTDB_HOME/conf/jmx.password</code>，使用默认用户或者在此添加新用户<br> 若新增用户，编辑<code>$IOTDB_HOME/conf/jmx.access</code>，添加新增用户权限</p><p>第三步：启动 IoTDB-server。</p><p>第四步：使用 jvisualvm</p>`,10),p={href:"https://visualvm.github.io/download.html",target:"_blank",rel:"noopener noreferrer"},m=t('<li><p>打开 jvisualvm</p></li><li><p>在左侧导航栏空白处右键 -&gt; 添加 JMX 连接<br><img style="width:100%;max-width:300px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/81462914-5738c580-91e8-11ea-94d1-4ff6607e7e2c.png"></p></li><li><p>填写信息进行登录，按下图分别填写，注意需要勾选”不要求 SSL 连接”。<br> 例如：<br> 连接：192.168.130.15:31999<br> 用户名：iotdb<br> 口令：passw!d<br><img style="width:100%;max-width:300px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/81462909-53a53e80-91e8-11ea-98df-0012380da0b2.png"></p></li>',3);function u(b,g){const n=a("ExternalLinkIcon");return s(),r("div",null,[c(`

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

`),h,e("ol",null,[e("li",null,[e("p",null,[i("确保安装 jdk 8。jdk 8 以上需要 "),e("a",p,[i("下载 visualvm"),d(n)])])]),m])])}const _=o(l,[["render",u],["__file","JMX-Tool.html.vue"]]);export{_ as default};

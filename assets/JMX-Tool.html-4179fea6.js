import{_ as t,r as o,o as s,c as r,a as d,d as e,e as i,b as c,f as a}from"./app-4c0da614.js";const l={},h=a(`<h1 id="jmx-tool" tabindex="-1"><a class="header-anchor" href="#jmx-tool" aria-hidden="true">#</a> JMX Tool</h1><p>Java VisualVM is a tool that provides a visual interface for viewing detailed information about Java applications while they are running on a Java Virtual Machine (JVM), and for troubleshooting and profiling these applications.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Step1: Fetch IoTDB-sever.</p><p>Step2: Edit configuration.</p><ul><li><p>IoTDB is LOCAL<br> View <code>$IOTDB_HOME/conf/jmx.password</code>, and use default user or add new users here.<br> If new users are added, remember to edit <code>$IOTDB_HOME/conf/jmx.access</code> and add new users&#39; access</p></li><li><p>IoTDB is not LOCAL<br> Edit <code>$IOTDB_HOME/conf/datanode-env.sh</code>, and modify config below:</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JMX_LOCAL=&quot;false&quot;
JMX_IP=&quot;the_real_iotdb_server_ip&quot;  # Write the actual IoTDB IP address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>View <code>$IOTDB_HOME/conf/jmx.password</code>, and use default user or add new users here.<br> If new users are added, remember to edit <code>$IOTDB_HOME/conf/jmx.access</code> and add new users&#39; access</p><p>Step 3: Start IoTDB-server.</p><p>Step 4: Use jvisualvm</p>`,10),u={href:"https://visualvm.github.io/download.html",target:"_blank",rel:"noopener noreferrer"},p=a('<li><p>Open jvisualvm</p></li><li><p>Right-click at the left navigation area -&gt; Add JMX connection<br><img style="width:100%;max-width:300px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/81464569-725e0200-91f5-11ea-9ff9-49745f4c9ef2.png"></p></li><li><p>Fill in information and log in as below. Remember to check &quot;Do not require SSL connection&quot;.<br> An example is:<br> Connection：192.168.130.15:31999<br> Username：iotdb<br> Password：passw!d<br><img style="width:100%;max-width:300px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/81464639-ed271d00-91f5-11ea-91a0-b4fe9cb8204e.png"></p></li>',3);function m(f,g){const n=o("ExternalLinkIcon");return s(),r("div",null,[d(`

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

`),h,e("ol",null,[e("li",null,[e("p",null,[i("Make sure jdk 8 is installed. For versions later than jdk 8, you need to "),e("a",u,[i("download visualvm"),c(n)])])]),p])])}const w=t(l,[["render",m],["__file","JMX-Tool.html.vue"]]);export{w as default};

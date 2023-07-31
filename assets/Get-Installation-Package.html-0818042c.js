import{_ as i,r,o,c as d,a as l,d as e,e as n,b as t,f as s}from"./app-d7c5fa3b.js";const c={},p=e("h1",{id:"安装包获取",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装包获取","aria-hidden":"true"},"#"),n(" 安装包获取")],-1),h=e("p",null,"IoTDB 为您提供了两种安装方式，您可以参考下面的建议，任选其中一种：",-1),u=e("p",null,"第一种，从官网下载安装包。这是我们推荐使用的安装方式，通过该方式，您将得到一个可以立即使用的、打包好的二进制可执行文件。",-1),m=e("p",null,"第二种，使用源码编译。若您需要自行修改代码，可以使用该安装方式。",-1),v=e("h2",{id:"安装环境要求",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装环境要求","aria-hidden":"true"},"#"),n(" 安装环境要求")],-1),b=e("p",null,"安装前请保证您的电脑上配有 JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。",-1),g=e("p",null,"如果您需要从源码进行编译，还需要安装：",-1),_={href:"https://maven.apache.org/install.html",target:"_blank",rel:"noopener noreferrer"},f=e("blockquote",null,[e("p",null,"注： 也可以选择不安装，使用我们提供的'mvnw' 或 'mvnw.cmd' 工具。使用时请用'mvnw' 或 'mvnw.cmd'命令代替下文的'mvn'命令。")],-1),x=e("h2",{id:"从官网下载二进制可执行文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#从官网下载二进制可执行文件","aria-hidden":"true"},"#"),n(" 从官网下载二进制可执行文件")],-1),k={href:"http://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},w=s(`<p>下载后，您可使用以下操作对 IoTDB 的压缩包进行解压：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Shell &gt; unzip iotdb-&lt;version&gt;.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用源码编译" tabindex="-1"><a class="header-anchor" href="#使用源码编译" aria-hidden="true">#</a> 使用源码编译</h2>`,3),I={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/apache/iotdb/tree/master",target:"_blank",rel:"noopener noreferrer"},S=s(`<p>源码克隆后，进入到源码文件夹目录下。如果您想编译已经发布过的版本，可以先用<code>git checkout -b my_{project.version} v{project.version}</code>命令新建并切换分支。比如您要编译0.12.4这个版本，您可以用如下命令去切换分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> my_0.12.4 v0.12.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换分支之后就可以使用以下命令进行编译：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; mvn clean package -pl server -am -Dmaven.test.skip=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译后，IoTDB 服务器会在 &quot;server/target/iotdb-server-{project.version}&quot; 文件夹下，包含以下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+- sbin/       &lt;-- script files
|
+- conf/      &lt;-- configuration files
|
+- lib/       &lt;-- project dependencies
|
+- tools/      &lt;-- system tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您想要编译项目中的某个模块，您可以在源码文件夹中使用<code>mvn clean package -pl {module.name} -am -DskipTests</code>命令进行编译。如果您需要的是带依赖的 jar 包，您可以在编译命令后面加上<code>-P get-jar-with-dependencies</code>参数。比如您想编译带依赖的 jdbc jar 包，您就可以使用以下命令进行编译：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> mvn clean package <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译完成后就可以在<code>{module.name}/target</code>目录中找到需要的包了。</p>`,9);function T(N,A){const a=r("ExternalLinkIcon");return o(),d("div",null,[l(`

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

`),p,h,u,m,v,b,g,e("ol",null,[e("li",null,[n("Maven >= 3.6 的运行环境，具体安装方法可以参考以下链接："),e("a",_,[n("https://maven.apache.org/install.html"),t(a)]),n("。")])]),f,x,e("p",null,[n("您可以从 "),e("a",k,[n("http://iotdb.apache.org/Download/"),t(a)]),n(" 上下载已经编译好的可执行程序 iotdb-xxx.zip，该压缩包包含了 IoTDB 系统运行所需的所有必要组件。")]),w,e("p",null,[n("您可以获取已发布的源码 "),e("a",I,[n("https://iotdb.apache.org/Download/"),t(a)]),n(" ，或者从 "),e("a",D,[n("https://github.com/apache/iotdb/tree/master"),t(a)]),n(" git 仓库获取")]),S])}const j=i(c,[["render",T],["__file","Get-Installation-Package.html.vue"]]);export{j as default};

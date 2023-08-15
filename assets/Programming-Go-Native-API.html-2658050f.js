import{_ as n,o as e,c as s,a,f as i}from"./app-d7e75f9d.js";const l={},o=i(`<h2 id="go-原生接口" tabindex="-1"><a class="header-anchor" href="#go-原生接口" aria-hidden="true">#</a> Go 原生接口</h2><h3 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h3><ul><li>golang &gt;= 1.13</li><li>make &gt;= 3.0</li><li>curl &gt;= 7.1.1</li><li>thrift 0.13.x</li><li>Linux、Macos 或其他类 unix 系统</li><li>Windows+bash (下载 IoTDB Go client 需要 git ，通过 WSL、cygwin、Git Bash 任意一种方式均可)</li></ul><h3 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法" aria-hidden="true">#</a> 安装方法</h3><ul><li>通过 go mod</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换到 GOPATH 的 HOME 路径，启用 Go Modules 功能</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on

<span class="token comment"># 配置 GOPROXY 环境变量</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.io

<span class="token comment"># 创建命名的文件夹或目录，并切换当前目录</span>
<span class="token function">mkdir</span> session_example <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> session_example

<span class="token comment"># 保存文件，自动跳转到新的地址</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> session_example.go <span class="token parameter variable">-L</span> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go

<span class="token comment"># 初始化 go module 环境</span>
go mod init session_example

<span class="token comment"># 下载依赖包</span>
go mod tidy

<span class="token comment"># 编译并运行程序</span>
go run session_example.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过 GOPATH</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># get thrift 0.13.0</span>
go get github.com/apache/thrift@0.13.0

<span class="token comment"># 递归创建目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$GOPATH</span>/src/iotdb-client-go-example/session_example

<span class="token comment"># 切换到当前目录</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/iotdb-client-go-example/session_example

<span class="token comment"># 保存文件，自动跳转到新的地址</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> session_example.go <span class="token parameter variable">-L</span> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go

<span class="token comment"># 初始化 go module 环境</span>
go mod init

<span class="token comment"># 下载依赖包</span>
go mod tidy

<span class="token comment"># 编译并运行程序</span>
go run session_example.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function t(c,d){return e(),s("div",null,[a(`

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

`),o])}const m=n(l,[["render",t],["__file","Programming-Go-Native-API.html.vue"]]);export{m as default};

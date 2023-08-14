import{_ as e,o as s,c as n,a as i,f as a}from"./app-38e86945.js";const l={},o=a(`<h2 id="go-native-api" tabindex="-1"><a class="header-anchor" href="#go-native-api" aria-hidden="true">#</a> Go Native API</h2><h3 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h3><ul><li>golang &gt;= 1.13</li><li>make &gt;= 3.0</li><li>curl &gt;= 7.1.1</li><li>thrift 0.13.x</li><li>Linux、Macos or other unix-like systems</li><li>Windows+bash (WSL、cygwin、Git Bash)</li></ul><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3><ul><li>go mod</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.io

<span class="token function">mkdir</span> session_example <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> session_example

<span class="token function">curl</span> <span class="token parameter variable">-o</span> session_example.go <span class="token parameter variable">-L</span> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go

go mod init session_example
go run session_example.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>GOPATH</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># get thrift 0.13.0</span>
go get github.com/apache/thrift
<span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/github.com/apache/thrift
<span class="token function">git</span> checkout <span class="token number">0.13</span>.0

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$GOPATH</span>/src/iotdb-client-go-example/session_example
<span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/iotdb-client-go-example/session_example
<span class="token function">curl</span> <span class="token parameter variable">-o</span> session_example.go <span class="token parameter variable">-L</span> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go
go run session_example.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-use-the-sessionpool" tabindex="-1"><a class="header-anchor" href="#how-to-use-the-sessionpool" aria-hidden="true">#</a> How to Use the SessionPool</h3><p>SessionPool is a wrapper of a Session Set. Using SessionPool, the user do not need to consider how to reuse a session connection.<br> If there is no available connections and the pool reaches its max size, the all methods will hang until there is a available connection.<br> The PutBack method must be called after use</p><h4 id="new-sessionpool" tabindex="-1"><a class="header-anchor" href="#new-sessionpool" aria-hidden="true">#</a> New sessionPool</h4><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>config := &amp;client.PoolConfig{
    Host:     host,
    Port:     port,
    UserName: user,
    Password: password,
}
sessionPool = client.NewSessionPool(config, 3, 60000, 60000, false)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-session-through-sessionpool-putback-after-use" tabindex="-1"><a class="header-anchor" href="#get-session-through-sessionpool-putback-after-use" aria-hidden="true">#</a> Get session through sessionPool, putback after use</h4><p>set storage group</p><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>session, err := sessionPool.GetSession()
defer sessionPool.PutBack(session)
if err == nil {
    session.SetStorageGroup(sg)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>query statement</p><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>var timeout int64 = 1000
session, err := sessionPool.GetSession()
defer sessionPool.PutBack(session)
if err != nil {
    log.Print(err)
    return
}
sessionDataSet, err := session.ExecuteQueryStatement(sql, &amp;timeout)
if err == nil {
    defer sessionDataSet.Close()
    printDataSet1(sessionDataSet)
} else {
    log.Println(err)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function t(r,d){return s(),n("div",null,[i(`

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

`),o])}const u=e(l,[["render",t],["__file","Programming-Go-Native-API.html.vue"]]);export{u as default};

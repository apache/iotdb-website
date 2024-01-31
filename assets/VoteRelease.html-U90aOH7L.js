import{_ as a,r as d,o as r,c as l,a as t,d as e,e as i,b as s,f as c}from"./app-lqDKUG5A.js";const v={},u=e("h1",{id:"给发布版本投票",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#给发布版本投票","aria-hidden":"true"},"#"),i(" 给发布版本投票")],-1),o={href:"https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"下载投票的-版本-rc-下的所有内容",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载投票的-版本-rc-下的所有内容","aria-hidden":"true"},"#"),i(" 下载投票的 版本/rc 下的所有内容")],-1),b={href:"https://dist.apache.org/repos/dist/dev/iotdb/",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"导入发布经理的公钥",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#导入发布经理的公钥","aria-hidden":"true"},"#"),i(" 导入发布经理的公钥")],-1),p={href:"https://dist.apache.org/repos/dist/dev/iotdb/KEYS",target:"_blank",rel:"noopener noreferrer"},g=c(`<p>最下边有 Release Manager (RM) 的公钥</p><p>安装 gpg2</p><h3 id="第一种方法" tabindex="-1"><a class="header-anchor" href="#第一种方法" aria-hidden="true">#</a> 第一种方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>公钥的开头是这种
pub   rsa4096 2019-10-15 [SC]
      10F3B3F8A1201B79AA43F2E00FC7F131CAA00430
      
或这种

pub   rsa4096/28662AC6 2019-12-23 [SC]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下载公钥</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gpg2 --receive-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 （或 28662AC6)

或 （指定 keyserver) 
gpg2 --keyserver p80.pool.sks-keyservers.net --recv-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 （或 28662AC6)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二种方法" tabindex="-1"><a class="header-anchor" href="#第二种方法" aria-hidden="true">#</a> 第二种方法</h3><p>把下边这段复制到一个文本文件中，起个名叫 <code>key.asc</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2
...
-----END PGP PUBLIC KEY BLOCK-----
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入 RM 的公钥到自己电脑</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gpg2 --import key.asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="验证源码发布版" tabindex="-1"><a class="header-anchor" href="#验证源码发布版" aria-hidden="true">#</a> 验证源码发布版</h2><ul><li><p>验证是否有 NOTICE、LICENSE，以及内容是否正确。</p></li><li><p>验证 README、RELEASE_NOTES</p></li><li><p>验证 header</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn -B apache-rat:check
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>验证签名和哈希值</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gpg2 --verify apache-iotdb-0.12.0-source-release.zip.asc apache-iotdb-0.12.0-source-release.zip

出现 Good Singnature 

shasum -a512 apache-iotdb-0.12.0-source-release.zip

和对应的 .sha512 对比，一样就可以。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>验证编译</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvnw install

应该最后全 SUCCESS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证二进制发布版" tabindex="-1"><a class="header-anchor" href="#验证二进制发布版" aria-hidden="true">#</a> 验证二进制发布版</h2><ul><li><p>验证是否有 NOTICE、LICENSE，以及内容是否正确。</p></li><li><p>验证 README、RELEASE_NOTES</p></li><li><p>验证签名和哈希值</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gpg2 --verify apache-iotdb-0.12.0-bin.zip.asc apache-iotdb-0.12.0-bin.zip

出现 Good Singnature 

shasum -a512 apache-iotdb-0.12.0-bin.zip

和对应的 .sha512 对比，一样就可以。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>验证是否能启动以及示例语句是否正确执行</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup ./sbin/start-server.sh &gt;/dev/null 2&gt;&amp;1 &amp;

./sbin/start-cli.sh

CREATE DATABASE root.turbine;
CREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;
insert into root.turbine.d1(timestamp,s0) values(1,1);
insert into root.turbine.d1(timestamp,s0) values(2,2);
insert into root.turbine.d1(timestamp,s0) values(3,3);
select * from root.**;

打印如下内容：
+-----------------------------------+------------------+
|                               Time|root.turbine.d1.s0|
+-----------------------------------+------------------+
|      1970-01-01T08:00:00.001+08:00|               1.0|
|      1970-01-01T08:00:00.002+08:00|               2.0|
|      1970-01-01T08:00:00.003+08:00|               3.0|
+-----------------------------------+------------------+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例邮件" tabindex="-1"><a class="header-anchor" href="#示例邮件" aria-hidden="true">#</a> 示例邮件</h2><p>验证通过之后可以发邮件了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hi,

+1 (PMC could binding)

The source release:
LICENSE and NOTICE [ok]
signatures and hashes [ok]
All files have ASF header [ok]
could compile from source: ./mvnw clean install [ok]

The binary distribution:
LICENSE and NOTICE [ok]
signatures and hashes [ok]
Could run with the following statements [ok]

CREATE DATABASE root.turbine;
CREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;
insert into root.turbine.d1(timestamp,s0) values(1,1);
insert into root.turbine.d1(timestamp,s0) values(2,2);
insert into root.turbine.d1(timestamp,s0) values(3,3);
select * from root.**;

Thanks,
xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小工具" tabindex="-1"><a class="header-anchor" href="#小工具" aria-hidden="true">#</a> 小工具</h2><ul><li>打印出包含某些字符的行（只看最上边的输出就可以，下边的文件不需要看）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find . -type f -exec grep -i &quot;copyright&quot; {} \\; -print | sort -u
find **/src -type f -exec grep -i &quot;copyright&quot; {} \\; -print | sort -u
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function x(E,A){const n=d("ExternalLinkIcon");return r(),l("div",null,[t(`

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

`),u,e("p",null,[i("For non-Chinese users, please read "),e("a",o,[i("https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release"),s(n)])]),m,e("p",null,[e("a",b,[i("https://dist.apache.org/repos/dist/dev/iotdb/"),s(n)])]),h,e("p",null,[e("a",p,[i("https://dist.apache.org/repos/dist/dev/iotdb/KEYS"),s(n)])]),g])}const C=a(v,[["render",x],["__file","VoteRelease.html.vue"]]);export{C as default};

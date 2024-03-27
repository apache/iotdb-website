import{_ as a,r as t,o as r,c as d,a as l,d as e,e as i,b as s,f as o}from"./app-LsTKUu1f.js";const c={},u=e("h1",{id:"how-to-vote-for-a-release",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-vote-for-a-release","aria-hidden":"true"},"#"),i(" How to vote for a release")],-1),v=e("p",null,"For non-Chinese users, please read",-1),h={href:"https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"download-everything-under-voting-version-rc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download-everything-under-voting-version-rc","aria-hidden":"true"},"#"),i(" Download everything under voting version / rc")],-1),b={href:"https://dist.apache.org/repos/dist/dev/iotdb/",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"import-the-public-key-of-the-release-manager",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#import-the-public-key-of-the-release-manager","aria-hidden":"true"},"#"),i(" Import the public key of the release manager")],-1),g={href:"https://dist.apache.org/repos/dist/dev/iotdb/KEYS",target:"_blank",rel:"noopener noreferrer"},f=o(`<p>At the bottom is the public key of the Release Manager (RM)</p><p>Install gpg2</p><h3 id="the-first-method" tabindex="-1"><a class="header-anchor" href="#the-first-method" aria-hidden="true">#</a> the first method</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>The beginning of the public key is this
pub   rsa4096 2019-10-15 [SC]
      10F3B3F8A1201B79AA43F2E00FC7F131CAA00430
      
Or this

pub   rsa4096/28662AC6 2019-12-23 [SC]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Download the public key</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gpg2 --receive-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 (or 28662AC6)

or (Designation keyserver) 
gpg2 --keyserver p80.pool.sks-keyservers.net --recv-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 (或 28662AC6)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-second-method" tabindex="-1"><a class="header-anchor" href="#the-second-method" aria-hidden="true">#</a> The second method</h3><p>Copy the following paragraph into a text file and name it <code>key.asc</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2
...
-----END PGP PUBLIC KEY BLOCK-----
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Import RM&#39;s public key to your computer</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gpg2 --import key.asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="verify-the-source-distribution" tabindex="-1"><a class="header-anchor" href="#verify-the-source-distribution" aria-hidden="true">#</a> Verify the source distribution</h2><ul><li><p>Verify that there are NOTICE, LICENSE, and the content is correct.</p></li><li><p>Verify README, RELEASE_NOTES</p></li><li><p>Validation header</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn -B apache-rat:check
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Verify signatures and hashes</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gpg2 --verify apache-iotdb-0.12.0-source-release.zip.asc apache-iotdb-0.12.0-source-release.zip

appear Good Singnature 

shasum -a512 apache-iotdb-0.12.0-source-release.zip

Compared with the corresponding .sha512, the same is fine.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Verify compilation</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvnw install

Should end up all SUCCESS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="verifying-the-binary-release" tabindex="-1"><a class="header-anchor" href="#verifying-the-binary-release" aria-hidden="true">#</a> Verifying the binary release</h2><ul><li><p>Verify that there are NOTICE, LICENSE, and the content is correct.</p></li><li><p>Verify README, RELEASE_NOTES</p></li><li><p>Verify signatures and hashes</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gpg2 --verify apache-iotdb-0.12.0-bin.zip.asc apache-iotdb-0.12.0-bin.zip

appear Good Singnature 

shasum -a512 apache-iotdb-0.12.0-bin.zip

Compared with the corresponding .sha512, the same is fine.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Verify that it starts and the sample statements execute correctly</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup ./sbin/start-server.sh &gt;/dev/null 2&gt;&amp;1 &amp;

./sbin/start-cli.sh

CREATE DATABASE root.turbine;
CREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;
insert into root.turbine.d1(timestamp,s0) values(1,1);
insert into root.turbine.d1(timestamp,s0) values(2,2);
insert into root.turbine.d1(timestamp,s0) values(3,3);
select * from root;

Prints the following:
+-----------------------------------+------------------+
|                               Time|root.turbine.d1.s0|
+-----------------------------------+------------------+
|      1970-01-01T08:00:00.001+08:00|               1.0|
|      1970-01-01T08:00:00.002+08:00|               2.0|
|      1970-01-01T08:00:00.003+08:00|               3.0|
+-----------------------------------+------------------+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sample-mail" tabindex="-1"><a class="header-anchor" href="#sample-mail" aria-hidden="true">#</a> Sample mail</h2><p>Email can be sent after verification</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hi,

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
select * from root;

Thanks,
xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="small-tools" tabindex="-1"><a class="header-anchor" href="#small-tools" aria-hidden="true">#</a> small tools</h2><ul><li>Print out lines containing certain characters (just look at the top output, you don&#39;t need to look at the bottom file)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find . -type f -exec grep -i &quot;copyright&quot; {} \\; -print | sort -u
find **/src -type f -exec grep -i &quot;copyright&quot; {} \\; -print | sort -u
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function x(E,y){const n=t("ExternalLinkIcon");return r(),d("div",null,[l(`

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

`),u,v,e("p",null,[e("a",h,[i("https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release"),s(n)])]),m,e("p",null,[e("a",b,[i("https://dist.apache.org/repos/dist/dev/iotdb/"),s(n)])]),p,e("p",null,[e("a",g,[i("https://dist.apache.org/repos/dist/dev/iotdb/KEYS"),s(n)])]),f])}const C=a(c,[["render",x],["__file","VoteRelease.html.vue"]]);export{C as default};

import{_ as s,r,o as d,c as l,a as o,d as e,e as i,b as a,f as n}from"./app-1a7a5d94.js";const c={},u=e("h1",{id:"代码提交指南",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码提交指南","aria-hidden":"true"},"#"),i(" 代码提交指南")],-1),h=e("h2",{id:"贡献途径",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#贡献途径","aria-hidden":"true"},"#"),i(" 贡献途径")],-1),p=e("p",null,"IoTDB 诚邀广大开发者参与开源项目构建",-1),g={href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"提交 pr，通过 Travis-CI 测试和 Sonar 代码质量检测后，至少有一位以上 Committer 同意且代码无冲突，就可以合并了",-1),b=e("h2",{id:"pr-指南",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pr-指南","aria-hidden":"true"},"#"),i(" PR 指南")],-1),v={href:"https://help.github.com/articles/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},x=e("h3",{id:"fork-仓库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fork-仓库","aria-hidden":"true"},"#"),i(" Fork 仓库")],-1),f={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"Fork",-1),w=n(`<figure><img src="https://user-images.githubusercontent.com/37333508/79351839-bd288900-7f6b-11ea-8d12-feb18c35adad.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="配置-git-和提交修改" tabindex="-1"><a class="header-anchor" href="#配置-git-和提交修改" aria-hidden="true">#</a> 配置 git 和提交修改</h3><ul><li>将代码克隆到本地：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/&lt;your_github_name&gt;/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>请将 &lt;your_github_name&gt; 替换为您的 github 名字</strong></p><p>clone 完成后，origin 会默认指向 github 上的远程 fork 地址。</p><ul><li>将 apache/iotdb 添加为本地仓库的远程分支 upstream：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd  iotdb
git remote add upstream https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查远程仓库设置：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
origin https://github.com/&lt;your_github_name&gt;/iotdb.git (fetch)
origin    https://github.com/&lt;your_github_name&gt;/iotdb.git(push)
upstream  https://github.com/apache/iotdb.git (fetch)
upstream  https://github.com/apache/iotdb.git (push)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>新建分支以便在分支上做修改：（假设新建的分支名为 fix）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建完成后可进行代码更改。</p><ul><li>提交代码到远程分支：（此处以 fix 分支为例）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -a -m &quot;&lt;you_commit_message&gt;&quot;
git push origin fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,15),I={href:"https://www.atlassian.com/git/tutorials/setting-up-a-repository",target:"_blank",rel:"noopener noreferrer"},S=n('<h3 id="git提交注意事项" tabindex="-1"><a class="header-anchor" href="#git提交注意事项" aria-hidden="true">#</a> Git提交注意事项</h3><p>在Git上提交代码时需要注意：</p><ul><li><p>保持仓库的整洁：</p><ul><li><p>不要上传二进制文件，保证仓库的大小只因为代码字符串的改动而增大。</p></li><li><p>不要上传生成的代码。</p></li></ul></li><li><p>日志要有含义：</p><ul><li><p>题目用jira编号：[IOTDB-jira号]</p></li><li><p>题目用github的ISSUE编号：[ISSUE-issue号]</p><ul><li>内容里要写#XXXX用于关联</li></ul></li></ul></li></ul><h3 id="创建-pr" tabindex="-1"><a class="header-anchor" href="#创建-pr" aria-hidden="true">#</a> 创建 PR</h3>',4),y=e("code",null,"New pull request",-1),T=e("code",null,"Create pull request",-1),N={href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"},C=e("figure",null,[e("img",{src:"https://user-images.githubusercontent.com/37333508/79414865-5f815480-7fde-11ea-800c-47c7dbad7648.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),L={href:"https://help.github.com/categories/collaborating-with-issues-and-pull-requests/",target:"_blank",rel:"noopener noreferrer"},R=n(`<h3 id="冲突解决" tabindex="-1"><a class="header-anchor" href="#冲突解决" aria-hidden="true">#</a> 冲突解决</h3><p>提交 PR 时的代码冲突一般是由于多人编辑同一个文件引起的，解决冲突主要通过以下步骤即可：</p><p>1：切换至主分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2：同步远端主分支至本地</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull upstream master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3：切换回刚才的分支（假设分支名为 fix）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4：进行 rebase</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rebase -i master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时会弹出修改记录的文件，一般直接保存即可。然后会提示哪些文件出现了冲突，此时可打开冲突文件对冲突部分进行修改，将提示的所有冲突文件的冲突都解决后，执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add .
git rebase --continue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>依此往复，直至屏幕出现类似 <em>rebase successful</em> 字样即可，此时您可以进行往提交 PR 的分支进行更新：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push -f origin fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),A={href:"http://servicecomb.apache.org/developers/submit-codes/",target:"_blank",rel:"noopener noreferrer"};function O(q,B){const t=r("ExternalLinkIcon");return d(),l("div",null,[o(`

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

`),u,h,p,e("p",null,[i("您可以查看 "),e("a",g,[i("issues"),a(t)]),i(" 并参与解决，或者做其他改善。")]),m,b,e("p",null,[i("在 Github 上面可以很方便地提交 "),e("a",v,[i("Pull Request (PR)"),a(t)]),i("，下面将以本网站项目 "),e("a",_,[i("apache/iotdb"),a(t)]),i(" 为例（如果是其他项目，请替换项目名 iotdb）")]),x,e("p",null,[i("进入 apache/iotdb 的 "),e("a",f,[i("github 页面"),a(t)]),i(" ，点击右上角按钮 "),k,i(" 进行 Fork")]),w,e("p",null,[i("更多 git 使用方法请访问："),e("a",I,[i("git 使用"),a(t)]),i("，这里不赘述。")]),S,e("p",null,[i("在浏览器切换到自己的 github 仓库页面，切换分支到提交的分支 <your_branch_name> ，依次点击 "),y,i(" 和 "),T,i(" 按钮进行创建，如果您解决的是 "),e("a",N,[i("issues"),a(t)]),i("，需要在开头加上 [IOTDB-xxx]，如下图所示：")]),C,e("p",null,[i("至此，您的 PR 创建完成，更多关于 PR 请阅读 "),e("a",L,[i("collaborating-with-issues-and-pull-requests"),a(t)])]),R,e("p",null,[i("这个指导文档修改于 "),e("a",A,[i("Apache ServiceComb"),a(t)])])])}const P=s(c,[["render",O],["__file","HowToCommit.html.vue"]]);export{P as default};

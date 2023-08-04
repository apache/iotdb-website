import{_ as s,r as o,o as r,c as l,a as d,d as e,e as t,b as n,f as a}from"./app-e22bde73.js";const c={},u=e("h1",{id:"howto-submit-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#howto-submit-code","aria-hidden":"true"},"#"),t(" Howto Submit Code")],-1),h=e("h2",{id:"contribution",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contribution","aria-hidden":"true"},"#"),t(" Contribution")],-1),p=e("p",null,"IoTDB invites developers to participate in the construction of open source projects",-1),g={href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"After submitting the pr, after passing the Travis-CI test and Sonar code quality inspection, at least one Committer agrees and the code does not conflict, you can merge",-1),b=e("h2",{id:"pr-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pr-guide","aria-hidden":"true"},"#"),t(" PR guide")],-1),v={href:"https://help.github.com/articles/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},x=e("h3",{id:"fork-repository",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fork-repository","aria-hidden":"true"},"#"),t(" Fork repository")],-1),_={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"Fork",-1),w=a(`<figure><img src="https://user-images.githubusercontent.com/37333508/79351839-bd288900-7f6b-11ea-8d12-feb18c35adad.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="setup-local-repository" tabindex="-1"><a class="header-anchor" href="#setup-local-repository" aria-hidden="true">#</a> Setup local repository</h3><ul><li>Clone the source code to local machine:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/&lt;your_github_name&gt;/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Note: substitute &lt;your_github_name&gt; with your github username.</strong></p><p>After the clone is done, the origin remote will point to the default branch of the cloned repository.</p><ul><li>add apache/iotdb as upstream remote:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd  iotdb
git remote add upstream https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Check the local repository’s remotes</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
origin https://github.com/&lt;your_github_name&gt;/iotdb.git (fetch)
origin    https://github.com/&lt;your_github_name&gt;/iotdb.git(push)
upstream  https://github.com/apache/iotdb.git (fetch)
upstream  https://github.com/apache/iotdb.git (push)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create a new branch to start working：(e.g. fix)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can make code changes after creation.</p><ul><li>Push the changes to a remote repository：(e.g. fix)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -a -m &quot;&lt;you_commit_message&gt;&quot;
git push origin fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,15),k={href:"https://www.atlassian.com/git/tutorials/setting-up-a-repository",target:"_blank",rel:"noopener noreferrer"},S=a('<h3 id="submission-considerations" tabindex="-1"><a class="header-anchor" href="#submission-considerations" aria-hidden="true">#</a> Submission Considerations</h3><p>When submitting code on git, you should pay attention to:</p><ul><li><p>Keep the repository clean:</p><ul><li><p>Do not submit binary files, so that the size of the repository only increases due to changes in the code.</p></li><li><p>Do not submit generated code.</p></li></ul></li><li><p>The log should have meaning:</p><ul><li><p>Title is jira numbered: [IOTDB-jira number]</p></li><li><p>Title is the issue number of GitHub: [ISSUE-issue number]</p><ul><li>Write #XXXX in the content for association.</li></ul></li></ul></li></ul><h3 id="create-pr" tabindex="-1"><a class="header-anchor" href="#create-pr" aria-hidden="true">#</a> Create PR</h3>',4),I=e("code",null,"New pull request",-1),C=e("code",null,"Create pull request",-1),T={href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"},N=e("figure",null,[e("img",{src:"https://user-images.githubusercontent.com/37333508/79414865-5f815480-7fde-11ea-800c-47c7dbad7648.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),j={href:"https://help.github.com/categories/collaborating-with-issues-and-pull-requests/",target:"_blank",rel:"noopener noreferrer"},A=a(`<h3 id="resolve-conflicts" tabindex="-1"><a class="header-anchor" href="#resolve-conflicts" aria-hidden="true">#</a> Resolve conflicts</h3><p>When a same piece of file is edited by multiple person simultaneously, conflicts can occur. It can be resolved as follow:</p><p>1：Switch to the master branch</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2：Pull the upstream’s master branch</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull upstream master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3：Switch back to the branch we are working on(e.g. fix)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4：Rebase the working branch onto the master branch</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rebase -i master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A list of commits will be listed on your text editor. Normally we can just save and exit. Git will now apply the commits one by one onto the master branch until it encounters a conflict. When this happens, the rebase process is paused. We need to resolve the conflicts, then execute</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add .
git rebase --continue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Repeat this process until all commits are successfully applied. And finally run</p><p>5：to push the resolved branch to remote origin</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push -f origin fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),R={href:"http://servicecomb.apache.org/developers/submit-codes/",target:"_blank",rel:"noopener noreferrer"};function L(q,O){const i=o("ExternalLinkIcon");return r(),l("div",null,[d(`

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

`),u,h,p,e("p",null,[t("You can check "),e("a",g,[t("issues"),n(i)]),t(" and participate in the resolution, or make other improvements.")]),m,b,e("p",null,[t("You can easily submit "),e("a",v,[t("Pull Request (PR)"),n(i)]),t(" on Github, the following will use this website project "),e("a",f,[t("apache/iotdb"),n(i)]),t(" as an example (if it is another project, please replace the project name iotdb)")]),x,e("p",null,[t("Visit the apache/iotdb project’s "),e("a",_,[t("github page"),n(i)]),t(", click "),y,t(" button on the right left cornor.")]),w,e("p",null,[t("For more on git usages, please visit"),e("a",k,[t("Git tutorial"),n(i)]),t(".")]),S,e("p",null,[t("Goto your github page, find the apache/servicecomb-website project, swich to the branch you just pushed, click on "),I,t(" and then "),C,t(", see the image below:If you solve the "),e("a",T,[t("issues"),n(i)]),t(", you need to add [IOTDB-xxx] at the beginning，see the image below:")]),N,e("p",null,[t("Congrautulations, now you have succesfully submitted a PR. For more on PR, please read "),e("a",j,[t("collaborating-with-issues-and-pull-requests"),n(i)])]),A,e("p",null,[t("The code of conduct is derived from"),e("a",R,[t("Apache ServiceComb"),n(i)])])])}const D=s(c,[["render",L],["__file","HowToCommit.html.vue"]]);export{D as default};

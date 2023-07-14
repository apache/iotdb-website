import{_ as s,r as t,o,c as n,a as p,d as i,e,b as d,f as a}from"./app-6f9cebab.js";const h={},c=a('<h1 id="技术贡献指南" tabindex="-1"><a class="header-anchor" href="#技术贡献指南" aria-hidden="true">#</a> 技术贡献指南</h1><h2 id="社区贡献流程概览" tabindex="-1"><a class="header-anchor" href="#社区贡献流程概览" aria-hidden="true">#</a> 社区贡献流程概览</h2><p>Apache IoTDB 社区通过 JIRA 上的 issue 进行任务管理。<br> Issue 的完整生命周期：创建 issue -&gt; 认领 issue -&gt; 提交 pr -&gt; 审阅 pr -&gt; 合并 pr -&gt; 关闭 issue。</p><h2 id="技术贡献规范" tabindex="-1"><a class="header-anchor" href="#技术贡献规范" aria-hidden="true">#</a> 技术贡献规范</h2><h3 id="创建-issue" tabindex="-1"><a class="header-anchor" href="#创建-issue" aria-hidden="true">#</a> 创建 issue</h3>',5),l={href:"https://issues.apache.org/JIRA/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"},u=a('<ol><li><p>命名：争取采用清晰易懂的名字，如支持一种新的聚合查询功能（avg）、优化原始数据查询性能等。Issue 的名字之后会作为发版的 release note。</p></li><li><p>描述：新功能、优化需要描述具体希望做什么。 Bug 反馈需要描述环境、负载、现象描述（异常日志）、影响版本等，最好有复现方法。</p></li></ol><h3 id="认领-issue" tabindex="-1"><a class="header-anchor" href="#认领-issue" aria-hidden="true">#</a> 认领 issue</h3><p>在 JIRA 上认领 issue：分配给自己。建议添加一句评论：I&#39;m doing this。避免与其他贡献者重复开发。<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/zh/development/howtocontributecode/issue.png">注：如果发现自己无法认领issue，则是因为自己的账户权限不够。<br> 遇到此情况，请向 <a href="mailto:dev@iotdb.apache.org">dev@iotdb.apache.org</a> 邮件列表发送邮件，标题为： [application] apply for permission to assign issues to XXX， 其中XXX是自己的JIRA用户名。</p><h3 id="提交-pr" tabindex="-1"><a class="header-anchor" href="#提交-pr" aria-hidden="true">#</a> 提交 PR</h3><h4 id="需提交的内容" tabindex="-1"><a class="header-anchor" href="#需提交的内容" aria-hidden="true">#</a> 需提交的内容</h4><p>Issue 类型：New Feature</p><p>1.提交中英文版本的用户手册和代码修改的 pr。</p><p>用户手册主要描述功能定义和使用方式，以便用户使用。用户手册建议包括：场景描述，配置方法，接口功能描述，使用示例。官网的用户手册内容放置在 apache/iotdb 仓库根目录下，英文版放在 docs/UserGuide ，中文版放在 docs/zh/UserGuide 。<br> 如果需要更新用户手册，包括新增或删除文档和修改文档名，需要在 master 分支的site/src/main/.vuepress/config.js 中做相应修改。</p><p>2.提交单元测试UT或集成测试IT</p><p>需要增加单元测试UT 或集成测试IT，尽量覆盖多的用例。可以参考 xxTest（路径：iotdb/server/src/test/java/org/apache/iotdb/db/query/aggregation/）， xxIT（路径：iotdb/integration/src/test/java/org/apache/iotdb/db/integration/）。</p><p>Issue 类型：Improvement</p><p>提交代码和 UT，一般不需要修改用户手册。<br> 最好提交相关实验结果，其中包含量化的改进效果和带来的副作用。</p><p>Issue 类型：Bug</p><p>需要编写能够复现此 bug 的 单元测试 UT 或集成测试 IT。</p><h4 id="代码管理" tabindex="-1"><a class="header-anchor" href="#代码管理" aria-hidden="true">#</a> 代码管理</h4><p>分支管理：</p><p>IoTDB 版本命名方式为：0.大版本.小版本。例如 0.12.4，12 就是大版本，4 是小版本。</p><p>master 分支作为当前主开发分支，对应下一个未发布的大版本，每个大版本发布时会切出一个单独的分支归档，如 0.12.x 系列版本的代码处于 rel/0.12 分支下。</p><p>后续如果发现并修复了某发布版本的 bug。对这些 bug 的修复都需要往大于等于该版本对应的归档分支提 pr。如一个关于 0.11.x 版本 bug 修复的 pr 需要同时向 rel/0.11、rel/0.12 和 master 分支提交。</p><p>代码格式化:<br> 提交 PR 前需要使用 mvn spotless:apply 将代码格式化，再 commit，不然会导致 ci 代码格式化检查失败。</p><p>注意事项:</p><p>iotdb-datanode.properties 和 IoTDBConfig 默认值需要保持一致。</p><p>如果需要对配置参数进行改动。以下文件需要同时修改：</p><ol><li>配置文件：iotdb-core/datanode/src/assembly/resources/conf/iotdb-datanode.properties</li><li>代码：IoTDBDescriptor、IoTDBConfig</li><li>文档：docs/UserGuide/Reference/DataNode-Config-Manual.md、docs/zh/UserGuide/Reference/DataNode-Config-Manual.md</li></ol><p>如果你想要在 IT 和 UT 文件中对配置参数进行修改，你需要在 @Before 修饰的方法里修改，并且在 @After 修饰的方法里重置，来避免对其他测试的影响。合并模块的参数统一放在CompactionConfigRestorer 文件里。</p><h4 id="pr-命名" tabindex="-1"><a class="header-anchor" href="#pr-命名" aria-hidden="true">#</a> PR 命名</h4><p>命名方式：分支标签-Jira 标签-PR 名</p><p>示例： [To rel/0.12] [IoTDB-1907] implement customized sync process: sender</p><p>分支标签</p><p>如果是向非 master 分支提 pr，如 rel/0.13 分支，需要在 pr 名写上 [To rel/0.13]。如果是指向master分支，则不需要写分支标签。</p><p>Jira 标签</p><p>以 JIRA 号开头，如：[IOTDB-1907] implement customized sync process: sender。这样创建 PR 后，机器人会将 PR 链接自动链到对应 issue 上。</p><p>如果创建 PR 时忘记添加 JIRA 号，或 JIRA 号不规范，则 PR 不会被自动链接到 Jira 上，需要先改正 PR 命名，并手动将 PR 链接贴到 issue 页面（通过留言或链接框）。</p><h4 id="pr-描述" tabindex="-1"><a class="header-anchor" href="#pr-描述" aria-hidden="true">#</a> PR 描述</h4><p>通常 PR 名无法涵盖所有改动，需要添加具体描述，改动了哪些内容。对于较难理解的地方给予一定的解释。</p><p>修 bug 的 pr 需要描述 bug 出现的原因，以及解决方法，另外还需要描述UT/IT测试用例添加的情况和负面效果的描述。</p><h4 id="提交-pr-后" tabindex="-1"><a class="header-anchor" href="#提交-pr-后" aria-hidden="true">#</a> 提交 PR 后</h4><p>向邮件列表 <a href="mailto:dev@iotdb.apache.org">dev@iotdb.apache.org</a> 发送一封邮件，主要介绍 PR 的工作。重视每个审阅者的意见，一一回复，并对达成一致的建议进行修改。</p><h3 id="审阅pr" tabindex="-1"><a class="header-anchor" href="#审阅pr" aria-hidden="true">#</a> 审阅PR</h3><p>主要关注以下事项：</p><ol><li>PR命名是否规范，新功能和bug修复类型的pr是否带了JIRA 号。</li><li>PR 描述是否清晰。</li><li>功能测试用例或性能测试报告是否附上。</li><li>新功能是否有用户手册。</li><li>尽量不夹带其他问题的代码修改，将不相关的修改拆分到其他PR。</li></ol><p>代码审阅流程：</p><ol><li>点击 PR 的 Files changed<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/zh/development/howtocontributecode/01.png"></li><li>对于有问题的行，移动到左侧，会出现加号，点击加号，然后评论，点击 Start a review，此时，所有的 Review 意见都会暂存起来，别人看不到。<img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/zh/development/howtocontributecode/02.png"></li><li>所有评论加完后，需要点击 Review changes，选择你的意见，已经可以合并的选择 Approve，有 Bug 需要改的选择 Request changes 或者 Comment，不确定的选择 Comment。最后 Submit review 提交审阅意见，提 PR 的人才能看见此意见。<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/zh/development/howtocontributecode/03.png"></li></ol><h3 id="合并pr" tabindex="-1"><a class="header-anchor" href="#合并pr" aria-hidden="true">#</a> 合并PR</h3><p>确认所有审阅意见均已回复。</p><p>有1个以上 committer 的Approval。</p><p>选择 squash merge （当且仅当作者仅有一个提交记录，且记录的commitlog清晰，可选择rebase）。</p><p>到 JIRA 上关闭对应的 issue，标记修复或完成的版本【注意，解决或关闭 issue 都需要对 issue 添加 pr 或描述，通过 issue 要能够追踪这个任务的变动】。</p><h2 id="如何写用户手册和设计文档" tabindex="-1"><a class="header-anchor" href="#如何写用户手册和设计文档" aria-hidden="true">#</a> 如何写用户手册和设计文档</h2><p>官网的用户手册和其他文档都在 apache/iotdb 仓库中进行维护。</p><p>官网各个页面的索引项是在 master 分支的 site/src/main/.vuepress/config.js 文件维护的，用户手册的具体内容是在各个版本的分支维护的，如 0.12 版本的用户手册文档在 rel/0.12 中。</p><p>用户手册</p><p>主要描述功能定义和使用方式，以便用户使用。<br> 用户手册建议包括：场景描述，配置参数，接口功能描述，使用示例。用户手册建议包括：场景描述，配置参数，接口功能描述，使用示例。</p><p>设计文档</p><p>主要描述如何实现某个功能，包括代码模块组织及算法，以便开发者参与。<br> 设计文档建议包括如下内容：背景描述，设计目标，总体思路，主要模块，接口设计</p><h3 id="如何修改用户手册" tabindex="-1"><a class="header-anchor" href="#如何修改用户手册" aria-hidden="true">#</a> 如何修改用户手册</h3><p>贡献用户手册和贡献代码的流程是一样的，只是修改的文件不同。<br> 用户手册的英文版放在 docs/UserGuide , 中文版放在 docs/zh/UserGuide 下。<br> 如果需要更新 {master} 或 {rel/*} 分支的用户手册目录，包括新增或删除md文档、修改md文档名，需要在 master 分支的site/src/main/.vuepress/config.js 中做相应修改。</p><h3 id="如何修改官网顶部导航栏" tabindex="-1"><a class="header-anchor" href="#如何修改官网顶部导航栏" aria-hidden="true">#</a> 如何修改官网顶部导航栏</h3><p>在 site/src/main/.vuepress/config.js 中搜索 nav （应有中英文两个地方），仿照现有的代码做相应修改。之后提交PR等待合并。需要新增的文档可以放进 docs 和 docs/zh 文件夹下。</p>',59);function m(g,b){const r=t("ExternalLinkIcon");return o(),n("div",null,[p(`

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

`),c,i("p",null,[e("在 "),i("a",l,[e(" JIRA "),d(r)]),e("上创建 issue 需要注意几个事项:")]),u])}const x=s(h,[["render",m],["__file","HowtoContributeCode.html.vue"]]);export{x as default};

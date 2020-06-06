(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{591:function(e,t,a){"use strict";a.r(t);var s=a(71),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"howto-submit-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#howto-submit-code"}},[e._v("#")]),e._v(" Howto Submit Code")]),e._v(" "),a("h2",{attrs:{id:"contribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contribution"}},[e._v("#")]),e._v(" Contribution")]),e._v(" "),a("p",[e._v("IoTDB invites developers to participate in the construction of open source projects")]),e._v(" "),a("p",[e._v("You can check "),a("a",{attrs:{href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),a("OutboundLink")],1),e._v(" and participate in the resolution, or make other improvements.")]),e._v(" "),a("p",[e._v("After submitting the pr, after passing the Travis-CI test and Sonar code quality inspection, at least one Committer agrees and the code does not conflict, you can merge")]),e._v(" "),a("h2",{attrs:{id:"pr-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pr-guide"}},[e._v("#")]),e._v(" PR guide")]),e._v(" "),a("p",[e._v("You can easily submit "),a("a",{attrs:{href:"https://help.github.com/articles/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pull Request (PR)"),a("OutboundLink")],1),e._v(" on Github, the following will use this website project "),a("a",{attrs:{href:"https://github.com/apache/incubator-iotdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("apache / incubator-iotdb"),a("OutboundLink")],1),e._v(" as an example (if it is another project, please replace the project name incubator-iotdb)")]),e._v(" "),a("h3",{attrs:{id:"fork-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-repository"}},[e._v("#")]),e._v(" Fork repository")]),e._v(" "),a("p",[e._v("Visit the apache/incubator-iotdb project’s "),a("a",{attrs:{href:"https://github.com/apache/incubator-iotdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("github page"),a("OutboundLink")],1),e._v(", click "),a("code",[e._v("Fork")]),e._v(" button on the right left cornor.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/37333508/79351839-bd288900-7f6b-11ea-8d12-feb18c35adad.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"setup-local-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-local-repository"}},[e._v("#")]),e._v(" Setup local repository")]),e._v(" "),a("ul",[a("li",[e._v("Clone the source code to local machine:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/<your_github_name>/incubator-iotdb.git\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("Note: substitute <your_github_name> with your github username.")])]),e._v(" "),a("p",[e._v("After the clone is done, the origin remote will point to the default branch of the cloned repository.")]),e._v(" "),a("ul",[a("li",[e._v("add apache/incubator-iotdb as upstream remote:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd  incubator-iotdb\ngit remote add upstream https://github.com/apache/incubator-iotdb.git\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("ul",[a("li",[e._v("Check the local repository’s remotes")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git remote -v\norigin https://github.com/<your_github_name>/incubator-iotdb.git (fetch)\norigin    https://github.com/<your_github_name>/incubator-iotdb.git(push)\nupstream  https://github.com/apache/incubator-iotdb.git (fetch)\nupstream  https://github.com/apache/incubator-iotdb.git (push)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("ul",[a("li",[e._v("Create a new branch to start working：(e.g. fix)")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout -b fix\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("You can make code changes after creation.")]),e._v(" "),a("ul",[a("li",[e._v("Push the changes to a remote repository：(e.g. fix)")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git commit -a -m "<you_commit_message>"\ngit push origin fix\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("For more on git usages, please visit"),a("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/setting-up-a-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git tutorial"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"create-pr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-pr"}},[e._v("#")]),e._v(" Create PR")]),e._v(" "),a("p",[e._v("Goto your github page, find the apache/servicecomb-website project, swich to the branch you just pushed, click on "),a("code",[e._v("New pull request")]),e._v(" and then "),a("code",[e._v("Create pull request")]),e._v(", see the image below:If you solve the "),a("a",{attrs:{href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),a("OutboundLink")],1),e._v(", you need to add [IOTDB-xxx] at the beginning，see the image below:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/37333508/79414865-5f815480-7fde-11ea-800c-47c7dbad7648.png",alt:""}})]),e._v(" "),a("p",[e._v("Congrautulations, now you have succesfully submitted a PR. For more on PR, please read "),a("a",{attrs:{href:"https://help.github.com/categories/collaborating-with-issues-and-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("collaborating-with-issues-and-pull-requests"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"resolve-conflicts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve-conflicts"}},[e._v("#")]),e._v(" Resolve conflicts")]),e._v(" "),a("p",[e._v("When a same piece of file is edited by multiple person simultaneously, conflicts can occur. It can be resolved as follow:")]),e._v(" "),a("p",[e._v("1：Switch to the master branch")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout master\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("2：Pull the upstream’s master branch")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git pull upstream master\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("3：Switch back to the branch we are working on(e.g. fix)")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout fix\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("4：Rebase the working branch onto the master branch")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git rebase -i master\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("A list of commits will be listed on your text editor. Normally we can just save and exit. Git will now apply the commits one by one onto the master branch until it encounters a conflict. When this happens, the rebase process is paused. We need to resolve the conflicts, then execute")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git add .\ngit rebase --continue\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Repeat this process until all commits are successfully applied. And finally run")]),e._v(" "),a("p",[e._v("5：to push the resolved branch to remote origin")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git push -f origin fix\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The code of conduct is derived from"),a("a",{attrs:{href:"http://servicecomb.apache.org/developers/submit-codes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache ServiceComb"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);
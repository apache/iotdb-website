import{_ as r,E as o,F as u,af as c,G as e,I as t,ag as l,ac as i,aT as s,C as d}from"./framework-6055ecdb.js";const E={},g=e("h1",{id:"权限管理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#权限管理","aria-hidden":"true"},"#"),t(" 权限管理")],-1),v=e("p",null,"IoTDB 为用户提供了权限管理操作，从而为用户提供对于数据的权限管理功能，保障数据的安全。",-1),m=s('<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><h3 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h3><p>用户即数据库的合法使用者。一个用户与一个唯一的用户名相对应，并且拥有密码作为身份验证的手段。一个人在使用数据库之前，必须先提供合法的（即存于数据库中的）用户名与密码，使得自己成为用户。</p><h3 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h3>',4),h=s('<h3 id="角色" tabindex="-1"><a class="header-anchor" href="#角色" aria-hidden="true">#</a> 角色</h3><p>角色是若干权限的集合，并且有一个唯一的角色名作为标识符。用户通常和一个现实身份相对应（例如交通调度员），而一个现实身份可能对应着多个用户。这些具有相同现实身份的用户往往具有相同的一些权限。角色就是为了能对这样的权限进行统一的管理的抽象。</p><h3 id="默认用户及其具有的角色" tabindex="-1"><a class="header-anchor" href="#默认用户及其具有的角色" aria-hidden="true">#</a> 默认用户及其具有的角色</h3><p>初始安装后的 IoTDB 中有一个默认用户：root，默认密码为 root。该用户为管理员用户，固定拥有所有权限，无法被赋予、撤销权限，也无法被删除。</p><h2 id="权限操作示例" tabindex="-1"><a class="header-anchor" href="#权限操作示例" aria-hidden="true">#</a> 权限操作示例</h2>',5),R={href:"https://github.com/thulab/iotdb/files/4438687/OtherMaterial-Sample.Data.txt",target:"_blank",rel:"noopener noreferrer"},b=s(`<h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户" aria-hidden="true">#</a> 创建用户</h3><p>使用 <code>CREATE USER &lt;userName&gt; &lt;password&gt;</code> 创建用户。例如，我们可以使用具有所有权限的root用户为 ln 和 sgcc 集团创建两个用户角色，名为 ln_write_user, sgcc_write_user，密码均为 write_pwd。建议使用反引号(\`)包裹用户名。SQL 语句为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE USER \`ln_write_user\` &#39;write_pwd&#39;
CREATE USER \`sgcc_write_user\` &#39;write_pwd&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时使用展示用户的 SQL 语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以看到这两个已经被创建的用户，结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; CREATE USER \`ln_write_user\` &#39;write_pwd&#39;
Msg: The statement is executed successfully.
IoTDB&gt; CREATE USER \`sgcc_write_user\` &#39;write_pwd&#39;
Msg: The statement is executed successfully.
IoTDB&gt; LIST USER
+---------------+
|           user|
+---------------+
|  ln_write_user|
|           root|
|sgcc_write_user|
+---------------+
Total line number = 3
It costs 0.157s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="赋予用户权限" tabindex="-1"><a class="header-anchor" href="#赋予用户权限" aria-hidden="true">#</a> 赋予用户权限</h3><p>此时，虽然两个用户已经创建，但是他们不具有任何权限，因此他们并不能对数据库进行操作，例如我们使用 ln_write_user 用户对数据库中的数据进行写入，SQL 语句为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，系统不允许用户进行此操作，会提示错误：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)
Msg: 602: No permissions for this operation, please add privilege INSERT_TIMESERIES.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们用root用户分别赋予他们向对应 database 数据的写入权限.</p><p>我们使用 <code>GRANT USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;</code> 语句赋予用户权限(注：其中，创建用户权限无需指定路径)，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT USER \`ln_write_user\` PRIVILEGES INSERT_TIMESERIES on root.ln.**
GRANT USER \`sgcc_write_user\` PRIVILEGES INSERT_TIMESERIES on root.sgcc1.**, root.sgcc2.**
GRANT USER \`ln_write_user\` PRIVILEGES CREATE_USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行状态如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; GRANT USER \`ln_write_user\` PRIVILEGES INSERT_TIMESERIES on root.ln.**
Msg: The statement is executed successfully.
IoTDB&gt; GRANT USER \`sgcc_write_user\` PRIVILEGES INSERT_TIMESERIES on root.sgcc1.**, root.sgcc2.**
Msg: The statement is executed successfully.
IoTDB&gt; GRANT USER \`ln_write_user\` PRIVILEGES CREATE_USER
Msg: The statement is executed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着使用ln_write_user再尝试写入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
Msg: The statement is executed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销用户权限" tabindex="-1"><a class="header-anchor" href="#撤销用户权限" aria-hidden="true">#</a> 撤销用户权限</h3><p>授予用户权限后，我们可以使用 <code>REVOKE USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;</code> 来撤销已授予的用户权限(注：其中，撤销创建用户权限无需指定路径)。例如，用root用户撤销ln_write_user和sgcc_write_user的权限：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE USER \`ln_write_user\` PRIVILEGES INSERT_TIMESERIES on root.ln.**
REVOKE USER \`sgcc_write_user\` PRIVILEGES INSERT_TIMESERIES on root.sgcc1.**, root.sgcc2.**
REVOKE USER \`ln_write_user\` PRIVILEGES CREATE_USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行状态如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE USER \`ln_write_user\` PRIVILEGES INSERT_TIMESERIES on root.ln.**
Msg: The statement is executed successfully.
REVOKE USER \`sgcc_write_user\` PRIVILEGES INSERT_TIMESERIES on root.sgcc1.**, root.sgcc2.**
Msg: The statement is executed successfully.
REVOKE USER \`ln_write_user\` PRIVILEGES CREATE_USER
Msg: The statement is executed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>撤销权限后，ln_write_user就没有向root.ln.**写入数据的权限了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
Msg: 602: No permissions for this operation, please add privilege INSERT_TIMESERIES.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-语句" tabindex="-1"><a class="header-anchor" href="#sql-语句" aria-hidden="true">#</a> SQL 语句</h3><p>与权限相关的语句包括：</p><ul><li>创建用户</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE USER &lt;userName&gt; &lt;password&gt;;  
Eg: IoTDB &gt; CREATE USER \`thulab\` &#39;passwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除用户</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP USER &lt;userName&gt;;  
Eg: IoTDB &gt; DROP USER \`xiaoming\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE ROLE &lt;roleName&gt;;  
Eg: IoTDB &gt; CREATE ROLE \`admin\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP ROLE &lt;roleName&gt;;  
Eg: IoTDB &gt; DROP ROLE \`admin\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予用户权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeNames&gt;;  
Eg: IoTDB &gt; GRANT USER \`tempuser\` PRIVILEGES INSERT_TIMESERIES, DELETE_TIMESERIES on root.ln.**, root.sgcc.**;
Eg: IoTDB &gt; GRANT USER \`tempuser\` PRIVILEGES CREATE_ROLE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予用户全部的权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT USER &lt;userName&gt; PRIVILEGES ALL; 
Eg: IoTDB &gt; GRANT USER \`tempuser\` PRIVILEGES ALL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予角色权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeNames&gt;;  
Eg: IoTDB &gt; GRANT ROLE \`temprole\` PRIVILEGES INSERT_TIMESERIES, DELETE_TIMESERIES ON root.sgcc.**, root.ln.**;
Eg: IoTDB &gt; GRANT ROLE \`temprole\` PRIVILEGES CREATE_ROLE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予角色全部的权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT ROLE &lt;roleName&gt; PRIVILEGES ALL;  
Eg: IoTDB &gt; GRANT ROLE \`temprole\` PRIVILEGES ALL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予用户角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT &lt;roleName&gt; TO &lt;userName&gt;;  
Eg: IoTDB &gt; GRANT \`temprole\` TO tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销用户权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeNames&gt;;   
Eg: IoTDB &gt; REVOKE USER \`tempuser\` PRIVILEGES DELETE_TIMESERIES on root.ln.**;
Eg: IoTDB &gt; REVOKE USER \`tempuser\` PRIVILEGES CREATE_ROLE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>移除用户所有权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE USER &lt;userName&gt; PRIVILEGES ALL; 
Eg: IoTDB &gt; REVOKE USER \`tempuser\` PRIVILEGES ALL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销角色权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeNames&gt;;  
Eg: IoTDB &gt; REVOKE ROLE \`temprole\` PRIVILEGES DELETE_TIMESERIES ON root.ln.**;
Eg: IoTDB &gt; REVOKE ROLE \`temprole\` PRIVILEGES CREATE_ROLE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销角色全部的权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE ROLE &lt;roleName&gt; PRIVILEGES ALL;  
Eg: IoTDB &gt; REVOKE ROLE \`temprole\` PRIVILEGES ALL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销用户角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE &lt;roleName&gt; FROM &lt;userName&gt;;
Eg: IoTDB &gt; REVOKE \`temprole\` FROM tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出所有用户</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST USER
Eg: IoTDB &gt; LIST USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出指定角色下所有用户</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST USER OF ROLE &lt;roleName&gt;;
Eg: IoTDB &gt; LIST USER OF ROLE \`roleuser\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出所有角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ROLE
Eg: IoTDB &gt; LIST ROLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出指定用户下所有角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ROLE OF USER &lt;username&gt; ;  
Eg: IoTDB &gt; LIST ROLE OF USER \`tempuser\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出用户所有权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST PRIVILEGES USER &lt;username&gt;;   
Eg: IoTDB &gt; LIST PRIVILEGES USER \`tempuser\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出用户在具体路径上相关联的权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST PRIVILEGES USER &lt;username&gt; ON &lt;paths&gt;;
Eg: IoTDB&gt; LIST PRIVILEGES USER \`tempuser\` ON root.ln.**, root.ln.wf01.**;
+--------+-----------------------------------+
|    role|                          privilege|
+--------+-----------------------------------+
|        |      root.ln.** : ALTER_TIMESERIES|
|temprole|root.ln.wf01.** : CREATE_TIMESERIES|
+--------+-----------------------------------+
Total line number = 2
It costs 0.005s
IoTDB&gt; LIST PRIVILEGES USER \`tempuser\` ON root.ln.wf01.wt01.**;
+--------+-----------------------------------+
|    role|                          privilege|
+--------+-----------------------------------+
|        |      root.ln.** : ALTER_TIMESERIES|
|temprole|root.ln.wf01.** : CREATE_TIMESERIES|
+--------+-----------------------------------+
Total line number = 2
It costs 0.005s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色所有权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST PRIVILEGES ROLE &lt;roleName&gt;;
Eg: IoTDB &gt; LIST PRIVILEGES ROLE \`actor\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色在具体路径上相关联的权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST PRIVILEGES ROLE &lt;roleName&gt; ON &lt;paths&gt;;    
Eg: IoTDB&gt; LIST PRIVILEGES ROLE \`temprole\` ON root.ln.**, root.ln.wf01.wt01.**;
+-----------------------------------+
|                          privilege|
+-----------------------------------+
|root.ln.wf01.** : CREATE_TIMESERIES|
+-----------------------------------+
Total line number = 1
It costs 0.005s
IoTDB&gt; LIST PRIVILEGES ROLE \`temprole\` ON root.ln.wf01.wt01.**;
+-----------------------------------+
|                          privilege|
+-----------------------------------+
|root.ln.wf01.** : CREATE_TIMESERIES|
+-----------------------------------+
Total line number = 1
It costs 0.005s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更新密码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;
Eg: IoTDB &gt; ALTER USER \`tempuser\` SET PASSWORD &#39;newpwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他说明" tabindex="-1"><a class="header-anchor" href="#其他说明" aria-hidden="true">#</a> 其他说明</h2><h3 id="用户、权限与角色的关系" tabindex="-1"><a class="header-anchor" href="#用户、权限与角色的关系" aria-hidden="true">#</a> 用户、权限与角色的关系</h3><p>角色是权限的集合，而权限和角色都是用户的一种属性。即一个角色可以拥有若干权限。一个用户可以拥有若干角色与权限（称为用户自身权限）。</p><p>目前在 IoTDB 中并不存在相互冲突的权限，因此一个用户真正具有的权限是用户自身权限与其所有的角色的权限的并集。即要判定用户是否能执行某一项操作，就要看用户自身权限或用户的角色的所有权限中是否有一条允许了该操作。用户自身权限与其角色权限，他的多个角色的权限之间可能存在相同的权限，但这并不会产生影响。</p><p>需要注意的是：如果一个用户自身有某种权限（对应操作 A），而他的某个角色有相同的权限。那么如果仅从该用户撤销该权限无法达到禁止该用户执行操作 A 的目的，还需要从这个角色中也撤销对应的权限，或者从这个用户将该角色撤销。同样，如果仅从上述角色将权限撤销，也不能禁止该用户执行操作 A。</p><p>同时，对角色的修改会立即反映到所有拥有该角色的用户上，例如对角色增加某种权限将立即使所有拥有该角色的用户都拥有对应权限，删除某种权限也将使对应用户失去该权限（除非用户本身有该权限）。</p><h3 id="系统所含权限列表" tabindex="-1"><a class="header-anchor" href="#系统所含权限列表" aria-hidden="true">#</a> 系统所含权限列表</h3><p><strong>系统所含权限列表</strong></p>`,82),I=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"权限名称"),e("th",{style:{"text-align":"left"}},"说明"),e("th",null,"示例")])],-1),p=e("tr",null,[e("td",{style:{"text-align":"left"}},"CREATE_DATABASE"),e("td",{style:{"text-align":"left"}},"创建 database。包含设置 database 的权限和TTL。路径相关"),e("td",null,[t("Eg1: "),e("code",null,"CREATE DATABASE root.ln;"),e("br"),t("Eg2:"),e("code",null,"set ttl to root.ln 3600000;"),e("br"),t("Eg3:"),e("code",null,"unset ttl to root.ln;")])],-1),x=e("tr",null,[e("td",{style:{"text-align":"left"}},"DELETE_DATABASE"),e("td",{style:{"text-align":"left"}},"删除 database。路径相关"),e("td",null,[t("Eg: "),e("code",null,"delete database root.ln;")])],-1),T=e("tr",null,[e("td",{style:{"text-align":"left"}},"CREATE_TIMESERIES"),e("td",{style:{"text-align":"left"}},"创建时间序列。路径相关"),e("td",null,[t("Eg1: 创建时间序列"),e("br"),e("code",null,"create timeseries root.ln.wf02.status with datatype=BOOLEAN,encoding=PLAIN;"),e("br"),t("Eg2: 创建对齐时间序列"),e("br"),e("code",null,"create aligned timeseries root.ln.device1(latitude FLOAT encoding=PLAIN compressor=SNAPPY, longitude FLOAT encoding=PLAIN compressor=SNAPPY);")])],-1),_=e("tr",null,[e("td",{style:{"text-align":"left"}},"INSERT_TIMESERIES"),e("td",{style:{"text-align":"left"}},"插入数据。路径相关"),e("td",null,[t("Eg1: "),e("code",null,"insert into root.ln.wf02(timestamp,status) values(1,true);"),e("br"),t("Eg2: "),e("code",null,"insert into root.sg1.d1(time, s1, s2) aligned values(1, 1, 1)")])],-1),S=e("tr",null,[e("td",{style:{"text-align":"left"}},"ALTER_TIMESERIES"),e("td",{style:{"text-align":"left"}},"修改时间序列标签。路径相关"),e("td",null,[t("Eg1: "),e("code",null,"alter timeseries root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4;"),e("br"),t("Eg2: "),e("code",null,"ALTER timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias TAGS(tag2=newV2, tag3=v3) ATTRIBUTES(attr3=v3, attr4=v4);")])],-1),L=e("td",{style:{"text-align":"left"}},"READ_TIMESERIES",-1),f=e("td",{style:{"text-align":"left"}},"查询数据。路径相关",-1),A=e("code",null,"SHOW DATABASES;",-1),O=e("br",null,null,-1),N=e("code",null,"show child paths root.ln, show child nodes root.ln;",-1),D=e("br",null,null,-1),w=e("code",null,"show devices;",-1),U=e("br",null,null,-1),G=e("code",null,"show timeseries root.**;",-1),y=e("br",null,null,-1),P=e("code",null,"show schema templates;",-1),V=e("br",null,null,-1),B=e("code",null,"show all ttl",-1),M=e("br",null,null,-1),C=e("br",null,null,-1),F=e("br",null,null,-1),k=e("code",null,"./export-csv.bat -h 127.0.0.1 -p 6667 -u tempuser -pw root -td ./",-1),K=e("br",null,null,-1),q=e("br",null,null,-1),Q=e("code",null,"tracing select * from root.**",-1),H=e("br",null,null,-1),Y=e("br",null,null,-1),W=e("code",null,"select example(*) from root.sg.d1",-1),z=e("br",null,null,-1),J=e("br",null,null,-1),j=e("code",null,"show triggers",-1),X=e("br",null,null,-1),Z=e("br",null,null,-1),$=e("code",null,"count devices",-1),ee=e("tr",null,[e("td",{style:{"text-align":"left"}},"DELETE_TIMESERIES"),e("td",{style:{"text-align":"left"}},"删除数据或时间序列。路径相关"),e("td",null,[t("Eg1: 删除时间序列"),e("br"),e("code",null,"delete timeseries root.ln.wf01.wt01.status"),e("br"),t("Eg2: 删除数据"),e("br"),e("code",null,"delete from root.ln.wf02.wt02.status where time < 10"),e("br"),t("Eg3: 使用DROP关键字"),e("br"),e("code",null,"drop timeseries root.ln.wf01.wt01.status")])],-1),te=e("tr",null,[e("td",{style:{"text-align":"left"}},"CREATE_USER"),e("td",{style:{"text-align":"left"}},"创建用户。路径无关"),e("td",null,[t("Eg: "),e("code",null,"create user thulab 'passwd';")])],-1),le=e("tr",null,[e("td",{style:{"text-align":"left"}},"DELETE_USER"),e("td",{style:{"text-align":"left"}},"删除用户。路径无关"),e("td",null,[t("Eg: "),e("code",null,"drop user xiaoming;")])],-1),ne=e("tr",null,[e("td",{style:{"text-align":"left"}},"MODIFY_PASSWORD"),e("td",{style:{"text-align":"left"}},"修改所有用户的密码。路径无关。（没有该权限者仍然能够修改自己的密码。)"),e("td",null,[t("Eg: "),e("code",null,"alter user tempuser SET PASSWORD 'newpwd';")])],-1),ie=e("tr",null,[e("td",{style:{"text-align":"left"}},"LIST_USER"),e("td",{style:{"text-align":"left"}},"列出所有用户，列出具有某角色的所有用户，列出用户在指定路径下相关权限。路径无关"),e("td",null,[t("Eg1: "),e("code",null,"list user;"),e("br"),t("Eg2: "),e("code",null,"list user of role 'wirte_role';"),e("br"),t("Eg3: "),e("code",null,"list privileges user admin;"),e("br"),t("Eg4: "),e("code",null,"list privileges user 'admin' on root.sgcc.**;")])],-1),se=e("tr",null,[e("td",{style:{"text-align":"left"}},"GRANT_USER_PRIVILEGE"),e("td",{style:{"text-align":"left"}},"赋予用户权限。路径无关"),e("td",null,[t("Eg: "),e("code",null,"grant user tempuser privileges DELETE_TIMESERIES on root.ln.**;")])],-1),de=e("tr",null,[e("td",{style:{"text-align":"left"}},"REVOKE_USER_PRIVILEGE"),e("td",{style:{"text-align":"left"}},"撤销用户权限。路径无关"),e("td",null,[t("Eg: "),e("code",null,"revoke user tempuser privileges DELETE_TIMESERIES on root.ln.**;")])],-1),ae=e("tr",null,[e("td",{style:{"text-align":"left"}},"GRANT_USER_ROLE"),e("td",{style:{"text-align":"left"}},"赋予用户角色。路径无关"),e("td",null,[t("Eg: "),e("code",null,"grant temprole to tempuser;")])],-1),re=e("tr",null,[e("td",{style:{"text-align":"left"}},"REVOKE_USER_ROLE"),e("td",{style:{"text-align":"left"}},"撤销用户角色。路径无关"),e("td",null,[t("Eg: "),e("code",null,"revoke temprole from tempuser;")])],-1),oe=e("tr",null,[e("td",{style:{"text-align":"left"}},"CREATE_ROLE"),e("td",{style:{"text-align":"left"}},"创建角色。路径无关"),e("td",null,[t("Eg: "),e("code",null,"create role admin;")])],-1),ue=e("tr",null,[e("td",{style:{"text-align":"left"}},"DELETE_ROLE"),e("td",{style:{"text-align":"left"}},"删除角色。路径无关"),e("td",null,[t("Eg: "),e("code",null,"drop role admin;")])],-1),ce=e("tr",null,[e("td",{style:{"text-align":"left"}},"LIST_ROLE"),e("td",{style:{"text-align":"left"}},"列出所有角色，列出某用户下所有角色，列出角色在指定路径下相关权限。路径无关"),e("td",null,[t("Eg1: "),e("code",null,"list role"),e("br"),t("Eg2: "),e("code",null,"list role of user 'actor';"),e("br"),t("Eg3: "),e("code",null,"list privileges role wirte_role;"),e("br"),t("Eg4: "),e("code",null,"list privileges role wirte_role ON root.sgcc;")])],-1),Ee=e("tr",null,[e("td",{style:{"text-align":"left"}},"GRANT_ROLE_PRIVILEGE"),e("td",{style:{"text-align":"left"}},"赋予角色权限。路径无关"),e("td",null,[t("Eg: "),e("code",null,"grant role temprole privileges DELETE_TIMESERIES ON root.ln.**;")])],-1),ge=e("tr",null,[e("td",{style:{"text-align":"left"}},"REVOKE_ROLE_PRIVILEGE"),e("td",{style:{"text-align":"left"}},"撤销角色权限。路径无关"),e("td",null,[t("Eg: "),e("code",null,"revoke role temprole privileges DELETE_TIMESERIES ON root.ln.**;")])],-1),ve=e("tr",null,[e("td",{style:{"text-align":"left"}},"CREATE_FUNCTION"),e("td",{style:{"text-align":"left"}},"注册 UDF。路径无关"),e("td",null,[t("Eg: "),e("code",null,"create function example AS 'org.apache.iotdb.udf.UDTFExample';")])],-1),me=e("tr",null,[e("td",{style:{"text-align":"left"}},"DROP_FUNCTION"),e("td",{style:{"text-align":"left"}},"卸载 UDF。路径无关"),e("td",null,[t("Eg: "),e("code",null,"drop function example")])],-1),he=e("tr",null,[e("td",{style:{"text-align":"left"}},"CREATE_TRIGGER"),e("td",{style:{"text-align":"left"}},"创建触发器。路径相关"),e("td",null,[t("Eg1: "),e("code",null,"CREATE TRIGGER <TRIGGER-NAME> BEFORE INSERT ON <FULL-PATH> AS <CLASSNAME>"),e("br"),t("Eg2: "),e("code",null,"CREATE TRIGGER <TRIGGER-NAME> AFTER INSERT ON <FULL-PATH> AS <CLASSNAME>")])],-1),Re=e("tr",null,[e("td",{style:{"text-align":"left"}},"DROP_TRIGGER"),e("td",{style:{"text-align":"left"}},"卸载触发器。路径相关"),e("td",null,[t("Eg: "),e("code",null,"drop trigger 'alert-listener-sg1d1s1'")])],-1),be=e("tr",null,[e("td",{style:{"text-align":"left"}},"CREATE_CONTINUOUS_QUERY"),e("td",{style:{"text-align":"left"}},"创建连续查询。路径无关"),e("td",null,[t("Eg: "),e("code",null,"select s1, s1 into t1, t2 from root.sg.d1")])],-1),Ie=e("tr",null,[e("td",{style:{"text-align":"left"}},"DROP_CONTINUOUS_QUERY"),e("td",{style:{"text-align":"left"}},"卸载连续查询。路径无关"),e("td",null,[t("Eg1: "),e("code",null,"DROP CONTINUOUS QUERY cq3"),e("br"),t("Eg2: "),e("code",null,"DROP CQ cq3")])],-1),pe=e("tr",null,[e("td",{style:{"text-align":"left"}},"SHOW_CONTINUOUS_QUERIES"),e("td",{style:{"text-align":"left"}},"展示所有连续查询。路径无关"),e("td",null,[t("Eg1: "),e("code",null,"SHOW CONTINUOUS QUERIES"),e("br"),t("Eg2: "),e("code",null,"SHOW cqs")])],-1),xe=e("tr",null,[e("td",{style:{"text-align":"left"}},"UPDATE_TEMPLATE"),e("td",{style:{"text-align":"left"}},"创建、删除模板。路径无关。"),e("td",null,[t("Eg1: "),e("code",null,"create schema template t1(s1 int32)"),e("br"),t("Eg2: "),e("code",null,"drop schema template t1")])],-1),Te=e("tr",null,[e("td",{style:{"text-align":"left"}},"READ_TEMPLATE"),e("td",{style:{"text-align":"left"}},"查看所有模板、模板内容。 路径无关"),e("td",null,[t("Eg1: "),e("code",null,"show schema templates"),e("br"),t("Eg2: "),e("code",null,"show nodes in template t1")])],-1),_e=e("tr",null,[e("td",{style:{"text-align":"left"}},"APPLY_TEMPLATE"),e("td",{style:{"text-align":"left"}},"挂载、卸载、激活、解除模板。路径有关。"),e("td",null,[t("Eg1: "),e("code",null,"set schema template t1 to root.sg.d"),e("br"),t("Eg2: "),e("code",null,"unset schema template t1 from root.sg.d"),e("br"),t("Eg3: "),e("code",null,"create timeseries of schema template on root.sg.d"),e("br"),t("Eg4: "),e("code",null,"delete timeseries of schema template on root.sg.d")])],-1),Se=e("tr",null,[e("td",{style:{"text-align":"left"}},"READ_TEMPLATE_APPLICATION"),e("td",{style:{"text-align":"left"}},"查看模板的挂载路径和激活路径。路径无关"),e("td",null,[t("Eg1: "),e("code",null,"show paths set schema template t1"),e("br"),t("Eg2: "),e("code",null,"show paths using schema template t1")])],-1),Le=s(`<p>注意： 路径无关的权限只能在路径root.**下赋予或撤销；</p><p>注意: 下述sql语句需要赋予多个权限才可以使用：</p><ul><li>导入数据，需要赋予<code>READ_TIMESERIES</code>，<code>INSERT_TIMESERIES</code>两种权限。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; ./import-csv.bat -h 127.0.0.1 -p 6667 -u renyuhua -pw root -f dump0.csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查询写回(SELECT_INTO) <ul><li>需要所有 <code>select</code> 子句中源序列的 <code>READ_TIMESERIES</code> 权限</li><li>需要所有 <code>into</code> 子句中目标序列 <code>INSERT_TIMESERIES</code> 权限</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; select s1, s1 into t1, t2 from root.sg.d1 limit 5 offset 1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="用户名限制" tabindex="-1"><a class="header-anchor" href="#用户名限制" aria-hidden="true">#</a> 用户名限制</h3><p>IoTDB 规定用户名的字符长度不小于 4，其中用户名不能包含空格。</p><h3 id="密码限制" tabindex="-1"><a class="header-anchor" href="#密码限制" aria-hidden="true">#</a> 密码限制</h3><p>IoTDB 规定密码的字符长度不小于 4，其中密码不能包含空格，密码默认采用 MD5 进行加密。</p><h3 id="角色名限制" tabindex="-1"><a class="header-anchor" href="#角色名限制" aria-hidden="true">#</a> 角色名限制</h3><p>IoTDB 规定角色名的字符长度不小于 4，其中角色名不能包含空格。</p><h3 id="权限管理中的路径模式" tabindex="-1"><a class="header-anchor" href="#权限管理中的路径模式" aria-hidden="true">#</a> 权限管理中的路径模式</h3><p>一个路径模式的结果集包含了它的子模式的结果集的所有元素。例如，<code>root.sg.d.*</code>是<code>root.sg.*.*</code>的子模式，而<code>root.sg.**</code>不是<code>root.sg.*.*</code>的子模式。当用户被授予对某个路径模式的权限时，在他的DDL或DML中使用的模式必须是该路径模式的子模式，这保证了用户访问时间序列时不会超出他的权限范围。</p><h3 id="权限缓存" tabindex="-1"><a class="header-anchor" href="#权限缓存" aria-hidden="true">#</a> 权限缓存</h3><p>在分布式相关的权限操作中，在进行除了创建用户和角色之外的其他权限更改操作时，都会先清除与该用户（角色）相关的所有的<code>dataNode</code>的缓存信息，如果任何一台<code>dataNode</code>缓存信息清楚失败，这个权限更改的任务就会失败。</p><h3 id="非root用户限制进行的操作" tabindex="-1"><a class="header-anchor" href="#非root用户限制进行的操作" aria-hidden="true">#</a> 非root用户限制进行的操作</h3><p>目前以下IoTDB支持的sql语句只有<code>root</code>用户可以进行操作，且没有对应的权限可以赋予新用户。</p><h6 id="tsfile管理" tabindex="-1"><a class="header-anchor" href="#tsfile管理" aria-hidden="true">#</a> TsFile管理</h6><ul><li>加载TsFile</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除TsFile文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; remove &#39;/Users/Desktop/data/data/root.vehicle/0/0/1575028885956-101-0.tsfile&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>卸载TsFile文件到指定目录</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; unload &#39;/Users/Desktop/data/data/root.vehicle/0/0/1575028885956-101-0.tsfile&#39; &#39;/data/data/tmp&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="删除时间分区-实验性功能" tabindex="-1"><a class="header-anchor" href="#删除时间分区-实验性功能" aria-hidden="true">#</a> 删除时间分区（实验性功能）</h6><ul><li>删除时间分区（实验性功能）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; DELETE PARTITION root.ln 0,1,2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="连续查询" tabindex="-1"><a class="header-anchor" href="#连续查询" aria-hidden="true">#</a> 连续查询</h6><ul><li>连续查询(CQ)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; CREATE CONTINUOUS QUERY cq1 BEGIN SELECT max_value(temperature) INTO temperature_max FROM root.ln.*.* GROUP BY time(10s) END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="运维命令" tabindex="-1"><a class="header-anchor" href="#运维命令" aria-hidden="true">#</a> 运维命令</h6><ul><li>FLUSH</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; flush
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>MERGE</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; MERGE
Eg: IoTDB &gt; FULL MERGE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CLEAR CACHE</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>Eg: IoTDB <span class="token operator">&gt;</span> CLEAR CACHE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>SET STSTEM TO READONLY / WRITABLE</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; SET STSTEM TO READONLY / WRITABLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>SCHEMA SNAPSHOT</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>Eg: IoTDB <span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">SNAPSHOT</span> <span class="token keyword">FOR</span> <span class="token keyword">SCHEMA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查询终止</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; KILL QUERY 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="水印工具" tabindex="-1"><a class="header-anchor" href="#水印工具" aria-hidden="true">#</a> 水印工具</h6><ul><li>为新用户施加水印</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; grant watermark_embedding to Alice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>撤销水印</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Eg: IoTDB &gt; revoke watermark_embedding from Alice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,49);function fe(Ae,Oe){const n=d("RouterLink"),a=d("ExternalLinkIcon");return o(),u("div",null,[c(`

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

`),g,v,e("p",null,[t("我们将通过以下几个具体的例子为您示范基本的用户权限操作，详细的 SQL 语句及使用方式详情请参见本文 "),l(n,{to:"/zh/UserGuide/V1.0.x/Data-Concept/Data-Model-and-Terminology.html"},{default:i(()=>[t("数据模式与概念章节")]),_:1}),t("。同时，在 JAVA 编程环境中，您可以使用 "),l(n,{to:"/zh/UserGuide/V1.0.x/API/Programming-JDBC.html"},{default:i(()=>[t("JDBC API")]),_:1}),t(" 单条或批量执行权限管理类语句。")]),m,e("p",null,[t("数据库提供多种操作，并不是所有的用户都能执行所有操作。如果一个用户可以执行某项操作，则称该用户有执行该操作的权限。权限可分为数据管理权限（如对数据进行增删改查）以及权限管理权限（用户、角色的创建与删除，权限的赋予与撤销等）。数据管理权限往往需要一个路径来限定其生效范围，可使用"),l(n,{to:"/zh/UserGuide/V1.0.x/Data-Concept/Data-Model-and-Terminology.html"},{default:i(()=>[t("路径模式")]),_:1}),t("灵活管理权限。")]),h,e("p",null,[t("根据本文中描述的 "),e("a",R,[t("样例数据"),l(a)]),t(" 内容，IoTDB 的样例数据可能同时属于 ln, sgcc 等不同发电集团，不同的发电集团不希望其他发电集团获取自己的数据库数据，因此我们需要将不同的数据在集团层进行权限隔离。")]),b,e("table",null,[I,e("tbody",null,[p,x,T,_,S,e("tr",null,[L,f,e("td",null,[t("Eg1: "),A,t(),O,t("Eg2: "),N,D,t("Eg3: "),w,U,t("Eg4: "),G,y,t("Eg5: "),P,V,t("Eg6: "),B,M,t("Eg7: "),l(n,{to:"/zh/UserGuide/V1.0.x/Query-Data/Overview.html"},{default:i(()=>[t("数据查询")]),_:1}),t("（这一节之下的查询语句均使用该权限）"),C,t("Eg8: CVS格式数据导出"),F,k,K,t("Eg9: 查询性能追踪"),q,Q,H,t("Eg10: UDF查询"),Y,W,z,t("Eg11: 查询触发器"),J,j,X,t("Eg12: 统计查询"),Z,$])]),ee,te,le,ne,ie,se,de,ae,re,oe,ue,ce,Ee,ge,ve,me,he,Re,be,Ie,pe,xe,Te,_e,Se])]),Le])}const De=r(E,[["render",fe],["__file","Administration.html.vue"]]);export{De as default};
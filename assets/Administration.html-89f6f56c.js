import{_ as d,E as o,F as u,af as c,G as t,I as e,ag as i,ac as a,aT as r,C as n}from"./framework-6055ecdb.js";const g={},p=t("h1",{id:"administration-management",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#administration-management","aria-hidden":"true"},"#"),e(" Administration Management")],-1),h=t("p",null,"IoTDB provides users with account privilege management operations, so as to ensure data security.",-1),v=r(`<h2 id="basic-concepts" tabindex="-1"><a class="header-anchor" href="#basic-concepts" aria-hidden="true">#</a> Basic Concepts</h2><h3 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> User</h3><p>The user is the legal user of the database. A user corresponds to a unique username and has a password as a means of authentication. Before using a database, a person must first provide a legitimate username and password to make himself/herself a user.</p><h3 id="privilege" tabindex="-1"><a class="header-anchor" href="#privilege" aria-hidden="true">#</a> Privilege</h3><p>The database provides a variety of operations, and not all users can perform all operations. If a user can perform an operation, the user is said to have the privilege to perform the operation. privileges are divided into data management privilege (such as adding, deleting and modifying data) and authority management privilege (such as creation and deletion of users and roles, granting and revoking of privileges, etc.). Data management privilege often needs a path to limit its effective range, which is a subtree rooted at the path&#39;s corresponding node.</p><blockquote><p>Note: the path wildcard is not allowed in granting or revoking privileges .</p></blockquote><p>The following example is the wrong usage:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln.**;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The correct usage should be:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="role" tabindex="-1"><a class="header-anchor" href="#role" aria-hidden="true">#</a> Role</h3><p>A role is a set of privileges and has a unique role name as an identifier. A user usually corresponds to a real identity (such as a traffic dispatcher), while a real identity may correspond to multiple users. These users with the same real identity tend to have the same privileges. Roles are abstractions that can unify the management of such privileges.</p><h3 id="default-user" tabindex="-1"><a class="header-anchor" href="#default-user" aria-hidden="true">#</a> Default User</h3><p>There is a default user in IoTDB after the initial installation: root, and the default password is root. This user is an administrator user, who cannot be deleted and has all the privileges. Neither can new privileges be granted to the root user nor can privileges owned by the root user be deleted.</p><h2 id="privilege-management-operation-examples" tabindex="-1"><a class="header-anchor" href="#privilege-management-operation-examples" aria-hidden="true">#</a> Privilege Management Operation Examples</h2>`,15),m={href:"https://github.com/thulab/iotdb/files/4438687/OtherMaterial-Sample.Data.txt",target:"_blank",rel:"noopener noreferrer"},E=r(`<h3 id="create-user" tabindex="-1"><a class="header-anchor" href="#create-user" aria-hidden="true">#</a> Create User</h3><p>We use <code>CREATE USER &lt;userName&gt; &lt;password&gt;</code> to create users. For example, we can create two users for ln and sgcc groups, named ln_write_user and sgcc_write_user, with both passwords being write_pwd. The SQL statement is:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE USER ln_write_user &#39;write_pwd&#39;
CREATE USER sgcc_write_user &#39;write_pwd&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Then use the following SQL statement to show the user:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>As can be seen from the result shown below, the two users have been created:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+
|           user|
+---------------+
|  ln_write_user|
|           root|
|sgcc_write_user|
+---------------+
Total line number = 3
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grant-user-privilege" tabindex="-1"><a class="header-anchor" href="#grant-user-privilege" aria-hidden="true">#</a> Grant User Privilege</h3><p>At this point, although two users have been created, they do not have any privileges, so they can not operate on the database. For example, we use ln_write_user to write data in the database, the SQL statement is:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The SQL statement will not be executed and the corresponding error prompt is given as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Msg: 602: No permissions for this operation, please add privilege READ_TIMESERIES.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, we grant the two users write privileges to the corresponding storage groups, and try to write data again.</p><p>We use <code>GRANT USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;</code> to grant user privileges. For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT USER ln_write_user PRIVILEGES INSERT_TIMESERIES on root.ln
GRANT USER sgcc_write_user PRIVILEGES INSERT_TIMESERIES on root.sgcc
INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; GRANT USER ln_write_user PRIVILEGES INSERT_TIMESERIES on root.ln
Msg: The statement is executed successfully.
IoTDB&gt; GRANT USER sgcc_write_user PRIVILEGES INSERT_TIMESERIES on root.sgcc
Msg: The statement is executed successfully.
IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
Msg: The statement is executed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="revoker-user-privilege" tabindex="-1"><a class="header-anchor" href="#revoker-user-privilege" aria-hidden="true">#</a> Revoker User Privilege</h3><p>After granting user privileges, we could use <code>REVOKE USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;</code> to revoke the granted user privileges. For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE USER ln_write_user PRIVILEGES INSERT_TIMESERIES on root.ln
REVOKE USER sgcc_write_user PRIVILEGES INSERT_TIMESERIES on root.sgcc
INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE USER ln_write_user PRIVILEGES INSERT_TIMESERIES on root.ln
Msg: The statement is executed successfully.
REVOKE USER sgcc_write_user PRIVILEGES INSERT_TIMESERIES on root.sgcc
Msg: The statement is executed successfully.
INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
Msg: 602: No permissions for this operation, please add privilege READ_TIMESERIES.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-statements" tabindex="-1"><a class="header-anchor" href="#sql-statements" aria-hidden="true">#</a> SQL Statements</h3><p>Here are all related SQL statements:</p><ul><li>Create User</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE USER &lt;userName&gt; &lt;password&gt;;  
Eg: IoTDB &gt; CREATE USER thulab &#39;pwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete User</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP USER &lt;userName&gt;;  
Eg: IoTDB &gt; DROP USER xiaoming;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Role</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE ROLE &lt;roleName&gt;;  
Eg: IoTDB &gt; CREATE ROLE admin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete Role</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP ROLE &lt;roleName&gt;;  
Eg: IoTDB &gt; DROP ROLE admin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Grant User Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
Eg: IoTDB &gt; GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Grant Role Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
Eg: IoTDB &gt; GRANT ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Grant User Role</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT &lt;roleName&gt; TO &lt;userName&gt;;  
Eg: IoTDB &gt; GRANT temprole TO tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Revoke User Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;   
Eg: IoTDB &gt; REVOKE USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Revoke Role Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
Eg: IoTDB &gt; REVOKE ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Revoke Role From User</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE &lt;roleName&gt; FROM &lt;userName&gt;;
Eg: IoTDB &gt; REVOKE temprole FROM tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Users</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST USER
Eg: IoTDB &gt; LIST USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Roles</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ROLE
Eg: IoTDB &gt; LIST ROLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST PRIVILEGES USER  &lt;username&gt; ON &lt;path&gt;;    
Eg: IoTDB &gt; LIST PRIVILEGES USER sgcc_wirte_user ON root.sgcc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges of Roles</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ROLE PRIVILEGES &lt;roleName&gt;
Eg: IoTDB &gt; LIST ROLE PRIVILEGES actor;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges of Roles(On Specific Path)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST PRIVILEGES ROLE &lt;roleName&gt; ON &lt;path&gt;;    
Eg: IoTDB &gt; LIST PRIVILEGES ROLE wirte_role ON root.sgcc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges of Users</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST USER PRIVILEGES &lt;username&gt; ;   
Eg: IoTDB &gt; LIST USER PRIVILEGES tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Roles of User</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ALL ROLE OF USER &lt;username&gt; ;  
Eg: IoTDB &gt; LIST ALL ROLE OF USER tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Users of Role</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LIST ALL USER OF ROLE &lt;roleName&gt;;
Eg: IoTDB &gt; LIST ALL USER OF ROLE roleuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Alter Password</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;
Eg: IoTDB &gt; ALTER USER tempuser SET PASSWORD &#39;newpwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="other-instructions" tabindex="-1"><a class="header-anchor" href="#other-instructions" aria-hidden="true">#</a> Other Instructions</h2><h3 id="the-relationship-among-users-privileges-and-roles" tabindex="-1"><a class="header-anchor" href="#the-relationship-among-users-privileges-and-roles" aria-hidden="true">#</a> The Relationship among Users, Privileges and Roles</h3><p>A Role is a set of privileges, and privileges and roles are both attributes of users. That is, a role can have several privileges and a user can have several roles and privileges (called the user&#39;s own privileges).</p><p>At present, there is no conflicting privilege in IoTDB, so the real privileges of a user is the union of the user&#39;s own privileges and the privileges of the user&#39;s roles. That is to say, to determine whether a user can perform an operation, it depends on whether one of the user&#39;s own privileges or the privileges of the user&#39;s roles permits the operation. The user&#39;s own privileges and privileges of the user&#39;s roles may overlap, but it does not matter.</p><p>It should be noted that if users have a privilege (corresponding to operation A) themselves and their roles contain the same privilege, then revoking the privilege from the users themselves alone can not prohibit the users from performing operation A, since it is necessary to revoke the privilege from the role, or revoke the role from the user. Similarly, revoking the privilege from the users&#39;s roles alone can not prohibit the users from performing operation A.</p><p>At the same time, changes to roles are immediately reflected on all users who own the roles. For example, adding certain privileges to roles will immediately give all users who own the roles corresponding privileges, and deleting certain privileges will also deprive the corresponding users of the privileges (unless the users themselves have the privileges).</p><h3 id="list-of-privileges-included-in-the-system" tabindex="-1"><a class="header-anchor" href="#list-of-privileges-included-in-the-system" aria-hidden="true">#</a> List of Privileges Included in the System</h3><p><strong>List of privileges Included in the System</strong></p><table><thead><tr><th style="text-align:left;">privilege Name</th><th style="text-align:left;">Interpretation</th></tr></thead><tbody><tr><td style="text-align:left;">SET_STORAGE_GROUP</td><td style="text-align:left;">set storage groups; path dependent</td></tr><tr><td style="text-align:left;">DELETE_STORAGE_GROUP</td><td style="text-align:left;">delete storage groups; path dependent</td></tr><tr><td style="text-align:left;">CREATE_TIMESERIES</td><td style="text-align:left;">create timeseries; path dependent</td></tr><tr><td style="text-align:left;">INSERT_TIMESERIES</td><td style="text-align:left;">insert data; path dependent</td></tr><tr><td style="text-align:left;">READ_TIMESERIES</td><td style="text-align:left;">query data; path dependent</td></tr><tr><td style="text-align:left;">DELETE_TIMESERIES</td><td style="text-align:left;">delete data or timeseries, deactivate template; path dependent</td></tr><tr><td style="text-align:left;">DELETE_STORAGE_GROUP</td><td style="text-align:left;">delete storage groups; path dependent</td></tr><tr><td style="text-align:left;">CREATE_USER</td><td style="text-align:left;">create users; path independent</td></tr><tr><td style="text-align:left;">DELETE_USER</td><td style="text-align:left;">delete users; path independent</td></tr><tr><td style="text-align:left;">MODIFY_PASSWORD</td><td style="text-align:left;">modify passwords for all users; path independent; (Those who do not have this privilege can still change their own asswords. )</td></tr><tr><td style="text-align:left;">LIST_USER</td><td style="text-align:left;">list all users; list a user&#39;s privileges; list a user&#39;s roles; list users of role with four kinds of operation privileges; path independent</td></tr><tr><td style="text-align:left;">GRANT_USER_PRIVILEGE</td><td style="text-align:left;">grant user privileges; path independent</td></tr><tr><td style="text-align:left;">REVOKE_USER_PRIVILEGE</td><td style="text-align:left;">revoke user privileges; path independent</td></tr><tr><td style="text-align:left;">GRANT_USER_ROLE</td><td style="text-align:left;">grant user roles; path independent</td></tr><tr><td style="text-align:left;">REVOKE_USER_ROLE</td><td style="text-align:left;">revoke user roles; path independent</td></tr><tr><td style="text-align:left;">CREATE_ROLE</td><td style="text-align:left;">create roles; path independent</td></tr><tr><td style="text-align:left;">DELETE_ROLE</td><td style="text-align:left;">delete roles; path independent</td></tr><tr><td style="text-align:left;">LIST_ROLE</td><td style="text-align:left;">list all roles; list the privileges of a role; list the three kinds of operation privileges of all users owning a role; path independent</td></tr><tr><td style="text-align:left;">GRANT_ROLE_PRIVILEGE</td><td style="text-align:left;">grant role privileges; path independent</td></tr><tr><td style="text-align:left;">REVOKE_ROLE_PRIVILEGE</td><td style="text-align:left;">revoke role privileges; path independent</td></tr><tr><td style="text-align:left;">CREATE_FUNCTION</td><td style="text-align:left;">register UDFs; path independent</td></tr><tr><td style="text-align:left;">DROP_FUNCTION</td><td style="text-align:left;">deregister UDFs; path independent</td></tr><tr><td style="text-align:left;">CREATE_TRIGGER</td><td style="text-align:left;">create triggers; path dependent</td></tr><tr><td style="text-align:left;">DROP_TRIGGER</td><td style="text-align:left;">drop triggers; path dependent</td></tr><tr><td style="text-align:left;">START_TRIGGER</td><td style="text-align:left;">start triggers; path dependent</td></tr><tr><td style="text-align:left;">STOP_TRIGGER</td><td style="text-align:left;">stop triggers; path dependent</td></tr><tr><td style="text-align:left;">CREATE_CONTINUOUS_QUERY</td><td style="text-align:left;">create continuous queries; path independent</td></tr><tr><td style="text-align:left;">DROP_CONTINUOUS_QUERY</td><td style="text-align:left;">drop continuous queries; path independent</td></tr><tr><td style="text-align:left;">UPDATE_TEMPLATE</td><td style="text-align:left;">create, drop, append and prune schema template; path independent</td></tr><tr><td style="text-align:left;">APPLY_TEMPLATE</td><td style="text-align:left;">set, unset and activate schema template; path dependent</td></tr></tbody></table><h3 id="username-restrictions" tabindex="-1"><a class="header-anchor" href="#username-restrictions" aria-hidden="true">#</a> Username Restrictions</h3><p>IoTDB specifies that the character length of a username should not be less than 4, and the username cannot contain spaces.</p><h3 id="password-restrictions" tabindex="-1"><a class="header-anchor" href="#password-restrictions" aria-hidden="true">#</a> Password Restrictions</h3><p>IoTDB specifies that the character length of a password should have no less than 4 character length, and no spaces. The password is encrypted with MD5.</p><h3 id="role-name-restrictions" tabindex="-1"><a class="header-anchor" href="#role-name-restrictions" aria-hidden="true">#</a> Role Name Restrictions</h3><p>IoTDB specifies that the character length of a role name should have no less than 4 character length, and no spaces.</p>`,77);function R(x,f){const s=n("RouterLink"),l=n("ExternalLinkIcon");return o(),u("div",null,[c(`

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

`),p,h,t("p",null,[e("We will show you basic user privilege management operations through the following specific examples. Detailed SQL syntax and usage details can be found in "),i(s,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:a(()=>[e("SQL Documentation")]),_:1}),e(". At the same time, in the JAVA programming environment, you can use the "),i(s,{to:"/UserGuide/V0.13.x/API/Programming-JDBC.html"},{default:a(()=>[e("Java JDBC")]),_:1}),e(" to execute privilege management statements in a single or batch mode.")]),v,t("p",null,[e("According to the "),t("a",m,[e("sample data"),i(l)]),e(", the sample data of IoTDB might belong to different power generation groups such as ln, sgcc, etc. Different power generation groups do not want others to obtain their own database data, so we need to have data privilege isolated at the group layer.")]),E])}const I=d(g,[["render",R],["__file","Administration.html.vue"]]);export{I as default};
(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{676:function(e,t,s){"use strict";s.r(t);var a=s(19),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"administration-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#administration-management"}},[e._v("#")]),e._v(" Administration Management")]),e._v(" "),t("p",[e._v("IoTDB provides users with account privilege management operations, so as to ensure data security.")]),e._v(" "),t("p",[e._v("We will show you basic user privilege management operations through the following specific examples. Detailed SQL syntax and usage details can be found in "),t("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/Appendix/SQL-Reference.html"}},[e._v("SQL Documentation")]),e._v(".\nAt the same time, in the JAVA programming environment, you can use the "),t("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/API/Programming-JDBC.html"}},[e._v("Java JDBC")]),e._v(" to execute privilege management statements in a single or batch mode.")],1),e._v(" "),t("h2",{attrs:{id:"basic-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[e._v("#")]),e._v(" Basic Concepts")]),e._v(" "),t("h3",{attrs:{id:"user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[e._v("#")]),e._v(" User")]),e._v(" "),t("p",[e._v("The user is the legal user of the database. A user corresponds to a unique username and has a password as a means of authentication. Before using a database, a person must first provide a legitimate username and password to make himself/herself a user.")]),e._v(" "),t("h3",{attrs:{id:"privilege"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#privilege"}},[e._v("#")]),e._v(" Privilege")]),e._v(" "),t("p",[e._v("The database provides a variety of operations, and not all users can perform all operations. If a user can perform an operation, the user is said to have the privilege to perform the operation. privileges are divided into data management privilege (such as adding, deleting and modifying data) and authority management privilege (such as creation and deletion of users and roles, granting and revoking of privileges, etc.). Data management privilege often needs a path to limit its effective range, which is a subtree rooted at the path's corresponding node.")]),e._v(" "),t("h3",{attrs:{id:"role"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#role"}},[e._v("#")]),e._v(" Role")]),e._v(" "),t("p",[e._v("A role is a set of privileges and has a unique role name as an identifier. A user usually corresponds to a real identity (such as a traffic dispatcher), while a real identity may correspond to multiple users. These users with the same real identity tend to have the same privileges. Roles are abstractions that can unify the management of such privileges.")]),e._v(" "),t("h3",{attrs:{id:"default-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-user"}},[e._v("#")]),e._v(" Default User")]),e._v(" "),t("p",[e._v("There is a default user in IoTDB after the initial installation: root, and the default password is root. This user is an administrator user, who cannot be deleted and has all the privileges. Neither can new privileges be granted to the root user nor can privileges owned by the root user be deleted.")]),e._v(" "),t("h2",{attrs:{id:"privilege-management-operation-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#privilege-management-operation-examples"}},[e._v("#")]),e._v(" Privilege Management Operation Examples")]),e._v(" "),t("p",[e._v("According to the "),t("a",{attrs:{href:"https://github.com/thulab/iotdb/files/4438687/OtherMaterial-Sample.Data.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample data"),t("OutboundLink")],1),e._v(", the sample data of IoTDB might belong to different power generation groups such as ln, sgcc, etc. Different power generation groups do not want others to obtain their own database data, so we need to have data privilege isolated at the group layer.")]),e._v(" "),t("h3",{attrs:{id:"create-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-user"}},[e._v("#")]),e._v(" Create User")]),e._v(" "),t("p",[e._v("We can create two users for ln and sgcc groups, named ln_write_user and sgcc_write_user, with both passwords being write_pwd. The SQL statement is:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CREATE USER ln_write_user 'write_pwd'\nCREATE USER sgcc_write_user 'write_pwd'\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("Then use the following SQL statement to show the user:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("LIST USER\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("As can be seen from the result shown below, the two users have been created:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+---------------+\n|           user|\n+---------------+\n|  ln_write_user|\n|           root|\n|sgcc_write_user|\n+---------------+\nTotal line number = 3\nIt costs 0.004s\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("h3",{attrs:{id:"grant-user-privilege"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grant-user-privilege"}},[e._v("#")]),e._v(" Grant User Privilege")]),e._v(" "),t("p",[e._v("At this point, although two users have been created, they do not have any privileges, so they can not operate on the database. For example, we use ln_write_user to write data in the database, the SQL statement is:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The SQL statement will not be executed and the corresponding error prompt is given as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Msg: 602: No permissions for this operation INSERT\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Now, we grant the two users write privileges to the corresponding storage groups, and try to write data again. The SQL statement is:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("GRANT USER ln_write_user PRIVILEGES 'INSERT_TIMESERIES' on root.ln\nGRANT USER sgcc_write_user PRIVILEGES 'INSERT_TIMESERIES' on root.sgcc\nINSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("The execution result is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> GRANT USER ln_write_user PRIVILEGES 'INSERT_TIMESERIES' on root.ln\nMsg: The statement is executed successfully.\nIoTDB> GRANT USER sgcc_write_user PRIVILEGES 'INSERT_TIMESERIES' on root.sgcc\nMsg: The statement is executed successfully.\nIoTDB> INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)\nMsg: The statement is executed successfully.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("h2",{attrs:{id:"other-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-instructions"}},[e._v("#")]),e._v(" Other Instructions")]),e._v(" "),t("h3",{attrs:{id:"the-relationship-among-users-privileges-and-roles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-relationship-among-users-privileges-and-roles"}},[e._v("#")]),e._v(" The Relationship among Users, Privileges and Roles")]),e._v(" "),t("p",[e._v("A Role is a set of privileges, and privileges and roles are both attributes of users. That is, a role can have several privileges and a user can have several roles and privileges (called the user's own privileges).")]),e._v(" "),t("p",[e._v("At present, there is no conflicting privilege in IoTDB, so the real privileges of a user is the union of the user's own privileges and the privileges of the user's roles. That is to say, to determine whether a user can perform an operation, it depends on whether one of the user's own privileges or the privileges of the user's roles permits the operation. The user's own privileges and privileges of the user's roles may overlap, but it does not matter.")]),e._v(" "),t("p",[e._v("It should be noted that if users have a privilege (corresponding to operation A) themselves and their roles contain the same privilege, then revoking the privilege from the users themselves alone can not prohibit the users from performing operation A, since it is necessary to revoke the privilege from the role, or revoke the role from the user. Similarly, revoking the privilege from the users's roles alone can not prohibit the users from performing operation A.")]),e._v(" "),t("p",[e._v("At the same time, changes to roles are immediately reflected on all users who own the roles. For example, adding certain privileges to roles will immediately give all users who own the roles corresponding privileges, and deleting certain privileges will also deprive the corresponding users of the privileges (unless the users themselves have the privileges).")]),e._v(" "),t("h3",{attrs:{id:"list-of-privileges-included-in-the-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-of-privileges-included-in-the-system"}},[e._v("#")]),e._v(" List of Privileges Included in the System")]),e._v(" "),t("p",[t("strong",[e._v("List of privileges Included in the System")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("privilege Name")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Interpretation")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("SET_STORAGE_GROUP")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("set storage groups; path dependent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("CREATE_TIMESERIES")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("create timeseries; path dependent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("INSERT_TIMESERIES")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("insert data; path dependent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("READ_TIMESERIES")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("query data; path dependent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("DELETE_TIMESERIES")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("delete data or timeseries; path dependent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("CREATE_USER")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("create users; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("DELETE_USER")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("delete users; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("MODIFY_PASSWORD")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("modify passwords for all users; path independent; (Those who do not have this privilege can still change their own asswords. )")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("LIST_USER")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("list all users; list a user's privileges; list a user's roles with three kinds of operation privileges; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("GRANT_USER_PRIVILEGE")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("grant user privileges; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("REVOKE_USER_PRIVILEGE")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("revoke user privileges; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("GRANT_USER_ROLE")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("grant user roles; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("REVOKE_USER_ROLE")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("revoke user roles; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("CREATE_ROLE")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("create roles; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("DELETE_ROLE")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("delete roles; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("LIST_ROLE")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("list all roles; list the privileges of a role; list the three kinds of operation privileges of all users owning a role; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("GRANT_ROLE_PRIVILEGE")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("grant role privileges; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("REVOKE_ROLE_PRIVILEGE")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("revoke role privileges; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("CREATE_FUNCTION")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("register UDFs; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("DROP_FUNCTION")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("deregister UDFs; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("CREATE_TRIGGER")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("create triggers; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("DROP_TRIGGER")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("drop triggers; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("START_TRIGGER")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("start triggers; path independent")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("STOP_TRIGGER")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("stop triggers; path independent")])])])]),e._v(" "),t("h3",{attrs:{id:"username-restrictions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#username-restrictions"}},[e._v("#")]),e._v(" Username Restrictions")]),e._v(" "),t("p",[e._v("IoTDB specifies that the character length of a username should not be less than 4, and the username cannot contain spaces.")]),e._v(" "),t("h3",{attrs:{id:"password-restrictions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#password-restrictions"}},[e._v("#")]),e._v(" Password Restrictions")]),e._v(" "),t("p",[e._v("IoTDB specifies that the character length of a password should have no less than 4 character length, and no spaces. The password is encrypted with MD5.")]),e._v(" "),t("h3",{attrs:{id:"role-name-restrictions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#role-name-restrictions"}},[e._v("#")]),e._v(" Role Name Restrictions")]),e._v(" "),t("p",[e._v("IoTDB specifies that the character length of a role name should have no less than 4 character length, and no spaces.")])])}),[],!1,null,null,null);t.default=r.exports}}]);
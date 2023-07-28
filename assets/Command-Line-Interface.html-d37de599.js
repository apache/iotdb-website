import{_ as l,r as i,o,c as p,a as r,d as e,e as a,b as n,f as s}from"./app-045c081c.js";const c={},d=s(`<h2 id="sql-命令行终端-cli" tabindex="-1"><a class="header-anchor" href="#sql-命令行终端-cli" aria-hidden="true">#</a> SQL 命令行终端 (CLI)</h2><p>IOTDB 为用户提供 cli/Shell 工具用于启动客户端和服务端程序。下面介绍每个 cli/Shell 工具的运行方式和相关参数。</p><blockquote><p>$IOTDB_HOME 表示 IoTDB 的安装目录所在路径。</p></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>如果使用源码版，可以在 iotdb 的根目录下执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> mvn clean package <span class="token parameter variable">-pl</span> iotdb-client/cli <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在生成完毕之后，IoTDB 的 Cli 工具位于文件夹&quot;cli/target/iotdb-cli-{project.version}&quot;中。</p><p>如果你下载的是二进制版，那么 Cli 可以在 sbin 文件夹下直接找到。</p><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><h3 id="cli-运行方式" tabindex="-1"><a class="header-anchor" href="#cli-运行方式" aria-hidden="true">#</a> Cli 运行方式</h3><p>安装后的 IoTDB 中有一个默认用户：<code>root</code>，默认密码为<code>root</code>。用户可以使用该用户尝试运行 IoTDB 客户端以测试服务器是否正常启动。客户端启动脚本为$IOTDB_HOME/sbin 文件夹下的<code>start-cli</code>脚本。启动脚本时需要指定运行 IP 和 RPC PORT。以下为服务器在本机启动，且用户未更改运行端口号的示例，默认端口为 6667。若用户尝试连接远程服务器或更改了服务器运行的端口号，请在-h 和-p 项处使用服务器的 IP 和 RPC PORT。<br><br> 用户也可以在启动脚本的最前方设置自己的环境变量，如 JAVA_HOME 等 （对于 linux 用户，脚本路径为：&quot;/sbin/start-cli.sh&quot;； 对于 windows 用户，脚本路径为：&quot;/sbin/start-cli.bat&quot;)</p><p>Linux 系统与 MacOS 系统启动命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Windows 系统启动命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> sbin<span class="token punctuation">\\</span>start-cli.bat <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>回车后即可成功启动客户端。启动后出现如图提示即为启动成功。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> _____       _________  ______   ______
|_   _|     |  _   _  ||_   _ \`.|_   _ \\
  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |
  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.
 _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) |
|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version &lt;version&gt;

Successfully login at 127.0.0.1:6667
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入<code>quit</code>或<code>exit</code>可退出 cli 结束本次会话，cli 输出<code>quit normally</code>表示退出成功。</p><h3 id="cli-运行参数" tabindex="-1"><a class="header-anchor" href="#cli-运行参数" aria-hidden="true">#</a> Cli 运行参数</h3><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">参数类型</th><th style="text-align:left;">是否为必需参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">例子</th></tr></thead><tbody><tr><td style="text-align:left;">-disableISO8601</td><td style="text-align:left;">没有参数</td><td style="text-align:left;">否</td><td style="text-align:left;">如果设置了这个参数，IoTDB 将以数字的形式打印时间戳 (timestamp)。</td><td style="text-align:left;">-disableISO8601</td></tr><tr><td style="text-align:left;">-h &lt;<code>host</code>&gt;</td><td style="text-align:left;">string 类型，不需要引号</td><td style="text-align:left;">是</td><td style="text-align:left;">IoTDB 客户端连接 IoTDB 服务器的 IP 地址。</td><td style="text-align:left;">-h 10.129.187.21</td></tr><tr><td style="text-align:left;">-help</td><td style="text-align:left;">没有参数</td><td style="text-align:left;">否</td><td style="text-align:left;">打印 IoTDB 的帮助信息</td><td style="text-align:left;">-help</td></tr><tr><td style="text-align:left;">-p &lt;<code>rpcPort</code>&gt;</td><td style="text-align:left;">int 类型</td><td style="text-align:left;">是</td><td style="text-align:left;">IoTDB 连接服务器的端口号，IoTDB 默认运行在 6667 端口。</td><td style="text-align:left;">-p 6667</td></tr><tr><td style="text-align:left;">-pw &lt;<code>password</code>&gt;</td><td style="text-align:left;">string 类型，不需要引号</td><td style="text-align:left;">否</td><td style="text-align:left;">IoTDB 连接服务器所使用的密码。如果没有输入密码 IoTDB 会在 Cli 端提示输入密码。</td><td style="text-align:left;">-pw root</td></tr><tr><td style="text-align:left;">-u &lt;<code>username</code>&gt;</td><td style="text-align:left;">string 类型，不需要引号</td><td style="text-align:left;">是</td><td style="text-align:left;">IoTDB 连接服务器锁使用的用户名。</td><td style="text-align:left;">-u root</td></tr><tr><td style="text-align:left;">-maxPRC &lt;<code>maxPrintRowCount</code>&gt;</td><td style="text-align:left;">int 类型</td><td style="text-align:left;">否</td><td style="text-align:left;">设置 IoTDB 返回客户端命令行中所显示的最大行数。</td><td style="text-align:left;">-maxPRC 10</td></tr><tr><td style="text-align:left;">-e &lt;<code>execute</code>&gt;</td><td style="text-align:left;">string 类型</td><td style="text-align:left;">否</td><td style="text-align:left;">在不进入客户端输入模式的情况下，批量操作 IoTDB</td><td style="text-align:left;">-e &quot;show databases&quot;</td></tr><tr><td style="text-align:left;">-c</td><td style="text-align:left;">空</td><td style="text-align:left;">否</td><td style="text-align:left;">如果服务器设置了 <code>rpc_thrift_compression_enable=true</code>, 则 CLI 必须使用 <code>-c</code></td><td style="text-align:left;">-c</td></tr></tbody></table><p>下面展示一条客户端命令，功能是连接 IP 为 10.129.187.21 的主机，端口为 6667 ，用户名为 root，密码为 root，以数字的形式打印时间戳，IoTDB 命令行显示的最大行数为 10。</p><p>Linux 系统与 MacOS 系统启动命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token number">10.129</span>.187.21 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-disableISO8601</span> <span class="token parameter variable">-maxPRC</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Windows 系统启动命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> sbin<span class="token punctuation">\\</span>start-cli.bat <span class="token parameter variable">-h</span> <span class="token number">10.129</span>.187.21 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-disableISO8601</span> <span class="token parameter variable">-maxPRC</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cli-特殊命令" tabindex="-1"><a class="header-anchor" href="#cli-特殊命令" aria-hidden="true">#</a> CLI 特殊命令</h3><p>下面列举了一些CLI的特殊命令。</p><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">描述 / 例子</th></tr></thead><tbody><tr><td style="text-align:left;"><code>set time_display_type=xxx</code></td><td style="text-align:left;">例如： long, default, ISO8601, yyyy-MM-dd HH:mm:ss</td></tr><tr><td style="text-align:left;"><code>show time_display_type</code></td><td style="text-align:left;">显示时间显示方式</td></tr><tr><td style="text-align:left;"><code>set time_zone=xxx</code></td><td style="text-align:left;">例如： +08:00, Asia/Shanghai</td></tr><tr><td style="text-align:left;"><code>show time_zone</code></td><td style="text-align:left;">显示CLI的时区</td></tr><tr><td style="text-align:left;"><code>set fetch_size=xxx</code></td><td style="text-align:left;">设置从服务器查询数据时的读取条数</td></tr><tr><td style="text-align:left;"><code>show fetch_size</code></td><td style="text-align:left;">显示读取条数的大小</td></tr><tr><td style="text-align:left;"><code>set max_display_num=xxx</code></td><td style="text-align:left;">设置 CLI 一次展示的最大数据条数， 设置为-1表示无限制</td></tr><tr><td style="text-align:left;"><code>help</code></td><td style="text-align:left;">获取CLI特殊命令的提示</td></tr><tr><td style="text-align:left;"><code>exit/quit</code></td><td style="text-align:left;">退出CLI</td></tr></tbody></table><h3 id="使用-openid-作为用户名认证登录" tabindex="-1"><a class="header-anchor" href="#使用-openid-作为用户名认证登录" aria-hidden="true">#</a> 使用 OpenID 作为用户名认证登录</h3><p>OpenID Connect (OIDC) 使用 keycloack 作为 OIDC 服务权限认证服务。</p><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><p>配置位于 iotdb-common.properties，设定 authorizer_provider_class 为 org.apache.iotdb.commons.auth.authorizer.OpenIdAuthorizer 则开启了 openID 服务，默认情况下值为 org.apache.iotdb.commons.auth.authorizer.LocalFileAuthorizer 表示没有开启 openID 服务。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>authorizer_provider_class=org.apache.iotdb.commons.auth.authorizer.OpenIdAuthorizer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,33),u={realmsName:""},m={href:"http://ip",target:"_blank",rel:"noopener noreferrer"},b=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openID_url=http://127.0.0.1:8080/realms/iotdb/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>####keycloack 配置</p><p>1、下载 keycloack 程序（此教程为21.1.0版本），在 keycloack/bin 中启动 keycloack</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> bin
Shell <span class="token operator">&gt;</span> ./kc.sh start-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g={href:"https://ip",target:"_blank",rel:"noopener noreferrer"},v=s(`<figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/login_keycloak.png?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>3、点击 Administration Console 进入管理端</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/AdministrationConsole.png?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>4、在左侧的 Master 菜单点击 Create Realm, 输入 Realm Name 创建一个新的 Realm</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_Realm_1.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_Realm_2.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>5、点击左侧菜单 Clients，创建 client</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/client.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>6、点击左侧菜单 User，创建 user</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/user.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>7、点击新创建的用户 id，点击 Credentials 导航输入密码和关闭 Temporary 选项，至此 keyclork 配置完成</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/pwd.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>8、创建角色，点击左侧菜单的 Roles然后点击Create Role 按钮添加角色</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role1.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>9、在Role Name 中输入<code>iotdb_admin</code>，点击save 按钮。提示：这里的<code>iotdb_admin</code>不能为其他名称否则即使登陆成功后也将无权限使用iotdb的查询、插入、创建 database、添加用户、角色等功能</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role2.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>10、点击左侧的User 菜单然后点击用户列表中的用户为该用户添加我们刚创建的<code>iotdb_admin</code>角色</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role3.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>11、选择Role Mappings ，在Assign role选择<code>iotdb_admin</code>增加角色</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role4.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role5.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>提示：如果用户角色有调整需要重新生成token并且重新登陆iotdb才会生效</p><p>以上步骤提供了一种 keycloak 登陆 iotdb 方式，更多方式请参考 keycloak 配置</p><p>若对应的 IoTDB 服务器开启了使用 OpenID Connect (OIDC) 作为权限认证服务，那么就不再需要使用用户名密码进行登录。<br> 替而代之的是使用 Token，以及空密码。<br> 此时，登录命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token number">10.129</span>.187.21 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> <span class="token punctuation">{</span>my-access-token<span class="token punctuation">}</span> <span class="token parameter variable">-pw</span> <span class="token string">&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，需要将{my-access-token} （注意，包括{}）替换成你的 token，即 access_token 对应的值。密码为空需要再次确认。</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/iotdbpw.jpeg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>如何获取 token 取决于你的 OIDC 设置。 最简单的一种情况是使用<code>password-grant</code>。例如，假设你在用 keycloack 作为你的 OIDC 服务，<br> 并且你在 keycloack 中有一个被定义成 public 的<code>iotdb</code>客户的 realm，那么你可以使用如下<code>curl</code>命令获得 token。<br> （注意例子中的{}和里面的内容需要替换成具体的服务器地址和 realm 名字）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">&quot;http://{your-keycloack-server}/realms/{your-realm}/protocol/openid-connect/token&quot;</span> <span class="token punctuation">\\</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/x-www-form-urlencoded&quot;</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> <span class="token string">&quot;username={username}&quot;</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> <span class="token string">&quot;password={password}&quot;</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> <span class="token string">&#39;grant_type=password&#39;</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> <span class="token string">&quot;client_id=iotdb-client&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;access_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMS1XbTBvelE1TzBtUUg4LVNKYXAyWmNONE1tdWNXd25RV0tZeFpKNG93In0.eyJleHAiOjE1OTAzOTgwNzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNjA0ZmYxMDctN2NiNy00NTRmLWIwYmQtY2M2ZDQwMjFiNGU4IiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzJlNDcxLWM3NzItNGIzMy04ZGE2LTZmZThhY2RhMDA3MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsibG9jYWxob3N0OjgwODAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJpb3RkYl9hZG1pbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.nwbrJkWdCNjzFrTDwKNuV5h9dDMg5ytRKGOXmFIajpfsbOutJytjWTCB2WpA8E1YI3KM6gU6Jx7cd7u0oPo5syHhfCz119n_wBiDnyTZkFOAPsx0M2z20kvBLN9k36_VfuCMFUeddJjO31MeLTmxB0UKg2VkxdczmzMH3pnalhxqpnWWk3GnrRrhAf2sZog0foH4Ae3Ks0lYtYzaWK_Yo7E4Px42-gJpohy3JevOC44aJ4auzJR1RBj9LUbgcRinkBy0JLi6XXiYznSC2V485CSBHW3sseXn7pSXQADhnmGQrLfFGO5ZljmPO18eFJaimdjvgSChsrlSEmTDDsoo5Q&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;expires_in&quot;</span><span class="token operator">:</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token property">&quot;refresh_expires_in&quot;</span><span class="token operator">:</span><span class="token number">1800</span><span class="token punctuation">,</span><span class="token property">&quot;refresh_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhMzZlMGU0NC02MWNmLTQ5NmMtOGRlZi03NTkwNjQ5MzQzMjEifQ.eyJleHAiOjE1OTAzOTk1NzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNmMxNTBiY2EtYmE5NC00NTgxLWEwODEtYjI2YzhhMmI5YmZmIiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwic3ViIjoiYmEzMmU0NzEtYzc3Mi00YjMzLThkYTYtNmZlOGFjZGEwMDczIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSJ9.ayNpXdNX28qahodX1zowrMGiUCw2AodlHBQFqr8Ui7c&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;token_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;bearer&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;not-before-policy&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;session_state&quot;</span><span class="token operator">:</span><span class="token string">&quot;060d2862-14ed-42fe-baf7-8d1f784657f1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;scope&quot;</span><span class="token operator">:</span><span class="token string">&quot;email profile&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cli-的批量操作" tabindex="-1"><a class="header-anchor" href="#cli-的批量操作" aria-hidden="true">#</a> Cli 的批量操作</h3><p>当您想要通过脚本的方式通过 Cli / Shell 对 IoTDB 进行批量操作时，可以使用-e 参数。通过使用该参数，您可以在不进入客户端输入模式的情况下操作 IoTDB。</p><p>为了避免 SQL 语句和其他参数混淆，现在只支持-e 参数作为最后的参数使用。</p><p>针对 cli/Shell 工具的-e 参数用法如下：</p><p>Linux 系统与 MacOS 指令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token punctuation">{</span>host<span class="token punctuation">}</span> <span class="token parameter variable">-p</span> <span class="token punctuation">{</span>rpcPort<span class="token punctuation">}</span> <span class="token parameter variable">-u</span> <span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token parameter variable">-pw</span> <span class="token punctuation">{</span>password<span class="token punctuation">}</span> <span class="token parameter variable">-e</span> <span class="token punctuation">{</span>sql <span class="token keyword">for</span> iotdb<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Windows 系统指令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> sbin<span class="token punctuation">\\</span>start-cli.bat <span class="token parameter variable">-h</span> <span class="token punctuation">{</span>host<span class="token punctuation">}</span> <span class="token parameter variable">-p</span> <span class="token punctuation">{</span>rpcPort<span class="token punctuation">}</span> <span class="token parameter variable">-u</span> <span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token parameter variable">-pw</span> <span class="token punctuation">{</span>password<span class="token punctuation">}</span> <span class="token parameter variable">-e</span> <span class="token punctuation">{</span>sql <span class="token keyword">for</span> iotdb<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Windows 环境下，-e 参数的 SQL 语句需要使用<code>\`\`</code>对于<code>&quot; &quot;</code>进行替换</p><p>为了更好的解释-e 参数的使用，可以参考下面在 Linux 上执行的例子。</p><p>假设用户希望对一个新启动的 IoTDB 进行如下操作：</p><ol><li><p>创建名为 root.demo 的 database</p></li><li><p>创建名为 root.demo.s1 的时间序列</p></li><li><p>向创建的时间序列中插入三个数据点</p></li><li><p>查询验证数据是否插入成功</p></li></ol><p>那么通过使用 cli/Shell 工具的 -e 参数，可以采用如下的脚本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># !/bin/bash</span>

<span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
<span class="token assign-left variable">rpcPort</span><span class="token operator">=</span><span class="token number">6667</span>
<span class="token assign-left variable">user</span><span class="token operator">=</span>root
<span class="token assign-left variable">pass</span><span class="token operator">=</span>root

<span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;CREATE DATABASE root.demo&quot;</span>
<span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;create timeseries root.demo.s1 WITH DATATYPE=INT32, ENCODING=RLE&quot;</span>
<span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;insert into root.demo(timestamp,s1) values(1,10)&quot;</span>
<span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;insert into root.demo(timestamp,s1) values(2,11)&quot;</span>
<span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;insert into root.demo(timestamp,s1) values(3,12)&quot;</span>
<span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;select s1 from root.demo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印出来的结果显示如下，通过这种方式进行的操作与客户端的输入模式以及通过 JDBC 进行操作结果是一致的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> ./shell.sh 
+-----------------------------+------------+
<span class="token operator">|</span>                         Time<span class="token operator">|</span>root.demo.s1<span class="token operator">|</span>
+-----------------------------+------------+
<span class="token operator">|</span><span class="token number">1970</span>-01-01T08:00:00.001+08:00<span class="token operator">|</span>          <span class="token number">10</span><span class="token operator">|</span>
<span class="token operator">|</span><span class="token number">1970</span>-01-01T08:00:00.002+08:00<span class="token operator">|</span>          <span class="token number">11</span><span class="token operator">|</span>
<span class="token operator">|</span><span class="token number">1970</span>-01-01T08:00:00.003+08:00<span class="token operator">|</span>          <span class="token number">12</span><span class="token operator">|</span>
+-----------------------------+------------+
Total line number <span class="token operator">=</span> <span class="token number">3</span>
It costs <span class="token number">0</span>.267s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要特别注意的是，在脚本中使用 -e 参数时要对特殊字符进行转义。</p>`,48);function h(k,f){const t=i("ExternalLinkIcon");return o(),p("div",null,[r(`

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

`),d,e("p",u,[a("如果开启了 openID 服务则 openID_url 为必填项，openID_url 值为 "),e("a",m,[a("http://ip"),n(t)]),a(":port/realms/")]),b,e("p",null,[a("2、使用 "),e("a",g,[a("https://ip"),n(t)]),a(":port 登陆 keycloack, 首次登陆需要创建用户")]),v])}const x=l(c,[["render",h],["__file","Command-Line-Interface.html.vue"]]);export{x as default};

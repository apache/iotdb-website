import{_ as o,r as i,o as c,c as p,a as l,d as n,e as s,b as e,f as t}from"./app-u0F7ej3R.js";const r={},d=n("h2",{id:"下载与安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载与安装","aria-hidden":"true"},"#"),s(" 下载与安装")],-1),u=n("p",null,"IoTDB 为您提供了两种安装方式，您可以参考下面的建议，任选其中一种：",-1),v=n("p",null,"第一种，从官网下载安装包。这是我们推荐使用的安装方式，通过该方式，您将得到一个可以立即使用的、打包好的二进制可执行文件。",-1),k=n("p",null,"第二种，使用源码编译。若您需要自行修改代码，可以使用该安装方式。",-1),b=n("h3",{id:"安装环境要求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装环境要求","aria-hidden":"true"},"#"),s(" 安装环境要求")],-1),m=n("p",null,"安装前请保证您的电脑上配有 JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。",-1),h=n("p",null,"如果您需要从源码进行编译，还需要安装：",-1),_={href:"https://maven.apache.org/install.html",target:"_blank",rel:"noopener noreferrer"},g=n("blockquote",null,[n("p",null,"注： 也可以选择不安装，使用我们提供的'mvnw' 或 'mvnw.cmd' 工具。使用时请用'mvnw' 或 'mvnw.cmd'命令代替下文的'mvn'命令。")],-1),f=n("h3",{id:"从官网下载二进制可执行文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#从官网下载二进制可执行文件","aria-hidden":"true"},"#"),s(" 从官网下载二进制可执行文件")],-1),y={href:"http://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>下载后，您可使用以下操作对 IoTDB 的压缩包进行解压：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Shell &gt; unzip iotdb-&lt;version&gt;.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用源码编译" tabindex="-1"><a class="header-anchor" href="#使用源码编译" aria-hidden="true">#</a> 使用源码编译</h3>`,3),I={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/apache/iotdb/tree/master",target:"_blank",rel:"noopener noreferrer"},D=t(`<p>源码克隆后，进入到源码文件夹目录下。如果您想编译已经发布过的版本，可以先用<code>git checkout -b my_{project.version} v{project.version}</code>命令新建并切换分支。比如您要编译0.12.4这个版本，您可以用如下命令去切换分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> my_0.12.4 v0.12.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换分支之后就可以使用以下命令进行编译：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; mvn clean package -pl server -am -Dmaven.test.skip=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译后，IoTDB 服务器会在 &quot;server/target/iotdb-server-{project.version}&quot; 文件夹下，包含以下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+- sbin/       &lt;-- script files
|
+- conf/      &lt;-- configuration files
|
+- lib/       &lt;-- project dependencies
|
+- tools/      &lt;-- system tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您想要编译项目中的某个模块，您可以在源码文件夹中使用<code>mvn clean package -pl {module.name} -am -DskipTests</code>命令进行编译。如果您需要的是带依赖的 jar 包，您可以在编译命令后面加上<code>-P get-jar-with-dependencies</code>参数。比如您想编译带依赖的 jdbc jar 包，您就可以使用以下命令进行编译：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> mvn clean package <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译完成后就可以在<code>{module.name}/target</code>目录中找到需要的包了。</p><h3 id="通过-docker-安装" tabindex="-1"><a class="header-anchor" href="#通过-docker-安装" aria-hidden="true">#</a> 通过 Docker 安装</h3>`,10),T={href:"https://hub.docker.com/r/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},E=n("br",null,null,-1),S=t(`<h4 id="简单尝试" tabindex="-1"><a class="header-anchor" href="#简单尝试" aria-hidden="true">#</a> 简单尝试</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取镜像</span>
<span class="token function">docker</span> pull apache/iotdb:1.1.0-standalone
<span class="token comment"># 创建 docker bridge 网络</span>
<span class="token function">docker</span> network create <span class="token parameter variable">--driver</span><span class="token operator">=</span>bridge <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">172.18</span>.0.0/16 <span class="token parameter variable">--gateway</span><span class="token operator">=</span><span class="token number">172.18</span>.0.1 iotdb
<span class="token comment"># 创建 docker 容器</span>
<span class="token comment"># 注意：必须固定IP部署。IP改变会导致 confignode 启动失败。</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">--hostname</span> iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">--network</span> iotdb <span class="token punctuation">\\</span>
              <span class="token parameter variable">--ip</span> <span class="token number">172.18</span>.0.6 <span class="token punctuation">\\</span>
              <span class="token parameter variable">-p</span> <span class="token number">6667</span>:6667 <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_internal_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_target_config_node_list</span><span class="token operator">=</span>iotdb-service:10710 <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_internal_port</span><span class="token operator">=</span><span class="token number">10710</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_consensus_port</span><span class="token operator">=</span><span class="token number">10720</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_rpc_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_internal_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_target_config_node_list</span><span class="token operator">=</span>iotdb-service:10710 <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_mpp_data_exchange_port</span><span class="token operator">=</span><span class="token number">10740</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_schema_region_consensus_port</span><span class="token operator">=</span><span class="token number">10750</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_data_region_consensus_port</span><span class="token operator">=</span><span class="token number">10760</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_rpc_port</span><span class="token operator">=</span><span class="token number">6667</span> <span class="token punctuation">\\</span>
              apache/iotdb:1.1.0-standalone              
<span class="token comment"># 尝试使用命令行执行SQL</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-ti</span> iotdb-service /iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> iotdb-service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外部连接：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># &lt;主机IP/hostname&gt; 是物理机的真实IP或域名。如果在同一台物理机，可以是127.0.0.1。</span>
<span class="token variable">$IOTDB_HOME</span>/sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>主机IP/hostname<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token number">6667</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose-1c1d.yml</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">iotdb-service</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.1.0<span class="token punctuation">-</span>standalone
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>service
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>service
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6667:6667&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> cn_internal_address=iotdb<span class="token punctuation">-</span>service
      <span class="token punctuation">-</span> cn_internal_port=10710
      <span class="token punctuation">-</span> cn_consensus_port=10720
      <span class="token punctuation">-</span> cn_target_config_node_list=iotdb<span class="token punctuation">-</span>service<span class="token punctuation">:</span><span class="token number">10710</span>
      <span class="token punctuation">-</span> dn_rpc_address=iotdb<span class="token punctuation">-</span>service
      <span class="token punctuation">-</span> dn_internal_address=iotdb<span class="token punctuation">-</span>service
      <span class="token punctuation">-</span> dn_rpc_port=6667
      <span class="token punctuation">-</span> dn_mpp_data_exchange_port=10740
      <span class="token punctuation">-</span> dn_schema_region_consensus_port=10750
      <span class="token punctuation">-</span> dn_data_region_consensus_port=10760
      <span class="token punctuation">-</span> dn_target_config_node_list=iotdb<span class="token punctuation">-</span>service<span class="token punctuation">:</span><span class="token number">10710</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/iotdb/data
        <span class="token punctuation">-</span> ./logs<span class="token punctuation">:</span>/iotdb/logs
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">iotdb</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.18.0.6

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">iotdb</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集群部署" tabindex="-1"><a class="header-anchor" href="#集群部署" aria-hidden="true">#</a> 集群部署</h4>`,6),A={href:"https://github.com/apache/iotdb/tree/master/docker/src/main/DockerCompose/docker-compose-cluster-1c2d.yml",target:"_blank",rel:"noopener noreferrer"},B=t(`<p>假如有三台物理机，它们的hostname分别是iotdb-1、iotdb-2、iotdb-3。依次启动。<br> 以 iotdb-2 节点的docker-compose文件为例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">iotdb-confignode</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.1.0<span class="token punctuation">-</span>confignode
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>confignode
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> cn_internal_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span>
      <span class="token punctuation">-</span> cn_target_config_node_list=iotdb<span class="token punctuation">-</span>1<span class="token punctuation">:</span><span class="token number">10710</span>
      <span class="token punctuation">-</span> schema_replication_factor=3
      <span class="token punctuation">-</span> cn_internal_port=10710
      <span class="token punctuation">-</span> cn_consensus_port=10720
      <span class="token punctuation">-</span> schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus
      <span class="token punctuation">-</span> config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus
      <span class="token punctuation">-</span> data_replication_factor=3
      <span class="token punctuation">-</span> data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./data/confignode<span class="token punctuation">:</span>/iotdb/data
      <span class="token punctuation">-</span> ./logs/confignode<span class="token punctuation">:</span>/iotdb/logs
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span>

  <span class="token key atrule">iotdb-datanode</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.1.0<span class="token punctuation">-</span>datanode
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>datanode
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> dn_rpc_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span>
      <span class="token punctuation">-</span> dn_internal_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span>
      <span class="token punctuation">-</span> dn_target_config_node_list=iotdb<span class="token punctuation">-</span>1<span class="token punctuation">:</span><span class="token number">10710</span>
      <span class="token punctuation">-</span> data_replication_factor=3
      <span class="token punctuation">-</span> dn_rpc_port=6667
      <span class="token punctuation">-</span> dn_mpp_data_exchange_port=10740
      <span class="token punctuation">-</span> dn_schema_region_consensus_port=10750
      <span class="token punctuation">-</span> dn_data_region_consensus_port=10760
      <span class="token punctuation">-</span> data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus
       <span class="token punctuation">-</span> schema_replication_factor=3
      <span class="token punctuation">-</span> schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus
      <span class="token punctuation">-</span> config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./data/datanode<span class="token punctuation">:</span>/iotdb/data/
      <span class="token punctuation">-</span> ./logs/datanode<span class="token punctuation">:</span>/iotdb/logs/
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ol><li><code>dn_target_config_node_list</code>所有节点配置一样，需要配置第一个启动的节点，这里为<code>iotdb-1</code>。</li><li>上面docker-compose文件中，<code>iotdb-2</code>需要替换为每个节点的 hostname、域名或者IP地址。</li><li>需要映射<code>/etc/hosts</code>，文件内配置了 iotdb-1、iotdb-2、iotdb-3 与IP的映射。或者可以在 docker-compose 文件中增加 <code>extra_hosts</code> 配置。</li><li>首次启动时，必须首先启动 <code>iotdb-1</code>。</li><li>如果部署失败要重新部署集群，必须将所有节点上的IoTDB服务停止并删除，然后清除<code>data</code>和<code>logs</code>文件夹后，再启动。</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>IoTDB 的配置文件，都在安装目录的conf目录下。<br> IoTDB 本身配置都可以在 docker-compose 文件的 environment 中进行配置。<br> 如果对日志和内存进行了自定义配置，那么需要将<code>conf</code>目录映射出来。</p><h3 id="修改日志级别" tabindex="-1"><a class="header-anchor" href="#修改日志级别" aria-hidden="true">#</a> 修改日志级别</h3><p>日志配置文件为 logback-confignode.xml 和 logback-datanode.xml，可以根据需要进行精细配置。</p><h3 id="修改内存配置" tabindex="-1"><a class="header-anchor" href="#修改内存配置" aria-hidden="true">#</a> 修改内存配置</h3>`,9),C={href:"http://confignode-env.sh",target:"_blank",rel:"noopener noreferrer"},q={href:"http://datanode-env.sh",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"MAX_HEAP_SIZE=8G, HEAP_NEWSIZE=8G, MAX_DIRECT_MEMORY_SIZE=2G",-1),P=t('<h2 id="升级" tabindex="-1"><a class="header-anchor" href="#升级" aria-hidden="true">#</a> 升级</h2><ol><li>获取新的镜像</li><li>修改 docker-compose 文件的 image</li><li>使用 docker stop 和 docker rm 命令，停止运行的 docker 容器</li><li>启动 IoTDB</li></ol><h2 id="设置开机自启动" tabindex="-1"><a class="header-anchor" href="#设置开机自启动" aria-hidden="true">#</a> 设置开机自启动</h2><ol><li>修改 docker-compose 文件，每个docker 容器配置：<code>restart: always</code></li><li>将 docker 服务设置为开机自启动<br> 以 CentOS 操作系统为例： <code>systemctl enable docker</code></li></ol>',4);function L(O,M){const a=i("ExternalLinkIcon");return c(),p("div",null,[l(`

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

`),d,u,v,k,b,m,h,n("ol",null,[n("li",null,[s("Maven >= 3.6 的运行环境，具体安装方法可以参考以下链接："),n("a",_,[s("https://maven.apache.org/install.html"),e(a)]),s("。")])]),g,f,n("p",null,[s("您可以从 "),n("a",y,[s("http://iotdb.apache.org/Download/"),e(a)]),s(" 上下载已经编译好的可执行程序 iotdb-xxx.zip，该压缩包包含了 IoTDB 系统运行所需的所有必要组件。")]),x,n("p",null,[s("您可以获取已发布的源码 "),n("a",I,[s("https://iotdb.apache.org/Download/"),e(a)]),s(" ，或者从 "),n("a",w,[s("https://github.com/apache/iotdb/tree/master"),e(a)]),s(" git 仓库获取")]),D,n("p",null,[s("Apache IoTDB 的 Docker 镜像已经上传至 "),n("a",T,[s("https://hub.docker.com/r/apache/iotdb"),e(a)]),s("。"),E,s(" Apache IoTDB 的配置项以环境变量形式添加到容器内。")]),S,n("p",null,[s("目前只支持 host 网络和 overlay 网络，不支持 bridge 网络。overlay 网络参照"),n("a",A,[s("1C2D"),e(a)]),s("的写法，host 网络如下。")]),B,n("p",null,[s("内存配置文件为 "),n("a",C,[s("confignode-env.sh"),e(a)]),s(" 和 "),n("a",q,[s("datanode-env.sh"),e(a)]),s("。堆内存 MAX_HEAP_SIZE 和 HEAP_NEWSIZE， 堆外内存 MAX_DIRECT_MEMORY_SIZE。例如："),N]),P])}const j=o(r,[["render",L],["__file","WayToGetIoTDB.html.vue"]]);export{j as default};

import{_ as l,r as p,o as c,c as i,a as u,d as s,e as n,b as a,w as r,f as e}from"./app-QyZ9VY4f.js";const k={},d=e('<h2 id="告警" tabindex="-1"><a class="header-anchor" href="#告警" aria-hidden="true">#</a> 告警</h2><h3 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h3><p>IoTDB 告警功能预计支持两种模式：</p><ul><li><p>写入触发：用户写入原始数据到原始时间序列，每插入一条数据都会触发 <code>trigger</code> 的判断逻辑，<br> 若满足告警要求则发送告警到下游数据接收器，<br> 数据接收器再转发告警到外部终端。这种模式：</p><ul><li>适合需要即时监控每一条数据的场景。</li><li>由于触发器中的运算会影响数据写入性能，适合对原始数据写入性能不敏感的场景。</li></ul></li><li><p>持续查询：用户写入原始数据到原始时间序列，<br><code>ContinousQuery</code> 定时查询原始时间序列，将查询结果写入新的时间序列，<br> 每一次写入触发 <code>trigger</code> 的判断逻辑，<br> 若满足告警要求则发送告警到下游数据接收器，<br> 数据接收器再转发告警到外部终端。这种模式：</p><ul><li>适合需要定时查询数据在某一段时间内的情况的场景。</li><li>适合需要将原始数据降采样并持久化的场景。</li><li>由于定时查询几乎不影响原始时间序列的写入，适合对原始数据写入性能敏感的场景。</li></ul></li></ul><p>随着 <code>trigger</code> 模块和 <code>sink</code> 模块的引入，<br> 目前用户使用这两个模块，配合 <code>AlertManager</code> 可以实现写入触发模式的告警。</p><h3 id="部署-alertmanager" tabindex="-1"><a class="header-anchor" href="#部署-alertmanager" aria-hidden="true">#</a> 部署 AlertManager</h3><h4 id="安装与运行" tabindex="-1"><a class="header-anchor" href="#安装与运行" aria-hidden="true">#</a> 安装与运行</h4><h5 id="二进制文件" tabindex="-1"><a class="header-anchor" href="#二进制文件" aria-hidden="true">#</a> 二进制文件</h5>',8),v={href:"https://prometheus.io/download/",target:"_blank",rel:"noopener noreferrer"},m=e(`<p>运行方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./alertmanager <span class="token parameter variable">--config.file</span><span class="token operator">=</span><span class="token operator">&lt;</span>your_file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="docker-镜像" tabindex="-1"><a class="header-anchor" href="#docker-镜像" aria-hidden="true">#</a> Docker 镜像</h5>`,3),b={href:"https://hub.docker.com/r/prom/alertmanager/",target:"_blank",rel:"noopener noreferrer"},g=s("br",null,null,-1),h={href:"https://quay.io/repository/prometheus/alertmanager",target:"_blank",rel:"noopener noreferrer"},y=e(`<p>运行方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> alertmanager <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">127.0</span>.0.1:9093:9093 quay.io/prometheus/alertmanager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4>`,3),f=s("br",null,null,-1),w={href:"https://prometheus.io/docs/alerting/latest/configuration/",target:"_blank",rel:"noopener noreferrer"},_=e(`<p>示例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># alertmanager.yml</span>

<span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token comment"># The smarthost and SMTP sender used for mail notifications.</span>
  <span class="token key atrule">smtp_smarthost</span><span class="token punctuation">:</span> <span class="token string">&#39;localhost:25&#39;</span>
  <span class="token key atrule">smtp_from</span><span class="token punctuation">:</span> <span class="token string">&#39;alertmanager@example.org&#39;</span>

<span class="token comment"># The root route on which each incoming alert enters.</span>
<span class="token key atrule">route</span><span class="token punctuation">:</span>
  <span class="token comment"># The root route must not have any matchers as it is the entry point for</span>
  <span class="token comment"># all alerts. It needs to have a receiver configured so alerts that do not</span>
  <span class="token comment"># match any of the sub-routes are sent to someone.</span>
  <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token string">&#39;team-X-mails&#39;</span>

  <span class="token comment"># The labels by which incoming alerts are grouped together. For example,</span>
  <span class="token comment"># multiple alerts coming in for cluster=A and alertname=LatencyHigh would</span>
  <span class="token comment"># be batched into a single group.</span>
  <span class="token comment">#</span>
  <span class="token comment"># To aggregate by all possible labels use &#39;...&#39; as the sole label name.</span>
  <span class="token comment"># This effectively disables aggregation entirely, passing through all</span>
  <span class="token comment"># alerts as-is. This is unlikely to be what you want, unless you have</span>
  <span class="token comment"># a very low alert volume or your upstream notification system performs</span>
  <span class="token comment"># its own grouping. Example: group_by: [...]</span>
  <span class="token key atrule">group_by</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;alertname&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cluster&#39;</span><span class="token punctuation">]</span>

  <span class="token comment"># When a new group of alerts is created by an incoming alert, wait at</span>
  <span class="token comment"># least &#39;group_wait&#39; to send the initial notification.</span>
  <span class="token comment"># This way ensures that you get multiple alerts for the same group that start</span>
  <span class="token comment"># firing shortly after another are batched together on the first</span>
  <span class="token comment"># notification.</span>
  <span class="token key atrule">group_wait</span><span class="token punctuation">:</span> 30s

  <span class="token comment"># When the first notification was sent, wait &#39;group_interval&#39; to send a batch</span>
  <span class="token comment"># of new alerts that started firing for that group.</span>
  <span class="token key atrule">group_interval</span><span class="token punctuation">:</span> 5m

  <span class="token comment"># If an alert has successfully been sent, wait &#39;repeat_interval&#39; to</span>
  <span class="token comment"># resend them.</span>
  <span class="token key atrule">repeat_interval</span><span class="token punctuation">:</span> 3h

  <span class="token comment"># All the above attributes are inherited by all child routes and can</span>
  <span class="token comment"># overwritten on each.</span>

  <span class="token comment"># The child route trees.</span>
  <span class="token key atrule">routes</span><span class="token punctuation">:</span>
  <span class="token comment"># This routes performs a regular expression match on alert labels to</span>
  <span class="token comment"># catch alerts that are related to a list of services.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">match_re</span><span class="token punctuation">:</span>
      <span class="token key atrule">service</span><span class="token punctuation">:</span> ^(foo1<span class="token punctuation">|</span>foo2<span class="token punctuation">|</span>baz)$
    <span class="token key atrule">receiver</span><span class="token punctuation">:</span> team<span class="token punctuation">-</span>X<span class="token punctuation">-</span>mails

    <span class="token comment"># The service has a sub-route for critical alerts, any alerts</span>
    <span class="token comment"># that do not match, i.e. severity != critical, fall-back to the</span>
    <span class="token comment"># parent node and are sent to &#39;team-X-mails&#39;</span>
    <span class="token key atrule">routes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
        <span class="token key atrule">severity</span><span class="token punctuation">:</span> critical
      <span class="token key atrule">receiver</span><span class="token punctuation">:</span> team<span class="token punctuation">-</span>X<span class="token punctuation">-</span>pager

  <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
      <span class="token key atrule">service</span><span class="token punctuation">:</span> files
    <span class="token key atrule">receiver</span><span class="token punctuation">:</span> team<span class="token punctuation">-</span>Y<span class="token punctuation">-</span>mails

    <span class="token key atrule">routes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
        <span class="token key atrule">severity</span><span class="token punctuation">:</span> critical
      <span class="token key atrule">receiver</span><span class="token punctuation">:</span> team<span class="token punctuation">-</span>Y<span class="token punctuation">-</span>pager

  <span class="token comment"># This route handles all alerts coming from a database service. If there&#39;s</span>
  <span class="token comment"># no team to handle it, it defaults to the DB team.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
      <span class="token key atrule">service</span><span class="token punctuation">:</span> database

    <span class="token key atrule">receiver</span><span class="token punctuation">:</span> team<span class="token punctuation">-</span>DB<span class="token punctuation">-</span>pager
    <span class="token comment"># Also group alerts by affected database.</span>
    <span class="token key atrule">group_by</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>alertname<span class="token punctuation">,</span> cluster<span class="token punctuation">,</span> database<span class="token punctuation">]</span>

    <span class="token key atrule">routes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
        <span class="token key atrule">owner</span><span class="token punctuation">:</span> team<span class="token punctuation">-</span>X
      <span class="token key atrule">receiver</span><span class="token punctuation">:</span> team<span class="token punctuation">-</span>X<span class="token punctuation">-</span>pager

    <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
        <span class="token key atrule">owner</span><span class="token punctuation">:</span> team<span class="token punctuation">-</span>Y
      <span class="token key atrule">receiver</span><span class="token punctuation">:</span> team<span class="token punctuation">-</span>Y<span class="token punctuation">-</span>pager

<span class="token comment"># Inhibition rules allow to mute a set of alerts given that another alert is</span>
<span class="token comment"># firing.</span>
<span class="token comment"># We use this to mute any warning-level notifications if the same alert is</span>
<span class="token comment"># already critical.</span>
<span class="token key atrule">inhibit_rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">source_match</span><span class="token punctuation">:</span>
    <span class="token key atrule">severity</span><span class="token punctuation">:</span> <span class="token string">&#39;critical&#39;</span>
  <span class="token key atrule">target_match</span><span class="token punctuation">:</span>
    <span class="token key atrule">severity</span><span class="token punctuation">:</span> <span class="token string">&#39;warning&#39;</span>
  <span class="token comment"># Apply inhibition if the alertname is the same.</span>
  <span class="token comment"># CAUTION: </span>
  <span class="token comment">#   If all label names listed in \`equal\` are missing </span>
  <span class="token comment">#   from both the source and target alerts,</span>
  <span class="token comment">#   the inhibition rule will apply!</span>
  <span class="token key atrule">equal</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;alertname&#39;</span><span class="token punctuation">]</span>

<span class="token key atrule">receivers</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;team-X-mails&#39;</span>
  <span class="token key atrule">email_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token string">&#39;team-X+alerts@example.org, team-Y+alerts@example.org&#39;</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;team-X-pager&#39;</span>
  <span class="token key atrule">email_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token string">&#39;team-X+alerts-critical@example.org&#39;</span>
  <span class="token key atrule">pagerduty_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">routing_key</span><span class="token punctuation">:</span> &lt;team<span class="token punctuation">-</span>X<span class="token punctuation">-</span>key<span class="token punctuation">&gt;</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;team-Y-mails&#39;</span>
  <span class="token key atrule">email_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token string">&#39;team-Y+alerts@example.org&#39;</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;team-Y-pager&#39;</span>
  <span class="token key atrule">pagerduty_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">routing_key</span><span class="token punctuation">:</span> &lt;team<span class="token punctuation">-</span>Y<span class="token punctuation">-</span>key<span class="token punctuation">&gt;</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;team-DB-pager&#39;</span>
  <span class="token key atrule">pagerduty_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">routing_key</span><span class="token punctuation">:</span> &lt;team<span class="token punctuation">-</span>DB<span class="token punctuation">-</span>key<span class="token punctuation">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在后面的示例中，我们采用的配置如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># alertmanager.yml</span>

<span class="token key atrule">global</span><span class="token punctuation">:</span> 
  <span class="token key atrule">smtp_smarthost</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token key atrule">smtp_from</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span> 
  <span class="token key atrule">smtp_auth_username</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span> 
  <span class="token key atrule">smtp_auth_password</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span> 
  <span class="token key atrule">smtp_require_tls</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">route</span><span class="token punctuation">:</span>
  <span class="token key atrule">group_by</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;alertname&#39;</span><span class="token punctuation">]</span> 
  <span class="token key atrule">group_wait</span><span class="token punctuation">:</span> 1m
  <span class="token key atrule">group_interval</span><span class="token punctuation">:</span> 10m
  <span class="token key atrule">repeat_interval</span><span class="token punctuation">:</span> 10h 
  <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token string">&#39;email&#39;</span>

<span class="token key atrule">receivers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;email&#39;</span>
    <span class="token key atrule">email_configs</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span> 

<span class="token key atrule">inhibit_rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">source_match</span><span class="token punctuation">:</span>
      <span class="token key atrule">severity</span><span class="token punctuation">:</span> <span class="token string">&#39;critical&#39;</span>
    <span class="token key atrule">target_match</span><span class="token punctuation">:</span>
      <span class="token key atrule">severity</span><span class="token punctuation">:</span> <span class="token string">&#39;warning&#39;</span>
    <span class="token key atrule">equal</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;alertname&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h4>`,5),q=s("code",null,"AlertManager",-1),A=s("code",null,"v1",-1),E=s("code",null,"v2",-1),x=s("code",null,"AlertManager",-1),M=s("code",null,"v2",-1),T=s("br",null,null,-1),S=s("br",null,null,-1),I={href:"https://github.com/prometheus/alertmanager/blob/master/api/v2/openapi.yaml",target:"_blank",rel:"noopener noreferrer"},N=e('<p>默认配置的前缀为 <code>/api/v1</code> 或 <code>/api/v2</code>，<br> 发送告警的 endpoint 为 <code>/api/v1/alerts</code> 或 <code>/api/v2/alerts</code>。<br> 如果用户指定了 <code>--web.route-prefix</code>，<br> 例如 <code>--web.route-prefix=/alertmanager/</code>，<br> 那么前缀将会变为 <code>/alertmanager/api/v1</code> 或 <code>/alertmanager/api/v2</code>，<br> 发送告警的 endpoint 变为 <code>/alertmanager/api/v1/alerts</code><br> 或 <code>/alertmanager/api/v2/alerts</code>。</p><h3 id="创建-trigger" tabindex="-1"><a class="header-anchor" href="#创建-trigger" aria-hidden="true">#</a> 创建 trigger</h3><h4 id="编写-trigger-类" tabindex="-1"><a class="header-anchor" href="#编写-trigger-类" aria-hidden="true">#</a> 编写 trigger 类</h4>',3),O=s("br",null,null,-1),H=s("code",null,"AlertManagerSink",-1),L=e(`<p>下面的示例创建了 <code>org.apache.iotdb.trigger.AlertingExample</code> 类，<br> 其 <code>alertManagerHandler</code><br> 成员变量可发送告警至地址为 <code>http://127.0.0.1:9093/</code> 的 AlertManager 实例。</p><p>当 <code>value &gt; 100.0</code> 时，发送 <code>severity</code> 为 <code>critical</code> 的告警；<br> 当 <code>50.0 &lt; value &lt;= 100.0</code> 时，发送 <code>severity</code> 为 <code>warning</code> 的告警。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>trigger</span><span class="token punctuation">;</span>

<span class="token comment">/*
此处省略包的引入
*/</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AlertingExample</span> <span class="token keyword">implements</span> <span class="token class-name">Trigger</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">AlertManagerHandler</span> alertManagerHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AlertManagerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">AlertManagerConfiguration</span> alertManagerConfiguration <span class="token operator">=</span>
      <span class="token keyword">new</span> <span class="token class-name">AlertManagerConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:9093/api/v2/alerts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">private</span> <span class="token class-name">String</span> alertname<span class="token punctuation">;</span>

  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> labels <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> annotations <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token class-name">TriggerAttributes</span> attributes<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    alertManagerHandler<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span>alertManagerConfiguration<span class="token punctuation">)</span><span class="token punctuation">;</span>

    alertname <span class="token operator">=</span> <span class="token string">&quot;alert_test&quot;</span><span class="token punctuation">;</span>

    labels<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;series&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.ln.wf01.wt01.temperature&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    labels<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    labels<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;severity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    annotations<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;summary&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;high temperature&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    annotations<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;{{.alertname}}: {{.series}} is {{.value}}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onDrop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    alertManagerHandler<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    alertManagerHandler<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span>alertManagerConfiguration<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onStop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    alertManagerHandler<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">Double</span> <span class="token function">fire</span><span class="token punctuation">(</span><span class="token keyword">long</span> timestamp<span class="token punctuation">,</span> <span class="token class-name">Double</span> value<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;</span> <span class="token number">100.0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      labels<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      labels<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;severity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;critical&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">AlertManagerEvent</span> alertManagerEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AlertManagerEvent</span><span class="token punctuation">(</span>alertname<span class="token punctuation">,</span> labels<span class="token punctuation">,</span> annotations<span class="token punctuation">)</span><span class="token punctuation">;</span>
      alertManagerHandler<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span>alertManagerEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;</span> <span class="token number">50.0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      labels<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      labels<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;severity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">AlertManagerEvent</span> alertManagerEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AlertManagerEvent</span><span class="token punctuation">(</span>alertname<span class="token punctuation">,</span> labels<span class="token punctuation">,</span> annotations<span class="token punctuation">)</span><span class="token punctuation">;</span>
      alertManagerHandler<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span>alertManagerEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">fire</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> timestamps<span class="token punctuation">,</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">double</span> value <span class="token operator">:</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;</span> <span class="token number">100.0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        labels<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        labels<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;severity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;critical&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AlertManagerEvent</span> alertManagerEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AlertManagerEvent</span><span class="token punctuation">(</span>alertname<span class="token punctuation">,</span> labels<span class="token punctuation">,</span> annotations<span class="token punctuation">)</span><span class="token punctuation">;</span>
        alertManagerHandler<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span>alertManagerEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;</span> <span class="token number">50.0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        labels<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        labels<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;severity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AlertManagerEvent</span> alertManagerEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AlertManagerEvent</span><span class="token punctuation">(</span>alertname<span class="token punctuation">,</span> labels<span class="token punctuation">,</span> annotations<span class="token punctuation">)</span><span class="token punctuation">;</span>
        alertManagerHandler<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span>alertManagerEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> values<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建-trigger-1" tabindex="-1"><a class="header-anchor" href="#创建-trigger-1" aria-hidden="true">#</a> 创建 trigger</h4><p>如下的 sql 语句在 <code>root.ln.wf01.wt01.temperature</code><br> 时间序列上注册了名为 <code>root-ln-wf01-wt01-alert</code>、<br> 运行逻辑由 <code>org.apache.iotdb.trigger.AlertingExample</code><br> 类定义的触发器。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>  <span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">\`</span>root-ln-wf01-wt01-alert<span class="token punctuation">\`</span></span>
  <span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span>
  <span class="token keyword">ON</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span>temperature
  <span class="token keyword">AS</span> <span class="token string">&quot;org.apache.iotdb.trigger.AlertingExample&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="写入数据" tabindex="-1"><a class="header-anchor" href="#写入数据" aria-hidden="true">#</a> 写入数据</h3><p>当我们完成 AlertManager 的部署和启动、Trigger 的创建，<br> 可以通过向时间序列写入数据来测试告警功能。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完上述写入语句后，可以收到告警邮件。由于我们的 <code>AlertManager</code> 配置中设定 <code>severity</code> 为 <code>critical</code> 的告警<br> 会抑制 <code>severity</code> 为 <code>warning</code> 的告警，我们收到的告警邮件中只包含写入<br><code>(5, 120)</code> 后触发的告警。</p><img alt="alerting" src="https://alioss.timecho.com/docs/img/github/115957896-a9791080-a537-11eb-9962-541412bdcee6.png">`,11);function C(R,D){const t=p("ExternalLinkIcon"),o=p("RouterLink");return c(),i("div",null,[u(`

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

`),d,s("p",null,[n("预编译好的二进制文件可在 "),s("a",v,[n("这里"),a(t)]),n(" 下载。")]),m,s("p",null,[n("可在 "),s("a",b,[n("Quay.io"),a(t)]),g,n(" 或 "),s("a",h,[n("Docker Hub"),a(t)]),n(" 获得。")]),y,s("p",null,[n("如下是一个示例，可以覆盖到大部分配置规则，详细的配置规则参见"),f,s("a",w,[n("这里"),a(t)]),n("。")]),_,s("p",null,[q,n(" API 分为 "),A,n(" 和 "),E,n(" 两个版本，当前 "),x,n(" API 版本为 "),M,T,n(" （配置参见"),S,s("a",I,[n("api/v2/openapi.yaml"),a(t)]),n(")。")]),N,s("p",null,[n("用户通过自行创建 Java 类、编写钩子中的逻辑来定义一个触发器。"),O,n(" 具体配置流程以及 Sink 模块提供的 "),H,n(" 相关工具类的使用方法参见 "),a(o,{to:"/zh/UserGuide/V0.13.x/Process-Data/Triggers.html"},{default:r(()=>[n("Triggers")]),_:1}),n("。")]),L])}const X=l(k,[["render",C],["__file","Alerting.html.vue"]]);export{X as default};

import{_ as o,r as p,o as i,c as l,a as u,d as s,e as n,b as t,f as a}from"./app-uEABXXPu.js";const c={},r=a(`<h2 id="restful-services" tabindex="-1"><a class="header-anchor" href="#restful-services" aria-hidden="true">#</a> RESTful Services</h2><p>IoTDB&#39;s RESTful services can be used for query, write, and management operations, using the OpenAPI standard to define interfaces and generate frameworks.</p><h3 id="enable-restful-services" tabindex="-1"><a class="header-anchor" href="#enable-restful-services" aria-hidden="true">#</a> Enable RESTful Services</h3><p>RESTful services are disabled by default.</p><ul><li><p>Developer</p><p>Find the <code>IoTDBrestServiceConfig</code> class under <code>org.apache.iotdb.db.conf.rest</code> in the sever module, and modify <code>enableRestService=true</code>.</p></li><li><p>User</p><p>Find the <code>conf/iotdb.properties</code> file under the IoTDB installation directory and set <code>enable_rest_service</code> to <code>true</code> to enable the module.</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">enable_rest_service</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h3><p>Except the liveness probe API <code>/ping</code>, RESTful services use the basic authentication. Each URL request needs to carry <code>&#39;Authorization&#39;: &#39;Basic &#39; + base64.encode(username + &#39;:&#39; + password)</code>.</p><p>The username used in the following examples is: <code>root</code>, and password is: <code>root</code>.</p><p>And the authorization header is</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Authorization: Basic cm9vdDpyb2901
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>If a user authorized with incorrect username or password, the following error is returned:</p><p>HTTP Status Code：<code>401</code></p><p>HTTP response body:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;WRONG_LOGIN_PASSWORD_ERROR&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>If the <code>Authorization</code> header is missing，the following error is returned:</p><p>HTTP Status Code：<code>401</code></p><p>HTTP response body:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">603</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UNINITIALIZED_AUTH_ERROR&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h3><h4 id="ping" tabindex="-1"><a class="header-anchor" href="#ping" aria-hidden="true">#</a> ping</h4><p>The <code>/ping</code> API can be used for service liveness probing.</p><p>Request method: <code>GET</code></p>`,15),d={href:"http://ip",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>The user name used in the example is: root, password: root</p><p>Example request:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> http://127.0.0.1:18080/ping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Response status codes:</p><ul><li><code>200</code>: The service is alive.</li><li><code>503</code>: The service cannot accept any requests now.</li></ul><p>Response parameters:</p><table><thead><tr><th style="text-align:left;">parameter name</th><th style="text-align:left;">parameter type</th><th style="text-align:left;">parameter describe</th></tr></thead><tbody><tr><td style="text-align:left;">code</td><td style="text-align:left;">integer</td><td style="text-align:left;">status code</td></tr><tr><td style="text-align:left;">message</td><td style="text-align:left;">string</td><td style="text-align:left;">message</td></tr></tbody></table><p>Sample response:</p><ul><li><p>With HTTP status code <code>200</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SUCCESS_STATUS&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>With HTTP status code <code>503</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;thrift service is unavailable&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p><code>/ping</code> can be accessed without authorization.</p></blockquote><h4 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> query</h4><p>The query interface can be used to handle data queries and metadata queries.</p><p>Request method: <code>POST</code></p><p>Request header: <code>application/json</code></p>`,14),k={href:"http://ip",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>Parameter Description:</p><table><thead><tr><th>parameter name</th><th>parameter type</th><th>required</th><th>parameter description</th></tr></thead><tbody><tr><td>sql</td><td>string</td><td>yes</td><td></td></tr><tr><td>rowLimit</td><td>integer</td><td>no</td><td>The maximum number of rows in the result set that can be returned by a query. <br>If this parameter is not set, the <code>rest_query_default_row_size_limit</code> of the configuration file will be used as the default value. <br> When the number of rows in the returned result set exceeds the limit, the status code <code>411</code> will be returned.</td></tr></tbody></table><p>Response parameters:</p><table><thead><tr><th>parameter name</th><th>parameter type</th><th>parameter description</th></tr></thead><tbody><tr><td>expressions</td><td>array</td><td>Array of result set column names for data query, <code>null</code> for metadata query</td></tr><tr><td>columnNames</td><td>array</td><td>Array of column names for metadata query result set, <code>null</code> for data query</td></tr><tr><td>timestamps</td><td>array</td><td>Timestamp column, <code>null</code> for metadata query</td></tr><tr><td>values</td><td>array</td><td>A two-dimensional array, the first dimension has the same length as the result set column name array, and the second dimension array represents a column of the result set</td></tr></tbody></table><p><strong>Examples:</strong></p><p>Tip: Statements like <code>select * from root.xx.**</code> are not recommended because those statements may cause OOM.</p><p><strong>Expression query</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select s3, s4, s3 + 1 from root.sg27 limit 2&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;root.sg27.s3&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;root.sg27.s4&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;root.sg27.s3 + 1&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">1635232143960</span><span class="token punctuation">,</span>
    <span class="token number">1635232153960</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">11</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token boolean">true</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">12.0</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Show child paths</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show child paths root&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;child paths&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Show child nodes</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show child nodes root&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;child nodes&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sg28&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Show all ttl</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show all ttl&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;storage group&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ttl&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Show ttl</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show ttl on root.sg27&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;storage group&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ttl&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Show functions</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show functions&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;function name&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;function type&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;class name (UDF)&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;ABS&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;ACOS&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;ASIN&quot;</span><span class="token punctuation">,</span>
       ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;built-in UDTF&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;built-in UDTF&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;built-in UDTF&quot;</span><span class="token punctuation">,</span>
      ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;org.apache.iotdb.db.query.udf.builtin.UDTFAbs&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;org.apache.iotdb.db.query.udf.builtin.UDTFAcos&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;org.apache.iotdb.db.query.udf.builtin.UDTFAsin&quot;</span><span class="token punctuation">,</span>
      ...
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Show timeseries</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show timeseries&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;timeseries&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;alias&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;storage group&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;dataType&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;encoding&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;compression&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tags&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;attributes&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27.s3&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg27.s4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28.s3&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28.s4&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;INT32&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;BOOLEAN&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;INT32&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;BOOLEAN&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;RLE&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;SNAPPY&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SNAPPY&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SNAPPY&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SNAPPY&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Show latest timeseries</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show latest timeseries&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;timeseries&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;alias&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;storage group&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;dataType&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;encoding&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;compression&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tags&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;attributes&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg28.s4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg27.s4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28.s3&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg27.s3&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg28&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg27&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;BOOLEAN&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;BOOLEAN&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;INT32&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;INT32&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;RLE&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;SNAPPY&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SNAPPY&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SNAPPY&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SNAPPY&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Count timeseries</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;count timeseries root.**&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;count&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">4</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Count nodes</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;count nodes root.** level=2&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;count&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">4</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Show devices</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show devices&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;devices&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;isAligned&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;false&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Show devices with storage group</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show devices with storage group&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;devices&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;storage group&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;isAligned&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;false&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>List user</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;list user&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;user&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Aggregation</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select count(*) from root.sg27&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;count(root.sg27.s3)&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;count(root.sg27.s4)&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">0</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">1</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">2</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Group by level</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select count(*) from root.** group by level = 1&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;count(root.sg27.*)&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;count(root.sg28.*)&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">3</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">3</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Group by</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select count(*) from root.sg27 group by([1635232143960,1635232153960),1s)&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;count(root.sg27.s3)&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;count(root.sg27.s4)&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">1635232143960</span><span class="token punctuation">,</span>
    <span class="token number">1635232144960</span><span class="token punctuation">,</span>
    <span class="token number">1635232145960</span><span class="token punctuation">,</span>
    <span class="token number">1635232146960</span><span class="token punctuation">,</span>
    <span class="token number">1635232147960</span><span class="token punctuation">,</span>
    <span class="token number">1635232148960</span><span class="token punctuation">,</span>
    <span class="token number">1635232149960</span><span class="token punctuation">,</span>
    <span class="token number">1635232150960</span><span class="token punctuation">,</span>
    <span class="token number">1635232151960</span><span class="token punctuation">,</span>
    <span class="token number">1635232152960</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Last</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span>  <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select last s3 from root.sg27&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;timeseries&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;dataType&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">1635232143960</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27.s3&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;11&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;INT32&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Disable align</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select * from root.sg27 disable align&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">407</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;disable align clauses are not supported.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Align by device</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select count(s3) from root.sg27 align by device&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">407</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;align by device clauses are not supported.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Select into</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select s3, s4 into root.sg29.s1, root.sg29.s2 from root.sg27&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">407</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;select into clauses are not supported.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nonquery" tabindex="-1"><a class="header-anchor" href="#nonquery" aria-hidden="true">#</a> nonQuery</h4><p>Request method: <code>POST</code></p><p>Request header: <code>application/json</code></p>`,69),b={href:"http://ip",target:"_blank",rel:"noopener noreferrer"},q=a(`<p>Parameter Description:</p><table><thead><tr><th style="text-align:left;">parameter name</th><th style="text-align:left;">parameter type</th><th style="text-align:left;">parameter describe</th></tr></thead><tbody><tr><td style="text-align:left;">sql</td><td style="text-align:left;">string</td><td style="text-align:left;">query content</td></tr></tbody></table><p>Example request:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;set storage group to root.ln&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/nonQuery
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Response parameters:</p><table><thead><tr><th style="text-align:left;">parameter name</th><th style="text-align:left;">parameter type</th><th style="text-align:left;">parameter describe</th></tr></thead><tbody><tr><td style="text-align:left;">code</td><td style="text-align:left;">integer</td><td style="text-align:left;">status code</td></tr><tr><td style="text-align:left;">message</td><td style="text-align:left;">string</td><td style="text-align:left;">message</td></tr></tbody></table><p>Sample response:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SUCCESS_STATUS&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="inserttablet" tabindex="-1"><a class="header-anchor" href="#inserttablet" aria-hidden="true">#</a> insertTablet</h4><p>Request method: <code>POST</code></p><p>Request header: <code>application/json</code></p>`,11),g={href:"http://ip",target:"_blank",rel:"noopener noreferrer"},h=a(`<p>Parameter Description:</p><table><thead><tr><th style="text-align:left;">parameter name</th><th style="text-align:left;">parameter type</th><th style="text-align:left;">is required</th><th style="text-align:left;">parameter describe</th></tr></thead><tbody><tr><td style="text-align:left;">timestamps</td><td style="text-align:left;">array</td><td style="text-align:left;">yes</td><td style="text-align:left;">Time column</td></tr><tr><td style="text-align:left;">measurements</td><td style="text-align:left;">array</td><td style="text-align:left;">yes</td><td style="text-align:left;">The name of the measuring point</td></tr><tr><td style="text-align:left;">dataTypes</td><td style="text-align:left;">array</td><td style="text-align:left;">yes</td><td style="text-align:left;">The data type</td></tr><tr><td style="text-align:left;">values</td><td style="text-align:left;">array</td><td style="text-align:left;">yes</td><td style="text-align:left;">Value columns, the values in each column can be <code>null</code></td></tr><tr><td style="text-align:left;">isAligned</td><td style="text-align:left;">boolean</td><td style="text-align:left;">yes</td><td style="text-align:left;">Whether to align the timeseries</td></tr><tr><td style="text-align:left;">deviceId</td><td style="text-align:left;">boolean</td><td style="text-align:left;">yes</td><td style="text-align:left;">Device name</td></tr></tbody></table><p>Example request:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;timestamps&quot;:[1635232143960,1635232153960],&quot;measurements&quot;:[&quot;s3&quot;,&quot;s4&quot;],&quot;dataTypes&quot;:[&quot;INT32&quot;,&quot;BOOLEAN&quot;],&quot;values&quot;:[[11,null],[false,true]],&quot;isAligned&quot;:false,&quot;deviceId&quot;:&quot;root.sg27&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/insertTablet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sample response:</p><table><thead><tr><th style="text-align:left;">parameter name</th><th style="text-align:left;">parameter type</th><th style="text-align:left;">parameter describe</th></tr></thead><tbody><tr><td style="text-align:left;">code</td><td style="text-align:left;">integer</td><td style="text-align:left;">status code</td></tr><tr><td style="text-align:left;">message</td><td style="text-align:left;">string</td><td style="text-align:left;">message</td></tr></tbody></table><p>Sample response:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SUCCESS_STATUS&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>The configuration is located in &#39;iotdb-rest.properties&#39;.</p><ul><li>Set &#39;enable_REST_service&#39; to &#39;true&#39; to enable the module, and &#39;false&#39; to disable the module. By default, this value is&#39; false &#39;.</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">enable_rest_service</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>This parameter is valid only when &#39;enable_REST_service =true&#39;. Set &#39;rest_service_port&#39; to a number (1025 to 65535) to customize the REST service socket port. By default, the value is 18080.</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">rest_service_port</span><span class="token punctuation">=</span><span class="token value attr-value">18080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>The maximum number of rows in the result set that can be returned by a query. When the number of rows in the returned result set exceeds the limit, the status code <code>411</code> is returned.</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">rest_query_default_row_size_limit</span><span class="token punctuation">=</span><span class="token value attr-value">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Expiration time for caching customer login information (used to speed up user authentication, in seconds, 8 hours by default)</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">cache_expire</span><span class="token punctuation">=</span><span class="token value attr-value">28800</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Maximum number of users stored in the cache (default: 100)</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">cache_max_num</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Initial cache size (default: 10)</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">cache_init_num</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>REST Service whether to enable SSL configuration, set &#39;enable_https&#39; to&#39; true &#39;to enable the module, and set&#39; false &#39;to disable the module. By default, this value is&#39; false &#39;.</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">enable_https</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>keyStore location path (optional)</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">key_store_path</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>keyStore password (optional)</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">key_store_pwd</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>trustStore location path (optional)</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">trust_store_path</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>trustStore password (optional)</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">trust_store_pwd</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>SSL timeout period, in seconds</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">idle_timeout</span><span class="token punctuation">=</span><span class="token value attr-value">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,34);function y(f,x){const e=p("ExternalLinkIcon");return i(),l("div",null,[u(`

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

`),r,s("p",null,[n("Request path: "),s("a",d,[n("http://ip"),t(e)]),n(":port/ping")]),v,s("p",null,[n("Request path: "),s("a",k,[n("http://ip"),t(e)]),n(":port/rest/v1/query")]),m,s("p",null,[n("Request path: "),s("a",b,[n("http://ip"),t(e)]),n(":port/rest/v1/nonQuery")]),q,s("p",null,[n("Request path: "),s("a",g,[n("http://ip"),t(e)]),n(":port/rest/v1/insertTablet")]),h])}const w=o(c,[["render",y],["__file","RestService.html.vue"]]);export{w as default};

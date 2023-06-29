import{_ as i,C as r,O as o,P as l,ah as d,Q as e,U as t,ai as s,aW as a}from"./framework-16612ca2.js";const c={},p=a(`<h1 id="triggers-management" tabindex="-1"><a class="header-anchor" href="#triggers-management" aria-hidden="true">#</a> Triggers Management</h1><p>You can create and drop a trigger through an SQL statement, and you can also query all registered triggers through an SQL statement.</p><p><strong>We recommend that you stop insertion while creating triggers.</strong></p><h2 id="create-trigger" tabindex="-1"><a class="header-anchor" href="#create-trigger" aria-hidden="true">#</a> Create Trigger</h2><p>Triggers can be registered on arbitrary path patterns. The time series registered with the trigger will be listened to by the trigger. When there is data change on the series, the corresponding fire method in the trigger will be called.</p><p>Registering a trigger can be done as follows:</p><ol><li>Implement a Trigger class as described in the How to implement a Trigger chapter, assuming the class&#39;s full class name is <code>org.apache.iotdb.trigger.ClusterAlertingExample</code></li><li>Package the project into a JAR package.</li><li>Register the trigger with an SQL statement. During the creation process, the <code>validate</code> and <code>onCreate</code> interfaces of the trigger will only be called once. For details, please refer to the chapter of How to implement a Trigger.</li></ol><p>The complete SQL syntax is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">// Create Trigger</span>
createTrigger
    : <span class="token keyword">CREATE</span> triggerType <span class="token keyword">TRIGGER</span> triggerName<span class="token operator">=</span>identifier triggerEventClause <span class="token keyword">ON</span> pathPattern <span class="token keyword">AS</span> className<span class="token operator">=</span>STRING_LITERAL uriClause? triggerAttributeClause?
    <span class="token punctuation">;</span>

triggerType
    : STATELESS <span class="token operator">|</span> STATEFUL
    <span class="token punctuation">;</span>

triggerEventClause
    : <span class="token punctuation">(</span>BEFORE <span class="token operator">|</span> <span class="token keyword">AFTER</span><span class="token punctuation">)</span> <span class="token keyword">INSERT</span>
    <span class="token punctuation">;</span>
        
uriClause
    : <span class="token keyword">USING</span> URI uri
    <span class="token punctuation">;</span>

uri
    : STRING_LITERAL
    <span class="token punctuation">;</span>
    
triggerAttributeClause
    : <span class="token keyword">WITH</span> LR_BRACKET triggerAttribute <span class="token punctuation">(</span>COMMA triggerAttribute<span class="token punctuation">)</span><span class="token operator">*</span> RR_BRACKET
    <span class="token punctuation">;</span>

triggerAttribute
    : <span class="token keyword">key</span><span class="token operator">=</span>attributeKey operator_eq <span class="token keyword">value</span><span class="token operator">=</span>attributeValue
    <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Below is the explanation for the SQL syntax:</p><ul><li>triggerName: The trigger ID, which is globally unique and used to distinguish different triggers, is case-sensitive.</li><li>triggerType: Trigger types are divided into two categories, STATELESS and STATEFUL.</li><li>triggerEventClause: when the trigger fires, BEFORE INSERT and AFTER INSERT are supported now.</li><li>pathPattern：The path pattern the trigger listens on, can contain wildcards * and **.</li><li>className：The class name of the Trigger class.</li><li>jarLocation: Optional. When this option is not specified, by default, we consider that the DBA has placed the JAR package required to create the trigger in the trigger_root_dir directory (configuration item, default is IOTDB_HOME/ext/trigger) of each DataNode node. When this option is specified, we will download and distribute the file resource corresponding to the URI to the trigger_root_dir/install directory of each DataNode.</li><li>triggerAttributeClause: It is used to specify the parameters that need to be set when the trigger instance is created. This part is optional in the SQL syntax.</li></ul><p>Here is an example SQL statement to help you understand:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> STATELESS <span class="token keyword">TRIGGER</span> triggerTest
BEFORE <span class="token keyword">INSERT</span>
<span class="token keyword">ON</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span>
<span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.trigger.ClusterAlertingExample&#39;</span>
<span class="token keyword">USING</span> URI <span class="token string">&#39;/jar/ClusterAlertingExample.jar&#39;</span>
<span class="token keyword">WITH</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;name&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;trigger&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;limit&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;100&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above SQL statement creates a trigger named triggerTest:</p>`,14),g=e("li",null,"The trigger is stateless.",-1),h=e("li",null,"Fires before insertion.",-1),u={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[t("The implemented trigger class is named "),e("code",null,"org.apache.iotdb.trigger.ClusterAlertingExample")],-1),v={href:"http://jar/ClusterAlertingExample.jar",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"When creating the trigger instance, two parameters, name and limit, are passed in.",-1),T=a(`<h2 id="drop-trigger" tabindex="-1"><a class="header-anchor" href="#drop-trigger" aria-hidden="true">#</a> Drop Trigger</h2><p>The trigger can be dropped by specifying the trigger ID. During the process of dropping the trigger, the <code>onDrop</code> interface of the trigger will be called only once.</p><p>The SQL syntax is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">// Drop Trigger</span>
dropTrigger
  : <span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> triggerName<span class="token operator">=</span>identifier
<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is an example statement:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> triggerTest1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The above statement will drop the trigger with ID triggerTest1.</p><h2 id="show-trigger" tabindex="-1"><a class="header-anchor" href="#show-trigger" aria-hidden="true">#</a> Show Trigger</h2><p>You can query information about triggers that exist in the cluster through an SQL statement.</p><p>The SQL syntax is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> TRIGGERS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result set format of this statement is as follows:</p><table><thead><tr><th>TriggerName</th><th>Event</th><th>Type</th><th>State</th><th>PathPattern</th><th>ClassName</th><th>NodeId</th></tr></thead><tbody><tr><td>triggerTest1</td><td>BEFORE_INSERT / AFTER_INSERT</td><td>STATELESS / STATEFUL</td><td>INACTIVE / ACTIVE / DROPPING / TRANSFFERING</td><td>root.**</td><td>org.apache.iotdb.trigger.TriggerExample</td><td>ALL(STATELESS) / DATA_NODE_ID(STATEFUL)</td></tr></tbody></table><h2 id="trigger-state" tabindex="-1"><a class="header-anchor" href="#trigger-state" aria-hidden="true">#</a> Trigger State</h2><p>During the process of creating and dropping triggers in the cluster, we maintain the states of the triggers. The following is a description of these states:</p><table><thead><tr><th>State</th><th>Description</th><th>Is it recommended to insert data?</th></tr></thead><tbody><tr><td>INACTIVE</td><td>The intermediate state of executing <code>CREATE TRIGGER</code>, the cluster has just recorded the trigger information on the ConfigNode, and the trigger has not been activated on any DataNode.</td><td>NO</td></tr><tr><td>ACTIVE</td><td>Status after successful execution of <code>CREATE TRIGGE</code>, the trigger is available on all DataNodes in the cluster.</td><td>YES</td></tr><tr><td>DROPPING</td><td>Intermediate state of executing <code>DROP TRIGGER</code>, the cluster is in the process of dropping the trigger.</td><td>NO</td></tr><tr><td>TRANSFERRING</td><td>The cluster is migrating the location of this trigger instance.</td><td>NO</td></tr></tbody></table>`,16);function k(E,f){const n=r("ExternalLinkIcon");return o(),l("div",null,[d(`

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

`),p,e("ul",null,[g,h,e("li",null,[t("Listens on path pattern "),e("a",u,[t("root.sg"),s(n)]),t(".**")]),m,e("li",null,[t("The JAR package URI is "),e("a",v,[t("http://jar/ClusterAlertingExample.jar"),s(n)])]),b]),T])}const S=i(c,[["render",k],["__file","Trigger-Management.html.vue"]]);export{S as default};
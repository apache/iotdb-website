import{_ as e,o as i,c as n,a as t,f as a}from"./app-SFHDkVtH.js";const o={},r=a(`<h1 id="securitymanagement" tabindex="-1"><a class="header-anchor" href="#securitymanagement" aria-hidden="true">#</a> SecurityManagement</h1><h2 id="white-list" tabindex="-1"><a class="header-anchor" href="#white-list" aria-hidden="true">#</a> White List</h2><p><strong>function description</strong></p><p>Allow which client addresses can connect to IoTDB</p><p><strong>configuration file</strong></p><p>conf/iotdb-common.properties</p><p>conf/white.list</p><p><strong>configuration item</strong></p><p>iotdb-common.properties:</p><p>Decide whether to enable white list</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>
# Whether to enable white list
enable_white_list=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>white.list:</p><p>Decide which IP addresses can connect to IoTDB</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code># Support for annotation
# Supports precise matching, one IP per line
10.2.3.4

# Support for * wildcards, one ip per line
10.*.1.3
10.100.0.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>note</strong></p><ol><li>If the white list itself is cancelled via the session client, the current connection is not immediately disconnected. It is rejected the next time the connection is created.</li><li>If white.list is modified directly, it takes effect within one minute. If modified via the session client, it takes effect immediately, updating the values in memory and the white.list disk file.</li><li>Enable the whitelist function, there is no white.list file, start the DB service successfully, however, all connections are rejected.</li><li>while DB service is running, the white.list file is deleted, and all connections are denied after up to one minute.</li><li>whether to enable the configuration of the white list function, can be hot loaded.</li><li>Use the Java native interface to modify the whitelist, must be the root user to modify, reject non-root user to modify; modify the content must be legal, otherwise it will throw a StatementExecutionException.</li></ol><figure><img src="https://alioss.timecho.com/docs/img/白名单.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="audit-log" tabindex="-1"><a class="header-anchor" href="#audit-log" aria-hidden="true">#</a> Audit log</h2><h3 id="background-of-the-function" tabindex="-1"><a class="header-anchor" href="#background-of-the-function" aria-hidden="true">#</a> Background of the function</h3><p>Audit log is the record credentials of a database, which can be queried by the audit log function to ensure information security by various operations such as user add, delete, change and check in the database. With the audit log function of IoTDB, the following scenarios can be achieved:</p><ul><li>We can decide whether to record audit logs according to the source of the link ( human operation or not), such as: non-human operation such as hardware collector write data no need to record audit logs, human operation such as ordinary users through cli, workbench and other tools to operate the data need to record audit logs.</li><li>Filter out system-level write operations, such as those recorded by the IoTDB monitoring system itself.</li></ul><h4 id="scene-description" tabindex="-1"><a class="header-anchor" href="#scene-description" aria-hidden="true">#</a> Scene Description</h4><h5 id="logging-all-operations-add-delete-change-check-of-all-users" tabindex="-1"><a class="header-anchor" href="#logging-all-operations-add-delete-change-check-of-all-users" aria-hidden="true">#</a> Logging all operations (add, delete, change, check) of all users</h5><p>The audit log function traces all user operations in the database. The information recorded should include data operations (add, delete, query) and metadata operations (add, modify, delete, query), client login information (user name, ip address).</p><p>Client Sources：</p><ul><li>Cli、workbench、Zeppelin、Grafana、通过 Session/JDBC/MQTT 等协议传入的请求</li></ul><figure><img src="https://alioss.timecho.com/docs/img/审计日志.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="audit-logging-can-be-turned-off-for-some-user-connections" tabindex="-1"><a class="header-anchor" href="#audit-logging-can-be-turned-off-for-some-user-connections" aria-hidden="true">#</a> Audit logging can be turned off for some user connections</h5><p>No audit logs are required for data written by the hardware collector via Session/JDBC/MQTT if it is a non-human action.</p><h3 id="function-definition" tabindex="-1"><a class="header-anchor" href="#function-definition" aria-hidden="true">#</a> Function Definition</h3><p>It is available through through configurations:</p><ul><li>Decide whether to enable the audit function or not</li><li>Decide where to output the audit logs, support output to one or more <ol><li>log file</li><li>IoTDB storage</li></ol></li><li>Decide whether to block the native interface writes to prevent recording too many audit logs to affect performance.</li><li>Decide the content category of the audit log, supporting recording one or more <ol><li>data addition and deletion operations</li><li>data and metadata query operations</li><li>metadata class adding, modifying, and deleting operations.</li></ol></li></ul><h4 id="configuration-item" tabindex="-1"><a class="header-anchor" href="#configuration-item" aria-hidden="true">#</a> configuration item</h4><p>In iotdb-engine.properties or iotdb-common.properties, change the following configurations:</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>####################
### Audit log Configuration
####################

# whether to enable the audit log.
# Datatype: Boolean
# enable_audit_log=false

# Output location of audit logs
# Datatype: String
# IOTDB: the stored time series is: root.__system.audit._{user}
# LOGGER: log_audit.log in the log directory
# audit_log_storage=IOTDB,LOGGER

# whether enable audit log for DML operation of data
# whether enable audit log for DDL operation of schema
# whether enable audit log for QUERY operation of data and schema
# Datatype: String
# audit_log_operation=DML,DDL,QUERY

# whether the local write api records audit logs
# Datatype: Boolean
# This contains Session insert api: insertRecord(s), insertTablet(s),insertRecordsOfOneDevice
# MQTT insert api
# RestAPI insert api
# This parameter will cover the DML in audit_log_operation
# enable_audit_log_for_native_insert_api=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function s(d,l){return i(),n("div",null,[t(`

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

`),r])}const h=e(o,[["render",s],["__file","Security-Management_timecho.html.vue"]]);export{h as default};

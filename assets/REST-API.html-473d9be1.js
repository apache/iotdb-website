import{_ as a,C as r,O as d,P as l,ah as o,Q as n,U as e,ai as s,ae as t,aW as u}from"./framework-4eac33b5.js";const c={},v=n("h1",{id:"rest-api-write",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rest-api-write","aria-hidden":"true"},"#"),e(" REST API Write")],-1),m=u(`<p>Example：</p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
      &quot;timestamps&quot;: [
            1,
            2,
            3
      ],
      &quot;measurements&quot;: [
            &quot;temperature&quot;,
            &quot;status&quot;
      ],
      &quot;data_types&quot;: [
            &quot;FLOAT&quot;,
            &quot;BOOLEAN&quot;
      ],
      &quot;values&quot;: [
            [
                  1.1,
                  2.2,
                  3.3
            ],
            [
                  false,
                  true,
                  true
            ]
      ],
      &quot;is_aligned&quot;: false,
      &quot;device&quot;: &quot;root.ln.wf01.wt01&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(h,p){const i=r("RouterLink");return d(),l("div",null,[o(`

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

`),v,n("p",null,[e("Refer to "),s(i,{to:"/UserGuide/Master/API/RestServiceV1.html#inserttablet"},{default:t(()=>[e("insertTablet (v1)")]),_:1}),e(" or "),s(i,{to:"/UserGuide/Master/API/RestServiceV2.html#inserttablet"},{default:t(()=>[e("insertTablet (v2)")]),_:1})]),m])}const q=a(c,[["render",b],["__file","REST-API.html.vue"]]);export{q as default};
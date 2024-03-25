import{_ as l,r as s,o as p,c as h,a as r,d as t,e as d,b as e,w as a,f as n}from"./app-dXzqLio8.js";const i={},u=t("h1",{id:"运算符和函数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#运算符和函数","aria-hidden":"true"},"#"),d(" 运算符和函数")],-1),T=t("p",null,[d("可以使用 "),t("code",null,"SHOW FUNCTIONS"),d(" 显示所有可用函数的列表，包括内置函数和自定义函数。")],-1),O=n('<h2 id="运算符列表" tabindex="-1"><a class="header-anchor" href="#运算符列表" aria-hidden="true">#</a> 运算符列表</h2><h3 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符" aria-hidden="true">#</a> 算数运算符</h3><table><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>+</code></td><td>取正（单目）</td></tr><tr><td><code>-</code></td><td>取负（单目）</td></tr><tr><td><code>*</code></td><td>乘</td></tr><tr><td><code>/</code></td><td>除</td></tr><tr><td><code>%</code></td><td>取余</td></tr><tr><td><code>+</code></td><td>加</td></tr><tr><td><code>-</code></td><td>减</td></tr></tbody></table>',3),E=n('<h3 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h3><table><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>&gt;</code></td><td>大于</td></tr><tr><td><code>&gt;=</code></td><td>大于等于</td></tr><tr><td><code>&lt;</code></td><td>小于</td></tr><tr><td><code>&lt;=</code></td><td>小于等于</td></tr><tr><td><code>==</code></td><td>等于</td></tr><tr><td><code>!=</code> / <code>&lt;&gt;</code></td><td>不等于</td></tr><tr><td><code>BETWEEN ... AND ...</code></td><td>在指定范围内</td></tr><tr><td><code>NOT BETWEEN ... AND ...</code></td><td>不在指定范围内</td></tr><tr><td><code>LIKE</code></td><td>匹配简单模式</td></tr><tr><td><code>NOT LIKE</code></td><td>无法匹配简单模式</td></tr><tr><td><code>REGEXP</code></td><td>匹配正则表达式</td></tr><tr><td><code>NOT REGEXP</code></td><td>无法匹配正则表达式</td></tr><tr><td><code>IS NULL</code></td><td>是空值</td></tr><tr><td><code>IS NOT NULL</code></td><td>不是空值</td></tr><tr><td><code>IN</code> / <code>CONTAINS</code></td><td>是指定列表中的值</td></tr><tr><td><code>NOT IN</code> / <code>NOT CONTAINS</code></td><td>不是指定列表中的值</td></tr></tbody></table>',2),N=n('<h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3><table><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>NOT</code> / <code>!</code></td><td>取非（单目）</td></tr><tr><td><code>AND</code> / <code>&amp;</code> / <code>&amp;&amp;</code></td><td>逻辑与</td></tr><tr><td><code>OR</code>/ | / ||</td><td>逻辑或</td></tr></tbody></table>',2),L=n(`<h3 id="运算符优先级" tabindex="-1"><a class="header-anchor" href="#运算符优先级" aria-hidden="true">#</a> 运算符优先级</h3><p>运算符的优先级从高到低如下所示排列，同一行的运算符具有相同的优先级。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token punctuation">(</span>单目<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">+</span> <span class="token punctuation">(</span>单目<span class="token punctuation">)</span>
<span class="token operator">*</span><span class="token punctuation">,</span> <span class="token operator">/</span><span class="token punctuation">,</span> <span class="token operator">DIV</span><span class="token punctuation">,</span> <span class="token operator">%</span><span class="token punctuation">,</span> MOD
<span class="token operator">-</span><span class="token punctuation">,</span> <span class="token operator">+</span>
<span class="token operator">=</span><span class="token punctuation">,</span> <span class="token operator">=</span><span class="token operator">=</span><span class="token punctuation">,</span> <span class="token operator">&lt;=&gt;</span><span class="token punctuation">,</span> <span class="token operator">&gt;=</span><span class="token punctuation">,</span> <span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;=</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;&gt;</span><span class="token punctuation">,</span> <span class="token operator">!=</span>
<span class="token operator">LIKE</span><span class="token punctuation">,</span> <span class="token operator">REGEXP</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token operator">LIKE</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token operator">REGEXP</span>
<span class="token operator">BETWEEN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">AND</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token operator">BETWEEN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">AND</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token operator">IN</span><span class="token punctuation">,</span> <span class="token keyword">CONTAINS</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token operator">IN</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token keyword">CONTAINS</span>
<span class="token operator">AND</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token punctuation">,</span> <span class="token operator">&amp;&amp;</span>
<span class="token operator">OR</span><span class="token punctuation">,</span> <span class="token operator">|</span><span class="token punctuation">,</span> <span class="token operator">||</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置函数列表" tabindex="-1"><a class="header-anchor" href="#内置函数列表" aria-hidden="true">#</a> 内置函数列表</h2><p>列表中的函数无须注册即可在 IoTDB 中使用，数据函数质量库中的函数需要参考注册步骤进行注册后才能使用。</p><h3 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h3>`,6),I=t("thead",null,[t("tr",null,[t("th",null,"函数名"),t("th",null,"功能描述"),t("th",null,"允许的输入类型"),t("th",null,"输出类型")])],-1),_=t("tr",null,[t("td",null,"SUM"),t("td",null,"求和。"),t("td",null,"INT32 INT64 FLOAT DOUBLE"),t("td",null,"DOUBLE")],-1),b=t("tr",null,[t("td",null,"COUNT"),t("td",null,"计算数据点数。"),t("td",null,"所有类型"),t("td",null,"INT")],-1),A=t("tr",null,[t("td",null,"AVG"),t("td",null,"求平均值。"),t("td",null,"INT32 INT64 FLOAT DOUBLE"),t("td",null,"DOUBLE")],-1),U=t("tr",null,[t("td",null,"EXTREME"),t("td",null,"求具有最大绝对值的值。如果正值和负值的最大绝对值相等，则返回正值。"),t("td",null,"INT32 INT64 FLOAT DOUBLE"),t("td",null,"与输入类型一致")],-1),D=t("tr",null,[t("td",null,"MAX_VALUE"),t("td",null,"求最大值。"),t("td",null,"INT32 INT64 FLOAT DOUBLE"),t("td",null,"与输入类型一致")],-1),B=t("tr",null,[t("td",null,"MIN_VALUE"),t("td",null,"求最小值。"),t("td",null,"INT32 INT64 FLOAT DOUBLE"),t("td",null,"与输入类型一致")],-1),k=t("tr",null,[t("td",null,"FIRST_VALUE"),t("td",null,"求时间戳最小的值。"),t("td",null,"所有类型"),t("td",null,"与输入类型一致")],-1),m=t("tr",null,[t("td",null,"LAST_VALUE"),t("td",null,"求时间戳最大的值。"),t("td",null,"所有类型"),t("td",null,"与输入类型一致")],-1),F=t("tr",null,[t("td",null,"MAX_TIME"),t("td",null,"求最大时间戳。"),t("td",null,"所有类型"),t("td",null,"Timestamp")],-1),g=t("tr",null,[t("td",null,"MIN_TIME"),t("td",null,"求最小时间戳。"),t("td",null,"所有类型"),t("td",null,"Timestamp")],-1),f=t("td",null,null,-1),S=t("td",null,null,-1),x=t("td",null,null,-1),M=n('<h3 id="数学函数" tabindex="-1"><a class="header-anchor" href="#数学函数" aria-hidden="true">#</a> 数学函数</h3><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>输出序列类型</th><th>Java 标准库中的对应实现</th></tr></thead><tbody><tr><td>SIN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#sin(double)</td></tr><tr><td>COS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#cos(double)</td></tr><tr><td>TAN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#tan(double)</td></tr><tr><td>ASIN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#asin(double)</td></tr><tr><td>ACOS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#acos(double)</td></tr><tr><td>ATAN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#atan(double)</td></tr><tr><td>SINH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#sinh(double)</td></tr><tr><td>COSH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#cosh(double)</td></tr><tr><td>TANH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#tanh(double)</td></tr><tr><td>DEGREES</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#toDegrees(double)</td></tr><tr><td>RADIANS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#toRadians(double)</td></tr><tr><td>ABS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>与输入序列的实际类型一致</td><td>Math#abs(int) / Math#abs(long) /Math#abs(float) /Math#abs(double)</td></tr><tr><td>SIGN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#signum(double)</td></tr><tr><td>CEIL</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#ceil(double)</td></tr><tr><td>FLOOR</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#floor(double)</td></tr><tr><td>ROUND</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#rint(double)</td></tr><tr><td>EXP</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#exp(double)</td></tr><tr><td>LN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#log(double)</td></tr><tr><td>LOG10</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#log10(double)</td></tr><tr><td>SQRT</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#sqrt(double)</td></tr></tbody></table>',2),v=n('<h3 id="比较函数" tabindex="-1"><a class="header-anchor" href="#比较函数" aria-hidden="true">#</a> 比较函数</h3><table><thead><tr><th>函数名</th><th>可接收的输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能类型</th></tr></thead><tbody><tr><td>ON_OFF</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>threshold</code>:DOUBLE</td><td>BOOLEAN</td><td>返回<code>ts_value &gt;= threshold</code>的bool值</td></tr><tr><td>IN_RANGE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>lower</code>:DOUBLE<br><code>upper</code>:DOUBLE</td><td>BOOLEAN</td><td>返回<code>ts_value &gt;= lower &amp;&amp; ts_value &lt;= upper</code>的bool值</td></tr></tbody></table>',2),y=n('<h3 id="字符串处理函数" tabindex="-1"><a class="header-anchor" href="#字符串处理函数" aria-hidden="true">#</a> 字符串处理函数</h3><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>STRING_CONTAINS</td><td>TEXT</td><td><code>s</code>: 待搜寻的字符串</td><td>BOOLEAN</td><td>判断字符串中是否存在<code>s</code></td></tr><tr><td>STRING_MATCHES</td><td>TEXT</td><td><code>regex</code>: Java 标准库风格的正则表达式</td><td>BOOLEAN</td><td>判断字符串是否能够被正则表达式<code>regex</code>匹配</td></tr><tr><td>LENGTH</td><td>TEXT</td><td>无</td><td>INT32</td><td>返回字符串的长度</td></tr><tr><td>LOCATE</td><td>TEXT</td><td><code>target</code>: 需要被定位的子串 <br> <code>reverse</code>: 指定是否需要倒序定位，默认值为<code>false</code>, 即从左至右定位</td><td>INT32</td><td>获取<code>target</code>子串第一次出现在输入序列的位置，如果输入序列中不包含<code>target</code>则返回 -1</td></tr><tr><td>STARTSWITH</td><td>TEXT</td><td><code>target</code>: 需要匹配的前缀</td><td>BOOLEAN</td><td>判断字符串是否有指定前缀</td></tr><tr><td>ENDSWITH</td><td>TEXT</td><td><code>target</code>: 需要匹配的后缀</td><td>BOOLEAN</td><td>判断字符串是否有指定后缀</td></tr><tr><td>CONCAT</td><td>TEXT</td><td><code>targets</code>: 一系列 K-V, key需要以<code>target</code>为前缀且不重复, value是待拼接的字符串。<br><code>series_behind</code>: 指定拼接时时间序列是否在后面，默认为<code>false</code>。</td><td>TEXT</td><td>拼接字符串和<code>target</code>字串</td></tr><tr><td>SUBSTR</td><td>TEXT</td><td><code>start</code>: 指定子串开始下标 <br><code>end</code>: 指定子串结束下标</td><td>TEXT</td><td>获取下标从<code>start</code>到<code>end - 1</code>的子串</td></tr><tr><td>UPPER</td><td>TEXT</td><td>无</td><td>TEXT</td><td>将字符串转化为大写</td></tr><tr><td>LOWER</td><td>TEXT</td><td>无</td><td>TEXT</td><td>将字符串转化为小写</td></tr><tr><td>TRIM</td><td>TEXT</td><td>无</td><td>TEXT</td><td>移除字符串前后的空格</td></tr><tr><td>STRCMP</td><td>TEXT</td><td>无</td><td>TEXT</td><td>用于比较两个输入序列，如果值相同返回 <code>0</code> , 序列1的值小于序列2的值返回一个<code>负数</code>，序列1的值大于序列2的值返回一个<code>正数</code></td></tr></tbody></table>',2),R=n('<h3 id="数据类型转换函数" tabindex="-1"><a class="header-anchor" href="#数据类型转换函数" aria-hidden="true">#</a> 数据类型转换函数</h3><table><thead><tr><th>函数名</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能类型</th></tr></thead><tbody><tr><td>CAST</td><td><code>type</code>:输出的数据点的类型，只能是 INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>由输入属性参数<code>type</code>决定</td><td>将数据转换为<code>type</code>参数指定的类型。</td></tr></tbody></table>',2),C=n('<h3 id="常序列生成函数" tabindex="-1"><a class="header-anchor" href="#常序列生成函数" aria-hidden="true">#</a> 常序列生成函数</h3><table><thead><tr><th>函数名</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>CONST</td><td><code>value</code>: 输出的数据点的值 <br><code>type</code>: 输出的数据点的类型，只能是 INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>由输入属性参数 <code>type</code> 决定</td><td>根据输入属性 <code>value</code> 和 <code>type</code> 输出用户指定的常序列。</td></tr><tr><td>PI</td><td>无</td><td>DOUBLE</td><td>常序列的值：<code>π</code> 的 <code>double</code> 值，圆的周长与其直径的比值，即圆周率，等于 <em>Java标准库</em> 中的<code>Math.PI</code>。</td></tr><tr><td>E</td><td>无</td><td>DOUBLE</td><td>常序列的值：<code>e</code> 的 <code>double</code> 值，自然对数的底，它等于 <em>Java 标准库</em> 中的 <code>Math.E</code>。</td></tr></tbody></table>',2),V=n('<h3 id="选择函数" tabindex="-1"><a class="header-anchor" href="#选择函数" aria-hidden="true">#</a> 选择函数</h3><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>TOP_K</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT</td><td><code>k</code>: 最多选择的数据点数，必须大于 0 小于等于 1000</td><td>与输入序列的实际类型一致</td><td>返回某时间序列中值最大的<code>k</code>个数据点。若多于<code>k</code>个数据点的值并列最大，则返回时间戳最小的数据点。</td></tr><tr><td>BOTTOM_K</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT</td><td><code>k</code>: 最多选择的数据点数，必须大于 0 小于等于 1000</td><td>与输入序列的实际类型一致</td><td>返回某时间序列中值最小的<code>k</code>个数据点。若多于<code>k</code>个数据点的值并列最小，则返回时间戳最小的数据点。</td></tr></tbody></table>',2),X=n('<h3 id="区间查询函数" tabindex="-1"><a class="header-anchor" href="#区间查询函数" aria-hidden="true">#</a> 区间查询函数</h3><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>ZERO_DURATION</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:可选，默认值0<br><code>max</code>:可选，默认值<code>Long.MAX_VALUE</code></td><td>Long</td><td>返回时间序列连续为0(false)的开始时间与持续时间，持续时间t(单位ms)满足<code>t &gt;= min &amp;&amp; t &lt;= max</code></td></tr><tr><td>NON_ZERO_DURATION</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:可选，默认值0<br><code>max</code>:可选，默认值<code>Long.MAX_VALUE</code></td><td>Long</td><td>返回时间序列连续不为0(false)的开始时间与持续时间，持续时间t(单位ms)满足<code>t &gt;= min &amp;&amp; t &lt;= max</code></td></tr><tr><td>ZERO_COUNT</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:可选，默认值1<br><code>max</code>:可选，默认值<code>Long.MAX_VALUE</code></td><td>Long</td><td>返回时间序列连续为0(false)的开始时间与其后数据点的个数，数据点个数n满足<code>n &gt;= min &amp;&amp; n &lt;= max</code></td></tr><tr><td>NON_ZERO_COUNT</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:可选，默认值1<br><code>max</code>:可选，默认值<code>Long.MAX_VALUE</code></td><td>Long</td><td>返回时间序列连续不为0(false)的开始时间与其后数据点的个数，数据点个数n满足<code>n &gt;= min &amp;&amp; n &lt;= max</code></td></tr></tbody></table>',2),G=n('<h3 id="趋势计算函数" tabindex="-1"><a class="header-anchor" href="#趋势计算函数" aria-hidden="true">#</a> 趋势计算函数</h3><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>TIME_DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>INT64</td><td>统计序列中某数据点的时间戳与前一数据点时间戳的差。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>与输入序列的实际类型一致</td><td>统计序列中某数据点的值与前一数据点的值的差。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>NON_NEGATIVE_DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>与输入序列的实际类型一致</td><td>统计序列中某数据点的值与前一数据点的值的差的绝对值。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>DERIVATIVE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>统计序列中某数据点相对于前一数据点的变化率，数量上等同于 DIFFERENCE / TIME_DIFFERENCE。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>NON_NEGATIVE_DERIVATIVE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>统计序列中某数据点相对于前一数据点的变化率的绝对值，数量上等同于 NON_NEGATIVE_DIFFERENCE / TIME_DIFFERENCE。范围内第一个数据点没有对应的结果输出。</td></tr></tbody></table><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>DIFF</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>ignoreNull</code>：可选，默认为true；为true时，前一个数据点值为null时，忽略该数据点继续向前找到第一个出现的不为null的值；为false时，如果前一个数据点为null，则不忽略，使用null进行相减，结果也为null</td><td>DOUBLE</td><td>统计序列中某数据点的值与前一数据点的值的差。第一个数据点没有对应的结果输出，输出值为null</td></tr></tbody></table>',3),w=n('<h3 id="采样函数" tabindex="-1"><a class="header-anchor" href="#采样函数" aria-hidden="true">#</a> 采样函数</h3><table><thead><tr><th>函数名</th><th>可接收的输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能类型</th></tr></thead><tbody><tr><td>EQUAL_SIZE_BUCKET_RANDOM_SAMPLE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>降采样比例 <code>proportion</code>，取值范围为<code>(0, 1]</code>，默认为<code>0.1</code></td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>返回符合采样比例的等分桶随机采样</td></tr><tr><td>EQUAL_SIZE_BUCKET_AGG_SAMPLE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>proportion</code>取值范围为<code>(0, 1]</code>，默认为<code>0.1</code><br><code>type</code>:取值类型有<code>avg</code>, <code>max</code>, <code>min</code>, <code>sum</code>, <code>extreme</code>, <code>variance</code>, 默认为<code>avg</code></td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>返回符合采样比例的等分桶聚合采样</td></tr><tr><td>EQUAL_SIZE_BUCKET_M4_SAMPLE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>proportion</code>取值范围为<code>(0, 1]</code>，默认为<code>0.1</code></td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>返回符合采样比例的等分桶M4采样</td></tr><tr><td>EQUAL_SIZE_BUCKET_OUTLIER_SAMPLE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>proportion</code>取值范围为<code>(0, 1]</code>，默认为<code>0.1</code><br><code>type</code>取值为<code>avg</code>或<code>stendis</code>或<code>cos</code>或<code>prenextdis</code>，默认为<code>avg</code><br><code>number</code>取值应大于0，默认<code>3</code></td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>返回符合采样比例和桶内采样个数的等分桶离群值采样</td></tr><tr><td>M4</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>包含固定点数的窗口和滑动时间窗口使用不同的属性参数。包含固定点数的窗口使用属性<code>windowSize</code>和<code>slidingStep</code>。滑动时间窗口使用属性<code>timeInterval</code>、<code>slidingStep</code>、<code>displayWindowBegin</code>和<code>displayWindowEnd</code>。更多细节见下文。</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>返回每个窗口内的第一个点（<code>first</code>）、最后一个点（<code>last</code>）、最小值点（<code>bottom</code>）、最大值点（<code>top</code>）。在一个窗口内的聚合点输出之前，M4会将它们按照时间戳递增排序并且去重。</td></tr></tbody></table><h2 id="数据质量函数库" tabindex="-1"><a class="header-anchor" href="#数据质量函数库" aria-hidden="true">#</a> 数据质量函数库</h2><p>对基于时序数据的应用而言，数据质量至关重要。基于用户自定义函数能力，IoTDB 提供了一系列关于数据质量的函数，包括数据画像、数据质量评估与修复等，能够满足工业领域对数据质量的需求。</p><p><strong>该函数库中的函数不是内置函数，使用前要先加载到系统中。</strong> 操作流程如下：</p>',5),z={href:"https://archive.apache.org/dist/iotdb/1.0.1/apache-iotdb-1.0.1-library-udf-bin.zip",target:"_blank",rel:"noopener noreferrer"},P=t("li",null,[d("将 jar 包复制到 IoTDB 程序目录的 "),t("code",null,"ext\\udf"),d(" 目录下 (若您使用的是集群，请将jar包复制到所有DataNode的该目录下)；")],-1),K=t("li",null,"启动 IoTDB；",-1),W=t("li",null,[d("将注册脚本复制到 IoTDB 的程序目录下（与"),t("code",null,"sbin"),d("目录同级的根目录下），修改脚本中的参数（如果需要）并运行注册脚本以注册 UDF。")],-1);function H(Z,Q){const o=s("RouterLink"),c=s("ExternalLinkIcon");return p(),h("div",null,[r(`

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

`),u,t("p",null,[d("本章介绍 IoTDB 支持的运算符和函数。IoTDB 提供了丰富的内置运算符和函数来满足您的计算需求，同时支持通过"),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/User-Defined-Function.html"},{default:a(()=>[d("用户自定义函数")]),_:1}),d("能力进行扩展。")]),T,t("p",null,[d("关于运算符和函数在 SQL 中的行为，可以查看文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Query-Data/Select-Expression.html"},{default:a(()=>[d("选择表达式")]),_:1}),d("。")]),O,t("p",null,[d("详细说明及示例见文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/Mathematical.html"},{default:a(()=>[d("算数运算符和函数")]),_:1}),d("。")]),E,t("p",null,[d("详细说明及示例见文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/Comparison.html"},{default:a(()=>[d("比较运算符和函数")]),_:1}),d("。")]),N,r("- &#124;即管道符 转义不能用在``里, 表格内不允许使用管道符 "),t("p",null,[d("详细说明及示例见文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/Logical.html"},{default:a(()=>[d("逻辑运算符")]),_:1}),d("。")]),L,t("table",null,[I,t("tbody",null,[_,b,A,U,D,B,k,m,F,g,t("tr",null,[t("td",null,[d("详细说明及示例见文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/Aggregation.html"},{default:a(()=>[d("聚合函数")]),_:1}),d("。")]),f,S,x])])]),M,t("p",null,[d("详细说明及示例见文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/Mathematical.html"},{default:a(()=>[d("算数运算符和函数")]),_:1}),d("。")]),v,t("p",null,[d("详细说明及示例见文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/Comparison.html"},{default:a(()=>[d("比较运算符和函数")]),_:1}),d("。")]),y,t("p",null,[d("详细说明及示例见文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/String.html"},{default:a(()=>[d("字符串处理函数")]),_:1}),d("。")]),R,t("p",null,[d("详细说明及示例见文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/Conversion.html"},{default:a(()=>[d("数据类型转换")]),_:1}),d("。")]),C,t("p",null,[d("详细说明及示例见文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/Constant.html"},{default:a(()=>[d("常序列生成函数")]),_:1}),d("。")]),V,t("p",null,[d("详细说明及示例见文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/Selection.html"},{default:a(()=>[d("选择函数")]),_:1}),d("。")]),X,t("p",null,[d("详细说明及示例见文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/Continuous-Interval.html"},{default:a(()=>[d("区间查询函数")]),_:1}),d("。")]),G,t("p",null,[d("详细说明及示例见文档 "),e(o,{to:"/zh/UserGuide/V1.1.x/Operators-Functions/Variation-Trend.html"},{default:a(()=>[d("趋势计算函数")]),_:1}),d("。")]),w,t("ol",null,[t("li",null,[d("下载包含全部依赖的 jar 包和注册脚本 "),t("a",z,[d("【点击下载】"),e(c)]),d(" ；")]),P,K,W])])}const J=l(i,[["render",H],["__file","Overview.html.vue"]]);export{J as default};

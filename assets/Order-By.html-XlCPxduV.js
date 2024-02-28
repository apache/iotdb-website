import{_ as e,o as n,c as s,a,f as l}from"./app-q7RXDTub.js";const i={},o=l(`<h1 id="结果集排序" tabindex="-1"><a class="header-anchor" href="#结果集排序" aria-hidden="true">#</a> 结果集排序</h1><h2 id="时间对齐模式下的排序" tabindex="-1"><a class="header-anchor" href="#时间对齐模式下的排序" aria-hidden="true">#</a> 时间对齐模式下的排序</h2><p>IoTDB的查询结果集默认按照时间对齐，可以使用<code>ORDER BY TIME</code>的子句指定时间戳的排列顺序。示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">time</span> <span class="token keyword">desc</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|
+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
|2017-11-01T00:01:00.000+08:00|                        v2|                    true|                        24.36|                    true|
|2017-11-01T00:00:00.000+08:00|                        v2|                    true|                        25.96|                    true|
|1970-01-01T08:00:00.002+08:00|                        v2|                   false|                         null|                    null|
|1970-01-01T08:00:00.001+08:00|                        v1|                    true|                         null|                    null|
+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设备对齐模式下的排序" tabindex="-1"><a class="header-anchor" href="#设备对齐模式下的排序" aria-hidden="true">#</a> 设备对齐模式下的排序</h2><p>当使用<code>ALIGN BY DEVICE</code>查询对齐模式下的结果集时，可以使用<code>ORDER BY</code>子句对返回的结果集顺序进行规定。</p><p>在设备对齐模式下支持4种排序模式的子句,其中包括两种排序键，<code>DEVICE</code>和<code>TIME</code>，靠前的排序键为主排序键，每种排序键都支持<code>ASC</code>和<code>DESC</code>两种排列顺序。</p><ol><li><p><code>ORDER BY DEVICE</code>: 按照设备名的字典序进行排序，排序方式为字典序排序，在这种情况下，相同名的设备会以组的形式进行展示。</p></li><li><p><code>ORDER BY TIME</code>: 按照时间戳进行排序，此时不同的设备对应的数据点会按照时间戳的优先级被打乱排序。</p></li><li><p><code>ORDER BY DEVICE,TIME</code>: 按照设备名的字典序进行排序，设备名相同的数据点会通过时间戳进行排序。</p></li><li><p><code>ORDER BY TIME,DEVICE</code>: 按照时间戳进行排序，时间戳相同的数据点会通过设备名的字典序进行排序。</p></li></ol><blockquote><p>为了保证结果的可观性，当不使用<code>ORDER BY</code>子句，仅使用<code>ALIGN BY DEVICE</code>时，会为设备视图提供默认的排序方式。其中默认的排序视图为<code>ORDER BY DEVCE,TIME</code>，默认的排序顺序为<code>ASC</code>，<br> 即结果集默认先按照设备名升序排列，在相同设备名内再按照时间戳升序排序。</p></blockquote><p>当主排序键为<code>DEVICE</code>时，结果集的格式与默认情况类似：先按照设备名对结果进行排列，在相同的设备名下内按照时间戳进行排序。示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> <span class="token keyword">order</span> <span class="token keyword">by</span> device <span class="token keyword">desc</span><span class="token punctuation">,</span><span class="token keyword">time</span> <span class="token keyword">asc</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------+--------+------+-----------+
|                         Time|           Device|hardware|status|temperature|
+-----------------------------+-----------------+--------+------+-----------+
|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|      v1|  true|       null|
|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|      v2| false|       null|
|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|
|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|
|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|    null|  true|      25.96|
|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|    null|  true|      24.36|
+-----------------------------+-----------------+--------+------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主排序键为<code>Time</code>时，结果集会先按照时间戳进行排序，在时间戳相等时按照设备名排序。<br> 示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">time</span> <span class="token keyword">asc</span><span class="token punctuation">,</span>device <span class="token keyword">desc</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------+--------+------+-----------+
|                         Time|           Device|hardware|status|temperature|
+-----------------------------+-----------------+--------+------+-----------+
|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|      v1|  true|       null|
|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|      v2| false|       null|
|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|
|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|    null|  true|      25.96|
|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|
|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|    null|  true|      24.36|
+-----------------------------+-----------------+--------+------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当没有显式指定时，主排序键默认为<code>Device</code>，排序顺序默认为<code>ASC</code>，示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果如图所示，可以看出，<code>ORDER BY DEVICE ASC,TIME ASC</code>就是默认情况下的排序方式，由于<code>ASC</code>是默认排序顺序，此处可以省略。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------+--------+------+-----------+
|                         Time|           Device|hardware|status|temperature|
+-----------------------------+-----------------+--------+------+-----------+
|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|    null|  true|      25.96|
|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|    null|  true|      24.36|
|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|      v1|  true|       null|
|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|      v2| false|       null|
|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|
|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|
+-----------------------------+-----------------+--------+------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，可以在聚合查询中使用<code>ALIGN BY DEVICE</code>和<code>ORDER BY</code>子句，对聚合后的结果进行排序，示例代码如下所示：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">00</span>:<span class="token number">00.000</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token punctuation">,</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">03</span>:<span class="token number">00.000</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">1</span>m<span class="token punctuation">)</span> <span class="token keyword">order</span> <span class="token keyword">by</span> device <span class="token keyword">asc</span><span class="token punctuation">,</span><span class="token keyword">time</span> <span class="token keyword">asc</span> align <span class="token keyword">by</span> device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------+---------------+-------------+------------------+
|                         Time|           Device|count(hardware)|count(status)|count(temperature)|
+-----------------------------+-----------------+---------------+-------------+------------------+
|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|           null|            1|                 1|
|2017-11-01T00:02:00.000+08:00|root.ln.wf01.wt01|           null|            0|                 0|
|2017-11-01T00:03:00.000+08:00|root.ln.wf01.wt01|           null|            0|                 0|
|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|              1|            1|              null|
|2017-11-01T00:02:00.000+08:00|root.ln.wf02.wt02|              0|            0|              null|
|2017-11-01T00:03:00.000+08:00|root.ln.wf02.wt02|              0|            0|              null|
+-----------------------------+-----------------+---------------+-------------+------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任意表达式排序" tabindex="-1"><a class="header-anchor" href="#任意表达式排序" aria-hidden="true">#</a> 任意表达式排序</h2><p>除了IoTDB中规定的Time，Device关键字外，还可以通过<code>ORDER BY</code>子句对指定时间序列中任意列的表达式进行排序。</p><p>排序在通过<code>ASC</code>,<code>DESC</code>指定排序顺序的同时，可以通过<code>NULLS</code>语法来指定NULL值在排序中的优先级，<code>NULLS FIRST</code>默认NULL值在结果集的最上方，<code>NULLS LAST</code>则保证NULL值在结果集的最后。如果没有在子句中指定，则默认顺序为<code>ASC</code>，<code>NULLS LAST</code>。</p><p>对于如下的数据，将给出几个任意表达式的查询示例供参考：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------+-------+-------+--------+-------+
|                         Time|       Device|   base|  score|   bonus|  total|    
+-----------------------------+-------------+-------+-------+--------+-------+
|1970-01-01T08:00:00.000+08:00|     root.one|     12|   50.0|    45.0|  107.0|  
|1970-01-02T08:00:00.000+08:00|     root.one|     10|   50.0|    45.0|  105.0|
|1970-01-03T08:00:00.000+08:00|     root.one|      8|   50.0|    45.0|  103.0|       
|1970-01-01T08:00:00.010+08:00|     root.two|      9|   50.0|    15.0|   74.0|   
|1970-01-01T08:00:00.020+08:00|     root.two|      8|   10.0|    15.0|   33.0|  
|1970-01-01T08:00:00.010+08:00|   root.three|      9|   null|    24.0|   33.0|    
|1970-01-01T08:00:00.020+08:00|   root.three|      8|   null|    22.5|   30.5|   
|1970-01-01T08:00:00.030+08:00|   root.three|      7|   null|    23.5|   30.5|   
|1970-01-01T08:00:00.010+08:00|    root.four|      9|   32.0|    45.0|   86.0|  
|1970-01-01T08:00:00.020+08:00|    root.four|      8|   32.0|    45.0|   85.0|   
|1970-01-01T08:00:00.030+08:00|    root.five|      7|   53.0|    44.0|  104.0|
|1970-01-01T08:00:00.040+08:00|    root.five|      6|   54.0|    42.0|  102.0|     
+-----------------------------+-------------+-------+-------+--------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当需要根据基础分数score对结果进行排序时，可以直接使用</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select score from root.** order by score desc align by device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会得到如下结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------+-----+
|                         Time|   Device|score|
+-----------------------------+---------+-----+
|1970-01-01T08:00:00.040+08:00|root.five| 54.0|
|1970-01-01T08:00:00.030+08:00|root.five| 53.0|
|1970-01-01T08:00:00.000+08:00| root.one| 50.0|
|1970-01-02T08:00:00.000+08:00| root.one| 50.0|
|1970-01-03T08:00:00.000+08:00| root.one| 50.0|
|1970-01-01T08:00:00.000+08:00| root.two| 50.0|
|1970-01-01T08:00:00.010+08:00| root.two| 50.0|
|1970-01-01T08:00:00.010+08:00|root.four| 32.0|
|1970-01-01T08:00:00.020+08:00|root.four| 32.0|
|1970-01-01T08:00:00.020+08:00| root.two| 10.0|
+-----------------------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当想要根据总分对结果进行排序，可以在order by子句中使用表达式进行计算</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select score,total from root.one order by base+score+bonus desc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该sql等价于</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select score,total from root.one order by total desc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>得到如下结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------+--------------+
|                         Time|root.one.score|root.one.total|
+-----------------------------+--------------+--------------+
|1970-01-01T08:00:00.000+08:00|          50.0|         107.0|
|1970-01-02T08:00:00.000+08:00|          50.0|         105.0|
|1970-01-03T08:00:00.000+08:00|          50.0|         103.0|
+-----------------------------+--------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而如果要对总分进行排序，且分数相同时依次根据score, base, bonus和提交时间进行排序时，可以通过多个表达式来指定多层排序</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select base, score, bonus, total from root.** order by total desc NULLS Last,
                                  score desc NULLS Last,
                                  bonus desc NULLS Last,
                                  time desc align by device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到如下结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------+----+-----+-----+-----+
|                         Time|    Device|base|score|bonus|total|
+-----------------------------+----------+----+-----+-----+-----+
|1970-01-01T08:00:00.000+08:00|  root.one|  12| 50.0| 45.0|107.0|
|1970-01-02T08:00:00.000+08:00|  root.one|  10| 50.0| 45.0|105.0|
|1970-01-01T08:00:00.030+08:00| root.five|   7| 53.0| 44.0|104.0|
|1970-01-03T08:00:00.000+08:00|  root.one|   8| 50.0| 45.0|103.0|
|1970-01-01T08:00:00.040+08:00| root.five|   6| 54.0| 42.0|102.0|
|1970-01-01T08:00:00.010+08:00| root.four|   9| 32.0| 45.0| 86.0|
|1970-01-01T08:00:00.020+08:00| root.four|   8| 32.0| 45.0| 85.0|
|1970-01-01T08:00:00.010+08:00|  root.two|   9| 50.0| 15.0| 74.0|
|1970-01-01T08:00:00.000+08:00|  root.two|   9| 50.0| 15.0| 74.0|
|1970-01-01T08:00:00.020+08:00|  root.two|   8| 10.0| 15.0| 33.0|
|1970-01-01T08:00:00.010+08:00|root.three|   9| null| 24.0| 33.0|
|1970-01-01T08:00:00.030+08:00|root.three|   7| null| 23.5| 30.5|
|1970-01-01T08:00:00.020+08:00|root.three|   8| null| 22.5| 30.5|
+-----------------------------+----------+----+-----+-----+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在order by中同样可以使用聚合查询表达式</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select min_value(total) from root.** order by min_value(total) asc align by device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>得到如下结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+----------------+
|    Device|min_value(total)|
+----------+----------------+
|root.three|            30.5|
|  root.two|            33.0|
| root.four|            85.0|
| root.five|           102.0|
|  root.one|           103.0|
+----------+----------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当在查询中指定多列，未被排序的列会随着行和排序列一起改变顺序，当排序列相同时行的顺序和具体实现有关（没有固定顺序）</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select min_value(total),max_value(base) from root.** order by max_value(total) desc align by device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>得到结果如下<br> ·</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+----------------+---------------+
|    Device|min_value(total)|max_value(base)|
+----------+----------------+---------------+
|  root.one|           103.0|             12|
| root.five|           102.0|              7|
| root.four|            85.0|              9|
|  root.two|            33.0|              9|
|root.three|            30.5|              9|
+----------+----------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Order by device, time可以和order by expression共同使用</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select score from root.** order by device asc, score desc, time asc align by device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会得到如下结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------+-----+
|                         Time|   Device|score|
+-----------------------------+---------+-----+
|1970-01-01T08:00:00.040+08:00|root.five| 54.0|
|1970-01-01T08:00:00.030+08:00|root.five| 53.0|
|1970-01-01T08:00:00.010+08:00|root.four| 32.0|
|1970-01-01T08:00:00.020+08:00|root.four| 32.0|
|1970-01-01T08:00:00.000+08:00| root.one| 50.0|
|1970-01-02T08:00:00.000+08:00| root.one| 50.0|
|1970-01-03T08:00:00.000+08:00| root.one| 50.0|
|1970-01-01T08:00:00.000+08:00| root.two| 50.0|
|1970-01-01T08:00:00.010+08:00| root.two| 50.0|
|1970-01-01T08:00:00.020+08:00| root.two| 10.0|
+-----------------------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function d(r,t){return n(),s("div",null,[a(`

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

`),o])}const u=e(i,[["render",d],["__file","Order-By.html.vue"]]);export{u as default};

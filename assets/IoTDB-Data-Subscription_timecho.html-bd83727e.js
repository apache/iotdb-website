import{_ as n,o as s,c as a,a as e,f as t}from"./app-ac157f10.js";const p={},i=t(`<h1 id="iotdb-数据订阅客户端" tabindex="-1"><a class="header-anchor" href="#iotdb-数据订阅客户端" aria-hidden="true">#</a> IoTDB 数据订阅客户端</h1><p><strong>IoTDB 的数据订阅客户端能够从特定的 IoTDB 集群内，按照一定的方式获取数据。</strong><br> 我们提供了多语言的 api，能够实时获取 IoTDB 内的最新数据，且具有推送和拉取两种模式。下面将按照语言顺序列出这些 api。</p><h2 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h2><p>提供 SubscriptionFactory 构造消费者，支持 PushConsumer 和 PullConsumer 两种消费风格：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SubscriptionFactory</span> <span class="token punctuation">{</span>

    <span class="token class-name">PushConsumer</span> <span class="token function">createPushConsumer</span><span class="token punctuation">(</span><span class="token class-name">SubscriptionConfiguration</span> subscriptionConfiguration<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">SubscriptionException</span><span class="token punctuation">;</span>

    <span class="token class-name">PullConsumer</span> <span class="token function">createPullConsumer</span><span class="token punctuation">(</span><span class="token class-name">SubscriptionConfiguration</span> subscriptionConfiguration<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">SubscriptionException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PushConsumer</span> <span class="token keyword">implements</span> <span class="token class-name">Consumer</span> <span class="token punctuation">{</span>
    <span class="token comment">// 唤醒</span>
    <span class="token keyword">void</span> <span class="token function">resumeConsume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 暂停</span>
    <span class="token keyword">void</span> <span class="token function">pauseConsume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 是否暂停</span>
    <span class="token keyword">boolean</span> <span class="token function">isConsumePaused</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 订阅消息到达后的回调 Listener</span>
    <span class="token class-name">PushConsumer</span> <span class="token function">registerSubscriptionListener</span><span class="token punctuation">(</span><span class="token class-name">SubscriptionListener</span> listener<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SubscriptionException</span><span class="token punctuation">;</span>
    <span class="token comment">// 错误出现后的回调 Listener</span>
    <span class="token class-name">PushConsumer</span> <span class="token function">registerErrorListener</span><span class="token punctuation">(</span><span class="token class-name">ReceiveErrorListener</span> listener<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SubscriptionException</span><span class="token punctuation">;</span>
    
    <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PullConsumer</span> <span class="token keyword">implements</span> <span class="token class-name">Consumer</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取队列顶部消息，客户端自己循环调用。比如：consumer.poll(Duration.ofMillis(100))</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ConsumerDataSet</span><span class="token punctuation">&gt;</span></span> <span class="token function">poll</span><span class="token punctuation">(</span><span class="token class-name">Duration</span> timeout<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SubscriptionException</span><span class="token punctuation">;</span>
    
    <span class="token keyword">void</span> <span class="token function">openSubscription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-c" tabindex="-1"><a class="header-anchor" href="#c-c" aria-hidden="true">#</a> C/C++</h2><p>IoTDB 提供与 Java 类似的订阅接口：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>push_consumer * iotdb_create_push_consumer(subscription_config *cnf);
pull_consumer * iotdb_create_pull_consumer(subscription_config *cnf);

int push_consumer_resume(push_consumer *pc);
int push_consumer_pause(push_consumer *pc);
int push_consumer_is_consume_paused(push_consumer *pc);
int push_consumer_register_subscription_listener(push_consumer *pc, SUBSCRIPTION_LISTENER listener);
int push_consumer_register_error_listener(push_consumer *pc, SERROR_LISTENER listener);
int push_consumer_close(push_consumer *pc);

consumer_dataset * pull_consumer_poll(pull_consumer *pc, int64_t timeout);
int pull_consumer_open(pull_consumer *pc);
int pull_consumer_close(pull_consumer *pc);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h2><p>Python 的订阅接口与 Java 的类似，订阅方式如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> abc <span class="token keyword">import</span> ABC<span class="token punctuation">,</span> abstractmethod
<span class="token keyword">from</span> typing <span class="token keyword">import</span> List
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> timedelta

<span class="token keyword">class</span> <span class="token class-name">SubscriptionFactory</span><span class="token punctuation">(</span>ABC<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">createPushConsumer</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> subscriptionConfiguration<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token decorator annotation punctuation">@abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">createPullConsumer</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> subscriptionConfiguration<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>


<span class="token keyword">class</span> <span class="token class-name">PushConsumer</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">resumeConsume</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">pauseConsume</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">isConsumePaused</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">registerSubscriptionListener</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">registerErrorListener</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">close</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>


<span class="token keyword">class</span> <span class="token class-name">PullConsumer</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">poll</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> timeout<span class="token punctuation">:</span> timedelta<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">openSubscription</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
    
    <span class="token keyword">def</span> <span class="token function">close</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h2><p>Go 语言内的订阅方式如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
\\t<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> SubscriptionFactory <span class="token keyword">interface</span> <span class="token punctuation">{</span>
\\<span class="token function">tCreatePushConsumer</span><span class="token punctuation">(</span>subscriptionConfiguration SubscriptionConfiguration<span class="token punctuation">)</span> <span class="token punctuation">(</span>PushConsumer<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
\\<span class="token function">tCreatePullConsumer</span><span class="token punctuation">(</span>subscriptionConfiguration SubscriptionConfiguration<span class="token punctuation">)</span> <span class="token punctuation">(</span>PullConsumer<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> PushConsumer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
\\<span class="token function">tResumeConsume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
\\<span class="token function">tPauseConsume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
\\<span class="token function">tIsConsumePaused</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
\\<span class="token function">tRegisterSubscriptionListener</span><span class="token punctuation">(</span>listener SubscriptionListener<span class="token punctuation">)</span> <span class="token builtin">error</span>
\\<span class="token function">tRegisterErrorListener</span><span class="token punctuation">(</span>listener ReceiveErrorListener<span class="token punctuation">)</span> <span class="token builtin">error</span>
\\<span class="token function">tClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> PullConsumer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
\\<span class="token function">tPoll</span><span class="token punctuation">(</span>timeout time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>ConsumerDataSet<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
\\<span class="token function">tOpenSubscription</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
\\<span class="token function">tClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConsumerDataSet <span class="token keyword">struct</span> <span class="token punctuation">{</span>
\\t<span class="token comment">// define fields of ConsumerDataSet</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> SubscriptionConfiguration <span class="token keyword">struct</span> <span class="token punctuation">{</span>
\\t<span class="token comment">// define fields of SubscriptionConfiguration</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> SubscriptionListener <span class="token keyword">interface</span> <span class="token punctuation">{</span>
\\t<span class="token comment">// define methods of SubscriptionListener</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ReceiveErrorListener <span class="token keyword">interface</span> <span class="token punctuation">{</span>
\\t<span class="token comment">// define methods of ReceiveErrorListener</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h2><p>Rust 语言内的订阅方式如下：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>time<span class="token punctuation">::</span></span><span class="token class-name">Duration</span><span class="token punctuation">;</span>

<span class="token keyword">pub</span> <span class="token keyword">trait</span> <span class="token type-definition class-name">SubscriptionFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">create_push_consumer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> subscription_configuration<span class="token punctuation">:</span> <span class="token class-name">SubscriptionConfiguration</span><span class="token punctuation">)</span>
        <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">PushConsumer</span><span class="token punctuation">,</span> <span class="token class-name">SubscriptionException</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

    <span class="token keyword">fn</span> <span class="token function-definition function">create_pull_consumer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> subscription_configuration<span class="token punctuation">:</span> <span class="token class-name">SubscriptionConfiguration</span><span class="token punctuation">)</span>
        <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">PullConsumer</span><span class="token punctuation">,</span> <span class="token class-name">SubscriptionException</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">PushConsumer</span> <span class="token punctuation">{</span>
    <span class="token comment">// 唤醒</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">resume_consume</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 暂停</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">pause_consume</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 是否暂停</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">is_consume_paused</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">bool</span><span class="token punctuation">;</span>

    <span class="token comment">// 订阅消息到达后的回调 Listener</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">register_subscription_listener</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> listener<span class="token punctuation">:</span> <span class="token class-name">SubscriptionListener</span><span class="token punctuation">)</span>
        <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">PushConsumer</span><span class="token punctuation">,</span> <span class="token class-name">SubscriptionException</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

    <span class="token comment">// 错误出现后的回调 Listener</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">register_error_listener</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> listener<span class="token punctuation">:</span> <span class="token class-name">ReceiveErrorListener</span><span class="token punctuation">)</span>
        <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">PushConsumer</span><span class="token punctuation">,</span> <span class="token class-name">SubscriptionException</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

    <span class="token keyword">fn</span> <span class="token function-definition function">close</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">PullConsumer</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取队列顶部消息，客户端自己循环调用。比如：consumer.poll(Duration::from_millis(100))</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">poll</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> timeout<span class="token punctuation">:</span> <span class="token class-name">Duration</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">ConsumerDataSet</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">SubscriptionException</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

    <span class="token keyword">fn</span> <span class="token function-definition function">openSubscription</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">fn</span> <span class="token function-definition function">close</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.JS</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">PushConsumer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>paused <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subscriptionListener <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>errorListener <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">resumeConsume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>paused <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">pauseConsume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>paused <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">isConsumePaused</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>paused<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">registerSubscriptionListener</span><span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subscriptionListener <span class="token operator">=</span> listener<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">registerErrorListener</span><span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>errorListener <span class="token operator">=</span> listener<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 关闭操作</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PullConsumer</span> <span class="token punctuation">{</span>
  <span class="token function">poll</span><span class="token punctuation">(</span><span class="token parameter">timeout</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取队列顶部消息的操作</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">openSubscription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 打开连接</span>
  <span class="token punctuation">}</span>

  <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 关闭操作</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubscriptionFactory</span> <span class="token punctuation">{</span>
  <span class="token function">createPushConsumer</span><span class="token punctuation">(</span><span class="token parameter">subscriptionConfiguration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PushConsumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">createPullConsumer</span><span class="token punctuation">(</span><span class="token parameter">subscriptionConfiguration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PullConsumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  SubscriptionFactory<span class="token punctuation">,</span>
  PushConsumer<span class="token punctuation">,</span>
  PullConsumer
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方式示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> SubscriptionFactory <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./subscription&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubscriptionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> subscriptionConfiguration <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">/* 配置信息 */</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pushConsumer <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createPushConsumer</span><span class="token punctuation">(</span>subscriptionConfiguration<span class="token punctuation">)</span><span class="token punctuation">;</span>
pushConsumer<span class="token punctuation">.</span><span class="token function">registerSubscriptionListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理订阅消息到达后的逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">registerErrorListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理错误出现后的逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pullConsumer <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createPullConsumer</span><span class="token punctuation">(</span>subscriptionConfiguration<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 pushConsumer 和 pullConsumer 进行操作</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C#</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public interface SubscriptionFactory
{
    PushConsumer CreatePushConsumer(SubscriptionConfiguration subscriptionConfiguration)
    {
        throw new SubscriptionException();
    }

    PullConsumer CreatePullConsumer(SubscriptionConfiguration subscriptionConfiguration)
    {
        throw new SubscriptionException();
    }
}

public class PushConsumer : Consumer
{
    public void ResumeConsume()
    {
        // 唤醒逻辑
    }

    public void PauseConsume()
    {
        // 暂停逻辑
    }

    public bool IsConsumePaused()
    {
        // 判断是否暂停逻辑
    }

    public PushConsumer RegisterSubscriptionListener(SubscriptionListener listener)
    {
        throw new SubscriptionException();
    }

    public PushConsumer RegisterErrorListener(ReceiveErrorListener listener)
    {
        throw new SubscriptionException();
    }

    public void Close()
    {
        // 关闭逻辑
    }
}

public class PullConsumer : Consumer
{
    public List&lt;ConsumerDataSet&gt; Poll(TimeSpan timeout)
    {
        throw new SubscriptionException();
    }

    public void OpenSubscription()
    {
        // 开始逻辑
    }

    public void Close()
    {
        // 关闭逻辑
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="websocket-方式订阅" tabindex="-1"><a class="header-anchor" href="#websocket-方式订阅" aria-hidden="true">#</a> WebSocket 方式订阅</h2><p>同时，IoTDB 的订阅客户端还支持以 WebSocket 的方式订阅。 WebSocket 的默认客户端端口为 9090，也可以在客户端内配置。订阅消息为：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token punctuation">{</span>
  <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;subscribe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;unordered&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timeRange&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ValueRange&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;100&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该消息将订阅 IoTDB 的所有数据，不包括乱序数据，按照一定时间进行过滤，同时只需要大于100的数据。</p><p>此外，还需要自定义 socket.onmessage 函数，以处理获取到的数据。此外，还需要编写 socket.onclose 和 socket.onerror 等函数，以自定义客户端对这些事件的响应。</p><h2 id="mqtt-方式订阅" tabindex="-1"><a class="header-anchor" href="#mqtt-方式订阅" aria-hidden="true">#</a> MQTT 方式订阅</h2><p>目前 IoTDB 的 MQTT 方式支持数据订阅功能，其数据格式与 WebSocket 相同。mqtt 的 host 和 port 需要在 iotdb 的 properties 文件内配置。</p><h2 id="数据过滤" tabindex="-1"><a class="header-anchor" href="#数据过滤" aria-hidden="true">#</a> 数据过滤</h2><p>与数据同步软件相同，IoTDB 的订阅功能也可以提供数据过滤的功能。WebSocket 与 MQTT 方式已经给出了示例。<br> Api 方式下，以 Java 订阅接口为例子，用户可在 SubscriptionConfiguration 中配置过滤条件（Strategy）。目前支持指定的条件包括：</p><ul><li>是否需要过滤乱序数据（disorderHandlingStrategy）</li><li>需要订阅的序列的共同前缀（topicsStrategy）</li><li>指定序列的时间范围（timeStrategy）</li><li>指定序列的值范围（valueStrategy）</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PushConsumerExample</span> <span class="token punctuation">{</span>
  
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
       <span class="token class-name">SubscriptionConfiguration</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubscriptionConfiguration<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                       <span class="token punctuation">.</span><span class="token function">host</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span>
                       <span class="token punctuation">.</span><span class="token function">port</span><span class="token punctuation">(</span><span class="token number">6667</span><span class="token punctuation">)</span>
                       <span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span>
                       <span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span>
                       <span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&quot;my-test-group&quot;</span><span class="token punctuation">)</span>
                       <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                       
       <span class="token comment">// 在此设置过滤条件</span>
       config<span class="token punctuation">.</span><span class="token function">disorderHandlingStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">IntolerableStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
             <span class="token punctuation">.</span><span class="token function">topicsStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SingleTopicStrategy</span><span class="token punctuation">(</span><span class="token string">&quot;root.sg.d1.n1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
             <span class="token punctuation">.</span><span class="token function">timeStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GlobalTimeStrategy</span><span class="token punctuation">)</span>
             <span class="token punctuation">.</span><span class="token function">valueStrategy</span><span class="token punctuation">(</span><span class="token class-name">ValueStrategy<span class="token punctuation">.</span>GreaterThanStrategy</span><span class="token punctuation">(</span>
                 <span class="token keyword">new</span> <span class="token class-name">SingleTopicStrategy</span><span class="token punctuation">(</span><span class="token string">&quot;root.sg.d1.n1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100d</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             
       <span class="token class-name">SubscriptionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubscriptionFactory</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">final</span> <span class="token class-name">PullConsumer</span> pullConsumer <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createPullConsumer</span><span class="token punctuation">(</span>consumerConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
       pullConsumer<span class="token punctuation">.</span><span class="token function">openSubscription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ConsumerDataSet</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> pullConsumer<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofMillis</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ConsumerDataSet</span> item <span class="token operator">:</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;received message : &quot;</span> <span class="token operator">+</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function o(c,l){return s(),a("div",null,[e(`

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

`),i])}const r=n(p,[["render",o],["__file","IoTDB-Data-Subscription_timecho.html.vue"]]);export{r as default};

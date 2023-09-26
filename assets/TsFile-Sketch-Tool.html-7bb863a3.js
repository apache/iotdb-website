import{_ as s,o as n,c as a,a as e,f as p}from"./app-342a215c.js";const t={},o=p(`<h1 id="tsfile概览工具" tabindex="-1"><a class="header-anchor" href="#tsfile概览工具" aria-hidden="true">#</a> TsFile概览工具</h1><p>TsFile概览工具用于以概要模式打印出一个TsFile的内容，工具位置为 tools/tsfile/print-tsfile。</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><ul><li>Windows:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-tsfile-sketch.bat <span class="token operator">&lt;</span>TsFile文件路径<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>输出结果的存储路径<span class="token operator">&gt;</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Linux or MacOs:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./print-tsfile-sketch.sh <span class="token operator">&lt;</span>TsFile文件路径<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>输出结果的存储路径<span class="token operator">&gt;</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：如果没有设置输出结果的存储路径, 将使用相对路径&quot;TsFile_sketch_view.txt&quot;作为默认值。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>以Windows系统为例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-tsfile.bat D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span><span class="token number">1669359533965</span>-1-0-0.tsfile D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>sketch.txt
\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`<span class="token variable"><span class="token variable">\`</span>
Starting Printing the TsFile Sketch
<span class="token variable">\`</span></span>\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`
TsFile path:D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span><span class="token number">1669359533965</span>-1-0-0.tsfile
Sketch save path:D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>sketch.txt
<span class="token number">148</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.i.t.c.conf.TSFileDescriptor - not found iotdb-common.properties, use the default configs.
-------------------------------- TsFile Sketch --------------------------------
<span class="token function">file</span> path: D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span><span class="token number">1669359533965</span>-1-0-0.tsfile
<span class="token function">file</span> length: <span class="token number">2974</span>

            POSITION<span class="token operator">|</span>   CONTENT
            --------    -------
                   <span class="token number">0</span><span class="token operator">|</span>   <span class="token punctuation">[</span>magic head<span class="token punctuation">]</span> TsFile
                   <span class="token number">6</span><span class="token operator">|</span>   <span class="token punctuation">[</span>version number<span class="token punctuation">]</span> <span class="token number">3</span>
<span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">|</span> <span class="token punctuation">[</span>Chunk Group<span class="token punctuation">]</span> of root.sg1.d1, num of Chunks:3
                   <span class="token number">7</span><span class="token operator">|</span>   <span class="token punctuation">[</span>Chunk Group Header<span class="token punctuation">]</span>
                    <span class="token operator">|</span>           <span class="token punctuation">[</span>marker<span class="token punctuation">]</span> <span class="token number">0</span>
                    <span class="token operator">|</span>           <span class="token punctuation">[</span>deviceID<span class="token punctuation">]</span> root.sg1.d1
                  <span class="token number">20</span><span class="token operator">|</span>   <span class="token punctuation">[</span>Chunk<span class="token punctuation">]</span> of root.sg1.d1.s1, startTime: <span class="token number">1669359533948</span> endTime: <span class="token number">1669359534047</span> count: <span class="token number">100</span> <span class="token punctuation">[</span>minValue:-9032452783138882770,maxValue:9117677033041335123,firstValue:7068645577795875906,lastValue:-5833792328174747265,sumValue:5.795959009889246E19<span class="token punctuation">]</span>
                    <span class="token operator">|</span>           <span class="token punctuation">[</span>chunk header<span class="token punctuation">]</span> <span class="token assign-left variable">marker</span><span class="token operator">=</span><span class="token number">5</span>, <span class="token assign-left variable">measurementID</span><span class="token operator">=</span>s1, <span class="token assign-left variable">dataSize</span><span class="token operator">=</span><span class="token number">864</span>, <span class="token assign-left variable">dataType</span><span class="token operator">=</span>INT64, <span class="token assign-left variable">compressionType</span><span class="token operator">=</span>SNAPPY, <span class="token assign-left variable">encodingType</span><span class="token operator">=</span>RLE
                    <span class="token operator">|</span>           <span class="token punctuation">[</span>page<span class="token punctuation">]</span>  UncompressedSize:862, CompressedSize:860
                 <span class="token number">893</span><span class="token operator">|</span>   <span class="token punctuation">[</span>Chunk<span class="token punctuation">]</span> of root.sg1.d1.s2, startTime: <span class="token number">1669359533948</span> endTime: <span class="token number">1669359534047</span> count: <span class="token number">100</span> <span class="token punctuation">[</span>minValue:-8806861312244965718,maxValue:9192550740609853234,firstValue:1150295375739457693,lastValue:-2839553973758938646,sumValue:8.2822564314572677E18<span class="token punctuation">]</span>
                    <span class="token operator">|</span>           <span class="token punctuation">[</span>chunk header<span class="token punctuation">]</span> <span class="token assign-left variable">marker</span><span class="token operator">=</span><span class="token number">5</span>, <span class="token assign-left variable">measurementID</span><span class="token operator">=</span>s2, <span class="token assign-left variable">dataSize</span><span class="token operator">=</span><span class="token number">864</span>, <span class="token assign-left variable">dataType</span><span class="token operator">=</span>INT64, <span class="token assign-left variable">compressionType</span><span class="token operator">=</span>SNAPPY, <span class="token assign-left variable">encodingType</span><span class="token operator">=</span>RLE
                    <span class="token operator">|</span>           <span class="token punctuation">[</span>page<span class="token punctuation">]</span>  UncompressedSize:862, CompressedSize:860
                <span class="token number">1766</span><span class="token operator">|</span>   <span class="token punctuation">[</span>Chunk<span class="token punctuation">]</span> of root.sg1.d1.s3, startTime: <span class="token number">1669359533948</span> endTime: <span class="token number">1669359534047</span> count: <span class="token number">100</span> <span class="token punctuation">[</span>minValue:-9076669333460323191,maxValue:9175278522960949594,firstValue:2537897870994797700,lastValue:7194625271253769397,sumValue:-2.126008424849926E19<span class="token punctuation">]</span>
                    <span class="token operator">|</span>           <span class="token punctuation">[</span>chunk header<span class="token punctuation">]</span> <span class="token assign-left variable">marker</span><span class="token operator">=</span><span class="token number">5</span>, <span class="token assign-left variable">measurementID</span><span class="token operator">=</span>s3, <span class="token assign-left variable">dataSize</span><span class="token operator">=</span><span class="token number">864</span>, <span class="token assign-left variable">dataType</span><span class="token operator">=</span>INT64, <span class="token assign-left variable">compressionType</span><span class="token operator">=</span>SNAPPY, <span class="token assign-left variable">encodingType</span><span class="token operator">=</span>RLE
                    <span class="token operator">|</span>           <span class="token punctuation">[</span>page<span class="token punctuation">]</span>  UncompressedSize:862, CompressedSize:860
<span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">|</span> <span class="token punctuation">[</span>Chunk Group<span class="token punctuation">]</span> of root.sg1.d1 ends
                <span class="token number">2656</span><span class="token operator">|</span>   <span class="token punctuation">[</span>marker<span class="token punctuation">]</span> <span class="token number">2</span>
                <span class="token number">2657</span><span class="token operator">|</span>   <span class="token punctuation">[</span>TimeseriesIndex<span class="token punctuation">]</span> of root.sg1.d1.s1, tsDataType:INT64, startTime: <span class="token number">1669359533948</span> endTime: <span class="token number">1669359534047</span> count: <span class="token number">100</span> <span class="token punctuation">[</span>minValue:-9032452783138882770,maxValue:9117677033041335123,firstValue:7068645577795875906,lastValue:-5833792328174747265,sumValue:5.795959009889246E19<span class="token punctuation">]</span>
                    <span class="token operator">|</span>           <span class="token punctuation">[</span>ChunkIndex<span class="token punctuation">]</span> <span class="token assign-left variable">offset</span><span class="token operator">=</span><span class="token number">20</span>
                <span class="token number">2728</span><span class="token operator">|</span>   <span class="token punctuation">[</span>TimeseriesIndex<span class="token punctuation">]</span> of root.sg1.d1.s2, tsDataType:INT64, startTime: <span class="token number">1669359533948</span> endTime: <span class="token number">1669359534047</span> count: <span class="token number">100</span> <span class="token punctuation">[</span>minValue:-8806861312244965718,maxValue:9192550740609853234,firstValue:1150295375739457693,lastValue:-2839553973758938646,sumValue:8.2822564314572677E18<span class="token punctuation">]</span>
                    <span class="token operator">|</span>           <span class="token punctuation">[</span>ChunkIndex<span class="token punctuation">]</span> <span class="token assign-left variable">offset</span><span class="token operator">=</span><span class="token number">893</span>
                <span class="token number">2799</span><span class="token operator">|</span>   <span class="token punctuation">[</span>TimeseriesIndex<span class="token punctuation">]</span> of root.sg1.d1.s3, tsDataType:INT64, startTime: <span class="token number">1669359533948</span> endTime: <span class="token number">1669359534047</span> count: <span class="token number">100</span> <span class="token punctuation">[</span>minValue:-9076669333460323191,maxValue:9175278522960949594,firstValue:2537897870994797700,lastValue:7194625271253769397,sumValue:-2.126008424849926E19<span class="token punctuation">]</span>
                    <span class="token operator">|</span>           <span class="token punctuation">[</span>ChunkIndex<span class="token punctuation">]</span> <span class="token assign-left variable">offset</span><span class="token operator">=</span><span class="token number">1766</span>
                <span class="token number">2870</span><span class="token operator">|</span>   <span class="token punctuation">[</span>IndexOfTimerseriesIndex Node<span class="token punctuation">]</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>LEAF_MEASUREMENT
                    <span class="token operator">|</span>           <span class="token operator">&lt;</span>s1, <span class="token number">265</span><span class="token operator"><span class="token file-descriptor important">7</span>&gt;</span>
                    <span class="token operator">|</span>           <span class="token operator">&lt;</span>endOffset, <span class="token number">287</span><span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>
<span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">|</span> <span class="token punctuation">[</span>TsFileMetadata<span class="token punctuation">]</span> begins
                <span class="token number">2891</span><span class="token operator">|</span>   <span class="token punctuation">[</span>IndexOfTimerseriesIndex Node<span class="token punctuation">]</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>LEAF_DEVICE
                    <span class="token operator">|</span>           <span class="token operator">&lt;</span>root.sg1.d1, <span class="token number">287</span><span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>
                    <span class="token operator">|</span>           <span class="token operator">&lt;</span>endOffset, <span class="token number">289</span><span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
                    <span class="token operator">|</span>   <span class="token punctuation">[</span>meta offset<span class="token punctuation">]</span> <span class="token number">2656</span>
                    <span class="token operator">|</span>   <span class="token punctuation">[</span>bloom filter<span class="token punctuation">]</span> bit vector byte array <span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token number">31</span>, <span class="token assign-left variable">filterSize</span><span class="token operator">=</span><span class="token number">256</span>, <span class="token assign-left variable">hashFunctionSize</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">||</span><span class="token operator">|</span> <span class="token punctuation">[</span>TsFileMetadata<span class="token punctuation">]</span> ends
                <span class="token number">2964</span><span class="token operator">|</span>   <span class="token punctuation">[</span>TsFileMetadataSize<span class="token punctuation">]</span> <span class="token number">73</span>
                <span class="token number">2968</span><span class="token operator">|</span>   <span class="token punctuation">[</span>magic tail<span class="token punctuation">]</span> TsFile
                <span class="token number">2974</span><span class="token operator">|</span>   END of TsFile
---------------------------- IndexOfTimerseriesIndex Tree -----------------------------
        <span class="token punctuation">[</span>MetadataIndex:LEAF_DEVICE<span class="token punctuation">]</span>
        └──────<span class="token punctuation">[</span>root.sg1.d1,2870<span class="token punctuation">]</span>
                        <span class="token punctuation">[</span>MetadataIndex:LEAF_MEASUREMENT<span class="token punctuation">]</span>
                        └──────<span class="token punctuation">[</span>s1,2657<span class="token punctuation">]</span>
---------------------------------- TsFile Sketch End ----------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p><ul><li>以&quot;|&quot;为分隔，左边是在TsFile文件中的实际位置，右边是梗概内容。</li><li>&quot;|||||||||||||||||||||&quot;是为增强可读性而添加的导引信息，不是TsFile中实际存储的数据。</li><li>最后打印的&quot;IndexOfTimerseriesIndex Tree&quot;是对TsFile文件末尾的元数据索引树的重新整理打印，便于直观理解，不是TsFile中存储的实际数据。</li></ul>`,13);function l(c,i){return n(),a("div",null,[e(`

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

`),o])}const u=s(t,[["render",l],["__file","TsFile-Sketch-Tool.html.vue"]]);export{u as default};

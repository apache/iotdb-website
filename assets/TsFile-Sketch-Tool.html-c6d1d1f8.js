import{_ as s,o as n,c as a,a as e,f as t}from"./app-d263b843.js";const p={},o=t(`<h1 id="tsfile-sketch-tool" tabindex="-1"><a class="header-anchor" href="#tsfile-sketch-tool" aria-hidden="true">#</a> TsFile Sketch Tool</h1><p>TsFile sketch tool is used to print the content of a TsFile in sketch mode. The location is tools/tsfile/print-tsfile.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><ul><li>For Windows:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.\\print-tsfile-sketch.bat &lt;TsFile path&gt; (&lt;storage path of the output sketch file&gt;) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>For Linux or MacOs:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./print-tsfile-sketch.sh &lt;TsFile path&gt; (&lt;storage path of the output sketch file&gt;) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note: if the storage path of the output sketch file is not set, the default relative path &quot;TsFile_sketch_view.txt&quot; will be used.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Use Windows in this example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-tsfile.bat D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span><span class="token number">1669359533965</span>-1-0-0.tsfile D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>sketch.txt
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanations:</p><ul><li>Separated by &quot;|&quot;, the left is the actual position in the TsFile, and the right is the summary content.</li><li>&quot;||||||||||||||||||||&quot; is the guide information added to enhance readability, not the actual data stored in TsFile.</li><li>The last printed &quot;IndexOfTimerseriesIndex Tree&quot; is a reorganization of the metadata index tree at the end of the TsFile, which is convenient for intuitive understanding, and again not the actual data stored in TsFile.</li></ul>`,13);function l(i,c){return n(),a("div",null,[e(`

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

`),o])}const u=s(p,[["render",l],["__file","TsFile-Sketch-Tool.html.vue"]]);export{u as default};

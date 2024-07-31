import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,e as n}from"./app-Di7yAf7m.js";const l={},t=n(`<h1 id="爬虫实战" tabindex="-1"><a class="header-anchor" href="#爬虫实战"><span>爬虫实战</span></a></h1><h2 id="爬取百度翻译" tabindex="-1"><a class="header-anchor" href="#爬取百度翻译"><span>爬取百度翻译</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> urllib.request</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">url </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;https://fanyi.baidu.com/sug&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">heads </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;User-Agent&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">temKey </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入您要查的单词:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">data </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;kw&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">{</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">temKey</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">data </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> urllib.parse.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">urlencode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(data).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">encode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;utf-8&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># post请求的参数必须进行编码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">request </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> urllib.request.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">Request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">url</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> url,</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> data ,</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">headers</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> heads)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">response </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> urllib.request.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">urlopen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(request)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">content </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> response.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">decode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;utf-8&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> json</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">obj </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> json.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">loads</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(content)</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 把json转换为python对象</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">temDir </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> obj[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;data&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 拿到了键值对 返回的是列表</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> temDir:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> j,k </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">        print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(k)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">        print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h=[t];function e(k,p){return a(),i("div",null,h)}const A=s(l,[["render",e],["__file","爬虫实战.html.vue"]]),B=JSON.parse(`{"path":"/blogs/%E5%90%8E%E7%AB%AF/%E7%88%AC%E8%99%AB%E5%AE%9E%E6%88%98.html","title":"爬虫案列","lang":"zh-CN","frontmatter":{"title":"爬虫案列","tag":["爬虫"],"category":["后端"],"description":"爬虫实战 爬取百度翻译","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/%E5%90%8E%E7%AB%AF/%E7%88%AC%E8%99%AB%E5%AE%9E%E6%88%98.html"}],["meta",{"property":"og:site_name","content":"菜鸟拯救世界"}],["meta",{"property":"og:title","content":"爬虫案列"}],["meta",{"property":"og:description","content":"爬虫实战 爬取百度翻译"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-31T13:58:29.000Z"}],["meta",{"property":"article:author","content":"菜鸟拯救世界"}],["meta",{"property":"article:tag","content":"爬虫"}],["meta",{"property":"article:modified_time","content":"2024-07-31T13:58:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"爬虫案列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-31T13:58:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"菜鸟拯救世界\\",\\"url\\":\\"#\\"}]}"]]},"headers":[{"level":2,"title":"爬取百度翻译","slug":"爬取百度翻译","link":"#爬取百度翻译","children":[]}],"git":{"createdTime":1722434309000,"updatedTime":1722434309000,"contributors":[{"name":"wzy9858","email":"wzy9858@qq.com","commits":1}]},"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"blogs/后端/爬虫实战.md","localizedDate":"2024年7月31日","excerpt":"\\n<h2>爬取百度翻译</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> urllib.request</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">url </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"https://fanyi.baidu.com/sug\\"</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">heads </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">    \\"User-Agent\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0\\"</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">temKey </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> str</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">input</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"请输入您要查的单词:\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">))</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">data </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">    'kw'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">f</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">{</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">temKey</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">}</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">data </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> urllib.parse.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">urlencode</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(data).</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">encode</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'utf-8'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># post请求的参数必须进行编码</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">request </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> urllib.request.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">Request</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">url</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> url,</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">data</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> data ,</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">headers</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> heads)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">response </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> urllib.request.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">urlopen</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(request)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">content </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> response.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">read</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">().</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">decode</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"utf-8\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> json</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">obj </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> json.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">loads</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(content)</span><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 把json转换为python对象</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">temDir </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> obj[</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'data'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">]</span><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 拿到了键值对 返回的是列表</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">for</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> i </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">in</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> temDir:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    for</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> j,k </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">in</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> i.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">items</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">():</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">        print</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(k)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">        print</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">()</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{A as comp,B as data};

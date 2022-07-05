import{_ as s,c as n,o as a,a as l}from"./app.ca148866.js";const C=JSON.parse('{"title":"@obewds/tw-bg-palette-monochromatic Tests","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"Testing Status","slug":"testing-status"},{"level":2,"title":"Vitest Tests","slug":"vitest-tests"}],"relativePath":"tests.md"}'),p={name:"tests.md"},o=l(`<h1 id="obewds-tw-bg-palette-monochromatic-tests" tabindex="-1">@obewds/tw-bg-palette-monochromatic Tests <a class="header-anchor" href="#obewds-tw-bg-palette-monochromatic-tests" aria-hidden="true">#</a></h1><h2 id="testing-status" tabindex="-1">Testing Status <a class="header-anchor" href="#testing-status" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">CURRENT STATUS</p><p><strong>100%</strong> Coverage<br><strong>100%</strong> Passing</p></div><h2 id="vitest-tests" tabindex="-1">Vitest Tests <a class="header-anchor" href="#vitest-tests" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./tests/TwBgPaletteMonochromatic.test.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">twBgPaletteMonochromatic</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../src/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">twBgPaletteMonochromatic component returns a truthy value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteMonochromatic</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">twBgPaletteMonochromatic.monochromatic component returns an object with a truthy monochromatic property</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteMonochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">monochromatic</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">twBgPaletteMonochromatic.monochromatic.colors component returns an object with a truthy colors property</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteMonochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">monochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">twBgPaletteMonochromatic component returns an object with the standard five default color names</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteMonochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">monochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteMonochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">monochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteMonochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">monochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteMonochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">monochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">secondary</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteMonochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">monochromatic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div>`,5),e=[o];function t(c,r,y,F,D,i){return a(),n("div",null,e)}var m=s(p,[["render",t]]);export{C as __pageData,m as default};

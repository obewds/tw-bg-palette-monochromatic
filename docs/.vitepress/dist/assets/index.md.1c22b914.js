import{_ as n,c as s,o as a,a as t}from"./app.ea4c9958.js";const m='{"title":"@obewds/tw-bg-palette-monochromatic","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Object Schema","slug":"object-schema"},{"level":2,"title":"Use Example","slug":"use-example"},{"level":2,"title":"Uninstall","slug":"uninstall"}],"relativePath":"index.md"}',e={},p=t(`<h1 id="obewds-tw-bg-palette-monochromatic" tabindex="-1">@obewds/tw-bg-palette-monochromatic <a class="header-anchor" href="#obewds-tw-bg-palette-monochromatic" aria-hidden="true">#</a></h1><p>Welcome to the docs page for OBE:WDS&#39;s <code>twBgPaletteMonochromatic</code> component for <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>!</p><br><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> <span class="token function">install</span> @obewds/tw-bg-palette-monochromatic --save-dev
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><br><h2 id="object-schema" tabindex="-1">Object Schema <a class="header-anchor" href="#object-schema" aria-hidden="true">#</a></h2><p>The object returned when importing Tailwind CSS background monochromatic color palette has the following schema:</p><div class="language-javascript line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;monochromatic&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;default&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;error&#39;</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;primary&#39;</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;secondary&#39;</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;success&#39;</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><br><h2 id="use-example" tabindex="-1">Use Example <a class="header-anchor" href="#use-example" aria-hidden="true">#</a></h2><div class="language-html line-numbers-mode"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

    <span class="token keyword">import</span> <span class="token punctuation">{</span> twBgPaletteMonochromatic <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/tw-bg-palette-monochromatic&#39;</span>

    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">bgClasses</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span> twBgPaletteMonochromatic<span class="token punctuation">.</span>monochromatic<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>primary<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bgClasses<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ bgClasses }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="uninstall" tabindex="-1">Uninstall <a class="header-anchor" href="#uninstall" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> uninstall @obewds/tw-bg-palette-monochromatic
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,14),o=[p];function l(r,c,i,u,b,k){return a(),s("div",null,o)}var h=n(e,[["render",l]]);export{m as __pageData,h as default};

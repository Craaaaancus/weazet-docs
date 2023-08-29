import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.8448297c.js";const u=JSON.parse('{"title":"Пасадка на месяц","description":"","frontmatter":{"prev":{"text":"Гульні","link":"./games"},"next":false},"headers":[],"relativePath":"by/moonlander.md","filePath":"by/moonlander.md"}'),p={name:"by/moonlander.md"},o=l(`<h1 id="пасадка-на-месяц" tabindex="-1">Пасадка на месяц <a class="header-anchor" href="#пасадка-на-месяц" aria-label="Permalink to &quot;Пасадка на месяц&quot;">​</a></h1><p>Пасадка на Месяц - гульня для двух розных алгарытмаў. Кожны алгарытм кіруе пасадачнай капсулай, якую трэба мякка пасадзіць на Месяц. У пачатковы момант часу капсула завісае над паверхняй Месяца на некаторай зададзенай вышыні. Капсула прыцягваецца да паверхні Месяца, і для таго, каб прадухіліць падзенне капсулы, выкарыстоўваецца тармазной рухавік. Для ажыццяўлення мяккай пасадкі на хуткасці не больш за 2 м/с неабходна на кожным кроку гульні задаваць выдатак паліва на чарговую. секунду палёту.</p><p>Выйграе гулец, які здзейсніў мяккую пасадку за найменшы час. Нічыя магчымая ў двух выпадках: абедзве капсулы разбіліся (хуткасць пасадкі больш за 2 м / с) або абедзве капсулы мякка прытуліліся на адным і тым жа ходу.</p><h2 id="алгарытм" tabindex="-1">Алгарытм <a class="header-anchor" href="#алгарытм" aria-label="Permalink to &quot;Алгарытм&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-LGZlF" id="tab-leaThw0" checked="checked"><label for="tab-leaThw0">pascal</label><input type="radio" name="group-LGZlF" id="tab-YcNizhc"><label for="tab-YcNizhc">cpp</label><input type="radio" name="group-LGZlF" id="tab--KO-jUA"><label for="tab--KO-jUA">python</label></div><div class="blocks"><div class="language-pascal vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">pascal</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">program</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">{name of the program}</span></span>
<span class="line"><span style="color:#F97583;">uses</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">{comma delimited names of libraries you use}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">{global constant declaration block}</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">{global variable declaration block}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">function </span><span style="color:#6A737D;">{function declarations, if any}</span></span>
<span class="line"><span style="color:#6A737D;">{ local variables }</span></span>
<span class="line"><span style="color:#F97583;">begin</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#F97583;">end</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">procedure </span><span style="color:#6A737D;">{ procedure declarations, if any}</span></span>
<span class="line"><span style="color:#6A737D;">{ local variables }</span></span>
<span class="line"><span style="color:#F97583;">begin</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#F97583;">end</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">begin</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">{ main program block starts}</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#F97583;">end</span><span style="color:#E1E4E8;">. </span><span style="color:#6A737D;">{ the end of main program block }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">program</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">{name of the program}</span></span>
<span class="line"><span style="color:#D73A49;">uses</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">{comma delimited names of libraries you use}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">{global constant declaration block}</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">{global variable declaration block}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">function </span><span style="color:#6A737D;">{function declarations, if any}</span></span>
<span class="line"><span style="color:#6A737D;">{ local variables }</span></span>
<span class="line"><span style="color:#D73A49;">begin</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#D73A49;">end</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">procedure </span><span style="color:#6A737D;">{ procedure declarations, if any}</span></span>
<span class="line"><span style="color:#6A737D;">{ local variables }</span></span>
<span class="line"><span style="color:#D73A49;">begin</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#D73A49;">end</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">begin</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">{ main program block starts}</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#D73A49;">end</span><span style="color:#24292E;">. </span><span style="color:#6A737D;">{ the end of main program block }</span></span></code></pre></div><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Hello World!&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Hello World!&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fib</span><span style="color:#E1E4E8;">(n):</span></span>
<span class="line"><span style="color:#E1E4E8;">    a, b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(a, </span><span style="color:#FFAB70;">end</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        a, b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> b, a</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">b</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">fib(</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fib</span><span style="color:#24292E;">(n):</span></span>
<span class="line"><span style="color:#24292E;">    a, b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> n:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(a, </span><span style="color:#E36209;">end</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        a, b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> b, a</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">b</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">fib(</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">)</span></span></code></pre></div></div></div>`,5),e=[o];function c(t,r,i,y,E,d){return a(),n("div",null,e)}const F=s(p,[["render",c]]);export{u as __pageData,F as default};

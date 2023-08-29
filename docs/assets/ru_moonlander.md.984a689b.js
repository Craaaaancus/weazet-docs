import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.8448297c.js";const u=JSON.parse('{"title":"Посадка на луну","description":"","frontmatter":{"prev":{"text":"Игры","link":"./games"},"next":false},"headers":[],"relativePath":"ru/moonlander.md","filePath":"ru/moonlander.md"}'),p={name:"ru/moonlander.md"},o=l(`<h1 id="посадка-на-луну" tabindex="-1">Посадка на луну <a class="header-anchor" href="#посадка-на-луну" aria-label="Permalink to &quot;Посадка на луну&quot;">​</a></h1><p>Посадка на Луну – игра для двух разных алгоритмов. Каждый алгоритм управляет посадочной капсулой, которую нужно мягко посадить на Луну. В начальный момент времени капсула зависает над поверхностью Луны на некоторой заданной высоте. Капсула притягивается к поверхности Луны, и для того, чтобы предотвратить падение капсулы, используется тормозной двигатель. Для осуществления мягкой посадки на скорости не более 2 м/с необходимо на каждом шаге игры задавать расход топлива на очередную секунду полета.</p><p>Выигрывает игрок, совершивший мягкую посадку за наименьшее время. Ничья возможна в двух случаях: обе капсулы разбились (скорость посадки больше 2 м/с) или обе капсулы мягко прилунились на одном и том же ходу.</p><h2 id="алгоритм" tabindex="-1">Алгоритм <a class="header-anchor" href="#алгоритм" aria-label="Permalink to &quot;Алгоритм&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-aWRmT" id="tab-sVPDtXn" checked="checked"><label for="tab-sVPDtXn">pascal</label><input type="radio" name="group-aWRmT" id="tab-YdPCjov"><label for="tab-YdPCjov">cpp</label><input type="radio" name="group-aWRmT" id="tab-CwqdNs8"><label for="tab-CwqdNs8">python</label></div><div class="blocks"><div class="language-pascal vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">pascal</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">program</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">{name of the program}</span></span>
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
<span class="line"><span style="color:#24292E;">fib(</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">)</span></span></code></pre></div></div></div>`,5),e=[o];function c(t,r,i,y,E,d){return a(),n("div",null,e)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};

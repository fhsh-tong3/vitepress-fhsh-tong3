import{_ as a,c as s,o as e,a2 as n}from"./chunks/framework.D1hlZQ02.js";const u=JSON.parse('{"title":"2024年1月31日筆記","description":"","frontmatter":{},"headers":[],"relativePath":"1-31notes.md","filePath":"1-31notes.md"}'),p={name:"1-31notes.md"},t=n(`<h1 id="_2024年1月31日筆記" tabindex="-1">2024年1月31日筆記 <a class="header-anchor" href="#_2024年1月31日筆記" aria-label="Permalink to &quot;2024年1月31日筆記&quot;">​</a></h1><p>主要教學內容：如何安裝git , node.js &amp; npm , homebrew , vitepress...</p><h2 id="homebrew" tabindex="-1">homebrew <a class="header-anchor" href="#homebrew" aria-label="Permalink to &quot;homebrew&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>step1在終端機輸入 : /bin/bash -c “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)”</span></span>
<span class="line"><span></span></span>
<span class="line"><span>step2 : 輸入電腦密碼</span></span>
<span class="line"><span></span></span>
<span class="line"><span>step3 : 出現「Next Steps:…………….」就是安裝完畢，就可以用[brew]測試</span></span>
<span class="line"><span></span></span>
<span class="line"><span>step4 : 若輸入brew後出現「zsh: command not fount: brew」則分別輸入</span></span>
<span class="line"><span>        *export PATH=/opt/homebrew/bin:$PATH*</span></span>
<span class="line"><span>        *export PATH=/opt/homebrew/sbin:$PATH*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>step5 : 輸完以上兩小指令後在輸入 -&gt; brew install cask</span></span>
<span class="line"><span></span></span>
<span class="line"><span>*補充 : 未來升級homebrew可使用：brew update 或 brew upgrade</span></span></code></pre></div><h2 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;git&quot;">​</a></h2><p>Homebrew Install homebrew if you don&#39;t already have it, then:</p><p><code>$ brew install git</code></p><p>Install MacPorts if you don&#39;t already have it, then:</p><p><code>$ sudo port install git</code></p><p>If you would like to install git-gui and gitk, git&#39;s commit GUI and interactive history browser, you can do so using homebrew</p><p><code>$ brew install git-gui</code></p><p>如何測試是否在本機成功下載git?(在終端機中輸入以下文字)</p><p><code>$ git --version</code></p><h2 id="node-js-npm" tabindex="-1">node.js &amp; npm <a class="header-anchor" href="#node-js-npm" aria-label="Permalink to &quot;node.js &amp; npm&quot;">​</a></h2><p>step1 <code>到node.js官方網站中下載 20.11.0 LTS版本</code></p><p>step2 安裝成功後到終端幾使用which查看是否安裝成功</p><p><code>$ which npm</code></p><p><code>$ which node</code></p><p>step3 接著在終端機中輸入</p><p><code>$ npm</code><code>$ npm init</code></p><p><code>$ node</code></p><p>以上做完就大功告成</p><h2 id="vitepress" tabindex="-1">vitepress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;vitepress&quot;">​</a></h2><p>step1 <code>npm i -D vitepress</code> 等它跑完</p><p>step2 <code>建資料夾 docs</code></p><p>step3 <code>npx vitepress init</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>┌  Welcome to VitePress!</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Where should VitePress initialize the config?</span></span>
<span class="line"><span>│  ./docs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site title:</span></span>
<span class="line"><span>│  My Awesome Project</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site description:</span></span>
<span class="line"><span>│  A VitePress Site</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◆  Theme:</span></span>
<span class="line"><span>│  ● Default Theme (Out of the box, good-looking docs)</span></span>
<span class="line"><span>│  ○ Default Theme + Customization</span></span>
<span class="line"><span>│  ○ Custom Theme</span></span>
<span class="line"><span>└</span></span>
<span class="line"><span> Use TypeScript for config and theme files?</span></span>
<span class="line"><span>│  ○ Yes / ● No</span></span>
<span class="line"><span>Add VitePress npm scripts to package.json?</span></span>
<span class="line"><span>│  ● Yes / ○ No</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└  Done! Now run npm run docs:dev and start writing.</span></span></code></pre></div><h2 id="gitignore" tabindex="-1">.gitignore <a class="header-anchor" href="#gitignore" aria-label="Permalink to &quot;.gitignore&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>*.DS_Store*</span></span>
<span class="line"><span>node_modules</span></span>
<span class="line"><span>docs/.vitepress/dist</span></span>
<span class="line"><span>docs/.vitepress/cache</span></span>
<span class="line"><span>#package-lock.json(可留不留)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.gitignore 不會更新在git我們版本控制中；之後決定不更新也只也有後面的不更新（建議前面就加入版本控制中）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>commit(把東西拿給管理員) add(把要放的東西跟管理員說)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sync changes 把東西上傳到github</span></span></code></pre></div><h2 id="補充" tabindex="-1">補充 <a class="header-anchor" href="#補充" aria-label="Permalink to &quot;補充&quot;">​</a></h2><h4 id="html-hypertext-markup-language" tabindex="-1">html-&gt;HyperText Markup Language <a class="header-anchor" href="#html-hypertext-markup-language" aria-label="Permalink to &quot;html-&gt;HyperText Markup Language&quot;">​</a></h4><h4 id="markdown-格式" tabindex="-1">Markdown 格式 <a class="header-anchor" href="#markdown-格式" aria-label="Permalink to &quot;Markdown 格式&quot;">​</a></h4><h4 id="html-語言" tabindex="-1">Html 語言 <a class="header-anchor" href="#html-語言" aria-label="Permalink to &quot;Html 語言&quot;">​</a></h4><h4 id="vue-vitepress-框架" tabindex="-1">Vue &amp; vitepress 框架 <a class="header-anchor" href="#vue-vitepress-框架" aria-label="Permalink to &quot;Vue &amp; vitepress 框架&quot;">​</a></h4><h4 id="下載vitepress裝之前要先裝好-node-js-homebrew-git-npm" tabindex="-1">＊下載vitepress裝之前要先裝好 node.js , homebrew , git , npm <a class="header-anchor" href="#下載vitepress裝之前要先裝好-node-js-homebrew-git-npm" aria-label="Permalink to &quot;＊下載vitepress裝之前要先裝好 node.js , homebrew , git , npm&quot;">​</a></h4><h2 id="link" tabindex="-1">link <a class="header-anchor" href="#link" aria-label="Permalink to &quot;link&quot;">​</a></h2><ul><li><p>官方資料 <a href="https://vitepress.qzxdp.cn/guide/deploy.html" target="_blank" rel="noreferrer">vitepress_link</a> , <a href="https://vercel.com/newtongs-projects-231c8361" target="_blank" rel="noreferrer">vercel_link</a> , <a href="https://nodejs.org/en?source=post_page-----3d7101d998f4--------------------------------" target="_blank" rel="noreferrer">node.js</a></p></li><li><p>語法教學 <a href="https://hackmd.io/@eMP9zQQ0Qt6I8Uqp2Vqy6w/SyiOheL5N/%2FBVqowKshRH246Q7UDyodFA?type=book" target="_blank" rel="noreferrer">markdown</a></p></li><li><p>知識補充 <a href="https://tw.alphacamp.co/blog/git-github-version-control-guide" target="_blank" rel="noreferrer">Git和Github差別</a></p></li><li><p>下載教程 <a href="https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-Git-%E5%AE%89%E8%A3%9D%E6%95%99%E5%AD%B8" target="_blank" rel="noreferrer">Git-安裝教學</a> , <a href="https://h9856.gameqb.net/mac-homebrew/%22%22" target="_blank" rel="noreferrer">Homebrew</a> , <a href="https://medium.com/@1chooo/%E5%A6%82%E4%BD%95%E5%9C%A8-mac-%E5%AE%89%E8%A3%9D-node-js-npm-3d7101d998f4" target="_blank" rel="noreferrer">npm &amp; node.js</a></p></li></ul>`,38),i=[t];function o(l,r,c,h,d,m){return e(),s("div",null,i)}const b=a(p,[["render",o]]);export{u as __pageData,b as default};

import{_ as a,c as l,o as e,a5 as i}from"./chunks/framework.DwbewbAn.js";const w=JSON.parse('{"title":"涼槿 Ryokin","description":"","frontmatter":{},"headers":[],"relativePath":"documents/涼槿Ryokin.md","filePath":"documents/涼槿Ryokin.md","lastUpdated":null}'),o={name:"documents/涼槿Ryokin.md"},r=i('<h1 id="涼槿-ryokin" tabindex="-1">涼槿 Ryokin <a class="header-anchor" href="#涼槿-ryokin" aria-label="Permalink to &quot;涼槿 Ryokin&quot;">​</a></h1><p>一个Chromium内核的轻简浏览器，<em>但并不推荐使用</em></p><h2 id="项目主页" tabindex="-1"><a href="https://ryokin.qqzhi.cc/" target="_blank" rel="noreferrer">项目主页</a> <a class="header-anchor" href="#项目主页" aria-label="Permalink to &quot;[项目主页](https://ryokin.qqzhi.cc/)&quot;">​</a></h2><h2 id="待更新内容-快速迭代中" tabindex="-1">待更新内容 (快速迭代中) <a class="header-anchor" href="#待更新内容-快速迭代中" aria-label="Permalink to &quot;待更新内容 (快速迭代中)&quot;">​</a></h2><ul><li>TypeScript逻辑重构</li><li>架构性能优化</li><li>版本热更新</li><li>完整的浏览器功能（历史、收藏等）</li><li>设置菜单</li><li>预热启动支持</li></ul><h2 id="更新日志" tabindex="-1">更新日志 <a class="header-anchor" href="#更新日志" aria-label="Permalink to &quot;更新日志&quot;">​</a></h2><h4 id="_23w23a-2023-6-1-v0-0-0" tabindex="-1">23w23a [2023.6.1 - v0.0.0] <a class="header-anchor" href="#_23w23a-2023-6-1-v0-0-0" aria-label="Permalink to &quot;23w23a [2023.6.1 - v0.0.0]&quot;">​</a></h4><ol><li>能用，此外没有优点</li><li>在一片虚无中开辟了一片<code>webview</code>，从此这个<code>Electron</code>项目成为了一只朴实无华的浏览器</li><li>此外：还是一片虚无</li></ol><h4 id="_23w24a-2023-6-6-v0-0-1-0" tabindex="-1">23w24a [2023.6.6 - v0.0.1-0] <a class="header-anchor" href="#_23w24a-2023-6-6-v0-0-1-0" aria-label="Permalink to &quot;23w24a [2023.6.6 - v0.0.1-0]&quot;">​</a></h4><ol><li>开始构建渲染端UI，改头换面</li><li>由<code>Vite+Vue - Element Plus UI</code>构建渲染端，浏览器有了大致的雏形</li><li>添加标签页、地址栏以及相关控件，较为粗糙</li></ol><h4 id="_23w24b-2023-6-6-v0-0-1" tabindex="-1">23w24b [2023.6.6 - v0.0.1] <a class="header-anchor" href="#_23w24b-2023-6-6-v0-0-1" aria-label="Permalink to &quot;23w24b [2023.6.6 - v0.0.1]&quot;">​</a></h4><ol><li>构建框架逻辑，注入灵魂</li><li>优化UI，添加右键菜单功能与<code>unibox</code>地址栏解析模块 - 初步待建</li></ol><h4 id="_23w24c-2023-6-7-v0-1-0" tabindex="-1">23w24c [2023.6.7 - v0.1.0] <a class="header-anchor" href="#_23w24c-2023-6-7-v0-1-0" aria-label="Permalink to &quot;23w24c [2023.6.7 - v0.1.0]&quot;">​</a></h4><ol><li>首个测试构建版本</li><li>优化整体逻辑，添加工具栏与功能栏</li><li><em>你决定给它完整的一生</em></li></ol><h4 id="_23w24d-2023-6-8-v0-1-1-0" tabindex="-1">23w24d [2023.6.8 - v0.1.1-0] <a class="header-anchor" href="#_23w24d-2023-6-8-v0-1-1-0" aria-label="Permalink to &quot;23w24d [2023.6.8 - v0.1.1-0]&quot;">​</a></h4><ol><li>使用<code>TypeScript</code>进行部分重构</li><li>底层重构，它现在是个正常的浏览器了</li></ol><h4 id="_23w24e-2023-6-8-v0-1-1" tabindex="-1">23w24e [2023.6.8 - v0.1.1] <a class="header-anchor" href="#_23w24e-2023-6-8-v0-1-1" aria-label="Permalink to &quot;23w24e [2023.6.8 - v0.1.1]&quot;">​</a></h4><ol><li>首个正式的<em>测试</em>版本，添加命令行支持与窗口资源统一支持</li><li>规范版本控制，完善项目构建</li><li>增加渲染端参数处理</li></ol><h4 id="_23w24f-alpha-2023-6-9-v0-1-2-0" tabindex="-1">23w24f alpha [2023.6.9 - v0.1.2-0] <a class="header-anchor" href="#_23w24f-alpha-2023-6-9-v0-1-2-0" aria-label="Permalink to &quot;23w24f alpha [2023.6.9 - v0.1.2-0]&quot;">​</a></h4><ol><li>增加i18n多语言支持：中文(通用简繁)、English、日本語，应用内跟随系统设置，可通过调试localStorage.lang或renderer/src/languages/i18n.ts调整</li><li>现在对发行版本进行数字签名</li></ol><h4 id="_23w24f-beta-2023-6-9-v0-1-2-1" tabindex="-1">23w24f Beta [2023.6.9 - v0.1.2-1] <a class="header-anchor" href="#_23w24f-beta-2023-6-9-v0-1-2-1" aria-label="Permalink to &quot;23w24f Beta [2023.6.9 - v0.1.2-1]&quot;">​</a></h4><ol><li>引入Chromium扩展支持，这片天地从此熠熠生辉</li><li>完善命令行，添加本地文件(HTML、PDF等格式)的支持</li></ol><h4 id="_23w24f-2023-6-9-v0-1-2" tabindex="-1">23w24f [2023.6.9 - v0.1.2] <a class="header-anchor" href="#_23w24f-2023-6-9-v0-1-2" aria-label="Permalink to &quot;23w24f [2023.6.9 - v0.1.2]&quot;">​</a></h4><ol><li>修复了已知问题，第一个可日用的测试版本</li><li>小范围实测版本</li></ol><h4 id="_23w25a-2023-6-17-v0-1-3-0" tabindex="-1">23w25a [2023.6.17 - v0.1.3-0] <a class="header-anchor" href="#_23w25a-2023-6-17-v0-1-3-0" aria-label="Permalink to &quot;23w25a [2023.6.17 - v0.1.3-0]&quot;">​</a></h4><ol><li>累积更新(网页缩放、二次实例……)，解决了大部分问题，通常作业环境可用</li><li>砍除了32位支持，现在只支持[Win10及以上64位系统]</li><li>现在可以将内容拖拽至新建标签页按钮打开</li><li><s>前方的区域，以后再来探索吧！</s></li></ol>',26),t=[r];function h(n,d,c,s,_,u){return e(),l("div",null,t)}const b=a(o,[["render",h]]);export{w as __pageData,b as default};

import { defineConfig } from 'vitepress'
import index from '../index'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "未名岛",
  titleTemplate: ":title - 旅禾小栈·未名岛",
  description: "旅禾小栈·未名岛静候你的光临，此处存晾着各类闲笔杂章（旅禾 邱泉智的博客文章专栏）",
  cleanUrls: true,
  metaChunk: true,
  mpa: false,
  head:[
    ['link',{rel: 'icon', href: 'https://blog.qqzhi.cc/favicon.ico' }],
    ['meta',{name: 'robots',content:'index,follow'}],
    ['meta',{name: 'keywords',content:'未名岛,邱泉智,旅禾,旅禾小栈,旅禾Tristan,Qiu Quanzhi,博客,blog'}]
  ],
  markdown: {
    math: true
  },
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      ...index.indexs,
      { text: '主站', link: 'https://www.qqzhi.cc/' }
    ],
    
    sidebar: index.getSidebar(),
    socialLinks: [
      { icon: 'x', link: 'https://x.com/RyoineQ' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/qqz/' },
      { icon: 'github', link: 'https://github.com/Qiu-Quanzhi' }
    ],
    footer: {
      message: '<a href="https://blog.qqzhi.cc/">旅禾小栈</a> 所有内容由 <a href="https://www.qqzhi.cc/">旅禾Tristan</a> 创作，并以 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans">CC BY-NC-SA 4.0</a> 协议提供',
      copyright: `© ${new Date(Date.now() + 8 * 60 * 60 * 1000).getUTCFullYear()} <a href="https://www.qqzhi.cc/">旅禾Tristan</a>`
    },
    logo: 'https://blog.qqzhi.cc/favicon.ico',
    siteTitle: '旅禾小栈·未名岛',
    notFound:{
      title: '页面未找到',
      quote: '乘风破浪会有时，直挂云帆济沧海。',
      linkLabel: '返回首页',
      linkText: '返回首页'
    },
    lastUpdated: {
      text: '上次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full'
      }
    },
    aside: true,
    outline: {
      level:"deep",
      label: '目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    langMenuLabel: '语言选项',
    darkModeSwitchLabel: '深色模式',
    darkModeSwitchTitle: '切换到深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到页首',
    search: {
      provider: 'local',
      options:{
        translations:{
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            displayDetails:'展开详情',
            noResultsText: '无法找到相关结果',
            backButtonTitle:'返回',
            resetButtonTitle: '清除',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '选择',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '向上切换',
              navigateDownKeyAriaLabel: '向下切换',
              closeText: '关闭',
              closeKeyAriaLabel: '关闭'
            }
          }
        }
      }
    }
  },
  sitemap: {
    hostname: 'https://blog.qqzhi.cc',
    lastmodDateOnly: true,
    transformItems(items) {
      let list=items.filter((page)=>!index.getIndex().concat('README').includes(page.url))
      // console.log(list)
      for (const iterator of list) {
        iterator.priority=iterator.url==''?1:0.9
        iterator.changefreq='weekly'
      }
      return list
    },
  }
})

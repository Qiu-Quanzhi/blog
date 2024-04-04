import { defineConfig } from 'vitepress'
import index from '../index'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "未名岛",
  titleTemplate: ":title - 旅禾小栈·未名岛",
  description: "存晾各类闲笔杂章，未名岛静候你的光临",
  cleanUrls: true,
  metaChunk: true,
  mpa: false,
  head:[
    ['meta',{name: 'keywords',content:'未名岛,旅禾小栈,邱泉智,旅禾,旅禾Tristan,Tristan Chiu,Qiu Quanzhi'}]
  ],
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
      { icon: 'github', link: 'https://github.com/Qiu-Quanzhi' }
    ],
    footer: {
      message: '未经作者授权，禁止转载',
      copyright: `© ${new Date(Date.now() + 8 * 60 * 60 * 1000).getUTCFullYear()} 旅禾Tristan`
    },
    logo: 'https://www.qqzhi.cc/favicon.ico',
    siteTitle: '旅禾小栈·未名岛',
    notFound:{
      title: '页面未找到',
      quote: '乘风破浪会有时，直挂云帆济沧海。',
      linkLabel: '返回首页',
      linkText: '返回首页'
    },
    lastUpdated: {
      text: '编辑于',
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

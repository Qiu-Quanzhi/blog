import { defineConfig } from 'vitepress'
import content from '../content'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  
  title: "旅禾小栈",
  titleTemplate: ":title - 未名岛",
  description: " ",
  cleanUrls: true,
  metaChunk: true,
  mpa: false,
  head:[],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '始序阁', link: '/articles' },
      { text: '暇造坊', link: '/documents' },
      { text: '主站', link: 'https://www.qqzhi.cc/' }
    ],
    
    sidebar: {
      '/articles/':[{
        text: '始序阁',
        items: content.get('articles')
      }],
      '/documents/':[{
        text: '暇造坊',
        items: content.get('documents')
      }]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qiu-Quanzhi' }
    ],
    footer: {
      message: '未经作者授权，禁止转载',
      copyright: `© ${new Date(Date.now() + 8 * 60 * 60 * 1000).getFullYear()} 旅禾Tristan`
    },
    logo: 'https://www.qqzhi.cc/favicon.ico',
    siteTitle: '旅禾小栈·未名岛',
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
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
    lastmodDateOnly: true
  }
})

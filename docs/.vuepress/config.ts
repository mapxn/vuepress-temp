import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'VuePress模板',
    description: '这是我的第一个 VuePress 站点',
    base: '/vuepress-temp/',
    theme: defaultTheme({
        docsRepo: 'https://github.com/mapxn/vuepress-temp',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        editLinkText: '在Github上编辑',
        lastUpdated: true,
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '指南',
                link: '/guide/'
            },
            {
                text: '参考',
                link: '/reference/'
            }
        ],
        sidebar: {
            '/': [
                {
                    text: '介绍',
                    link: '/',
                },
            ],
            '/guide/': [
                {
                    text: '指南',
                    children: [
                        {
                            text: '准备工作',
                            link: '/guide/README.md'
                        },
                        {
                            text: '快速开始',
                            link: '/guide/getting-started.md'
                        }
                    ],
                },
            ],
            '/reference/': [
                {
                    text: '参考',
                    children: ['/reference/cli.md', '/reference/config.md'],
                },
            ],
        }
    })
})
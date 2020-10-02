module.exports = {
    plugins: [['vuepress-plugin-code-copy', true]],
    locales: {
        '/': {
            lang: 'en', // 将会被设置为 <html> 的 lang 属性
            title: 'Pygros',
            description: 'An open-source fanmade chart emulator of rhythm game Phigros.'
        },
        '/zh/': {
            lang: 'zh-Hans',
            title: 'Pygros',
            description: 'Phigros 饭制谱模拟器'
        }
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: 'AsakuraMizu/pygros',
        displayAllHeaders: true,
        sidebarDepth: 2,
        locales: {
            '/': {
                selectText: '选择语言',
                label: 'English',
                lastUpdated: 'Last Updated',
                repoLabel: 'View on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                },
                nav: [
                    { text: 'Guide', link: '/guide/' },
                    { text: 'API', link: '/api' },
                ],
                sidebar: {
                    '/guide/': [
                        '',
                        'prepare',
                        'advanced-guide',
                    ]
                }
            },
            '/zh/': {
                selectText: 'Languages',
                label: '简体中文',
                lastUpdated: '上次更新',
                repoLabel: '在 GitHub 上查看源码',
                serviceWorker: {
                    updatePopup: {
                        message: '发现新内容可用.',
                        buttonText: '刷新'
                    }
                },
                nav: [
                    { text: '指南', link: '/zh/guide/' },
                    { text: 'API', link: '/zh/api' },
                ],
                sidebar: {
                    '/zh/guide/': [
                        '',
                        'prepare',
                        'demo',
                        'charting',
                        'advanced-guide',
                    ]
                }
            }
        }
    }
}

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "精神科维基 / Psychiatric Wiki",
  description: "一个旨在于揭露批判现行精神科医疗体制并为社群自助的精神医学支持提供支援的维基 / A wiki dedicated to exposing and critiquing the current psychiatric healthcare system and providing support for community",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
/*
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
*/
    socialLinks: [
      { icon: 'github', link: 'https://github.com/psychiatric-wiki/' }
    ]

  }
})

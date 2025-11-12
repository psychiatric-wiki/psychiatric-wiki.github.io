import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "精神科维基 / Psychiatric Wiki",
  description: "因着对现行精神科医疗体系弊端的窥视而能够对急需适当的精神科医疗支持而不得的群体提供有关于进行他们自己的精神科医疗自救的支持的维基",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar: [
      {
        text: '现在的精神科医疗体系是什么样的？',
        link: '/expose-and-criticize',
        items: [
          {
            text: '材料',
            items: [
              { text: '一位跨性别分裂情感性障碍患者在上海市精神卫生中心住院的口述史', link: '/expose/litz-tsong' },
              { text: '一位作曲者在上海精神科住院相关的作品创作', link: '/expose/indie-hospital' }
            ]
          },
          {
            text: '评析',
            items: [
              { text: '精神科医患的对立隔离与藐视漠视', link: '/criticize/isolation' },
              { text: '精神科住院患者的非人化', link: '/criticize/dehumanization' },
              { text: '精神科教育的不可靠与受漠视', link: '/criticize/education' },
              { text: '精神科治疗的保守漠视与傲慢', link: '/criticize/conservative' },
              { text: '精神科心理治疗的无效', link: '/criticize/psychotherapy' },
              { text: '精神科的残害人金钱导向', link: '/criticize/financial' },
              { text: '精神科住院对社会功能的漠视', link: '/criticize/socialfunction' },
              { text: '精神科现行医疗体系评析综述', link: '/criticize/general' }
            ]
          }
        ]
      },
      {
        text: "在这样的状况下我们怎么才能取得适当的精神科医疗？",
        link: '/road-lead-of-self-support',
        items: [
          {
            text: '基础',
            items: [
              { text: '避开我们早已观察到的这样那样的弊病', link: '/basis/avoid' },
              { text: '精神病学基础', link: '/basis/psychiatry' },
              { text: '精神药理学基础', link: '/basis/psychopharmacology' }
            ]
          },
          {
            text: '重症护理',
            items: [

            ]
          },
          {
            text: '危机干预',
            items: [

            ]
          },
          {
            text: '康复',
            items: [

            ]
          }
        ]
      },
      { text: "帮助或直接参与本站的编写！", link: '/take-your-part-in', },
      { text: "本站的大致愿望以及关于本站的一些基本信息", link: '/general-discussion-and-about-us', }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/psychiatric-wiki/' }
    ]
  }
})

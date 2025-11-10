import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "精神科维基",
  description: "在对现行精神科医疗体系弊端的批评的同时为急需精神科医疗支持而在现行精神科医疗体系下难得的群体提供提供精神医学自救的支持的维基",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar: [
      {
        text: '精神科医疗现状分析',
        link: '/expose-and-criticize',
        items: [
          {
            text: '就医经历与案例分享',
            items: [
              { text: '一位跨性别分裂情感性障碍患者的住院经历分享', link: '/exposing/litz-tsong' }
            ]
          },
          {
            text: '医疗体系运作现状',
            items: [
              { text: '精神科医师培育体系的现状与挑战', link: '/critiquing/useless-psychiatric-education' },
              { text: '门诊药物治疗体系的现状与改进空间', link: '/critiquing/conservative-outpatient-medication' },
              { text: '心理治疗体系的现状与发展方向', link: '/critiquing/meaningless-persecutory-psychotherapy' },
              { text: '精神科医疗收费体系现状分析', link: '/critiquing/psychiatric-financial-persecution' },
              { text: '住院治疗体系对社会功能的关注度', link: '/critiquing/inpatient-social-ignoring' },
              { text: '精神医疗体系的社会角色探讨', link: '/critiquing/politicization-psychiatric' },
              { text: '精神科医疗体系现状综述', link: '/critiquing/general-theory' }
            ]
          }
        ]
      },
      {
        text: "精神健康自助指南",
        link: '/road-lead-of-self-support',
        items: [
          { text: '指南概述', link: '/selfsupport/perface' },
          {
            text: '基础知识学习',
            items: [
              {
                text: '生物学与医学基础',
                items: [
                ]
              },
              {
                text: '认知神经科学基础',
                items: [
                ]
              },
              {
                text: '精神医学基础知识',
                items: [
                  { text: '人卫精神病学教材', link: '/' },
                  { text: '开源精神医学教程', link: '/' }
                ]
              },
              {
                text: '精神药物基础知识',
                items: [
                  { text: 'Stahl精神药理学精要', link: '/' }
                ]
              },
              {
                text: '心理支持基础知识',
                items: [
                ]
              },
              {
                text: '精神科就医指南',
                items: [
                ]
              }
            ]
          },
          {
            text: '科学有效的治疗方案',
            items: [

            ]
          },
          {
            text: '心理危机干预指南',
            items: [

            ]
          },
          {
            text: '药物使用安全指南',
            items: [

            ]
          },
          {
            text: '抑郁症康复指南',
            items: [

            ]
          }
        ]
      },
      {
        text: "加入我们",
        link: '/take-your-part-in',
        items: [
          { text: '分享就医经验与建议', link: '/takepartin/experience-idea' },
          { text: '提供医疗资源信息', link: '/takepartin/medical-plans' },
          { text: '参与医疗现状分析编写', link: '/takepartin/exposing-critiquing' },
          { text: '参与自助指南编写', link: '/takepartin/self-supporting' }
        ]
      },
      { text: "关于我们", link: '/general-discussion-and-about-us', }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/psychiatric-wiki/' }
    ]

  }
})

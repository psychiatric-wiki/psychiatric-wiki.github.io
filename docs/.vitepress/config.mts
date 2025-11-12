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
              { text: '一位跨性别分裂情感性障碍患者在上海市精神卫生中心住院的口述史', link: '/exposing/litz-tsong' },
              { text: '一位作曲者在上海精神科住院相关的作品创作', link: '/exposing/indie-hospital' }
            ]
          },
          {
            text: '评析',
            items: [
              { text: '精神科医师培育体系的现状与挑战', link: '/critiquing/useless-psychiatric-education' },
              { text: '门诊药物治疗体系的现状与改进空间', link: '/critiquing/conservative-outpatient-medication' },
              { text: '心理治疗体系的现状与发展方向', link: '/critiquing/meaningless-persecutory-psychotherapy' },
              { text: '精神科医疗收费体系现状分析', link: '/critiquing/psychiatric-financial-persecution' },
              { text: '住院治疗体系对社会功能的关注度', link: '/critiquing/inpatient-social-ignoring' },
              { text: '精神医疗体系社会角色探讨', link: '/critiquing/politicization-psychiatric' },
              { text: '精神科医疗体系现状综述', link: '/critiquing/general-theory' }
            ]
          }
        ]
      },
      {
        text: "在这样的状况下我们怎么才能取得适当的精神科医疗？",
        link: '/road-lead-of-self-support',
        items: [
          { text: '避开我们早已观察到的这样那样的弊病', link: '/selfsupport/' },
          {
            text: '基础知识学习',
            items: [
              { text: '精神疾病基础知识', link: '/selfsupport/basic-knowledge' },
              { text: '常用精神科药物介绍', link: '/selfsupport/common-medications' },
              { text: '精神科就医流程指南', link: '/selfsupport/medical-process' }
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
      { text: "帮助或直接参与本站的编写！", link: '/take-your-part-in', },
      { text: "本站的大致愿望以及关于本站的一些基本信息", link: '/general-discussion-and-about-us', }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/psychiatric-wiki/' }
    ]
  }
})

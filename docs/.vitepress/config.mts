import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "精神科维基 / Psychiatric Wiki",
  description: "一个旨在于揭露批判现行精神科医疗体制并为社群自救的精神医学支持提供支援的维基 / A wiki dedicated to exposing and critiquing the current psychiatric healthcare system and providing support for community",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '首页 / Home', link: '/' }
    ],
    sidebar: [
      {
        text: '揭露与批判 / Exposing and Critiquing',
        items: [
          {
            text: '揭露：口述史与作品引用 / Exposing: Oral History and Work Citation',
            items: [
              { text: '一位跨性别分裂情感性障碍患者在上海市精神卫生中心的住院口述史 / Oral History of a Transgender Patient with Schizoaffective Disorder at Shanghai Mental Health Center', link: '/exposing/litz-tsong' },
              { text: '一位因分离性身份识别障碍而在上海精神卫生中心住院的患者的轻小说作品以及所作歌曲专辑： Indie Hospital / A Light Novel and Music Album by a Patient with Dissociative Identity Disorder at Shanghai Mental Health Center: Indie Hospital', link: '/exposing/indie-hospital' }
            ]
          },
          {
            text: '批判：运作逻辑 / Critique: Operational Logic',
            items: [
              { text: '现行的无效的精神科医师培育体制 / Current Useless Psychiatric Physician Training System', link: '/critiquing/useless-psychiatric-education' },
              { text: '老旧且保守的门诊药物治疗体系 / Outdated and Conservative Outpatient Medication Treatment System', link: '/critiquing/conservative-outpatient-medication' },
              { text: '无意义甚至是迫害性的心理治疗体系 / Meaningless and Even Persecutory Psychotherapy System', link: '/critiquing/meaningless-persecutory-psychotherapy' },
              { text: '依靠着迫害来牟利的精神科财政体系 / Psychiatric Financial System Profiting from Persecution', link: '/critiquing/psychiatric-financial-persecution' },
              { text: '漠视病人社会功能的住院治疗体制 / Inpatient Treatment System Ignoring Patients\' Social Function', link: '/critiquing/inpatient-social-ignoring' },
              { text: '精神病院的政治化利用 / Politicization of Psychiatric Hospitals', link: '/critiquing/politicization-psychiatric' },
              { text: '对现行精神科体制的批判总论 / Critique: General Theory of Current Psychiatric System', link: '/critiquing/general-theory' }
            ]
          }
        ]
      },
      {
        text: "自救之引路 / Self Supporting's Road Leading",
        items: [
          { text: '自救篇序言 / Self Supporting: Preface', link: '/selfsupport/perface' },
          {
            text: '实用的基本知识需求 / Practical Basic Knowledge Needs',
            items: [
              {
                text: '基本的生物学与医学知识 / Basic Biology and Medical Knowledge',
                items: [
                ]
              },
              {
                text: '基本的认知神经科学知识 / Basic Cognitive Neuroscience Knowledge',
                items: [
                ]
              },
              {
                text: '基本的精神病学知识 / Basic Psychiatric Knowledge',
                items: [
                  { text: '人卫精神病学 / Renwei Psychiatry', link: '/' },
                  { text: '开源精神病学教科书 / Open Source Psychiatry Textbook', link: '/' }
                ]
              },
              {
                text: '基本的精神药理学知识 / Basic Psychiatric Pharmacology Knowledge',
                items: [
                  { text: 'Stahl的精神药理学 / Stahls Psychopharmacology', link: '/' }
                ]
              },
              {
                text: '基本的心理支持知识 / Basic Psychological Support Knowledge',
                items: [
                ]
              },
              {
                text: '基本的精神科诊疗学知识 / Basic Psychiatric Diagnostic and Therapeutic Knowledge',
                items: [
                ]
              }
            ]
          },
          {
            text: '激进而足效的治疗方案 / Radical and Effective Treatment Plans',
            items: [

            ]
          },
          {
            text: '自杀干预 / Suicide Intervention',
            items: [

            ]
          },
          {
            text: '药物成瘾 / Drug Addiction',
            items: [

            ]
          },
          {
            text: '重症抑郁 / Severe Depression',
            items: [

            ]
          }
        ]
      },
      {
        text: "参与我们中 / Take Your Part In Our Project",
        items: [
          { text: '贡献自己对精神科的经验或看法 / Contribute Your Experiences or Opinions to Psychiatric Care', link: '/takepartin/experience-idea' },
          { text: '贡献医疗方案或信息 / Contribute Medical Plans or Information', link: '/takepartin/medical-plans' },
          { text: '参与维基揭露批判编写组 / Attend the Wiki Exposing and Critiquing Writing Group', link: '/takepartin/exposing-critiquing' },
          { text: '参与维基自救编写组 / Attend the Wiki Self-Supporting Writing Group', link: '/takepartin/self-supporting' }

        ]
      },
      { text: "关于与总论 / About Us and General Discussion", link: '/general-discussion-and-about-us', }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/psychiatric-wiki/' }
    ]

  }
})

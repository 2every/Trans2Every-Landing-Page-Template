import { Page } from "@/types/landing";

export const page: Page = {
  template: "shadcn",
  theme: "light",
  header: {
    brand: {
      title: "Trans2Every",
      avatar: {
        src: "/imgs/logo.png",
        title: "Trans2Every",
      },
      url: "/",
    },
    nav: {
      items: [
        {
          title: "定价",
          url: "/pricing",
          //target: "_blank",
        },
        {
          title: "博客",
          url: "/blog",
          target: "_blank",
        }
      ],
    },
    buttons: [
      {
        title: "登录",
        url: "/login",
        target: "_blank",
      },
    ],
  },
  hero: {
    title: "随时随地翻译任何内容",
    description:
      "使用 Trans2Every，轻松翻译任何语言，打破沟通障碍，连接世界。",
    image: {
      src: "/imgs/hero.png",
    },
    image_position: "right",
    text_align: "left",
    buttons: [
      {
        title: "免费试用",
        url: "/free",
        target: "_blank",
      },
      {
        title: "了解更多",
        url: "/more",
        target: "_blank",
        theme: "outline",
      },
    ],
    show_happy_users: true,
    show_proof: false,
  },
  section: {
    items: [
      {
        name: "what",
        title: "什么是 Trans2Every",
        description:
          "Trans2Every 是一个强大的翻译工具，能够在任何地方翻译任何内容。",
        image: {
          src: "/imgs/section1.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "实时翻译",
            description:
              "提供即时翻译服务，确保您与世界各地的人无缝沟通。",
          },
          {
            title: "多语言支持",
            description:
              "支持多种语言，满足全球用户的需求。",
          },
          {
            title: "用户友好界面",
            description:
              "简单直观的界面，让您轻松上手，无需专业知识。",
          },
        ],
      },
      {
        name: "why",
        title: "为什么选择 Trans2Every",
        description:
          "Trans2Every 是您理想的翻译解决方案，具有多种优势。",
        image: {
          src: "/imgs/section2.png",
        },
        image_position: "right",
        text_align: "center",
        items: [
          {
            title: "高准确性",
            description: "使用先进的翻译技术，确保翻译的准确性和流畅性。",
          },
          {
            title: "便捷性",
            description: "随时随地使用，无需下载任何软件。",
          },
          {
            title: "安全性",
            description: "保护您的数据隐私，确保信息安全。",
          },
        ],
      },
      {
        name: "how",
        title: "如何使用 Trans2Every",
        description:
          "按照以下步骤使用 Trans2Every：",
        image: {
          src: "/imgs/section3.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "1. 注册账户",
            description:
              "访问我们的官网，创建一个免费账户。",
          },
          {
            title: "2. 选择语言",
            description:
              "选择您要翻译的源语言和目标语言。",
          },
          {
            title: "3. 输入文本",
            description:
              "在文本框中输入您需要翻译的内容。",
          },
        ],
        buttons: [
          {
            title: "阅读并尝试 👉",
            url: "/try",
            target: "_blank",
          },
        ],
      },
    ],
  },
  feature: {
    title: "Trans2Every 的关键特性",
    description:
      "探索强大的功能，使 Trans2Every 成为登陆页面创建的最佳选择。",
    items: [
      {
        title: "实时翻译",
        description:
          "提供即时翻译服务，确保您与世界各地的人无缝沟通。",
        avatar: {
          src: "/imgs/icons/1.svg",
        },
      },
      {
        title: "多语言支持",
        description:
          "支持多种语言，满足全球用户的需求。",
        avatar: {
          src: "/imgs/icons/2.svg",
        },
      },
      {
        title: "用户友好界面",
        description:
          "简单直观的界面，让您轻松上手，无需专业知识。",
        avatar: {
          src: "/imgs/icons/3.svg",
        },
      },
      {
        title: "高准确性",
        description:
          "使用先进的翻译技术，确保翻译的准确性和流畅性。",
        avatar: {
          src: "/imgs/icons/4.svg",
        },
      },
      {
        title: "便捷性",
        description:
          "随时随地使用，无需下载任何软件。",
        avatar: {
          src: "/imgs/icons/5.svg",
        },
      },
      {
        title: "安全性",
        description:
          "保护您的数据隐私，确保信息安全。",
        avatar: {
          src: "/imgs/icons/6.svg",
        },
      },
    ],
  },
  cta: {
    title: "迫不及待想使用Trans2Every?",
    description: "立即开始您的翻译之旅",
    buttons: [
      {
        title: "立即试用",
        url: "/try-now",
        target: "_blank",
      },
    ],
  },
  testimonial: {
    title: "用户对 Trans2Every 的评价",
    description:
      "听听那些已经改变登陆页面创建流程的满意用户的意见。",
    items: [
      {
        name: "李明",
        title: "国际业务经理",
        description:
          "Trans2Every 让我与客户的沟通变得更加顺畅，真是太棒了！",
        avatar: {
          src: "/imgs/user/1.png",
        },
      },
      {
        name: "张伟",
        title: "自由翻译者",
        description:
          "这个工具非常好用，翻译准确，节省了我很多时间。",
        avatar: {
          src: "/imgs/user/2.png",
        },
      },
      {
        name: "王芳",
        title: "市场营销专员",
        description:
          "我喜欢 Trans2Every 的界面设计，使用起来非常方便。",
        avatar: {
          src: "/imgs/user/3.png",
        },
      },
      {
        name: "陈强",
        title: "学生",
        description:
          "作为一名学生，Trans2Every 帮助我理解外文资料，太感谢了！",
        avatar: {
          src: "/imgs/user/4.png",
        },
      },
      {
        name: "刘洋",
        title: "旅游爱好者",
        description:
          "在旅行中使用 Trans2Every，解决了我很多语言障碍。",
        avatar: {
          src: "/imgs/user/5.png",
        },
      },
      {
        name: "赵敏",
        title: "企业培训师",
        description:
          "Trans2Every 是我培训课程中不可或缺的工具，极大提升了效率。",
        avatar: {
          src: "/imgs/user/6.png",
        },
      },
    ],
  },
  faq: {
    title: "关于 Trans2Every 的常见问题",
    description: "查找有关使用 Trans2Every 的常见问题的答案。",
    items: [
      {
        title: "Trans2Every 支持哪些语言？",
        description:
          "Trans2Every 支持多种语言，包括英语、中文、西班牙语等。",
      },
      {
        title: "如何注册 Trans2Every？",
        description:
          "您只需访问官网，填写注册信息即可。",
      },
      {
        title: "Trans2Every 是免费的吗？",
        description:
          "Trans2Every 提供免费试用，部分功能需要付费订阅。",
      },
      {
        title: "如何确保翻译的准确性？",
        description:
          "我们使用先进的翻译技术和算法，确保翻译的高准确性。",
      },
      {
        title: "Trans2Every 的使用限制是什么？",
        description:
          "免费用户每天有一定的翻译字数限制，升级后可享受更多服务。",
      },
      {
        title: "如何联系客服？",
        description:
          "您可以通过官网的联系页面与我们的客服团队取得联系。",
      },
    ],
  },
  footer: {
    brand: {
      title: "Trans2Every",
      description:
        "Trans2Every 是您的通用翻译解决方案，帮助您连接语言，连接世界。",
      avatar: {
        src: "/imgs/logo.png",
        title: "Trans2Every",
      },
      url: "/",
    },
    badge_disabled: false,
    copyright: "© 2024 • 2every All rights reserved.",
    social: {
      items: [
        {
          title: "Twitter",
          url: "https://x.com/2every",
          target: "_blank",
        },
        {
          title: "ProductHunt",
          url: "https://www.producthunt.com/posts/2every",
          target: "_blank",
        },
        {
          title: "Discord",
          url: "https://discord.gg/2every",
          target: "_blank",
        },
        {
          title: "Telegram",
          url: "https://t.me/+2every",
          target: "_blank",
        },
        {
          title: "Email",
          url: "mailto:support@2every.so",
          target: "_self",
        },
      ],
    },
    nav: {
      items: [
        {
          title: "Products",
          children: [
            {
              title: "Change to every",
              url: "https://2every.com",
              target: "_blank",
            },
          ],
        },
        {
          title: "Friends",
          children: [
            {
              title: "ThinkAny",
              url: "https://thinkany.ai",
              target: "_blank",
            },
            {
              title: "HeyBeauty",
              url: "https://heybeauty.ai",
              target: "_blank",
            },
            {
              title: "ChatGPT",
              url: "https://chatgpt.com",
              target: "_blank",
            },
          ],
        },
        {
          title: "Services",
          children: [
            {
              title: "关于我们",
              url: "/about",
            },
            {
              title: "隐私政策",
              url: "/privacy-policy",
            },
            {
              title: "服务条款",
              url: "/terms-of-service",
            },
          ],
        },
      ],
    },
  },
  pricing: {
    title: "选择最适合您需求的计划",
    description: "Trans2Every 提供灵活的定价选项，满足不同用户的需求。无论您是个人用户、专业人士还是企业团队，都能找到最适合您的方案。",
    plans: [
      {
        name: "免费版",
        id: "plan-free",
        href: "#",
        price: { monthly: "免费", annually: "免费" },
        description: "适合偶尔使用的个人用户。",
        actionTitle: "立即开始",
        features: [
          "支持10种语言",
          "每月5000字符免费翻译",
          "基础文本格式保持",
          "社区支持",
        ],
        popular: false,
      },
      {
        name: "标准版",
        id: "plan-standard",
        href: "#",
        price: { monthly: "¥29", annually: "¥290" },
        description: "适合需要频繁翻译的专业人士。",
        actionTitle: "立即购买",
        features: [
          "支持50种语言",
          "每月不限制字符数量",
          "高级文本格式保持",
          "24小时电子邮件支持",
          "无水印",
        ],
        popular: true,
      },
      {
        name: "商务版",
        id: "plan-business",
        href: "#",
        price: { monthly: "¥99", annually: "¥990" },
        description: "为团队和企业提供全面的翻译解决方案。",
        actionTitle: "联系我们",
        features: [
          "支持100+种语言",
          "团队账号管理",
          "API接口集成",
          "优先24/7客户支持",
          "自定义品牌",
          "高级安全措施",
        ],
        popular: false,
      },
    ]
  }
};

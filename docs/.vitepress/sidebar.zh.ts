export const zhSidebar = {
  '/zh/': [
    {
      text: '业务平台',
      items: [
        {
          text: '内容分发平台', collapsed: true,
          items: [
            { text: '概览', link: '/zh/business/cms/' },
            { text: '方案', link: '/zh/business/cms/plan' },
          ]
        },
        {
          text: 'Loyalty', collapsed: true,
          items: [
            { text: '概览', link: '/zh/business/loyalty/' },
            { text: '方案', link: '/zh/business/loyalty/plan' },
          ]
        },
        {
          text: '物联网平台', collapsed: true,
          items: [
            { text: '概览', link: '/zh/business/iot/' },
            { text: '方案', link: '/zh/business/iot/plan' },
          ]
        },
        // { text: '企业小程序方案', collapsed: true, items: [...] },  // 暂时隐藏
        {
          text: 'AI智能体', collapsed: true,
          items: [
            { text: '概览', link: '/zh/business/ai-agent/' },
            { text: '方案', link: '/zh/business/ai-agent/plan' },
          ]
        },
      ]
    },
    {
      text: '生活类',
      items: [
        {
          text: '充电平台', collapsed: true,
          items: [
            { text: '概览', link: '/zh/lifestyle/charging/' },
            { text: '方案', link: '/zh/lifestyle/charging/plan' },
          ]
        },
        {
          text: '交通卡', collapsed: true,
          items: [
            { text: '概览', link: '/zh/lifestyle/transit/' },
            { text: '方案', link: '/zh/lifestyle/transit/plan' },
          ]
        },
        {
          text: '电商交易平台', collapsed: true,
          items: [
            { text: '概览', link: '/zh/lifestyle/ecommerce/' },
            { text: '方案', link: '/zh/lifestyle/ecommerce/plan' },
          ]
        },
        {
          text: '餐饮点餐聚合平台', collapsed: true,
          items: [
            { text: '概览', link: '/zh/lifestyle/catering/' },
            { text: '方案', link: '/zh/lifestyle/catering/plan' },
          ]
        },
        {
          text: '票务系统', collapsed: true,
          items: [
            { text: '概览', link: '/zh/lifestyle/ticketing/' },
            { text: '方案', link: '/zh/lifestyle/ticketing/plan' },
          ]
        },
      ]
    },
    {
      text: '金融类',
      items: [
        {
          text: '区块链平台集成', collapsed: true,
          items: [
            { text: '概览', link: '/zh/finance/blockchain/' },
            { text: '方案', link: '/zh/finance/blockchain/plan' },
          ]
        },
        {
          text: '财富管理', collapsed: true,
          items: [
            { text: '概览', link: '/zh/finance/wealth/' },
            { text: '方案', link: '/zh/finance/wealth/plan' },
          ]
        },
        {
          text: 'E-KYC', collapsed: true,
          items: [
            { text: '概览', link: '/zh/finance/ekyc/' },
            { text: '方案', link: '/zh/finance/ekyc/plan' },
          ]
        },
      ]
    },
    {
      text: '社交娱乐类',
      items: [
        {
          text: '即时通讯平台 IM', collapsed: true,
          items: [
            { text: '概览', link: '/zh/social/im/' },
            { text: '方案', link: '/zh/social/im/plan' },
          ]
        },
        {
          text: '游戏接入与管理平台', collapsed: true,
          items: [
            { text: '概览', link: '/zh/social/game/' },
            { text: '方案', link: '/zh/social/game/plan' },
          ]
        },
      ]
    },
  ]
}

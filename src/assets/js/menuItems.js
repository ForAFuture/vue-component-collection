export default [
  {
    icon: 'el-icon-s-home',
    route: '/home',
    name: 'home',
    title: '首页'
  },
  {
    icon: 'el-icon-warning-outline',
    route: '/404',
    name: '404',
    title: '404'
  },
  {
    icon: 'el-icon-time',
    route: '/cron',
    name: 'cron',
    title: 'cron定时'
  },
  {
    icon: 'el-icon-pie-chart',
    route: 'echarts',
    name: 'echarts',
    title: '图表',
    subs: [
      {
        route: '/echarts/line',
        name: 'line',
        title: '折线图'
      },
      {
        route: '/echarts/cloud',
        name: 'cloud',
        title: '词云图'
      }
    ]
  },
  {
    icon: 'el-icon-picture',
    route: '/preview',
    name: 'preview',
    title: '图片预览'
  },
  {
    icon: 'el-icon-folder',
    route: '/cssShape',
    name: 'cssShape',
    title: 'css形状'
  }
]

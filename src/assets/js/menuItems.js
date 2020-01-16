export default [
  {
    icon: 'el-icon-s-home',
    route: 'home',
    title: '首页'
  },
  {
    icon: 'el-icon-time',
    route: 'cron',
    title: 'cron定时'
  },
  {
    icon: 'el-icon-s-home',
    // route: 'echarts',
    title: '图表',
    subs: [
      {
        route: 'echarts',
        title: 'Echart'
      },
      {
        route: 'clouded',
        title: '词云图'
      }
    ]
  }
]

export default [
  {
    path: 'home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home/index')
  },
  {
    path: 'cron',
    name: 'cron',
    meta: {
      title: 'cron定时'
    },
    component: () => import('@/views/cron/index')
  },
  {
    path: 'preview',
    name: 'preview',
    meta: {
      title: '图片预览'
    },
    component: () => import('@/views/preview/index')
  }
]

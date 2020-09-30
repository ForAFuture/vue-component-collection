export default [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home/index')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404'
    },
    component: () => import('@/components/404')
  },
  {
    path: '/cron',
    name: 'cron',
    meta: {
      title: 'cron定时'
    },
    component: () => import('@/views/cron/index')
  },
  {
    path: '/preview',
    name: 'preview',
    meta: {
      title: '图片预览'
    },
    component: () => import('@/views/preview/index')
  }
]

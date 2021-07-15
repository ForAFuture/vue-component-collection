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
  },
  {
    path: '/cssShape',
    name: 'cssShape',
    meta: {
      title: 'css形状'
    },
    component: () => import('@/views/cssShape/index')
  },
  {
    path: '/asyncTest',
    name: 'asyncTest',
    meta: {
      title: '异步组件测试'
    },
    component: () => import('@/views/asyncComponent/index')
  },
  {
    path: '/scrollbar',
    name: 'scrollbar',
    meta: {
      title: '滚动条样式'
    },
    component: () => import('@/views/scrollbar/index')
  }
]

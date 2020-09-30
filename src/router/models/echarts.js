export default [
  {
    path: '/echarts',
    name: 'echarts',
    meta: {
      title: 'echarts'
    },
    redirect: {name: 'line'},
    component: () => import('@/views/echarts/index'),
    children: [
      {
        path: 'line',
        name: 'line',
        meta: {
          title: '折线图'
        },
        component: () => import('@/views/echarts/line')
      },
      {
        path: 'cloud',
        name: 'cloud',
        meta: {
          title: '词云图'
        },
        component: () => import('@/views/echarts/cloud.vue')
      }
    ]
  }
]

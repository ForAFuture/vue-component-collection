export default [
  {
    path: 'echarts',
    name: 'echarts',
    meta: {
      title: 'echarts'
    },
    component: () => import('@/views/echarts/cloud')
  },
  {
    path: 'clouded',
    name: 'clouded',
    meta: {
      title: '词云图'
    },
    component: () => import('@/views/echarts/clouded.vue')
  }
]

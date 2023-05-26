// 普通加载路由
// import ho from './ho.vue'
    // 懒加载路由
    const ho = () => import('@/src/views/ho.vue')
        export default {
        path: '/ho',
          name: 'ho',
            component: ho,
              children: [
              ]
              }
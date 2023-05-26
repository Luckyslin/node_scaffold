// 普通加载路由
// import dest from './dest.vue'
    // 懒加载路由
    const dest = () => import('@/views/dest/dest.vue')
          export default {
          path: '/dest',
            name: 'dest',
              component: dest,
                children: [
                ]
                }
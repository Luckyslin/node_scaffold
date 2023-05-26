// 普通加载路由
// import home from './home.vue'
    // 懒加载路由
    const home = () => import('@/src/views/home.vue')
        export default {
        path: '/home',
          name: 'home',
            component: home,
              children: [
              ]
              }
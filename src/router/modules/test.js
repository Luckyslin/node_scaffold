// 普通加载路由
// import test from './test.vue'
    // 懒加载路由
    const test = () => import('@/src/views/test/test.vue')
          export default {
          path: '/test',
            name: 'test',
              component: test,
                children: [
                ]
                }
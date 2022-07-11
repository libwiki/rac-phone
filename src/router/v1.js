export default [
    {
        path: '/',
        name: 'home',
        meta: {
            title: "首页", // 标题栏
            noToken: true, // 无需登录验证的界面

        },
        component: () => import('../views/home/Home.vue'),
    },

]

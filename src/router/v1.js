export default [
    {
        path: '/',
        name: 'home',
        meta: {
            title: "home", // 首页
            noToken: true, // 无需登录验证的界面

        },
        component: () => import('../views/home/Home.vue'),
    },
    {
        path: '/nft',
        name: 'nft',
        meta: {
            title: "nft", // NFT
            noToken: true, // 无需登录验证的界面
        },
        component: () => import('../views/nft/Nft.vue'),
    },
    {
        path: '/pledge',
        name: 'pledge',
        meta: {
            title: "pledge", // 质押
            noToken: true, // 无需登录验证的界面
        },
        component: () => import('../views/pledge/Pledge.vue'),
    },
    {
        path: '/team',
        name: 'team',
        meta: {
            title: "team", // 团队
            noToken: true, // 无需登录验证的界面
        },
        component: () => import('../views/team/Team.vue'),
    },
    {
        path: '/show_venue',
        name: 'show_venue',
        meta: {
            title: "show_venue", // 秀场
            noToken: true, // 无需登录验证的界面
        },
        component: () => import('../views/show_venue/ShowVenue.vue'),
    },
]

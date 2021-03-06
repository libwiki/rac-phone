import {createRouter, createWebHashHistory, createWebHistory, useRouter} from "vue-router";
import v1 from "./v1.js"; // 控制台页面路由
import Config from "../config/Config";
import {isEmpty, isFalse} from "../utils/helpers";
import {getToken, removeUserInfo} from "../hooks/user/useUserLogin"; // 配置信息
import i18n from "../i18n";


// 创建路由
const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL), // 路由模式
    history: createWebHashHistory(import.meta.env.BASE_URL), // 路由模式 #
    routes: [...v1], // 注册路由表
});

router.beforeEach((to, from, next) => {
    // 设置页面的标题
    if (isEmpty(to.meta.title)) {
        document.title = Config.siteName;
    } else {
        const title = i18n.global.t(`nav.${to.meta.title}`)
        document.title = `${title} | ${Config.siteName}`;
    }
    if (isFalse(to.meta.noToken) && isEmpty(getToken())) {
        return removeUserInfo()
    }
    next();
});

export default router;

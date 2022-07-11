import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import mitt from "mitt";
import i18n from "./i18n";
import 'normalize.css/normalize.css'
import "./utils/flexible" // rem适配（根据屏幕大小自动设置html标签的fontSize）
import "./styles/tailwind.index.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 简单事件处理
// 文档参考：https://github.com/developit/mitt
window.emitter = mitt();


const app = createApp(App)
app.use(i18n);
app.use(ElementPlus);
app.use(router); // 使用 路由 文档参考：https://next.router.vuejs.org/zh/introduction.html
app.use(createPinia()); // 状态管理器 文档参考：https://pinia.web3doc.top/
app.mount('#app')

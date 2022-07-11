import {createI18n} from 'vue-i18n'
import {isObject} from "../utils/helpers";

const modules = import.meta.globEager("./lang/*/*.js", {});
const messages = {}

Object.entries(modules).forEach(val => {
    if (!val[1].default || !isObject(val[1].default)) {
        return;
    }
    const moduleMatch = val[0].match(/^.*lang\/(.+)\/(.+).js$/)
    if (moduleMatch.length < 3) {
        return;
    }
    const moduleName = moduleMatch[1];
    if (moduleName === 'default') { // 模块名禁止使用default关键词
        return;
    }
    const namespaceName = moduleMatch[2];
    if (!messages[moduleName]) {
        messages[moduleName] = {};
    }
    messages[moduleName][namespaceName] = {
        ...(messages[moduleName][namespaceName] || {}),
        ...val[1].default
    }
    // 当命名空间是default时会进行层级提升 （moduleName）
    // $t('default.*') 默认取值
    // 提升后 快捷取值 $t('*')
    if (namespaceName === 'default') {
        messages[moduleName] = {
            ...messages[moduleName],
            ...val[1].default
        }
    }

});
// console.log(messages)
// https://vue-i18n.intlify.dev/guide/#javascript
// https://juejin.cn/post/7029609093539037197
const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'zh_CN',
    messages
})

export default i18n

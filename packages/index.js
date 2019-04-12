import Item from './item/index'
import Flex from './flex/index'
import Iconfont from './icon/index'
import Navbar from './navbar/index'
import Tabbar from './tabbar/index'


const components = [
    Item,
    Flex,
    Iconfont,
    Navbar,
    Tabbar,
]

// 导出 install 函数
// Vue.use() 会调用这个函数
const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
    // MetaInfo.install(Vue)
    // Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Item,
    Flex,
    Iconfont,
    Navbar,
    Tabbar,
}
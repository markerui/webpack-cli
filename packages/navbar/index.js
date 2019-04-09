import Navbar from './src/index.vue';

Navbar.install = function (Vue) {
    Vue.component(Navbar.name, Navbar);
};

export default Navbar;

// http: //www.ruanyifeng.com/blog/2015/07/flex-grammar.html 组件参考教程用法
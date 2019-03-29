import Flex from './src/index.vue';

Flex.install = function (Vue) {
    Vue.component(Flex.name, mAlert);
};

export default Flex;

// http: //www.ruanyifeng.com/blog/2015/07/flex-grammar.html 组件参考教程用法
import Flex from './src/index.vue';

Flex.install = function (Vue) {
    Vue.component(Flex.name, Flex);
};

export default Flex;

// http: //www.ruanyifeng.com/blog/2015/07/flex-grammar.html 组件参考教程用法
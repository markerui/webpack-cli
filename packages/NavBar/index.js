import mkNavBar from './src/index.vue';

mkNavBar.install = function (Vue) {
    Vue.component(mkNavBar.name, mAlert);
};

export default mkNavBar;
import mAlert from './src/alert.vue';

mAlert.install = function (Vue) {
    Vue.component(mAlert.name, mAlert);
};

export default mAlert;
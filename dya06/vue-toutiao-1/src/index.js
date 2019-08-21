/**
 * @file
 * @author ping zhu
 */
import Vue from 'vue';
import Main from './pages/main.vue';
import  plugin from './utils';




Vue.use(plugin);
const  vm = new Vue({
    el:'#app',
    render:h=>h(Main)
});

// Vue.mixin({
//     methods: utils
// });

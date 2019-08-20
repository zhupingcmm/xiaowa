/**
 * @file
 * @author ping zhu
 */
import Vue from 'vue';
import Main from './pages/main.vue'

const  vm = new Vue({
    el:'#app',
    render:h=>h(Main)
});

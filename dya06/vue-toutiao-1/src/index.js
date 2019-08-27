/**
 * @file
 * @author ping zhu
 */
import Vue from 'vue';
import Main from './pages/main.vue';
import  plugin from './utils';
// import VueRouter from 'vue-router';
import VueRouter from '../vue-fake-router/vue-fake-router.js'
import Setting from './pages/setting.vue'
import Detail from './pages/detail.vue';
import Video from '../src/components/detail-components/video.vue';
import Text from '../src/components/detail-components/text.vue';



Vue.use(plugin);
Vue.use(VueRouter);

const routes =[
    {
        path:"/page",
        component:Main
    },
    {
        path:"/page/setting",
        component:Setting
    },
    {
        path:'/page/detail/:id',
        component:Detail,
        props:true,
        children:[
            {
                path:'video',
                component:Video
            },
            {
                path:'text',
                component:Text
            }
        ]
    }
];

const router = new VueRouter({
   routes,
    mode:'hash'
});

// window.router = router;

const  vm = new Vue({
    el:'#app',
    router,
    render(createElement){
        return createElement('router-view')
    }
});

// Vue.mixin({
//     methods: utils
// });

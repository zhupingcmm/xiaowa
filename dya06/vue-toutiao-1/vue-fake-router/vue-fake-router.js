/**
 *
 *
 */

export default class VueRouter {
    constructor(options){
        this.routes = options.routes;
        this.history = new History();
        this.history.listen(newHash =>{
            console.log('vm',this.vm);
            console.log('newHash:',newHash);
            this.vm.$forceUpdate();
        });
    }

    push(path){
        this.history.push(path)
    }
    static install(Vue,options){
        Vue.mixin({
           created() {
               //自查
               if(this.$options.router){
                   this.$options.router.vm = this;
                   this.$router = this.$options.router;
               }else {
                   this.$router = this.$parent.$router;
               }
           }
        });
        Vue.component('router-view',{
            render(createElement){
                const currentHash = location.hash;
                console.log('currentHash:',currentHash);
                const router = this.$parent.$options.router;
                const currentRoute = matcher(currentHash,router.routes);
                return createElement(currentRoute.component)
            }
        });
        Vue.component('router-link',{
            render(createElement) {
                return createElement('span',{
                    on:{
                        click: this.clicking
                    }
                });

            },
            methods:{
                clicking(){
                    console.log('dsa');
                    window.history.go();
                }
            }
        })
    }
}

const matcher = (path,routesConfig) => {
  return routesConfig.find(route =>{
      return route.path === path.replace(/^#/,'')
  });
};

class History {
    listen(callback){
        window.addEventListener('hashchange',function () {
            callback && callback(window.location.hash)
        })
    }

    push(path){
        window.location.hash = '#' + path;
    }
}

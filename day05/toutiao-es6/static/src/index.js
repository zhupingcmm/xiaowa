import {request} from './utils'
import components from './items'
class Manager {
    constructor($container) {
        this.$container = $container;
    }

    static getInstance($container){
        return new Manager($container)
    }

    init(){
       this.appendData();
        this.detectReachBottom(() => this.appendData());
    }

    appendData(){
        request({
            url:'/list'
        }).then(res=>{
            console.log(res.data);
            const items = res.data;

            // console.log(components);
            items.forEach(item=>{
                const componentName = item.type.replace(/^\w/g,w=>w.toUpperCase());
                // console.log(componentName);
                const Component = components[componentName];
                // console.log(Component);
                const currentComponent = new Component(item);
                const element = currentComponent.constructorElement();
                this.$container.append(element)
            });

        })
    }

    detectReachBottom(callback =()=>{}){
        window.onscroll = ()=>{
          const  offsetHeight = document.documentElement.offsetHeight;
          const screenHeight = window.screen.height;
          const scrollY = window.scrollY;
          const  gap = offsetHeight -screenHeight - scrollY;

          if(gap<50){
              console.log(gap);
              callback()
          }
        };
    }

}

const $container = document.getElementById('container');
const manager = Manager.getInstance($container);
manager.init();

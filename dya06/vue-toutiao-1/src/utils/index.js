import echarts from 'echarts'
const createThrottle =(delay =1000)=>{
    let status = 'START';
    return function (fn) {
        if(status === "WAITING"){
            return
        }
        status = 'WAITING';
        setTimeout(()=>{
            fn && fn();
            status = 'START'
        }, delay);
    }
};

const createDebounce =(delay=1000)=>{
    let timer = null;
    return function (fn) {
        if(timer !== null){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn && fn()
        },delay);
    };
};

export default {
    install: Vue =>{
        Vue.mixin({
            created(){
                if(typeof this.onReachBottom === 'function'){
                    const THRESHOLD =100;
                    let throttle = createThrottle(3000);
                    window.addEventListener('scroll' , ()=>{
                        const offsetHeight = document.documentElement.offsetHeight;
                        const screenHeight = window.screen.height;
                        const scrollY = window.scrollY;
                        const gap = offsetHeight -screenHeight - scrollY;

                        if(gap<THRESHOLD){
                            throttle(()=>{
                                this.onReachBottom && this.onReachBottom()
                            });

                        }
                    });
                }
            },
            methods:{
                createThrottle,
                createDebounce
            },
            destroyed() {

            }
        });
        Vue.component('echarts',{
            render(createElement, context) {
                return createElement(
                    'div',
                    {
                        attrs:{
                            id:this.randomId
                        },
                        style :{
                          height:'200px',
                          width:'400px'
                        },
                        directives:[
                            {
                                name:'echarts'
                            }
                        ]
                    }
                )
            },
            mounted(){

                // const echartsHandler = echarts.init(this.$el);
                var option = {
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                };

                this.echartsHandler.setOption(option);
            },
            computed:{
                randomId(){
                    return 'echarts' +Math.floor(Math.random() * 10)
                },
            },
            methods:{
                receiverEchartsHandler(handler){
                    this.echartsHandler = handler;
                }
            }

        });

        Vue.directive('echarts',{
            inserted(el,binding,vnode){
                const echartsHandler = echarts.init(el);
                vnode.context.receiverEchartsHandler && vnode.context.receiverEchartsHandler(echartsHandler)
            }
        })
    }
};



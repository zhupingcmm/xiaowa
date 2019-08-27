<template>
    <article>
        <keep-alive>
            <component
                    v-bind:is="page"
                    v-bind:tabs="tabs"
                    v-bind:curTab.sync = "curTab"
                    v-on:more = "showMoreTab"
            >
                <template v-slot:content="{list}">
                    <component
                            v-bind:key="item.type | generatorKey"
                            v-for="item in list"
                            v-bind:is="item.type | formatComponentName"
                            v-bind="item.data"
                    >
                    </component>
                </template>
            </component>
        </keep-alive>
    </article>

</template>

<script>
    import * as components from '../components/items';
    import Tab from '../components/tab.vue';
    import {Tabs} from "../config";

    console.log("Tap:",Tab);

    const convertModule2Obj = moduleObj =>{
      let result = {};
      for(let moduleName in moduleObj){
          result[moduleName] = moduleObj[moduleName]
      }
      return result;
    };

    export default {
        components:{
            Tab,
            ...convertModule2Obj(components),
            Setting: () => ({
                component: import('./setting.vue'),
            }),
            // Agriculture: ()=>import("../components/items/agriculture.vue")
        },
        data(){

            const constructTabs = Tabs => {
                let result = {};
                for (let name in Tabs) {
                    result[name] = {
                        label: Tabs[name],
                        index: 0,
                        list: []
                    };
                }
                return result;
            };

            return {
                content: '这是一个vue的页面',
                tabs:constructTabs(Tabs),
                page: 'Tab',
                curTab: 'agriculture',
            };
        },
        created(){
            this.getListData(this.curTab)
                .then(listData=>{
                   this.setTabsData(this.curTab,{
                       list:listData
                   })
                });
        },
        methods:{
            onReachBottom(){
                console.log('loading')
            },
            getListData(tapName){
                const tab = this.tabs[this.curTab];

                return fetch(
                    `/list?tab=${tapName}&index=${tab.index}`
                )
                    .then(res => res.json())
                    .then(res => res.data);
            },
            setTabsData(tabName,data){
                this.$set(this.tabs,tabName,{
                    ...this.tabs[tabName],
                    ...data
                })
            },
            showMoreTab(event){
                console.log('event',event);
                if(event === 'hide'){
                    this.page = 'Tap'
                }else {
                    // this.page ='setting'
                    //window.location.hash = '#/setting'
                    console.log("this.$router:",this.$router);
                    this.$router.push('/page/setting');
                }
            }
        },
        filters:{
            formatComponentName(componentName){
                //console.log('componentName:',componentName);
                return componentName.replace(/^\w/g,name=>name.toUpperCase());
            },
            generatorKey(type){
                return type + Math.floor(Math.random()*100 +1);
            }
        },

    }
</script>

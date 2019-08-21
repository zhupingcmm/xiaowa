<template>
    <div>

            <!--<SinglePic v-bind="item.data" v-if="item.type ==='singlePic'"></SinglePic>-->
            <!--<MultiplePic v-bind="item.data" v-else-if="item.type === 'multiplePic'"></MultiplePic>-->
            <!--<Agriculture v-bind="item.data" v-else></Agriculture>-->
            <Tap>
                <template v-slot: header>
                    <div>
                        <span>推荐</span>
                        <span>热点</span>
                        <span>农业</span>
                    </div>
                </template>
                <template v-slot:content>
                    <div v-for="item in list">
                        <component
                                v-bind:is="item.type | formatComponentName"
                                v-bind="item.data">
                        </component>
                    </div>
                </template>
            </Tap>

    </div>
</template>

<script>
    import * as components from '../components/items';
    import Tap from '../components/tab.vue'
    const convertModule2Obj = moduleObj =>{
      let result = {};
      for(let moduleName in moduleObj){
          result[moduleName] = moduleObj[moduleName]
      }
      return result;
    };

    export default {
        components:{
            ...convertModule2Obj(components),
            Tap,
            Agriculture: ()=>import("../components/items/agriculture.vue")
        },
        data(){
            return {
               list:[]
            };
        },
        created(){
          fetch('/list?tab=agriculture').then(res=>
              res.json()
          ).then(
              ({data})=>{
                 this.list = data;
                 console.log(data)
              }
          )
        },
        methods:{
            onReachBottom(){
                console.log('loading')
            }
        },
        filters:{
            formatComponentName(componentName){
                //console.log('componentName:',componentName);
                return componentName.replace(/^\w/g,name=>name.toUpperCase());
            }
        },

    }
</script>

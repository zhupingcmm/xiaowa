<template>
    <div>
        <div v-for="item in list">
            <singlepic v-bind="item.data" v-if="item.type ==='singlePic'"></singlepic>
            <Multipic v-bind="item.data" v-else-if="item.type === 'multiplePic'"></Multipic>
            <Agriculture v-bind="item.data" v-else></Agriculture>
        </div>
    </div>
</template>

<script>
    import Multipic from '../items/multiple-pic.vue';
    import Singlepic from '../items/single-pic.vue';
    import Agriculture from '../items/agriculture.vue'
    export default {
        components:{
            Multipic,
            Singlepic,
            Agriculture
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
            changeName(){
                this.num = 5
            }
        }
    }
</script>

<template>
    <div class="item single-pic">
        <div class="content">
                    <span>
                        {{title}}}zhuping
                    </span>
                    <!--<span>-->
                        <!--{{articleData}}-->
                    <!--</span>-->
        </div>
        <img v-bind:src="imgUrl" alt=""/>
    </div>
</template>

<script >
    export default {
        props:['title','imageList'],
        computed:{
/*            articleData(){
              return new Date() + this.title;
            },*/
            imgUrl(){
                return this.imageList[0]
            }
        },
        methods:{
            // changeName(){
            //     this.title = 'xiaowa'
            // }
        }
    }
</script >

<style scoped>
    @import "../../index.css";
    .item.single-pic {
        display: flex;
    }

    .single-pic .content {
        flex: 2;
        font-size: 17px;
        padding-right: 24px;
    }

    .single-pic img {
        width: 33%;
        display: block;
    }
</style>

<template>
    <div class="item single-pic" v-on:click="skip">
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
    import BaseOptions from './base.js'
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
        },
        extends:BaseOptions
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

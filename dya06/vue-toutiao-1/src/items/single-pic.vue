<template>
    <div class="item single-pic">
        <div class="content" v-on:click="changeName">
                    <span>
                        {{title}}}
                    </span>
                    <span>
                        {{articleData}}
                    </span>
        </div>
        <img v-bind:src="imgUrl" alt=""/>
    </div>
</template>

<script>
    export default {
        props:['title','imageList'],
        computed:{
            articleData(){
              return new Date() + this.title;
            },
            imgUrl(){
                return this.imageList[0]
            }
        },
        methods:{
            changeName(){
                this.title = 'xiaowa'
            }
        }
    }
</script>

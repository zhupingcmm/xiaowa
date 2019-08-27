<template>
    <div class="item multiple-image" v-on:click="skip">
        <h3>
            {{title}}
        </h3>
        <div>
            <img v-for="imagePath in imageList" v-bind:src="imagePath">
        </div>
    </div>
</template>

<script>
    import BaseOptions from './base.js';
    export default {
        props:['title','imageList'],
        extends:BaseOptions
    }
</script>

<style scoped>
    @import "../../index.css";
    .multiple-image h3 {
        font-size: 17px;
    }

    .multiple-image .image-list img {
        width: 33%;
    }
</style>

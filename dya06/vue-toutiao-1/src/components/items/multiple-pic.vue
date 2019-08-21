<template>
    <div class="item multiple-image">
        <h3>
            {{title}}
        </h3>
        <div>
            <img v-for="imagePath in imageList" v-bind:src="imagePath">
        </div>
    </div>
</template>

<script>
    export default {
        props:['title','imageList']
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

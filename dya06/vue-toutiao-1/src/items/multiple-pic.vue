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

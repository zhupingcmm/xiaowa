<template>
    <div>
        <router-view></router-view>
        Detail page: {{id}}
    </div>
</template>

<script>
    export default {
        name: "detail",
        props:['id'],
        created() {
            console.log("this.$route",this.$route)
        }
    }
</script>

<style scoped>

</style>

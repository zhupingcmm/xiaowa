<template>
    <div>
        <nav-head
                v-bind:tabs="tabs"
                v-on:more="$emit('more')"
        >

        </nav-head>
        <div class="tab-list">
            <template v-for="(tab,name) in tabs">
                    <div v-if="name === curTab">
                        <slot name="content" v-bind:list="tab.list"></slot>
                    </div>
            </template>
        </div>
    </div>
</template>

<script>
    import Head from './head.vue'
    export default {
        name: "tab",
        props:['tabs','curTab'],
        components:{
            'nav-head': Head
        },
        created() {
            console.log('-----',this.tabs);
            console.log('---',this.curTab)
        }
    }
</script>
<style scoped>
    nav {
        display: flex;
    }
</style>

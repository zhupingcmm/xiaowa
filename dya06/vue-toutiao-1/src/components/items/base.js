export default {

    props: ['title', 'imageList'],

    methods: {
        skip(e) {
            console.log('skipskip:', e);
            this.$router.push('/detail/'+ 1212)
        }
    }
}

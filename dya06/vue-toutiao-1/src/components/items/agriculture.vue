<template>
    <div class="item multiple-image">
        <h3>
            agriculture ye cha zhu jia
        </h3>
        <echarts></echarts>
        <div class="image-list">
            <label>input city: </label>
            <label>
                <input type="text" v-on:input="oninput">
            </label>
            <span>
                area :{{area}}
            </span>
        </div>
        <div v-echarts></div>
        <div>
            pic price:{{price| addCount}}
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
              area:'beijing',
              price:0,
              debounce:this.createDebounce(2000)
          }
        },
        // created(){
        //   this.$watch('area',area=>{
        //     this.queryPrice(area)
        //   })
        // },
        watch:{
          area(newArea, oldArea){
              //console.log(newArea,oldArea);
              this.queryPrice(newArea)
          }
        },
        methods: {
            oninput(e){
                console.log(this.debounce);
                this.debounce(()=>{
                    this.area = e.data;
                });
            },
            queryPrice(area){
                fetch('/price?area' + area)
                    .then(res=>res.json())
                    .then(priceRes=>{
                        console.log(priceRes);
                        this.price = priceRes.infos[0].price;
                    })
            },
            changePosition(){
                this.area = '深圳'
            },
        },
        filters:{
            addCount(price){
                return price + '$'
            }
        },

    }
</script>

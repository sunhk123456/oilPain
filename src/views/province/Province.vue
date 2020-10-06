<template>
    <div>
     <div v-for="item in provinceKeys" :key="item">
         {{item}}
         <ul>
             <li  v-for="(city,index) in province[item]" :key="index" @click="changeprovince(city.province)">{{city.province}}</li>
         </ul>
     </div>
    </div>
</template>

<script>
    import city from "@/lib/city"

    export default {
        name: "Province",
        data() {
            return {
                province: {},
            }
        },
        computed:{
            provinceKeys(){
                let arr=[];
            arr =Object.keys(this.province).sort();

                return arr;
            }
        },
        mounted() {
            this.initProvince();
            // console.log(this.province);
        }
        ,
        methods: {
            initProvince() {
                city.province.filter(ele => {
                    let first = ele.en.charAt(0).toUpperCase()
                    if (!this.province[first]) {
                        this.$set(this.province,first,[])
                        // this.province[first] = [];
                    }
                    this.province[first].push(ele);

                })
                console.log(this.province);
            },
            changeprovince(item){
                this.$store.commit("setCity",item);
                this.$router.back();

            }
        }

    }
</script>

<style scoped>

</style>
<template>
    <div>
    <div class="home" >
        <router-link to="/province" tag="div"> {{indexSearch.province}}</router-link>
        <br>
        <router-link to="/calendar" tag="div">开始时间：{{indexSearch.startTime}}星期:{{indexSearch.startDay}} ------ 结束时间：{{indexSearch.endTime}}星期:{{indexSearch.endDay}}</router-link>
    </div>

    </div>
</template>

<script>
    import {mapState,mapGetters} from "vuex"

    export default {
        name: 'Home',
        data() {
            return {

            }
        },
        mounted() {
            this.initSearch();
        },
        computed: {
            ...mapState([
                "count",
                "city",
                "indexSearch"
            ]),
            ...mapGetters([
                "doneTodos",
                "cityUpper"
            ])
        },

        methods: {
            initSearch(){
              this.$store.dispatch("setTime");
              this.$store.dispatch("setProvince",'山西');
            },
            btnjia() {
               // this.$store.commit("increment");
               this.$store.dispatch("add")
            },


        },
        components: {
            // HelloWorld

        }
    }
</script>

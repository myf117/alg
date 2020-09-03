<template>
    <div class="imgs" style="display:inline-block;height:100px">
        <img src="../../../assets/logoll.png" @click="toHome" >
    </div>
</template>
<script>
export default {
    methods: {
        toHome(){
            if(this.$router.fuiipath == '/Nav'){
                this.$router.go(0);
            }else {
                this.$router.push('/');
            }
        }
    },
}
</script>
<style>
    img{
            width: 240px;
    height: 100px;
    }
</style>
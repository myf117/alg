export default {
    state:{
        shopList:[]
    },
    mutations:{
        UserList(state) {
            //获取当前登录用户的购物车信息
            console.log(this);
            this.$http.get('/showlist',{
                params:{
                    username:this.cookie.getCookie('user')
                }
            }).then(res => {
                console.log(1);
                console.log(res.data);
                state.shopList = res.date;
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
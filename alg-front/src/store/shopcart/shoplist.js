export default {
    state:{
        cartNum:0,
        selected:[]
    },
    mutations:{
        modifyData(state,selected,cartNum){
            state.selected = selected;
            state.cartNum = cartNum;
        }
    }
}
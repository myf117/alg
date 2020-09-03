const Controller = require('egg').Controller;
class shoppingController extends Controller {
    async getAllProduct(){
        let name = this.ctx.request.query.keyword;
        console.log(name);
        let result = await this.ctx.service.shoppingService.getAllProduct(name);
        this.ctx.response.body = result;
    }
    async showClassProduct(){
        let class_id = this.ctx.request.query.class_id;
        let goods_id = this.ctx.request.query.goods_id;
        let result = await this.ctx.service.shoppingService.showClassProduct(class_id,goods_id);
        this.ctx.response.body = result;
    }
    async getproduct(){
        //随机生成id
        // let id = [];
        // for(let i = 0; i < 5; i++){
        //     id.push(Math.floor(Math.random()*100));
        // }
        let result = await this.ctx.service.shoppingService.getproduct();
        this.ctx.response.body = result;
    }
    async getlunbo(){
        let class_id = this.ctx.request.query.class_id;
        let result = await this.ctx.service.shoppingService.getlunbo(class_id);
        this.ctx.response.body = result;
    }
    async getByid(){
        let id = this.ctx.request.query.product_id;
        let result = await this.ctx.service.shoppingService.getByid(id);
        this.ctx.response.body = result;
    }
    async limitClassProduct(){
        let class_id = this.ctx.request.query.class_id;
        let goods_id = this.ctx.request.query.goods_id;
        let page = this.ctx.request.query.page;
        // console.log(page);
        let result = await this.ctx.service.shoppingService.limitClassProduct(class_id,goods_id,page);
        this.ctx.response.body = result;
    }
}
module.exports = shoppingController;

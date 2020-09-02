const Controller = require('egg').Controller;
class shoppingController extends Controller {
    async getAllProduct(){
        let name = this.ctx.request.query.keyword;
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
        let result = await this.ctx.service.shoppingService.getproduct();
        this.ctx.response.body = result;
    }
    async getlunbo(){
        let class_id = this.ctx.request.query.class_id;
        let result = await this.ctx.service.shoppingService.getlunbo(class_id);
        this.ctx.response.body = result;
    }
    
}
module.exports = shoppingController;

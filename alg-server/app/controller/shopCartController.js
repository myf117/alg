const Controller = require('egg').Controller;
class shopCartController extends Controller{
    async showList(){
        let username = this.ctx.request.query.username;
        let result = await this.ctx.service.shopCartService.showList(username);
        this.ctx.response.body = result;
    }
    async shopCount(){
        let count = this.ctx.request.query.count;
        let user_id = this.ctx.request.query.user_id;
        let product_name = this.ctx.request.query.product_name;
        let result = await this.ctx.service.shopCartService.shopCount(count,product_name,user_id);
        this.ctx.response.body = result
    }
    async delShopList(){
        let user_id = this.ctx.request.query.user_id;
        let product_name = this.ctx.request.query.product_name;
        let result =await  this.ctx.service.shopCartService.delShopList(user_id,product_name);
        this.ctx.response.body = result;
    }
}
module.exports = shopCartController;

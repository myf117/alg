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
    async addToCart(){
        let id = this.ctx.request.query.id;
        let user = this.ctx.request.query.user;
        let result = await this.ctx.service.shopCartService.addToCart(id,user);
        this.ctx.response.body = result;
    }
    async addToOrder(){
        let user = this.ctx.request.body.user;
        let product_name = this.ctx.request.body.product_name;
        let total = this.ctx.request.body.total;
        let count = this.ctx.request.body.count;
        let result = await this.ctx.service.shopCartService.addToOrder(user,product_name,total,count);
        this.ctx.response.body = result;
    }
}
module.exports = shopCartController;

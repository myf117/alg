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
        let count = this.ctx.request.query.count;
        let result = await this.ctx.service.shopCartService.addToCart(id,user,count);
        this.ctx.response.body = result;
    }
    async addToOrder(){
        let uname = this.ctx.request.body.uname;
        let pname = this.ctx.request.body.pname;
        let total = this.ctx.request.body.total;
        let count = this.ctx.request.body.count;
        let otime = this.ctx.request.body.otime;
        let oid = this.ctx.request.body.oid;
        let address = this.ctx.request.body.address;
        let phone = this.ctx.request.body.phone;
        let result = await this.ctx.service.shopCartService.addToOrder(uname,pname,total,count,otime,oid,address,phone);
        this.ctx.response.body = result;
    }
}
module.exports = shopCartController;

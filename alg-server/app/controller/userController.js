const Controller = require('egg').Controller;
class userController extends Controller {
    async login(){
        let username = this.ctx.request.body.username;
        let password = this.ctx.request.body.password;
        let result = await this.ctx.service.userService.login(username,password);
        this.ctx.response.body = result;
    }
    async regist(){
        let username = this.ctx.request.body.username;
        let password = this.ctx.request.body.password;
        let result = await this.ctx.service.userService.regist(username,password);
        this.ctx.response.body = result;
    }
}
module.exports = userController;
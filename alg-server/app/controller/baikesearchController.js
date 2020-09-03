const Controller = require('egg').Controller;
class baikesearchController extends Controller{
    async getClasskeyBaike(){
        let classkey = this.ctx.request.query.classkey;
        let result = await this.ctx.service.baikesearchService.getClasskeyBaike(classkey);
        this.ctx.response.body = result;
		// console.log(result)
    }
}
module.exports = baikesearchController;
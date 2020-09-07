const Controller = require('egg').Controller;
class baikeController extends Controller{
    async getClassBaike(){
        let class_id = this.ctx.request.query.class_id;
        let result = await this.ctx.service.baikeService.getClassBaike(class_id);
        this.ctx.response.body = result;
    }
    
}
module.exports = baikeController;
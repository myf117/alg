const Service = require('egg').Service;
class baikeService extends Service{
    async getClassBaike(class_id){
        let sql = 'select * from encycle where class_id=?';
        let list = await this.ctx.app.mysql.query(sql,class_id);
        return list;
    }
    
}
module.exports = baikeService;
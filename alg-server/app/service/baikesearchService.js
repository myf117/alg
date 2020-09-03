const Service = require('egg').Service;
class baikesearchService extends Service{
    async getClasskeyBaike(classkey){
        let sql = `select * from encycle where context like '%${classkey}%'`;
        let list = await this.ctx.app.mysql.query(sql,[classkey]);
        return list;
    }
}
module.exports = baikesearchService;
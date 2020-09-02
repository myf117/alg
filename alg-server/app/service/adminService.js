const Service = require('egg').Service;
class adminService extends Service{
    async uploadProduct(product_name,price,discription,img_url,class_id,goods_id){
        let sql = 'insert into product(product_name,price,discription,img_url,class_id,goods_id) values(?,?,?,?,?,?)'
        let list = await this.ctx.app.mysql.query(sql,[product_name,price,discription,img_url,class_id,goods_id]);
        return list;
    }
    async getAllOrder(){
        let sql = 'select * from order';
        let list = await this.ctx.app.mysql.query(sql);
        return list;
    }
    async adminGetProduct(){
        let sql = 'select * from product';
        let list = await this.ctx.app.mysql.query(sql);
        return list;
    }
    async uplunbo(lunbo_url,class_id){
        let sql = 'update lunbo set lunbo_url=? where class_id=?';
        let list = await this.ctx.app.mysql.query(sql,[lunbo_url,class_id]);
        return list;
    }
    async dellunbo(lunbo_id){
        let sql = 'delete from lunbo where id=?';
        let list =  await this.ctx.app.mysql.query(sql,[lunbo_id]);
        return list;
    }
}
module.exports = adminService;
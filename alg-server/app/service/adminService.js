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
    async delProduct(arr){
        let sql = 'delete from product where id=?';
        let list;
        list = await this.ctx.app.mysql.query(sql,[arr]);
        return list;
    }
    async modifyProduct(id,name,price,count){
        let sql = 'update product set product_name=?,price=?,count=? where id=?';
        let list = await this.ctx.app.mysql.query(sql,[name,price,count,id]);
        return list;
    }
    async gettouxiang(username){
        let sql = 'select head_url from user where username=?';
        let list = await this.ctx.app.mysql.query(sql,[username]);
        return list;
    }
    async getperson(username){
        let sql = 'select * from user where username=?';
        let list = await this.ctx.app.mysql.query(sql,[username]);
        return list;
    }
}
module.exports = adminService;
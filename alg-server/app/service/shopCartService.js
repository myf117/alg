const Service = require('egg').Service;
class shopCartService extends Service{
    async showList(username){
        let sql = 'select id from user where username=?';
        let list1 = await this.ctx.app.mysql.query(sql,[username]);
        sql = 'select * from shopcart where user_id=?';
        let list2 = await this.ctx.app.mysql.query(sql,[list1[0].id]);
        return list2;
    }   
    async shopCount(count,product_name,user_id){
        let sql = 'update shopcart set count=? where user_id=? and product_name=?';
        let list = await this.ctx.app.mysql.query(sql,[count,user_id,product_name]);
        return list;
    }
    async delShopList(user_id,product_name) {
        let sql = 'delete from shopcart where user_id=? and product_name=?';
        console.log(user_id,product_name);
        let list = await this.ctx.app.mysql.query(sql,[user_id,product_name]);
        console.log(list)
        return list;
    }
}
module.exports = shopCartService;
const Service = require('egg').Service;
class shoppingService extends Service {
    async getAllProduct(name){
        let sql = 'select * from product where product_name like ?';
        let list = await this.ctx.app.mysql.query(sql,[`%${name}%`]);
        // console.log(list);
        return list;
    }
    async showClassProduct(class_id,goods_id){
        let sql = 'select * from product where class_id=? and goods_id=?';
        let list;
        if(goods_id){
            list  = await this.ctx.app.mysql.query(sql,[class_id,goods_id]);
        }else if(!goods_id){
            sql = 'select * from product where class_id=?';
            list = await this.ctx.app.mysql.query(sql,[class_id]);
        }
        return list;
    }
    
    async getproduct(){
        let sql = 'select * from product limit 4';
        let list = await this.ctx.app.mysql.query(sql);
        return list;
    }
    async getlunbo(class_id){
        let sql = 'select * from lunbo where class_id=?';
        let list = await this.ctx.app.mysql.query(sql,[class_id]);
        return list;
    }
}
module.exports = shoppingService;
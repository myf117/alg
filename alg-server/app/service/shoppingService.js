const Service = require('egg').Service;
class shoppingService extends Service {
    //搜索商品
    async getAllProduct(name){
        let sql = 'select * from product where product_name like ?';
        let list = await this.ctx.app.mysql.query(sql,[`%${name}%`]);
        // console.log(list);
        return list;
    }
    //根据类别显示商品
    async showClassProduct(class_id,goods_id){
        let sql = 'select * from product where class_id=? and goods_id=? limit 8';
        let list;
        if(goods_id){
            list  = await this.ctx.app.mysql.query(sql,[class_id,goods_id]);
        }else if(!goods_id){
            sql = 'select * from product where class_id=? limit 8';
            list = await this.ctx.app.mysql.query(sql,[class_id]);
        }
        return list;
    }
    async limitClassProduct(class_id,goods_id,page){
        let sql = 'select * from product where class_id=? and goods_id=?';
        let list = await this.ctx.app.mysql.query(sql,[class_id,goods_id]);
        let page_count = ((list.length % 8) === 0) ? (list.length / 8) : Math.ceil(list.length / 8);
        sql = 'select * from product where class_id=? and goods_id=? limit ?,8';
        let start = (page - 1) * 8;
        list  = await this.ctx.app.mysql.query(sql,[class_id,goods_id,start]);
        return {
            page_count:page_count,
            list:list
        };
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
    async getByid(id){
        let sql = 'select * from product where id=?';
        let list = await this.ctx.app.mysql.query(sql,[id]);
        return list;
    }
}
module.exports = shoppingService;
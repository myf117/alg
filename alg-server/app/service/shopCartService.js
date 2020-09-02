const Service = require('egg').Service;
class shopCartService extends Service{
    //显示用户购物车数据
    async showList(username){
        let sql = 'select id from user where username=?';
        let list1 = await this.ctx.app.mysql.query(sql,[username]);
        sql = 'select * from shopcart where user_id=?';
        let list2 = await this.ctx.app.mysql.query(sql,[list1[0].id]);
        return list2;
    }   
    //更改购物车某商品数量
    async shopCount(count,product_name,user_id){
        let sql = 'update shopcart set count=? where user_id=? and product_name=?';
        let list = await this.ctx.app.mysql.query(sql,[count,user_id,product_name]);
        return list;
    }
    //删除选中商品
    async delShopList(user_id,product_name) {
        let sql = 'delete from shopcart where user_id=? and product_name=?';
        console.log(user_id,product_name);
        let list = await this.ctx.app.mysql.query(sql,[user_id,product_name]);
        console.log(list)
        return list;
    }
    //加入购物车
    async addToCart(id,user){
        let sql = 'select id from user where username=?';
        let result = await this.ctx.app.mysql.query(sql,[user]);
        let user_id = result[0].id;
        sql = 'select * from product where id=?';
        result = await this.ctx.app.mysql.query(sql,[id]);
        let product_name = result[0].product_name;
        let price = result[0].price;
        let img_url = result[0].img_url;
        sql = 'select * from shopcart where user_id=? and product_name=?';
        let list = await this.ctx.app.mysql.query(sql,[user_id,product_name]);
        if(list.length){
            sql = 'update shopcart set count=? where user_id=? and product_name=?';
            list = await this.ctx.app.mysql.query(sql,[list[0].count + 1,user_id,product_name]);
            return list;
        }else {
            sql = 'insert into shopcart(product_name,price,count,img_url,user_id) values(?,?,?,?,?)';
            list = await this.ctx.app.mysql.query(sql,[product_name,price,1,img_url,user_id]);
            return list;
        }
    }
    //提交订单
    async addToOrder(user,product_name,total,count){
        let sql = 'select id from user where username=?';
        let list = await this.ctx.app.mysql.query(sql,[user]);
        console.log(typeof product_name,typeof count);
        sql = 'insert into order(user_id,product_name,count,total,isresolve) values(?,?,?,?,1)';
        list = await this.ctx.app.mysql.query(sql,[list[0].id,product_name,count,total]);
        return list;
    }
}
module.exports = shopCartService;
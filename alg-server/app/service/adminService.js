const Service = require('egg').Service;
class adminService extends Service{
    async uploadProduct(product_name,price,discription,img_url,class_id,goods_id){
        let sql = 'insert into product(product_name,price,discription,img_url,class_id,goods_id) values(?,?,?,?,?,?)'
        let list = await this.ctx.app.mysql.query(sql,[product_name,price,discription,img_url,class_id,goods_id]);
        return list;
    }
    async getAllOrder(page){
        let sql = 'select * from orderp';
        let list = await this.ctx.app.mysql.query(sql);
        let start = (page - 1)*8;
        let page_count = ((list.length % 8) === 0) ? (list.length / 8) : Math.ceil(list.length / 8);
        sql = 'select * from orderp limit ?,8';
        list = await this.ctx.app.mysql.query(sql,[start]);
        return {
            page_count:page_count,
            list:list
        };
    }
    async adminGetProduct(page,class_id,goods_id){
        let sql = 'select * from product where class_id=? and goods_id=?';
        let list = await this.ctx.app.mysql.query(sql,[class_id,goods_id]);
        let page_count = ((list.length % 8) === 0) ? (list.length / 8) : Math.ceil(list.length / 8);
        sql = 'select * from product where class_id=? and goods_id=? limit ?,8';
        let start = (page - 1)*8;
        list = await this.ctx.app.mysql.query(sql,[class_id,goods_id,start]);
        return {
            page_count:page_count,
            list:list
        };
    }
    // async uplunbo(lunbo_url,class_id){
    //     let sql = 'update lunbo set lunbo_url=? where class_id=?';
    //     let list = await this.ctx.app.mysql.query(sql,[lunbo_url,class_id]);
    //     return list;
    // }
    // async dellunbo(lunbo_id){
    //     let sql = 'delete from lunbo where id=?';
    //     let list =  await this.ctx.app.mysql.query(sql,[lunbo_id]);
    //     return list;
    // }
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
    async uploadEncycle(pet_name,context,pet_img,class_id){
        let sql = 'insert into encycle(pet_name,context,pet_img,class_id) values(?,?,?,?)';
        let list = await this.ctx.app.mysql.query(sql,[pet_name,context,pet_img,class_id]);
        return list;
    }
    async addtolunbo(img_url,id){
        let sql = 'update lunbo set lunbo_img=? where id=?';
        let list = await this.ctx.app.mysql.query(sql,[img_url,id]);
        return list;
    }
    async updateProduct(product_name,price,class_id,goods_id,count,id){
        console.log(price);
        let sql = 'update product set product_name=?,price=?,class_id=?,goods_id=?,count=? where id=?';
        let list = await this.ctx.app.mysql.query(sql,[product_name,price,class_id,goods_id,count,id]);
        return list;
    }
    async limitbaike(class_id,page){
        let sql = 'select * from encycle where class_id=?';
        let list = await this.ctx.app.mysql.query(sql,[class_id]);
        let page_count = ((list.length % 8 ) === 0) ? (list.length / 8) : Math.ceil(list.length / 8);
        sql = 'select * from encycle where class_id=? limit ?,8';
        let start = (page - 1)*8;
        list = await this.ctx.app.mysql.query(sql,[class_id,start]);
        return {
            page_count:page_count,
            list:list
        };
    }
    async getAlllunbo(class_id){
        let sql = 'select * from lunbo where class_id=?';
        let list = await this.ctx.app.mysql.query(sql,[class_id]);
        return list;
    }
    async delbaike(id){
        let sql = 'delete from encycle where id=?';
        let list = await this.ctx.app.mysql.query(sql,[id]);
        return list;
    }
      // 编辑状态
      async editOderState(resolve,id){
        let sql = 'update orderp set resolve=? where id=? ';
        console.log(resolve)
        let list = await this.ctx.app.mysql.query(sql,[resolve,id]);
        return list;
    }
     // 编辑已完成订单
     async delOder(id){
        let sql = 'delete from orderp where id=?';
        let list = await this.ctx.app.mysql.query(sql,[id]);
        return list;
    }
    //添加部分：管理员的信息提取
    async getusersss(){
        let sql='select id,username,password,phone from user';
        let list=await this.ctx.app.mysql.query(sql);
        return list;
    }
    //重置管理员密码
    async getstart(start,password){
        let sql='update user set password=? where password=?';
        let list=await this.ctx.app.mysql.query(sql,[start,password]);
        return list;
    }
    //删除列表行
    async getdelets(id){
        let sql='delete from user where  id=?';
        let list=await this.ctx.app.mysql.query(sql,[id]);
        return list;
    }
    //新增百科
    async editEncycle(pet_name, class_id, id){
        let sql = 'update encycle set pet_name=?,class_id=? where id=?';
        let list = await this.ctx.app.mysql.query(sql,[pet_name,class_id,id]);
        return list;
    }
     // 首页获取信息
    async getOrderInfo(){
        let sql = 'select * from orderp';
        let list = await this.ctx.app.mysql.query(sql);
        return list;       
    }
}
module.exports = adminService;
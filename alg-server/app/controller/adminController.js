const Controller = require('egg').Controller;
const fs = require('fs');
const path  = require("path");
class adminController extends Controller{
    async upFile() {
        const file = this.ctx.request.files[0];
        const toFileName = '/public/upFile/' + Date.now()+ file.filename;
        let to = path.dirname(__dirname)+toFileName;
        await fs.copyFileSync(file.filepath, to);
        await fs.unlinkSync(file.filepath);
        // const newUrl = "http://192.168.6.11:8001"+toFileName;
        const newUrl = "http://localhost:8001"+toFileName;
        // const newUrl = "http://192.168.6.24:8001"+toFileName;
        this.ctx.response.body = newUrl; 
    }
    // async uplunbo(){
    //     let lunbo_url = this.ctx.request.body.lunbo_url;
    //     let class_id = this.ctx.request.body.class_id;
    //     let result = await this.ctx.service.adminService.uplunbo(lunbo_url,class_id);
    //     this.ctx.response.body = result;
    // }
    // async dellunbo(){
    //     let lunbo_id = this.ctx.request.query.id;
    //     let result = await this.ctx.service.adminService.dellunbo(lunbo_id);
    //     this.ctx.response.body = result;
    // }
    async uploadProduct(){
        let product_name = this.ctx.request.body.product_name;
        let img_url = this.ctx.request.body.img_url;
        let price = this.ctx.request.body.price;
        let discription = this.ctx.request.body.discription;
        let firstClass = this.ctx.request.body.firstClass;
        let secondClass = this.ctx.request.body.secondClass;
        let class_id,goods_id;
        switch(firstClass){
            case'狗狗商品':class_id=1;break;
            case'猫猫商品':class_id=2;break;
            case'奇趣小宠':class_id=3;break;
            case'水族市场':class_id=4;break;
        }
        if(class_id === 1){
            switch(secondClass){
                case '主粮':goods_id=101;break;
                case '零食':goods_id=102;break;
                case '玩具':goods_id=103;break;
            }
        }else if(class_id === 2){
            switch(secondClass){
                case '主粮':goods_id=201;break;
                case '零食':goods_id=202;break;
                case '猫砂':goods_id=203;break;
                case '玩具':goods_id=204;break;
            }
        }else if(class_id === 3){
            switch(secondClass){
                case '兔子':goods_id=301;break;
                case '仓鼠':goods_id=302;break;
                case '龙猫':goods_id=303;break;
            }
        }else if(class_id === 4){
            switch(secondClass){
                case '鱼食':goods_id=401;break;
                case '鱼缸':goods_id=401;break;
                case '器材':goods_id=401;break;
            }
        }
        let result = await this.ctx.service.adminService.uploadProduct(product_name,price,discription,img_url,class_id,goods_id,page);
        this.ctx.response.body = result;
    }
    async getAllOrder(){
        let page = this.ctx.request.query.page
        let result = await this.ctx.service.adminService.getAllOrder(page);
        this.ctx.response.body = result;
    }
    async adminGetProduct(){
        let class_id = this.ctx.request.query.class_id;
        let goods_id = this.ctx.request.query.goods_id;
        let page = this.ctx.request.query.page;
        let result = await this.ctx.service.adminService.adminGetProduct(page,class_id,goods_id);
        this.ctx.response.body = result;
    }
    async delProduct(){
        // console.log(this.ctx.request.query);
        let arr = this.ctx.request.query.idArr;
        // console.log(arr);
        let result = await this.ctx.service.adminService.delProduct(arr);
        this.ctx.response.body = result;
    }
    async modifyProduct(){
        let id = this.ctx.request.query.id;
        let name = this.ctx.request.query.name;
        let price = this.ctx.request.query.price;
        let count =this.ctx.request.query.count;
        let result = await this.ctx.service.adminService.modifyProduct(id,name,price,count);
        this.ctx.response.body = result;
    }
    async gettouxiang() {
        let username1 = this.ctx.request.query.username;
        console.log(username1)
        let result = await this.ctx.service.adminService.gettouxiang(username1);
        console.log(result)
        this.ctx.response.body = result;
    }
    async getperson() {
        let username1 = this.ctx.request.query.username1;
        let result = await this.ctx.service.adminService.getperson(username1);
        console.log(result)
        this.ctx.response.body = result;
    }
    async uploadEncycle(){
        let pet_name = this.ctx.request.body.pet_name;
        let context = this.ctx.request.body.context;
        let pet_img = this.ctx.request.body.pet_img;
        let class_id = this.ctx.request.body.class_id;
        let result = await this.service.adminService.uploadEncycle(pet_name,context,pet_img,class_id);
        this.ctx.response.body = result;
    }
    async addtolunbo(){
        let img_url = this.ctx.request.body.lunbo_img;
        let id = this.ctx.request.body.id;
        let result = await this.service.adminService.addtolunbo(img_url,id);
        this.ctx.response.body = result;
    }
    async updateProduct(){
        let product_name = this.ctx.request.body.product_name;
        let price = this.ctx.request.body.price;
        let firstClass = this.ctx.request.body.firstClass;
        let secondClass = this.ctx.request.body.secondClass;
        let id = this.ctx.request.body.id;
        let count = this.ctx.request.body.count;
        let class_id,goods_id;
        switch(firstClass){
            case'狗狗商品':class_id=1;break;
            case'猫猫商品':class_id=2;break;
            case'奇趣小宠':class_id=3;break;
            case'水族市场':class_id=4;break;
        }
        if(class_id === 1){
            switch(secondClass){
                case '主粮':goods_id=101;break;
                case '零食':goods_id=102;break;
                case '玩具':goods_id=103;break;
            }
        }else if(class_id === 2){
            switch(secondClass){
                case '主粮':goods_id=201;break;
                case '零食':goods_id=202;break;
                case '猫砂':goods_id=203;break;
                case '玩具':goods_id=204;break;
            }
        }else if(class_id === 3){
            switch(secondClass){
                case '兔子':goods_id=301;break;
                case '仓鼠':goods_id=302;break;
                case '龙猫':goods_id=303;break;
            }
        }else if(class_id === 4){
            switch(secondClass){
                case '鱼食':goods_id=401;break;
                case '鱼缸':goods_id=401;break;
                case '器材':goods_id=401;break;
            }
        }
        let result = await this.ctx.service.adminService.updateProduct(product_name,price,class_id,goods_id,count,id);
        this.ctx.response.body = result;
    }
    async limitbaike(){
        let class_id = this.ctx.request.query.class_id;
        let page = this.ctx.request.query.page;
        let reslut = await this.ctx.service.adminService.limitbaike(class_id,page);
        // console.log(reslut);
        this.ctx.response.body = reslut;
    }
    async getAlllunbo(){
        let class_id = this.ctx.request.query.class_id;
        let result = await this.ctx.service.adminService.getAlllunbo(class_id);
        this.ctx.response.body = result;
    }
    async delbaike(){
        let id = this.ctx.request.body.id;
        let result = await this.ctx.service.adminService.delbaike(id);
        this.ctx.response.body = result;
    }
    //修改订单状态
    async editOderState(){
        let resolve = this.ctx.request.body.resolve;
        let id = this.ctx.request.body.id;
        let result = await this.ctx.service.adminService.editOderState(resolve,id);
        this.ctx.response.body = result;
    }
     //删除已完成订单
     async delOder(){
        let id = this.ctx.request.query.id;
        let result = await this.ctx.service.adminService.delOder(id);
        this.ctx.response.body = result;
    }
    //添加部分，管理员信息提取。
    async getuser() {
        let result = await this.ctx.service.adminService.getusersss();
        this.ctx.response.body = result;
    }
    //重置管理员密码
    async getstartt() {
        let start = this.ctx.request.query.start;
        let passwords = this.ctx.request.query.passwords;
        let result = await this.ctx.service.adminService.getstart(start, passwords);
        this.ctx.response.body = result;
    }
    //删除列表行
    async getdeletss() {
        let id = this.ctx.request.query.passwords;
        let result = await this.ctx.service.adminService.getdelets(id);
        console.log(passwordd);
        this.ctx.response.body = result;
    }
    // 修改百科
    async editEncycle() {
        let pet_name = this.ctx.request.query.pet_name;
        let class_id = this.ctx.request.query.class_id;
        let id = this.ctx.request.query.id;
        
        switch (class_id) {
            case '狗狗类': class_id = 1; break;
            case '猫猫类': class_id = 2; break;
            case '奇趣类': class_id = 3; break;
            case '水族类': class_id = 4; break;
        }
        console.log(class_id)
        console.log(pet_name)
        console.log(id)
        let result = await this.ctx.service.adminService.editEncycle(pet_name, class_id, id);
        this.ctx.response.body = result;
    }
    
    // 获取商品信息
    async getOrderInfo() {
        let result = await this.ctx.service.adminService.getOrderInfo();
        this.ctx.response.body = result;
    }

}
module.exports = adminController;
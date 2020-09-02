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
        const newUrl = "http://192.168.6.24:8001"+toFileName;
        this.ctx.response.body = newUrl; 
    }
    async uplunbo(){
        let lunbo_url = this.ctx.request.body.lunbo_url;
        let class_id = this.ctx.request.body.class_id;
        let result = await this.ctx.service.adminService.uplunbo(lunbo_url,class_id);
        this.ctx.response.body = result;
    }
    async dellunbo(){
        let lunbo_id = this.ctx.request.query.id;
        let result = await this.ctx.service.adminService.dellunbo(lunbo_id);
        this.ctx.response.body = result;
    }
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
        let result = await this.ctx.service.adminService.uploadProduct(product_name,price,discription,img_url,class_id,goods_id);
        this.ctx.response.body = result;
    }
    async upbaike(){
        
    }
    async getAllOrder(){
        let result = await this.ctx.service.adminService.getAllOrder();
        this.ctx.response.body = result;
    }
    async adminGetProduct(){
        let result = await this.ctx.service.adminService.adminGetProduct();
        this.ctx.response.body = result;
    }

}
module.exports = adminController;
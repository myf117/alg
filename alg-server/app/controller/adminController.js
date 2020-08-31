const Controller = require('egg').Controller;
class adminController extends Controller{
    async upFile() {
        const file = this.ctx.request.files[0];
        const toFileName = '/public/upFile/' + Date.now()+ file.filename;
        let to = path.dirname(__dirname)+toFileName;
        await fs.copyFileSync(file.filepath, to);
        await fs.unlinkSync(file.filepath);
        const newUrl = "http://localhost"+toFileName;
        this.ctx.response.body = newUrl; 
    }
    async upPhoto(){
        let photo = this.ctx.request.body.photo;
        let username = this.ctx.request.body.username;
        let result = await this.ctx.service.upFileService.upPhoto(photo, username);
        this.ctx.response.body = result;
    }
    async lunbo(){
        let url = this.ctx.request.body.url;
        let result = this.ctx.service.upFileService.lunbo(url);
        this.ctx.response.body = result;
    }
    async baike(){
        let name = this.ctx.request.body.name;
        console.log(name);
        let content = this.ctx.request.body.content;
        console.log(content);
        let result = this.ctx.service.upFileService.baike(name, content);
        this.ctx.response.body = result;
    }
}
module.exports = adminController;
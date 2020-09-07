const Service = require('egg').Service;
class userService extends Service {
    async login(username,password){
        let sql = 'select * from user where username=?';
        let list1 = await this.ctx.app.mysql.query(sql,[username]);
        if(!list1.length){//如果在用户表中未找到该用户名
            return '用户名错误';
        }else if(list1.length) {//找到用户名后比较用户输入和数据库密码是否相同
            if(password !== list1[0].password){
                return '密码错误';
            }else{//用户名正确和密码正确时才能登陆
                return '可以登录';
            }
        }
    }
    async regist(username,password){
        let sql = 'select * from user where username=?';
        let list1 = await this.ctx.app.mysql.query(sql,[username]);
        if(list1.length){//首先在数据库中根据用户输入的数据进行查询，如果已存在就返回用户名已存在
            return '用户名已存在';
        }else{//当数据库中不存在该用户名时，插入进去
            sql = 'insert into user(username,password) values(?,?)';
            let list2 = await this.ctx.app.mysql.query(sql,[username,password]);
            console.log(list2);
            return '注册成功';
        }
    }
    async addMessage(userMessage) {
        let sql = 'update user set nichen=?,birth=?,sex=?,qianmin=?,head_url=?,address=?,phone=? where username=?';
        let list = await this.ctx.app.mysql.query(sql, [userMessage.nichen, userMessage.birth, userMessage.sex, userMessage.qianmin, userMessage.head_url, userMessage.address, userMessage.phone, userMessage.username]);
        return list;
    }
}
module.exports = userService;
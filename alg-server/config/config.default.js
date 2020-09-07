exports.keys = "dfbgffdsafddgfd";//用于加密，可以随意写一些字母
exports.multipart = {
    mode: 'file',
    fileExtensions: ['.txt'],
    // fileExtensions: ['.doc'],
    // fileExtensions: ['.docx'],
    // fileExtensions: ['.gif'],
};
exports.security = {//post要用的，不设置post请求会失败（文件上传也需要设置）
    csrf: {
		enable: false,
		ignoreJSON: true
	} 
};
exports.mysql = {
    client: {
        host: 'localhost',//连接名，一般都写localhost
        port: '3306',//端口号一般也固定为3306
        user: 'root',//用户名，安装数据库时一般也是使用的root
        password: '123456',//自己安装数据库时设置的密码
        database: 'alg',//本次要用的数据库名称
    },
};
exports.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',

};
exports.cluster = {
    listen: {
        port: 8001,
        // hostname: '192.168.6.11'
        hostname:'localhost'
    }
};
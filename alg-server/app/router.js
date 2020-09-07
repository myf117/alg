module.exports = app => {
    const { router, controller } = app;
    //登录
    router.post('/login', controller.userController.login);
    //注册
    router.post('/regist', controller.userController.regist);
    //请求购物车数据
    router.get('/showlist', controller.shopCartController.showList);
    //从购物车更改商品数量
    router.get('/shopcount', controller.shopCartController.shopCount);
    //删除选中商品
    router.get('/delshoplist', controller.shopCartController.delShopList);
    //
    // router.get('/delshoplist',controller.shopCartController.delShopList);
    //加入购物车
    router.get('/addToCart', controller.shopCartController.addToCart); 
    //提交订单
    router.post('/addToOrder', controller.shopCartController.addToOrder);
    //上传文件
    router.post('/uploadFile', controller.adminController.upFile);
    //管理员添加商品
    router.post('/uploadProduct', controller.adminController.uploadProduct);
    //根据类别显示商品
    router.get('/showClassProduct', controller.shoppingController.showClassProduct);
    //搜索商品
    router.get('/getAllProduct', controller.shoppingController.getAllProduct);
    //首页导航栏底部获取商品信息
    router.get('/getproduct', controller.shoppingController.getproduct);
    //首页获取轮播图
    router.get('/getlunbo', controller.shoppingController.getlunbo);
    //管理员获取全部商品信息
    router.get('/adminGetProduct', controller.adminController.adminGetProduct);
    //管理员获取全部订单信息
    router.get('/getAllOrder', controller.adminController.getAllOrder);
    //管理员上传轮播图图片
    // router.post('/uplunbo',controller.adminController.uplunbo);
    //根据类别获取百科信息
    router.get('/getClassBaike', controller.baikeController.getClassBaike);
    //个人中心完善用户信息
    router.post('/gerenziliao', controller.userController.addMessage);
    //管理员批量删除商品
    router.get('/adminDelProduct', controller.adminController.delProduct);
    //根据id获取商品信息
    router.get('/getByid', controller.shoppingController.getByid);
    //管理员修改商品信息
    router.get('/modifyProduct', controller.adminController.modifyProduct);
    router.get('/getsearch', controller.baikesearchController.getClasskeyBaike);
    //个人中心完善用户信息
    router.post('/gerenziliao',controller.userController.addMessage);
    //个人中心主页的用户头像显示
    router.get('/gettouxiang', controller.adminController.gettouxiang);
    router.get('/getperson', controller.adminController.getperson);
    //分页显示商品
    router.get('/limitClassProduct', controller.shoppingController.limitClassProduct);
    //管理员上传百科
    router.post('/uploadEncycle', controller.adminController.uploadEncycle);
    //管理员上传轮播图图片
    router.post('/addtolunbo', controller.adminController.addtolunbo);
    //管理员修改商品信息
    router.post('/updateProduct', controller.adminController.updateProduct);
    //管理员分页显示百科信息
    router.get('/limitbaike', controller.adminController.limitbaike);
    //管理员获取所有轮播图
    router.get('/getAlllunbo', controller.adminController.getAlllunbo);
    //管理员批量删除百科信息
    router.post('/delbaike', controller.adminController.delbaike);
    //管理员编辑订单状态
    router.post('/editOderState', controller.adminController.editOderState);
    //管理员删除已完成订单
    router.get('/delOder', controller.adminController.delOder);
    //管理员的信息提取
    router.get('/user.do', controller.adminController.getuser);
    //密码重置
    router.get('/start.do', controller.adminController.getstartt);
    //删除列表行
    router.get('/deletes.do', controller.adminController.getdeletss);
    //管理员修改百科信息
    router.get('/editEncycle', controller.adminController.editEncycle);
    //管理员获取商品信息
    router.get('/getOrderInfo', controller.adminController.getOrderInfo);
}
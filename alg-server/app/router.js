module.exports = app => {
    const {router, controller} = app;
    router.post('/login',controller.userController.login);
    router.post('/regist',controller.userController.regist);
    router.get('/showlist',controller.shopCartController.showList);
    router.get('/shopcount',controller.shopCartController.shopCount);
    router.get('/delshoplist',controller.shopCartController.delShopList);
}
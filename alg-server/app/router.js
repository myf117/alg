module.exports = app => {
    const {router, controller} = app;
    router.post('/login',controller.userController.login);
    router.post('/regist',controller.userController.regist);
}
var express = require('express');
var router = express.Router();
var AccountBiz = require('../biz/account_biz');

/* GET 注册 */
router.get('/register', function (req, res, next) {
    AccountBiz.register(req.param('nick_name'), req.param('mobile'), req.param('password'), function () {
        res.json({success: 1});
    });

});
/* GET 登录 */
router.get('/login', function (req, res, next) {
    AccountBiz.login(req.param('mobile'), req.param('password'), function (model) {
        if (!model) {
            res.json({success: 0, msg: '账号或密码错误'});
        }
        else {
            res.json({success: 1, data: model});
        }
    });
});
/* GET 登出 */
router.get('/logout', function (req, res, next) {
    res.json({"url": "/logout"});
});
/* GET 重置密码 */
router.get('/set_password', function (req, res, next) {
    throw new Error("none");
});

module.exports = router;

var express = require('express');
var router = express.Router();
var AccountBiz = require('../biz/account_biz');

/* GET 注册 */
router.post('/register', function (req, res, next) {
    AccountBiz.register(req.param('nick_name'), req.param('mobile'), req.param('password'), function () {
        res.json({errcode: 0});
    });

});
/* GET 登录 */
router.post('/login', function (req, res, next) {
    AccountBiz.login(req.param('mobile'), req.param('password'), function (model) {
        if (!model) {
            res.json({errcode: 1, errmsg: '账号或密码错误'});
        }
        else {
            res.json({errcode: 0, data: model});
        }
    });
});
/* GET 登出 */
router.post('/logout', function (req, res, next) {
    res.json({"url": "/logout"});
});
/* GET 重置密码 */
router.post('/set_password', function (req, res, next) {
    throw new Error("none");
});

module.exports = router;

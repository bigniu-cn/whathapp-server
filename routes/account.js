var express = require('express');
var router = express.Router();

/* GET 注册 */
router.get('/register', function(req, res, next) {
  res.json({"url":"/register"});
});
/* GET 登录 */
router.get('/login', function(req, res, next) {
  res.json({"url":"/login"});
});
/* GET 登出 */
router.get('/logout', function(req, res, next) {
    res.json({"url":"/logout"});
});
/* GET 重置密码 */
router.get('/set_password', function(req, res, next) {
    throw new Error("none");
});

module.exports = router;

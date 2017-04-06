var express = require('express');
var router = express.Router();
var HappenBiz = require('../biz/happen_biz');

/* GET 注册 */
router.get('/list', function (req, res, next) {
    HappenBiz.ListByLocation(req.param('lat'), req.param('lng'), req.param('last_id'), req.param('count'), function (model) {
        res.json({errcode: 0, data: model});
    });
});

module.exports = router;

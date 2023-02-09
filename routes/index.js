var express = require('express');
var router = express.Router();

// INDEX PAGE
router.get('/', function(req, res) {
    res.render('index', {
      title : '가맹점 결제 샘플 페이지'
    });
  });
  
 module.exports = router;
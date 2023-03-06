var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=>{
  res.render('index', {});
});

router.get('/flogin',(req,res,next)=>{
  res.render('flogin', {});
});

module.exports = router;

var express = require('express');
const studentsModel = require('../model/db');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// // 注册接口
router.post('/login',(req,res,next)=>{
  if(req.body.username&&req.body.password){
    var data = new studentsModel({
      username: req.body.username,
      password: req.body.password,
    });
  
    data.save(function(err){
      var url = '';
      //执行增加操作
      if(err){
        console.log("注册失败");
        url = '/regist';
      }else{
        console.log("注册成功");
        url = '/flogin';
      }
      res.redirect(url);
    })
  }
  
})

// // 登录接口
// router.post('/login',(req,res)=>{
//   var data = new studentsModel({
//     username: req.body.username,
//     password: req.body.password,
//   })

//   data.save(function(err){
//     var url = '';
//     //执行增加操作
//     if(err){
//       console.log("注册失败");
//       url = '/regist';
//     }else{
//       console.log("注册成功");
//       url = '/login';
//     }
//     res.redirect(url);
//   })
// })

// // 获取用户名
// router.get('/uname',(req,res)=>{
//   var username = req.session.username; 
//   res.send(username);
// });


// // 退出登录
// router.get('/logout',(req,res)=>{
//   req.session.username = null;
//   res.redirect('/login');
// });



module.exports = router;

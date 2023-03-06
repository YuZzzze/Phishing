const mongoose = require('mongoose'); // 引入 mongoose 依赖包
const dbURI = 'mongodb://localhost:27017/phishing'; // 配置要连接的数据库
// 调用 mongoose 所提供的 connect 方法来连接数据库
mongoose.connect(dbURI,{useNewUrlParser : true,useUnifiedTopology: true});
// 监听 connected 事件，连接成功的话就会触发这个事件
mongoose.connection.on('connected',function(){
    console.log(`数据库已经连接成功，连接至${dbURI}`);
})

const studentsSchema = new mongoose.Schema({
    username : String, // 用户名
    password : String, // 密码
  })



// 生成 model
mongoose.model('studentsModel',studentsSchema,'users');

// 导出模型
module.exports = mongoose.model('studentsModel');

  
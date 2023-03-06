var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var session = require('express-session');
var cors = require('cors');


// 导入路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var articleRouter = require('./routes/article');

var app = express();
app.use(cors());
// view engine setup
// ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// session的配置
app.use(session({
  secret: 'yu zzzze',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 10 }//指定会话的有效时长
}))



// 登录拦截
app.get('*',(req,res,next)=>{
  var username = req.session.username;
  var path = req.path;
  if(path != '/flogin'&& path != '/regist'){
    if(!username){
      return res.redirect('/flogin');
    }
  }
  next();
})

// 挂载路由
app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

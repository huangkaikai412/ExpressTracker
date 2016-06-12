//加载依赖库
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var getUserInfo = require('./user').getUserInfo;

//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '813604',
  database: 'express'
});
connection.connect(function (err) {if (err) throw err;});

//创建express实例
var app = express();

//定义EJS模板引擎和模板文件位置
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//定义静态文件目录
app.use(express.static(path.join(__dirname,'public')));

//定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//建立session模型
app.use(session({
	secret:'1234',
	name:'express',
	cookie:{maxAge:1000*60*20},//设置session保存时间为20分钟
	resave:false,
	saveUninitialized:true
}));

//响应页面请求
app.get('/post',function(req,res) {
	var openid = req.query.openid;
	req.session.userid = openid;
	res.render('post',{
		title:'发布请求'
	});	
});

app.post('/post',function(req,res) {
	//获取表单每项数据
	var openid = req.session.userid;
	var username = req.body.username;
	      address = req.body.adress;
	      company = req.body.company;
	      telephone = parseInt(req.body.telephone);
	var state = 1;
	
	//获取用户个人信息
	getUserInfo(openid).then(function(userInfo){
		var nickname = userInfo.nickname;
		      img = userInfo.headimgurl;
		var msg = [openid,nickname,img,username,address,company,telephone,state];
		console.log(msg);				
	
	//插入数据库
	connection.query('INSERT INTO `list`(`req_ID`,`nickname`,`img`,`usrname`, `address`,`company`,`telephone`,`state`,`time`) VALUES (?,?,?,?,?,?,?,?,NOW())',msg,function(err,doc) {
			if (err) {
				console.log(err);
				return res.redirect('/post');
			}
			console.log('Post sucessfully！');
			return res.redirect('/success');
		});
		
		});
});

app.get('/success',function(req,res) {
	res.render('success',{
		title:'操作成功'
	});	
});

app.get('/list',function(req,res) {
	connection.query('SELECT * FROM  list WHERE state=1',function(err,list) {
		if (err) {
			console.log(err);
			return res.redirect('/post');
		}
		var result = [];
		var total = list.length;
		
		console.log(total);
		if (total > 0) {
			for(i = 0;i<6;i++) {
				if (i>=total) break;
				result.push(list[i]);
			}
		}	
		res.render('list',{
			title:'请求列表',
			result:result
		});
	});	
});

app.get('/listall',function(req,res) {
	connection.query('SELECT * FROM  list WHERE state=1',function(err,result) {
		if (err) {
			console.log(err);
			return res.redirect('/post');
		}	
		
		console.log(result);
		res.render('listall',{
			title:'请求列表',
			result:result
		});
	});	
});


//监听3001端口
app.listen(3001,function(req,res) {
	console.log('app is running at port 3001');
});



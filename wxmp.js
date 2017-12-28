var express=require("express");
var app=express();
var path=require("path");
var http=require("http").Server(app);
var uuid=require("uuid/v4");
var bodyParser=require("body-parser");


// var mysql=require('./db.js');
// var mp=require('./mp.js');


app.use('/mp',express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/*请求日志中间件*/
// app.use((req,res,next)=>{
// 	var rtn=mysql.query("insert into wx_mini_log (time,method,query,ip) values(NOW(),'','"+req.originalUrl+"','"+req.headers["x-real-ip"]+"')",(result)=>{
// 		next();
// 	});
// })

app.get('/mp/',(req,res)=>{
	res.send('hello mp');
})

// app.get('/mp/check',(req,res)=>{
// 	mp.checkSignature(req,res);
// })

app.post('/mp/check',(req,res)=>{
	
})

http.listen(3001,()=>{
	console.log('listening on 3001');
})

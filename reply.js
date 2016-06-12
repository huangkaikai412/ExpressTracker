var appID = require('./config').appID;
var appSecret = require('./config').appSecret;
var getToken = require('./token').getToken;
var getUserInfo = require('./user').getUserInfo;


function reply(msg){			
	getToken(appID, appSecret).then(function(res){
    	var token = res.access_token;
    		request('https://api.weixin.qq.com/cgi-bin/user/info?access_token='+token+'&openid='+res_ID+'&lang=zh_CN', function(err, res, data){
          	var name = JSON.parse(data).nickname;
        //发送消息给求取者
    		request.post({url:'https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token='+token,
    		 form: {
    		"touser": msg.req_ID, 
    		"msgtype": "text", 
    		"text": {
       			 "content": name+"接受了你的请求,正在帮你取快递途中~"
    		}	
    		 }}, function(err,httpResponse,body){console.log(httpResponse) });
    	
    	//发送消息给帮取者	 
    		request.post({url:'https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token='+token,
    		 form: {
    		"touser": msg.res_ID, 
    		"msgtype": "text", 
    		"text": {	
         		"content":'你接受了'+msg.nickname+'的请求,快帮ta把快递安全送到吧~'+' '+msg.usrname+'yizhi '+msg.address+" "+msg.company
    			}	
    		 }}, function(err,httpResponse,body){console.log(httpResponse) });
    		});
    	});
}

module.exports = {
  	reply: reply
};



var appID = require('./config').appID;
var appSecret = require('./config').appSecret;
var getToken = require('./token').getToken;
var getUserInfo = require('./user').getUserInfo;

var request = require('request');

function reply(msg){			
	getToken(appID, appSecret).then(function(res){
    	var token = res.access_token;
    		request('https://api.weixin.qq.com/cgi-bin/user/info?access_token='+token+'&openid='+msg.res_ID+'&lang=zh_CN', function(err, res, data){
          	var name = JSON.parse(data).nickname;
          	console.log(data);
        //发送消息给求取者
    		request({url:'https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token='+token,
    		method: 'POST',
    		json:true,	 
 		body: {
 			"touser": msg.res_ID, 
    		"msgtype": "text", 
    		"text": {	
         		"content":name+"接受了你的的请求,即将把快递送到你手上~"
    			}	
    		}}, function(err,httpResponse,body){
    		if (err) {
    			return console.error('Send failed:', err);
 			}
  			console.log('Server responded with:', body);
  		});
    	
    	//发送消息给帮取者	
    		request({url:'https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token='+token,
    		method: 'POST',
    		json:true,	     		
    		body: {
    		"touser": msg.res_ID, 
    		"msgtype": "text", 
    		"text": {	
         		"content":"你接受了"+msg.nickname+"的请求,快帮ta把快递安全送到吧~\n"+"快递信息:"+msg.usrname+" "+msg.address+" "+msg.company
    			}	
    		}}, function(err,httpResponse,body){
    		if (err) {
    			return console.error('Send failed:', err);
 			}
  			console.log('Server responded with:', body);
  		});
    		 
    		});
    	});
}

module.exports = {
  	reply: reply
};


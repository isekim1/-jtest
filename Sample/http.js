 
//서버만들기 
var http = require ('http');
var server = http.createServer();

var port = 3000;

server.listen(port,function(){  //해당 포트에서 리퀘스트가 오도록 요청하는것
    console.log("Start Server");
});
 

server.on('connection', function(socket)
{
    var addr = socket.address();
    console.log ("누군가 접속함.");
});

server.on('request', function(req,res) {
    console.log ("누군가 요청함.");

    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});  
    res.write("반갑습니다.");
    res.end();

});

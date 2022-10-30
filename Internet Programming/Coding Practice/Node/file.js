var http = require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    fs.readFile('sample.html',function(err,data){
        res.write(data)
        res.end()
    })
}).listen(4000);
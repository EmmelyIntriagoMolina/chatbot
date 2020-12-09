
const fs = require('fs')
const http = require('http')
const index = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
http.createServer((request,response)=>{
    const { url } = request;
    if (url==='/') 
    {
        response.writeHead(200, {"Content-type":"text/html"});
        response.write(index);
    }
    else if (url==='/about')
    {
        response.writeHead(200, {"Content-type":"text/html"});
        response.write(about);
    }
    else
    {
        response.writeHead(404, {"Content-type":"text/html"});
        response.write("Not found!!");
    }
})
.listen(3000, ()=>{
    console.log('Servidor corriendo')
})
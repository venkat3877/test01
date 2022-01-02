const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==="/hello" && req.method=="GET"){
        res.writeHead(200,{ 'Content-Type': 'text/plain' })
        res.write("Hello Geeksters")
        res.end()
    }
  
})
server.listen(5000,console.log("server started at port 5000"))
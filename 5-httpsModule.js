const http = require('http')

const sever = http.createServer((req,res)=>{
    res.write("Hello this is NodeJS")
    res.end()
})
sever.listen(1111)
//it can run on p
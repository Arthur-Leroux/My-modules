//j'importe le module natif 
const http = require('http');
//j'importe mon module perso
const ucfirst = require(`./my-modules/ucfirst`);
//je créer le server
const server = http.createServer();


server.on('request',(req,res)=>{

res.write(ucfirst(`la premiere lettre en majusucule grace a mon module "ucfirst"`));

    res.end();
})

const port = 3000;
server.listen(port,()=>{
   // console.log(`listening on : http://localhost:${port}`)
})
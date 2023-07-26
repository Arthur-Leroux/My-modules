//j'importe le module natif 
const http = require('http');
//j'importe mon module perso
const ucfirst = require(`./my-modules/ucfirst`);
const {date} = require(`./my-modules/daysjs`);
const dayjs = require('dayjs');
//je créer le server
const server = http.createServer();


server.on('request',(req,res)=>{
const url = req.url
res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>`)
switch(url){
    case `/`:
        res.write(`Vous voici sur une Page qui contient des rendu de modules qu'ils soient natif ou maison
        en tapand la bonne url`)
        res.write(`Voici la liste des url`) 
        res.write(`<ul>
        <li>/ucfirst : ${ucfirst(`mettre la premiere lettre en majuscule`)}</li>
        <li>/date : ${date()}</li>
        </ul>`);

case`/ucfirst`:

res.write(ucfirst(`la premiere lettre en majusucule grace a mon module "ucfirst"`));
break;
case`/date`:
res.write(`<p>${date()}</p>`);
break;
default :
res.write(`Cette page n'est pas disponible`);
  
}
res.write(`</body>
</html>`)

res.end();
})

const port = 3000;
server.listen(port,()=>{
   console.log(`listening on : http://localhost:${port}`)
})
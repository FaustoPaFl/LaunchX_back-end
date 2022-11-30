const http = require('http');//cargando modulo de Node.js
const retrieveDate = require('./modules/retrievedate');//cargamos un modulo propio que esta en ./modules/retrievedate
//que regresa la fecha del server
const url = require('url')

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('La fecha y hora es: ' + retrieveDate.RetrieveDate());
    const query = url.parse(req.url, tru).query;
    const text = query.year + ' ' + query.month 
    res.end("Holaaaaaaa Mundo!!!!!");
}).listen(8080);
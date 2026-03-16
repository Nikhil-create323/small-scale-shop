// const method = req.method;
const fs = require('fs');
// function  requestHandler(req, res) {}
const requestHandler = (req,res) => {
    url = req.url;
    method = req.method;
    if(url === '/') {
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        }
    
        if(url === '/message' && method === 'POST') {
            const body = [];
    
            req.on('data', (chunk) => {
                console.log(chunk);
                body.push(chunk);
            })
    
            req.on('end', () => {  //use return to avoid the piece of code below this to execute
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split('=')[1];
                console.log(parsedBody);
                fs.writeFileSync('message.txt', message, err => {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                });  //block file execution untill this file is created 
            });
        }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body>hello duniya</body></html>')
    res.end();  
};

module.exports = requestHandler; // globally available objects
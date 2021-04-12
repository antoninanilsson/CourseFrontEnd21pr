const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method)
  
    // res.end('<h1>kjasnd</h1>')
  
    res.setHeader('Content-type', 'text/html');
  
    let url;
  
    switch(req.url) {
      case '/':
        url = 'index.html'
        res.statusCode = 200;
        break;
      case '/about':
        url = 'about.html'
        res.statusCode = 200;
        break;
      case '/about-us':
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
      default:
        url = '404.html'
        res.statusCode = 404;
    }
  
  
  
    let filePath = path.join(__dirname, 'views', url)
  
    fs.readFile(filePath, (err, data) => {
      if(err)
        console.log(err);
      else
        res.end(data);
    })
  
  })
  
  const PORT = process.env.PORT || 9999;
  
  server.listen(PORT, 'localhost', () => {
    console.log('server running at http://localhost:' + PORT)
  })

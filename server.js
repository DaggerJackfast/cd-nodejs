const http = require('http');
const {publicStatic, home, search, notFound} = require('./routes');
http.createServer((req, res) => {
    if (req.url.match(/\.(html|css|js|png)$/)) {
        publicStatic(req, res);
    } else if (req.url === "/") {
        home(req, res);
    } else if (req.url.startsWith('/search')) {
        search(req, res)
    } else {
        notFound(req, res)
    }
}).listen(3000, () => console.log('Server is running at http://localhost:3000'));
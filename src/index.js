// src/index.js
const http = require('http');

const PORT = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  // simple router (expand later)
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Hello World');
  }

  // 404 default
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Blogify server listening on http://localhost:${PORT}`);
});

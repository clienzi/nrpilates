const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function resolveFile(requestPath) {
  const safePath = path.normalize(requestPath).replace(/^([.][.][/\\])+/, '');
  const rootFile = path.join(root, safePath);
  if (rootFile.startsWith(root) && fs.existsSync(rootFile) && fs.statSync(rootFile).isFile()) return rootFile;
  const publicFile = path.join(root, 'public', safePath);
  if (publicFile.startsWith(path.join(root, 'public')) && fs.existsSync(publicFile) && fs.statSync(publicFile).isFile()) return publicFile;
  return null;
}

const server = http.createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const normalized = requestPath === '/' ? '/index.html' : requestPath;
  const filePath = resolveFile(normalized);
  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`NR Pilates site listening on 0.0.0.0:${port}`);
});

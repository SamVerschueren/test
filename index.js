const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const code = `
  <div id="foo"></div>
  <script>
    let counter = 0;

    try {
      counter = Number(localStorage.getItem('count') ?? '0')
    } catch {}

    counter++;

    document.getElementById('foo').innerText = counter;

    localStorage.setItem('count', counter);
  </script>
`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(code);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

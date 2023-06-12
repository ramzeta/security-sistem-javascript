'use strict'

const http = require('http');
const httpProxy = require('http-proxy');

// Configura las opciones del proxy
const proxyOptions = {
  target: 'http://localhost:3000', // El servidor de destino al que se redirigirán las solicitudes
  changeOrigin: true // Cambia el encabezado del origen de la solicitud
};

// Crea un servidor proxy HTTP
const proxy = httpProxy.createProxyServer(proxyOptions);

// Crea un servidor HTTP para recibir las solicitudes
const server = http.createServer((req, res) => {
  // Redirige la solicitud al servidor de destino
  proxy.web(req, res);
});

function fetchResponseFromServer(req, res) {
  // Código para obtener la respuesta del servidor
  // (por ejemplo, usando http o axios)
}

// Maneja los errores del proxy
proxy.on('error', (err, req, res) => {
  console.error('Error en el proxy:', err);
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end('Hubo un error en el proxy');
});

// Inicia el servidor en el puerto 8080
server.listen(8080, () => {
  console.log('Servidor de reverse proxy escuchando en el puerto http://127.0.0.1:8080');
});

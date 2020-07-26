import http from 'http';
import app from '../src/app';
require('dotenv').config();
const port = normalizePort(process.env.PORT || '3000');
const server = http.createServer(app);
server.listen(port)
console.log('Servidor rodando na porta: '+port);
function normalizePort(val: string)
{
  const port = parseInt(val,10);
  if(isNaN(port))
    return val;
  if( port > 0)
    return port;
  return false;
}
/**
 * Description: Create https server and show lifecycle-events.
 * You need write in your browser: https://localhost:443/
 */


import https from 'https';
import fs from 'fs';
import path from 'path';


/** Define configuration */
const config = {
  port: 443,
};

const __dirname = path.resolve();

// Create server instance.
const server = https.createServer({
  key: fs.readFileSync(`${__dirname}/src/http2/localhost-privkey.pem`),
  cert: fs.readFileSync(`${__dirname}/src/http2/localhost-cert.pem`),
});


server.listen(config, () => { console.log(`Server   | Running on: ${config.host} and port: ${config.port}`); });
server.on('listening', () => { console.log('Server   | Listening\n'); });
server.on('connection', () => { console.log('Server   | Connection ⤵️'); console.log('---------- | -------------'); });
server.on('close', () => { console.log('Server   | Close'); });
server.on('error', (err) => { console.log('Server   | Error', err); });

server.on('request', (request, response) => {

  console.log('Server   | Request ⤵️');

  request.on('resume', () => { console.log('Request  | Resume ⤵️'); });
  request.on('data', () => { console.log('Request  | Data ⤵️'); });
  request.on('end', () => { 
    console.log('Request  | End ⤵️');
    response.end(null, 'utf8', () => { console.log('Response | End ⤵️'); });
  });
  request.on('close', () => { console.log('Request  | Close ⤵️'); });
  request.on('error', () => { console.log('Request  | Error'); });
  response.on('close', () => { console.log('Response | Close 🏁'); });
  response.on('finish', () => { console.log('Response | Finish ⤵️'); });
});

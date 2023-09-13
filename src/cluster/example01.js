import cluster from 'cluster';
import http from 'http';
import os from 'os';


console.log('process info @ ', process.version, process.platform, process.env.SHELL, process.pid);

const PORT = 8000;
const cpus = os.cpus();


// either change node version to 18  ====> cluster.isPrimary            // WORKS 
// node <16 =============================> cluster.isMaster             // WORKS
if (cluster.isPrimary) {                           // isMaster deprecated since node 16... use isPrimary
  console.info(`CPUs number: ${cpus.length}`);
  console.log(`Master ${process.pid} is running`);
  cpus.forEach(() => { cluster.fork(); });
  cluster.on('listening', (worker, address) => { console.log(`Worker ${worker.process.pid} Listening with PORT ${address.port}`); });
} else {
  http.createServer((req, res) => { res.writeHead(200); res.end('hello world\n'); }).listen(PORT);
  console.info(`Worker ${process.pid} Start HTTP Server PORT ${PORT}`);
}

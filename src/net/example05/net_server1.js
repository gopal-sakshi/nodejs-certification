const net = require('net');  


const sendRegularMessages = () => {

}

var server = net.createServer((socket) => {  
  setInterval(() => {
    socket.write('malare');
  },3000);  
  // sendRegularMessages();
  // socket.end('goodbye\n');  
}).on('error', (err) => {  
  // handle errors here  
  throw err;  
});  
// grab a random port.  
server.listen(3088, () => {  
  address = server.address();  
  console.log('opened server on %j', address);  
});  


/*
  net.createserver ============> 
    creates a tcp server; 
    this tcp server knows         ---> when a TCP connection happened ---- data is transmitted 
    this tcp server has no idea   ---> about valid HTTP request
    In TCP (sockets), it is a different paradigm. 
      The client opens a longer-lived channel between it and the server, 
      where both can send each other anything (data) anytime. 
      Any one can terminate at any time
    

  http.createserver ===========> 
    creates an http server; 
    it handles HTTP protocol
    request-response paradigm of communication. Requests come from clients and responses from server.
    Every HTTP server you create is necessarily also a TCP server (or) every HTTP request uses TCP as its transfer protocol.




*/
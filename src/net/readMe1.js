http.createServer()
// handles the HTTP protocol, which is transmitted over tcp
// if creating webServer, use http.createServer()

net.createServer()
// works on tcp; but doesnt understand http protocol
// use net.createServer() for FTP, SMTP protocol
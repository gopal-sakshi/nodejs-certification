process.on('beforeExit', code => {} );
process.on('exit', code => {} );
process.on('unhandledRejection', () => {} );
process.on('warning', () => {} );
process.on('uncaughtException', () => { });     // calling a function which isn´t defined.
process.on();  


process.emitWarning();

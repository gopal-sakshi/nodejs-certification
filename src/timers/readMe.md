# execution order
synchronous code
immediately resolved promise ====> Promise.resolve()
process.nextTick()
setImmediate()
setTimeout(() => {}, 0)
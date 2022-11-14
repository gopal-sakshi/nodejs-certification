setTimeout(() => console.log("timeout"));           // 3 =====> macroTask Queue

Promise.resolve()
  .then(() => console.log("promise"));              // 2 ======> microTask Queue

console.log("code");                                // 1 ======> regular synchronous call

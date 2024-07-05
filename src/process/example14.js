/**
 * Description: The bigint version of the process.hrtime() method returning the current
 *              high-resolution real time in nanoseconds.
 */

/** Require generics dependences */


const start = process.hrtime.bigint();
// 191051479007711n

setTimeout(() => {
  const end = process.hrtime.bigint();
  // 191052633396993n

  console.log(`Benchmark took ${end - start} nanoseconds`);
  // Benchmark took 1154389282 nanoseconds
}, 1000);

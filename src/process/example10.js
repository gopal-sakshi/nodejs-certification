/**
 * Description: The process.emitWarning() method can be used to emit
 *              custom or application specific process warnings.
 */

/** Require generics dependences */


// Emit a warning with a code and additional detail.
process.emitWarning('Something happened23!', {
  code: 'MY_WARNING44',
  detail: 'This is some additional information',
});

process.on('warning', (warning) => {
  console.warn(warning.name); // 'Warning'
  console.warn(warning.message); // 'Something happened!'
  console.warn(warning.code); // 'MY_WARNING'
  console.warn(warning.stack); // Stack trace
  console.warn(warning.detail);// 'This is some additional information'
});

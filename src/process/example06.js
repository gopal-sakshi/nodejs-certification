/**
 * Description: Use uncaughtException event for get all error of function without try/catch control.
 */

/** Require generics dependences */


process.on('uncaughtException', (err, origin) => {
  console.warn('uncaughtException', err, origin);
});

/*
 * Bad: uncaughtException event will be launched if you call
 * a function when this isn´t defined.
 */
// functionNotFound();

/*
 * Good: if you work with try and catch and your not defined
 * function is into try uncaughtException not will be launched.
 */
try {
  functionNotFound();
} catch (err) {
  // console.error(err);
  console.log('pappa MAX')
}

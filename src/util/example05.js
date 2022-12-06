/**
 * Description: Return console with color in terminal and params.
 */

/** Import generics dependences */
import util from 'util';

const result1 = util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 });
const result2 = util.formatWithOptions({ colors: true }, { foo: 42 }, 'See object %O');
console.log(result1);
console.log(result2);

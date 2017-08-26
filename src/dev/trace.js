import R from 'ramda';

console.log('********** CAUTION: Trace has been imported. Make sure you remove it for production ***********');

/**
 * Trace the values that are passed between functions in compose(). Helps debug composed functions.
 *
 * e.g.
 *
 * 		const left = () => 'world';
 * 		const middle = () => 'there';
 * 		const right = () => 'hello';
 *
 * 		const result = compose(left, middle, trace('*** output of right function: '), right);
 * 		//> *** output of right function: hello
 *
 * 		const result = compose(left, trace('*** output of middle function: '), middle, right);
 * 		//> *** output of middle function: there
 */
export default R.curry((tag, x) => {
    console.log(tag, x);
    return x;
});

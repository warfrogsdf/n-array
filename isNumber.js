/**
 * Created by LI on 2017/1/28.
 */
/**
 *
 * @param number {Number}
 * @return {Boolean}
 */
/*export default function isNumber(number) {
    return Object.prototype.toString.call(number) === "[object Number]";
};*/

module.exports = function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Number]";
};
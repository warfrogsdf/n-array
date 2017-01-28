/**
 * Created by LI on 2017/1/28.
 */
/**
 *
 * @param arr {Array}
 * @return {boolean}
 */
/*export default function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
};*/

module.exports = function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
};
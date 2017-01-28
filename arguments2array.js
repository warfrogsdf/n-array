/**
 * Created by LI on 2017/1/28.
 */
/**
 *
 * @param args {Arguments}
 * @return {Array}
 */
/*export default function arguments2Array(args) {
    return Array.prototype.slice.call(args, 0);
};*/

module.exports = function arguments2Array(args) {
    return Array.prototype.slice.call(args, 0);
};
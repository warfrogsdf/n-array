/**
 * Created by LI on 2017/1/28.
 */
module.exports = function isArray(str) {
    return Object.prototype.toString.call(str) === "[object String]";
};
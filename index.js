/**
 * Created by LI on 2017/1/28.
 */
let isArray = require("./isArray");
let isNumber = require("./isNumber");
let isString = require("./isString");
let arguments2array = require("./arguments2array");

/**
 * check n dimension array boundary error
 * @param dimensionArgs
 * @param dimensionArr
 */
let isParamBoundaryRight = function (dimensionArgs, dimensionArr) {
    return dimensionArgs.length === dimensionArr.length &&
    dimensionArr.every(function (item, index, array) {
        return dimensionArgs[index] < item;
    })
};

/**
 * map n dimension index to one dimension index
 * @param args array liked, belong n dimension array index info
 * @param dimensionArr {Array}
 * @returns {number} one dimension array info
 */
let nTo1Map = function (args, dimensionArr) {
    let i = 0;
    let l = args.length;
    let d = [];
    for(; i < l; ++i){
        d.push(args[i]);
    }

    return d.reduce(function (pre, cur, index, array) {
        return pre + array[index] * dimensionArr.slice(index + 1).reduce(function (pre, cur, index, array) {
                return pre * cur;
            }, 1)
    }, 0);
};

/**
 * create n dimension array
 * the core is one dimension array emulate n dimension array
 * @param dimensionArr {Array} ex [1,2,3], the value of dimensionArr map n dimension array
 * @param defaultValue {String | Undefined}
 */
module.exports = function nArray(dimensionArr, defaultValue) {
    let arr;

    // if first param not array
    if(!isArray(dimensionArr)){
        return false;
    }

    // defaultValue can undefined or string
    if(defaultValue && !isString(defaultValue)){
        return false;
    }

    // if array length is 0 or array has zero value
    if (!dimensionArr.every(function (item, index, array) {
            return isNumber(item);
        })){
        return false;
    }


    let l = dimensionArr.reduce(function (pre, cur, index, array) {
        return pre * cur;
    });

    if (defaultValue){
        arr = new Array(l + 1).join(defaultValue + ",").split(",");
        arr.length = l;
    }else{
        arr = new Array(l);
    }
    return {
        set: function () {
            if (!isParamBoundaryRight(arguments2array(arguments).slice(0, arguments.length - 1), dimensionArr)){
                return false;
            }
            arr[nTo1Map(arguments2array(arguments).slice(0, arguments.length - 1), dimensionArr)] = arguments[arguments.length - 1];
            return this;
        },
        get: function () {
            if (!isParamBoundaryRight(arguments2array(arguments), dimensionArr)){
                return false;
            }
            return arr[nTo1Map(arguments2array(arguments), dimensionArr)];
        }
    }
};
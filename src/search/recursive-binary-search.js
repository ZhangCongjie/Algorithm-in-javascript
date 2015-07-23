/*
 * @module二分查找算法
 * @param {Array} input array
 * @param {Number} input search value
 */

var recursiveBinarySearch = (function() {

    function recursive(array, value, left, right) {
        if (left > right) {
            return -1;
        }

        var middle = Math.floor((right + left) / 2);
        if (array[middle] === value) {
            return middle;
        } else if (array[middle] < value) {
            return recursive(array, value, middle + 1, right);
        } else {
            return recursive(array, value, left, middle - 1);
        }
    }

    return function(array, value) {
        return recursive(array, value, 0, array.length);
    };

}());

module.exports.recursiveBinarySearch = recursiveBinarySearch;

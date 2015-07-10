/*
 * @module二分查找算法
 * @param {Array} input array
 * @param {Number} input search value
 */
function binarySearch(array, value) {
    var middle = Math.floor(array.length / 2);
    var start = 0;
    var end = array.length; 

    while (start <= end) {
        var middleValue = array[middle];

        if (value === middleValue) {
            return middle;
        } else if (value < middleValue) {
            end = middle -1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2);
    }
    return -1;
}

module.exports.binarySearch = binarySearch;

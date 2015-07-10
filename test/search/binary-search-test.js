var should = require('should');
var binarySearch = require('../../src/search/binary-search.js').binarySearch;

describe('binary-search', function() {
    it("should return 0 when value is first number in array", function(done) {
        binarySearch([1,2,3,4,5], 1).should.equal(0);
        done();
    });
    it("should return length - 1 when value is last number in array", function(done) {
        binarySearch([1,2,3,4,5], 5).should.equal([1,2,3,4,5].length - 1);
        done();
    });
    it("should return -1 when value is not in array" ,function(done) {
        binarySearch([1,2,3,4,5], 6).should.equal(-1);
        done();
    });
    it("should return -1 when array is empty" ,function(done) {
        binarySearch([], 6).should.equal(-1);
        done();
    });
});



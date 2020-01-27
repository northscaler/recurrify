/* eslint-env mocha */
var recurrify = require('../../../main')

var should = require('should')

describe('recurrify.array.prev', function () {
  it('should exist', function () {
    should.exist(recurrify.array.prev)
  })

  it('should return the prev highest value', function () {
    var arr = [1, 2, 4, 5]

    var cur = 3

    var extent = [1, 5]

    var expected = 2

    var actual = recurrify.array.prev(cur, arr, extent)

    actual.should.eql(expected)
  })

  it('should return the prev highest value with array size of 1', function () {
    var arr = [1]

    var cur = 3

    var extent = [1, 5]

    var expected = 1

    var actual = recurrify.array.prev(cur, arr, extent)

    actual.should.eql(expected)
  })

  it('should return the prev highest value with array size of 1 with zero value', function () {
    var arr = [0]

    var cur = 10

    var extent = [1, 5]

    var expected = 0

    var actual = recurrify.array.prev(cur, arr, extent)

    actual.should.eql(expected)
  })

  it('should return the prev highest value which might be the last value', function () {
    var arr = [1, 2, 3, 4, 5]

    var cur = 6

    var extent = [1, 5]

    var expected = 5

    var actual = recurrify.array.prev(cur, arr, extent)

    actual.should.eql(expected)
  })

  it('should return the prev highest value, wrapping if needed', function () {
    var arr = [1, 2, 3, 4, 5]

    var cur = 0

    var extent = [0, 5]

    var expected = 5

    var actual = recurrify.array.prev(cur, arr, extent)

    actual.should.eql(expected)
  })

  it('should return the prev highest value, which might be zero value', function () {
    var arr = [2, 3, 4, 5, 0]

    var cur = 1

    var extent = [1, 10]

    var expected = 0

    var actual = recurrify.array.prev(cur, arr, extent)

    actual.should.eql(expected)
  })

  it('should return current value when it is in the list', function () {
    var arr = [1, 2, 4, 5, 0]

    var cur = 4

    var extent = [1, 10]

    var expected = 4

    var actual = recurrify.array.prev(cur, arr, extent)

    actual.should.eql(expected)
  })

  it('should return the prev highest value when cur is greater than last value', function () {
    var arr = [1, 2, 4, 5, 0]

    var cur = 12

    var extent = [1, 10]

    var expected = 0

    var actual = recurrify.array.prev(cur, arr, extent)

    actual.should.eql(expected)
  })
})

var expect = require('chai').expect
// var _ = require('lodash')

var displayNote = require('./display-note')

/* Definitions for JS Standard */
/* global describe, it */

describe('Display Note', function () {
  it('should be a function', function (done) {
    expect(displayNote).to.be.a('function')
    done()
  })
})

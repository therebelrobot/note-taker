var path = require('path')
var fs = require('fs')
var glob = require('glob')
var _ = require('lodash')

/* Definitions for JS Standard */
/* global describe */

// Unit Tests

describe('Unit tests', function () {
  describe('Components', function () {
    // Find and run all spec files in report folder
    var reportHelperSpecPath = __dirname + '/../src/js/**/*.spec.js'
    var globs = glob.sync(reportHelperSpecPath)
    _.forEach(globs, function (filepath) {
      var absPath = path.resolve(__dirname, filepath)
      var globExists = fs.existsSync(absPath)
      if (globExists) {
        return require(filepath)
      }
      throw new Error("file doesn't exist! " + absPath)
    })
  })
})

const dev = require('../src/index')
const { expect } = require('chai')

describe('dme-template', function () {
  it('dev is function', function () {
    expect(dev).to.be.function;
  })

  it('dev() result is "Hello World"', function () {
    expect(dev()).to.be.equal('Hello World');
  })
})
'use strict';

var main = require('../lib');
var expect = require('chai').expect;

describe('Datatables main', function() {
  context('The Serve Function does not receive a model or request object', function () {
    it('should throw an exception when no model', function () {
      expect(function(){
        main.getResponse(undefined, {});
      }).to.throw('You must provide a model and a config');
    });
    it('should throw an exception when no request', function () {
      expect(function(){
        main.getResponse({}, undefined);
      }).to.throw('You must provide a model and a config');
    });
  });
});

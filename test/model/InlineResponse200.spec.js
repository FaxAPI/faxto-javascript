/**
 * Fax.to REST API client for Javascript
 * This is Fax.to REST API client for Javascript.
 *
 * OpenAPI spec version: 2.0.0
 * Contact: inquiries@fax.to
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FaxtoRestApiClientForJavascript);
  }
}(this, function(expect, FaxtoRestApiClientForJavascript) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FaxtoRestApiClientForJavascript.InlineResponse200();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse200', function() {
    it('should create an instance of InlineResponse200', function() {
      // uncomment below and update the code to test InlineResponse200
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse200();
      //expect(instance).to.be.a(FaxtoRestApiClientForJavascript.InlineResponse200);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property faxJobId (base name: "fax_job_id")', function() {
      // uncomment below and update the code to test the property faxJobId
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property userCashBalance (base name: "user_cash_balance")', function() {
      // uncomment below and update the code to test the property userCashBalance
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property cost (base name: "cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));

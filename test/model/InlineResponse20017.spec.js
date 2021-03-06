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
    instance = new FaxtoRestApiClientForJavascript.InlineResponse20017();
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

  describe('InlineResponse20017', function() {
    it('should create an instance of InlineResponse20017', function() {
      // uncomment below and update the code to test InlineResponse20017
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse20017();
      //expect(instance).to.be.a(FaxtoRestApiClientForJavascript.InlineResponse20017);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse20017();
      //expect(instance).to.be();
    });

    it('should have the property numbers (base name: "numbers")', function() {
      // uncomment below and update the code to test the property numbers
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse20017();
      //expect(instance).to.be();
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse20017();
      //expect(instance).to.be();
    });

  });

}));

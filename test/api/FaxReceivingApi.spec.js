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
    instance = new FaxtoRestApiClientForJavascript.FaxReceivingApi();
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

  describe('FaxReceivingApi', function() {
    describe('areaCodesCountryCodeStateIdGet', function() {
      it('should call areaCodesCountryCodeStateIdGet successfully', function(done) {
        //uncomment below and update the code to test areaCodesCountryCodeStateIdGet
        //instance.areaCodesCountryCodeStateIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('countriesCountryCodeDidGroupsGet', function() {
      it('should call countriesCountryCodeDidGroupsGet successfully', function(done) {
        //uncomment below and update the code to test countriesCountryCodeDidGroupsGet
        //instance.countriesCountryCodeDidGroupsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('countriesGet', function() {
      it('should call countriesGet successfully', function(done) {
        //uncomment below and update the code to test countriesGet
        //instance.countriesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('incomingFaxesGet', function() {
      it('should call incomingFaxesGet successfully', function(done) {
        //uncomment below and update the code to test incomingFaxesGet
        //instance.incomingFaxesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('incomingFaxesRecipientGet', function() {
      it('should call incomingFaxesRecipientGet successfully', function(done) {
        //uncomment below and update the code to test incomingFaxesRecipientGet
        //instance.incomingFaxesRecipientGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('numbersGet', function() {
      it('should call numbersGet successfully', function(done) {
        //uncomment below and update the code to test numbersGet
        //instance.numbersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('provisionNumbersGet', function() {
      it('should call provisionNumbersGet successfully', function(done) {
        //uncomment below and update the code to test provisionNumbersGet
        //instance.provisionNumbersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('statesCountryCodeGet', function() {
      it('should call statesCountryCodeGet successfully', function(done) {
        //uncomment below and update the code to test statesCountryCodeGet
        //instance.statesCountryCodeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

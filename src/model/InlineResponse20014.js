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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse20014Areacodes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20014Areacodes'));
  } else {
    // Browser globals (root is window)
    if (!root.FaxtoRestApiClientForJavascript) {
      root.FaxtoRestApiClientForJavascript = {};
    }
    root.FaxtoRestApiClientForJavascript.InlineResponse20014 = factory(root.FaxtoRestApiClientForJavascript.ApiClient, root.FaxtoRestApiClientForJavascript.InlineResponse20014Areacodes);
  }
}(this, function(ApiClient, InlineResponse20014Areacodes) {
  'use strict';




  /**
   * The InlineResponse20014 model module.
   * @module model/InlineResponse20014
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20014</code>.
   * @alias module:model/InlineResponse20014
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse20014</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20014} obj Optional instance to populate.
   * @return {module:model/InlineResponse20014} The populated <code>InlineResponse20014</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('areacodes')) {
        obj['areacodes'] = ApiClient.convertToType(data['areacodes'], [InlineResponse20014Areacodes]);
      }
    }
    return obj;
  }

  /**
   * The status of the API request
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Area Codes data
   * @member {Array.<module:model/InlineResponse20014Areacodes>} areacodes
   */
  exports.prototype['areacodes'] = undefined;



  return exports;
}));



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
    define(['ApiClient', 'model/InlineResponse20017Numbers', 'model/InlineResponse2004Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20017Numbers'), require('./InlineResponse2004Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.FaxtoRestApiClientForJavascript) {
      root.FaxtoRestApiClientForJavascript = {};
    }
    root.FaxtoRestApiClientForJavascript.InlineResponse20017 = factory(root.FaxtoRestApiClientForJavascript.ApiClient, root.FaxtoRestApiClientForJavascript.InlineResponse20017Numbers, root.FaxtoRestApiClientForJavascript.InlineResponse2004Meta);
  }
}(this, function(ApiClient, InlineResponse20017Numbers, InlineResponse2004Meta) {
  'use strict';




  /**
   * The InlineResponse20017 model module.
   * @module model/InlineResponse20017
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20017</code>.
   * @alias module:model/InlineResponse20017
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse20017</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20017} obj Optional instance to populate.
   * @return {module:model/InlineResponse20017} The populated <code>InlineResponse20017</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('numbers')) {
        obj['numbers'] = ApiClient.convertToType(data['numbers'], [InlineResponse20017Numbers]);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = InlineResponse2004Meta.constructFromObject(data['meta']);
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
   * Numbers data
   * @member {Array.<module:model/InlineResponse20017Numbers>} numbers
   */
  exports.prototype['numbers'] = undefined;
  /**
   * @member {module:model/InlineResponse2004Meta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


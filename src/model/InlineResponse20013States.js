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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FaxtoRestApiClientForJavascript) {
      root.FaxtoRestApiClientForJavascript = {};
    }
    root.FaxtoRestApiClientForJavascript.InlineResponse20013States = factory(root.FaxtoRestApiClientForJavascript.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20013States model module.
   * @module model/InlineResponse20013States
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20013States</code>.
   * @alias module:model/InlineResponse20013States
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse20013States</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20013States} obj Optional instance to populate.
   * @return {module:model/InlineResponse20013States} The populated <code>InlineResponse20013States</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;



  return exports;
}));



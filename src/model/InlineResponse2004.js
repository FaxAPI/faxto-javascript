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
    define(['ApiClient', 'model/InlineResponse2004Inbox', 'model/InlineResponse2004Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2004Inbox'), require('./InlineResponse2004Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.FaxtoRestApiClientForJavascript) {
      root.FaxtoRestApiClientForJavascript = {};
    }
    root.FaxtoRestApiClientForJavascript.InlineResponse2004 = factory(root.FaxtoRestApiClientForJavascript.ApiClient, root.FaxtoRestApiClientForJavascript.InlineResponse2004Inbox, root.FaxtoRestApiClientForJavascript.InlineResponse2004Meta);
  }
}(this, function(ApiClient, InlineResponse2004Inbox, InlineResponse2004Meta) {
  'use strict';




  /**
   * The InlineResponse2004 model module.
   * @module model/InlineResponse2004
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2004</code>.
   * @alias module:model/InlineResponse2004
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2004} obj Optional instance to populate.
   * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('inbox')) {
        obj['inbox'] = ApiClient.convertToType(data['inbox'], [InlineResponse2004Inbox]);
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
   * The faxes received by a certain user
   * @member {Array.<module:model/InlineResponse2004Inbox>} inbox
   */
  exports.prototype['inbox'] = undefined;
  /**
   * @member {module:model/InlineResponse2004Meta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));



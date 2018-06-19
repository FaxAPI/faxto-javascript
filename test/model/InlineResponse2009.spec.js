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
    instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
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

  describe('InlineResponse2009', function() {
    it('should create an instance of InlineResponse2009', function() {
      // uncomment below and update the code to test InlineResponse2009
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be.a(FaxtoRestApiClientForJavascript.InlineResponse2009);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property filename (base name: "filename")', function() {
      // uncomment below and update the code to test the property filename
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property origFilename (base name: "orig_filename")', function() {
      // uncomment below and update the code to test the property origFilename
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property previewFile (base name: "preview_file")', function() {
      // uncomment below and update the code to test the property previewFile
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property previewImage (base name: "preview_image")', function() {
      // uncomment below and update the code to test the property previewImage
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property previewInStorage (base name: "preview_in_storage")', function() {
      // uncomment below and update the code to test the property previewInStorage
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property fileExtension (base name: "file_extension")', function() {
      // uncomment below and update the code to test the property fileExtension
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property filenameUploaded (base name: "filename_uploaded")', function() {
      // uncomment below and update the code to test the property filenameUploaded
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property filesize (base name: "filesize")', function() {
      // uncomment below and update the code to test the property filesize
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property s3 (base name: "s3")', function() {
      // uncomment below and update the code to test the property s3
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property serverDocumentId (base name: "server_document_id")', function() {
      // uncomment below and update the code to test the property serverDocumentId
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property teamUserId (base name: "team_user_id")', function() {
      // uncomment below and update the code to test the property teamUserId
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property totalPages (base name: "total_pages")', function() {
      // uncomment below and update the code to test the property totalPages
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new FaxtoRestApiClientForJavascript.InlineResponse2009();
      //expect(instance).to.be();
    });

  });

}));

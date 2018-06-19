# FaxtoRestApiClientForJavascript.FaxSendingApi

All URIs are relative to *https://api.fax.to/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**faxDocumentIdCostsGet**](FaxSendingApi.md#faxDocumentIdCostsGet) | **GET** /fax/{document_id}/costs | This API is for computing the cost of the fax to be sent
[**faxHistoryGet**](FaxSendingApi.md#faxHistoryGet) | **GET** /fax-history | This API gets the history of a fax
[**faxJobIdStatusGet**](FaxSendingApi.md#faxJobIdStatusGet) | **GET** /fax/{fax_job_id}/status | This API gets the status of a fax
[**faxPost**](FaxSendingApi.md#faxPost) | **POST** /fax | This API is for sending a new fax in any fax numbers anywhere in the world
[**fileCleanGet**](FaxSendingApi.md#fileCleanGet) | **GET** /file-clean | This API is used for cleaning a document
[**fileGeneratePreviewGet**](FaxSendingApi.md#fileGeneratePreviewGet) | **GET** /file-generate-preview | This API generates a preview of a document
[**filesDocumentIDDelete**](FaxSendingApi.md#filesDocumentIDDelete) | **DELETE** /files/{document_id} | This API deletes a document
[**filesGet**](FaxSendingApi.md#filesGet) | **GET** /files | This API gets all the files of a certain user


<a name="faxDocumentIdCostsGet"></a>
# **faxDocumentIdCostsGet**
> InlineResponse2001 faxDocumentIdCostsGet(documentId, apiKey, opts)

This API is for computing the cost of the fax to be sent

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxSendingApi();

var documentId = 56; // Number | The id of the document to be sent

var apiKey = "apiKey_example"; // String | 

var opts = { 
  'faxNumber': "faxNumber_example" // String | The fax number of the recipient
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.faxDocumentIdCostsGet(documentId, apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The id of the document to be sent | 
 **apiKey** | **String**|  | 
 **faxNumber** | **String**| The fax number of the recipient | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="faxHistoryGet"></a>
# **faxHistoryGet**
> InlineResponse2003 faxHistoryGet(apiKey, opts)

This API gets the history of a fax

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxSendingApi();

var apiKey = "apiKey_example"; // String | 

var opts = { 
  'limit': "limit_example", // String | The number of record to return
  'page': "page_example" // String | The page you want to get
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.faxHistoryGet(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **limit** | **String**| The number of record to return | [optional] 
 **page** | **String**| The page you want to get | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="faxJobIdStatusGet"></a>
# **faxJobIdStatusGet**
> InlineResponse2002 faxJobIdStatusGet(faxJobId, apiKey)

This API gets the status of a fax

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxSendingApi();

var faxJobId = 56; // Number | The id of the fax job

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.faxJobIdStatusGet(faxJobId, apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **faxJobId** | **Number**| The id of the fax job | 
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="faxPost"></a>
# **faxPost**
> InlineResponse200 faxPost(faxNumber, documentId, apiKey)

This API is for sending a new fax in any fax numbers anywhere in the world

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxSendingApi();

var faxNumber = new FaxtoRestApiClientForJavascript.null(); //  | The fax number of the recipient

var documentId = new FaxtoRestApiClientForJavascript.null(); //  | The id of the document to be sent

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.faxPost(faxNumber, documentId, apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **faxNumber** | [****](.md)| The fax number of the recipient | 
 **documentId** | [****](.md)| The id of the document to be sent | 
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="fileCleanGet"></a>
# **fileCleanGet**
> InlineResponse2009 fileCleanGet(documentId, apiKey)

This API is used for cleaning a document

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxSendingApi();

var documentId = 56; // Number | The id of the document

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileCleanGet(documentId, apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The id of the document | 
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="fileGeneratePreviewGet"></a>
# **fileGeneratePreviewGet**
> InlineResponse20010 fileGeneratePreviewGet(documentId, apiKey)

This API generates a preview of a document

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxSendingApi();

var documentId = 56; // Number | The id of the document

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileGeneratePreviewGet(documentId, apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The id of the document | 
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="filesDocumentIDDelete"></a>
# **filesDocumentIDDelete**
> InlineResponse20011 filesDocumentIDDelete(documentId, apiKey)

This API deletes a document

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxSendingApi();

var documentId = 56; // Number | The id of the document

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filesDocumentIDDelete(documentId, apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| The id of the document | 
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="filesGet"></a>
# **filesGet**
> InlineResponse2008 filesGet(apiKey, opts)

This API gets all the files of a certain user

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxSendingApi();

var apiKey = "apiKey_example"; // String | 

var opts = { 
  'limit': "limit_example", // String | The number of record to return
  'page': "page_example" // String | The page you want to get
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filesGet(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **limit** | **String**| The number of record to return | [optional] 
 **page** | **String**| The page you want to get | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


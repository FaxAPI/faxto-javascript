# FaxtoRestApiClientForJavascript.UserApi

All URIs are relative to *https://api.fax.to/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**balanceGet**](UserApi.md#balanceGet) | **GET** /balance | This API gets the balance of a user account


<a name="balanceGet"></a>
# **balanceGet**
> InlineResponse2007 balanceGet(apiKey)

This API gets the balance of a user account

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.UserApi();

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.balanceGet(apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


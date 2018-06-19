# FaxtoRestApiClientForJavascript.UserManagementApi

All URIs are relative to *https://api.fax.to/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subUserPost**](UserManagementApi.md#subUserPost) | **POST** /subuser | This API creates a subuser
[**userLoginPost**](UserManagementApi.md#userLoginPost) | **POST** /user/login | This API is used for logging in on an existing user account
[**userPost**](UserManagementApi.md#userPost) | **POST** /user | This API registers a new user account


<a name="subUserPost"></a>
# **subUserPost**
> InlineResponse2006 subUserPost(email, password, apiKey)

This API creates a subuser

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.UserManagementApi();

var email = new FaxtoRestApiClientForJavascript.null(); //  | The unique email of the user

var password = new FaxtoRestApiClientForJavascript.null(); //  | The password of the subuser

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subUserPost(email, password, apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [****](.md)| The unique email of the user | 
 **password** | [****](.md)| The password of the subuser | 
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="userLoginPost"></a>
# **userLoginPost**
> InlineResponse2005 userLoginPost(email, password)

This API is used for logging in on an existing user account

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.UserManagementApi();

var email = new FaxtoRestApiClientForJavascript.null(); //  | The unique email of the user

var password = new FaxtoRestApiClientForJavascript.null(); //  | The password of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userLoginPost(email, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [****](.md)| The unique email of the user | 
 **password** | [****](.md)| The password of the user | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="userPost"></a>
# **userPost**
> InlineResponse2005 userPost(email, password)

This API registers a new user account

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.UserManagementApi();

var email = new FaxtoRestApiClientForJavascript.null(); //  | The unique email of the user

var password = new FaxtoRestApiClientForJavascript.null(); //  | The password of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userPost(email, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [****](.md)| The unique email of the user | 
 **password** | [****](.md)| The password of the user | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


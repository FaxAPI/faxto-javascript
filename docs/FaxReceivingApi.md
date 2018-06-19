# FaxtoRestApiClientForJavascript.FaxReceivingApi

All URIs are relative to *https://api.fax.to/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**areaCodesCountryCodeStateIdGet**](FaxReceivingApi.md#areaCodesCountryCodeStateIdGet) | **GET** /areacodes/{COUNTRY_CODE}/{STATE_ID} | This API gets a list of countries with its area code
[**countriesCountryCodeDidGroupsGet**](FaxReceivingApi.md#countriesCountryCodeDidGroupsGet) | **GET** /countries/{countryCode}/didgroups | This API gets a list of DID groups
[**countriesGet**](FaxReceivingApi.md#countriesGet) | **GET** /countries | This API gets a list of countries available in the Fax.to coverage
[**incomingFaxesGet**](FaxReceivingApi.md#incomingFaxesGet) | **GET** /incoming-faxes | This API gets a list of incoming faxes
[**incomingFaxesRecipientGet**](FaxReceivingApi.md#incomingFaxesRecipientGet) | **GET** /incoming-faxes/{recipient} | This API gets a list of incoming faxes for a specific recipient
[**numbersGet**](FaxReceivingApi.md#numbersGet) | **GET** /numbers | This API gets a list of numbers to get the current configuration of one or multiple number
[**provisionNumbersGet**](FaxReceivingApi.md#provisionNumbersGet) | **GET** /countries/didgroups/{did_group_id}/provision | This API gets a list of provisioned numbers
[**statesCountryCodeGet**](FaxReceivingApi.md#statesCountryCodeGet) | **GET** /states/{COUNTRY_CODE} | This API gets a list of states of a given country available in the Fax.to coverage


<a name="areaCodesCountryCodeStateIdGet"></a>
# **areaCodesCountryCodeStateIdGet**
> InlineResponse20014 areaCodesCountryCodeStateIdGet(COUNTRY_CODE, STATE_ID, apiKey)

This API gets a list of countries with its area code

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxReceivingApi();

var COUNTRY_CODE = 56; // Number | Indicates the country code in its ISO 3166-1 alpha-3 format

var STATE_ID = 56; // Number | The numerical identifier for the state

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.areaCodesCountryCodeStateIdGet(COUNTRY_CODE, STATE_ID, apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **COUNTRY_CODE** | **Number**| Indicates the country code in its ISO 3166-1 alpha-3 format | 
 **STATE_ID** | **Number**| The numerical identifier for the state | 
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="countriesCountryCodeDidGroupsGet"></a>
# **countriesCountryCodeDidGroupsGet**
> InlineResponse20015 countriesCountryCodeDidGroupsGet(COUNTRY_CODE, areaCode, apiKey, opts)

This API gets a list of DID groups

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxReceivingApi();

var COUNTRY_CODE = 56; // Number | Indicates the country code of the DID group in its ISO 3166-1 alpha-3 format

var areaCode = 56; // Number | The area code of the DID group

var apiKey = "apiKey_example"; // String | 

var opts = { 
  'didGroupIds': 56, // Number | Used to display more information about specific DID groups
  'stateId': 56, // Number | The numerical identifier for the didGroup's state
  'cityNamePattern': 56 // Number | A string pattern for the beginning of city name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.countriesCountryCodeDidGroupsGet(COUNTRY_CODE, areaCode, apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **COUNTRY_CODE** | **Number**| Indicates the country code of the DID group in its ISO 3166-1 alpha-3 format | 
 **areaCode** | **Number**| The area code of the DID group | 
 **apiKey** | **String**|  | 
 **didGroupIds** | **Number**| Used to display more information about specific DID groups | [optional] 
 **stateId** | **Number**| The numerical identifier for the didGroup&#39;s state | [optional] 
 **cityNamePattern** | **Number**| A string pattern for the beginning of city name | [optional] 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="countriesGet"></a>
# **countriesGet**
> InlineResponse20012 countriesGet(apiKey)

This API gets a list of countries available in the Fax.to coverage

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxReceivingApi();

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.countriesGet(apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="incomingFaxesGet"></a>
# **incomingFaxesGet**
> InlineResponse2004 incomingFaxesGet(apiKey, opts)

This API gets a list of incoming faxes

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxReceivingApi();

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
apiInstance.incomingFaxesGet(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **limit** | **String**| The number of record to return | [optional] 
 **page** | **String**| The page you want to get | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="incomingFaxesRecipientGet"></a>
# **incomingFaxesRecipientGet**
> InlineResponse2004 incomingFaxesRecipientGet(recipient, apiKey, opts)

This API gets a list of incoming faxes for a specific recipient

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxReceivingApi();

var recipient = 56; // Number | The recipient's fax number

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
apiInstance.incomingFaxesRecipientGet(recipient, apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipient** | **Number**| The recipient&#39;s fax number | 
 **apiKey** | **String**|  | 
 **limit** | **String**| The number of record to return | [optional] 
 **page** | **String**| The page you want to get | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="numbersGet"></a>
# **numbersGet**
> InlineResponse20017 numbersGet(apiKey, opts)

This API gets a list of numbers to get the current configuration of one or multiple number

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxReceivingApi();

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
apiInstance.numbersGet(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **limit** | **String**| The number of record to return | [optional] 
 **page** | **String**| The page you want to get | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="provisionNumbersGet"></a>
# **provisionNumbersGet**
> InlineResponse20016 provisionNumbersGet(didGroupId, apiKey)

This API gets a list of provisioned numbers

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxReceivingApi();

var didGroupId = 56; // Number | The id of the did group

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.provisionNumbersGet(didGroupId, apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **didGroupId** | **Number**| The id of the did group | 
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="statesCountryCodeGet"></a>
# **statesCountryCodeGet**
> InlineResponse20013 statesCountryCodeGet(COUNTRY_CODE, apiKey)

This API gets a list of states of a given country available in the Fax.to coverage

### Example
```javascript
var FaxtoRestApiClientForJavascript = require('faxto_rest_api_client_for_javascript');

var apiInstance = new FaxtoRestApiClientForJavascript.FaxReceivingApi();

var COUNTRY_CODE = 56; // Number | Indicates the country code in its ISO 3166-1 alpha-3 format

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statesCountryCodeGet(COUNTRY_CODE, apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **COUNTRY_CODE** | **Number**| Indicates the country code in its ISO 3166-1 alpha-3 format | 
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


# Getting started

The Uber API makes it easy to tap into the digital mesh that runs across cities. Make requests to our API endpoints and we'll give you everything you need to create new and magical experiences for your users. The possibilities are endless!

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/).
If any of your models have `Date` or `Datetime` type fields or your endpoints have `Date`/`Datetime` type response, you will need to download and link [angular-moment](https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.0.1/angular-moment.min.js) and [moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js) with your project.

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `UberAPILib` folder inside the scripts folder.
+ If any of the Custom Types in your API have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will need to download angular-moment and moment.js. Move these 2 files into the `scripts` folder as well.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=Uber%20API-Angular&projectName=UberAPILib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=Uber%20API-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
var app = angular.module('myApp', []);
app.controller('testController', function($scope) 
{

});
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Angular Project</title>
	<script></script>
</head>

<body>
</body>

</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=Uber%20API-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
<script src="scripts/angular.min.js" ></script>
```
If any of the Custom Types that you have defined have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will also need to link to angular-moment and moment.js like:
```html
<script src="scripts/angular.min.js" ></script>
<script src="scripts/moment.min.js" ></script>
<script src="scripts/angular-moment.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
<head>
    ...
    <!-- Helper files -->
    <script src="scripts/UberAPILib/Module.js"></script>
    <script src="scripts/UberAPILib/Configuration.js"></script>
    <script src="scripts/UberAPILib/ModelFactory.js"></script>
    <script src="scripts/UberAPILib/ObjectMapper.js"></script>
    <script src="scripts/UberAPILib/APIHelper.js"></script>
    <script src="scripts/UberAPILib/Http/Client/HttpContext.js"></script>
    <script src="scripts/UberAPILib/Http/Client/RequestClient.js"></script>
    <script src="scripts/UberAPILib/Http/Request/HttpRequest.js"></script>
    <script src="scripts/UberAPILib/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="scripts/UberAPILib/Controllers/BaseController.js"></script>
    <script src="scripts/UberAPILib/Controllers/APIController.js"></script>


    <!-- Models -->
    <script src="scripts/UberAPILib/Models/BaseModel.js"></script>
    <script src="scripts/UberAPILib/Models/ProductCollection.js"></script>
    <script src="scripts/UberAPILib/Models/PriceEsitmate.js"></script>
    <script src="scripts/UberAPILib/Models/RequestBody.js"></script>
    <script src="scripts/UberAPILib/Models/RequestDetailsCollections.js"></script>
    <script src="scripts/UberAPILib/Models/Product.js"></script>
    <script src="scripts/UberAPILib/Models/Request.js"></script>
    <script src="scripts/UberAPILib/Models/UserProfile.js"></script>
    <script src="scripts/UberAPILib/Models/Driver.js"></script>
    <script src="scripts/UberAPILib/Models/TimeEstimate.js"></script>
    <script src="scripts/UberAPILib/Models/Vehicle.js"></script>
    <script src="scripts/UberAPILib/Models/UserActivity.js"></script>
    <script src="scripts/UberAPILib/Models/Errors.js"></script>
    <script src="scripts/UberAPILib/Models/History.js"></script>
    <script src="scripts/UberAPILib/Models/PromotionsResponse.js"></script>
    <script src="scripts/UberAPILib/Models/Location.js"></script>
    <script src="scripts/UberAPILib/Models/RequestMapResponse.js"></script>
    <script src="scripts/UberAPILib/Models/SurgeConfirmation.js"></script>
    <script src="scripts/UberAPILib/Models/Meta.js"></script>
    <script src="scripts/UberAPILib/Models/ErrorBase.js"></script>
    <script src="scripts/UberAPILib/Models/TimeEstimateCollection.js"></script>
    <script src="scripts/UberAPILib/Models/PriceEstimateCollection.js"></script>

    ...
</head>
```
> The `Module.js` file should be imported before the other files. After `Module.js`, `Configuration.js` should be imported.
> The `ModelFactory.js` file is needed by `ObjectMapper.js` file. The `ObjectMapper` in turn, is needed by `BaseController.js`.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
<head>
	...
	<script src="scripts/app.js"></script>
</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
...
<body ng-app="myApp">
	<div ng-controller="testController">
		...
	</div>
	...
</body>
...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
var app = angular.module('myApp', ['UberAPILib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Initialization


The Angular Application can be initialized as following:
```JavaScript
var app = angular.module('myApp', [UberAPILib]);
// now controllers/services can be created which import
// the factories provided by the sdk
```
### Authentication
In order to setup authentication and initialization of the Angular App, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthAccessToken | OAuth 2.0 Access Token |



```JavaScript
var app = angular.module('myApp', [UberAPILib]);
app.factory('config', function($scope, Configuration) 
{
    return {
        setConfigVars: function() {
            // Configuration parameters and credentials
            Configuration.oAuthAccessToken = 'oAuthAccessToken'; // OAuth 2.0 Access Token
            
        }
    };
});
```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [APIController](#api_controller)

## <a name="api_controller"></a>![Class: ](https://apidocs.io/img/class.png ".APIController") APIController

### Get singleton instance

The singleton instance of the ``` APIController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, APIController, Product, UserProfile, ProductCollection, RequestDetailsCollections, UserActivity, TimeEstimateCollection, PriceEstimateCollection, RequestMapResponse, Request, PromotionsResponse){
	});
```

### <a name="get_product_detail_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getProductDetailByID") getProductDetailByID

> Get product details w.r.t id


```javascript
function getProductDetailByID(productId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| productId |  ``` Required ```  | Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, APIController, Product){
        var productId = product_id;


		var result = APIController.getProductDetailByID(productId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_user_profile"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getUserProfile") getUserProfile

> The User Profile endpoint returns information about the Uber user that has authorized with the application.


```javascript
function getUserProfile()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, APIController, UserProfile){


		var result = APIController.getUserProfile();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Malformed request. |
| 401 | Unauthorized the request requires user authentication (not logged in). |
| 403 | Forbidden. Also used for unauthorized requests such as improper OAuth 2.0 scopes or permissions issues. |
| 404 | Not found. |
| 406 | Unacceptable content type. Client sent an accepts header for a content type which does not exist on the server. Body includes a list of acceptable content types: ?Unacceptable content type. Request resource as: application/json, etc. |
| 422 | Invalid request. The request body is parse-able however with invalid content. |
| 429 | Too Many Requests. Rate limited. |
| 500 | Internal Server Error. |




### <a name="get_products_types"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getProductsTypes") getProductsTypes

> The Products endpoint returns information about the Uber products offered at a given location. The response includes the display name and other details about each product, and lists the products in the proper display order.


```javascript
function getProductsTypes(latitude, longitude)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| latitude |  ``` Required ```  | Latitude component of location. |
| longitude |  ``` Required ```  | Longitude component of location. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, APIController, ProductCollection){
        var latitude = 150.146787345943;
        var longitude = 150.146787345943;


		var result = APIController.getProductsTypes(latitude, longitude);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Malformed request. |
| 401 | Unauthorized the request requires user authentication (not logged in). |
| 403 | Forbidden. Also used for unauthorized requests such as improper OAuth 2.0 scopes or permissions issues. |
| 404 | Not found. |
| 406 | Unacceptable content type. Client sent an accepts header for a content type which does not exist on the server. Body includes a list of acceptable content types: ?Unacceptable content type. Request resource as: application/json, etc. |
| 422 | Invalid request. The request body is parse-able however with invalid content. |
| 429 | Too Many Requests. Rate limited. |
| 500 | Internal Server Error. |




### <a name="get_request_details"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getRequestDetails") getRequestDetails

> Get the real time status of an ongoing trip that was created using the Ride Request endpoint.


```javascript
function getRequestDetails(requestId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| requestId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, APIController, RequestDetailsCollections){
        var requestId = request_id;


		var result = APIController.getRequestDetails(requestId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Malformed request. |
| 401 | Unauthorized the request requires user authentication (not logged in). |
| 403 | Forbidden. Also used for unauthorized requests such as improper OAuth 2.0 scopes or permissions issues. |
| 404 | Not found. |
| 406 | Unacceptable content type. Client sent an accepts header for a content type which does not exist on the server. Body includes a list of acceptable content types, such as ?Unacceptable content type. Request resource as: application/json. |
| 409 | A conflict needs to be resolved before the request can be made. |
| 422 | Invalid request. The request body is parse-able however with invalid content or there are issues with a rider's user account. |
| 429 | Too Many Requests. Rate limited. |
| 500 | Internal Server Error |




### <a name="get_user_activity_v11"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getUserActivityV11") getUserActivityV11

> The User Activity endpoint returns data about a user's lifetime activity with Uber. The response will include pickup locations and times, dropoff locations and times, the distance of past requests, and information about which products were requested.


```javascript
function getUserActivityV11(limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| limit |  ``` Required ```  | Number of items to return for pagging |
| offset |  ``` Required ```  | Page offset for pagging |



#### Example Usage

```javascript


	app.controller("testController", function($scope, APIController, UserActivity){
        var limit = 150;
        var offset = 150;


		var result = APIController.getUserActivityV11(limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Malformed request. |
| 401 | Unauthorized the request requires user authentication (not logged in). |
| 403 | Forbidden. Also used for unauthorized requests such as improper OAuth 2.0 scopes or permissions issues. |
| 404 | Not found. |
| 406 | Unacceptable content type. Client sent an accepts header for a content type which does not exist on the server. Body includes a list of acceptable content types: ?Unacceptable content type. Request resource as: application/json, etc. |
| 422 | Invalid request. The request body is parse-able however with invalid content. |
| 429 | Too Many Requests. Rate limited. |
| 500 | Internal Server Error. |




### <a name="get_time_estimates"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getTimeEstimates") getTimeEstimates

> The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.


```javascript
function getTimeEstimates(startLatitude, startLongitude, customerUuid, productId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| startLatitude |  ``` Required ```  | Latitude component of the start location |
| startLongitude |  ``` Required ```  | Longitude component of the start location |
| customerUuid |  ``` Optional ```  | The customer id interested in estimate |
| productId |  ``` Optional ```  | Id of the requested product |



#### Example Usage

```javascript


	app.controller("testController", function($scope, APIController, TimeEstimateCollection){
        var startLatitude = 150.146787345943;
        var startLongitude = 150.146787345943;
        var customerUuid = customer_uuid;
        var productId = product_id;


		var result = APIController.getTimeEstimates(startLatitude, startLongitude, customerUuid, productId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Malformed request. |
| 401 | Unauthorized the request requires user authentication (not logged in). |
| 403 | Forbidden. Also used for unauthorized requests such as improper OAuth 2.0 scopes or permissions issues. |
| 404 | Not found. |
| 406 | Unacceptable content type. Client sent an accepts header for a content type which does not exist on the server. Body includes a list of acceptable content types: ?Unacceptable content type. Request resource as: application/json, etc. |
| 422 | Invalid request. The request body is parse-able however with invalid content. |
| 429 | Too Many Requests. Rate limited. |
| 500 | Internal Server Error. |




### <a name="get_price_estimates"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getPriceEstimates") getPriceEstimates

> The Price Estimates endpoint returns an estimated price range for each product offered at a given location. The price estimate is provided as a formatted string with the full price range and the localized currency symbol.


```javascript
function getPriceEstimates(endLatitude, endLongitude, startLatitude, startLongitude)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| endLatitude |  ``` Required ```  | Latitude component of end location. |
| endLongitude |  ``` Required ```  | Longitude component of end location. |
| startLatitude |  ``` Required ```  | Latitude component of start location. |
| startLongitude |  ``` Required ```  | Longitude component of start location. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, APIController, PriceEstimateCollection){
        var endLatitude = 150.146787345943;
        var endLongitude = 150.146787345943;
        var startLatitude = 150.146787345943;
        var startLongitude = 150.146787345943;


		var result = APIController.getPriceEstimates(endLatitude, endLongitude, startLatitude, startLongitude);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Malformed request. |
| 401 | Unauthorized the request requires user authentication (not logged in). |
| 403 | Forbidden. Also used for unauthorized requests such as improper OAuth 2.0 scopes or permissions issues. |
| 404 | Not found. |
| 406 | Unacceptable content type. Client sent an accepts header for a content type which does not exist on the server. Body includes a list of acceptable content types: ?Unacceptable content type. Request resource as: application/json, etc. |
| 422 | Invalid request. The request body is parse-able however with invalid content. |
| 429 | Too Many Requests. Rate limited. |
| 500 | Internal Server Error. |




### <a name="get_request_map"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getRequestMap") getRequestMap

> Get a map with a visual representation of a Request.


```javascript
function getRequestMap(requestId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| requestId |  ``` Required ```  | Unique identifier representing a Request. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, APIController, RequestMapResponse){
        var requestId = request_id;


		var result = APIController.getRequestMap(requestId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Malformed request. |
| 401 | Unauthorized the request requires user authentication (not logged in). |
| 403 | Forbidden. Also used for unauthorized requests such as improper OAuth 2.0 scopes or permissions issues |
| 404 | Not found |
| 406 | Unacceptable content type. Client sent an accepts header for a content type which does not exist on the server. Body includes a list of acceptable content types, such as ?Unacceptable content type. Request resource as: application/json. |
| 409 | A conflict needs to be resolved before the request can be made. |
| 422 | Invalid request. The request body is parse-able however with invalid content or there are issues with a rider's user account. |
| 429 | Too Many Requests. Rate limited. |
| 500 | Internal Server Error. |




### <a name="delete_request_cancel"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.deleteRequestCancel") deleteRequestCancel

> Cancel an ongoing Request on behalf of a rider.


```javascript
function deleteRequestCancel(requestId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| requestId |  ``` Required ```  | Unique identifier representing a Request. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, APIController){
        var requestId = request_id;


		var result = APIController.deleteRequestCancel(requestId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Malformed request. |
| 401 | Unauthorized the request requires user authentication (not logged in). |
| 403 | Forbidden. Also used for unauthorized requests such as improper OAuth 2.0 scopes or permissions issues. |
| 404 | Not found |
| 406 | Unacceptable content type. Client sent an accepts header for a content type which does not exist on the server. Body includes a list of acceptable content types, such as ?Unacceptable content type. Request resource as: application/json. |
| 409 | A conflict needs to be resolved before the request can be made |
| 422 | Invalid request. The request body is parse-able however with invalid content or there are issues with a rider's user account. |
| 429 | Too Many Requests. Rate limited. |
| 500 | Internal Server Error |




### <a name="create_request"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createRequest") createRequest

> The Request endpoint allows a ride to be requested on behalf of an Uber user given their desired product, start, and end locations. Please review the Sandbox documentation on how to develop and test against these endpoints without making real-world Requests and being charged.


```javascript
function createRequest(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, APIController, Request){
        var body = new RequestBody({"key":"value"});


		var result = APIController.createRequest(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Malformed request |
| 401 | Unauthorized the request requires user authentication (not logged in). |
| 403 | Forbidden. Also used for unauthorized requests such as improper OAuth 2.0 scopes or permissions issues. |
| 404 | Not found |
| 406 | Unacceptable content type. Client sent an accepts header for a content type which does not exist on the server. Body includes a list of acceptable content types, such as ?Unacceptable content type. Request resource as: application/json |
| 409 | A conflict needs to be resolved before the request can be made. |
| 422 | Invalid request. The request body is parse-able however with invalid content or there are issues with a rider's user account. |
| 429 | Too Many Requests. Rate limited. |
| 500 | Internal Server Error. |




### <a name="get_promotions"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getPromotions") getPromotions

> The Promotions endpoint returns information about the promotion that will be available to a new user based on their activity's location. These promotions do not apply for existing users.


```javascript
function getPromotions(endLatitude, endLongitude, startLatitude, startLongitude)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| endLatitude |  ``` Required ```  | Latitude component of end location. |
| endLongitude |  ``` Required ```  | Longitude component of end location. |
| startLatitude |  ``` Required ```  | Latitude component of start location. |
| startLongitude |  ``` Required ```  | Longitude component of start location |



#### Example Usage

```javascript


	app.controller("testController", function($scope, APIController, PromotionsResponse){
        var endLatitude = 150.146787345943;
        var endLongitude = 150.146787345943;
        var startLatitude = 150.146787345943;
        var startLongitude = 150.146787345943;


		var result = APIController.getPromotions(endLatitude, endLongitude, startLatitude, startLongitude);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Malformed request. |
| 401 | Unauthorized the request requires user authentication (not logged in). |
| 403 | Forbidden. Also used for unauthorized requests such as improper OAuth 2.0 scopes or permissions issues. |
| 404 | Not found. |
| 406 | Unacceptable content type. Client sent an accepts header for a content type which does not exist on the server. Body includes a list of acceptable content types, such as ?Unacceptable content type. Request resource as: application/json. |
| 409 | A conflict needs to be resolved before the request can be made. |
| 422 | Invalid request. The request body is parse-able however with invalid content or there are issues with a rider's user account. |
| 429 | Too Many Requests. Rate limited |
| 500 | Internal Server Error. |




[Back to List of Controllers](#list_of_controllers)




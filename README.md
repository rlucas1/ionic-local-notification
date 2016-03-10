# Notification application


## Try notification by launching app on iOS
```
  $ npm install -g ionic cordova
  $ ionic plugin add https://github.com/katzer/cordova-plugin-local-notifications.git
  $ bower install
  $ npm install
  $ ionic run ios
```

## To create this app yourself, follow those steps
### Application configuration
#### Step 1 create an empty app

```
  $ ionic start notificationApp blank
```

#### Step 2 adding platform

* add ios platform 
  
```
  $ ionic platform add ios
  $ npm install -g ios-sim
```

* add android platform 

```
  $ ionic platform add android
```  


#### Step 3 plugin configuraiton

* install ng-cordova : 

```
  $ bower install ngCordova --save
```

* Include ng-cordova.js or ng-cordova.min.js in your www\index.html file before cordova.js and after your AngularJS / Ionic file.

```html
  <script src="lib/ngCordova/dist/ng-cordova.min.js"></script>
```

* install local notificaiton plugin : 

```
  $ ionic plugin add https://github.com/katzer/cordova-plugin-local-notifications.git
```


#### Step 3 application configuration

* add cordova plugin to your ionic app. Open app.js, and change following line 

```javascript
angular.module('starter', ['ionic'])
```

   to :

```javascript
angular.module('starter', ['ionic','ngCordova'])
```

* Add local notification plugin to your controller by adding $cordovaLocalNotification

```javascript
.controller('SampleController', function($scope, $cordovaLocalNotification) {

});
```


Your app is now configured.


### Creating our first notification

1 - Create your controller in www/js/cntroller/controller-notification.js:

```javascript
angular.module('notificationApp')

  .controller('notificationController',
    function ($scope, $rootScope, $ionicPlatform, $cordovaLocalNotification) {

      $ionicPlatform.ready(function () {
        if (window.cordova) {

          $scope.scheduleInstantNotification = function () {
            $cordovaLocalNotification.schedule({
              id: 1,
              title: 'Title here',
              text: 'Text here',
              data: {
                customProperty: 'custom value'
              }
            });
          };
        }

      });
    });
```

2 - Replace ```<ion-content></ion-content>``` by :

```
  <ion-content ng-controller="notificationController">
    <h3>Notification app</h3>
    <div class="row">
      <div class="col text-center">
        <button class="button" ng-click="scheduleInstantNotification()">Generate single notification</button>
      </div>
    </div>
  </ion-content>
```

### Lauching your app

```
$ bower install
$ npm install
$ ionic run ios
```
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

'use strict';

angular.module('app.controllers', ['socketService'])
.controller('HomeCtrl', ['$scope', 'socket', function ($scope, socket){
    socket.on('init', function (data){
    });
    
    $scope.welcome = 'Welcome to the angular express world';
}]);
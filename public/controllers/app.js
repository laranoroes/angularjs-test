var app = angular.module('camerite', ['ngRoute']);


app.controller('CameraCtrl', function ($scope) {
    $scope.title = 'Insert camera list here';
});

app.controller('ContactCtrl', function ($scope) {
    $scope.title = 'Insert contact form here';
});
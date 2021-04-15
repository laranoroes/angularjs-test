app.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'public/views/camera.html',
        controller:  'CameraCtrl',
    });

    $routeProvider.when('/contact', {
        templateUrl: 'public/views/contact.html',
        controller:  'ContactCtrl',
    });

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise('/');
});
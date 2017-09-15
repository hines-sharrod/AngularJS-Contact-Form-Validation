var app = angular.module('formValidation', [
    'jcs-autoValidate'
]);

app.run(function(defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
        errorMessages['tooYoung'] = 'You must be at least {0} years old to use this site';
        errorMessages['tooOld'] = 'You must be max {0} years old to use this site';
        errorMessages['badUsername'] = 'Username can only contain numbers, letters, and _';
    });
});

app.controller('formValCtrl', function ($scope, $http) {
    $scope.formModel = {};

    $scope.onSubmit = function () {
        
        console.log("The form is submitted");
        console.log($scope.formModel);

        $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
            success(function (data) {
                console.log(":)")
            }).error(function (data) {
                console.log(":(")
            });
    }
});
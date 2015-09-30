var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http){

    $scope.nounData = [];
    var adjectiveData = $scope.adjectiveData;
    $scope.adjectiveData = [];
    $scope.rando =[];


    $scope.getTwitter = function() {

        $http.get('/nounList').then(function (response) {
            $scope.nounData = response.data;
            //for(var i = 0; i < 10; i++){
            //    var randomNoun = findWord(0, 9);
            //    console.log($scope.nounData[randomNoun]);
            //}

        });

        $http.get('/adjectiveList').then(function (response) {
            $scope.adjectiveData = response.data;
            //for(var i = 0; i < 10; i++){
            //    var randomNoun = findWord(0, 9);
            //    console.log($scope.nounData[randomNoun]);
            //}
        }).then(function() {

            for (var i = 0; i < 10; i++) {
                var newAdj = Math.floor((Math.random() * $scope.adjectiveData.length));
                var newNoun = Math.floor((Math.random() * $scope.nounData.length));

                var xxx = $scope.adjectiveData[newAdj].adjective;
                var bbb = $scope.nounData[newNoun].noun;
                //var ddd = ccc.push(xxx + bbb);
                //console.log(ddd);

                $scope.rando.push( xxx + bbb);
                console.log($scope.rando);

            }
        });
    };




    //function findWord (min, max) {
    //    return Math.floor(Math.random() * (max - min + 1)) + min;
    //}



}]);

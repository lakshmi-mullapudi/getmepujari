/**
 * Created by Teja on 6/24/2015.
 */

app.controller('servicesCtrl',['$scope', '$http', function (scope, http){
    http.get('app/countries.json').success(function(data) {
        scope.countries = data;
    });
    scope.sigupForm=function(){
        angular.element("#myModal").modal('show');
    };

}]);

app.controller('mainController',controllerFn);

function controllerFn($scope,$state){

    function initController()
    {

        $scope.menuItems =
            [   {name:"Home",templateUrl:"app/partials/home.html"},
                {name:"About",templateUrl:"app/partials/about.html"},
                {name:"Services",templateUrl:"app/partials/services.html"},
                {name:"logIn",templateUrl:"app/partials/login.html"}
            ];

        $scope.templateUrl ="app/partials/home.html";
    }

    $scope.loadPage = function(item){
        //$scope.template= item.templateUrl;
        $state.go(item.name.toLowerCase());
    };

    initController();
}
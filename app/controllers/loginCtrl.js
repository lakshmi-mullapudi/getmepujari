app.controller('loginCtrl', loginCtrlFn);

function loginCtrlFn($scope)
{
    function initController(){
        $scope.validate = function() {
            console.log('hi');
        };

    }

    initController();
}

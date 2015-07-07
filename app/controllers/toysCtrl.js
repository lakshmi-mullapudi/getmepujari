app.controller('toysCtrl', toysCtrlFn);

	function toysCtrlFn($scope,entertainmentService)
	{
		function initController(){

			$scope.products=entertainmentService.getProducts();
	}

	initController();
}

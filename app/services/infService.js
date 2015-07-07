app.service('entertainmentService', function(){
	return{
		getProducts: function()
		{
			var entertainment =
			{
				type: "entertainment",
				product: [

				{
					name: "Smurfs",
					price: "$300",
					imageUrl:"images/toykid.jpeg"
				},
				
				{
					name: "Robot",
					price: "$700",
					imageUrl:"images/robotnew.jpg"
				},

				{
					name:"Barbie" ,
					price: "$200",
					imageUrl:"images/Barbie.jpg"
				},

				{
					name: "Soft Toys",
					price: "$500",
					imageUrl:"images/play.jpg"
				}

				]
		    }
		 return entertainment;	
		}
	};
	
});

(function(window){
	'use strict';
	var App = window.App || {};

	function Truck(truckId, db){
		this.truckId = truckId;
		this.db = db;
	}

	Truck.prototype.createOrder = function(order){
		console.log('Adding order for' + order.emailAddress);
		this.db.add(order.emailAddress, order);
	}
	Truck.prototype.delieverOrder = function(customerId){
		console.log('Delivering order for' + customerId);
		this.db.remove(customdrId);
	}
	Truck.prototype.printOrders = function(){
		var customerIdArray = Object.keys(this.db.getAll());
		console.log('success');
		console.log('Truck #' + this.truckId + 'has pending orders');

		var thisDB = this.db;

		customerIdArray.forEach(function(id){
			console.log(thisDB.get(id));
		})
	}

	App.Truck = Truck;
	window.App = App;
})(window);
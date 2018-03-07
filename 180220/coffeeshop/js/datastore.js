(function(window){
	'use strict'//문법 잘못되면 잡아줌
	var App = window.App || {};

	function DataStore(){
		console.log('running the DataStore function');
		this.data = {};

	}
	DataStore.prototype.add = function(key, val){
	//기존에 생성된 오브젝트에 별도로 필요한 메소드 지정
		this.data[key] = val;
	}
	DataStore.prototype.get  = function(key){
		return this.data[key];
	}
	DataStore.prototype.getAll = function(){
		return this.data;
	}
	DataStore.prototype.remove = function(key){
		delete this.data[key];
	}

	App.Datastore = DataStore;
	window.App = App;
})(window);
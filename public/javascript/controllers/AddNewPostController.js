(function() {
	'use strict';
	angular.module('app')
	.controller('AddNewPostController', AddNewPostController);

	AddNewPostController.$inject = ['HomeFactory', 'UserFactory', '$state']; 

	function AddNewPostController(HomeFactory, UserFactory, $state) {
		var vm = this;

		vm.addPost = function () {
			vm.post.username = UserFactory.status.username;
			HomeFactory.addPost(vm.post).then(function() {
				vm.post = {};
				$state.go('home');
			});
		};
	}})();
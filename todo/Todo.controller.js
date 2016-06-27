(function(){
	'use strict';

angular.module('app').controller('TodoCtrl', TodoCtlr);

function TodoCtlr(){
	var vm = this;

	vm.completedTasks=[];
	vm.tasks = [];

	// todo functions
	vm.addTask = addTask;
	vm.completeTask = completeTask;
	vm.editTask = editTask;
	
	function addTask (task, time) {
		if (vm.tasks.indexOf(task)!= -1){
			alert('That task is already on the list');
		} else{
			vm.tasks.push({
				'task': task,
			});
			vm.newTask = '';
		}
	}

	function completeTask (task) {
		vm.completedTasks.push(task);
		var taskIndex = vm.tasks.indexOf(task);
		vm.tasks.splice(taskIndex, 1);
	}

	function editTask (task) {
		vm.newTask = task.task;
		var taskIndex = vm.tasks.indexOf(task);
		vm.tasks.splice(taskIndex, 1);
	}

}

})();
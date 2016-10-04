// define a `TodoListCtrl` controller that places injected
// `todos` (from a UI-Router state resolve) on the scope.
// It should have a scope method `setCategory` that changes
// `$scope.filterByCompleted` to certain values; a method
// `isActiveCategory` that confirms the current category;
// and a method `addTodo` that saves `$scope.toAdd` to the backend,
// then goes to that new todo's edit state. (If you are confused about
// where `$scope.toAdd` is coming from, check out the `todo.list.html`.)

app.controller('TodoListCtrl', function($scope, todos, Todo, $state){
	
	$scope.todos = todos;

	$scope.setCategory = function(category){
		$scope.category = category;

		if(category === "all")
			$scope.filterByCompleted = '';
		if(category === "completed")
			$scope.filterByCompleted = true;
		if(category === "active")
			$scope.filterByCompleted = false;
		if(category === "all")
			$scope.filterByCompleted = '';
	};

	$scope.isActiveCategory = function(category){
		if (category === $scope.category)
			{return true;}
		else
			{return false;}
	};

	$scope.addTodo = function(todo){
		Todo.add(todo)
		  .then(function(todo){
		  	$state.go('todos.edit', {id: todo.id});
		  });
	};

});
// define a `todos.edit` state which resolves a single `todo`
// based on the id in the url used to reach the state.
// Note: it isn't tested, but you should also wire up the
// associated controller and templateUrl for a functioning app.

app.config(function($stateProvider){

	$stateProvider
	  .state('todos.edit', {
	  	url:'/:id/edit',
	  	templateUrl: './todo.edit.html',
	  	resolve: {
	  		todo: function(Todo, $stateParams){
	  			return Todo.getOne($stateParams.id);
	  		}
	  	}
	  });

})
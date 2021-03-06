// define a `Todo` factory that uses AJAX calls to
// read and write from the backend Todo models. The methods
// should all return promises for the *data* of the server responses.

app.factory('Todo', function($http){
	
	var Todo = {};
	var cachedTodos = [];

	function removeFromCache(todo){
		cachedTodos.splice(cachedTodos.indexOf(todo) , 1);
	}

	Todo.getOne = function(id){
		return $http.get('/api/todos/' + id)
		  .then(function(todo){
		  	return todo.data;
		  });
	};

	Todo.getAll = function(){
		return $http.get('/api/todos')
		  .then(function(todos){
		  	cachedTodos = todos.data;
		  	return todos.data;
		  });
	};

	Todo.destroy = function(id){
		return $http.delete('/api/todos/' + id)
		  .then(function(todo){
		  	removeFromCache(todo.data);
		  });
	};

	Todo.add = function(todo){
		return $http.post('/api/todos/', todo)
		  .then(function(todo){
		  	cachedTodos.push(todo.data);
		  	return todo.data;
		  });
	};

	Todo.update = function(id, dueValue){
		return $http.put('/api/todos/' + id, dueValue)
		  .then(function(todo){
		  	return todo.data;
		  });
	};

	return Todo;
});
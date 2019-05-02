function createTodo(data = []){
  const todo = Object.create(todoMethod);
  todo.state = data ;
  return todo ;
}
var  todoMethod = {
    add: function(todoText) {
		this.state.push(todoText)
    },
	delete: function(todoText){
		this.state.pop()
	}
}
var mainTodo = createTodo();
mainTodo.add("shubh");
mainTodo.add("ankit");
mainTodo.add("shrijan");
mainTodo.add("shashikant");
mainTodo.delete();
mainTodo.delete();
mainTodo.delete();



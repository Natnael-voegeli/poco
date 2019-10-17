//MY TODO LIST-GLOBAL SCOPE
let todoList = [
    "Learn HTML",
    "LEarn CSS",
    "Learn JS",
    "Learn PHP"
];


// DISPLAY TOODOS 
function displayTodos( ) {
    return console.log(todoList);
let bob = 3; //LOCAL SCOPE - not available outside the function
}
// displayTodos( );

//ADD TOODOS 
function addTodo( todoText ) {
    todoList.push(todoText);
    displayTodos();
}
addTodo("Do that");
addTodo("Do this");
addTodo("Do this");

//CHANGE TODO
function changeTodo(index,newItem ) {
    todoList[index]= newItem;
    displayTodos();
}
changeTodo(2,"complicated");
changeTodo(3,"but solved");
changeTodo(1,"was");

// delete todo
function deleteTodo(index){
    todoList.splice(index, 1);
    displayTodos();
}

deleteTodo(1);
deleteTodo(2);


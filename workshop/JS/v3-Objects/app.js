let todos = {

    //MY TODO LIST-GLOBAL SCOPE
list : [
    "Learn HTML",
    "LEarn CSS",
    "Learn JS",
    "Learn PHP"
],

// DISPLAY TOODOS 
displayTodos:function ( ) {
    return console.log(this.list);
},

//ADD TOODOS 
addTodo:function ( todoText ) {
    this.list.push(todoText);
    this.displayTodos();
},

//CHANGE TODO
changeTodo:function (index,newItem ) {
    this.list[index]= newItem;
    this.displayTodos();
},

// delete todo
deleteTodo:function (index){
    this.list.splice(index, 1);
    this.displayTodos();
},


}

console.log(todos.list);
todos.addTodo("new to do ")






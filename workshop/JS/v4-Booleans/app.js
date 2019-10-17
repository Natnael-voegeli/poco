// S
let todos = {

    //MY TODO LIST-GLOBAL SCOPE
list : [

{
 text:"Learn HTML5",
 completed: false
},

{
    text:"Learn CSS",
    completed: false
   },

   {
    text:"Learn JS",
    completed: false
   },

   {
    text:"Learn PHP",
    completed: false
   },

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

    let newTodo = {
        text:todoText,
        completed: false

    }
    this.list.push(newTodo);
    this.displayTodos();
},

//CHANGE TODO
changeTodo:function (index,newItem ) {
    this.list[index].text= newItem;
    this.displayTodos();
},

// delete todo
deleteTodo:function (index){
    this.list.splice(index, 1);
    this.displayTodos();
},

//TOGGLE COMPLETED
toggleTodo: function(index){
    let currentStatus = this.list[index].completed; //true
    this.list[index].completed = ! currentStatus;
    this.displayTodos();
}


};//END OBJECTS TODOS

// todos.addTodo("New todo");
// todos.addTodo("Another todo");
// todos.displayTodos();
// console.log(todos.list);
// todos.toggleTodo(1);

// // todos.changeTodo(4, "bob is good");
// console.log

console.log(todos.list[1]);
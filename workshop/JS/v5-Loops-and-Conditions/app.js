// S
let todos = {

    //MY TODO LIST-GLOBAL SCOPE
list : [

{
 text:"Learn HTML5",
 completed: true
},

{
    text:"Learn CSS",
    completed: true
   },

   {
    text:"Learn JS",
    completed: false
   },

   {
    text:"Learn PHP",
    completed: false
   },

],

// DISPLAY TOODOS 
displayTodos:function ( ) {

console.log(this.list.length);

    if(this.list.length == 0){
        console.log("Inside the condition")
    console.log( "You don't have any todos, add some!");
    }

    this.list.forEach(function(item){
        let completedstr = (item.completed) ? "(x)" : "( )";
        console.log(completedstr, item.text);
    });
    


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
},



};//END OBJECTS TODOS

 todos.displayTodos();

// console.log(todos.list);
// todos.addTodo("new to do ")






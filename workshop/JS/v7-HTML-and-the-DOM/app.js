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
    completed: true
   },

   {
    text:"Learn PHP",
    completed: true
   },

],

// DISPLAY TOODOS 
displayTodos:function ( ) {


    if(this.list.length == 0){
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
    let currentStatus = this.list[index].completed;//true or false
    this.list[index].completed = ! currentStatus;
    this.displayTodos();


},

//TOGGLE ALL
toggleAll: function(){

    // COMPLETED ITEMS INIT

    let completedItems = 0;
    
    // HOW MANY TODOS I HAVE?
    let totalTodos = this.list.length; //console.log("Total Todos:",totalTodos);

    //1. CHECK WHAT ITEMS ARE COMPLETED (TRUE)
    this.list.forEach(function(item) {
        if(item.completed== true){
            completedItems++; // completedItems +=1 
        }
    });
    console.log("Completed items:",completedItems)

// 2.IF NOTHING IS COMPLETED => CHECK THEM ALL
// IF WE HAVE COMPLETED ITEMS => CHECK THEM ALL 
//VERSION 1
// if(completedItems == 0 || (completedItems >0 &&  completedItems != totalTodos)){
// console.log("check them all !");
// }
// else {
//     console.log("uncheck them all !");
// }


    
// VERSION 3 best
if (completedItems== totalTodos){
    this.list.forEach(function(item){
    item.completed =false;
});
}

else{
    this.list.forEach(function(item){
        item.completed = true;
    });
}
 this.displayTodos();
}


};//END OBJECTS TODOS

//LINK YOUR HTML BUTTONS 
const btnDisplayTodos = document.getElementById('btnDisplayTodos');
const btnToggleAll = document.getElementById('btnToggleAll');

btnDisplayTodos.addEventListener("click",function(){
    todos.displayTodos();

});

    btnToggleAll.addEventListener("click",function(){
        todos.toggleAll();
    });

    // // IN jQuery is something like this :
    // $("*btn-Display").on('click', function(){
    //     todos.displayTodos();
    // })
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
    
console.log("-----------------------")

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


//  START OBJECT HANDLERS
let handlers = {

    //Check if an input is empty. Alert if so
    isEmpty: function(input) {
  
      if(input.value === '') {
        alert("The input ''" + input.id + "'' cannot be empty!");
        return true;
      }
      else {
        return false;
      }
  
    },
  
    //Handler for ADD todo
    addTodo: function() {
      const inputAdd = document.getElementById('inputAdd');
  
      if(! this.isEmpty(inputAdd)) {
        todos.addTodo(inputAdd.value);
        inputAdd.value = '';
      }
  
  
    },


      //Handler for CHANGE todo
  changeTodo: function() { 
    const inputChangeIndex = document.getElementById('inputChangeIndex');
    const inputChangeText = document.getElementById('inputChangeText');

     if(! this.isEmpty(inputChangeIndex) && ! (inputChangeIndex)){
         todos.changeTodo(inputChangeIndex.value);
           inputChangeIndex.value = '';
     }

    
  },


  //Handler for DELETE todo
  deleteTodo: function() {
    const inputDeleteIndex = document.getElementById('inputDeleteIndex');

    if(this.isEmpty()) {
      todos.deleteTodo(inputDeleteIndex.value);
      inputDeleteIndex.value = '';
    }
   
    
  },



    //  Handler for Toggle todo
    toggleTodo:function() {
        const inputToggleIndex = document.getElementById('inputToggleIndex');
    
    
        if(this.isEmpty(inputToggleIndex)){

        todos.toggleTodo(inputToggleIndex.value);

        inputToggleIndex.value = '';
    }
    
    },
    
};
    


// //LINK YOUR HTML BUTTONS 
// const btnDisplayTodos = document.getElementById('btnDisplayTodos');
// const btnToggleAll = document.getElementById('btnToggleAll');

// // DISPLAY TODOS
// btnDisplayTodos.addEventListener("click",function(){
//     todos.displayTodos();

// });

// // TOGGLE BUTTOUN TODOS
//     btnToggleAll.addEventListener("click",function(){
//         todos.toggleAll();
//     });

// ADD TODO BUTTON AND INPUT
// const btnAdd = document.getElementById('btnAdd');

// btnAdd.addEventListener("click",function(){

//     const inputAdd = document.getElementById('inputAdd');

//     if(inputAdd.value !== ''){
//     todos.addTodo(inputAdd.value);
//     inputAdd.value = '';
// }

//     else {
//         alert("The input text cannot be empty")
//        }
// });

// TOGGLE TODO
// const btnToggle = document.getElementById('btnToggle');

// btnToggle.addEventListener("click",function(){

//     const inputToggleIndex = document.getElementById('inputToggleIndex');

//     if(inputToggleIndex.value !== ''){
//         todos.toggleTodo(inputToggleIndex.value);
//         inputToggleIndex.value = '';
//     }

//     else {
//         alert("The input text cannot be empty");
//        }
// });

// DLELETE TODO



    // // IN jQuery is something like this :
    // $("*btn-Display").on('click', function(){
    //     todos.displayTodos();
    // })


    // // WHAT WE'VE MISSED
    // let num = "3";
    // if (num === 3){
    //     console.log("True");
    // }
    // else {
    //     console.log("False");
    // }

    // let bool = 1;
    // if (bool === True){
    //     console.log("True");   
    // }
    // else {
    //     console.log("False");
    // }


    // //  2. YOU CAN WRITE CONDITIONS LIKE THIS :
    // if(true)
    // console.log("True");

    // else
    // console.log("False");
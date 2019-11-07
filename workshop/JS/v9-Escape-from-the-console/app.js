// S
let todos = {

    //MY TODO LIST-GLOBAL SCOPE
list : [

// {
//  text:"Learn HTML5",
//  completed: false
// },

// {
//     text:"Learn CSS",
//     completed: false
//    },

//    {
//     text:"Learn JS",
//     completed: true
//    },

//    {
//     text:"Learn PHP",
//     completed: true
//    },

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
    view.displayTodos();
},

//CHANGE TODO
changeTodo:function (index,newItem ) {
    this.list[index].text= newItem;
    view.displayTodos();
},

// delete todo
deleteTodo:function (index){
    this.list.splice(index, 1);
    view.displayTodos();
},

//TOGGLE COMPLETED
toggleTodo: function(index){
    let currentStatus = this.list[index].completed;//true or false
    this.list[index].completed = ! currentStatus;
    view.displayTodos();


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
 view.displayTodos();
}


};//END OBJECTS TODOS


//  START OBJECT HANDLERS
let handlers = {

    //Check if an input is empty. Alert if so
    isEmpty: function(input) {

      const  msgElm= document.querySelector("#msg");

      if(input.value === '') {
        // alert("The input ''" + input.id + "'' cannot be empty!");
        msgElm.innerHTML += 'your list is empty,please add something'
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

     if( this.isEmpty(inputChangeIndex) &&  (inputChangeText)){
         todos.changeTodo(inputChangeIndex.value, inputChangeText.value );
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
    
    
        if(!this.isEmpty(inputToggleIndex)){

        todos.toggleTodo(inputToggleIndex.value);

        inputToggleIndex.value = '';
    }
    
    },
    
};
    
/* VIEW OBJECT
*SPECIALITY: CREATE AND DISPLAY HTML ELEMENT
************************************************/
let view = {

// DISPLAY TODOS METHOD
displayTodos:function ( ) {

const ul = document.querySelector("#todo-list");
const  msgElm= document.querySelector("#msg");
ul.innerHTML = '';

  if(todos.list.length === 0){
    msgElm.innerHTML += "your list is empty, please add something";

    // msgElm.setAttribute('class','')
    // msgElm.removeAttribute('class','')
    msgElm.classList.remove('hidden');
  }
  else{
    msgElm.classList.add('hidden');
  }

  // LOOP INSIDE YOUR TODO LIST
  

  todos.list.forEach(function(item){

      let li = document.createElement('li');

      let completedstr = (item.completed) ? "(x)" : "( )";

       li.innerHTML = completedstr + " " + item.text;

      ul.appendChild(li);

  });
}

}
 view.displayTodos();


// // CREATE AN HTML VARIABLE
// let div = document.createElement("div");

// div.innerHTML = 'Something';
// div.setAttribute('class','row' );

// // document.body.insertBefore(div,null);
// document.body.appendChild(div);

// // ADD AN LI TO MY UL LIST
// let li = document.createElement("li");
// li.innerHTML = '(x)Learn HTML';


// // let ul = document.getElementById('todo-list');
// let ul = document.querySelector('ul');
// ul.appendChild(li);

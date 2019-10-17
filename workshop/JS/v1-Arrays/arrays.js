let todoList = [
 "Item 1",
 "Item 2",
  "Item 3"
];
// call an array item with the index:
//remember indexes start with 0.
todoList[1]; // output: "Item 2"
todoList[0]; // output: "Item 1"

// Add an Array item (.push)
todoList.push("Item 4");
todoList.push("i'm an element of the array");

//DELETING an Array Item
todoList.splice(1,1);// start an index 1 and  delete 1 item
todoList.splice(0,2);// start at index 0 and  delete 2 item

//CHANGE an Array item
todoList[1]="some thing else"; //define the Index and asign a value 





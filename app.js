// var parrent = document.getElementById("parrent");
// var Child1 = document.getElementById("child1");
// // parrent ko hasil krne k leye
// console.log(parrent); 



// // Child1 ko hasil krne k leye
// console.log("Child1 =>" ,Child1);


// // parrent k kitne child hain  hasil krne k leye
// console.log(parrent.children); 


// // Child1 ka parrent hasil krne k leye
// console.log("Child1 ka parent =>" ,Child1.parentElement);

// // Child1 ka Sibling hasil krne k leye
// console.log("Child1 ka Sibling =>" ,Child1.previousElementSibling);
// console.log("Child1 ka Sibling =>" ,Child1.nextElementSibling);


var todo_input = document.getElementById("todo_input");   
var add_todo_btn = document.getElementById("add_todo_btn");   
// var delete_all_todo_btn = document.getElementById("delete_all_todo_btn");   
var todo_list = document.getElementById("todo_list");   

add_todo_btn.addEventListener('click' , function() {

if (!todo_input.value) return alert('Tdo main kuch daaldo') 
    

    var list_item = `<li><span>${todo_input.value}</span> <button class = "edit_btn"  onclick="edit(this)">Edit</button> <button class = 'del_btn' onclick="deleteFun(this)">Del</button></li>`

    todo_list.innerHTML += list_item;
    todo_input.value = '';
   
    
})

function edit(element) {
    // console.log("edit =>" , element.previousElementSibling.innerText);
    var previousValue = element.previousElementSibling.innerText;
    var updatedValue  = prompt('Edit Value', previousValue);
    element.previousElementSibling.innerText = updatedValue ;
} 

function deleteFun(element) {

    
    element.parentElement.remove();
    
}



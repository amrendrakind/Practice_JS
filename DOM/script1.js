window.onload = function(){

    let todoForm = document.getElementById("newTodoForm")
    let todoList = document.getElementById("todoList")
    todoForm.addEventListener("submit", function(event){
        event.preventDefault()
        var removeButton = document.createElement("button");
        removeButton.innerText = "X";
        var newTodo = document.createElement("li");
        newTodo.innerText = document.getElementById("task").value;
        todoList.appendChild(newTodo);
        newTodo.appendChild(removeButton);
        todoForm.reset();
    })

    todoList.addEventListener("click", function(event){
        if (event.target.tagName.toLowerCase() === 'li') {
            event.target.style.textDecoration = "line-through";
        }
        else if (event.target.tagName.toLowerCase() === 'button') {
            event.target.parentNode.remove();
        }
    })

}

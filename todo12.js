let todoList = []; // empty array

const taskDisplay = document.querySelector('.task-js');
function DisplayList() {
    taskDisplay.innerHTML = '';
    
    // }
    todoList.forEach((todoObject,ind)=>{
        taskDisplay.innerHTML +=
    `
    <div>${todoObject.name}</div> 
    <div>${todoObject.dueDate}</div> 
    <button  class = "del-btn del-btn-js">Delete</button>
    `;
        let delBtn = document.querySelector('.del-btn-js');
        delBtn.addEventListener('click',()=>{
            todoList.splice(ind,1);
            localStorage.setItem('tasksData', JSON.stringify(todoList));
            DisplayList();
        })
    });
    
}
if (todoList) {
    todoList = JSON.parse(localStorage.getItem('tasksData'));
    DisplayList();
}
function addTodo() {
    const dateElement = document.querySelector('.Date');
    const inputElement = document.querySelector(".js-name-input");
    const name = inputElement.value;
    const date = dateElement.value;
    console.log(name);

    if (!name || !date) {
        alert('Fill up the boxes first'); // check if any of input field is left empty
        return;
    }
    todoList.push({ name: name, dueDate: date });
    inputElement.value = "";
    dateElement.value = "";
    localStorage.setItem('tasksData', JSON.stringify(todoList));
    DisplayList();
}
const addButton = document.querySelector('.add-btn');
addButton.addEventListener('click',()=>{addTodo()});
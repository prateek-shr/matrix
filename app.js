//Selectors
const todoInput1=document.querySelector('.todo-input1');
const todoButton1=document.querySelector('.todo-button1');
const todoList1=document.querySelector('.todo-list1');

const todoInput2=document.querySelector('.todo-input2');
const todoButton2=document.querySelector('.todo-button2');
const todoList2=document.querySelector('.todo-list2');

const todoInput3=document.querySelector('.todo-input3');
const todoButton3=document.querySelector('.todo-button3');
const todoList3=document.querySelector('.todo-list3');

const todoInput4=document.querySelector('.todo-input4');
const todoButton4=document.querySelector('.todo-button4');
const todoList4=document.querySelector('.todo-list4');

//Event Listeners
document.addEventListener('DOMContentLoaded',getTodos1);
document.addEventListener('DOMContentLoaded',getTodos2);
document.addEventListener('DOMContentLoaded',getTodos3);
document.addEventListener('DOMContentLoaded',getTodos4);

todoButton1.addEventListener('click',addTodo1);
todoList1.addEventListener('click',deleteCheck1);

todoButton2.addEventListener('click',addTodo2);
todoList2.addEventListener('click',deleteCheck2);

todoButton3.addEventListener('click',addTodo3);
todoList3.addEventListener('click',deleteCheck3);

todoButton4.addEventListener('click',addTodo4);
todoList4.addEventListener('click',deleteCheck4);
//Functions
function addTodo1(event){
    event.preventDefault();
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo=document.createElement('li');
    newTodo.innerText =todoInput1.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    saveLocalTodos1(todoInput1.value);

    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList1.appendChild(todoDiv);
    todoInput1.value="";
}

function deleteCheck1(e)
{
    const item=e.target;

    if(item.classList[0]=="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        removeLocalTodos1(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }
}


function addTodo2(event){
    event.preventDefault();
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo=document.createElement('li');
    newTodo.innerText =todoInput2.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    saveLocalTodos2(todoInput2.value);

    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList2.appendChild(todoDiv);
    todoInput2.value="";
}

function deleteCheck2(e)
{
    const item=e.target;

    if(item.classList[0]=="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        removeLocalTodos2(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }
}


function addTodo3(event){
    event.preventDefault();
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo=document.createElement('li');
    newTodo.innerText =todoInput3.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    saveLocalTodos3(todoInput3.value);

    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList3.appendChild(todoDiv);
    todoInput3.value="";
}

function deleteCheck3(e)
{
    const item=e.target;

    if(item.classList[0]=="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        removeLocalTodos3(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }
}


function addTodo4(event){
    event.preventDefault();
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo=document.createElement('li');
    newTodo.innerText =todoInput4.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    saveLocalTodos4(todoInput4.value);

    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList4.appendChild(todoDiv);
    todoInput4.value="";
}

function deleteCheck4(e)
{
    const item=e.target;

    if(item.classList[0]=="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        removeLocalTodos4(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }
}




function saveLocalTodos1(todo){
    let todos1;
    if(localStorage.getItem('todos1')===null)
    {
        todos1=[];
    }
    else
    {
        todos1=JSON.parse(localStorage.getItem('todos1'));
    }
    todos1.push(todo);
    localStorage.setItem('todos1',JSON.stringify(todos1));
}

function getTodos1(todo){
    let todos1;
    if(localStorage.getItem('todos1')===null)
    {
        todos1=[];
    }
    else
    {
        todos1=JSON.parse(localStorage.getItem('todos1'));
    }
    todos1.forEach(function(todo){

    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo=document.createElement('li');
    newTodo.innerText =todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList1.appendChild(todoDiv);

    });
}

function removeLocalTodos1(todo){
    let todos1;
    if(localStorage.getItem('todos1')===null)
    {
        todos1=[];
    }
    else
    {
        todos1=JSON.parse(localStorage.getItem('todos1'));
    }
    const todoIndex=todo.children[0].innerText;
    todos1.splice(todos1.indexOf(todoIndex),1);
    localStorage.setItem("todos1",JSON.stringify(todos1));
}



function saveLocalTodos2(todo){
    let todos2;
    if(localStorage.getItem('todos2')===null)
    {
        todos2=[];
    }
    else
    {
        todos2=JSON.parse(localStorage.getItem('todos2'));
    }
    todos2.push(todo);
    localStorage.setItem('todos2',JSON.stringify(todos2));
}

function getTodos2(todo){
    let todos2;
    if(localStorage.getItem('todos2')===null)
    {
        todos2=[];
    }
    else
    {
        todos2=JSON.parse(localStorage.getItem('todos2'));
    }
    todos2.forEach(function(todo){

    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo=document.createElement('li');
    newTodo.innerText =todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList2.appendChild(todoDiv);

    });
}

function removeLocalTodos2(todo){
    let todos2;
    if(localStorage.getItem('todos2')===null)
    {
        todos2=[];
    }
    else
    {
        todos2=JSON.parse(localStorage.getItem('todos2'));
    }
    const todoIndex=todo.children[0].innerText;
    todos2.splice(todos2.indexOf(todoIndex),1);
    localStorage.setItem("todos2",JSON.stringify(todos2));
}






function saveLocalTodos3(todo){
    let todos3;
    if(localStorage.getItem('todos3')===null)
    {
        todos3=[];
    }
    else
    {
        todos3=JSON.parse(localStorage.getItem('todos3'));
    }
    todos3.push(todo);
    localStorage.setItem('todos3',JSON.stringify(todos3));
}

function getTodos3(todo){
    let todos3;
    if(localStorage.getItem('todos3')===null)
    {
        todos3=[];
    }
    else
    {
        todos3=JSON.parse(localStorage.getItem('todos3'));
    }
    todos3.forEach(function(todo){

    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo=document.createElement('li');
    newTodo.innerText =todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList3.appendChild(todoDiv);

    });
}

function removeLocalTodos3(todo){
    let todos3;
    if(localStorage.getItem('todos3')===null)
    {
        todos3=[];
    }
    else
    {
        todos3=JSON.parse(localStorage.getItem('todos3'));
    }
    const todoIndex=todo.children[0].innerText;
    todos3.splice(todos3.indexOf(todoIndex),1);
    localStorage.setItem("todos3",JSON.stringify(todos3));
}






function saveLocalTodos4(todo){
    let todos4;
    if(localStorage.getItem('todos4')===null)
    {
        todos4=[];
    }
    else
    {
        todos4=JSON.parse(localStorage.getItem('todos4'));
    }
    todos4.push(todo);
    localStorage.setItem('todos4',JSON.stringify(todos4));
}

function getTodos4(todo){
    let todos4;
    if(localStorage.getItem('todos4')===null)
    {
        todos4=[];
    }
    else
    {
        todos4=JSON.parse(localStorage.getItem('todos4'));
    }
    todos4.forEach(function(todo){

    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo=document.createElement('li');
    newTodo.innerText =todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList4.appendChild(todoDiv);

    });
}

function removeLocalTodos4(todo){
    let todos4;
    if(localStorage.getItem('todos4')===null)
    {
        todos4=[];
    }
    else
    {
        todos4=JSON.parse(localStorage.getItem('todos4'));
    }
    const todoIndex=todo.children[0].innerText;
    todos4.splice(todos4.indexOf(todoIndex),1);
    localStorage.setItem("todos4",JSON.stringify(todos4));
}
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
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }
}
// let todos =[
//     {
//         id:1,
//         title:'todo one',
//         completed:false
//     },
//     {
//         id:2,
//         title:'todo two',
//         completed:false
//     },
//     {
//         id:3,
//         title:'todo three',
//         completed:false
//     },

// ]
let todos=[];

const output=document.querySelector('#todos');
const form=document.querySelector('#todoForm');

// begränsa med 10 första rader
fetch('http://jsonplaceholder.typicode.com/todos?_limit=10')

// nästa från 10 till 20
// fetch('http://jsonplaceholder.typicode.com/todos?_start=10_limit=10')


    .then(res=>res.json())
    .then(data=>{
        todos=data;
        listTodos();
        console.log(todos);
    })

const listTodos=()=>{
    output.innerHTML='';
    todos.forEach(todo=>{
        let template=`
        <div id="${todo.id}"class="bg-white border rounded p-2 d-flex justify-content-between align-items-center mb-2">
        <h2 class="mb-0">${todo.title}</h2>
        <button class="btn btn-danger">X</button>
    </div>
        
        `
     output.innerHTML+=template;   
    })
}
listTodos();

form.addEventListener('submit',e=>{
    e.preventDefault();
    const input=document.querySelector('#todoInput');

    if (input.value.trim()!==''){
        input.classList.remove('is-invalid');


        // let todo={
        //     id:Date.now().toString(),
        //     title:input.value,
        //     completed:false
        // }
        // // todos.push(todo);
        // todos.unshift(todo);
        // listTodos();

        fetch('http://jsonplaceholder.typicode.com/todos',{
            method:'POST',
            headers:{
                'content-type':'application/json;charset0UTF-8'
            },
            body:JSON.stringify({
                title:value,
                completed:false
            })
        })
        .then(res=>res.json())
        .then(data=>{
           let todo={
               ...data,
               id:Date.now()
           }
            todos.unshift(todo);
            listTodos();
            input.value='';
        })
      
    } else {
        input.classList.add('is-invalid');
    }
})
output.addEventListener('click',e=>{
    // console.log(e);
    // todos=todos.filter(todo=>todo.id!==e.target.parentNode.id);
    // listTodos();

    if (e.target.tagName==='BUTTON'){
    //    if(e.target.classList) 
        todos=todos.filter(todo=>todo.id!==e.target.parentNode.id);
        listTodos();
    }
})
const btn = document.querySelector('#btnAlert');
const form=document.querySelector('#loginForm');



// btn.addEventListener('click', function(){
//     alert('Event kördes');
// })

// btn.addEventListener('dblclick', function(){
//     alert('Event kördes');
// })

// btn.addEventListener('mousedown', function(){
//     alert('Event kördes');
// })

// btn.addEventListener('mouseup', function(){
//     alert('Event kördes');
// })

// btn.addEventListener('mouseenter', function(){
//     alert('Event kördes');
// })

// btn.addEventListener('mouseleave', function(){
//     alert('Event kördes');
// })

// btn.addEventListener('click', function(e) {
//     alert('Eventet kördes');
//     console.log(e);
//   })

// form['firstName'].addEventListener('keyup', (e) => {
//   console.log(e.key);
// })

// firstName.addEventListener('keyup', (e) => {
//     console.log(e.key);
//   })

// form['firstName'].addEventListener('keydown', (e) => {
//   console.log(e.key);
// })


// form['firstName'].addEventListener('keyup', (e) => {
//     console.log(e.key);
// })
let firstName=form['firstName'];

firstName.addEventListener('focus', function() {
    this.classList.add('focus');
})
firstName.addEventListener('blur', function() {
    this.classList.remove('focus');
    form['lastName'].focus();
})

form.addEventListener('submit', e=>{
    e.preventDefault();
    console.log('validerar formulär');
    console.log('validering klar');
})

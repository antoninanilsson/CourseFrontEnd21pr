const form=document.querySelector('#form');

const validateFirstName=() =>{
    const firstName=document.querySelector('#firstName');
    const firstNameError=document.querySelector('#firstName-error');
    if (firstName.value===''){
        firstNameError.innerText='Du måste ange förnamn';
    } else if (firstName.value.length<2){
        firstNameError.innerText='Du måste ange namn >2 bokstäver';
      }
    else {
        firstNameError.innerText='';
    }
}

const validate=(id)=>{
    const input =document.querySelector(id);
    const error=document.querySelector(id+'-error');
    if (input.value===''){
        error.innerText='Du måste ange namn';
        return false;
    } else if (input.value.length<2){
        error.innerText='Du måste ange namn >2 bokstäver';
        return false;
      }
    else {
        error.innerText='';
        return true;
    }

}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    //validateFirstName();
    if (validate('#firstName') && validate('#lastName')){
        console.log('formuläret skickas')
    }
})
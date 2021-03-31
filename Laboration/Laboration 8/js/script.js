const regForm=document.querySelector('#regForm');
const isError =[];



// bearbeta fel
const validateText =(target)=>{
    //console.log(target.value);
    //console.log(target);
    if (target.value.trim()===''){
        showError(target,'Namn ska vara ifylld');
        return false;
    } else if (target.value.trim().length <2) {
        showError(target,'Namn ska vara minst två bockstäver');
        return false;
    } else {
        hideError(target); 
        return true;
    }
}

const validateEmail =(target)=>{
    let regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.(\w{2,})+$/
    // console.log(target.value);
    // console.log(target);
    if(target.value.trim() === '') {
        showError(target, 'Email ska vara ifylld');
        return false;
     }else if(!regEx.test(target.value)) {
        showError(target, 'Email är inte giltigt');
        return false;
     } else {
        hideError(target);
        return true;
  }

}

  

const validatePassw =(target)=>{
    //console.log(target.value);
    // console.log(target);
    let regEx=/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,}$/

    if (target.value.trim()===''){
        showError(target,'Lösenordet ska vara ifylld');
        return false;
    }else if(!regEx.test(target.value)){    

        if (target.value.trim().length<6 ){
            showError(target,'Lösenordet ska vara minst 6 symboler');
        }else if (!/[a-z]/.test(target.value) || !/[A-Z]/.test(target.value) ){
            showError(target,'Lösenordet ska innehålla minst en stor och en liten bokstav');
        } else if (!/\d/.test(target.value)){
                showError(target,'Lösenordet ska innehålla minst en siffra');
        }else{
            showError(target,'Lösenordet ska inte innehålla annat än siffror och bokstäver');
        }

            
        return false;
    } else {
        hideError(target);
        return true;
    }
}   

    

const validateSelect =(target)=>{
    // console.log(target.value);
    // console.log(target);
    if (target.value<1){
        showError(target,'Välj recept att prenumerera');
        return false;
    }else{
        hideError(target);
        return true;
    }    

}  

const validateCheckbox =(target)=>{
    //console.log(target.checked);
    //console.log(target);
    if(!target.checked) {
        showError(target, 'Du behöver acceptera villkor');
        return false;
    
      } else {
        hideError(target);
        return true;
      }
    }


// visa felet och check
const showError=(inputControl, errorMessage)=>{
    const inputGroup=inputControl.parentElement;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('checked');
    const error =inputGroup.querySelector('.errorMsg');
    error.innerText=errorMessage;

    }

const hideError=(inputControl)=>{
    const inputGroup=inputControl.parentElement;
    inputGroup.classList.remove('error');
    inputGroup.classList.add('checked');
}
    

// Lyssna på event från formuläret

regForm.addEventListener('submit', e => {
    e.preventDefault();  

    
    for (i=0; i<e.currentTarget.length; i++){

        //console.log(e.currentTarget[i].id); 
        //console.log(e.currentTarget[i].type); 
        //firstName lastName email password recepieType accept
        
        switch (e.currentTarget[i].type){

            case "text":
                isError[i]=validateText(e.currentTarget[i]);                 
                break;
            case "email":
                isError[i]=validateEmail(e.currentTarget[i]);  
                break;
            case "password":
                isError[i]=validatePassw(e.currentTarget[i]);  
                break;
            case "select-one":
                isError[i]=validateSelect(e.currentTarget[i]);  
                break;
           case "checkbox":
                isError[i]=validateCheckbox(e.currentTarget[i]);
                break;
            case "submit":
                break;
        default:      
            console.log('e.current.Target type unknown '+e.currentTarget[i].type);
           
        }
        
    }
        // visa resultat
        
        
        if (isError.includes(false)){
            console.log('There are som errors in the form');

        }else{
            console.log('All is OK. Form is ready to send');
            regForm.reset();
            location.reload();
            
        }
});
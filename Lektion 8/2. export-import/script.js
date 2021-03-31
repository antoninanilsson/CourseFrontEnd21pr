import UserService from './services/UserService.js';
//Här kan vi byta namn av funktionen för användning i modulen
//Obs! funktionnamn för import ska stämma med dess namn i exportmodulen
//vi anger den funktion vi behöver för att inte importera heala modulen
import {validate as val, hasNumber} from './functions/functions.js'

// exempel 1 - Skapa user objekt och validera med hjälp av funktion i annan modul
const user={
    firstName:'Joakim',
    lastName:'Wahlström',
    email:'j@mail.com',
    password:'gdwufduw'
}
// utvärdera användare
if (val(user))
// sing up av användare
    UserService.signUp(user)
// Exempel 2    ----------------- Skapa ny class med användning av funktion från annan modul
// Skapa ny class 
    class Person{
        constructor(firstName){
            this.firstName=firstName;
        }
        get id(){
            return Math.floor(Math.random()*1000000000).toString()
        }
        get id2() {
            return Date.now().toString()}
        
        get name(){
            return this.lastName.toUpperCase()
        }
        set name(newName) {
            if (!hasNumber(newName)){
                this.lastName=newName;
            } else {
                console.log('Error contains number');
            }
            
        }

    }

    const hans=new Person('Hans');
    hans.name='Mattin-Lasse';
    console.log(hans.name);
    console.log(hans.id);
    console.log(hans.id2);



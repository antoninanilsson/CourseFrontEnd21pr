// class User{
//     constructor(email,password){
//         this.email=email,
//         this.password=password
//     }
//     // den här kn
//     signIn(){
//         console.log(`sign in`);
//     }
//     signOut(){
//         console.log(`sign out`);
//     }
// }
// Den här gör massor separata functioner
function userSignUp(user){
    console.log(`registrering av user`);
    console.log(user);
}

function userSignIn(email, password){
    console.log(`registrerinv av en ny user`);
}

class UserService {
    constructor(uri) {
      this.baseUri = uri
    }
  
    static signUp(user) {
      console.log('Registrating the user');
      console.log(user);
    }
  
    static signIn(email, password) {
      console.log('signing in with email and password');
    }
  }
  
  
  UserService.signUp({firstName: 'Joakim', lastName: 'Wahlström'})
  UserService.signIn()
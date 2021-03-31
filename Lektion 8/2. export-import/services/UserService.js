import User from '../models/User.js'

export default class UserService{
    constructor() {} // man bör ha constructor
    static signUp(user){
        console.log('registring the user');
    }
    static signIn(email,password) {
        console.log('signing user');
        console.log(email, password);
    }
}
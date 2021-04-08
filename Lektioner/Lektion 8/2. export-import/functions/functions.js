export const validate =user=>{
    if(user.firstName !==''){
        console.log('User name ok');
        return true;
    }else {
        console.log('user need first name');
        return false;
    }
}

export const hasNumber=string=>{
    return /\d/.test(string);
}
const doSomeThing=(value)=>{
    return new Promise((resolve,reject)=>{
        if(value){
            resolve('success data');
        } else {
            reject('error message');
        }
    })
}

// const test =doSomeThing(true);
// console.log(test);

//doSomeThing(true).then(data=>console.log(data));
// doSomeThing(false)
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err));

    const getRequest=(url)=>{
    return new Promise((resolve,reject)=>{
    const http = new XMLHttpRequest();
   
    http.addEventListener('readystatechange',()=>{
    // console.log(http);
    if (http.readyState===4 && http.status==200){
        const data=JSON.parse(http.responseText);
        resolve(data);
        
    }else if (http.readyState===4){
        console.log('404 could not fetch data');
        reject(http.status+'404 could not fetch data');
    }
    })

    http.open('GET',url);
    http.send();
})
}
// catch - fångar alla erros, then knuten till resolve och reject funktioner 
// som vi anropar själva i objektet beroende på reultat av kod.
getRequest('user.json')
  .then(data => {
    console.log(data);
    return getRequest('todos.json');
  })
  .then(data => {
    console.log(data);
    return getRequest('todos2.json');
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
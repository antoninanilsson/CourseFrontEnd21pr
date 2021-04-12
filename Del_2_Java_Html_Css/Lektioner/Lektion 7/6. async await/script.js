// const getData=async()=>{

// }

// const test=getData();

const getJson=async (url)=>{
    const res =await fetch(url);
    // console.log(url);
    if (res.status!==200){
        throw new Error(res.status+ 'error cant fetch data');
    }
    const data=await res.json();
    // console.log(data);
    // const res2 = await fetch('todos.json');
    // const data2 = await res2.json();

    return data;
}
getJson('user.json')
    .then(data=>console.log(data))
    .catch(err=>console.log(err))

const url=require('url');

const myUrl=new URL('http://minhemsida.com:5000/about.html?id=222djul2&loggedIn=true');
console.log(myUrl.searchParams);

myUrl.searchParams.append('key','value');
console.log(myUrl.href);
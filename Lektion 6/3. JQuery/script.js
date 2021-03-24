// let btnId=document.getElementById('btn');

// let btnId= $('#btn');

$(document).ready(function(){
    // document.getElementById('div1').innerText="Detta är text skriven med Java scrip";
    // document.querySelector('#div1').innerText="Detta är text skriven med Java scrip1";
    $('#div1').text('Detta är text skriven med JQuery');

})
// document.getElementById('div2').innerHTML='<p>paragraph</p>';
$('#div2').html('<p>paragraph</p>');
//document.getElementById('div1').style.color='0000ff';
$('#div1').css('color', '#0000ff');


$('#div2').css('font-size', '2rem');

//document.getElementById('div2').style.display = 'none';
$('#div2').hide();

//document.getElementById('div2').style.display = '';
$('#div2').show();


// document.querySelector('#btn').addEventListener('click',()=>{
//     let div2=document.querySelector('#div2');
//     if (div2.style.display==='none')
//     div2.style.display='';
//     else 
//     div2.style.display='none';
// })

// $('#btn').click(() => {
//     $('#div2').toggle();
// })

document.querySelector('#btn').addEventListener('click',() =>{
    document.querySelector('#div2').classList.toggle('d-none');
})
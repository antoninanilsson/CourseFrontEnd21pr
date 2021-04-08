// const topNav=document.querySelector("#top-nav");
const topMenu = document.querySelector("#top-menu1");
const iconToggle = document.querySelector("#icon-toggle");


iconToggle.addEventListener('click',(e) => {
    if (topMenu.classList.contains('hide')){
        topMenu.classList.remove('hide');
        iconToggle.innerHTML=`<i class="bi bi-x">`;

    }
    else{
        topMenu.classList.add('hide');
        iconToggle.innerHTML=`<i class="bi bi-list">`;
    }
     

});




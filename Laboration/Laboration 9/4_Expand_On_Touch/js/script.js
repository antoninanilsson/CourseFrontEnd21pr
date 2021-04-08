// const topNav=document.querySelector("#top-nav");
const topMenu = document.querySelector("#top-menu");
const iconToggle = document.querySelector("#icon-toggle");


iconToggle.addEventListener('click',(e) => {
    if (topMenu.classList.contains('open')){
        topMenu.classList.remove('open');
        iconToggle.innerHTML=`<i class="bi bi-list">`;

    }
    else{
        topMenu.classList.add('open');
        iconToggle.innerHTML=`<i class="bi bi-x">`;
    }
     

});




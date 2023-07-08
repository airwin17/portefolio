
var dark=true;


function changeTheme(){
    var root=document.querySelector(":root")
    if(dark==true){
        root.style.setProperty("--background","white");
        root.style.setProperty("--background-second","#f0f1f3")
        root.style.setProperty("--background-solid","#1E3050");
        root.style.setProperty("--background-text","black");
        themeBut.children[0].style.display="none";
        themeBut.children[1].style.display="block";
        dark=false;
    }else{
        root.style.setProperty("--background","rgb(31, 49, 81)");
        root.style.setProperty("--background-second","rgb(37 58 96)")
        root.style.setProperty("--background-solid","white");
        root.style.setProperty("--background-text","white");
        themeBut.children[1].style.display="none";
        themeBut.children[0].style.display="block";
        dark=true;
    }
}
function drop(ind){
    var target=document.querySelectorAll(".dropdown")[ind].children[1];
    var icon=document.querySelectorAll(".dropdown")[ind].children[0].children[2];
    if(target.style.height=="0px"){
        target.style.height="fit-content";
        icon.style.rotate="180deg";
    }else{
        target.style.height="0";
        icon.style.rotate="0deg";
    }
}

/*--------------------------------*/
var themeBut=document.querySelector("#theme-but");
themeBut.addEventListener("click",()=>changeTheme());

/*---------------------------------*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
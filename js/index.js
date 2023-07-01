var dark=true;

function turnDark(){
    var root=document.querySelector(":root")
    if(dark==true){
        root.style.setProperty("--background","white");
        root.style.setProperty("--background-solid","#1E3050");
        root.style.setProperty("--background-text","black");
        dark=false;
    }else{
        root.style.setProperty("--background","#1E3050");
        root.style.setProperty("--background-solid","white");
        root.style.setProperty("--background-text","white");
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

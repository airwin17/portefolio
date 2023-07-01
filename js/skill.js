export default function skillHtmlElement(skillName,HtmlIcons,note){
    var rating=``;
    for(var i=0;i<5;i++){
        if(i<note){
            rating+=`<i class="fa-solid fa-star"></i>`;
        }else{
            rating+=`<i class="fa-light fa-star"></i>`;
        }
    }
    var html=
    `<div class="skill-content-item">
        <h2 class="skill-content-item-title">${skillName}</h2>
        ${HtmlIcons}
        <div class="skill-content-item-rating">
            ${rating}
        </div>
    </div>`;
    return Html;
}
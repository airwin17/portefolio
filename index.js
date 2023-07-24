
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,

    /*navigation:{
      nextEl:"#next-icon"
    },*/
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel:{
      invert: false
    }
  });
const intersectionObserver =new IntersectionObserver(function (observedEls){
  for(let i=0;i<observedEls.length;i++){
    
    if(observedEls[i].isIntersecting){
      var slideid=observedEls[i].target.id;
      //console.log(slideid)
    var toAnimate=document.querySelectorAll(`#${slideid} .filter`)
    var toshow=document.querySelectorAll(`#${slideid} .envelope`)
      for(let j=0;j<toAnimate.length;j++){
        var timeline={
          delay:(j==0?0:500+j*25),
          duration:1000,
          iterations:1,
          easing:"ease-in-out"
        };
        toAnimate[j].animate(sapnAnimation,timeline)
        
        var animeShow=toshow[j].animate(setColors(slideid),timeline)
        animeShow.onfinish=function(e){
          toshow[j].style.color=(slideid=="slide1")?"white":"black"
          if(slideid=="slide3"){
            document.querySelector("ul").style.listStyle="disc"
          }
        }
      }
      intersectionObserver.unobserve(observedEls[i].target)
    }
  }
},{
  threshold:1
})
var slides=document.querySelectorAll(".swiper-slide")
for(let i=0;i<slides.length;i++){
  intersectionObserver.observe(slides[i])
}
function setColors(slideid){
  var apear=slideid=="slide1"?"white":"black"
  var disapear=slideid=="slide1"?"black":"white"
  return [{color:disapear,offset:0},{color:disapear,offset:0.49},{color:apear,offset:0.5},{color:apear,offset:0.51},{color:apear,offset:1}]
}
var sapnAnimation = 
  [{
    left:"0",
    right:"100%",
    offset:"0",
  },
  {
      left:"0",
      right:"0",
      offset:"0.5",
  },
  {
      right:"0",
      left:"100%",
      offset:"1",
  }];
  
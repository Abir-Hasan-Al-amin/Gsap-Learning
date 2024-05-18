var close=document.querySelector(".full i");
var open=document.querySelector(".nav i");
var tl=gsap.timeline()
tl.to(".full",{
    right:0,
    duration:0.8,
})
tl.from(".full h4",{
    x:100,
    opacity:0,
    stagger:0.2,
    duration:0.7
})
tl.pause();
close.addEventListener("click",()=>{
    tl.reverse();
})
open.addEventListener("click",()=>{
    tl.play();
})
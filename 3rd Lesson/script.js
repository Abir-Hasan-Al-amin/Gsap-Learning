var initial='M 10 100 Q 490 100 990 100'
var final='M 10 100 Q 490 100 990 100'

var line=document.querySelector(".line")

line.addEventListener("mousemove",(e)=>{
    final=`M 10 100 Q ${e.x} ${e.y} 990 100`
    gsap.to("svg path",{
        attr:{d:final},
        duration:0.3,
        ease:"power3.out"
    })
    console.log(final);
});
line.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:initial},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
});
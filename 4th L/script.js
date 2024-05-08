var cursor=document.querySelector(".cursor");
var main=document.querySelector(".main");
var img=document.querySelector(".image");
main.addEventListener("mousemove",(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:1,
        ease:"back.out"
    })
})
img.addEventListener("mouseenter",()=>{
    cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale:6,
        backgroundColor:"#ffffff5c"
    })
})
img.addEventListener("mouseleave",()=>{
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })
})
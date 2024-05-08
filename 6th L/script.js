var main=document.querySelector("main");
var text=main.innerText;
var sText=text.split("");
var len=Math.floor(text.length/2);
var newText="";
sText.forEach((e,idx)=>{
    if(idx<len){
        newText+=`<span class="a">${e}</span>`
    }else{
        newText+=`<span class="b">${e}</span>`
    }
}
)
main.innerHTML=newText;
gsap.from("span.a",{
    y:80,
    duration:0.8,
    delay:0.3,
    stagger:0.15,
    opacity:0
})
gsap.from("span.b",{
    y:80,
    duration:0.8,
    delay:0.3,
    stagger:-0.15,
    opacity:0
})
gsap.to(".box",{
    x:1000,
    delay:1,
    duration:1.5,
    rotate:360,
    backgroundColor: "red",
    borderRadius:"50%",
    scale:.5,
})
gsap.from(".box2",{
    x:1000,
    delay:1,
    duration:2,
    rotate:360,
    backgroundColor: "red",
    borderRadius:"50%",
    scale:.5,
    repeat:-1, // for unlimited time
    yoyo:true, // for yoyo type forward and backward animation
})
gsap.from("h1",{
    y:1000,
    opacity:0,
    delay:1,
    duration:2,
    stagger:-1,// for reverse
})

var tl=gsap.timeline();
tl.to(".box3",{
    x:1000,
})
tl.to(".box4",{
    x:1000,
})
tl.to(".box5",{
    x:1000,
})

var t2=gsap.timeline();
t2.from(".name",{
    y:-1000,
    opacity:0,
    delay:1,
    duration:1,
})
t2.from("h4",{
    y:-1000,
    opacity:0,
    duration:1,
    stagger:0.3,
})
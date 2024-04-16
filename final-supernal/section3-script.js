gsap.from(".section3-content",{
    x:100,
    opacity:0,
    duration:0.7,
    delay:0.1,
    scrollTrigger:{
        trigger:".section3-content",
        start:"top 85%",
        end:"top 90%",
        // markers:true,
        scrub:2,

    },
})
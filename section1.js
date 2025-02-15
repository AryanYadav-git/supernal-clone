gsap.from(".video",{
    scrollTrigger: {
        trigger: ".video",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
    },
})

gsap.from(".sec2-gap",{
    y:200,
    duration:0.7,
    opacity:0,
    delay:0.1,
    // autoAlpha:1,
    scrollTrigger: {
        trigger:".sec2-gap",
        start: "top 80%",
        end: "top 50%",
        scrub:0.5,
        // markers:true
    }
})
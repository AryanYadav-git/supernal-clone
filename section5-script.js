const section5 = gsap.timeline();


section5.from(".section5-card1",{
    y:100,
    opacity:0,
    duration:0.4,
    delay:0.1,
    stagger:true,
    scrollTrigger:{
        trigger:".section5-card1",
        start:"top 80%",
        end:"top 70%",
        scrub:1.5,
        // markers:true
    }
});
section5.from(".section5-card2",{
    y:100,
    opacity:0,
    duration:0.4,
    stagger:true,
    scrollTrigger:{
        trigger:".section5-card2",
        start:"top 80%",
        end:"top 70%",
        scrub:1.5,
        // markers:true
    }
});

const races = document.querySelector(".races");
console.log(races.offsetWidth)

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});


ScrollTrigger.create({
	trigger:".racesWrapper",
	start:"top 0%",
	end: () => `+=${getScrollAmount() * -1}`,
	pin:true,
	animation:tween,
	scrub:0.5,
	invalidateOnRefresh:true,
	// markers:true
});


// section2 animation

const tl = gsap.timeline();

tl.from(".section2-content",{
    y:100,
    duration:0.1,
    delay:0.1,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:".scroll-trigger-h3",
        endTrigger:".website-content",
        start:"top 30%",
        end:"top 60%",
        scrub:0.5,
        // markers:true
    }
});
// gsap.registerPlugin(ScrollTrigger);

// const races = document.querySelector(".races");
// console.log(races.offsetWidth);

// function getScrollAmount() {
//   let racesWidth = races.scrollWidth;
//   return -(racesWidth - window.innerWidth);
// }

// gsap.to(".races", {
//   x: getScrollAmount,
//   duration: 5,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".racesWrapper",
//     start: "top",
//     end: () => `+=${getScrollAmount() * -1}`,
//     pin: true,
//     scrub: 1.5,
//     invalidateOnRefresh: true,
//   },
// });

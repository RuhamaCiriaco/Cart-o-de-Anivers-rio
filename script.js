const porta = gsap.to(".porta", {
  rotationY: 180,
  ease: "power1.inOut",
  transformOrigin: "center",
  paused: true
});

const card = document.querySelector(".porta");
card.addEventListener("mouseenter", () => porta.play());
card.addEventListener("mouseleave", () => porta.reverse());

let crsr = document.querySelector(".cursor");
let blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (dets) => {
  crsr.style.left = dets.x - "10" + "px";
  crsr.style.top = dets.y - "10" + "px";
  blur.style.left = dets.x - "175" + "px";
  blur.style.top = dets.y - "175" + "px";
});

let img = document.querySelector("nav img");

img.addEventListener("mouseenter", () => {
  crsr.style.width = "70px";
  crsr.style.height = "70px";
  crsr.style.transform = "translate(-50%,-50%)";
  crsr.style.backgroundColor = "transparent";
  crsr.style.border = "2px solid #fff";
});

img.addEventListener("mouseleave", () => {
  crsr.style.width = "20px";
  crsr.style.height = "20px";
  crsr.style.backgroundColor = "rgb(149 193 30)";
  crsr.style.border = "none";
  crsr.style.transform = "none";
});

let aTags = document.querySelectorAll("nav a");

aTags.forEach(function (elem) {
  elem.addEventListener("mouseenter", () => {
    crsr.style.width = "70px";
    crsr.style.height = "70px";
    crsr.style.transform = "translate(-50%,-50%)";
    crsr.style.backgroundColor = "transparent";
    crsr.style.border = "2px solid #fff";
  });
  elem.addEventListener("mouseleave", () => {
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.backgroundColor = "rgb(149 193 30)";
    crsr.style.border = "none";
    crsr.style.transform = "none";
  });
});

function circleAnimation() {
  let circle = document.querySelector(".circle");

circle.addEventListener("mouseenter", function () {
  circle.style.width = "80px";
  circle.style.height = "80px";
  circle.style.backgroundColor = "rgb(149 193 30 /40%)";
  
})
circle.addEventListener("mouseleave", function () {
  circle.style.width="170px"
  circle.style.height = "170px"
  circle.style.backgroundColor = "transparent"
})
}
circleAnimation();

let footerImg = document.querySelector(".footer-r > img");

footerImg.addEventListener("mouseenter", () => {
  crsr.style.width = "70px";
  crsr.style.height = "70px";
  crsr.style.transform = "translate(-50%,-50%)";
  crsr.style.backgroundColor = "transparent";
  crsr.style.border = "2px solid #fff";
});
footerImg.addEventListener("mouseleave", () => {
  crsr.style.width = "20px";
  crsr.style.height = "20px";
  crsr.style.backgroundColor = "rgb(149 193 30)";
  crsr.style.border = "none";
  crsr.style.transform = "none";
});





gsap.to("nav", {
  backgroundColor: "black",
  duration: 1,
  height: "110px",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    // markers: true,
    start: "top -10",
    end: "top -20",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -65%",
    scrub: 2,
  },
});

gsap.from(".about h1", {
  transform: "translateY(50%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".about h1",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 70%",
    scrub: 1,
  },
});

gsap.from(".about .center", {
  transform: "translateY(50%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".about .center",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 70%",
    scrub: 1,
  },
});

gsap.from(".center img", {
  transform: "translateY(50%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".center img",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 70%",
    scrub: 1,
  },
});

gsap.from(".card", {
  transform: "translateY(50%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 70%",
    scrub: 1,
    stragger: 1,
  },
});

gsap.from(".page4 #img1", {
  transform: "translate(100px, 0px)",
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
  },
});

gsap.from(".page4 #img2", {
  transform: "translate(-100px, 0px)",
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
  },
});

gsap.from(".page4-bottom h2", {
  transform: "translateY(100px)",
  scrollTrigger: {
    trigger: ".page4-bottom",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});

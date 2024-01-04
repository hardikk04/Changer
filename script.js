const tl = gsap.timeline();
function clutterAnimation(element) {
  let clutter = "";
  const htmlTag = document.querySelector(element);
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span>${word}</span>`;
  });
  return clutter;
}

function lenisJs() {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 500);
  });

  gsap.ticker.lagSmoothing(0);
}
lenisJs();

function navAnimation() {
  const navLeftH1 = document.querySelector(".nav-left>h1");
  navLeftH1.innerHTML = clutterAnimation(".nav-left>h1");

  const navLeftH3 = document.querySelector(".nav-left>h3");
  navLeftH3.innerHTML = clutterAnimation(".nav-left>h3");

  const navRightH3 = document.querySelector(".nav-right>h3");
  navRightH3.innerHTML = clutterAnimation(".nav-right>h3");

  const navContH3 = document.querySelector(".nav-cont>h3");
  navContH3.innerHTML = clutterAnimation(".nav-cont>h3");

  gsap.from(".nav-left>h1>span", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
    duration: 1,
    delay: 0.5,
  });
  gsap.from(".nav-left>h3>span", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
    duration: 1,
    delay: 0.5,
  });
  gsap.from(".nav-right>h3>span", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
    duration: 1,
    delay: 0.5,
  });

  gsap.from(".nav-cont>h3>span ,.nav-cont>img", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
    duration: 1,
    delay: 0.5,
  });

  const centerLeft1 = document.querySelector(".center-left1");
  centerLeft1.innerHTML = clutterAnimation(".center-left1");
  const centerLeft2 = document.querySelector(".center-left2");
  centerLeft2.innerHTML = clutterAnimation(".center-left2");
  const centerLeft3 = document.querySelector(".center-left3");
  centerLeft3.innerHTML = clutterAnimation(".center-left3");

  gsap.from(".center-left1>span", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
  });
  gsap.from(".center-left2>span", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
  });
  gsap.from(".center-left3>span", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
  });

  const centerRight1 = document.querySelector(".center-right1");
  centerRight1.innerHTML = clutterAnimation(".center-right1");

  const centerRight2 = document.querySelector(".center-right2");
  centerRight2.innerHTML = clutterAnimation(".center-right2");
  gsap.from(".center-right1>span", {
    opacity: 0,
    y: 20,
    transform: "scaleY(3)",
    stagger: 0.1,
  });
  gsap.from(".center-right2>span", {
    opacity: 0,
    y: 20,
    transform: "scaleY(3)",
    stagger: 0.1,
  });

  const mainH1 = document.querySelector(".main-h1");
  mainH1.innerHTML = clutterAnimation(".main-h1");
  gsap.from(".main-h1>span", {
    opacity: 0,
    y: 40,
    transform: "scaleY(3)",
    stagger: 0.2,
    delay: 1,
  });
}

function counterFunction(counterTag) {
  let counter = 0;

  const myInterval = setInterval(() => {
    counterTag.forEach((h1) => {
      if (counter < 100) {
        h1.textContent = counter;
      } else {
        h1.textContent = 100;

        clearInterval(myInterval);
        gsapAnimation();
      }
    });
    counter++;
  }, 20);
}

let cLayerCounter = document.querySelectorAll(".c-layer>h1");
counterFunction(cLayerCounter);
let hLayerCounter = document.querySelectorAll(".h-layer>h1");
counterFunction(hLayerCounter);
let aLayerCounter = document.querySelectorAll(".a-layer>h1");
counterFunction(aLayerCounter);
let nLayerCounter = document.querySelectorAll(".n-layer>h1");
counterFunction(nLayerCounter);
let gLayerCounter = document.querySelectorAll(".g-layer>h1");
counterFunction(gLayerCounter);
let eLayerCounter = document.querySelectorAll(".e-layer>h1");
counterFunction(eLayerCounter);
let rLayerCounter = document.querySelectorAll(".r-layer>h1");
counterFunction(rLayerCounter);
let sLayerCounter = document.querySelectorAll(".s-layer>h1");
counterFunction(sLayerCounter);

function gsapAnimation() {
  tl.to(".preloader-box", {
    rotate: -60,
    scale: 30,
    opacity: 0,
    ease: "power4.in",
    duration: 1.5,
  });

  tl.to(".preloader", {
    opacity: 0,
    display: "none",
    delay: -0.5,
  });

  navAnimation();
}

const tl = gsap.timeline();
function clutterAnimation(element) {
  let clutter = "";
  const htmlTag = document.querySelector(element);
  htmlTag.textContent.split("").forEach((word) => {
    if (word == " ") {
      clutter += `<span id="span-space">${word}</span>`;
    } else {
      clutter += `<span>${word}</span>`;
    }
  });
  htmlTag.innerHTML = clutter;
}

function lenisJs() {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}
lenisJs();

function page1Animation() {
  clutterAnimation(".nav-left>h1");

  clutterAnimation(".nav-left>h3");

  clutterAnimation(".nav-right>h3");

  clutterAnimation(".nav-cont>h3");

  gsap.from(".nav-left>h1>span", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
    duration: 1,
    delay: 2.5,
  });
  gsap.from(".nav-left>h3>span", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
    duration: 1,
    delay: 2.5,
  });
  gsap.from(".nav-right>h3>span", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
    duration: 1,
    delay: 2.5,
  });

  gsap.from(".nav-cont>h3>span ,.nav-cont>img", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
    duration: 1,
    delay: 2.5,
  });

  clutterAnimation(".center-left1");

  clutterAnimation(".center-left2");

  clutterAnimation(".center-left3");

  gsap.from(".center-left1>span", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
    delay: 1.5,
  });
  gsap.from(".center-left2>span", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
    delay: 1.5,
  });
  gsap.from(".center-left3>span", {
    opacity: 0,
    y: 50,
    transform: "scaleY(3)",
    stagger: 0.1,
    delay: 1.5,
  });

  clutterAnimation(".center-right1");

  clutterAnimation(".center-right2");
  gsap.from(".center-right1>span", {
    opacity: 0,
    y: 20,
    transform: "scaleY(3)",
    stagger: 0.1,
    delay: 1.5,
  });
  gsap.from(".center-right2>span", {
    opacity: 0,
    y: 20,
    transform: "scaleY(3)",
    stagger: 0.1,
    delay: 1.5,
  });

  clutterAnimation(".main-h1");
  gsap.from(".main-h1>span", {
    opacity: 0,
    y: 40,
    transform: "scaleY(3)",
    stagger: 0.1,
    duration: 1,
    delay: 3,
  });
}

function counterFunction(counterTag) {
  let counter = 0;

  const myInterval = setInterval(() => {
    counterTag.forEach((h1) => {
      if (counter < 98) {
        h1.textContent = counter;
      } else {
        h1.textContent = 100;
        clearInterval(myInterval);
        gsapAnimation();
      }
      counter++;
    });
  }, 5);
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
    duration: 2,
  });

  tl.to(".preloader", {
    opacity: 0,
    // display: "none",
    delay: -0.5,
  });
}
page1Animation();

clutterAnimation(".page2>h1");

tl.from(".page2>h1>span", {
  opacity: 0,
  y: 50,
  transform: "scaleY(3)",
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2>h1>span",
    start: "top 85%",
    end: "top 60%",
    scrub: 1,
    // markers: true,
  },
});

clutterAnimation(".page2>p");

tl.from(".page2>p>span", {
  opacity: 0,
  y: 50,
  transform: "scaleY(3)",
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2>p>span",
    start: "top 95%",
    end: "top 60%",
    scrub: 1,
    // markers: true,
  },
});

clutterAnimation(".page3-first");

tl.from(".page3-first>span", {
  opacity: 0,
  y: 500,
  transform: "scaleY(8)",
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-box",
    start: "top 65%",
    end: "top 25%",
    scrub: 1,
    // markers: true,
  },
});
clutterAnimation(".page3-second");

tl.from(".page3-second>span", {
  opacity: 0,
  y: 500,
  transform: "scaleY(8)",
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-box",
    start: "top 55%",
    end: "top 25%",
    scrub: 1,
    // markers: true,
  },
});
clutterAnimation(".page3-third");

tl.from(".page3-third>span", {
  opacity: 0,
  y: 500,
  transform: "scaleY(8)",
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-box",
    start: "top 45%",
    end: "top 25%",
    scrub: 1,
    // markers: true,
  },
});
clutterAnimation(".page3-fourth");

tl.from(".page3-fourth>span", {
  opacity: 0,
  y: 500,
  transform: "scaleY(8)",
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-box",
    start: "top 35%",
    end: "top 25%",
    scrub: 1,
    // markers: true,
  },
});
clutterAnimation(".page3-fifth");

tl.from(".page3-fifth>span", {
  opacity: 0,
  y: 500,
  transform: "scaleY(8)",
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-box",
    start: "top 25%",
    end: "top 15%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page4-box", {
  y: -400,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4-box",
    start: "top 50%",
    end: "top -100%",
    scrub: 1,
    // markers: true,
  },
});

tl.from(".page5-pin", {
  alignItems: "center",
  scale: 4.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page5",
    start: "top 0%",
    end: "top -100%",
    scrub: 1,
    pin: true,
    // markers: true,
  },
});

tl.to(".page6-box-container", {
  transform: "translateX(-400%)",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page6",
    start: "top 0%",
    end: "top -400%",
    scrub: 1,
    pin: true,
    // markers: true,
  },
});

tl.to(".page6", {
  backgroundColor: "#000",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page6",
    start: "top 0%",
    end: "top -400%",
    scrub: 1,
  },
});

clutterAnimation(".page7-text");

tl.from(".page7-text>span", {
  opacity: 0,
  y: 100,
  transform: "scaleY(3)",
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page7-text>span",
    start: "top 65%",
    end: "top 00%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page7-part2", {
  y: -300,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page7-part2",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page7-part3", {
  y: -500,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page7-part3",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page7-part4", {
  y: -600,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page7-part4",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page7-part7", {
  y: -300,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page7-part7",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page7-part8", {
  y: -500,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page7-part8",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page7-part9", {
  y: -600,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page7-part9",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page7-part10", {
  y: -400,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page7-part10",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page7-black-last,.page7,.page8", {
  backgroundColor: "#fff",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page8",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page7-text", {
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page8",
    start: "top 100%",
    end: "top 50%",
    scrub: 1,
    // markers: true,
  },
});

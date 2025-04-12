var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  initialSlide: 2,
});

const circle = document.querySelector(".page4-right-bottom-circle");
const img = circle.querySelector("img");
const h1 = circle.querySelector("h1");

circle.addEventListener("mouseenter", () => {
  gsap.to(h1, {
    x: 100,
    opacity: 0,
    duration: 0,
    ease: "power2.out",
  });

  gsap.to(img, {
    x: 300,
    duration: 0.1,
    ease: "power2.out",
  });
});

circle.addEventListener("mouseleave", () => {
  gsap.to(h1, {
    x: 0, // Reset h1 position
    opacity: 1,
    duration: 0.1,
    ease: "power2.in",
  });

  gsap.to(img, {
    x: -155, // Reset img position
    duration: 0.1,
    ease: "power2.in",
  });
});

// cards script//

function cardsmove() {
  let c1 = document.querySelector(".card1");
  let c2 = document.querySelector(".card2");
  let c3 = document.querySelector(".card3");
  let c4 = document.querySelector(".card4");

  c1.addEventListener("mouseenter", function () {
    gsap.to(c2, {
      left: "33vw",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(c3, {
      left: "50vw",
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(c4, {
      right: "-10vw",
      duration: 0.5,
      ease: "power2.out",
    });
  });

  c1.addEventListener("mouseleave", function () {
    gsap.to(c2, {
      left: "18vw",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(c3, {
      left: "37vw",
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(c4, {
      right: "0vw",
      duration: 0.5,
      ease: "power2.out",
    });
  });

  c2.addEventListener("mouseenter", function () {
    gsap.to(c3, {
      left: "51vw",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(c4, {
      right: "-20vw",
      duration: 0.5,
      ease: "power2.out",
    });
  });
  c2.addEventListener("mouseleave", function () {
    gsap.to(c3, {
      left: "37vw",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(c4, {
      right: "0vw",
      duration: 0.5,
      ease: "power2.out",
    });
  });

  c3.addEventListener("mouseenter", function () {
    gsap.to(c4, {
      right: "-15vw",
      duration: 0.5,
      ease: "power2.out",
    });
  });

  c3.addEventListener("mouseleave", function () {
    gsap.to(c4, {
      right: "0vw",
      duration: 0.5,
      ease: "power2.out",
    });
  });

}
cardsmove();

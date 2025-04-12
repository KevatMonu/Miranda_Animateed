var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    initialSlide: 2,
  });



  const circle = document.querySelector('.page4-right-bottom-circle');
  const img = circle.querySelector('img');
  const h1 = circle.querySelector('h1');



  circle.addEventListener('mouseenter', () => {
      gsap.to(h1, {
          x: 100, 
          opacity: 0,
          duration: 0.,
          ease: "power2.out",
      });

      gsap.to(img, {
          x: 300, 
          duration: 0.1,
          ease: "power2.out",
      });
  });

  circle.addEventListener('mouseleave', () => {
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



// marquee script//

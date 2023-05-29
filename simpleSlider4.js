const slides4 = document.querySelectorAll(".slide4");

// loop through slides and set each slides translateX
slides4.forEach((slide4, indx) => {
  slide4.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide4 = document.querySelector(".btn-next4");

// current slide counter
let curSlide4 = 0;
// maximum number of slides
let maxSlide4 = slides4.length - 1;

// add event listener and navigation functionality
nextSlide4.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide4 === maxSlide4) {
    curSlide4 = 0;
  } else {
    curSlide4++;
  }

  //   move slide by -100%
  slides4.forEach((slide4, indx) => {
    slide4.style.transform = `translateX(${100 * (indx - curSlide4)}%)`;
  });
});

// select next slide button
const prevSlide4 = document.querySelector(".btn-prev4");

// add event listener and navigation functionality
prevSlide4.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide4 === 0) {
    curSlide4 = maxSlide4;
  } else {
    curSlide4--;
  }

  //   move slide by 100%
  slides4.forEach((slide4, indx) => {
    slide4.style.transform = `translateX(${100 * (indx - curSlide4)}%)`;
  });
});

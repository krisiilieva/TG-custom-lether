const slides3 = document.querySelectorAll(".slide3");

// loop through slides and set each slides translateX
slides3.forEach((slide3, indx) => {
  slide3.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide3 = document.querySelector(".btn-next3");

// current slide counter
let curSlide3 = 0;
// maximum number of slides
let maxSlide3 = slides3.length - 1;

// add event listener and navigation functionality
nextSlide3.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide3 === maxSlide3) {
    curSlide3 = 0;
  } else {
    curSlide3++;
  }

  //   move slide by -100%
  slides3.forEach((slide3, indx) => {
    slide3.style.transform = `translateX(${100 * (indx - curSlide3)}%)`;
  });
});

// select next slide button
const prevSlide3 = document.querySelector(".btn-prev3");

// add event listener and navigation functionality
prevSlide3.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide3 === 0) {
    curSlide3 = maxSlide;
  } else {
    curSlide3--;
  }

  //   move slide by 100%
  slides3.forEach((slide3, indx) => {
    slide3.style.transform = `translateX(${100 * (indx - curSlide3)}%)`;
  });
});

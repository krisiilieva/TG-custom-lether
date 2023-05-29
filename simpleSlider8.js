const slides8 = document.querySelectorAll(".slide8");

// loop through slides and set each slides translateX
slides8.forEach((slide8, indx) => {
  slide8.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide8 = document.querySelector(".btn-next8");

// current slide counter
let curSlide8 = 0;
// maximum number of slides
let maxSlide8 = slides8.length - 1;

// add event listener and navigation functionality
nextSlide8.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide8 === maxSlide8) {
    curSlide8 = 0;
  } else {
    curSlide8++;
  }

  //   move slide by -100%
  slides8.forEach((slide8, indx) => {
    slide8.style.transform = `translateX(${100 * (indx - curSlide8)}%)`;
  });
});

// select next slide button
const prevSlide8 = document.querySelector(".btn-prev8");

// add event listener and navigation functionality
prevSlide8.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide8 === 0) {
    curSlide8 = maxSlide8;
  } else {
    curSlide8--;
  }

  //   move slide by 100%
  slides8.forEach((slide8, indx) => {
    slide8.style.transform = `translateX(${100 * (indx - curSlide8)}%)`;
  });
});

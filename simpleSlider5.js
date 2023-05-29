const slides5 = document.querySelectorAll(".slide5");

// loop through slides and set each slides translateX
slides5.forEach((slide5, indx) => {
  slide5.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide5 = document.querySelector(".btn-next5");

// current slide counter
let curSlide5 = 0;
// maximum number of slides
let maxSlide5 = slides5.length - 1;

// add event listener and navigation functionality
nextSlide5.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide5 === maxSlide5) {
    curSlide5 = 0;
  } else {
    curSlide5++;
  }

  //   move slide by -100%
  slides5.forEach((slide5, indx) => {
    slide5.style.transform = `translateX(${100 * (indx - curSlide5)}%)`;
  });
});

// select next slide button
const prevSlide5 = document.querySelector(".btn-prev5");

// add event listener and navigation functionality
prevSlide5.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide5 === 0) {
    curSlide5 = maxSlide5;
  } else {
    curSlide5--;
  }

  //   move slide by 100%
  slides5.forEach((slide5, indx) => {
    slide5.style.transform = `translateX(${100 * (indx - curSlide5)}%)`;
  });
});

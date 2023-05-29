const slides7 = document.querySelectorAll(".slide7");

// loop through slides and set each slides translateX
slides7.forEach((slide7, indx) => {
  slide7.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide7 = document.querySelector(".btn-next7");

// current slide counter
let curSlide7 = 0;
// maximum number of slides
let maxSlide7 = slides7.length - 1;

// add event listener and navigation functionality
nextSlide7.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide7 === maxSlide7) {
    curSlide7 = 0;
  } else {
    curSlide7++;
  }

  //   move slide by -100%
  slides7.forEach((slide7, indx) => {
    slide7.style.transform = `translateX(${100 * (indx - curSlide7)}%)`;
  });
});

// select next slide button
const prevSlide7 = document.querySelector(".btn-prev7");

// add event listener and navigation functionality
prevSlide7.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide7 === 0) {
    curSlide7 = maxSlide7;
  } else {
    curSlide7--;
  }

  //   move slide by 100%
  slides7.forEach((slide7, indx) => {
    slide7.style.transform = `translateX(${100 * (indx - curSlide7)}%)`;
  });
});

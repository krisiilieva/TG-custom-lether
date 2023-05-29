const slides10 = document.querySelectorAll(".slide10");

// loop through slides and set each slides translateX
slides10.forEach((slide10, indx) => {
  slide10.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide10 = document.querySelector(".btn-next10");

// current slide counter
let curSlide10 = 0;
// maximum number of slides
let maxSlide10 = slides10.length - 1;

// add event listener and navigation functionality
nextSlide10.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide10 === maxSlide10) {
    curSlide10 = 0;
  } else {
    curSlide10++;
  }

  //   move slide by -100%
  slides10.forEach((slide10, indx) => {
    slide10.style.transform = `translateX(${100 * (indx - curSlide10)}%)`;
  });
});

// select next slide button
const prevSlide10 = document.querySelector(".btn-prev10");

// add event listener and navigation functionality
prevSlide10.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide10 === 0) {
    curSlide10 = maxSlide10;
  } else {
    curSlide10--;
  }

  //   move slide by 100%
  slides10.forEach((slide10, indx) => {
    slide10.style.transform = `translateX(${100 * (indx - curSlide10)}%)`;
  });
});

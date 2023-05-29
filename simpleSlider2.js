const slides2 = document.querySelectorAll(".slide2");

// loop through slides and set each slides translateX
slides2.forEach((slide2, indx) => {
  slide2.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide2 = document.querySelector(".btn-next2");

// current slide counter
let curSlide2 = 0;
// maximum number of slides
let maxSlide2 = slides2.length - 1;

// add event listener and navigation functionality
nextSlide2.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide2 === maxSlide2) {
    curSlide2 = 0;
  } else {
    curSlide2++;
  }

  //   move slide by -100%
  slides2.forEach((slide2, indx) => {
    slide2.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
  });
});

// select next slide button
const prevSlide2 = document.querySelector(".btn-prev2");

// add event listener and navigation functionality
prevSlide2.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide2 === 0) {
    curSlide2 = maxSlide;
  } else {
    curSlide2--;
  }

  //   move slide by 100%
  slides2.forEach((slide2, indx) => {
    slide2.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
  });
});

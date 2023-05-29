const slides9 = document.querySelectorAll(".slide9");

// loop through slides and set each slides translateX
slides9.forEach((slide9, indx) => {
  slide9.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide9 = document.querySelector(".btn-next9");

// current slide counter
let curSlide9 = 0;
// maximum number of slides
let maxSlide9 = slides9.length - 1;

// add event listener and navigation functionality
nextSlide9.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide9 === maxSlide9) {
    curSlide9 = 0;
  } else {
    curSlide9++;
  }

  //   move slide by -100%
  slides9.forEach((slide9, indx) => {
    slide9.style.transform = `translateX(${100 * (indx - curSlide9)}%)`;
  });
});

// select next slide button
const prevSlide9 = document.querySelector(".btn-prev9");

// add event listener and navigation functionality
prevSlide9.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide9 === 0) {
    curSlide9 = maxSlide9;
  } else {
    curSlide9--;
  }

  //   move slide by 100%
  slides9.forEach((slide9, indx) => {
    slide9.style.transform = `translateX(${100 * (indx - curSlide9)}%)`;
  });
});

const slides6 = document.querySelectorAll(".slide6");

// loop through slides and set each slides translateX
slides6.forEach((slide6, indx) => {
  slide6.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide6 = document.querySelector(".btn-next6");

// current slide counter
let curSlide6 = 0;
// maximum number of slides
let maxSlide6 = slides6.length - 1;

// add event listener and navigation functionality
nextSlide6.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide6 === maxSlide6) {
    curSlide6 = 0;
  } else {
    curSlide6++;
  }

  //   move slide by -100%
  slides6.forEach((slide6, indx) => {
    slide6.style.transform = `translateX(${100 * (indx - curSlide6)}%)`;
  });
});

// select next slide button
const prevSlide6 = document.querySelector(".btn-prev6");

// add event listener and navigation functionality
prevSlide6.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide6 === 0) {
    curSlide6 = maxSlide6;
  } else {
    curSlide6--;
  }

  //   move slide by 100%
  slides6.forEach((slide6, indx) => {
    slide6.style.transform = `translateX(${100 * (indx - curSlide6)}%)`;
  });
});

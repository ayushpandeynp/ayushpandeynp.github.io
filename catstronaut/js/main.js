// total viewport height
let viewportHeight = window.innerHeight;

// "Enter" Button click listener
const button = document.querySelector("button");
const buttonClickSound = document.getElementById("Infinity");

// background music
const backgroundMusic = document.getElementById("ComicScore");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.3;

button.addEventListener("click", function () {
  buttonClickSound.play();
  setTimeout(() => {
    backgroundMusic.play();
  });
  window.scrollTo(0, viewportHeight + 1);
});

// scroll event listener
window.addEventListener("scroll", function () {
  // current viewport height (in case of resizing the window)
  viewportHeight = window.innerHeight;

  // this is the total scroll position
  const scrollPosition = window.scrollY;

  // first 3 panels
  const first_3 = [
    document.querySelector(".one"),
    document.querySelector(".two"),
    document.querySelector(".three"),
  ];

  // middle rocket panel
  const mid = document.querySelector(".four");

  // last 2 panels
  const last_2 = [
    document.querySelector(".five"),
    document.querySelector(".six"),
  ];

  // for the first 3 panels
  if (
    scrollPosition > viewportHeight &&
    scrollPosition < viewportHeight * 2.3
  ) {
    first_3[0].classList.add("active");

    if (scrollPosition > viewportHeight * 1.1) {
      first_3[1].classList.add("active");
    }

    if (scrollPosition > viewportHeight * 1.3) {
      first_3[2].classList.add("active");
    }

    first_3.forEach(function (img) {
      img.style.transform = `translateY(${scrollPosition - viewportHeight}px)`;
    });
  } else {
    first_3.forEach(function (img) {
      img.classList.remove("active");
    });
  }

  // middle rocket panel
  if (
    scrollPosition > viewportHeight * 2.3 &&
    scrollPosition < viewportHeight * 3.7
  ) {
    mid.classList.add("active");
    let animationStartPosition =
      document.querySelector("section:nth-child(3)").offsetTop +
      viewportHeight / 3;
    let speed = 0.5;

    mid.style.transform = `translateY(${
      animationStartPosition - speed * scrollPosition
    }px)`;
  } else {
    mid.classList.remove("active");
  }

  // for the last 2 panels
  if (
    scrollPosition > viewportHeight * 3.7 &&
    scrollPosition < viewportHeight * 4.8
  ) {
    last_2[0].classList.add("active");

    if (scrollPosition > viewportHeight * 4) {
      last_2[1].classList.add("active");
    }

    last_2.forEach((img) => {
      img.style.transform = `translateY(${
        scrollPosition - viewportHeight * 3.6
      }px)`;
    });
  } else {
    last_2.forEach((img) => {
      img.classList.remove("active");
    });
  }
});

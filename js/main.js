// cat names
const catNames = ["Lucy", "Milo", "Snowball", "Whiskers", "Simba", "Cheesus"];

// all sections: chat, choose cats, planning, process, mission passed
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.style.display = "none";
});

/* Banner */
// start button click
const start_button = document.getElementById("start_button");
start_button.addEventListener("click", () => {
  // display chats
  sections[0].style.display = "block";

  // scroll down by 200px
  window.scrollBy(0, 500);
});

/* Chat */
const find_cats = document.getElementById("find_cats");
const video_popup = document.getElementById("video_popup");
const video = document.getElementById("video");

find_cats.addEventListener("click", () => {
  video_popup.style.display = "flex";
});

video_popup.addEventListener("click", (e) => {
  if (e.target !== video_popup) return;

  video_popup.style.display = "none";

  // to stop playing the video
  video.setAttribute("src", video.getAttribute("src"));

  sections[1].style.display = "block";
  window.scrollBy(0, 500);
});

/* Cat Chooser */
const cats = document.querySelectorAll(".cat-chooser img");

const proceed_button = document.getElementById("proceed");
proceed_button.setAttribute("disabled", "");

const selected = [];

cats.forEach((cat, key) => {
  cat.addEventListener("click", () => {
    if (selected.includes(key)) {
      cat.style.filter = "grayscale(100%)";
      cat.style.border = "none";

      selected.splice(selected.indexOf(key), 1);
      proceed_button.setAttribute("disabled", "");
      return;
    }

    if (selected.length < 3) {
      cat.style.filter = "none";
      cat.style.border = "2px solid rgb(133, 96, 212)";

      selected.push(key);
    }

    if (selected.length === 3) {
      proceed_button.removeAttribute("disabled", "");
    } else {
      proceed_button.setAttribute("disabled", "");
    }
  });
});

proceed_button.addEventListener("click", () => {
  // update webpage based on selected cats
  const cat_A = document.querySelectorAll(".cat_A");
  const cat_B = document.querySelectorAll(".cat_B");
  const cat_C = document.querySelectorAll(".cat_C");

  cat_A.forEach((cat) => {
    cat.innerHTML = catNames[selected[0]];
  });

  cat_B.forEach((cat) => {
    cat.innerHTML = catNames[selected[1]];
  });

  cat_C.forEach((cat) => {
    cat.innerHTML = catNames[selected[2]];
  });

  sections[2].style.display = "block";
  sections[3].style.display = "block";
  sections[4].style.display = "block";
  window.scrollBy(0, 500);
});

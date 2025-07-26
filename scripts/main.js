const images = document.querySelectorAll(".details-images img");
let currentEnlarged = null;

images.forEach((img) => {
  img.addEventListener("click", () => {
    if (img.classList.contains("enlarged")) {
      img.classList.remove("enlarged");
      document.body.classList.remove("overlay-active");
      currentEnlarged = null;
    } else {
      if (currentEnlarged) {
        currentEnlarged.classList.remove("enlarged");
      }

      img.classList.add("enlarged");
      document.body.classList.add("overlay-active");
      currentEnlarged = img;
    }
  });
});

const slider = document.getElementById("slider");

// نسخ الصور لتكرار الحركة باستمرار
const clone = slider.innerHTML;
slider.innerHTML += clone;

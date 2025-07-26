const btn = document.querySelector(".buttom");
const bar = document.querySelector(".nav-bar");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    bar.classList.toggle("active");
    if (bar.classList.contains("active")) {
        btn.style.backgroundColor = "red";
    } else {
        btn.style.backgroundColor = "#fbc87c";
    }
});
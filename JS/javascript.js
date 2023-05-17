const output = document.querySelector(".output");
let scrollEvent = 0;

document.addEventListener("scroll", () => {
  scrollEvent += 1;
  output.textContent = scrollEvent;
})

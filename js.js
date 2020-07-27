// make all discription hidden at load

const descriptions = document.querySelectorAll(".description");
const divs = document.querySelectorAll(".one");

descriptions.forEach((description) => {
  description.classList.add("hidden");
});

// toggle description at click on div

divs.forEach((div) => {
  div.addEventListener("click", () => {
    const descriptions = div.querySelectorAll(".description");
    descriptions.forEach((description) => {
      description.classList.toggle("hidden");
    });
  });
});

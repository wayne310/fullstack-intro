
const clickBtn = document.getElementById("clickBtn");
const textInput = document.querySelector("#textInput");
const output = document.getElementById("output");
const form = document.getElementById("myForm");
const selectBox = document.querySelector("#selectBox");


clickBtn.addEventListener("click", () => {
    output.textContent = "Button clicked!";
});


textInput.addEventListener("input", (e) => {
    output.textContent = "Typing: " + e.target.value;
});


selectBox.addEventListener("change", (e) => {
    output.textContent = "Selected: " + e.target.value;
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    output.textContent = "Form submitted: " + textInput.value;
});


textInput.addEventListener("keyup", (e) => {
    console.log("Last key pressed: " + e.key);
});


clickBtn.addEventListener("mouseover", () => {
    clickBtn.classList.add("highlight");
});

clickBtn.addEventListener("mouseout", () => {
    clickBtn.classList.remove("highlight");
});


textInput.addEventListener("focus", () => {
    textInput.style.border = "2px solid green";
});

textInput.addEventListener("blur", () => {
    textInput.style.border = "1px solid gray";
});
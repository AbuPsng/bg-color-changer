//***** DOM Selection *****/

const colorPickerElement = document.getElementById("colorPicker");
const createBtnElement = document.getElementById("createBtn");
const randomBtnElement = document.getElementById("randomBtn");
const colorBtnContainerElement = document.getElementById("color-btn-container");
const sectionElement = document.getElementsByTagName("section")[0];

//***** Variable Declaration *****/

const colorCharacter = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

//***** function declartion *****/

//generate random color
function generateRandomColor() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.round(Math.random() * 15);
    randomColor += colorCharacter[randomNumber];
  }
  console.log(randomColor, "");
  colorPickerElement.style.background = randomColor;
  colorPickerElement.value = randomColor;
}

//create buttons
function createColorBtn(hexColor) {
  const colorBtn = document.createElement("button");
  console.log(typeof hexColor);
  colorBtn.style.backgroundColor = hexColor;
  colorBtn.innerText = hexColor;
  colorBtn.classList.add("button");
  colorBtn.addEventListener("click", () => {
    console.log("first");
    sectionElement.style.backgroundColor = hexColor;
  });
  colorBtnContainerElement.appendChild(colorBtn);
}

//take input and create btn
function submitHandler(e) {
  e.preventDefault();
  if (colorPickerElement.value.length <= 5) {
    colorPickerElement.value = "";
    alert("Please provide some hex color");
    return;
  }
  createColorBtn(colorPickerElement.value);
  colorPickerElement.value = "";
}

//***** assigning funtions to respective element *****/

createBtnElement.addEventListener("click", (e) => {
  submitHandler(e);
});

randomBtnElement.addEventListener("click", () => {
  generateRandomColor();
});

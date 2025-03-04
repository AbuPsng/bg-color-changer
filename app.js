//***** DOM Selection *****/

const colorPickerElement = document.getElementById("colorPicker");
const createBtnElement = document.getElementById("createBtn");
const randomBtnElement = document.getElementById("randomBtn");
const colorBtnContainerElement = document.getElementById("color-btn-container");
const sectionElement = document.getElementsByTagName("section")[0];

//***** function declartion *****/

//generate random color
const generateRandomColor = (function () {
  const colorCharacter = "0123456789abcdef";
  return function () {
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * 16);
      randomColor += colorCharacter[randomNumber];
    }
    colorPickerElement.style.background = randomColor;
    colorPickerElement.value = randomColor;
  };
})();

//create buttons
const createColorButton = (function () {
  return function (hexColor) {
    const colorBtn = document.createElement("button");
    colorBtn.style.backgroundColor = hexColor;
    colorBtn.innerText = hexColor;
    colorBtn.classList.add("button");

    colorBtn.addEventListener("click", () => {
      sectionElement.style.backgroundColor = hexColor;
    });

    colorBtnContainerElement.appendChild(colorBtn);
  };
})();

//take input and create btn
function submitHandler(e) {
  e.preventDefault();
  if (colorPickerElement.value.length <= 5) {
    colorPickerElement.value = "";
    alert("Please provide some hex color");
    return;
  }
  createColorButton(colorPickerElement.value);
  colorPickerElement.value = "";
}

function addClickEventOnce(element, cb) {
  let isEventAdded = false;
  return function () {
    if (!isEventAdded) {
      element.addEventListener("click", cb);
      isEventAdded = true;
    }
  };
}
//***** assigning funtions to respective element *****/

const addOneClickCreateBtn = addClickEventOnce(createBtnElement, submitHandler);

const addOneClickRandomBtn = addClickEventOnce(
  randomBtnElement,
  generateRandomColor
);

addOneClickCreateBtn();
addOneClickRandomBtn();

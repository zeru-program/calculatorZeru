const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
const testing = document.getElementById('test');
const openKurung = document.querySelector(".open");
var kurungOp = false;
let output = "";
let press = 0;
let isFirstText = true;

//Define function to calculate based on button clicked.
const calculate = (btnValue) => {
  display.focus();
  if (output === "" && !(/[0-9]/.test(btnValue))) {
    output = "";
    return;
  }
  try {
    if (btnValue === "=" && output !== "") {
      output = output.replace("X", "*");
      output = output.replace("÷", "/");
      output = output.replace(/%/g, "/100");
      output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
      output = "";
    } else if (btnValue === "DEL") {
      //If DEL button is clicked, remove the last character from the output.
      
      output = output.toString().slice(0, -1);
    } else {
      //If output is empty and button is specialChars then return
      output += btnValue;
      if (output === "" && specialChars.includes(btnValue)) return;
    }
  } catch (erorr) {
    var erorrText = ["Error", "Erorr! Please check again"]
    const randomErr = erorrText[Math.floor(Math.random() * erorrText.length)];
    output = randomErr;
    setTimeout(function () {
      output = "";
    }, 300);
    console.log('erorr');
  }
  display.value = output;
};
/*const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Contoh penggunaan
const myArray = [1, 2, 3, 4, 5];
const randomElement = getRandomElement(myArray);

console.log(randomElement);*/

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  //Button click listener calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});


const glows = document.querySelectorAll('.angka');

glows.forEach(glow => {
  glow.onmousemove = function (e) {
    let x = e.pageX - glow.offsetLeft;
    let y = e.pageY - glow.offsetTop;

    glow.style.setProperty('--x', x + 'px')
    glow.style.setProperty('--y', y + 'px')
  }
});
const operatorGbgs = document.querySelectorAll('.operatorGbg');

operatorGbgs.forEach(operatorGbg => {
  operatorGbg.onmousemove = function (e) {
    let x = e.pageX - operatorGbg.offsetLeft;
    let y = e.pageY - operatorGbg.offsetTop;

    operatorGbg.style.setProperty('--x', x + 'px')
    operatorGbg.style.setProperty('--y', y + 'px')
  }
});

function kurung() {
  if(kurungOp) {
  openKurung.style.display = "flex";
  } else {
  openKurung.style.display = "none";
    
  }
  kurungOp = !kurungOp;
}
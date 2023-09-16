const fourthBox = document.querySelectorAll(".box-4");
const secondBox = document.querySelectorAll(".box-2");
const firstBox = document.querySelectorAll(".box-1");
const zeroBtn = document.querySelectorAll(".box-0");
const thirdBox = document.querySelectorAll(".box-3");
const display = document.querySelector(".display");
const equalBtn = document.querySelector("#equal");
const acBtn = document.querySelector("#ac");
const deBtn = document.querySelector("#de");
const percentageBtn = document.querySelector("#percentage");

for (let box of thirdBox) {
  box.addEventListener("click", () => {
    display.value += box.value;
  });
}
fourthBox.forEach((box) => {
  box.addEventListener("click", () => {
    display.value += box.value;
  });
});
secondBox.forEach((box) => {
  box.addEventListener("click", () => {
    display.value += box.value;
  });
});
firstBox.forEach((box) => {
  box.addEventListener("click", () => {
    display.value += box.value;
  });
});

zeroBtn.forEach((box) => {
  box.addEventListener("click", () => {
    display.value += box.value;
  });
});
acBtn.addEventListener("click", () => {
  if (display.value.trim() === "") {
    return;
  }
  display.value = "";
});
deBtn.addEventListener("click", () => {
  if (display.value.trim() === "") {
    return;
  }
  display.value = display.value.toString().slice(0, -1);
});
equalBtn.addEventListener("click", () => {
  if (display.value.trim() === "") {
    return;
  }
  display.value = eval(display.value);
});

percentageBtn.addEventListener("click", () => {
  if (display.value.trim() === "") {
    return;
  }
  const currentValue = parseFloat(display.value);
  const percentage = currentValue / 100;
  const result = percentage * 10;
  display.value = result;
});

const heightValue = document.querySelector(".height-value");
const weightValue = document.querySelector(".weight-value");
const activeTabs = document.querySelectorAll(".activeTab");
const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submitBtn");
const retryBtn = document.querySelector(".again");
const result = document.querySelector(".result-container");
const Bmi = document.querySelector('.BMI')
const feedback = document.querySelector('.feedback')

// range sliders

function heightSlider(value) {
  const heightcm = `${value}cm`;
  heightValue.innerHTML = heightcm;
}
function weightSlider(value) {
  weightValue.innerHTML = value;
}

// male female active tab

activeTabs.forEach((activeTab) => {
  activeTab.addEventListener("click", () => {
    removeActiveClasses();
    activeTab.classList.add("active");
  });
});

function removeActiveClasses() {
  activeTabs.forEach((activeTab) => {
    activeTab.classList.remove("active");
  });
}

// calculation

form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateBMI();
});

function calculateBMI() {
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (height === 0 || isNaN(height)) {
    alert("Please Enter  a valid value");
  } else if (weight === 0 || isNaN(weight)) {
    alert("Please Enter a valid value");
  } else {
    displayResult(height, weight);
    result.classList.add("show");
  }
}

function displayResult(height, weight) {
  let BMI = (weight / ((height * height) / 10000)).toFixed(2);
    Bmi.innerHTML = BMI
    if(BMI < 18.6){
        feedback.innerHTML = 'You are under weight!'
    }else if(BMI >= 18.6 && BMI < 24.9){
        feedback.innerHTML = 'You have a normal body weight!'
    }else{
        feedback.innerHTML = 'You are over weight!'
    }
  retryBtn.addEventListener("click", () => {
    result.classList.remove("show");
  });
}

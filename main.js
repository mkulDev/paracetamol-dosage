let oneTime
let daily
// Showing age
const ageValue = document.getElementById('wiek')
const ageSlider = document.getElementById('slider-age')
function ageZero() {
  if (ageSlider.value == 0) {
    document.getElementById('monthly').style.display = 'block'
  } else {
    document.getElementById('monthly').style.display = 'none'
  }
}

ageValue.innerHTML = ageSlider.value

ageSlider.oninput = function () {
  ageValue.innerHTML = ageSlider.value
  ageZero()
}

// Showing month
const monthValue = document.getElementById('month')
const monthtSlider = document.getElementById('slider-month')

monthValue.innerHTML = monthtSlider.value

monthtSlider.oninput = function () {
  monthValue.innerHTML = monthtSlider.value
}

// Showing weight
const weightValue = document.getElementById('waga')
const weightSlider = document.getElementById('slider-weight')

weightValue.innerHTML = weightSlider.value

weightSlider.oninput = function () {
  weightValue.innerHTML = weightSlider.value
}

const button = document.getElementById('button')

function oneTimeFunc() {
  const elem = document.getElementById('progres-bar2')
  let width = 1
  const id = setInterval(frame, 10)
  function frame() {
    if (width >= 25) {
      clearInterval(id)
    } else {
      width++
      elem.style.width = width + '%'
    }
  }
  document.getElementById('progres-text').innerHTML = `${oneTime} ml`
}
function dailyFunc() {
  const elem = document.getElementById('progres-bar3')
  let width = 1
  const id = setInterval(frame, 10)
  function frame() {
    if (width >= 100) {
      clearInterval(id)
    } else {
      width++
      elem.style.width = width + '%'
    }
  }
  document.getElementById('progres-text2').innerHTML = `${daily} ml`
}

const myFunction = () => {
  const age = ageSlider.value
  const month = monthtSlider.value
  const weight = weightSlider.value
  document.getElementById('Error').innerHTML = ''

  if (month < 4 && weight < 5) {
    oneTime = 2.5
    daily = 10
  } else if (month < 9 && weight < 7.5) {
    oneTime = 4
    daily = 16
  } else if (month < 13 && weight < 9.5) {
    oneTime = 5
    daily = 20
  } else if (age < 3 && weight < 10.5) {
    oneTime = 6.5
    daily = 26
  } else if (age < 4 && weight < 13.5) {
    oneTime = 8
    daily = 32
  } else if (age < 6 && weight < 18.5) {
    oneTime = 12
    daily = 48
  } else if (age < 9 && weight < 24) {
    oneTime = 15
    daily = 60
  } else if (age < 11 && weight < 32) {
    oneTime = 20
    daily = 80
  } else if (age < 13 && weight < 46) {
    oneTime = 28.5
    daily = 114
  } else {
    document.getElementById('Error').innerText = 'Uwaga wybrane parametry wieku i wagi nie spełniają warunków prawidłowego rozwoju. Przeczytaj ulotkę lub skonultuj się z lekażem'
  }

  oneTimeFunc()
  dailyFunc()
  oneTime
  daily
}
button.addEventListener('click', myFunction)
/*
if( month < 4 && weight < 5){
    oneTime = 2.5;
    daily = 10;         
} else if( month >= 4 && month < 9 && weight > 5 && weight < 7.5){
    oneTime = 4;
    daily = 16;         
} else if( month >= 9 && month < 13 && weight > 7.5 && weight < 9.5){
    oneTime = 5;
    daily = 20;         
} else if( age >= 1 && age < 3 && weight > 8.5 && weight < 10.5){
    oneTime = 6.5;
    daily = 26;         
} else if( age >=2 && age < 4 && weight >= 10.5 && weight < 13.5){
    oneTime = 8;
    daily = 32;         
} else if( age >=4 && age < 6 && weight >= 13.5 && weight < 18.5){
    oneTime = 12;
    daily = 48;         
} else if( age >=6 && age < 9 && weight >= 18.5 && weight < 24){
    oneTime = 15;
    daily = 60;         
} else if( age >=9 && age < 11 && weight >= 24 && weight < 32){
    oneTime = 20;
    daily = 80;         
} else if( age >=11 && age < 13 && weight >= 32 && weight < 46){
    oneTime = 28.5;
    daily = 114;         
}     else {
    oneTime = 0;
    daily = 0; 
    document.getElementById('Error').innerHTML = 'Uwaga wybrane parametry wieku i wagi nie spełniają warunków prawidłowego rozwoju. Przeczytaj ulotkę lub skonultuj się z lekażem'
}
*/

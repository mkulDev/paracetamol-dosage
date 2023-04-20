let oneTime
let daily
const button = document.getElementById('button')

// Showing age
const ageValue = document.getElementById('wiek')
const ageSlider = document.getElementById('slider-age')
ageValue.innerHTML = ageSlider.value

function ageZero() {
  ageSlider.value == 0 ? (document.getElementById('monthly').style.display = 'block') : (document.getElementById('monthly').style.display = 'none')
}

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

function animation(elementId, finalWidth, textProgresId, barText) {
  const element = document.getElementById(elementId)
  let width = 1
  const id = setInterval(frame, 10)
  function frame() {
    width >= finalWidth ? clearInterval(id) : (width++, (element.style.width = width + '%'))
  }
  document.getElementById(textProgresId).innerText = `${barText} ml`
}

function inRange(x, min, max) {
  return (x - min) * (x - max) <= 0
}

const setDose = (age, month, weight) => {
  if (inRange(month, 0, 4) && inRange(weight, 0, 4)) return (oneTime = 2.5), (daily = 10)
  if (inRange(month, 5, 8) && inRange(weight, 5, 8)) return (oneTime = 4), (daily = 16)
  if (inRange(month, 9, 12) && inRange(weight, 8, 10)) return (oneTime = 5), (daily = 20)
  if (inRange(age, 1, 2) && inRange(weight, 9, 11)) return (oneTime = 6.5), (daily = 20)
  if (inRange(age, 2, 3) && inRange(weight, 10, 14)) return (oneTime = 8), (daily = 32)
  if (inRange(age, 4, 5) && inRange(weight, 13, 19)) return (oneTime = 12), (daily = 48)
  if (inRange(age, 6, 8) && inRange(weight, 19, 25)) return (oneTime = 15), (daily = 60)
  if (inRange(age, 9, 10) && inRange(weight, 25, 33)) return (oneTime = 20), (daily = 80)
  if (inRange(age, 11, 12) && inRange(weight, 32, 46)) return (oneTime = 28.5), (daily = 114)

  document.getElementById('Error').innerText = 'UWAGA!!! Wybrane parametry wieku i wagi nie spełniają warunków prawidłowego rozwoju. Przeczytaj ulotkę lub skonultuj się z lekażem'
}

const checkingDose = () => {
  oneTime = 0
  daily = 0
  const age = ageSlider.value
  const month = monthtSlider.value
  const weight = weightSlider.value
  console.log(age, month, weight)
  document.getElementById('Error').innerText = ''
  setDose(age, month, weight)
  animation('progres-bar2', 33, 'progres-text', oneTime || 0)
  animation('progres-bar3', 100, 'progres-text2', daily || 0)
}

button.addEventListener('click', checkingDose)

                                                                                                                                                                          
let timerInterval;
let remainingSeconds;
function startTimer() {
  sound1()
  const input = document.getElementById("myInput2");
  const startButton = document.getElementById("startButton");
  const l = document.getElementById("timer")
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById("taghir").src="images/7.svg"
  } else {
    ko = parseInt(input.value);
    localStorage.setItem("savedNumber",ko);
    remainingSeconds = parseInt(input.value)*60;
    document.getElementById("taghir").src="images/11.svg"
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  const input = document.getElementById("myInput2");
  const l = document.getElementById("timer")
  remainingSeconds--;
  if (remainingSeconds <= 0) {
    clearInterval(timerInterval);
  }
  const minutes = Math.floor(remainingSeconds/60);
  const remainingSecondss = remainingSeconds% 60;
  if (remainingSeconds < 10) {
    document.getElementById("timer").innerHTML = "0" + minutes + "<br>" + "0" + remainingSecondss;
  } else if (minutes < 10) {
    document.getElementById("timer").innerHTML = "0" + minutes + "<br>" + remainingSecondss;
  } else if (minutes < 10 && remainingSeconds < 10) {
    document.getElementById("timer").innerHTML = "0" + minutes + "<br>" + "0" + remainingSecondss;
  } else {
    document.getElementById("timer").innerHTML = minutes + "<br>" + remainingSecondss;
  }
}

document.getElementById("startButton").addEventListener("click", startTimer);
function loadNumber() {
  var savedNumber = localStorage.getItem("savedNumber");
  if (savedNumber) {
    var numberInput = document.getElementById("myInput2");
    numberInput.value = savedNumber;
  }
}
window.onload = loadNumber;

const togglebtn = document.querySelector(".toggel");
const tanzimat3 = document.querySelector(".tanzimat");
const kol = document.body;
if (localStorage.getItem('isDarkMode') === 'true') {
  kol.classList.add('lo');
  tanzimat3.classList.toggle("tanzimaty")
  togglebtn.classList.toggle("active");
  togglebtn.classList.toggle("back");
}
togglebtn.addEventListener("click", function () {
  togglebtn.classList.toggle("active");
  togglebtn.classList.toggle("back");
  kol.classList.toggle("lo")
  tanzimat3.classList.toggle("tanzimaty")
  if (kol.classList.contains('lo')) {
    localStorage.setItem('isDarkMode', 'true');
  } else {
    localStorage.setItem('isDarkMode', 'false');
  }
})
const sound2 = document.getElementById("sound");
sound2.addEventListener("click", function () {
  sound2.classList.toggle("active");
  sound2.classList.toggle("back");
})
 function sound1() {
  if(sound2.checked){
    let audio = new Audio("sound.mp3");
    audio.play();
  }
}
const noghte = document.getElementById("noghte");
const tanzimat2 = document.querySelector(".tanzimat2");
const koly = document.getElementById("koly");
noghte.addEventListener("click", function () {
  koly.style.display = "none";
  tanzimat2.style.display = "block";
})
const preferens = document.getElementById("preferens");
const tanzimat = document.querySelector(".tanzimat");
const tanzimat4 = document.querySelector(".tanzimat2");
preferens.addEventListener("click", function () {
  tanzimat.style.display = "block"
  tanzimat4.style.display = "none"
})
const zarb = document.getElementById("zarb");
const koly2 = document.getElementById("koly");
const tanzimat6 = document.querySelector(".tanzimat");
zarb.addEventListener("click", function () {
  tanzimat6.style.display = "none"
  koly2.style.display = "block";
})
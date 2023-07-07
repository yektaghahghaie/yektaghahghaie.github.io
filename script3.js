function startTimer() {
  document.getElementById("taghir").src ="Button (3).svg"
  let timer;
  const inputElement2 = document.getElementById('myInput3');
  const inputValue2 = parseInt(inputElement2.value)
  if (isNaN(inputValue2)) {
    inputValue2 = parseInt(inputElement2.defaultValue)
  }
  console.log(inputValue2);
  let seconds = inputValue2 * 60;
  timer = setInterval(function () {
    seconds--;
    if (seconds < 0) {
      clearInterval(timer);
      alert("زمان به پایان رسید!");
      seconds = inputValue2 * 60;
    }
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    if(remainingSeconds<10){
      document.getElementById("timer").innerHTML ="0" + minutes + "<br>" +"0" + remainingSeconds;
    }else if(minutes<10){
    document.getElementById("timer").innerHTML ="0" + minutes + "<br>" + remainingSeconds;
    }else if(minutes<10&&remainingSeconds<10){
      document.getElementById("timer").innerHTML ="0" + minutes + "<br>" +"0"+ remainingSeconds;
    }else{
      document.getElementById("timer").innerHTML = minutes + "<br>" + remainingSeconds;
    }
  }, 1000);
}
document.getElementById("startButton").addEventListener("click", startTimer);
function changePage() {
  const currentPage = window.location.href;
  if (currentPage === "file:///C:/Users/yktaq/Desktop/chalesh1/calesh1.html") {
    window.location.href = "file:///C:/Users/yktaq/Desktop/chalesh1/calesh2.html";
  } else if (currentPage === "file:///C:/Users/yktaq/Desktop/chalesh1/calesh2.html") {
    window.location.href = "file:///C:/Users/yktaq/Desktop/chalesh1/calesh3.html";
  } else if (currentPage === "file:///C:/Users/yktaq/Desktop/chalesh1/calesh3.html") {
    window.location.href = "file:///C:/Users/yktaq/Desktop/chalesh1/calesh1.html";
  }
}
const togglebtn = document.querySelector(".toggel");
const tanzimat3 = document.querySelector(".tanzimat");
const kol = document.body;
if (localStorage.getItem('isDarkMode') === 'true') {
  kol.classList.add('lo');
  tanzimat3.classList.toggle("tanzimaty")
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
const sound = document.getElementById("sound");
sound.addEventListener("click", function () {
  let audio = new Audio("sound.mp3");
  audio.play();
  sound.classList.toggle("active");
  sound.classList.toggle("back");
})
const noghte = document.getElementById("noghte");
const tanzimat2 = document.querySelector(".tanzimat2");
const koly = document.getElementById("koly");
noghte.addEventListener("click", function () {
  tanzimat2.style.display = "block"
  koly.style.display = "none"
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
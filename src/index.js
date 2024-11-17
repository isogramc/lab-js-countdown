const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener('click', startCountdown)


// ITERATION 2: Start Countdown
function startCountdown(e) {

  let counter = 10;
  const timeElement = document.querySelector("#time");
  showToast("⏰ Final countdown! ⏰");

  const myInterval = setInterval(function (){
    if (counter>0) {
      counter -= 1;
      startBtn.setAttribute("disabled", "disabled");
      if (counter===5) {
        showToast("Start the engines! 💥");
      }
    } else {
      showToast("Lift off! 🚀");
      clearInterval(myInterval);
    }
    timeElement.innerHTML = counter;
  }, 1000);

  // Your code goes here ...
}


const toastCard = document.querySelector("#toast");
const toastText = document.querySelector("span#toast-message");
const closeButton = document.querySelector("#close-toast");



// ITERATION 3: Show Toast
function showToast(message) {
  closeButton.addEventListener('click', clearTimeOut);
  console.log("showToast called!");
  // Your code goes here ...
  toastCard.style.visibility= "visible";
  //toastCard.classList.add("show");
  // I changed this because the class show add causes flashes
  toastText.innerHTML = message;

  const myTimeout = setTimeout(function (){
    //toastCard.classList.remove("show");
    // I changed this because the class show add causes flashes
    toastCard.style.visibility= "hidden";
    clearTimeout(myTimeout);
  }, 4000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  function clearTimeOut(){
    toastCard.style.visibility= "hidden";
    clearTimeout(myTimeout);
  }
}




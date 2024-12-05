// Clock & Alarm functionality
function updateTime() {
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById('current-time').textContent = currentTime;
}

setInterval(updateTime, 1000);

// Timer functionality
let timerInterval;
document.getElementById('start-timer').addEventListener('click', function() {
  const timeInSeconds = document.getElementById('timer-input').value;
  if (timeInSeconds) {
    let timeLeft = timeInSeconds;
    document.getElementById('timer-status').textContent = `Time remaining: ${timeLeft}s`;
    
    timerInterval = setInterval(function() {
      timeLeft--;
      document.getElementById('timer-status').textContent = `Time remaining: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById('timer-status').textContent = "Time's up!";
      }
    }, 1000);
  }
});

// Stopwatch functionality
let stopwatchInterval;
let stopwatchTime = 0;
document.getElementById('start-stopwatch').addEventListener('click', function() {
  stopwatchInterval = setInterval(function() {
    stopwatchTime++;
    const minutes = Math.floor(stopwatchTime / 60);
    const seconds = stopwatchTime % 60;
    document.getElementById('stopwatch-time').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, 1000);
});

document.getElementById('stop-stopwatch').addEventListener('click', function() {
  clearInterval(stopwatchInterval);
});

// Voice-to-Text functionality for Notes
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
document.getElementById('voice-to-text').addEventListener('click', function() {
  recognition.start();
});

recognition.onresult = function(event) {
  const note = event.results[0][0].transcript;
  document.getElementById('note-text').value = note;
};

// Calculator functionality
document.getElementById('clear').addEventListener('click', function() {
  document.getElementById('calc-display').value = '';
});

document.getElementById('backspace').addEventListener('click', function() {
  let display = document.getElementById('calc-display').value;
  document.getElementById('calc-display').value = display.slice(0, -1);
});

// Time-based greetings in To-Do List
function displayGreeting() {
  const hours = new Date().getHours();
  let greeting = '';
  if (hours < 12) {
    greeting = 'Good Morning';
  } else if (hours < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }
  document.getElementById('greeting').textContent = greeting;
}

displayGreeting();

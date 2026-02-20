
const introText = document.getElementById("introText");
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

const text = "Happy anniversary, I love you and..";
let index = 0;

/* ---------------- INTRO SEQUENCE ---------------- */

function startIntro() {

  // 1️⃣ Pop intro text
  introText.classList.add("show");

  // 2️⃣ Fade it out after 2s
  setTimeout(() => {
    introText.classList.add("fade-out");
  }, 2000);

  // 3️⃣ Remove intro and show chatbox
  setTimeout(() => {
    introText.style.display = "none";
    chatBox.classList.remove("hidden");
    startTyping();
  }, 2800);
}

/* ---------------- RESET ---------------- */

function resetTyping() {
  index = 0;
  input.value = "";
}

/* ---------------- TYPING ---------------- */


function startTyping() {
  input.value = "";
  index = 0;

  const speed = 80;

  function type() {
    if (index < text.length) {
      input.value += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      setTimeout(fakeButtonPress, 600);
    }
  }

  type();
}

/* ---------------- BUTTON PRESS ---------------- */

function fakeButtonPress() {
  sendBtn.classList.add("pressed");

  setTimeout(() => {
    sendBtn.classList.remove("pressed");
    sendBtn.click();
  }, 150);
}


/* ---------------- CLICK EVENT ---------------- */

sendBtn.addEventListener("click", () => {

  // Fade chatbox out
  chatBox.classList.add("fade-out");

  setTimeout(() => {
    chatBox.style.display = "none";
  }, 800);
});



/* ---------------- START EVERYTHING ---------------- */

window.onload = () => {
  startIntro();
};

const input = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");
const newMessage = document.getElementById("newMessage");

const text = "Happy anniversary, I love you and..";
let index = 0;

/* ---------------- RESET ---------------- */

function resetTyping() {
  index = 0;
  input.value = "";
}

/* ---------------- TYPING ---------------- */

function startTyping() {
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

/* ---------------- CLICK LOGIC ---------------- */

sendBtn.addEventListener("click", () => {

  // Confetti 🎉
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });

  // Fade everything out
  chatBox.classList.add("fade-out");

  // After fade completes
  setTimeout(() => {
    chatBox.style.display = "none";
    newMessage.classList.add("show");
  }, 800);
});

/* ---------------- LOAD ---------------- */

window.onload = () => {
  resetTyping();
  startTyping();
};

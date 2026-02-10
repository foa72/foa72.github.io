const input = document.getElementById("message");
const text = "happy anniversary. i love you and..";
let index = 0;

function resetTyping() {
  index = 0;
  input.value = "";
}


// show chat after title animation
setTimeout(() => {
  chat.classList.remove("hidden");
  chat.classList.add("show");
  startTyping();
}, 1500);

function startTyping() {
  const typingSpeed = 70; // ms per character

  function type() {
    if (index < text.length) {
      input.value += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    }
  } 

  type();
} 


window.onload = () => {
  resetTyping();
  startTyping();
};

const sendBtn = document.getElementById("sendBtn");
const fakeCursor = document.getElementById("fake-cursor");

function moveCursorToButton() {
  const rect = sendBtn.getBoundingClientRect();

  fakeCursor.style.left = rect.left + rect.width / 2 + "px";
  fakeCursor.style.top = rect.top + rect.height / 2 + "px";
}

function fakeClick() {
  fakeCursor.classList.add("click");

  setTimeout(() => {
    fakeCursor.classList.remove("click");
    sendBtn.click(); // 🔥 real click
  }, 200);
}

function runFakeCursor() {
  fakeCursor.classList.add("show");
  moveCursorToButton();

  setTimeout(fakeClick, 500);

  setTimeout(() => {
    fakeCursor.classList.remove("show");
  }, 1200);
}

function startTyping() {
  const speed = 80;

  function type() {
    if (index < text.length) {
      input.value += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      runFakeCursor(); // 👈 cursor appears AFTER typing
    }
  }

  type();
}


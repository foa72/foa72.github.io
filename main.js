const chat = document.getElementById("chat");
const input = document.getElementById("message");

const text = "Happy anniversary!! i love you and..";
let index = 0;

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

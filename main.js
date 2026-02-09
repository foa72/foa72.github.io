function sendMessage() {
  const input = document.getElementById('messageInput');
  const sentMsg = document.getElementById('sentMessage');
  const message = input.value.trim();
  
  if (!message) return;
  
  // Show typed message
  sentMsg.textContent = message;
  sentMsg.classList.remove('fly-away');
  
  // Animate fly-away and clear input
  setTimeout(() => {
    sentMsg.classList.add('fly-away');
  }, 500);
  
  input.value = ''; // Clear textbox
}

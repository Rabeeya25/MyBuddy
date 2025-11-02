const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const responses = [
  "That sounds tough. Remember, you’re doing your best 💜",
  "I’m proud of you for sharing that with me.",
  "It’s okay to feel like that. Take a deep breath 🌿",
  "You’re stronger than you think!",
  "Let’s take things one step at a time 🌸"
];

sendBtn.addEventListener("click", () => {
  const userText = userInput.value.trim();
  if (userText === "") return;

  displayMessage(userText, "user-message");
  userInput.value = "";

  setTimeout(() => {
    const botReply = getBotResponse(userText);
    displayMessage(botReply, "bot-message");
  }, 1000);
});

function displayMessage(text, className) {
  const message = document.createElement("div");
  message.classList.add(className);
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userText) {
  if (userText.toLowerCase().includes("sad"))
    return "I'm sorry you're feeling sad 😔. Want me to suggest something to cheer you up?";
  if (userText.toLowerCase().includes("happy"))
    return "That’s awesome! Keep that smile going 😊";
  if (userText.toLowerCase().includes("anxious"))
    return "Take a deep breath you will feel alright";
  if (userText.toLowerCase().includes("stress"))
    return "Try breathing slowly and relaxing your shoulders 🌼";
  return responses[Math.floor(Math.random() * responses.length)];
}

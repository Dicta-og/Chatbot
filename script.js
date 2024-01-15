const input = document.getElementById("input-field");
const logo = document.getElementById("logo");
const button = document.getElementById("submit-button");
const content = document.getElementById("content");
 
function createChat(message, username) {
  // <div>
    // <span class="name">You</span>
    // <span>Hello</span>
  // </div>
  const chatDiv = document.createElement("div");
 
  const name = document.createElement("span");
  name.classList.add("name");
  name.textContent = username;
  chatDiv.appendChild(name);
  const msg = document.createElement("span");
  msg.innerText = message;
  chatDiv.appendChild(msg);
  content.appendChild(chatDiv);
}
 
const aiMessages = ["hello!", "how can i help you?", "what do you need?", "Ah, I see. How can I assist you today?", "I'm here to help! What do you need?"];
let count = 0;
let lastUser = "ChatBot"
function sendMessage(){
  logo.style.display = "none";
  createChat(input.value, "You");
  setTimeout(() => {
    createChat(aiMessages[count], "ChatBot");
  }, 3000)
    count++
}
 
button.addEventListener("click", sendMessage)
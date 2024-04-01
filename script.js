// Array of jokes containing subarrays with setup and punchline
const jokes = [
  ["What did 0 say to 8?", "Nice belt."], 
  ["Test?", "Test."]
];

// Selecting the chat content area
const chatContent = document.querySelector(".chat-content");

// Index to keep track of the current joke
let jokeIndex = 0;

// Selecting the joke button
const jokeButton = document.getElementById("joke-button");

// Initial message from the bot
appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");

// Function to append a message from the bot
function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  chatContent.appendChild(messageDiv);
  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";
  messageDiv.appendChild(avatar);
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  messageDiv.appendChild(contentDiv);
}

// Function to request and display a joke
function requestJoke() {
  // Appending a user message
  appendUserMessage();
  
  // Checking if there are more jokes
  if (jokeIndex >= jokes.length) {
    appendBotMessage("Sorry, I'm out of jokes for now!");
    jokeButton.style.display = "none";
    return;
  }
  
  // Hiding the joke button temporarily
  jokeButton.style.display = "none";
  
  // Displaying loading message and joke after delay
  setTimeout(function() { appendBotMessage("Ok, got one."); }, 1000);
  setTimeout(function() { appendBotMessage(jokes[jokeIndex][0]); }, 1500);
  setTimeout(function() { 
    appendBotMessage(jokes[jokeIndex][1]); 
    jokeIndex++;
    jokeButton.style.display = "inline-block";
  }, 2000);
}

// Function to append a user message
function appendUserMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  chatContent.appendChild(messageDiv);
  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  messageDiv.appendChild(avatar);
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Tell me a joke!";
  messageDiv.appendChild(contentDiv);
}

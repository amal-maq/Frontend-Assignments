document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messages = document.getElementById('messages');

    // Get the message from the input field
    const messageText = messageInput.value;

    if (messageText.trim() !== '') {
        // Create a new message element
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;

        // Add the message to the chat window
        messages.appendChild(messageElement);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the latest message
        messages.scrollTop = messages.scrollHeight;
    }
});
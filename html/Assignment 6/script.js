document.getElementById('sendButton').addEventListener('click', sendmessage);
document.getElementById('messageInput').addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        sendmessage();
    }
});

function sendmessage(){

        const messageInput = document.getElementById('messageInput');
        const messages = document.getElementById('messages');
    
        const messageText = messageInput.value;
    
        if (messageText.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = messageText;
            messageElement.style.border = "1px grey";
            messageElement.style.backgroundColor = "#A6CDC6"
            //messageElement.style = "15vw";
            messageElement.style.width = "20vw";
            messageElement.style.height = "15vh";
            messageElement.style.borderRadius = "5px";
            messageElement.style.display = "flex";
            messageElement.style.alignItems ="flex-start";
            messageElement.style.paddingLeft = "1vw";
            messageElement.style.paddingTop = "1vh";
            messageElement.style.marginBottom = "1vh";
        
            messages.appendChild(messageElement);
            messageInput.value = '';
    
            messages.scrollTop = messages.scrollHeight;
    }
}
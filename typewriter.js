console.log('Typewriter code here!!!');
let messageArea;
document.addEventListener('npcPopulated', function() { //ensure textBubble is created dynamically first before querySelector
    messageArea = document.querySelector(".textBubble");
    console.log(messageArea);
});
let animationTimeout;
let hideTimeout;
let typewriterActive = true;

/* //show text with typewriter effect
const displayTextWithTypewriter = (target, message, index, interval, typewriter = true) => {
    const messageArea = document.querySelector(target);

    // Check if messageArea is hidden and make it visible again
    if (messageArea.style.display === 'none') {
        messageArea.style.display = 'block'; // Reset to initial display style
    }
    
    if (index < message.length && (!typewriter || typewriterActive)) {
        messageArea.textContent += message[index];
        index++
    }

    animationTimeout = setTimeout(() => {
        displayTextWithTypewriter(target, message, index, interval, typewriter);
    }, interval);

    // Check if the entire message has been displayed
    if (index === message.length) {
        // Hide the message area after 2 seconds
        hideMessageArea();
    }
    

} */
// Show text with typewriter effect
const displayTextWithTypewriter = (target, message, index, interval, typewriter = true) => {
    mouseLeaveCounter = 0; //reset the counter for hovering typewriter prompt
    const messageArea = document.querySelector(target);

    clearTimeOuts();

    // Make sure messageArea is visible before appending new characters
    showMessageArea();
    
    if (index < message.length && (!typewriter || typewriterActive)) {
        messageArea.textContent += message[index];
        index++
    }

    // Only continue the typewriter effect if there is more text to display
    if (index < message.length && typewriter) {

        animationTimeout = setTimeout(() => {
            displayTextWithTypewriter(target, message, index, interval, typewriter);
        }, interval);
    }
    
  
    // Set a timeout to hide the messageArea after  5 seconds
    hideMessageArea();
}
const clearTimeOuts = () => {
    if (animationTimeout) {
        clearTimeout(animationTimeout);
    }
    if(hideTimeout){
        clearTimeout(hideTimeout);
    }
}
const showMessageArea = () => {
    messageArea.style.opacity = '1';
    messageArea.style.visibility = 'visible';
}
// Function to hide messageArea after  2 seconds
const hideMessageArea = () => {
    hideTimeout = setTimeout(() => {
        messageArea.style.opacity = '0';
        messageArea.style.visibility = 'hidden';
    },  3000);
}
//clears text
const clearText = () => {
    console.log(messageArea.innerText)
    messageArea.innerText = "";
}

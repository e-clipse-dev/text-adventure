
let messageArea;
document.addEventListener('npcPopulated', function() { //ensure textBubble is created dynamically first before querySelector
    messageArea = document.querySelector(".textBubble");
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
    else{
        // This is the last recursive call, reset mouseLeaveCounter here
        window.mouseLeaveCounter = 0;
        console.log('Mouse Leave Count:', window.mouseLeaveCounter);
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

function shakeElement() {
    var target = document.getElementById('shake-target');
    target.classList.add('my-shake');
     
    // Remove the shake class after the animation ends to allow for re-triggering
    setTimeout(function() {
        target.classList.remove('my-shake');
    },  500); // Match the animation duration
  }
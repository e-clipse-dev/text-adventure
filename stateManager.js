// stateManager.js
let playerInventory = {}; // Initialize your inventory here

function updatePlayerInventory(newInventory) {
    playerInventory = newInventory;
}

function getPlayerInventory() {
    return playerInventory;
}

export default{
    updatePlayerInventory,
    getPlayerInventory
}
import file from './shopSystem.js';
import stateManager from './stateManager.js';
const{updatePlayerInventory} = stateManager;

const { 
    createNewInventory, 
    populateNav, 
    populateGrid, 
    populateNPC, 
    getRandomElementFromArray,
    globalInventory,
    NPC, 
    shopGrid, 
    inventoryGrid,
} = file;

/* ---------------------------------------------------------------------------------------------- */
/*                             START CREATING OUR SHOP INVENTORY HERE:                            */
/* ---------------------------------------------------------------------------------------------- */

export function initializeShop(){
  let weaponInventory = createNewInventory(globalInventory, [['weapons']]);
  let playerInventory = createNewInventory(globalInventory, [['basicSword', 2]]);
  const npc = 'Mason';

  updatePlayerInventory(playerInventory);

  console.group('CREATING A NEW SHOP INVENTORY OBJECT...');
    console.log('New Object created from: ', {globalInventory});
    console.log('New Object is called: ', {weaponInventory});
    console.log('Player Inventory: ', {playerInventory})
  console.groupEnd();


  const shopNavBar = document.querySelector('#category-shop-navbar');
  const invNavBar = document.querySelector('#category-inv-navbar');
  console.group('CREATING OUR GRID...');
    console.log('Shop Object Used: ', {weaponInventory})
    console.log('NPC Present: Mason');

    populateNav(shopNavBar, weaponInventory);
    populateNav(invNavBar, playerInventory);
    populateGrid(shopGrid,weaponInventory);
    populateGrid(inventoryGrid, playerInventory);
    populateNPC(npc);


    //npc gives an intro text speech in the beginning
    displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.intro), 0, 22);
  console.groupEnd();
}

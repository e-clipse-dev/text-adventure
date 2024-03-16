/* ---------------------------------------------------------------------------------------------- */
/*                                          IMPORTED CODE                                         */
/* ---------------------------------------------------------------------------------------------- */
// Define the loadShopModule function: pick which shop to load into our shopSystem template...
async function loadShopModule(modulePath) {
    try {
       const shopModule = await import(modulePath);
       if (typeof shopModule.initializeShop === 'function') {
        await shopModule.initializeShop();
       } else {
         console.error('The module does not export an initializeShop function.');
       }
    } catch (error) {
       console.error('Failed to load the shop module:', error);
    }
   }
  
  
  
  let playerInventory;
  document.addEventListener('DOMContentLoaded', async () => {
    // Load the initial shop module
    await loadShopModule('./weaponShop.js');
  
    import('./stateManager.js').then(stateManager => {
      const { getPlayerInventory } = stateManager.default;
      playerInventory = getPlayerInventory();
      console.log({playerInventory});
      // Use currentInventory here
    });
  });
  
  /* ---------------------------------------------------------------------------------------------- */
  /*                                           PROTOTYPES                                           */
  /* ---------------------------------------------------------------------------------------------- */
  String.prototype.splitCamelCase = function() {
    return this.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  
  String.prototype.capitalize = function() {
    return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }
  
  
  /* ---------------------------------------------------------------------------------------------- */
  /*                                  GLOBAL SHOP INVENTORY OBJECT                                  */
  /* ---------------------------------------------------------------------------------------------- */
  
  //arrow functions do not have their own 'this' value, and are therefore not able to reference itself. 
  const globalInventory = {
    weapons: {
      sword: {
        basicSword: {
          rarity: 'common',
          buyPrice: 5,
          sellPrice: 3,
          image: 'images/basic-sword.png',
          description: function() { return 'A standard basic sword'},
        },
        /* 'jeweled-sword': {
          'attack': 15,
          'buyPrice': 20,
          'sellPrice': 10,
          'image': 'images/jeweled-sword.png',
          'description': 'A sword with an embedded jewel of mysterious origin. It contains magic, granting additional power compared to ordinary swords.'
        }, */
      },
      ring: {
        basicRing: {
          rarity: 'common',
          attack: 3,
          buyPrice: 5,
          sellPrice: 3,
          image: 'images/basic-ring.png',
          description: function () { return 'A standard basic ring for casting basic spells'},
        }
      },
      dagger: {
        basicDagger: {
          rarity: 'common',
          attack: 3,
          buyPrice: 5,
          sellPrice: 3,
          image: 'images/basic-dagger.png',
          description: function() {return 'A standard dagger'},
        }
      },
      bow: {
        basicBow:{
          rarity: 'common',
          attack: 3,
          buyPrice: 5,
          sellPrice: 3,
          image: 'images/bow-arrow.png',
          description: function() {return 'A standard bow with arrows'},
        }
      },
      axe: {
        basicAxe: {
          rarity: 'common',
          attack: 3,
          buyPrice: 5,
          sellPrice: 3,
          image: 'images/basic-axe.png',
          description: function() {return 'A standard axe, meant for chopping wood.'},
        }
      }
    },
    consumables: {
      potion: {
        healthPotion: {
          quantity: 1,
          power: 10,
          buyPrice: 6,
          sellPrice: 3,
          image: 'images/health-potion.png',
          description: function() { return colorExpressions(this,'A standard potion that restores ${this.power} health.')}
        },
        poisonPotion:{
          quantity: 3,
          power: 3,
          damage: 3,
          buyPrice: 6,
          sellPrice: 3,
          image: 'images/poison-potion.png',
          description: function() { return colorExpressions(this, 'A flask filled with poison. The flask does ${this.damage} damage and inflicts the poison status. If the poison status is already inflicted, remove the poison status instead.')}
        },
        sludgePotion:{
          quantity: 2,
          damage: 2,
          buyPrice: 4,
          sellPrice: 3,
          image: 'images/sludge-potion.png',
          description: function() {return colorExpressions(this,'A flask filled with a gelatinous green, oozing sludge. The flask does ${this.damage} damage and inflicts the fatigue status. If the fatigue status is already inflicted, remove the slow status instead.')}
        },
        burnPotion:{
          quantity: 2,
          damage: 3,
          buyPrice: 6,
          sellPrice: 3,
          image: 'images/burn-potion.png',
          description: function() {return colorExpressions(this,'A flask filled with a flammable liquid. The flask does ${this.damage} damage and inflicts the burn status. If the burn status is already inflicted, remove the burn status instead.')}
        },
        attackBoost: {
          quantity: 4,
          damage: 3,
          buyPrice: 6,
          sellPrice: 3,
          image: 'images/attack-boost-potion.png',
          description: function() {return colorExpressions(this,'A potion that boosts the attack of the user and applies the attack status. The user will deal an additional ${this.damage} attack for all sources.')}
        }
        /* 'mana-potion': {
          'mana-power': 10,
          'buyPrice': 8,
          'sellPrice': 4,
          'image': 'images/mana-potion.png',
          'description': 'A potion that restores mana for casting spells.'
        } */
      }
    },
    materials:{}
  };
  
  function colorExpressions(obj, str) {
    const styles = { //all the listed styles for colors we want 
      damage: 'red',
      power: 'green'
    };
  
    Object.entries(styles).forEach(([prop, color]) => { //loop and check for each expression present in our string to replace with. 
      const regExp = new RegExp(`\\$\\{this\\.${prop}\\}`, 'g');
      str = str.replace(regExp, `<span style="color:${color};">${obj[prop]}</span>`);
    });
  
    return str;
  }
  
  
  /* ---------------------------------------------------------------------------------------------- */
  /*                                             OBJECTS                                            */
  /* ---------------------------------------------------------------------------------------------- */
  
  const statusEffects = {
  
  }
  const categoryIcons = {
    weapons: 'ra ra-crossed-swords',
    consumables: 'ra ra-potion',
    materials: 'ra ra-zigzag-leaf',
  }
  
  /* let playerInventory = getPlayerInventory(); */
  /* console.log({playerInventory}); */
  const NPC = {
    'Mason': {
      image: 'images/blacksmith-person-1.png.png',
      messages : {
        intro : ["Welcome to my shop!"], //intro of the shop
        purchase : ["Thanks for the purchase!", "Good find!"], //after purchasing
        sell : ["What have we got here?", "Just what i needed!"],  //selling to shop
        outOfCurrency : ["My prices displayed are final.", "You don't have enough for that!"], //trying to buy an item with 0 currency
        outOfStock : ["Sorry, we've run out of stock for that item."], //no more inventory
        hover : ["What are ya lookin' for traveler?"], //after hovering over 6 items
        leave : ["Don't be a stranger."], //leaving the shop 
      }
    }
  };
  
  /* ---------------------------------------------------------------------------------------------- */
  /*                                     GLOBAL FUNCTIONS / DATA                                    */
  /* ---------------------------------------------------------------------------------------------- */
  
  //grab a random element from an array, must pass an array to the argument. 
  function getRandomElementFromArray(array) {
    let randomIndex;
    let randomValue;
    if (typeof array[0] === 'string' && array[0].includes('-')) { //if your array includes a dash, infer a randomized range of numbers
      const parts = array[0].split('-').map(Number);
      const min = Math.min(...parts);
      const max = Math.max(...parts);
      randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomValue;
    }
    else{ //an array full of numbers, will randomize between those numbers
      randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }
  }
  
  //create an individual item grid box
  function createItemContainer(category) { 
    const container = document.createElement('article');
    container.classList.add('item-wrapper');
    container.classList.add(category);
    container.addEventListener('mousemove', () => container.querySelector('.hover-content').style.display = 'block');
    container.addEventListener('mouseleave', () => {
      container.querySelector('.hover-content').style.display = 'none';
      window.mouseLeaveCounter++;
      console.log(`Mouse Leave Count: ${window.mouseLeaveCounter}`);
      checkMouseLeaveCounter();
    });
    return container;
  }
  
  // Global mouseLeave counter variable
  window.mouseLeaveCounter = 0;
  function checkMouseLeaveCounter() {
    if (window.mouseLeaveCounter == 6) {
      clearText();
      displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.hover), 0, 22);
    }
  }
  
  //create hover content for our grid items
  function createHoverContent(objInventory, itemName, itemType, itemDescription, itemRarity){
    const hoverContent = document.createElement('div');
      /* hoverContent.style.backgroundColor = 'rgba(0,0,0,0.8)'; */
      hoverContent.classList.add('hover-content');
  
      const hoverWrapper = document.createElement('article');
        hoverWrapper.classList.add('hover-details');
  
        const itemNameHeading = document.createElement('h2');
          itemNameHeading.textContent = itemName;
          /* itemNameHeading.classList.add('sticky'); */
          hoverWrapper.appendChild(itemNameHeading);
  
        const typeAndName = document.createElement('p');
          if (itemRarity) {
            typeAndName.textContent = `${itemRarity} ${itemType}`;
          } else {
            typeAndName.textContent = itemType;
          }
          hoverWrapper.appendChild(typeAndName);
  
        const description = document.createElement('p');
          description.classList.add('description');
          description.innerHTML = itemDescription;
          hoverWrapper.appendChild(description);
  
        hoverContent.appendChild(hoverWrapper);
    
      const buyCoin = createCoin('green-coin', '', (event) => {
          clearText();
          grabData(objInventory, event);
        });
      hoverContent.appendChild(buyCoin);
    
      const exitCoin = createCoin('red-coin', '', () => hoverContent.style.display = 'none');
      hoverContent.appendChild(exitCoin);
    
  
    return hoverContent; 
  }
  
  //creates a coin and adds a class to it. 
  function createCoin(coinClass, price, clickHandler) {
    const coin = document.createElement('div'); //or span if you want
    coin.classList.add('coin');
    coin.classList.add(coinClass);
    coin.innerText = price;
    coin.addEventListener('click', clickHandler);
    return coin;
  }
  
  //creates banner element
  function createItemQuantity(quantity){
    const banner = document.createElement('div'); 
    banner.classList.add('banner');//apply drop-shadow here
  
    const span = document.createElement('span'); 
    span.innerText = 'x' + quantity;
    span.classList.add('quantity-item');//apply clip-path here, since it interferes with the drop-shadow
    banner.appendChild(span);
    if(quantity < 2){ //if quantity is 1 or 0, don't show the quantity visual.
      banner.classList.toggle('hidden'); 
    }
    return banner;
  }
  
  //creates image element
  function createItemImage(imageSrc) {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.classList.add('shop-item');
    return img;
  }
  
  //creates price element
  function createItemPrice(price) {
    const span = document.createElement('span');
    span.innerText = price;
    span.classList.add('coin');
    return span;
  }
  
  const inventoryGrid = document.querySelector('#inventory-grid');
  const shopGrid = document.querySelector('#shop-grid');
  /* ---------------------------------------------------------------------------------------------- */
  /*                                  CREATE NEW INVENTORIES HERE:                                  */
  /* ---------------------------------------------------------------------------------------------- */
  
   function createNewInventory(obj, inputs) {
    // Initialize new inventory object
    let newInventory = {};
   
    let randomizeEvery = false; //flag for checking whether we should randomize for every item in our input
    
    // Check if only the obj is given
    if (!inputs) { 
      return deepCopy(obj); //copy the entire object instead.
    }
    // Loop over each input
    for (let input of inputs) { 
      let item = input[0], quantity = determineQuantity(input);
      copyAllItems(obj,item,quantity);
  
      if(randomizeEvery){
        randomizeEvery = false; //if 'every' keyword was found in this input, set flag back to false to reset it for the next input
      }
    }
  
    // Return the new inventory
    return newInventory;
  
  
    /* ------------------------------------- HELPER FUNCTIONS ------------------------------------- */
    function copyAllItems(obj,item,quantity){
      // Check if input is a category
      if (obj[item]) {
        // Copy all items under the category
        for (let subCategory in obj[item]) {
          for (let subItem in obj[item][subCategory]) {
            copyItem(item, subCategory, subItem, quantity, newInventory);
          }
        }
      } else {
        // Check if input is a subcategory
        for (let category in obj) {
          if (obj[category][item]) {
            // Copy all items under the subcategory
            for (let subItem in obj[category][item]) {
              copyItem(category, item, subItem, quantity, newInventory);
            }
          } else {
            // Check if input is an item
            for (let subCategory in obj[category]) {
              for (let subItem in obj[category][subCategory]) {
                if (subItem === item) {
                //copy all items under the item
                  copyItem(category, subCategory, item, quantity, newInventory);
                }
              }
            }
          }
        }
      }
    }
  
    // Helper function to copy an item
    function copyItem(category, subCategory, item, quantity, newInventory){
      initialize();
      copyProperties();
      setQuantity();
  
      function initialize(){// Initialize new object structures in newInventory
        newInventory[category] = newInventory[category] || {};
        newInventory[category][subCategory] = newInventory[category][subCategory] || {};
        newInventory[category][subCategory][item] = newInventory[category][subCategory][item] || {};
      }
      function copyProperties(){// Copy properties from original item to newInventory
        for (let prop in obj[category][subCategory][item]) {
          newInventory[category][subCategory][item][prop] = obj[category][subCategory][item][prop];
        }
      }
      function setQuantity(){// Set the quantity
        if(quantity!== undefined){
          handleQuantityGiven(); //if quantity is given
        }else{
          handleQuantityNotGiven(); //if quantity is not given;
        }
  
        function handleQuantityGiven(){
          if(randomizeEvery){ //if flag is true, we randomize
             console.log('randomize on every input');
            newInventory[category][subCategory][item]['quantity'] = getRandomElementFromArray(quantity);
          }
          else{  //flag is false
             console.log('randomize all input at the same time');
            newInventory[category][subCategory][item]['quantity'] = quantity;
          }
        }
        
        function handleQuantityNotGiven(){
          if (obj[category][subCategory][item]['quantity']) { //grab the original quantity value if it exists
            newInventory[category][subCategory][item]['quantity'] = obj[category][subCategory][item]['quantity'];
          } 
          else{
            newInventory[category][subCategory][item]['quantity'] = 1; //if no original value exists, set quantity to 1. 
          }
        }
      }
    };
    //DETERMINE OUR ITEM AND THE QUANTITIES WE GIVE TO THEM --------------------------------------------------------------------------
      function determineQuantity(input){
        let quantity;
        if(input.length == 3 || input.length > 2){
          if(isEvery(input[input.length - 1])){ //check to see if every is at the last position of our input
            quantity = isRangeGiven(input[1]) ? [input[1]] : [...input.slice(1,-1)];
            randomizeEvery = true; //flag is turned on to represent that the 'every' keyword was found
          }
          else{
            // Generate a random quantity from the rest of the inputs
            console.log([...input.slice(1)])
            quantity = getRandomElementFromArray([...input.slice(1)]);
          }
        }
        else if (input.length == 2) { //item and quantity given only 
          quantity = isRangeGiven(input[1]) ? getRandomElementFromArray([input[1]]) : input[1];
        } 
        else { //input.length == 1, //quantity wasn't given 
          quantity = undefined; 
        }
        return quantity;
      }
    //------------------------------------------------------------------------------------------------------------------------------
  
    
    //--------------------------------------------------------------------------------------------------------------------------
    
    //Helper function check if 'every' keyword is given
    function isEvery(input){
      return /^every$/i.test(input);
     }
     // Helper function to check if a range is given
     function isRangeGiven(input) {
      return /^\d+-\d+$/.test(input);
     }
  }
  
  
  function deepCopy(obj) {
    // Check if the input is an array or an object and initialize the result accordingly
    let result = Array.isArray(obj) ? [] : {};
     
    // Iterate through each key in the input object
    for (let key in obj) {
      // If the current property is a function, copy it to the result
      if (typeof obj[key] === 'function') {
        result[key] = obj[key];
      }  
      // If the current property is an object (but not null), recursively call deepCopy to copy it
      else if (obj[key] !== null && typeof obj[key] === 'object') {
        result[key] = deepCopy(obj[key]);
      }  
      // Otherwise, simply assign the value to the result
      else {
        result[key] = obj[key];
      }
    }
     
    // Return the fully copied object
    return result;
  }
  
  
  
  /* ---------------------------------------------------------------------------------------------- */
  /*                             START CREATING OUR SHOP INVENTORY HERE:                            */
  /* ---------------------------------------------------------------------------------------------- */
  
  //shop inventory located in specific js files.
  
  /* let tutorialInventory = createNewInventory(globalInventory, [['consumables', 2, 5, 'every'],['weapons', 3],['basicSword', 2]]);
  inventory = createNewInventory(globalInventory, [['basicSword', 2]]);
  
  console.group('CREATING A NEW SHOP INVENTORY OBJECT...');
     console.log('New Object created from: ', {globalInventory});
     console.log('New Object is called: ', {tutorialInventory});
     console.log('Player Inventory: ', {inventory})
  console.groupEnd();
  
  
  const shopNavBar = document.querySelector('#category-shop-navbar');
  const invNavBar = document.querySelector('#category-inv-navbar');
  console.group('CREATING OUR GRID...');
    console.log('Shop Object Used: ', {tutorialInventory})
    console.log('NPC Present: Mason');
  
    populateNav(shopNavBar, tutorialInventory);
    populateNav(invNavBar, inventory);
    populateGrid(shopGrid,tutorialInventory);
    populateGrid(inventoryGrid, inventory);
    populateNPC('Mason');
  
  
    //npc gives an intro text speech in the beginning
    displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.intro), 0, 22);
  console.groupEnd(); */
  
  /* ---------------------------------------------------------------------------------------------- */
  /*                           POPULATENAV - CATEGORY NAVIGATION FOR GRID                           */
  /* ---------------------------------------------------------------------------------------------- */
  
  //populate the navigation bar
  function populateNav(nav, objInventory){
    console.group('POPULATE NAV ON...', nav.id.toUpperCase());
  
    const container = nav; console.log(container);
  
    const numOfNavElements = 1 + Object.keys(objInventory).length;
    console.log('Number of Nav Elements (including "All" category): ', numOfNavElements);
  
    const allCategoryElement = createAllCategory(numOfNavElements);
    container.appendChild(allCategoryElement);
    Object.keys(objInventory).forEach(category => {
      const categoryElement = createCategoryElement(category, numOfNavElements);
      container.appendChild(categoryElement)
    })
  
    updateCategoryWidths(container, numOfNavElements);
    updateAllCategoryElement(allCategoryElement, numOfNavElements);
    console.groupEnd();
  }
  
  function createAllCategory(numOfNavElements){
    const categoryElement = document.createElement('article');
    categoryElement.classList.add('category-nav', 'all-category');
    categoryElement.style.width = `calc(100%/${numOfNavElements})`;
  
    categoryElement.addEventListener('click', (event) => {
      const isCategoryShopNav = event.target.closest('#category-shop-navbar');
      const isCategoryInvNav = event.target.closest('#category-inv-navbar');
  
      showItemsOnly('all', event);
  
      // Remove 'expanded' class from all other .category-nav elements
      let categoryElements;
      if(isCategoryShopNav){
        categoryElements = document.querySelectorAll('#category-shop-navbar .category-nav');
      }
      if(isCategoryInvNav){
        categoryElements = document.querySelectorAll('#category-inv-navbar .category-nav')
      }
  
      categoryElements.forEach((otherCategoryElement) => {
        if (otherCategoryElement !== document.querySelector('#all-category')) {
          otherCategoryElement.classList.remove('expanded');
        }
      });
      toggleCategoryText('all', event);
    });
    return categoryElement;
  }
  
  //create category elements for our navbars
  function createCategoryElement(category){
    const categoryElement = document.createElement('article');
    categoryElement.classList.add('category-nav');
    categoryElement.classList.add(category);
    categoryElement.addEventListener('click', (event) => handleCategoryClick(category, categoryElement, event));
  
    //Append order: icon(i), [category(span), exit button(div)]
  
    if(categoryIcons[category]){ //if there exists a category from our shop inventory found in the categoryIcons object, create an icon for it. 
      const icon = createIconElement(categoryIcons[category]); 
      categoryElement.appendChild(icon); 
    }
  
    const categoryText = createCategoryTextElement(category); 
    const categoryExitButton = createCoin('red-coin-nav', '');
    categoryExitButton.classList.add('hidden');
    categoryText.appendChild(categoryExitButton);
    categoryElement.appendChild(categoryText);
  
    return categoryElement;
  }
  
  //create icon elements
  function createIconElement(iconClasses){
    const icon = document.createElement('i');
    const classes = iconClasses.split(' ');
    icon.classList.add(...classes);
    return icon;
  }
  
  //create category text elements
  function createCategoryTextElement(category){
    const categoryText = document.createElement('span');
    categoryText.innerText = category[0].toUpperCase() + category.slice(1);
    categoryText.classList.add('hidden');
    return categoryText;
  }
  
  function handleCategoryClick(category, categoryElement, event){
    const isCategoryShopNav = event.target.closest('#category-shop-navbar');
    const isCategoryInvNav = event.target.closest('#category-inv-navbar');
  
    showItemsOnly(category, event);
    const categoryText = categoryElement.querySelector('span');
    const categoryExitButton = categoryElement.querySelector('.red-coin-nav');
    const viewportWidth = window.innerWidth;
  
    // Remove 'expanded' class from all other .category-nav elements
    let categoryElements;
    if(isCategoryShopNav){
      categoryElements = document.querySelectorAll('#category-shop-navbar .category-nav');
    }
  
    if(isCategoryInvNav){
      categoryElements = document.querySelectorAll('#category-inv-navbar .category-nav');
    }
    
    categoryElements.forEach((otherCategoryElement) => {
       console.log(otherCategoryElement);
      if (otherCategoryElement !== categoryElement) {
        otherCategoryElement.classList.remove('expanded');
        if(viewportWidth <=1740){
          otherCategoryElement.classList.toggle('hidden');
        }
      }else{
        if(viewportWidth <=1740){
          categoryExitButton.classList.toggle('hidden');
        }
      }
    });
    
    // Toggle 'expanded' class for the clicked .category-nav element
    toggleCategoryText(categoryText, event);
    categoryElement.classList.toggle('expanded');
  }
  
  //show which items present on our grid, based on which category element we click on our navbar
  function showItemsOnly(category, event){ //show which items inside grid are being displayed.
  
    //determine which navigation bar the event target is closest to...
    const isCategoryShopNav = event.target.closest('#category-shop-navbar');
    const isCategoryInvNav = event.target.closest('#category-inv-navbar');
  
    let items; //target the corresponding grid's items in relation to the nav that it is closest to. 
    if(isCategoryShopNav){
      items = document.querySelectorAll('#shop-grid .item-wrapper');
    }
    if(isCategoryInvNav){
      items = document.querySelectorAll('#inventory-grid .item-wrapper');
    }
    items.forEach(item => {
      item.style.display = category === 'all' ? '' : item.classList.contains(category) ? '' : 'none';
    });
  } 
  
  //toggles category text on our navbar
  function toggleCategoryText(categoryText, event) {
      //determine which navigation bar the event target is closest to...
      const isCategoryShopNav = event.target.closest('#category-shop-navbar');
      const isCategoryInvNav = event.target.closest('#category-inv-navbar');
  
      let allCategoryTexts;
      if(isCategoryShopNav){
        console.log('In categoryShop ..... to shop-grid')
        allCategoryTexts = isCategoryShopNav.querySelectorAll('.category-nav span');
        
      }
  
      if(isCategoryInvNav){
        console.log('In invShop ..... to inv-grid')
        allCategoryTexts = isCategoryInvNav.querySelectorAll('.category-nav span');
      }
      
      allCategoryTexts.forEach(text => {
          text.classList.add('hidden');
      });
      if(categoryText !== 'all'){
        if(categoryText.parentNode.classList.contains('expanded')){
            categoryText.classList.add('hidden');
            categoryText.classList.remove('navTextFormatting');
        } 
        else{
          categoryText.classList.remove('hidden');
          categoryText.classList.add('navTextFormatting');
        }   
      }
  }
  
  //update category widths 
  function updateCategoryWidths(navBar, numOfNavElements){
    console.log('UPDATING CATEGORY WIDTHS ON...', navBar.id.toUpperCase() + ' to ' + `calc(100%/${numOfNavElements})`);
    navBar.querySelectorAll('.category-nav').forEach((categoryElement) => {
      console.log('Affected Category: ', categoryElement);
      categoryElement.style.width = `calc(100%/${numOfNavElements})`;
      
      if(numOfNavElements == 2){ //when 'all' and one specific category present, we make the specific category full width instead. 
        categoryElement.style.width = `calc(100%/1)`;
      }
    })
  }
  
  //updating what should happen to our 'all category' element according to the number of categories present in our nav.
  function updateAllCategoryElement(allCategoryElement, numOfNavElements){
    if(numOfNavElements > 2){
      allCategoryElement.style.display = '';
      console.log('UPDATING ALL CATEGORY TO APPEAR')
    }
    else{
      allCategoryElement.style.display = 'none';
      console.log('UPDATING ALL CATEGORY TO HIDE')
    }
  }
  /* ---------------------------------------------------------------------------------------------- */
  /*                            POPULATEGRID - GRID LAYOUT FOR SHOP ITEMS                           */
  /* ---------------------------------------------------------------------------------------------- */
  function populateGrid(grid ,objInventory) {
    console.group('POPULATE GRID ON...', grid.id.toUpperCase());
    const gridContainer = grid;
  
    Object.keys(objInventory).forEach(category => {
      Object.keys(objInventory[category]).forEach(itemType => {
        Object.keys(objInventory[category][itemType]).forEach(itemName => {
          const container = createItemContainer(category);
           console.log(`Created item container: ${itemName}`, container);
          
  
          //create hover content
          let hoverContent;
          if(objInventory[category][itemType][itemName]['rarity']){
            hoverContent = createHoverContent(
              objInventory,
              itemName.splitCamelCase().capitalize(),
              itemType,
              objInventory[category][itemType][itemName].description(),
              objInventory[category][itemType][itemName]['rarity'],
            );
          }
          else{
            hoverContent = createHoverContent(
              objInventory,
              itemName.splitCamelCase().capitalize(),
              itemType,
              objInventory[category][itemType][itemName].description(),
            );
          }
          container.appendChild(hoverContent);
  
          const outOfStock = document.createElement('span'); //sold out
          outOfStock.innerText = 'SOLD OUT';
          outOfStock.classList.add('out-of-stock');
          outOfStock.classList.toggle('hidden');
          container.appendChild(outOfStock);
  
          if (!objInventory[category][itemType][itemName]['quantity']) { 
            //if no quantity is set, set it to one since it appears on the shop inventory
            objInventory[category][itemType][itemName]['quantity'] = 1;
          }
  
          container.appendChild(createItemQuantity(objInventory[category][itemType][itemName]['quantity']));
          container.appendChild(createItemImage(objInventory[category][itemType][itemName]['image']));
          container.appendChild(createItemPrice(objInventory[category][itemType][itemName]['buyPrice']));
  
          gridContainer.appendChild(container);
        });
      });
    });
    console.groupEnd();
  }
  
  /* ---------------------------------------------------------------------------------------------- */
  /*                   GRABDATA - USING DATA FROM OUR SHOP GRID OR INVENTORY GRID                   */
  /* ---------------------------------------------------------------------------------------------- */
  
  function grabData(objInventory, event){
    console.group('GRABBING DATA...')
    const parentNode = event.target.closest('.item-wrapper');
     console.log('Selected Item: ', parentNode);
    const imgElement = parentNode.querySelector('img');
    const imgSrc = imgElement.src.replace(/.*images/, 'images');
    const priceElement = parentNode.querySelector(':scope > .coin'); //:scope refers to the context node(parentnode)
    const price = parseInt(priceElement.innerText, 10);
    const currencyElement = document.querySelector('#currency-amount');
    const currency = parseInt(currencyElement.innerText, 10);
    const quantityElement = parentNode.querySelector('.quantity-item');
    const quantity = parseInt(quantityElement.innerText.match(/\d+/), 10);
    const isShopGrid = parentNode.closest('#shop-grid');
    console.log(isShopGrid);
    const isInventoryGrid = parentNode.closest('#inventory-grid');
    
    if(isShopGrid){
      handleShopGrid(objInventory, imgSrc, price, quantityElement, quantity, currencyElement, currency, parentNode, event);
    }
    else if(isInventoryGrid){
  
      handleInventoryGrid(imgSrc, price, currencyElement, currency, parentNode);
    }
  
    console.groupEnd();
  }
  
  function handleShopGrid(objInventory, imgSrc, price, quantityElement, quantity, currencyElement, currency, parentNode, event){
    console.group('USING SHOP-GRID DATA...')
    if(quantity == 0){
      console.group('QUANTITY IS 0');
       console.log('Quantity: ', quantity);
       console.log("Error: We are out of stock!");
      displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.outOfStock), 0, 22);
      console.groupEnd();
      return;
    }
  
    if(currency < price){ //if currency is lower than the price, we are out of currency
      console.group('NOT ENOUGH PLAYER CURRENCY...')
       console.log('Currency: ', currency);
      console.log("error: You don't have enough money to buy that!")
      displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.outOfCurrency), 0, 22);
      console.groupEnd();
      return;
    }
  
    //if none of the above, we are capable of purchasing:
    console.group('PURCHASING ITEM...');
    displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.purchase), 0, 22);
  
     console.log('Quantity: ', quantity);
     console.log('Player Currency: ', currency);
     console.log('Subtracting quantity and currency...');
  
    updateQuantityCount(quantityElement, quantity - 1, parentNode, shopGrid);
    updateCurrencyAmount(currencyElement, currency - price);
    console.groupEnd();
  
    populateItemToPlayer(objInventory, imgSrc, event);
    console.groupEnd();
  }
  
  function handleInventoryGrid(imgSrc, price, currencyElement, currency, parentNode){
    console.group('USING INVENTORY GRID DATA...')
  
    shopGrid.querySelectorAll('.item-wrapper').forEach(wrapper => { //looping through our #shop-grid Inventory to match our event image with the same image on our shop-grid. 
      wrapper.querySelectorAll('.shop-item').forEach(image => {
        const imageUrl = image.src.replace(/.*images/, 'images');
        if (imageUrl === imgSrc) { //we know where to add quantity for which grid tile on our #shop-grid
          console.log('IMAGE MATCH FOUND...');
  
          displayTextWithTypewriter(".textBubble", getRandomElementFromArray(NPC['Mason'].messages.sell),  0,  22);
          let targetItemWrapper = image.parentNode;
          const quantityElement = targetItemWrapper.querySelector('.quantity-item');
          const quantity = parseInt(targetItemWrapper.querySelector('.quantity-item').innerText.match(/\d+/), 10);
          
          console.log('Quantity: ', quantity);
          console.log('Player Currency: ', currency);
          console.log('Adding quantity(shop grid) and player currency...')
  
          updateQuantityCount(quantityElement, quantity + 1, parentNode, inventoryGrid );
          
        }
      });
    });
  
    //outside of loop; incase the player is selling inventory items not present on shop inventory grid. Only the currency is given back, and the item is lost forever after selling.
    updateCurrencyAmount(currencyElement, currency + price);
    removeItemFromPlayer(imgSrc);
    console.groupEnd();
  }
  
  function updateQuantityCount(quantityElement, newQuantity, parentNode = null, grid = null){
     console.log('New Quantity: ' + newQuantity);
    quantityElement.innerText = 'x' + newQuantity;
    if(grid){
      if(grid === shopGrid){ //quantities are always subtracted when we are in the shopGrid
          const soldOut = parentNode.querySelector('.out-of-stock');
          if(newQuantity == 1){
            quantityElement.classList.toggle('hidden');
            
            console.log('QUANTITY IS 1...')
            console.log('REMOVING QUANTITY BANNER...')
          }
          if(newQuantity == 0){
            // Apply grayscale filter to all elements inside the container
            var elementsToGray = parentNode.querySelectorAll(':not(.out-of-stock)');
            for (var i = 0; i < elementsToGray.length; i++) {
              elementsToGray[i].style.filter = 'grayscale(100%)';
            }
            parentNode.classList.toggle('gray-scale-bg');
            // Remove the filter from elements with the 'coin' class
            soldOut.classList.toggle('hidden');
            soldOut.style.filter = "none";
  
            console.log('QUANTITY IS 0...');
            console.log('SOLD OUT BANNER APPEARS...')
          }
  
      }
      else if(grid === inventoryGrid){ //quantities are always being added when we are in the inventoryGrid
        const targetItemWrapper = quantityElement.parentNode.parentNode;
         console.log('targeted item wrapper: ', targetItemWrapper);
        if(newQuantity == 1){
          targetItemWrapper.querySelector('.out-of-stock').classList.toggle('hidden');
          targetItemWrapper.querySelectorAll(':not(img)').forEach(element => element.style.filter = 'none');
          targetItemWrapper.querySelector('img').style.filter = '';
          targetItemWrapper.classList.toggle('gray-scale-bg');
        }
        if(newQuantity == 2){
          quantityElement.classList.toggle('hidden');
        }
      }
    }
    
  }
  
  function updateCurrencyAmount(currencyElement, newCurrency){
     console.log('New Player Currency: ', newCurrency);
    currencyElement.innerText = newCurrency;
  }
  
  function populateItemToPlayer(objInventory, image, event){ //remember event is referring to grab data function (where the player bought from shop-grid)
    console.group('POPULATING ITEM ON INVENTORY GRID...')
    console.log('Current Player Inventory: ', playerInventory);
    const isShopGrid = event.target.closest('#shop-grid');
    const isInventoryGrid = event.target.closest('#inventory-grid');
  
    let allCategoryElement; //lets target the correct 'all category' from the respective navbars.
    if(isShopGrid){
      allCategoryElement = document.querySelector('#category-inv-navbar .all-category'); 
      //remember we are checking if were inside shop-grid (and grabbing data from it), if we are, we affect changes in the inventory navbar; 
    }
    if(isInventoryGrid){
      allCategoryElement = document.querySelector('#category-shop-navbar .all-category');
    }
    
  
    const matchingImg = findMatchingImage(objInventory, image);
  
    if (matchingImg) {
      const { category, itemType, itemName, itemKeys } = matchingImg;
      //const item = `${category}.${itemType}.${itemName}`; //this will not work for some reason, maybe reading object literals wrong?
      initializeInvObj(category, itemType, itemName);
  
      //add new item onto player inventory
      if (!playerInventory[category][itemType][itemName]['quantity']) { //if there is no quantity, we know the item does not exist. 
        console.log('CREATING ITEM ON PLAYER INVENTORY OBJECT...')
        playerInventory[category][itemType][itemName]= {...itemKeys, quantity: 1}; //we set/overwrite the quantity to 1 since the item is appearing for the first time on the player inventory. 
      
        console.log('Current Player Inventory: ', playerInventory);
        const container = createItemContainer(category);
  
        /* inventoryNavBar.querySelectorAll('.category-nav')
        addNavCategory(category); //add a new category to our inventory navbar */
  
        //create hover content for grid item
        let hoverContent;
        if(objInventory[category][itemType][itemName]['rarity']){
          hoverContent = createHoverContent(objInventory,
            itemName.splitCamelCase().capitalize(),
            itemType,
            objInventory[category][itemType][itemName].description(),
            objInventory[category][itemType][itemName]['rarity'])
        }
        else{
          hoverContent = createHoverContent(objInventory,
            itemName.splitCamelCase().capitalize(),
            itemType
            ,objInventory[category][itemType][itemName].description());
        }
  
        container.appendChild(hoverContent);
        container.appendChild(createItemImage(image));
        container.appendChild(createItemQuantity(playerInventory[category][itemType][itemName]['quantity']));
        container.appendChild(createItemPrice(objInventory[category][itemType][itemName]['sellPrice']));
        inventoryGrid.appendChild(container);
  
        inventoryGrid.querySelector('.item-wrapper img[src="' + image + '"]').parentNode.querySelector('.banner').classList.add('hidden'); //hide quantity banner because quantity is 1
  
        const numOfNavElements = 1 + Object.keys(playerInventory).length;
        /* const categoryElement = handleCategoryElement(category, allCategoryElement, numOfNavElements); */
  
        
        const categoryInvNav = document.querySelector('#category-inv-navbar');
        /* const categoryShopNav = document.querySelector('#category-shop-navbar'); */
  
        //adding new category 
        if(!categoryInvNav.querySelector(`.${category}`)){ //if the category does not exist in the navbar, create one. 
          const categoryElement = createCategoryElement(category);
          console.log('num of navs: ', numOfNavElements);
          if(isShopGrid){
            categoryInvNav.appendChild(categoryElement);
          }
          /* if(isInventoryGrid){
            isInventoryGrid.appendChild(categoryElement);
          } */
          updateCategoryWidths(categoryInvNav, numOfNavElements);
          updateAllCategoryElement(allCategoryElement, numOfNavElements);
        }
      }
      else{ //item is already in the player inventory, increment its quantity instead.
         console.log('Existing item found on player inventory and grid...');
         console.log('Original Quantity: ' + playerInventory[category][itemType][itemName]['quantity']);
         console.log('Current Player Inventory: ', playerInventory);
         console.log('Adding quantity...')
  
        playerInventory[category][itemType][itemName]['quantity'] += 1; 
        let quantity = playerInventory[category][itemType][itemName]['quantity'];
        const container = inventoryGrid.querySelector('.item-wrapper img[src="' + image + '"]').parentNode;
        const quantitySpan = container.querySelector('.banner').querySelector('.quantity-item');
        updateQuantityCount(quantitySpan, quantity);
  
        if (quantity > 1) {
          console.log('QUANTITY BANNER APPEARS ON INVENTORY GRID...')
          container.querySelector('.banner').classList.remove('hidden');
        }
      }
    }
    console.groupEnd();
  }
  
  function removeItemFromPlayer(image){
    console.group('REMOVING ITEM FROM INVENTORY GRID...')
    const gridContainer = document.querySelector('#inventory-grid');
    const categoryInvNav = document.querySelector('#category-inv-navbar');
    const containerToRemove = gridContainer.querySelector('.item-wrapper img[src="' + image + '"]').parentNode;
    
    const banner = containerToRemove.querySelector('.banner');
    const quantityElement = banner.querySelector('.quantity-item');
    const matchingImg = findMatchingImage(playerInventory, image);
    if(matchingImg){
      const { category, itemType, itemName, itemKeys } = matchingImg;
      console.log('category: ', category);
  
      //we cannot querySelect innerTexts of elements, so lets use filter instead. 
      const categoryToRemove = categoryInvNav.querySelector(`.${category}`);
      console.log('removing category: ', categoryToRemove);
  
      console.log('Original Quantity: ', playerInventory[category][itemType][itemName]['quantity']);
      console.log('Subtracting quantity from inventory grid item...');
  
      playerInventory[category][itemType][itemName]['quantity'] -= 1;
  
      console.log('New Quantity: ', inventory[category][itemType][itemName]['quantity']);
      let quantity = playerInventory[category][itemType][itemName]['quantity'];
      updateQuantityCount(quantityElement, quantity);
      
      if(quantity < 2){
        banner.classList.add('hidden');
  
        console.group('QUANTITY IS LESS THAN 2...');
        console.log('Removing Quantity Banner...')
        console.groupEnd();
      }
      if(quantity === 0){ //we have no more quantity so remove from player inventory on the grid and the object. 
        gridContainer.removeChild(containerToRemove); //remove the grid item from our inventory grid
        delete playerInventory[category][itemType][itemName]; //delete our item from inventory object
  
        if(Object.keys(playerInventory[category][itemType]).length === 0){
          categoryInvNav.removeChild(categoryToRemove);
          delete playerInventory[category]; //delete the whole category from player inventory
          const numOfNavElements = 1 + Object.keys(playerInventory).length;
          console.log('num of navs...: ', numOfNavElements);
          updateCategoryWidths(categoryInvNav, numOfNavElements);
          updateAllCategoryElement(categoryInvNav.querySelector('.all-category'), numOfNavElements);
        }
        console.group('QUANTITY is 0...');
        console.log('Removing grid item from Inventory Grid...')
        console.log('Deleting item from player inventory object');
        console.groupEnd();
      }
    }
    console.groupEnd();
  }
  
  //search through our shop inventory object that has the image that matches the one we grabbed from an event on shop grid.
  //This allows us to grab all the data we need from the shop inventory, we grab from our object because shop grid data may not contain all the info about our item.
  function findMatchingImage(objInventory, image) { 
    for (let category in objInventory) {
      for (let itemType in objInventory[category]) {
        for (let itemName in objInventory[category][itemType]) {
          if (objInventory[category][itemType][itemName]['image'] === image) {
             console.log('Matching Image Found w/ Data: ', { category, itemType, itemName, itemKeys: objInventory[category][itemType][itemName] });
            return { category, itemType, itemName, itemKeys: objInventory[category][itemType][itemName] };
          }
        }
      }
    }
  }
  function initializeInvObj(category, itemType, itemName){
    if(!playerInventory[category]){
      playerInventory[category] = {};
    }
    if (!playerInventory[category][itemType]) {
      playerInventory[category][itemType] = {};
    }
    
    if (!playerInventory[category][itemType][itemName]) {
      playerInventory[category][itemType][itemName] = {};
    }
  }
  
  /* ---------------------------------------------------------------------------------------------- */
  /*                                   POPULATENPC - MAKE OUR NPC                                   */
  /* ---------------------------------------------------------------------------------------------- */
  function populateNPC(name){
    const npc = document.querySelector('#npc')
    const image = document.createElement('img');
    image.src = NPC[name].image
    image.classList.add('npc');
    image.classList.add('flipX');
    image.id = name;
  
    const speechBubble = document.createElement('div');
    speechBubble.classList.add('textBubble');
  
    npc.appendChild(image);
    npc.appendChild(speechBubble);
  
    // Dispatch a custom event to signal that NPC has been populated
    const npcPopulatedEvent = new Event('npcPopulated');
    document.dispatchEvent(npcPopulatedEvent);
  }
  
  /* ---------------------------------------------------------------------------------------------- */
  /*                                BUY AND SELL BUTTON CLICK EVENTS                                */
  /* ---------------------------------------------------------------------------------------------- */
  
  document.querySelector('#buy-button').addEventListener('click', () => {
    document.querySelector('#sell-button').classList.add('gray-background')
    document.querySelector('#buy-button').classList.remove('gray-background')
    document.querySelector('#shop-grid').classList.remove('hidden')
    document.querySelector('#inventory-grid').classList.add('hidden')
  
    document.querySelector('#category-shop-navbar').classList.remove('hidden');
    document.querySelector('#category-inv-navbar').classList.add('hidden');
  })
  
  document.querySelector('#sell-button').addEventListener('click', () =>{
    document.querySelector('#buy-button').classList.add('gray-background')
    document.querySelector('#sell-button').classList.remove('gray-background')
    document.querySelector('#shop-grid').classList.add('hidden')
    document.querySelector('#inventory-grid').classList.remove('hidden')
  
    document.querySelector('#category-shop-navbar').classList.add('hidden');
    document.querySelector('#category-inv-navbar').classList.remove('hidden');
  })
  
  /* ---------------------------------------------------------------------------------------------- */
  /*                                       EXPORTED CONTENT                                         */
  /* ---------------------------------------------------------------------------------------------- */
  
  // Export all functions within an object
  export default {
    globalInventory,
    shopGrid,
    inventoryGrid,
    NPC,
    createNewInventory,
    populateNav,
    populateGrid,
    populateNPC,
    getRandomElementFromArray
  };
  
  /* export const shopObjects = {
    globalInventory,
    inventory
  }
  export const shopElements = {
    shopGrid,
    inventoryGrid,
  }
  export const shopFunctions = {
    createNewInventory,
    populateNav,
    populateGrid
  } */